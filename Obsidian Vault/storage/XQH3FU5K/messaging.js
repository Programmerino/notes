// Declare TNCMS namespace if not declared

if (!window.TNCMS) {
	window.TNCMS = {}; 
}

window.TNCMS.Messaging = (() => {

	"use strict";
	
	let oFirebase = null;
	
	return {
		
		/**
		 * Initialize firebase and service worker
		 * 
		 * @param object oConfig
		 * 	The configuration object as expected by firebase.initializeApp()
		 */
		init: (oConfig) => {
			
			if ('serviceWorker' in navigator) {
				
				oFirebase = firebase.initializeApp(oConfig, 'tncms-notifier');
				
				navigator.serviceWorker.register('/tncms/messaging/service-worker/').then((oWorker) => {
					const oMessaging = firebase.messaging(oFirebase);
					oMessaging.useServiceWorker(oWorker);
				}).catch(function(sError) {
					throw new Error('Failed to register service worker: ' + sError);
				});

			} else {
				
				throw new Error('Service workers are disabled or not supported');

			}
			
		},
		
		onMessage: (fnCallback) => {
			
			if (typeof fnCallback !== 'function') {
				throw new Error('Callback provided to onMessage() handler is not a function');
			}
			
			const oMessaging = firebase.messaging(oFirebase);
			
			oMessaging.onMessage(function(oPayload) {
				
				let oResponse = {};
				
				console.log('Broadcast notification received', oPayload);
				
				if (!oPayload.notification) {
					throw new Error('Malformed broadcast notification received - missing notification');
				}
				
				if (!oPayload.notification.title) {
					throw new Error('Missing title in notification message');
				}
				
				oResponse.title = oPayload.notification.title;
				
				if (oPayload.notification.body) {
					oResponse.body = oPayload.notification.body;
				}
				
				if (oPayload.notification.icon) {
					oResponse.icon = oPayload.notification.icon;
				}
				
				if (!oPayload.data && !oPayload.data.url) {
					throw new Error('Malformed broadcast notification - missing asset URL');
				}
				
				oResponse.url = oPayload.data.url;
				
				if (oPayload.data.asset_id) {
					oResponse.asset_id = oPayload.data.asset_id;
				}
				
				fnCallback(oResponse);
			});
		},
	
		subscribe: (sTopic = 'all') => {
			
			return new Promise((resolve, reject) => {
				
				const oMessaging = firebase.messaging(oFirebase);
				
				Notification.requestPermission().then(() => {
					oMessaging.getToken().then((sToken) => {
						if (sToken) {
							
							let oReq = new Request('/tncms/messaging/subscribe/', {
								method: 'POST',
								body: JSON.stringify({
									token: sToken,
									topic: sTopic
								})
							});
							
							fetch(oReq).then((oRes) => {
								let sContentType = oRes.headers.get('content-type');
								if (sContentType && sContentType.includes('application/json')) {
									return oRes.json();
								}
								
								throw new TypeError('Non-JSON response from server received');
							}).then((oRes) => {
								console.log('Subscribe from topic: ' + sTopic);
								resolve(oRes);
							}).catch((sErr) => {
								console.log('Subscribe failed: ' + sErr);
								reject(sErr);
							});

						}
					}).catch((sErr) => {
						console.debug('Token retrieval failed: ' + sErr);
						reject(sErr);
					});
				}).catch((sErr) => {
					console.debug('Request permission failed: ' + sErr);
					reject(sErr);
				});
			});
		},
		
		unsubscribe: (sTopic) => {

			return new Promise((resolve, reject) => {
				
				const oMessaging = firebase.messaging(oFirebase);
				
				Notification.requestPermission().then(() => {
					oMessaging.getToken().then((sToken) => {
						if (sToken) {
							let oReq = new Request('/tncms/messaging/unsubscribe/', {
								method: 'POST',
								body: JSON.stringify({
									token: sToken,
									topic: sTopic
								})
							});
							
							fetch(oReq).then((oRes) => {
								let sContentType = oRes.headers.get('content-type');
								if (sContentType && sContentType.includes('application/json')) {
									return oRes.json();
								}
								
								throw new TypeError('Non-JSON response from server received');
							}).then((oRes) => {
								console.log('Unsubscribe from topic: ' + sTopic);
								resolve(oRes);
							}).catch((sErr) => {
								console.warn('Unsubscribe failed: ' + sErr);
								reject(sErr);
							});

						}
					}).catch((sErr) => {
						console.debug('Token retrieval failed: ' + sErr);
						reject(sErr);
					});
				}).catch((sErr) => {
					console.debug('Request permission failed: ' + sErr);
					reject(sErr);
				});
				
			});
		}
		
	}
	
})();