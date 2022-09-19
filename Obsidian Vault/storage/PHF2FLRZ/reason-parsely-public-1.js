(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	const api_url = 'https://api.parsely.com/v2';
	const username = window.location.host === 'reason.com' ? 'reason.com' : 'wpdev.reason.com';
	const endpoints = {
		'analytics': '/analytics',
		'posts': '/posts',
		'related': '/related',
		'tags': '/tags',
		'profile': '/profile'
	};

	let visitor = {};

	visitor = getVisitorInfo();
	console.log('parsely visitor: ', visitor);

	if(visitor !== null && visitor.id) {
		setupVisitorData();
	} else  {
		let counter = 0;
		let getVisitorTimer = setInterval(function () {
			// console.log('doing loop until a visitor id is found');
			visitor = getVisitorInfo();
			counter++;
			if ((visitor && visitor.id) || counter === 20) {
				// console.log(counter);
				setupVisitorData();
				clearInterval(getVisitorTimer);
			}
		}, 100);
	}

	function apiCall(endpoint, params) {
		console.log('API CALL ', endpoint, params);
		params = params || {};
		params.apikey = username;
		const url = api_url + endpoints[endpoint]
		var esc = encodeURIComponent;
		var query = Object.keys(params)
			.map(function(k) {return esc(k) + '=' + esc(params[k]);})
			.join('&');

		const request = url + '?' + query;

		return $.get(request, function (data) {
			console.log(request, data);
		})
			.done(function(a) {
				console.log('DONE', a);
			})
			.always(function (a) {
				console.log('did the call', a);
			})
			.fail(function(a, b, c) {
				console.log('FAIL', a, b, c);
			});
	}

	function trainUserProfile() {
		let params = {
			uuid: visitor.id,
			url: getCanonicalUrl()
		}
		let response = apiCall('profile', params);
		response.success(function (data) {
			// console.log(data);
		});
	}

	function populateRecommendedArticles() {
		const params = {
			uuid: visitor.id,
			limit: 5,
			page: 1
		};

		let response = apiCall('related', params);
		console.log(response);
		response.success(function(data) {
			// console.log('here, we have a thing', data.data);
			let recommended = $('.recommended-headlines');
			let template = document.getElementsByTagName('body')[0].className.split(/\s+/)[0];
		 	if (data.data.length) {
		 		let slotcount = 0;
				for (let i = 0; i < data.data.length; i++) {

					// console.log(data.data[i].url, window.location.href)
					if ( data.data[i].hasOwnProperty('url') && data.data[i].url !== window.location.href && slotcount <= 5) {
						slotcount++;
						let post_type = '';
						if (data.data[i].hasOwnProperty('section')) {
							if (data.data[i].section === "Posts") {
								post_type = 'post';
							} else if (data.data[i].section === "Video") {
								post_type = 'video';
							} else if (data.data[i].section === "Podcast") {
								post_type = 'podcast';
							}
						}
						let html = '<h4 class="recommended-post--'+post_type+'"><a href="' + data.data[i].url + '" data-ga-click="true" data-ga-action="Recommended Footer Widget Click - ' + (i + 1) + '" data-ga-label="'+ HtmlEncode( data.data[i].title ) + '">' + data.data[i].title + '</a></h4>';
						recommended.append(html);
					} else {
						console.log(slotcount, data.data[i].url, window.location.href);
					}
				}
				recommended.removeClass('d-none');
			}
		});
	}

	function getVisitorInfo() {
		const cookie = getCookie('_parsely_visitor');
		if (cookie) {
			return JSON.parse(decodeURIComponent(cookie));
		}

		return null;
	}

	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2)
			return parts.pop().split(";").shift();
		else
			return '';
	}

	function getCanonicalUrl() {
		var canonical = "";
		var links = document.getElementsByTagName("link");
		for (var i = 0; i < links.length; i ++) {
			if (links[i].getAttribute("rel") === "canonical") {
				canonical = links[i].getAttribute("href")
			}
		}
		console.log("canonical url: " + canonical);
		return canonical || window.location;
	}

	function setupVisitorData(){
		if ($('body').hasClass('single')) {
			populateRecommendedArticles();
			trainUserProfile();
		}
	}

	function callRcomThemeAjax(action, post_obj) {
		if ( typeof window.rcom_ajax_obj !== "undefined") {
			// console.log(post_obj);
			post_obj = post_obj || {};
			post_obj.action = 'rcom_submit';
			post_obj.theme_action = action;
			post_obj._ajax_nonce = window.rcom_ajax_obj.nonce;
			// console.log(post_obj, window.rcom_ajax_obj.ajax_url);
			return $.post(window.rcom_ajax_obj.ajax_url, post_obj, function (data) {
				// console.log(data);
			}, 'json');
		} else {
			// console.log(window.rcom_ajax_obj);
		}
	}

	function populateMostReadList() {
		if ($('#most-read-container').length > 0) {
			let response = callRcomThemeAjax('ajax_get_most_read_list');
			response.success(function (data) {
				// console.log(data);
				let html = data.html;
				$('#most-read-container').html(html);
			});
		}
	}

	function HtmlEncode(str) {
		var i = str.length,
			aRet = [];

		while (i--) {
			var iC = str[i].charCodeAt();
			if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
				aRet[i] = '&#'+iC+';';
			} else {
				aRet[i] = str[i];
			}
		}
		return aRet.join('');
	}
	//
	// function populateMostReadWidget() {
	// 	if ($('.widget.rpar-popular-posts').length > 0) {
	// 		$('.widget.rpar-popular-posts').each(function() {
	// 			let response = callRcomThemeAjax('ajax_most_read_widget_html');
	// 			response.success(function (data) {
	// 				console.log(data);
	// 				let html = data.html;
	// 				$('#most-read-container').html(html);
	// 			});
	// 		})
	// 	}
	// }

	$(document).ready(function() {
		// console.log('READY');
		populateMostReadList();
		// populateMostReadWidget();
	});
})( jQuery );
