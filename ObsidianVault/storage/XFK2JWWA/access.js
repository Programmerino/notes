window.TNCMS = window.TNCMS || {};
var aCallbacks = window.TNCMS.Access || [];

/* {{{ Initializer: TNCMS.Access */

/**
 * Client side access checks
 *  
 */
window.TNCMS.Access = (function() {
	
	/* {{{ Properties */
	
	var aRules = null,
		aMeters = null,
		bLoaded = false,
		aAudiences = null,
		aRequiresClient = null,
		aCriteriaIDs = [],
		aAccessIDs = [],
		nWaitID = null,
		nTries = 0,
		sAssetID = '',
		sAssetApp = '',
		onSuccess = null,
		onFailure = null,
		sRuleVersion = '',
		bIncognito = false,
		oProfile = {};
	
	/* }}} */
	
	/* {{{ isPrivateMode() */
	
	/**
	 * This function is copypasta from a freely available solution:
	 * https://gist.github.com/jherax/a81c8c132d09cc354a0e2cb911841ff1
	 * 
	 * When this solution needs to be changed in response to anti-detection measures,
	 * Expectation is that this function will start some async process that sets bIncognito
	 */
	function isPrivateMode() {
		return new Promise(function(resolve) {
			var yes = function() { // is in private mode
				bIncognito = true;
				resolve(true);
			};
			
			var not = function() {
				resolve(false); // not in private mode
			};
			
			var testLocalStorage = function() {
				try {
					if (localStorage.length) not();
					else {
						localStorage.x = 1;
						localStorage.removeItem('x');
						not();
					}
				} catch (e) {
					// Safari only enables cookie in private mode
					// if cookie is disabled, then all client side storage is disabled
					// if all client side storage is disabled, then there is no point
					// in using private mode
					navigator.cookieEnabled ? yes() : not();
				}
			};
			
			// Chrome & Opera
			var fs = window.webkitRequestFileSystem || window.RequestFileSystem;
			if (fs) {
				if ('storage' in navigator && 'estimate' in navigator.storage) {
					navigator.storage.estimate().then(function(estimate) {
						if (estimate.quota < 120000000) {
							return yes();
						}
						
						return not();
					});
					return void 0;
				} else {
					return void fs(window.TEMPORARY, 100, not, yes);
				}
			}
			// Firefox
			if ('MozAppearance' in document.documentElement.style) {
				if (indexedDB === null) return yes();
				var db = indexedDB.open('test');
				db.onerror = yes;
				db.onsuccess = not;
				return void 0;
			}
			// Safari
			var isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
			if (isSafari) {
				var version = parseInt(isSafari[1], 10);
				if (version < 11) return testLocalStorage();
				try {
					window.openDatabase(null, null, null, null);
					return not();
				} catch (_) {
					return yes();
				}
			}
			// IE10+ & Edge InPrivate
			if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
				return yes();
			}
			// default navigation mode
			return not();
		});
	}
	
	/* }}} */
	
	/* {{{ handleError( oData ) */
	
	function handleError( oData ) {
		var oErr = {
			success: false,
			msg: oData.msg || 'Unknown error occurred',
			xhrStatus: oData.status || '',
			xhrStatusText: oData.statusText || ''				
		};
		
		verbose('Error: ', oErr);
		
		if ( typeof onFailure == 'function' ) {
			onFailure.call(this, oErr);
		}
	};
	
	/* }}} */
	/* {{{ verbose( sMsg ) */
	
	function verbose( sMsg, oData ) {
		if ( ! console ) return;
		
		if ( typeof oData != 'undefined' ) {
			console.debug('TNCMS.Access: ' + sMsg, oData);
		} else {
			console.debug('TNCMS.Access: ' + sMsg);
		}		
	};
	
	/* }}} */
	/* {{{ getMetaValue( sField ) */
	
	function getMetaValue( sField ) {
		var aMeta = document.getElementsByName(sField);		
		if ( aMeta && aMeta.length ) {
			for ( n = 0; n < aMeta.length; n++ ) {
				return aMeta[n].content;				
			}
		}		
		
		return '';
	};
	
	/* }}} */
	/* {{{ init() */
	
	/**
	 * Initialize the subsystem and begin the chain of 
	 * requests to check access on a page starting with 
	 * the load of rules, user data and audiences if needed.
	 * 
	 */
	function init() {
		
		// Start async processing to check if the browser is incognito
		isPrivateMode();

		// Extract asset ID and app if in preview
		
		sAssetID = getMetaValue('tncms-access-asset-id');
		verbose('Asset ID', sAssetID);
		
		sAssetApp = getMetaValue('tncms-access-asset-app');
		verbose('Asset app', sAssetApp);			
	
		// Extract criteria IDs
		
		aCriteriaIDs = getMetaValue('tncms-criteria-ids').split(',');
		verbose('Criteria IDs', aCriteriaIDs);

		// Extact rule version
				
		sRuleVersion = getMetaValue('tncms-access-version');		
		verbose('Rule version', sRuleVersion);		
		
		if ( aRules !== null ) {
			processRules.call(this);
			return;
		}		
		
		loadRules.call(this);
	};

	/* }}} */
	/* {{{ loadRules() */
	
	/**
	 * Call out to the system to gather all enabled
	 * rules and other metadata to fulfill the access check.
	 * 
	 */
	function loadRules() {			
		var oRequest = new Request({
			url: 'rules/',
			headers: [{ name: 'X-TNCMS-Access-Version', value: sRuleVersion}],
			success: function ( oResp ) {
				var oData = JSON.parse(oResp.responseText);
				if ( oData.success == false ) {
					handleError(oData);
					return;
				}
				
				aRules = oData.rules;	
				aMeters = oData.meters || [];
				aRequiresClient = oData.requires_client || [];			
				
				verbose('Rules loaded', aRules);
				verbose('Meters loaded', aMeters);
				
				loadUser.call(this);
			},
			failure: handleError,
			scope: this
		});
		
		oRequest.send();
	};
	
	/* }}} */	
	/* {{{ loadUser( oParams ) */
	
	function loadUser( oParams ) {
		var aCookies = decodeURIComponent(document.cookie).split(';'),
			oMatch = null,
			n = 0,
			aHeaders = [],
			sUser = 'anonymous';
		
		for ( n; n < aCookies.length; n++ ) {
			oMatch = aCookies[n].match(/tncms-screenname=(.+)$/i);
			if ( oMatch
				// Make sure they're actually logged in
				&& document.cookie.indexOf('tncms-authtoken') > -1
			) {
				sUser = 'loggedin-' + oMatch[1];
			}
			oMatch = aCookies[n].match(/tncms-access-user-version=(.+)/i);
			if ( oMatch ) {
				aHeaders.push({ name: 'X-TNCMS-Access-User-Version', value: oMatch[1] });
			}
		}
				
		aHeaders.push({ name: 'X-TNCMS-Access-User', value: sUser});
		
		var oParams = false;
		if ( sAssetID && sAssetApp 
			&& document.location.pathname.match(
				/\/(.+?)\/tncms\/admin\/action\/main\/preview\/site\//
			)
		) {
			oParams = {
				asset_id: sAssetID,
				asset_app: sAssetApp
			};
			
			// Look for sessionStorage data only in preview mode
			
			if ( sessionStorage.getItem('accessProfile') ) {
				try {
					
					oProfile = JSON.parse(sessionStorage.getItem('accessProfile'));
					verbose('Using test profile', oProfile);
					
					// Profile ID is included for XHR request to /user 
					// so it can test against profile data associated to ID.
					oParams.profile = oProfile.id;
					
					let sKey = '',
						nCount = 0;
					
					for ( sKey in oProfile ) {
						if ( ! oProfile.hasOwnProperty(sKey) ) continue;
						
						oMatch = sKey.match(/meter_(.+)$/i);
						if ( oMatch ) {
							// set meter to defined number or 0
							nCount = parseInt(oProfile[sKey], 10) || 0;
							setMeterCount('tncms:meter:assets' + oMatch[1], nCount);
						}
						
						if ( sKey == 'dmp' ) {
							try {
								let aProfileAud = JSON.parse(oProfile[sKey]);
								aAudiences = [];
								for ( let n = 0; n < aProfileAud.length; n++ ) {
									aAudiences.push(aProfileAud[n].abbr);
								}
								verbose('Using profile audiences', aAudiences);
							} catch ( oExc ) {
								verbose('Failed to parse profile audiences', oExc);
							}
						}
					}
					
					verbose('Meters set to profile configuration');
					
				} catch ( oExc ) {
					verbose('Failed to parse test profile', oExt);
				}
			}
		}
		
		var oRequest = new Request({
			url: 'user/',
			headers: aHeaders,
			params: oParams,
			success: function ( oResp ) {					
				var oData = JSON.parse(oResp.responseText);				
				if ( oData.success == false ) {
					handleError(oData);
					return;
				}	
				
				if ( oData.access_ids && oData.access_ids.length ) {
					aAccessIDs = aAccessIDs.concat(oData.access_ids);
				}
				if ( oData.criteria_ids && oData.criteria_ids.length ) {
					aCriteriaIDs = aCriteriaIDs.concat(oData.criteria_ids);
				}
				
				verbose('User loaded', aAccessIDs);
				
				bLoaded = true;
				processRules.call(this);
			},
			failure: handleError,
			scope: this
		});
		
		oRequest.send();
	};
	
	/* }}} */
	/* {{{ processRules() */
	
	/**
	 * Process all gathered rules and return an 
	 * object containing the response data.
	 * 
	 */
	function processRules() {
		if ( ! bLoaded ) {
			return;
		}		
		// if audiences are required but have not yet been loaded
		if ( aRequiresClient.indexOf('dmp') !== -1 && aAudiences == null ) {
			return;
		}
		
		verbose('Processing rules');
		
		var kRule = [],
			kCriteria = [],
			n = i = r = 0,
			nRequired = 0,
			nProcessed = 0;
		
		var oResp = {
			required: false,
			access_methods: [],
			access_rule: {}
		};

		// Examine all rules
		
		for ( n = 0; n < aRules.length; n++ ) {		
			kRule = aRules[n];
			nRequired = 0;
			nProcessed = 0;
			
			verbose('Processing rule ' + kRule.name);
			
			// All criteria for a rule must match 
			
			for ( i = 0; i < kRule.criteria.length; i++ ) {
				kCriteria = kRule.criteria[i];
				nProcessed++;
				
				verbose('Processing criteria', kCriteria.name);				
				
				switch ( kCriteria.driver ) {
				case 'metercheck':
					let sMeterID = kCriteria.data.meter,
						nViews = kCriteria.data.views,
						sMeterOp = kCriteria.data.op,
						nMeter = 0,
						kMeter = {};
					
					if ( kCriteria.negate == 1 ) {
						verbose('Negate is not supported by meter check');
					}
					
					for ( nMeter; nMeter < aMeters.length; nMeter++ ) {
						kMeter = aMeters[nMeter];
						if ( kMeter.id == sMeterID ) {
							verbose('Checking meter ' + kMeter.name);
							let nMeterCount = getMeterCount('tncms:meter:assets' + kMeter.id);
							switch ( sMeterOp ) {
							case '=':
								if ( nMeterCount == nViews ) {
									verbose('Meter count equals views');
									nRequired++;
								}
								break;
							case '<':
								if ( nMeterCount < nViews ) {
									verbose('Meter count is less than views');
									nRequired++;
								}
								break;
							case '<=':
								if ( nMeterCount <= nViews ) {
									verbose('Meter count is less than or equal to views');
									nRequired++;
								}
								break;
							case '>':
								if ( nMeterCount > nViews ) {
									verbose('Meter count is greater than views');
									nRequired++;
								}
								break;
							case '>=':
								if ( nMeterCount >= nViews ) {
									verbose('Meter count is greater than or equal to views');
									nRequired++;
								}
								break;
							}
						}
					}
					break;
					
				case 'dmp':
					verbose('Processing DMP', aAudiences);					
					for ( r = 0; r < kCriteria.data.dmp.length; r++ ) {
						var oDMP = kCriteria.data.dmp[r];
						// Test profile will have defined aAudiences if DMP was used
						if (aAudiences.indexOf(oDMP.abbr) !== -1) {
							if (kCriteria.negate != 1) {
								verbose('Found audience', kCriteria);
								nRequired++;
								break;
							}
						}
					}
					break;
				case 'referrer':					
					var sReferrer = document.referrer.toLowerCase(),
						aCheckReferrer = kCriteria.data.referrer,
						sCheck = '',
						bExists = false;
					// Test profile declared referrer
					if ( oProfile.referrer ) {
						verbose('Using profile referrer', oProfile.referrer);
						sReferrer = oProfile.referrer;
					}
					
					verbose('Processing referrer', sReferrer);
					
					if ( sReferrer && sReferrer.length > 0 ) {
						for ( r = 0; r < aCheckReferrer.length; r++ ) {
							sCheck = aCheckReferrer[r].name.toLowerCase();						
							bExists = sReferrer.indexOf(sCheck) !== -1;					
							if ( bExists && kCriteria.negate != 1 ) {
								verbose('Found referrer', kCriteria);
								nRequired++;
								break;
							}
						}
					}
					break;
				case 'adblock':
					var bActive = false;
					var bBlocked = false;
					var bNegate = (kCriteria.negate == 1); // get criteria's negation as a boolean to compare bBlocked against

					// Test profile declared adblock
					if ( oProfile.adblock ) {
						verbose('Using profile adblock', true);
						bActive = bBlocked = true;
					}
					else if (window.dataLayer) {
						bActive = true;
						window.dataLayer.forEach(function(oItem) {
							if (oItem.event == 'tncms.ad.blocked') {
								bBlocked = true;
							}
						});
					}

					if ( bActive && bBlocked != bNegate ) {
						nRequired++;
					}
					break;
				case 'incognito':
					var bNegate = (kCriteria.negate == 1); // get criteria's negation as a boolean to compare bIncognito against
					// Test profile declared incognito mode
					if ( oProfile.incognito ) {
						verbose('Using profile incognito mode', true);
						bIncognito = true;
					}
					if (bIncognito != bNegate) {
						nRequired++;
					}
					break;
					
				case 'custom':
					verbose('Processing custom', kCriteria.name);
					
					let bRequired = null;
					
					try {
						
						let oFunc = new Function(kCriteria.data.javascript);
						
						bRequired = oFunc();
						
					} catch ( oErr ) {
						verbose('Custom function did not execute properly', oErr);
					}
					
					if ( typeof bRequired !== 'boolean' ) {
						verbose('Custom function did not return a boolean', bRequired);
					} else if ( bRequired === true && kCriteria.negate != 1 ) {
						verbose('Custom JS requires access');
						nRequired++;
					} else if ( bRequired === false && kCriteria.negate == 1 ) {
						verbose('Custom JS requires access (negated)');
						nRequired++;
					}
					
					break;
				default:					
					if ( aCriteriaIDs.indexOf(kCriteria.id) !== -1 ) {
						nRequired++;
					}				
					break;
				}
			}
			
			verbose('Total criteria processed: ', nProcessed);
			verbose('Total matching criteria: ', nRequired);
			
			// There is at least 1 criteria and all criteria matched			
			// Check if the user has any access granted for the rule
			// that has just been matched.
			
			if ( nProcessed && nProcessed == nRequired ) {	
				verbose('Access required');
				oResp = hasAccess.call(this, kRule);
				break;
			}
		}
		
		onSuccess.call(this, oResp);
	};	
	
	/* }}} */
	/* {{{ hasAccess( kRule ) */
	
	/**
	 * Check if a user has any access methods that the rule
	 * is configured to use for access.
	 */
	function hasAccess( kRule ) {	
		var oAccessAllowed = {
			required: false,
			access_rule: {},
			access_methods: [],
			access_meter: null
		};
		
		var sNS = 'tncms:meter:assets',
			nCount = 0,
			kMethod = {},
			aReturnMethods = [],
			bMetered = false;
		
		for ( var n = 0; n < kRule.methods.length; n++ ) {
			kMethod = kRule.methods[n];	
			verbose('Examining access method', kMethod);
			
			// If they are viewing an asset page
			// and this meter is in the list of meters they have access to
			
			if ( kMethod.type == 'meter' && sAssetID ) {				
				for ( var y = 0; y < aMeters.length; y++ ) {
					verbose('Examining meter', aMeters[y]);		
					// If this meter is in the list of possible meters
					if ( kMethod.id == aMeters[y].id ) {						
 						nCount = getMeterCount(sNS + kMethod.id);  						
 						verbose('Meter applies at limit ', aMeters[y].meter); 	
 						verbose('Current count', nCount); 						
 						// The asset has already been viewed via a meter
 						var aStorage = JSON.parse(sessionStorage.getItem(sNS)) || [];
 						if ( aStorage && aStorage.length && aStorage.indexOf(sAssetID) !== -1 ) {
 							oAccessAllowed.access_meter = aMeters[y];
 							verbose('Asset already viewed, allowing access', oAccessAllowed);
 							bMetered = true;
 						// The meter has gone passed it's range
 						} else if ( nCount >= aMeters[y].meter ) {
 							verbose('Views exceeded meter limit');
 							nCount++;
 							setMeterCount(sNS + kMethod.id, nCount);
						// Provide access based on new metered view
 						} else { 							
 							nCount++;
 							setMeterCount(sNS + kMethod.id, nCount); 
 							aStorage = aStorage || [];
 							aStorage.push(sAssetID);
 							sessionStorage.setItem(sNS, JSON.stringify(aStorage)); 							
 							oAccessAllowed.access_meter = aMeters[y];
 							oAccessAllowed.access_meter.count = nCount;
 							verbose('Access provided by meter', oAccessAllowed);
 							bMetered = true;
 						}
					}
				}
				
				if ( bMetered ) {
					return oAccessAllowed;
				}
				
			} else if ( aAccessIDs.indexOf(kMethod.id) !== -1 ) {
				verbose('Access provided by method', kMethod);
				return oAccessAllowed;
			} else if ( kMethod.type == 'customjavascript' ) {
				try {
					
					let oFunc = new Function(kMethod.metadata.js),
						oObj = oFunc();
					
					if ( oObj && oObj.has_access ) {
						verbose('Access provided by custom javascript method', kMethod);
						return oAccessAllowed;
					}
					
					kMethod['response'] = oObj.data || {};
					aReturnMethods.push(kMethod);
					verbose('Added access method', kMethod);
					
				} catch ( oErr ) {
					verbose('Custom javascript method did not execute properly', oErr);
				}				
			} else {				
				// Remaining methods are returned as options to gain access
				aReturnMethods.push(kMethod);
				verbose('Added access method', kMethod);
			}
		}
		
		var oResp = {
			required: true,
			access_rule: kRule,
			access_methods: aReturnMethods
		};
		
		verbose('Access response', oResp);
		
		return oResp;
	};
	
	/* }}} */	
	/* {{{ getMeterCount( sID ) */
	
	function getMeterCount( sID ) {
		var aCookies = decodeURIComponent(document.cookie).split(/\s*?;\s*/),
			nCount = 0;
	
		for ( var n = 0; n < aCookies.length; n++ ) {
			sCookie = aCookies[n];			
			if ( sCookie.indexOf(sID) === 0 ) {				
				oMatch = sCookie.match(/=(\d+)/);
				if ( oMatch ) {					
					nCount = parseInt(oMatch[1]);								
					break;
				}
			}
		}
		
		return nCount;
	};
	
	/* }}} */
	/* {{{ setMeterCount( sID ) */
	
	function setMeterCount( sID, nCount ) {
		var oExpires = new Date();
				
		oExpires.setDate(1);
		oExpires.setMonth(oExpires.getMonth() + 1);		
		oExpires.setHours(0);
		oExpires.setMinutes(0);
		oExpires.setSeconds(0);
		
		document.cookie = sID + '=' + nCount + '; expires=' + oExpires.toGMTString() + '; path=/; SameSite=Strict';
	};
	
	/* }}} */
	/* {{{ Request( oCfg ) */
	
	/**
	 * Request class to handle sending an receiving
	 * requests from the server.
	 */
	var Request = function( oCfg ) {
		if ( ! oCfg.url || ! oCfg.success ) {
			throw 'Missing URL or handler';
		}

		function _success( oEvt ) {
			if ( oEvt.target.status >= 400 ) {				
				if ( typeof this.failure == 'function' ) {
					this.failure.call(this.scope, this);
				}				
			} else if ( typeof this.success == 'function' ) {
				this.success.call(this.scope, this);
			}
		};
		
		function _failure( oEvt ) {
			if ( typeof this.failure == 'function' ) {
				this.failure.call(this.scope, oEvt);
			}
		};
		
		function _request() {
			this.request = new XMLHttpRequest();
			this.request.success = oCfg.success;
			this.request.failure = oCfg.failure;
			this.request.scope = oCfg.scope || this;
			this.request.addEventListener("load", _success);			
			this.request.addEventListener("error", _failure);
			
			var sURL = '',
				oMatch = document.location.pathname.match(
					/\/(.+?)\/tncms\/admin\/action\/main\/preview\/site\//
				),
				sHost = document.location.hostname;
			
			if ( oMatch ) {
				sHost = oMatch[1];
			} 
			
			sURL = 'https://' + sHost + '/tncms/access/' + oCfg.url;				
			
			if ( oCfg.params ) {
				var aParams = [];
				for ( var s in oCfg.params ) {
					aParams.push(s + '=' + encodeURIComponent(oCfg.params[s]));
				}
				sURL += '?' + aParams.join('&');
			}
		
			this.request.open(oCfg.method || 'GET', sURL, true);
			
			if ( oCfg.headers && oCfg.headers.length ) {
				var oHeader = null;
				for ( var n = 0; n < oCfg.headers.length; n++ ) {
					oHeader = oCfg.headers[n];
					this.request.setRequestHeader(oHeader.name, oHeader.value);
				}
			}			
			
			this.request.send();
		};
		
		return {
			
			/* {{{ new Request */
			
			/**
			 * Create an instance of the request object
			 * 
			 * @param obj {
			 * 	url string 
			 * 		URL fragment endpoint for access controller
			 * 	method string
			 * 		If something other than GET is needed it can be
			 * 		passed here. 
			 *  params obj
			 *  	An object of param names and values to include
			 *  	in the request
			 *  	{
			 *  		paramName: '11111'
			 *  	}
			 *  headers obj[]
			 *  	An array of name/value objects
			 *  	[{
			 *  		name: 'Cache-Control',
			 *  		value: 'private, max-age=86400'
			 *  	}]
			 * 	success fn 
			 * 		Called when the request has completed. The 
			 * 		function is passed the response object.
			 * 	failure fn
			 * 		Called upon failure. The function is passed
			 * 		the response object.
			 * 	scope obj
			 * 		If passed will call the function with the
			 * 		scope object.
			 * }
			 *
			 */
			
			/* }}} */
			/* {{{ send() */
			
			/**
			 * Send a configured request to the server
			 * 
			 */
			send: _request
			
			/* }}} */
		}
	};
		
	/* }}} */
	/* {{{ API: TNCMS.Access */
	
	return {
		
		/* {{{ checkAcess( fnSuccess, fnFailure ) */
		
		/**
		 * Check if access is required to view content
		 * on this page.
		 * 
		 * @param fnSuccess func
		 * 	Called when the access check is complete. The function
		 * 	is passed an access check response object.
		 * 
		 * 	If access was provided by a meter then the `access_meter`
		 * 	will be populated with the meter that was used.
		 * 
		 * 	response {
		 * 		required: true|false,
		 * 		access_methods: [{ 
		 * 			id: '', 
		 * 			name: '', 
		 * 			type: '' 
		 * 		}],
		 * 		access_rule: \TNCMS\Access\Rule,
		 * 		access_meter: {
		 * 			id: '', 
		 * 			name: '', 
		 * 			meter: 0, 
		 * 			count: 0,
		 * 			messages: [{
		 * 				id: '', 
		 * 				message:, '', 
		 * 				show_at: 0
		 * 			}]
		 *      }
		 * 	}
		 * 
		 * @param fnFailure func
		 * 	Called when a check fails for an unknown reason. The
		 * 	function is passed anonymous object containing information
		 * 	about the error.
		 * 
		 * 	err {
		 * 		success: false,
		 * 		msg: 'Error message'
		 * 	}
		 * 	
		 */
		checkAccess: function ( fnSuccess, fnFailure ) {
			if ( typeof fnSuccess !== 'function' ) {
				throw 'Access success not defined';
			}
			
			onSuccess = fnSuccess;
			onFailure = fnFailure;
			
			init.call(this);
		}, 
		
		/**
		 * Revalidate an access check if it needs to be done
		 * again on the same page load, for example if an
		 * access method is completed via an ajax request.
		 * 
		 * @see checkAccess
		 * 
		 * @param fnSuccess
		 * @param fnFailure
		 */
		revalidateAccess: function ( fnSuccess, fnFailure ) {
			if ( typeof fnSuccess !== 'function' ) {
				throw 'Access success not defined';
			}
						
			onSuccess = fnSuccess;
			onFailure = fnFailure;
			
			var nTimeStamp = Math.round((new Date()).getTime() / 1000);
			
			document.cookie = 'tncms-access-user-version=' + nTimeStamp + '; path=/; SameSite=Strict';
			// reload user data to see if they now have access
			loadUser.call(this);
		},
	
		/* }}} */
		
		/**
		 * Set audience data for this class then call processRules
		 * since that method relies on this data. If audiences has 
		 * already been initialized it return. Audiences may have been
		 * set through a test profile if in preview mode.
		 * 
		 * @param array aResult
		 *  The array of audience data objects
		 */
		setAudiences: function(aResult) {
			if ( aAudiences && aAudiences.length > 0 ) {
				verbose('Audiences already initialized', aAudiences);
				return;
			}
			
			aAudiences = aResult || [];
			verbose('Setting audiences', aResult);
			processRules.call(this);
		},
		
		/**
		 * Process queued functions when the access library has loaded
		 * 
		 * Allows for asyncronous setup and execution of the access library. The
		 * order of registration doesn't matter as either will result in the
		 * proper execution of the library.
		 * 
		 * @param {TNCMS~Access~Push} fnCallback
		 *  Function to process when the class loads
		 */
		push: function(fnCallback) {
			try {				
				if ( typeof fnCallback !== 'function' ) {
					throw 'Value provided is not a function';
				}
				
				fnCallback();
			} catch ( oErr ) {
				console.log(oErr);
			}
		}		
	};
	
	/* }}} */
	
})();


/**
 * Callback that is processed by the push() method of the TNCMS.Access class
 * @callback TNCMS~Access~Push
 */

// Trigger any pushable callbacks

for( let nItem = 0; nItem < aCallbacks.length; nItem++ ) {
	window.TNCMS.Access.push(aCallbacks[nItem]);
}
