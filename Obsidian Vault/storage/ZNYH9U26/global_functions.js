rgb = {
	salaIndexItem: 0,
	rgbGoogleAnalyticsPageViewEventIndex: 0 ,
	rgbSingleCurrentArticle: '',
	rgbIsMobile: function() {
		return $('body').hasClass('mobile');
	},
	init: function () {

		rgb.rgbSingleCurrentArticle = ($('body').hasClass('liveblog_entry-template-default') ? $('.single .wrap-article.liveblog.article-popup .article').data("article_id") : $('.single .wrap-article .article').first().data('article_id'));

		if (navigator.userAgent.indexOf('rgbmedia-app') > -1) {
			$('body').addClass('app');
		}
		// External Links
		rgb.rgbExternalLinks();
		if ($('.the-content a').length) {
			rgb.rgbExternalLinksInContent();
		}
		// Home load sections
		if ($('body.home').length) {
			rgb.rgbHomeLoadSections();
		}
		// Rslider
		if ($(".rslides").length) {
			rgb.rgbRslider();
		}
		//mailto
		if ($('.open_mailto').length) {
			rgb.rgbMailto();
		}
		// Submenu
		rgb.rgbSubMenuDropDown();
		// Search on header
		rgb.rgbSearchHeader();
		// Tabs
		rgb.rgbAjaxTabClick();
		// Load More
		rgb.rgbLoadMoreClick();
		// Newsletter
		rgb.rgbMailchimpSubmitForm();
		// Is editor
		if ($('.edit').length) {
			rgb.rgbIsEditor();
		}
		// back to top
		if ($('.back-to-top').length) {
			rgb.rgbBackToTop();
		}
		// RGB custom slider
		rgb.rgbSliderNav();
		rgb.rgbMostPopularSliderNav();
		// Sticky (paralax) sidebar
		if ($('.sticky-sidebar').length && !rgb.rgbIsMobile()) {
			$('.sticky-sidebar-wrap').on('load', rgb.rgbStickySidebar());
		}
		// Sticky (paralax) sidebar right hp 1 - timesofisrael
		if ($('.sticky-sidebar-left').length && !rgb.rgbIsMobile()) {
			$('.sticky-sidebar-wrap-left').on('load', rgb.rgbHpStickySidebarLeft());
		}
		// Sticky (paralax) sidebar left long hp 1 - timesofisrael
		if ($('.sticky-sidebar-right').length && !rgb.rgbIsMobile()) {
			$('.sticky-sidebar-wrap-right').on('load', rgb.rgbHpStickySidebarRight());
		}
		// Sticky header
		rgb.rgbStickyHeader();
		// single
		if ($('body.single').length) {
			// read more
			rgb.rgbArticleReadMore();
			// blogs google page views
			if ($('.the-content .liveblogdiv > div').length) {
				rgb.rgbLiveBlogGooglePageView();
			}
			// Sidebar control
			$(window).on('load', rgb.rgbSidebarControl());
			rgb.rgbSidebarScroll();
			// Load single content ajax
			if ($('body.single .article.news').length || $('body.single .article.features').length || $('body.single .article.analysis').length) {
				rgb.rgbLoadSingleContent();
			}
			// liveblog popup
			if ($('.article-popup').length) {
				rgb.rgbArticleLiveblogPopup();
			}
			// writer dropdown
			rgb.rgbWriterDropdown();

			if(!$('article').hasClass('print-active')){
				rgb.rgbPrintArticle();
			}

			if ($('body').hasClass('single-features-special') && !$('body').hasClass('single-spotlight')) {
				$(window).on('load', rgb.rgbFeaturesSpecialChangeHeaderBG());
			}
		}

		// convert time to relative
		if ($('.liveblog-active').length || $('.package .liveblog-timeline').length) {
			$('.liveblog-date span').each(function (index, value) {
				var timestamp = $(this).data('timestamp');
				var timeAgo = rgb.rgbTimeAgo(timestamp);
				$(this).html(timeAgo);

				if ($('body').hasClass('single') && index == 0) {
					if( $('body').hasClass('fr') ) {
						$('.liveblog-active .above-headline .overline').html('Mis à jour ' + timeAgo);
					} else {
						$('.liveblog-active .above-headline .overline').html('Updated ' + timeAgo);
					}
				}
			});
		}

		if($('.liveblog.article-popup').length){
			//console.log('here');
			var timestamp = $('.liveblog.article-popup .liveblog-date span').data('timestamp');
			var timeAgo = rgb.rgbTimeAgo(timestamp);
			$('.liveblog.article-popup .liveblog-date span').html(timeAgo);
		}

		// if($('.liveblog .above-headline .overline').length){
		// 	$('.liveblog .above-headline .overline').each(function (index, value) {
		// 		var timestamp = $(this).data('timestamp');
		// 		if(timestamp != 0){
		// 			var timeAgo = rgb.rgbTimeAgo(timestamp);
		// 			$(this).html('Updated ' + timeAgo + '<!-- TIME: ' + timestamp + '-->');
		// 		}
		// 	});
		// }

		// pop
		rgb.rgbWindowPopup();
		// share counter
		// rgb.rgbAnimateShareNumber();
		// fitvids

		if ($('.the-content').length) {
			$(".the-content").fitVids();
		}
		// sliders
		if ($('.slider-viewport').length && !$('body').hasClass('mobile') && !$('body').hasClass('single')) {
			rgb.rgbFixSliderHeight();
		}
		// liveblog refresh
		if ($('.liveblog-active').length && $(".liveblogdiv").length) {
			rgb.rgbLiveBlogRefresh();
		}
		// fix contact form 7 select placholder
		if ($('.wpcf7 select').length) {
			rgb.rgbFixCF7SelectPlaseholder();
		}
		rgb.rgbPopup();
		rgb.rgbWeather();
		rgb.rgbCommunityMenu();
	},
	rgbWeather: function () {
		$(document).on("click", ".select-weather .active-selected", function () {
			var thisWeatherSelect = $(this).parents('.select-weather');
			var selectList = thisWeatherSelect.find('.select-list');
			toggleSelectList(selectList, $(this));
		});

		$(document).on("click", ".select-list li", function () {
			var thisWeatherSelect = $(this).parents('.select-weather');
			var selectList = thisWeatherSelect.find('.select-list');
			var weatherSelected = thisWeatherSelect.find('.active-selected');
			var htmlBody = thisWeatherSelect.parents('.weather').find('.widget-body');
			if (selectList.hasClass('open')) {
				var location = $(this).data('value');
				var changeSelectSelectedText = $(this).text();
				weatherSelected.text(changeSelectSelectedText);
				if (location) {
					toggleSelectList(selectList, weatherSelected);
					getWeather(location, htmlBody);
				} else {
					console.log("no location");
				}
			}
		});

		function toggleSelectList(selectList, weatherSelected) {
			if (!selectList.hasClass('open')) {
				selectList.slideDown("fast");
				selectList.addClass('open');
				weatherSelected.addClass('open');
			} else {
				selectList.slideUp("fast");
				selectList.removeClass('open');
				weatherSelected.removeClass('open');
			}
		}

		function getWeather(location, htmlBody) {
			if (location != "") {
				$.ajax({
						type: "GET",
						url: "/wp-content/themes/rgb/ajax/weather.php",
						data: "location=" + location,
					})
					.done(function (html) {

						if (html != "") {
							htmlBody.html(html);
						}
					});
			}
		}
	},
	rgbPopup: function () {
		// open
		$(document).on("click", "a.lightbox-popup", function (e) {
			e.preventDefault();
			$('.modal-overlay,.modal-window').remove();
			var width = ($(window).width() > 1290 ? 1190 : $(window).width() - 100);
			var height = $(window).height() - 100;
			var src = $(this).attr('href');
			var marginLeft = (width / 2) * -1;
			var marginLop = (height / 2) * -1;
			var html = '<div id="modal" class="modal-window" style="width:' + width + 'px; height:' + height + 'px; margin-left:' + marginLeft + 'px; margin-top:' + marginLop + 'px;">'
			html += '<div class="modal-close"></div>';
			html += '<iframe width="100%" height="100%" frameborder="0" scrolling="auto" allowtransparency="true" src="' + src + '"></iframe>';
			html += '</div>'
			$('body').append('<div class="modal-overlay active"></div>');
			$('body').append(html);
		});
		// close
		$(document).on("click", ".modal-close", function (e) {
			$('.modal-overlay,.modal-window').fadeOut().remove();
		});
		// resize
		$(window).resize(function () {
			if ($('.modal-window').length) {
				var width = ($(window).width() > 1290 ? 1190 : $(window).width() - 100);
				var height = $(window).height() - 100;
				var src = $(this).attr('href');
				var marginLeft = (width / 2) * -1;
				var marginLop = (height / 2) * -1;
				$('.modal-window').css({
					"width": width + "px",
					"height": height + "px",
					"margin-left": marginLeft + "px",
					"margin-top": marginLop + "px"
				});
			}
		});
	},
	rgbWindowPopup: function () {
		// window popup
		$(document).on('click', 'a.popup', function (e) {
			e.preventDefault();
			optWidth = ($(this).attr("data-width") != '') ? $(this).attr("data-width") : 500;
			optHeight = ($(this).attr("data-height") != '') ? $(this).attr("data-height") : 300;
			optLeft = (screen.width - optWidth) / 2;
			optTop = (screen.height - optHeight) / 2;
			window.open($(this).attr("href"), "popup", 'statusbar=0,toolbar=0,menubar=0,resizeable=1,scrollbars=1,width=' + optWidth + ',height=' + optHeight + ',left=' + optLeft + ',top=' + optTop);
		});
	},
	rgbFeaturesSpecialChangeHeaderBG: function () {
		doAnimation();

		$(window).resize(function () {
			doAnimation();
		});
		$(window).scroll(function () {
			doAnimation();
		});

		function doAnimation() {
			var header = $('.header');
			var animationLength = $('.article-header').height() - $('.header').height();
			var scrollTop = $(window).scrollTop();
			var num = (scrollTop * 100 / animationLength) / 100;
			var bg = num.toFixed(1);
			if (bg <= 1 && scrollTop <= animationLength) {
				header.css({
					"background": "rgba(30,30,30," + bg + ")",
					"transition": "inherit"
				});
			} else {
				header.css({
					"background": "rgba(30,30,30,1)",
					"transition": "inherit"
				});
			}
		}
	},
	rgbHpStickySidebarRight: function () {
		$(window).scroll(function () {
			var scrollTop = $(this).scrollTop();
			var stickySidebar = $('.sticky-sidebar-right .sticky-sidebar-wrap-right');
			var offsetBotttomElement = $('.sticky-sidebar-right').parents('.sticky-sidebar-parent-hp-1').find('.sticky-sidebar-relative-right');
			// offset top
			var stickySidebarOffsetTop = $('.sticky-sidebar-right').offset().top + $('.sticky-sidebar-wrap-right').outerHeight() - $(window).height() + 45;
			stickySidebarOffsetTop = (stickySidebar.outerHeight() > $(window).height() ? stickySidebarOffsetTop : $('.sticky-sidebar-right').offset().top - 95); // for scroll from top
			stickySidebarOffsetTop = (stickySidebarOffsetTop < 0 ? stickySidebarOffsetTop * -1 : stickySidebarOffsetTop); // if the number is -num
			// offset bottom
			var stickySidebarOffsetBottom = offsetBotttomElement.offset().top + offsetBotttomElement.outerHeight() - $(window).height() + 45;
			stickySidebarOffsetBottom = (stickySidebar.outerHeight() > $(window).height() ? stickySidebarOffsetBottom : stickySidebar.offset().top + stickySidebar.outerHeight() - stickySidebar.outerHeight() - 95); // for scroll from top
			stickySidebarOffsetBottom = (stickySidebarOffsetBottom < 0 ? stickySidebarOffsetBottom * -1 : stickySidebarOffsetBottom);
			// sidebar height
			var stickySidebarWrapHeight = offsetBotttomElement.offset().top + offsetBotttomElement.outerHeight() - $('.sticky-sidebar-right').offset().top;
			if (stickySidebarWrapHeight > 0) {
				$('.sticky-sidebar-right').height(stickySidebarWrapHeight);
			}
			// margin top
			var marginTop = stickySidebarOffsetBottom - stickySidebarOffsetTop;
			marginTop = (marginTop < 0 ? marginTop * -1 : marginTop); // if the number is -num
			// sticky action
			if (scrollTop >= stickySidebarOffsetTop) {
				if (scrollTop <= stickySidebarOffsetBottom) {
					if (stickySidebar.outerHeight() > $(window).height()) {
						stickySidebar.css({
							"position": "fixed",
							"bottom": "45px",
							"width": "300px",
							"left": "auto",
							"right": "auto",
							"margin-top": ""
						});
					} else {
						stickySidebar.css({
							"position": "fixed",
							"top": "95px",
							"width": "300px",
							"left": "auto",
							"right": "auto",
							"margin-top": ""
						});
					}
				} else {
					stickySidebar.css({
						"position": "",
						"width": "",
						"top": "",
						"bottom": "",
						"left": "",
						"right": "",
						"margin-top": marginTop
					});
				}
			} else {
				stickySidebar.css({
					"position": "",
					"width": "",
					"left": "",
					"right": "",
					"bottom": "",
					"top": "",
					"margin-top": ""
				});
			}
		});
	},
	rgbHpStickySidebarLeft: function () {
		$(window).scroll(function () {
			var scrollTop = $(this).scrollTop();
			var stickySidebar = $('.sticky-sidebar-left .sticky-sidebar-wrap-left');
			var offsetBotttomElement = $('.footer'); //$('.sticky-sidebar-left').parents('.sticky-sidebar-parent-hp-1').find('.sticky-sidebar-relative-right'); //$('.footer');
			// offset top
			var stickySidebarOffsetTop = $('.sticky-sidebar-left').offset().top + $('.sticky-sidebar-wrap-left').outerHeight() - $(window).height() + 45;
			stickySidebarOffsetTop = (stickySidebar.outerHeight() > $(window).height() ? stickySidebarOffsetTop : $('.sticky-sidebar-left').offset().top - 95); // for scroll from top
			stickySidebarOffsetTop = (stickySidebarOffsetTop < 0 ? stickySidebarOffsetTop * -1 : stickySidebarOffsetTop); // if the number is -num
			// offset bottom
			var stickySidebarOffsetBottom = offsetBotttomElement.offset().top - $(window).height() + 45;
			stickySidebarOffsetBottom = (stickySidebar.outerHeight() > $(window).height() ? stickySidebarOffsetBottom : stickySidebar.offset().top + stickySidebar.outerHeight() - stickySidebar.outerHeight() - 95); // for scroll from top
			stickySidebarOffsetBottom = (stickySidebarOffsetBottom < 0 ? stickySidebarOffsetBottom * -1 : stickySidebarOffsetBottom);
			// sidebar height
			var stickySidebarWrapHeight = offsetBotttomElement.offset().top - $('.sticky-sidebar-left').offset().top - 135;
			if (stickySidebarWrapHeight > 0) {
				$('.sticky-sidebar-left').height(stickySidebarWrapHeight);
			}
			// margin top
			var marginTop = stickySidebarOffsetBottom - stickySidebarOffsetTop - 135;
			marginTop = (marginTop < 0 ? marginTop * -1 : marginTop); // if the number is -num
			// sticky action
			if (scrollTop >= stickySidebarOffsetTop) {
				if (scrollTop <= (stickySidebarOffsetBottom - 135)) {
					if (stickySidebar.outerHeight() > $(window).height()) {
						stickySidebar.css({
							"position": "fixed",
							"bottom": "45px",
							"width": "130px",
							"left": "auto",
							"right": "auto",
							"margin-top": ""
						});
					} else {
						stickySidebar.css({
							"position": "fixed",
							"top": "95px",
							"width": "130px",
							"left": "auto",
							"right": "auto",
							"margin-top": ""
						});
					}
				} else {
					stickySidebar.css({
						"position": "",
						"width": "",
						"top": "",
						"bottom": "",
						"left": "",
						"right": "",
						"margin-top": marginTop
					});
				}
			} else {
				stickySidebar.css({
					"position": "",
					"width": "",
					"left": "",
					"right": "",
					"bottom": "",
					"top": "",
					"margin-top": ""
				});
			}
		});
	},
	rgbStickySidebar: function () {
		var scrollAreas = [window];
		if ($('.article-popup').length) {
			scrollAreas = [window, '.article-popup .article'];
		}
		$.each(scrollAreas, function (x, v) {
			$(v).scroll(function () {
				$('.sticky-sidebar').each(function () {
					var stickySidebar = $(this).find('.sticky-sidebar-wrap');
					if (stickySidebar.parents('.article').hasClass('read-more-close')) {
						stickySidebar.css({
							"position": "",
							"width": "",
							"left": "",
							"right": "",
							"bottom": "",
							"top": "",
							"margin-top": ""
						});
						return
					}
					var block = $(this).parents('.sticky-sidebar-parent').find('.sticky-sidebar-relative');
					// offsetTop
					var stickySidebarOffsetTop = block.offset().top + stickySidebar.outerHeight() - $(v).height() + 45; // for scroll from bottom
					if (!stickySidebar.parents().hasClass('article-popup')) {
						if (stickySidebar.parents('.article').hasClass('news')) {
							stickySidebarOffsetTop = (stickySidebar.outerHeight() > $(v).height() ? stickySidebarOffsetTop : block.offset().top - 35); // for scroll from top
						} else {
							stickySidebarOffsetTop = (stickySidebar.outerHeight() > $(v).height() ? stickySidebarOffsetTop : block.offset().top - 95); // for scroll from top
						}
					} else {
						stickySidebarOffsetTop = (stickySidebar.outerHeight() > $(v).height() ? stickySidebarOffsetTop : 0); // for scroll from top
					}
					stickySidebarOffsetTop = (stickySidebarOffsetTop < 0 ? stickySidebarOffsetTop * -1 : stickySidebarOffsetTop); // if the number is -num
					// offsetBotttom
					var stickySidebarOffsetBottom = block.offset().top + block.outerHeight() - $(v).height() + 45; // for scroll from bottom
					stickySidebarOffsetBottom = (stickySidebar.outerHeight() > $(v).height() ? stickySidebarOffsetBottom : block.offset().top + block.outerHeight() - stickySidebar.outerHeight() - 95); // for scroll from top
					stickySidebarOffsetBottom = (stickySidebarOffsetBottom < 0 ? stickySidebarOffsetBottom * -1 : stickySidebarOffsetBottom); // if the number is -num

					// sidebar height
					var stickySidebarWrapHeight = block.offset().top + block.outerHeight() - $(this).offset().top;
					if (stickySidebarWrapHeight > 0) {
						//$(this).height(stickySidebarWrapHeight);
						$(this).height('1000px');
					}

					var startStickySidebar = (block.outerHeight() - stickySidebar.outerHeight() >= 100);
					var scrollTop = $(v).scrollTop();
					var marginTop = stickySidebarOffsetBottom - stickySidebarOffsetTop;
					marginTop = (marginTop < 0 ? marginTop * -1 : marginTop); // if the number is -num
					if (startStickySidebar) {
						if (scrollTop >= stickySidebarOffsetTop) {
							if (scrollTop <= stickySidebarOffsetBottom) {
								if (stickySidebar.outerHeight() > $(v).height()) {
									stickySidebar.css({
										"position": "fixed",
										"bottom": "45px",
										"width": "300px",
										"left": "auto",
										"right": "auto",
										"margin-top": ""
									});
								} else {
									var top = (!stickySidebar.parents().hasClass('article-popup') ? '95px' : '170px');
									stickySidebar.css({
										"position": "fixed",
										"top": top,
										"width": "300px",
										"left": "auto",
										"right": "auto",
										"margin-top": ""
									});
								}
							} else {
								stickySidebar.css({
									"position": "",
									"width": "",
									"top": "",
									"bottom": "",
									"left": "",
									"right": "",
									"margin-top": marginTop
								});
							}
						} else {
							stickySidebar.css({
								"position": "",
								"width": "",
								"left": "",
								"right": "",
								"bottom": "",
								"top": "",
								"margin-top": ""
							});
						}
					}
				});
			});
		});
	},
	rgbStickyHeader: function () {
		// sticky header scroll
		if (!$('body').hasClass('small-header')) {
			var header = $('.header');
			var stickyStart = header.outerHeight();
			var stop = false;
			$(window).scroll(function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop >= stickyStart) {
					if (!stop) {
						$('body').addClass('sticky-header');
						stop = true;
					}
				} else {
					if (stop) {
						$('body').removeClass('sticky-header');
						$('.header-bottom').removeAttr("style");
						stop = false;
					}
				}
			});
		}

		// sticky header open/close menu
		$(document).on('click', '.menu-control', function () {
			// start here
			if ($('.header').hasClass('open')) {
				if ($('body.single-features-special').length) { // for single-features-special
					$('.search-btn').removeClass('current');
					$('.header-search').slideUp();
				}
				$('header').removeClass('open');
				$('header').addClass('close');
				$('.header-bottom').slideUp(function () { // for single-features-special
					$('header').removeClass('close');
				});
			} else {
				$('.header-bottom').slideDown();
				$('header').removeClass('close'); // for single-features-special
				$('header').addClass('open');
			}
		});
	},
	rgbSidebarControl: function () {

		// click
		$(document).on('click', '.sidebar-control', function () {
			var winWidth = $(window).width();
			if (!$('body').hasClass('sidebar-open')) {
				$('body').addClass('sidebar-open');
				var margin = winWidth - $('.wrap-article').width() - 300;
				margin = (margin > 0 ? margin * -1 : margin);
				margin = (margin < -300 ? -300 : margin);
				$('.wrap-article').css({
					"margin-right": margin,
					"transition": "1s"
				});
				$(this).css({
					"margin-right": margin,
					"transition": "1s"
				});
			} else {
				$('body').removeClass('sidebar-open');
				$('.wrap-article').css({
					"margin-right": "",
					"transition": "1s"
				});
				$(this).css({
					"margin-right": "",
					"transition": "1s"
				});
			}
		});

		// resize
		$(window).resize(function () {
			if ($('.footer').length) {
				rgbFixSidebar();
			}
			// check and do
			$('body').removeClass('sidebar-open');
			$('.wrap-article,.sidebar-control').css({
				"margin-right": "",
				"transition": "1s"
			});

		});

		if ($('.footer').length) {
			$(window).scroll(function () {
				rgbFixSidebar();
			});
		}

		// private function
		function rgbFixSidebar() {
			var scrollTop = $(window).scrollTop();
			var winWidth = $(window).width();
			var winHeight = $(window).height();
			var offsetButtom = $('.footer').offset().top - winHeight - 15;
			var height = scrollTop - offsetButtom;
			if (scrollTop >= offsetButtom) {
				$('.main .sidebar-main').css({
					"height": (winHeight - 50) - height
				});
			} else {
				$('.main .sidebar-main').css({
					"height": ""
				});
			}
		}
	},
	rgbSidebarScroll: function () {
		var stop = false;
		$('.sidebar').scroll(function () {
			var scrollTop = $(this).scrollTop();
			if (scrollTop > 0) {
				if (!stop) {
					$('.sidebar-footer').fadeOut();
					stop = true;
				}
			} else {
				if (stop) {
					$('.sidebar-footer').fadeIn();
					stop = false;
				}
			}
		});

		// sticky main sala sidebar
		if($('.wrap-article-single').length && !$('body').hasClass('mobile')){
			var articleHeight = 0;
			var winScrollTop = 0;
			// resize window
			$( window ).resize(function() {
				articleHeight = $('.wrap-article').height() + 50;
				winScrollTop = $( window ).scrollTop() + $(window).height();
			});
			// scroll window
			$( window ).scroll(function() {
				winScrollTop = $( window ).scrollTop() + $(window).height();
				articleHeight = $('.wrap-article').height() + 50;
				if(winScrollTop >= articleHeight){
					$('.sidebar.sidebar-main').css({"top":-(winScrollTop - articleHeight - 50) + 'px'});
					// .ob-smartfeed-wrapper {position:relative;z-index:999;}
				}else{
					$('.sidebar.sidebar-main').css({"top":''});
				}
			});
		}
	},
	rgbHomeLoadSections: function () {
		if ($('.data-sections').length) {
			var sectionsAvailable = $('.data-sections').data('sections');
			var sections = sectionsAvailable.split(",");
			var stop = false;
			if (sections.length > 1) {
				$(window).scroll(function () {
					var scrollTop = $(window).scrollTop();
					if ($('#hp_section_' + sections[0]).length && sections.length > 0) {
						var distanceTop = $('#hp_section_' + sections[0] + ' .section-offset').offset().top - ($(window).height() * 2);
						if (scrollTop >= distanceTop) {
							if (!stop) {
								var sectionId = sections[1];
								if (sectionId) {
									stop = true;
									$.get('/wp-content/themes/rgb/ajax/load_hp_section.php?action=load_hp_section&page_id=1&section_id=' + sectionId + '&is_mobile=' + rgb.rgbIsMobile(), function (data) {
										if ($('.wrap-wide')) {
											$('#hp_section_1').append(data);
										} else {
											$('#hp_section_' + sections[0]).after(data);
										}
										if ($('.sticky-sidebar').length && !$('body').hasClass('mobile')) {
											rgb.rgbStickySidebar();
										}
										sections.splice(0, 1); // remove the first item in array
										stop = false;
										if ($('.slider-viewport').length && !$('body').hasClass('mobile') && !$('body').hasClass('single')) {
											rgb.rgbFixSliderHeight();
										}
										rgb.rgbRslider();
										rgb.rgbBackToTop();
										var title = 'Homepage: ' + $('#hp_section_' + sectionId + ' > .section-header .title').text();
										var url = '/hp_section_' + sectionId;
										rgb.rgbGoogleAnalyticsPageView(false, url, title);
										if (rgb.rgbIsMobile()) {
											if ($(".media").length) {
												$(".media").fitVids();
											}
										}
										// Outbrain
										if ($('#hp_section_' + sectionId + ' .OUTBRAIN').length) {
											OBR.extern.researchWidget();
										}
									});
								} else {
									stop = true;
								}
							}
						}
					}
				});
			}
		}
	},
	rgbRslider: function () {
		$(".rslides:not(.slider-initialized)").each(function () {
			var $this = $(this),
				id = $this.attr('id'),
				has_pager = ($('body').hasClass('single') && !$this.parents().hasClass('sidebar')),
				has_nav = ($('body').hasClass('single') && $('body').hasClass('AJN')),
				auto = ($('body').hasClass('single') && $('body').hasClass('AJN')),
				element = $this.parents().hasClass('sidebar') ? '.sidebar #' + id : '#' + id;

			$(element).responsiveSlides({
				auto: !auto,
				pager: has_pager,
				nav: has_nav,
				prevText: "prev",
				nextText: "next",
				pause: true,
				pauseControls: true,
				speed: 500,
				timeout: 4000,
			}).addClass('slider-initialized');
		});
	},
	rgbMailto: function () {
		// submit mailto
		$(document).on("submit", "#rgb_mailto form", function (e) {
			e.preventDefault();
			$("#rgb_mailto .error-message").hide();
			$("#rgb_mailto .submit-button").hide();
			$("#rgb_mailto .submit-loading").show();
			var fields = [];
			var inputs = $('#rgb_mailto form :input');
			var obj = {};
			inputs.each(function () {
				obj[$(this).attr('name')] = $(this).val();
			});
			$.post("/wp-content/themes/rgb/mailto/model.php", obj).done(function (response) {
				if (response != 'ok') {
					$("#rgb_mailto .submit-button").show();
					$("#rgb_mailto .submit-loading").hide();
					switch (response) {
						case 'captcha':
							$("#rgb_mailto .error-message").html('I\'m not a robot is required');
							break;
					}
					$("#rgb_mailto .error-message").show();
				} else {
					$("#rgb_mailto .form_container").hide();
					$("#rgb_mailto .thankyou").show();
				}
			});

		});
		// close mailto
		$(document).on("click", ".close_mailto", function (e) {
			e.preventDefault();
			$("#rgb_mailto_container").fadeOut(200, function () {
				$("#rgb_mailto_container").remove();
			});
		});
		// open mailto
		$(document).on("click", ".open_mailto", function (e) {
			e.preventDefault();
			var email = $(this).data('email');
			var subject = $(this).data('subject');
			var message = $(this).data('message');
			var lang = $(this).data('lang');
			var article = $(this).data('article');
			var title = $(this).data('title');
			var site = $(this).data('site');
			$.get("/wp-content/themes/rgb/mailto/controller.php", {
				act: "get_view",
				lang: lang,
				email: email,
				subject: subject,
				message: message,
				article: article,
				title: title,
				site: site
			}).done(function (response) {
				$("body").append(response);
				$("#rgb_mailto_container").fadeIn(200, function () {
					grecaptcha.render('grecaptcha', {
						sitekey: '6LdHuRMUAAAAAMzm-Cotf3N5U3vTOu87vL6eaBLE',
						callback: function (response) {
							//console.log(response);
						}
					});
				});
			});
		});
	},
	rgbSubMenuDropDown: function () {

		$(document).on('click', '.dropdown-btn', function (event) {
			event.preventDefault();

			var hasChildren = $(this).parents('.has-children');
			var subMenu = hasChildren.find('.sub-menu-dropdown');
			if (hasChildren.hasClass('active')) {
				hasChildren.removeClass('active');
				if ($('body').hasClass('sticky-header')) {
					subMenu.slideUp();
				} else {
					subMenu.fadeOut();
				}
			} else {
				$('.has-children').removeClass('active');
				if ($('body').hasClass('sticky-header')) {
					$('.has-children .sub-menu-dropdown').slideUp();
				} else {
					$('.has-children .sub-menu-dropdown').fadeOut();
				}
				hasChildren.addClass('active');
				if ($('body').hasClass('sticky-header')) {
					subMenu.slideDown();
				} else {
					subMenu.fadeIn();
				}
			}
		});

		$(document).on('click', function (event) {
			var element = event.target;
			var close = (!$(element).hasClass('dropdown-btn') && !$(element).parents('.has-children').hasClass('active') ? true : false);
			if (close) {
				$('.has-children').removeClass('active');
				if ($('body').hasClass('sticky-header')) {
					$('.has-children .sub-menu-dropdown').slideUp();
				} else {
					$('.has-children .sub-menu-dropdown').fadeOut();
				}
			}
		});
	},
	rgbSearchHeader: function () {
		$(document).on('click', '.search-btn', function (event) {
			event.preventDefault();
			if ($('.search-btn').hasClass('current')) {
				$('.search-btn').removeClass('current');
				$('.header-search').slideUp();
			} else {
				$('.search-btn').addClass('current');
				$('.header-search').slideDown();
			}
		});

		$(document).on('click', '.wrap-input .clear-text', function () {
			$('.search-input').val("");
			$('.wrap-input .clear-text').fadeOut();
			$('.wrap-input,.wrap-input .search-input').removeClass('active');
		});

		$('.wrap-input .search-input').keyup(function () {
			if ($(this).val() != '') {
				$('.wrap-input .clear-text').fadeIn();
				$('.wrap-input,.wrap-input .search-input').addClass('active');
			} else {
				$('.wrap-input .clear-text').fadeOut();
				$('.wrap-input,.wrap-input .search-input').removeClass('active');
			}
		});

		$(".wrap-input .search-input").focusin(function () {
			$('.wrap-input').addClass('focusin');
		}).focusout(function () {
			$('.wrap-input').removeClass('focusin');
		});
	},
	rgbAjaxTabClick: function () {
		$(document).on('click', '.tabs a:not(.no-ajax)', function (event) {
			event.preventDefault();
			var myThis = $(this);
			if (myThis.parents('.tabs').hasClass('topics-tabs') || myThis.parents('.tabs').hasClass('topics-tabs-widget')) {
				if (myThis.hasClass('no-ajax')) {
					return true;
				} else {

					if (myThis.parents('.widget').hasClass('tabs-widget')) {
						// topic widget tabs
						var myThisSection = myThis.parents('.tabs-widget');
						var taxonomy = 'post_tag';
						var term_id = '';
						var post_tag = myThis.data('post_tag');
						var numposts = myThis.data('numposts');
					} else {
						// topics tabs
						var myThisSection = myThis.parents('.hp_section');
						var taxonomy = myThis.parents('.topics-tabs').data('taxonomy');
						var term_id = myThis.parents('.topics-tabs').data('term_id');
						var post_tag = myThis.data('post_tag');
						var numposts = myThis.data('numposts');
					}
					$.ajax({
						type: 'GET',
						dataType: 'html',
						url: '/wp-content/themes/rgb/ajax/topics_for_terms.php',
						data: {
							taxonomy: taxonomy,
							term_id: term_id,
							post_tag: post_tag,
							numposts: numposts,
							is_mobile: rgb.rgbIsMobile()
						}
					}).done(function (html) {

						if (myThis.parents('.widget').hasClass('tabs-widget')) {
							myThisSection.find('.topics-tabs-widget li').removeClass('current');
						} else {
							myThisSection.find('.topics-tabs li').removeClass('current');
						}

						myThis.parent('li').addClass('current');
						myThisSection.find('.items').fadeOut('fast', function () {
							$(this).html(html).fadeIn('fast', function () {
								if ($('.sticky-sidebar').length && !$('body').hasClass('mobile')) {
									rgb.rgbStickySidebar();
								}
								// IF NUMPOSTS = 15 -> REGISTER ANALYTICS PAGEVIEW
								if (numposts == 15) {
									var title = ($('.term-header .name').text() ? $('.term-header .name').text() : $('.term-header .name img').attr('alt'));
									var url = window.location.href;
									rgb.rgbGoogleAnalyticsPageView(false, url, title);
								}
								// RELOAD SKY1 BANNER
								if (myThisSection.find('#div-gpt-ad-BTF_SKY_1').length) {
									googletag.pubads().refresh([window.adSlot_BTF_SKY_1]);
								}
								if (myThisSection.find('#div-gpt-ad-BTF_MPU_1').length) {
									googletag.pubads().refresh([window.adSlot_BTF_MPU_1]);
								}
								if (myThisSection.find('#div-gpt-ad-BTF_MPU_2').length) {
									googletag.pubads().refresh([window.adSlot_BTF_MPU_2]);
								}
								if (myThisSection.find('#div-gpt-ad-BTF_MPU_3').length) {
									googletag.pubads().refresh([window.adSlot_BTF_MPU_3]);
								}
								// jewishweek
								// new banners from 28/10/2018 (BTF_MPU_10, BTF_MPU_11, BTF_LB_4)
								if (myThisSection.find('#div-gpt-ad-BTF_MPU_10').length) {
									googletag.pubads().refresh([window.adSlot_BTF_MPU_10]);
								}
								if (myThisSection.find('#div-gpt-ad-BTF_MPU_11').length) {
									googletag.pubads().refresh([window.adSlot_BTF_MPU_11]);
								}
								if (myThisSection.find('#div-gpt-ad-BTF_LB_4').length) {
									googletag.pubads().refresh([window.adSlot_BTF_LB_4]);
								}
							});
						});
					});
				}
			} else if (myThis.parents('.tabs').hasClass('blogs-tabs')) {
				// hp blogs tabs
				var ajax_data = myThis.data('query');
				$.ajax({
					type: 'GET',
					dataType: 'html',
					url: '/wp-content/themes/rgb/ajax/load_hp_blogs.php',
					data: {
						type: ajax_data
					}
				}).done(function (html) {
					$('#hp_section_6 .tabs li').removeClass('current');
					myThis.parent('li').addClass('current');
					$('#hp_section_6 .the-blogs-body').html(html);
				});
			} else {
				// normal tabs
				var widget_id = myThis.parents('.ajax').attr('id');
				var ajax_data = myThis.data('query');
				if (widget_id == 'popular') {
					var period = ($('.period select').val()) ? $('.period select').val() : '1';
					ajax_data += '&days=' + period;
				}
				$.ajax({
					type: 'GET',
					dataType: 'html',
					url: '/wp-content/themes/rgb/ajax/' + widget_id + '.php',
					data: ajax_data
				}).done(function (html) {
					$('#' + widget_id + ' .tabs li').removeClass('current');
					myThis.parent('li').addClass('current');
					$('#' + widget_id + ' .widget-body').html(html);
				});
			}
		});
		$('#popular .period select').on('change', function () {
			// popular tabs - change of period
			var ajax_data = $('#popular .tabs li.current a').data('query') + '&days=' + $(this).val();
			$.ajax({
				type: 'GET',
				dataType: 'html',
				url: '/wp-content/themes/rgb/ajax/popular.php',
				data: ajax_data
			}).done(function (html) {
				$('#popular .widget-body').html(html);
			});
		});
	},
	rgbLoadMoreClick: function () {
		$(document).on('click', '.load-more a', function (event) {
			event.preventDefault();
			var myThis = $(this);
			var myThisSection = (myThis.parents('.widget').hasClass('tabs-widget') ? myThis.parents('.tabs-widget') : myThis.parents('.hp_section'));
			var before_date = myThis.data('before_date');
			var taxonomy = myThis.data('taxonomy');
			var term_id = myThis.data('term_id');
			var post_tag = myThis.data('post_tag');
			var numposts = myThis.data('numposts');
			var post_type = (myThis.data('post_type') !== undefined) ? myThis.data('post_type') : '';

			$.ajax({
				type: 'GET',
				dataType: 'html',
				url: '/wp-content/themes/rgb/ajax/topics_for_terms.php',
				data: {
					taxonomy: taxonomy,
					term_id: term_id,
					post_tag: post_tag,
					before_date: before_date,
					numposts: numposts,
					is_mobile: rgb.rgbIsMobile(),
					post_type: post_type
				}
			}).done(function (html) {
				if (html) {
					myThisSection.find('.load-more').remove();
					myThisSection.find('.items').append(html);
					// IF NUMPOSTS = 15 -> REGISTER ANALYTICS PAGEVIEW
					if (numposts == 15) {
						var title = $('.term-header .name').text();
						var url = window.location.href;
						rgb.rgbGoogleAnalyticsPageView(false, url, title);
					}
					// RELOAD SKY1 BANNER
					if (myThisSection.find('#div-gpt-ad-BTF_SKY_1').length) {
						googletag.pubads().refresh([window.adSlot_BTF_SKY_1]);
					}
					if (myThisSection.find('#div-gpt-ad-BTF_MPU_1').length) {
						googletag.pubads().refresh([window.adSlot_BTF_MPU_1]);
					}
					if (myThisSection.find('#div-gpt-ad-BTF_MPU_2').length) {
						googletag.pubads().refresh([window.adSlot_BTF_MPU_2]);
					}
					if (myThisSection.find('#div-gpt-ad-BTF_MPU_3').length) {
						googletag.pubads().refresh([window.adSlot_BTF_MPU_3]);
					}
					// jewishweek
					// new banners from 28/10/2018 (BTF_MPU_10, BTF_MPU_11, BTF_LB_4)
					if (myThisSection.find('#div-gpt-ad-BTF_MPU_10').length) {
						googletag.pubads().refresh([window.adSlot_BTF_MPU_10]);
					}
					if (myThisSection.find('#div-gpt-ad-BTF_MPU_11').length) {
						googletag.pubads().refresh([window.adSlot_BTF_MPU_11]);
					}
					if (myThisSection.find('#div-gpt-ad-BTF_LB_4').length) {
						googletag.pubads().refresh([window.adSlot_BTF_LB_4]);
					}
				} else {
					myThisSection.find('.load-more').remove();
				}
			});
		});
	},
	rgbSliderNav: function () {
		// slider
		var multiply = (rgb.rgbIsMobile()) ? 1 : 4;
		var isAJN = $('body').hasClass('AJN');

		// responsiv - fix slider
		if ($('.slider.type-current-top-stories').length) {
			var newmultiply = $('.slider.type-current-top-stories').width() / 250;
			multiply = Math.round(newmultiply);
		}

		$(document).on('click', '.next a', function () {
			multiply = ($(this).closest(".slider").data('slide-items') && !rgb.rgbIsMobile() ? $(this).closest(".slider").data('slide-items') : multiply);
			if (isAJN && !rgb.rgbIsMobile()) {
				multiply = ($(this).parents('.cols4').length > 0) ? 2 : 4;
			}

			var id = $(this).closest(".slider").attr("id");
			var step = parseInt($('#' + id + ' .item').outerWidth(true) * multiply);

			if (parseInt($('#' + id + '-viewport ul').width(), 10) < step) {
				$('#' + id + ' .next').addClass('disabled');
				return false;
			}

			var leftnow = parseInt($('#' + id + '-viewport ul').css('left'), 10);
			newleft = parseInt(leftnow) - step;
			nextleft = newleft - step;
			if ((nextleft * -1) >= parseInt($('#' + id + '-viewport ul').width(), 10)) {
				$('#' + id + ' .next').addClass('disabled');
			} else {
				$('#' + id + ' .prev').removeClass('disabled');
			}
			if ((newleft * -1) >= parseInt($('#' + id + '-viewport ul').width(), 10)) {
				return false;
			} else {
				$('#' + id + '-viewport ul').animate({
					left: newleft
				});
				$('#' + id + ' .prev').removeClass('disabled');
				return false;
			}
		});
		$(document).on('click', '.prev a', function () {
			multiply = ($(this).closest(".slider").data('slide-items') && !rgb.rgbIsMobile() ? $(this).closest(".slider").data('slide-items') : multiply);
			if (isAJN && !rgb.rgbIsMobile()) {
				multiply = ($(this).parents('.cols4').length > 0) ? 2 : 4;
			}
			var id = $(this).closest(".slider").attr("id");
			var step = parseInt($('#' + id + ' .item').outerWidth(true) * multiply);
			var leftnow = parseInt($('#' + id + '-viewport ul').css('left'), 10);
			newleft = parseInt(leftnow) + step;
			nextleft = newleft + step;

			if (nextleft > 0) {
				$('#' + id + ' .prev').addClass('disabled');
			} else {
				$('#' + id + ' .next').removeClass('disabled');
			}
			if (newleft > 0) {
				return false;
			} else {
				$('#' + id + '-viewport ul').animate({
					left: newleft
				});
				$('#' + id + ' .next').removeClass('disabled');
				return false;
			}
		});
	},
	rgbMostPopularSliderNav: function () {
		// Most Popular slider
		if ($('#most-slider').length) {
			var step = parseInt($('#most-slider .item').outerWidth(true));

			$(document).on('click', '.next a', function () {
				if (parseInt($('.most-slider-viewport ul').width(), 10) < step) {
					$('#most-slider .next').addClass('disabled');
					return false;
				}

				var leftnow = parseInt($('.most-slider-viewport ul').css('left'), 10);
				newleft = parseInt(leftnow) - step;
				nextleft = newleft - step;
				if ((nextleft * -1) >= parseInt($('.most-slider-viewport ul').width(), 10)) {
					$('#most-slider .next').addClass('disabled');
				} else {
					$('#most-slider .prev').removeClass('disabled');
				}
				if ((newleft * -1) >= parseInt($('.most-slider-viewport ul').width(), 10)) {
					return false;
				} else {
					$('.most-slider-viewport ul').animate({
						left: newleft
					}, 200);
					$('#most-slider .prev').removeClass('disabled');
					return false;
				}
			});
			$(document).on('click', '.prev a', function () {
				var leftnow = parseInt($('.most-slider-viewport ul').css('left'), 10);
				newleft = parseInt(leftnow) + step;
				nextleft = newleft + step;
				if (nextleft > 0) {
					$('#most-slider .prev').addClass('disabled');
				} else {
					$('#most-slider .next').removeClass('disabled');
				}
				if (newleft > 0) {
					return false;
				} else {
					$('.most-slider-viewport ul').animate({
						left: newleft
					}, 200);
					$('#most-slider .next').removeClass('disabled');
					return false;
				}
			});
		}
	},
	rgbMailchimpSubmitForm: function () {
		$(document).on('click', '.newsletter .submit', function (event) {
			event.preventDefault();
			var location = $(this).parents('.newsletter');
			var website = location.data('website');
			var from = location.data('from');
			var errorBox = location.find('.newsletter-error');
			errorBox.hide();
			var email = location.find('.email-address').val();
			var jewishweekLists = [];
			if (website == 'jewishweek' && $('.checkboxes').length) {
				jewishweekLists = $('.checkboxes input:checkbox:checked').map(function () {
					return $(this).val();
				}).get();
			}

			if (email == ' ' || rgb.rgbIsValidEmailAddress(email) === false) {
				errorBox.fadeIn();
			} else {
				errorBox.hide();
				jQuery.ajax({
					type: "POST",
					url: "/wp-content/themes/rgb/functions/mailchimp/form_submit.php",
					data: "email=" + email + "&website=" + website + ((jewishweekLists.length > 0) ? "&lists=" + jewishweekLists : ''),
					cache: false
				}).done(function (msg) {
					if (msg == 'Success') {
						var html = '<div class="almost thank-you">';
						html += '<div class="big">Thank you</div>';
						html += '<p>Your subscription to our list has been confirmed.</p>';
						html += '</div>';
						location.html(html);
						ga('send', 'event', 'signup', 'newsletter signup', from, 1);
					} else if (msg == 'accompli') {
						var html = '<div class="almost thank-you">';
						html += '<div class="big">Merci !</div>';
						html += '<p>Votre inscription a été confirmée.</p>';
						html += '</div>';
						location.html(html);
						ga('send', 'event', 'signup', 'FR newsletter signup', from, 1);
					} else {
						errorBox.find('span').html(msg);
						errorBox.fadeIn();
					}
				});
			}
		});
	},
	rgbIsEditor: function () {
		$.ajax({
			method: "POST",
			url: "/wp-admin/admin-ajax.php",
			data: {
				action: 'is_user_logged_in'
			},
			dataType: "json",
		}).done(function (udata) {
			if ($('.edit').length && udata.is_editor == 'yes') {
				$('.edit').removeClass('empty');
			} else {
				$('.edit').remove();
			}
		});
	},
	rgbAnimateShareNumber: function () {
		$('.shares .number').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	},
	rgbLoadSingleContent: function () {
		// params
		var nextArtcleId = $('.article').data('next_article_id');
		var articleDoSalaIS = $('.article').data('article_do_sala_is');
		var firstArticleId = $('.article').data('article_id');
		var currentArticleId = $('.article').data('article_id');
		var scrollOffsetTop = 1;
		var callAjaxStopper = false;
		var doChangesStopper = false;
		var stratToChangeMetas = false;
		var articleIdLoad = 0;
		var oldArticleId = 0;

		// start scroll
		if (nextArtcleId || articleDoSalaIS == 1) {
			$(window).scroll(function () {
				//console.log(rgb.salaIndexItem);
				if (!$('.wrap-article.liveblog.article-popup').hasClass('active')) {
					var scrollTop = $(window).scrollTop();
					// get the next article params
					if (nextArtcleId) {
						if ($('#article_' + nextArtcleId).length && $('#article_' + nextArtcleId).data('next_article_id')) {
							scrollOffsetTop = $('#article_' + nextArtcleId).offset().top - ($(window).height() * 2);
							// have to be come after scrollOffsetTop
							nextArtcleId = $('#article_' + nextArtcleId).data('next_article_id');
						}
					} else {
						if (rgb.salaIndexItem == 0 && articleDoSalaIS == 1) {
							scrollOffsetTop = $('#article_' + firstArticleId).offset().top - ($(window).height() * 2);
							// have to be come after scrollOffsetTop
							nextArtcleId = firstArticleId; //$('#article_'+nextArtcleId).data('next_article_id');
						}
					}


					// get the next article ajax
					if (nextArtcleId && scrollOffsetTop && nextArtcleId != articleIdLoad) {
						if (scrollTop >= scrollOffsetTop) {
							if (!callAjaxStopper) {
								rgb.salaIndexItem++;
								callAjaxStopper = true;
								$.ajax({
									method: "GET",
									url: "/wp-content/themes/rgb/ajax/load_single_content.php",
									data: {
										action: 'load_single_content',
										post_id: nextArtcleId,
										first_post_id: firstArticleId,
										sala_index_item: rgb.salaIndexItem
									},
									dataType: "html",
								}).done(function (html) {
									callAjaxStopper = false;
									$('.main .wrap-article').append(html);
									nextArtcleId = $(html).data('article_id');

									// load sticky sidebar function
									if ($('.sticky-sidebar').length && !$('body').hasClass('mobile')) {
										rgb.rgbStickySidebar();
									}
									// ## load article widgets (facebook,banners,twitter) ##
									var currentArticleIdLoad = 'article_' + nextArtcleId;
									articleIdLoad = $('#' + currentArticleIdLoad).data('article_id');
									if ($('body').hasClass('AJN')) {
										//console.log(currentArticleIdLoad);
										$('#' + currentArticleIdLoad + ' .banner').each(function () {
											var slotName = $(this).data('name');
											var slotOldName = $(this).data('old-name');
											var slotSize = $(this).data('size');
											var slotClass = $(this).data('class');
											var slotAccount = $(this).data('account');
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, slotName, slotSize, slotClass, slotAccount, slotOldName); // currentArticleId,articleId,slotName,slotSize,slotClass
										});
									} else {
										if (!rgb.rgbIsMobile()) {
											// Google dfp sidebar
											var website = window.location.hostname;
											if(website == 'jewishnews.timesofisrael.com' || website == 'jewishndev.timesofisrael.com'){
												rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_SKY_1', [
													[300, 1050],
													[300, 600],
													[300, 250]
													], '.banner.BTF_SKY_1');
											}else{
												rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_SKY_1', [300, 600], '.banner.BTF_SKY_1');
											}
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_1', [300, 250], '.banner.BTF_MPU_1');
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_2', [300, 250], '.banner.BTF_MPU_2');
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_3', [300, 250], '.banner.b300x250.BTF_MPU_3');
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_4', [300, 250], '.banner.BTF_MPU_4');
											// Google dfp top
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'ATF_LB_1', [
												[728, 90],
												[970, 250],
												[970, 300],
												[970, 600]
											], '.banner.ATF_LB_1');
											// Google dfp videos
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_3', [
												[600, 467], 'fluid'
											], '.banner.b600x467.BTF_MPU_3');
											// JewishWeek Banners
											if ($('.BTF_MPU_5').length) {
												rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_5', [300, 250], '.banner.BTF_MPU_5');
											}
											if ($('.BTF_MPU_6').length) {
												rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_MPU_6', [300, 250], '.banner.BTF_MPU_6');
											}
											if ($('.BTF_LB_1').length) {
												rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'BTF_LB_1', [
													[970, 250],
													[970, 90],
													[728, 90]
												], '.banner.BTF_LB_1');
											}
										} else {
											// Google dfp top
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'LB_1', [
												[320, 100],
												[320, 50]
											], '.banner.LB_1');
											// Google dfp mpu
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'MPU_1', [300, 250], '.banner.MPU_1');
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'MPU_2', [300, 250], '.banner.MPU_2');
											// Google dfp videos
											rgb.rgbLoadBanner(currentArticleIdLoad, articleIdLoad, 'MPU_3', [320, 303], '.banner.b320x303.MPU_3');
										}
									}
									// slider
									rgb.rgbRslider();
									// Facebook reload
									try {
										FB.XFBML.parse(document.getElementById(currentArticleIdLoad));
									} catch (ex) {}
									// Twitter reload
									if ($('#' + currentArticleIdLoad + ' .twitter-tweet').length) {
										$('.twitter-tweet').each(function () {
											twttr.widgets.load($(this)[0]);
										});
									}
									// find external links
									if ($('.the-content a').length) {
										rgb.rgbExternalLinksInContent();
									}
									$(".the-content").fitVids();
									// share counter
									// rgb.rgbAnimateShareNumber();
									rgb.rgbIsEditor();
									// Outbrain
									if ($('.OUTBRAIN').length) {
										OBR.extern.researchWidget();
									}
									// gallery
									if ($('.gallery-item a').length) {
										$('.gallery-item a').attr('data-featherlight', 'image');
									}
								});
							}
						}
					}

					// get and set current article scroll meta
					var articles = $('.article');
					var array = [];
					$('.article').each(function (x, v) {
						if ($(this).offset().top <= scrollTop) {
							array.push(x);
						} else {
							array.splice(x, 1);
						}
					});

					// set when to start change metas
					if (array.length > 1) {
						stratToChangeMetas = true;
					}
					// set article metas (all data after new article loaded)
					if (array.length > 0 && stratToChangeMetas == true) {
						var currentArticleId = $(articles[array.length - 1]).attr('id');
						if (oldArticleId != 0 && oldArticleId != currentArticleId) {
							if (doChangesStopper) {
								doChangesStopper = false;
							}
						}
						if ($('#' + currentArticleId).offset().top <= scrollTop) {
							if (!doChangesStopper) {
								rgb.rgbChangeArticleMetas(currentArticleId);
								rgb.rgbReplaceState(currentArticleId);
								rgb.rgbChangeShareLinks(currentArticleId);
								rgb.rgbGoogleAnalyticsPageView(currentArticleId);

								// set old article id meta
								oldArticleId = currentArticleId;
								doChangesStopper = true;
							}
						}
					}
				}
			});
		}
	},
	rgbArticleLiveblogPopup: function () {
		$(document).on('click', '.article-popup-close', function () {
			var parentaArticleId = $('.main .article').attr('id');
			rgb.rgbChangeArticleMetas(parentaArticleId);
			rgb.rgbReplaceState(parentaArticleId);
			rgb.rgbChangeShareLinks(parentaArticleId);
			rgb.rgbGoogleAnalyticsPageView(parentaArticleId);
			$('.article-popup').fadeOut().removeClass('active').remove();
			$('body.liveblog_entry-template-default.single.mobile .main').show();
		});
	},
	rgbWriterDropdown: function () {
		$(document).on('click', '.add-after', function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.writer-details').slideUp();
			} else {
				$(this).addClass('active');
				$('.writer-details').slideDown();
			}
		});
	},
	rgbChangeArticleMetas: function (articleId) {
		if (articleId) {
			rgb.rgbSingleCurrentArticle = $('#' + articleId).data('article_id');
			// get metas
			var articleTitle_full = $('#' + articleId).data('article_title_full');
			var articleTitle = $('#' + articleId).data('article_title');
			var articleUrlHttp = $('#' + articleId).data('article_url_http');
			var articleUrl = $('#' + articleId).data('article_url');
			var articleDescription = $('#' + articleId).data('article_description');
			var articleImageUrl = $('#' + articleId).data('image_url');
			var articleImageWidth = $('#' + articleId).data('image_width');
			var articleImageHeight = $('#' + articleId).data('image_height');
			// change sticky header title
			$('.header-title').text(articleTitle);
			// change metas
			document.title = articleTitle_full;
			$('meta[property="og:image"],meta[name="twitter:image"]').attr('content', articleImageUrl);
			$('meta[property="og:image:width"]').attr('content', articleImageWidth);
			$('meta[property="og:image:height"]').attr('content', articleImageHeight);
			$('meta[property="og:title"],meta[name="twitter:title"]').attr('content', articleTitle);
			$('meta[property="og:type"]').attr('content', 'article');
			$('meta[property="og:url"]').attr('content', articleUrlHttp);
			$('link[rel="canonical"]').attr('href', articleUrl);
			$('meta[property="og:description"],meta[name="twitter:description"],meta[name="description"]').attr('content', articleDescription);
		}
	},
	rgbReplaceState: function (articleId) {
		// change state
		var articleHistoryId = $('#' + articleId).data('article_id');
		var articleTitle = $('#' + articleId).data('article_title');
		var articleUrl = $('#' + articleId).data('article_url');
		var stateObj = {
			article: articleHistoryId
		};
		history.replaceState(stateObj, articleTitle, articleUrl);
	},
	rgbChangeShareLinks: function (articleId) {
		$('.social-header li').remove();
		var socilitems = $('#' + articleId + ' .under-headline .social li:not(.shares)').clone().appendTo(".social-header");
	},
	rgbGoogleAnalyticsPageView: function (articleId, url, title) {
		var url = (url ? url : $('#' + articleId).data('article_url'));
		var title = (title ? title : $('#' + articleId).data('article_title'));
		var path = url.replace(document.location.origin, '');

		// Track a virtual page
		ga('set', {
			page: path,
			title: title
		});
		ga('send', 'pageview');

		// Partner pageview
		if ($('body').data('google_analytics_partner_id')) {
			ga('partnerTracker.set', {
				page: path,
				title: title
			});
			ga('partnerTracker.send', 'pageview');
			// GA EVENT ON INFINITE SCROLL
			if(!$('#' + articleId).hasClass('infinite-scroll-event-sent')){
				rgb.rgbGoogleAnalyticsPageViewEventIndex++;
				var onlyArtcleId = $('#' + articleId).data('article_id');
				ga('partnerTracker.send', 'event', 'Infinite Scroll', 'scroll', rgb.rgbGoogleAnalyticsPageViewEventIndex, onlyArtcleId);
				$('#' + articleId).addClass('infinite-scroll-event-sent');
			}
		}

		// Partner private pageview
		if ($('body').data('private_google_analytics_partner_id')) {
			ga('privatePartnerTracker.set', {
				page: path,
				title: title
			});
			ga('privatePartnerTracker.send', 'pageview');
		}
	},

	// rgbLoadBanner : function(currentArticleId,articleId,slotName,slotSize,slotClass) {
	// 	var slotId = slotName + '_' + articleId;
	// 	if ($('#' + slotId).length == 0 && $(slotClass).length) {
	// 		$('#' + currentArticleId + ' ' + slotClass).attr('id', slotId);
	// 		googletag.cmd.push(function() {
	// 			var slot = googletag.defineSlot('/264857099/' + ad_website + '/' + ad_page + '/' + ad_page_type + '/'+slotName, slotSize, slotId).addService(googletag.pubads());
	// 			googletag.display(slotId);
	// 			googletag.pubads().clearTargeting();
	// 			slot.setTargeting('TOI_articleID', articleId);
	// 			slot.setTargeting('TOI_video', 'false');
	// 			slot.setTargeting('TOI_firstArticle', 'false');
	// 			googletag.pubads().refresh([slot]);
	// 		});
	// 	}
	// },
	rgbLoadBanner: function (currentArticleId, articleId, slotName, slotSize, slotClass, slotAccount, slotOldName) {
		var slotId = ((typeof (slotOldName) != "undefined" && slotOldName !== null) ? 'div-gpt-ad-' + slotOldName : slotName) + '_' + articleId;
		var account = (typeof (slotAccount) != "undefined" && slotAccount !== null) ? slotAccount : 264857099;
		if ($('#' + slotId).length == 0 && $(slotClass).length) {
			$('#' + currentArticleId + ' ' + slotClass).attr('id', slotId);
			//console.log('/' + account + '/' + ad_website + '/' + ad_page + '/' + ad_page_type + '/'+slotName, slotSize, slotId);
			googletag.cmd.push(function () {
				if ($('body').hasClass('AJN')) {
					var slot = googletag.defineSlot('/' + account + '/' + ad_website + '/' + ad_page + '//' + ad_page_type + '//' + slotName, slotSize, slotId).addService(googletag.pubads());
				} else {
					var slot = googletag.defineSlot('/' + account + '/' + ad_website + '/' + ad_page + '/' + ad_page_type + '/' + slotName, slotSize, slotId).addService(googletag.pubads());
				}
				googletag.display(slotId);
				googletag.pubads().clearTargeting();
				slot.setTargeting('TOI_articleID', articleId);
				slot.setTargeting('TOI_video', 'false');
				slot.setTargeting('TOI_firstArticle', 'false');
				googletag.pubads().refresh([slot]);
			});
		}
	},
	rgbExternalLinks: function () {
		// open external link in new window
		$(document).on('click', 'a[rel=external]', function () {
			this.target = "_blank";
		});
	},
	rgbExternalLinksInContent: function () {
		$('.the-content a').not('[href*="mailto:"]').each(function () {
			var isInternalLink = new RegExp('/' + window.location.host + '/');
			if (!isInternalLink.test(this.href)) {
				$(this).attr('target', '_blank');
			}
		});
	},
	rgbIsValidEmailAddress: function (emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.) {2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	},
	rgbTimeAgo: function (timestamp) {
		var secPerMinute = 60;
		var secPerHour = secPerMinute * 60;
		var secPerDay = secPerHour * 24;
		var secPerMonth = secPerDay * 30;
		var secPerYear = secPerDay * 365;

		var current = Math.floor(Date.now() / 1000);
		var elapsed = current - timestamp;

		// Translate on FR
		var ago = (!$('body').hasClass('fr')) ? 'ago' : '';
		var ago_fr = ($('body').hasClass('fr')) ? 'il y a ' : '';

		var hr = ($('body').hasClass('fr')) ? 'h ' : 'hr ';
		var d = ($('body').hasClass('fr')) ? 'j ' : 'd ';
		var mo = ($('body').hasClass('fr')) ? 'mois ' : 'mo ';
		var yr = ($('body').hasClass('fr')) ? 'an ' : 'yr ';

		if (elapsed < secPerMinute) {
			return ago_fr + elapsed + 'sec ' + ago;
		} else if (elapsed < secPerHour) {
			return ago_fr + Math.round(elapsed / secPerMinute) + 'min ' + ago;
		} else if (elapsed < secPerDay) {
			return ago_fr + Math.round(elapsed / secPerHour) + hr + ago;
		} else if (elapsed < secPerMonth) {
			return ago_fr + Math.round(elapsed / secPerDay) + d + ago;
		} else if (elapsed < secPerYear) {
			return ago_fr + Math.round(elapsed / secPerMonth) + mo + ago;
		} else {
			return ago_fr + Math.round(elapsed / secPerYear) + yr + ago;
		}
	},
	rgbBackToTop: function () {
		$(document).on('click', '.back-to-top a', function (event) {
			event.preventDefault();
			window.scrollTo(0, 0);
			return false;
		});
	},
	rgbFixSliderHeight: function () {
		$('.slider-viewport').each(function () {
			var height = $(this).find('ul').outerHeight(true);
			$(this).height(height);
			if ($(this).parents('aside').hasClass('sidebar')) {
				var outerHeight = height + 60;
				$(this).parent('.slider').height(outerHeight);
			}
		});
	},
	rgbFixCF7SelectPlaseholder: function () {
		$('.wpcf7 select').each(function () {
			var placeholder = $(this).parents('p').find('.placeholder').text();
			if ($(this).find('option:first').text() == '---' || $(this).find('option:first').val() == '') {
				$(this).find('option:first').text(placeholder);
			}
		});
	},
	rgbLiveBlogRefresh: function () {
		var auto_refresh_lb;
		var last_entry = $('.liveblogdiv div:first-child').attr('data-item');
		var latest_update = $('.liveblogdiv > div:first-child .liveblog-date span').data('timestamp');
		var post_id = ($(".liveblogdiv").attr('id') ? $(".liveblogdiv").attr('id').replace('liveblog-', '') : '');
		auto_refresh_lb = setInterval(
			function () {
				$.ajax({
						type: "GET",
						url: "/wp-content/themes/rgb/ajax/load_liveblog_entries.php",
						data: "post_id=" + post_id + "&latest_update=" + latest_update,
					})
					.done(function (html) {
						if (html != '') {

							// prepend the new entries
							$(".liveblogdiv").prepend(html);
							last_entry = $('.liveblogdiv div:first-child').attr('data-item');
							latest_update = $('.liveblogdiv > div:first-child .liveblog-date span').data('timestamp');
							$("#liveblog-entry-" + last_entry).fadeTo(0, 0, function () {
								$(this).css('display', 'none');
								$(this).css('position', 'absolute');
								// now the element is in DOM we can ask how big it is with height()
								$(this).css('margin-bottom', ((-1 * $("#liveblog-entry-" + last_entry).height()) + 3) + 'px');
								// now we have a good margin we can add the thing in properly.
								$(this).css('display', 'flex');
								$(this).css('position', 'relative');
								$(this).animate({
									marginBottom: '35px'
								}, 1000, 'swing', function () {
									$(this).fadeTo('slowly', 1);
								});
							});

							// update facebook/twitter
							try {
								FB.XFBML.parse(document.getElementById("liveblog-entry-" + last_entry));
							} catch (ex) {}
							twttr.widgets.load(document.getElementById("liveblog-entry-" + last_entry));

							// update overline
							var timestamp = $('#liveblog-entry-' + last_entry + ' .liveblog-date span').data('timestamp');
							var timeAgo = rgb.rgbTimeAgo(timestamp);
							$('.above-headline .overline').html('Updated ' + timeAgo);

							// update last 4 entries
							var string = '';
							$('.liveblogdiv > div').each(function (index, value) {
								if (index > 3) return false;
								var entry_id = $(this).data('item');
								var timestamp = $(this).find('.liveblog-date span').data('timestamp');
								var timeAgo = rgb.rgbTimeAgo(timestamp);
								var title = $(this).find('h4').text();
								string += '<li class="liveblog-item">';
								string += '<div class="liveblog-date">';
								string += '<a href="#liveblog-entry-' + entry_id + '">';
								string += '<span data-timestamp="' + timestamp + '" title="' + timeAgo + '">' + timeAgo + '</span>';
								string += '</a>';
								string += '</div>';
								string += '<div class="liveblog-headline">';
								string += '<a href="#liveblog-entry-' + entry_id + '">' + title + '</a>';
								string += '</div>';
								string += '</li>';
							});
							if (string != '') {
								$('.liveblog-timeline').html(string);
							}
						}
					});
			}, 60000);
	},
	rgbPrintArticle: function () {
		var lastPoint = 0;
		$(document).on('click', '.print a', function (e) {
			e.preventDefault();
			if (!rgb.rgbSingleCurrentArticle) {
				rgb.rgbSingleCurrentArticle = $('article').data('id');
			}
			console.log(rgb.rgbSingleCurrentArticle);
			$('.article').removeClass('print-active');
			lastPoint = $(window).scrollTop();
			$('#article_' + rgb.rgbSingleCurrentArticle).addClass('print-active');
			window.print();
		});
		window.onafterprint = function () {
			$('body,html').scrollTop(lastPoint);
		}
	},
	rgbArticleReadMore: function () {
		$('.article').first().removeClass('read-more-close');
		$('.article').first().addClass('read-more-open');
		$('.article').first().find('.article-read-more').remove();
		$(document).on('click', '.article-read-more', function () {
			var RMBtn = $(this);
			var RMBtnParent = RMBtn.parents('.article');
			if (RMBtnParent.hasClass('read-more-close')) {
				RMBtnParent.removeClass('read-more-close');
				RMBtnParent.addClass('read-more-open');
			} else {
				RMBtnParent.addClass('read-more-close');
				RMBtnParent.removeClass('read-more-open');
				$('html,body').animate({
					scrollTop: RMBtnParent.offset().top + RMBtnParent.height() - $(window).height() + 150
				}, 'fast');
				rgb.rgbLoadSingleContent();
			}
		});
	},
	rgbLiveBlogGooglePageView: function () {
		var stop = false;
		var currentItem = false;
		var blogItems = $('.the-content .liveblogdiv > div').toArray();
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			$.each(blogItems, function (x, v) {
				var blogItem = $(v);
				if (blogItem.length) {
					var blogOffsetTop = blogItem.offset().top;
					if (scrollTop >= blogOffsetTop) {
						var blogId = blogItem.attr('id');
						var blogTitle = "Liveblog Entry: " + $("#" + blogId + " .liveblog-paragraph > h4").text();
						var blogUrl = $(".article").data("article_url") + blogId;
						blogItems.splice(x, 1);
						console.log(blogUrl, blogTitle);
						rgb.rgbGoogleAnalyticsPageView(false, blogUrl, blogTitle);
						return true;
					}
				}
			});
		});
	},
	rgbCommunityMenu: function () {
		var communityHeaderMenu = $('.header .header-community-menu'),
			communityFooterMenu = $('.footer-community .footer-community-menu'),
			communityLoggedMenu = '';

		communityLoggedMenu += '<li><a href="https://crm.timesofisrael.com/profile"><span>My profile</span></a></li>';
		communityLoggedMenu += '<li><a href="https://crm.timesofisrael.com/sign-out"><span>Sign out</span></a></li>';

		if (document.cookie.indexOf('CRMSESSION=') !== -1) {
			communityHeaderMenu.html(communityLoggedMenu);
			communityFooterMenu.html(communityLoggedMenu);
		}
	}
}

jQuery(document).ready(rgb.init);