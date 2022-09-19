_satellite.pushBlockingScript(function(event, target, $variables){
  if (!window.Array) {
	window.Array = {};
}
if (!window.Array.isArray) {
	window.Array.isArray = function(someVar) {
		return (Object.prototype.toString.call(someVar) === '[object Array]') ? true : false;
	};
}

window.pageDataTracker = (function() {
	var metatags = {}, pageName, pageType, siteSection, jsTime = new Date().getTime(), spotlightLinks = [];
	
	function getAccountId() {
		try {
			if (randlet.user.isLoggedIn) {
				return _satellite.readCookie('ic');
			}
		} catch(ex) {}
	}
	
	function setCookie(cookie, val) {
		if (!(cookie && val)) {
			return '';
		}
		
		try {
			_s.Util.cookieWrite(cookie, val);
		} catch(ex) {
			trackEvent('cookieError', {
				error: ex.toString()
			});
		}
	}
	
	function getTrackingCode() {
		var cmp = '', hasParams = false, params = [
			'medium'
			,'source'
			,'campaign'
			,'content'
			,'term'
		];
		
		for (var i=0; i<params.length; i++) {
			var val = _satellite.getQueryParamCaseInsensitive('utm_' + params[i]) || '';
			val = val && val.indexOf('#') > -1 ? val.substring(0, val.indexOf('#')) : val;
			
			cmp += (cmp ? '|' : '') + (val || 'no ' + params[i]);
			if (val) {
				hasParams = true;
			}
		}
		
		if (hasParams) {
			return cmp;
		}
	}
	
	function getPageName() {
		if (pageName) {
			return pageName;
		}
		
		var name = '', sites = [
			{ name: 'r', domain: 'rand.org' }
			,{ name: 'p', domain: 'prgs.edu' }
		];
		for (var i=0; i<sites.length; i++) {
			if (document.location.hostname.indexOf(sites[i].domain) > -1) {
				name = sites[i].name + '/';
			}
		}
		
		if (window.pageData && pageData.page && pageData.page.errorType) {
			name += 'error/' + pageData.page.errorType;	
		} else {
			var pageEls = document.location.pathname.replace(/content\//g, '').substring(1).split('/');
			if (pageEls[0] == '' && pageEls.length == 1) {
				pageEls[0] = 'home';
			}
			name += pageEls.slice(0, pageEls.length - 1).join('/').toLowerCase();
			pageEls[pageEls.length - 1] = pageEls[pageEls.length - 1].replace(/\.(html|do)/gi, '');
			name = name.lastIndexOf('/') == name.length - 1 ? name.substring(0, name.length - 1) : name;
			name += '/' + pageEls[pageEls.length - 1];
			
			if (!isNaN(parseInt(pageEls[pageEls.length - 1])) && window.pageData && pageData.page && pageData.page.titleTerms) {
				name += '-' + pageData.page.titleTerms;
			}
		}
		
		pageName = name;
		return pageName;
	}
	
	function isProductPage() {
		return pageDataTracker.getMetatag('DC.Identifier.Slug') ? true : false;
	}
	
	function isEmbeddedReadOnline() {
		
		var htmlTag = window.document.getElementsByTagName('html')[0];
		
		if(htmlTag.className.indexOf('readonline') !== -1){
			return true;
		} else {
			return false;
		}
	}
	
	function getSiteSection() {
		if (siteSection) {
			return siteSection;
		}
		
		if (!pageName) {
			pageName = getPageName();
		}
		
		siteSection = pageName ? pageName.split('/')[1] : 'other';
		
		return siteSection;
	}
	
	function getPageType() {
		if (pageType) {
			return pageType;
		}
		
		if (window.pageData && pageData.page && pageData.page.type) {
			pageType = pageData.page.type;
		} else {
			pageType = getMetatag('rand-content-category') || 'content';
		}
		
		if (pageType == 'content' && (siteSection == 'home' || siteSection == 'profile' || siteSection == 'search')) {
			pageType = siteSection;
		}
		
		return pageType;
	}
	
	function getPageLoadTime() {
		if (typeof(performance) !== 'undefined' && typeof(performance.timing) == 'object') {
			var timing = performance.timing;
			
			// fall back to less accurate milestones
			var startTime = performance.timing.redirectStart ||
					performance.timing.fetchStart ||
					performance.timing.requestStart;
			var endTime = performance.timing.domContentLoadedEventEnd ||
					performance.timing.domInteractive ||
					performance.timing.domComplete ||
					performance.timing.loadEventComplete;
			
			if (startTime && endTime && (startTime < endTime)) {
				return (endTime - startTime).toString();
			}
		}
	}
	
	function getTrackingTimestamp() {
		// divide by thousands for Unix
		if (window.pageData && pageData.page && pageData.page.timestamp && !isNaN(pageData.page.timestamp)) {
			if (Math.abs(pageData.page.timestamp - jsTime) < (1000 * 60 * 60 * 2)) {
				var t = new Date().getTime(), diff = t > jsTime ? t - jsTime : 0;
				return Math.round((pageData.page.timestamp + diff) / 1000);
			}
		}
		
		return '';
	}
	
	function getFormattedDate(d, format) {
		if (!d) {
			return '';
		}
		
		var dstEndpoints = {
			2012	: ['3/11', '11/4']
			,2013	: ['3/10', '11/3']
			,2014	: ['3/9', '11/2']
			,2015	: ['3/8', '11/1']
			,2016	: ['3/13', '11/6']
			,2017	: ['3/12', '11/5']
			,2018	: ['3/11', '11/4']
			,2019	: ['3/10', '11/3']
			,2020   : ['3/8', '11/1']
			,2021   : ['3/14','11/7']
		}
		,daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
		,serverDate = new Date(parseInt(d))
		,dstStart = new Date(dstEndpoints[serverDate.getFullYear()][0] + '/' + serverDate.getFullYear())
		,dstEnd = new Date(dstEndpoints[serverDate.getFullYear()][1]+ '/' + serverDate.getFullYear())
		,offset = -5 + (serverDate > dstStart && serverDate < dstEnd ? 1 : 0); // standard-time EST offset, after accounting for DST
		
		var utc = serverDate.getTime() + (serverDate.getTimezoneOffset() * 60000) // UTC
			d = new Date(utc + (3600000 * offset)); // EST
		
		// now do formatting
		var fmt
			,year = d.getFullYear()
			,month = ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1)
			,date = (d.getDate() < 10 ? '0' : '') + d.getDate()
			,day = daysOfWeek[d.getDay()]
			,hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
			,mins = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
			,ampm = d.getHours() > 11 ? 'pm' : 'am';
		
		hours = (hours < 10 ? '0' : '') + hours;
		
		switch (format) {
			case 'date':
				fmt = year + month + date;
				break;
			case 'day/time':
				fmt = day + ' ' + hours + ':' + mins + ' ' + ampm;
				break;
			case 'date/time':
				fmt = year + '-' + month + '-' + date + ' ' + hours + ':' + mins + ' ' + ampm;
				break;
			case 'timestamp':
				fmt = d.getTime();
				break;
		}
		
		return fmt;
	}
	
	function getContentDomInfo() {
		var fields = {};
		if (document.getElementById('tabpurchase')) {
			fields.purchase = true;
		}
		if (document.getElementById('relatedProducts')) {
			fields.related = $('#relatedProducts ul.teasers li').length;
		}
		return fields;
	}
	
	function loadDataFromMetatags() {
		var els = [
			'DC.creator'
			,'division'
			,'DC.Rights.Copyright'
			,'rand-date'
			,'DC.Format.Binding'
			,'DC.Format.Pages'
			,'DC.Publisher'
			,'rand-publication-series'
			,'DC.Title'
			,'rand-content-type'
			,'title-terms'
			,'rand-tag'
			,'rand-content-category'
			,'rand-visitor-type'
			,'DC.Identifier.Slug'
		];
		
		var metas = document.getElementsByTagName('meta');
		for (var i=0; i<metas.length; i++) {
			for (var j=0; j<els.length; j++) {
				if (els[j] == metas[i].getAttribute('name')) {
					var val = (metas[i].getAttribute('content') || '');
					if (val && val != '0') {
						if (Array.isArray(metatags[els[j]])) {
							metatags[els[j]].push(val);
						} else if (metatags[els[j]]) {
							// convert to array
							metatags[els[j]] = [metatags[els[j]], val];
						} else {
							metatags[els[j]] = val;
						}
					}
				}
			}
		}
	}
	
	function getMetatag(name) {
		if (metatags[name]) {
			return Array.isArray(metatags[name]) ? metatags[name].join('|') : metatags[name];
		}
		return '';
	}
	
	function getSpotlightLinks() {
		return spotlightLinks;
	}
	
	function wireEventTracking() {
		try {
			wireNavTracking(jQuery);
			wireSearchResultTracking(jQuery);
			wireProductClickTracking(jQuery);
			wireSpotlightTracking(jQuery);
		} catch(ex) {}
	}
	
	function wireSpotlightTracking($) {
		try {
			$('ul[data-teaser-id]').each(function() {
				var $teaserBlock = $(this);
				$teaserBlock.find('li[data-content-id]').each(function() {
					var $this = $(this);
					spotlightLinks.push({
						id			: $this.attr('data-content-id')
						,location	: $teaserBlock.attr('data-teaser-id')
					});
					
					$this.on('click', function() {
						setCookie('v47', $teaserBlock.attr('data-teaser-id'));
						setCookie('e3', $this.attr('data-content-id'));
					});
				});
			});
			
			$('#relatedProducts li, ul[data-teaser-id="related resources"] li, ul[data-teaser-id="recommended products"] li').on('click', 'a', function(e) {
				var $this = $(this), $parent = $(e.delegateTarget), href = $this.attr('href');
				var id = $parent.attr('data-content-id') || '', relatedId;
				if (window.pageData && pageData.content && pageData.content.length > 0) {
					relatedId = pageData.content[0].id;
				} else {
					relatedId = 'non-content page';
				}
				setCookie('e3', id);
				setCookie('v10', relatedId);
			});
		} catch(ex) {}
	}
	
	function wireProductClickTracking($) {
		if (isProductPage()) {
			$('a.citation').on('click', function() {
				trackEvent('citationClick');
			});
			
			$('a.look-inside').on('click', function() {
				trackEvent('readOnlineClick');
			});
		}
	}
	
	function wireNavTracking() {
		$('header, footer').on('click', 'a', function() {
			var $this = $(this), $parent = $this.parents('li[aria-haspopup]'), text = $this.text() || $this.attr('href'), parentText;
			var menu = $this.parents('header').length > 0 ? 'header' : 'footer';
			if (!text && $this.attr('href') == '/') {
				text = 'logo';
			}
			if (text) {
				if ($parent) {
					parentText = $parent.find('a.dd-toggle').text();
					if (parentText && parentText != text) {
						text = parentText + ':' + text;
					}
				}
        text = menu + ':' + text;
				setCookie('c12', text.toLowerCase());
			}
		});
	}
	
	function wireSearchResultTracking(jQuery) {
		$('#results').on('click', 'ul.organic li a', function() {
			var $link = $(this), $el = $link.parents('li:first'), $container = $link.parents('ul.organic');
			var pos, type = $el.find('p.type').text(), score = $el.attr('data-relevancy');
			score = score.indexOf('.') == -1 ? '' : score;
			$container.find('li').each(function(i) {
				if (this == $el[0]) {
					var currentPage, perPage;
					if (window.eventData && eventData.search && eventData.search.currentPage && eventData.search.resultsPerPage) {
						currentPage = parseInt(eventData.search.currentPage);
						perPage = parseInt(eventData.search.resultsPerPage);
					} else if (window.pageData && pageData.search && pageData.search.currentPage && pageData.search.resultsPerPage) {
						currentPage = parseInt(pageData.search.currentPage);
						perPage = parseInt(pageData.search.resultsPerPage);
					} else {
						currentPage = 1;
						perPage = 20;
					}
					pos = ((currentPage - 1) * perPage) + (i + 1);
					return false;
				}
			});
			
			if (pos) {
				setCookie('v21', pos);
			}
			if (type) {
				setCookie('v22', type);
			}
			if (score) {
				setCookie('v51', score);
			}
		});
	}
	
	function trackPageLoad() {
		wireEventTracking();
		_satellite.pageBottom();
		
	}
	
	function trackEvent(event, data) {
		window.eventData = {};
		if (!event) {
			return false;
		}
		
		if (data) {
			window.eventData = data;
			eventData.eventName = event;
		}
		
		if (event == 'mediaEvent' && window.s_Obj && data && data.media && data.media.eventName && data.media.id && (data.media.id !== 'rundefined')) {
			switch(data.media.eventName) {
				case 'start':
					_s.Media.open(data.media.id, data.media.length, s_Obj.Media.playerName);
		           	_s.Media.play(data.media.id, data.media.offset || 0);
					break;
				case 'play':
					_s.Media.play(data.media.id, data.media.offset);
					break;
				case 'pause':
					_s.Media.stop(data.media.id, data.media.offset);
					break;
				case 'complete':
					_s.Media.stop(data.media.id, data.media.length);
					_s.Media.close(data.media.id);
					break;
			}
		} else if (event == 'teaserClick' && data.id && data.location) {
			setCookie('v47', data.location);
			setCookie('e3', data.id);
		}
		
		_satellite.track(event);
	}
	
	loadDataFromMetatags();
	
	return {
		isProductPage			: isProductPage
		,isEmbeddedReadOnline	: isEmbeddedReadOnline
		,getTrackingTimestamp	: getTrackingTimestamp
		,getPageLoadTime		: getPageLoadTime
		,getPageName			: getPageName
		,getSiteSection			: getSiteSection
		,getPageType			: getPageType
		,getFormattedDate		: getFormattedDate
		,getContentDomInfo		: getContentDomInfo
		,getTrackingCode		: getTrackingCode
		,getMetatag				: getMetatag
		,getAccountId			: getAccountId
		,getSpotlightLinks		: getSpotlightLinks
		,trackPageLoad			: trackPageLoad
		,trackEvent				: trackEvent
	};
})();
});
