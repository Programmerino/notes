jQuery(document).ready(function () {

	// {TOI} Check podcast page
	$('#topic-load-more-btn').on('click', function ( event ) {
		event.preventDefault();
		let $this     = $(this);
		let parent    = $this.closest('.posts-block');
		let row       = parent.find('.row');
		let tag       = $this.data('tag');
		let tag_id    = $this.data('tag_id');
		let offset    = row.find('.post-item').length + 1;
		let preloader = $this.parent().find('.ajaxloader');

		$.ajax({
			type: "POST",
			url: window.wp_data.ajax_url,
			data : {
				action : 'rgb_load_more_topic_terms',
				tag    : tag,
				tag_id : tag_id,
				offset : offset
			},
			beforeSend: function() {
				preloader.show();
			},
			success: function( data ) {

				if( data != '' ) {
					row.append(data);
				} else {
					$this.parent().slideUp();
				}

				if( $('.load-more-hidden').length > 0 ) {
					$this.parent().slideUp();
				}

				preloader.hide();
			}
		});
	});

	// show hidden part of crm-post-module
	$(document).on('click', 'a.crm-article-popup__read-more-link', function ( event ) {
		event.preventDefault();
		let $this = $(this);
		let parent = $this.parent();
		let hiddenModule = parent.find('.crm-article-popup__hidden-content');
		if( hiddenModule.is(':visible') ) {
			hiddenModule.slideUp();
		} else {
			$this.slideUp();
			hiddenModule.slideDown();
		}
	});

	// outbrain mobile
	rgbAddMobileOutbrain();

	setTimeout(setWidgetHeight, 500);
	if ($('body').hasClass('home') || $('body').hasClass('single') && !$('body').hasClass('single-liveblog_entry')) {
		newsletterPopup();
	}
	$(document).on('click', '#partners-slider .sub-menu a', function (e) {
		e.preventDefault();
		var id = $(this).data('id');
		if (id != 0) {
			$.ajax({
				type: 'POST',
				dataType: 'html',
				url: '/wp-content/themes/rgb/ajax/partners.php',
				data: {
					id: id
				}
			}).done(function (html) {
				$('#partners-slider').html(html);
			});
		} else {
			location.assign($(this).attr('href'));
		}
	});

	// CRM Bottom popup
	var $crmBottomPopup = $('.crm-bottom-popup');

	if ($crmBottomPopup.length && navigator.userAgent.indexOf('rgbmedia-app') == -1) {
		if (!getCookie('cookieconsent_status') && false) {
			var windowClickFn = function (e) {
				if (e.target.classList.contains('cc-dismiss')) {
					window.removeEventListener('click', windowClickFn);
					if (!getCookie('crm-bottom-popup') && !getCookie('CRMSESSION')) {
						showCrmBottomPopup();
					} else {
						$('.crm-bottom-popup').remove();
					}
				}
			};

			window.addEventListener('click', windowClickFn);
		} else if(!($('body').hasClass('mobile'))) {
			if (!getCookie('crm-bottom-popup') && !getCookie('CRMSESSION')) {
				showCrmBottomPopup();
			} else {
				$('.crm-bottom-popup').remove();
			}
		}

		function showCrmBottomPopup() {
			var $crmBottomPopup = $('.crm-bottom-popup'),
				$crmBottomPopupCloseBtn = $('.crm-bottom-popup__close', $crmBottomPopup);

			setTimeout(() => {
				$crmBottomPopup.addClass('open');
				setCookie('crm-bottom-popup', 1, (24 * 60 * 60 * 1000)); // 1 days
				ga('send', 'event', 'CRM', 'CRM Popup show', 'CRM Popup show up',1);
			}, 1000);

			$crmBottomPopupCloseBtn.click(function () {
				$crmBottomPopup.removeClass('open');
			});
		}
	}

	// CRM article module
	var $crmPostModuleMark = $('.article .article-content .crm-post-module-mark');
	if ($crmPostModuleMark.length && !getCookie('CRMSESSION'))
		$.ajax({
			type: 'GET',
			dataType: 'html',
			url: '/wp-content/themes/rgb/includes/crm/crm-post-module.php',
		}).done(function (html) {
			$crmPostModuleMark.after(html);
			$crmPostModuleMark.remove();
		});

	if ($('.the-content .liveblogdiv > div').length && !rgb_remove_toi_dfp_banner('')) {
		rgbLiveBlogAddBanners();
	}
});

function newsletterPopup() {

	var folder = ($('body').hasClass('mobile')) ? 'rgb-mobile' : 'rgb';
	var nlSuiPopup = "https://www.timesofisrael.com/wp-content/themes/" + folder + "/nl-sui-popup.html";
	var nlPopup = "https://www.timesofisrael.com/wp-content/themes/rgb/new-nl-popup.html";
	var src = ($('body.single').hasClass('category-start-up-israel') ? nlSuiPopup : nlPopup);
	var ctime = 7 * 24 * 60 * 60 * 1000; // 7 days
	var cname = ($('body.single').hasClass('category-start-up-israel') ? 'nlSuiPopup' : 'nlPopup');
	var height = ($('body').hasClass('mobile')) ? ((cname == 'nlSuiPopup') ? 317 : 505) : ((cname == 'nlSuiPopup') ? 565 : 415);
	var width = ($('body').hasClass('mobile')) ? 288 : ((cname == 'nlSuiPopup') ? 800 : 810);
	var stop = false;
	var point = ($('body').hasClass('home') ? '#hp_section_2' : '#comments');

	if (!getCookie(cname)) {
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			if ($(point).length) {
				if (scrollTop >= $(point).offset().top) {
					if (!stop) {
						//$.modal({width:width,height:height,src:src}).open();
						popup(src, width, height, cname);
						setCookie(cname, 1, ctime);
						stop = true;
					}
				}
			}
		});
	}
}

function popup(src, width, height, cname) {
	// open
	$('.modal-overlay,.modal-window').remove();
	var marginLeft = (width / 2) * -1;
	var marginLop = (height / 2) * -1;
	var html = '<div id="modal" class="modal-window" style="width:' + width + 'px; height:' + height + 'px; margin-left:' + marginLeft + 'px; margin-top:' + marginLop + 'px;display:none;">'
	html += '<div class="modal-close"></div>';
	html += '<iframe width="100%" height="100%" frameborder="0" scrolling="auto" allowtransparency="true" src="' + src + '" onload="iframeOnload()"></iframe>';
	html += '</div>'
	$('body').append('<div class="modal-overlay ' + cname + '"></div>');
	$('body').append(html);

	// close
	$(document).on("click", ".modal-close", function (e) {
		$('.modal-overlay,.modal-window').fadeOut().remove();
	});

	// resize
	$(window).resize(function () {
		if ($('.modal-window').length) {
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
}

function iframeOnload() {
	$('.modal-overlay').addClass('active');
	$('#modal').show();
}

function setWidgetHeight() {
	if ($('.cols4.reverse').length && $('.cols2.reverse .widget').length) {
		var minusheight = parseInt(($('.cols2.reverse .widget').outerHeight() - $('.cols2.reverse .widget-body').outerHeight()), 10);
		if ($('.cols2.reverse .banner').length) {
			minusheight = minusheight + parseInt($('.cols2.reverse .banner').outerHeight()) + 45;
		}
		var cols4height = parseInt($('.cols4.reverse').height(), 10);
		var widgetBodyHeight = cols4height - minusheight;
		$('.cols2.reverse .widget-body').animate({
			height: widgetBodyHeight + 'px'
		});
	}
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return false;
}

function setCookie(cname, cvalue, ctime) {
	var d = new Date();
	d.setTime(d.getTime() + (ctime)); // one here = 12*30*24*60*60*1000
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}


function rgbLiveBlogAddBanners() {
	var currentIndex = 1;
	var banner = '';
	var hasToi_4 = false;
	$('.the-content .liveblogdiv').prepend('<style>.TOI_Live_1,.TOI_Live_2,.TOI_Live_3,.TOI_Live_4 { width: 100%; height: 280px; margin-bottom:35px; }@media(min-width: 1000px) { .TOI_Live_1 { width: 100%; height: 90px; } }</style>');
	$('.the-content .liveblogdiv > div').each(function () {
		if (currentIndex == 1) {
			banner = '<ins class="adsbygoogle TOI_Live_1" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_1"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		} else if (currentIndex == 4) {
			banner = '<ins class="adsbygoogle TOI_Live_2" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_2"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		} else if (currentIndex == 7) {
			banner = '<ins class="adsbygoogle TOI_Live_3" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_3"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		} else if (currentIndex >= 10 && (currentIndex - 1) % 3 == 0) { // evrey 3 entries
			hasToi_4 = true;
			banner = '<ins class="adsbygoogle TOI_Live_4" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_4"></ins>';
			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
			$(this).after(banner);
		}

		// if (currentIndex%3==0 && currentIndex <= 12) {
		// 	banner = '<ins class="adsbygoogle TOI_Live_' + (currentIndex/3) + '" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_' + (currentIndex/3) + '"></ins>';
		// 	banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
		// 	$(this).after(banner);
		// }
		currentIndex++;
	});
	// if (currentIndex < 12) {
	// 	for (var i = currentIndex; i < 12; i++) {
	// 		if (i%3==0) {
	// 			banner = '<ins class="adsbygoogle TOI_Live_' + (i/3) + '" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_' + (i/3) + '"></ins>';
	// 			banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
	// 			$('.the-content .liveblogdiv').append(banner);
	// 			if (i/3 == 4) {
	// 				hasToi_4 = true;
	// 			}
	// 		}
	// 	}
	// 	if (!hasToi_4) {
	// 		banner = '<ins class="adsbygoogle TOI_Live_4" style="display:inline-block" data-ad-client="ca-pub-8573325940152694" data-ad-slot="9455566877/TOI_Live_4"></ins>';
	// 		banner += '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
	// 		$('.the-content .liveblogdiv').append(banner);
	// 	}

	// }
};
function rgb_remove_toi_dfp_banner(bannerId) {
	if (getCookie('CRMSESSION')){
		if(bannerId!=''){
			$(bannerId).remove();
		}
		return true;
	}
	return false;
}

function rgbAddMobileOutbrain () {
	//console.log('function rgbAddMobileOutbrain');
	if($('body').hasClass('mobile') && $('body').hasClass('single') && navigator.userAgent.indexOf('rgbmedia-app') == -1){
		var bannerHtml  = '<div class="OUTBRAIN" data-src="' + (window.location.href).replace('dev', 'www') + '" data-widget-id="AR_3"></div>';
		//$('.OUTBRAIN[data-widget-id="AR_3"]').remove();
		$('.outbrain-replace').replaceWith(bannerHtml);
		OBR.extern.researchWidget();
	}
}

function rgbAddAppOutbrain(advertising_id,os){
	//console.log('function rgbAddAppOutbrain:' + advertising_id + ', ' + os);
	if(typeof advertising_id !== 'undefined' && typeof os !== 'undefined' && os !== null){ // && advertising_id !== null
		//var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		var isIOS = (os == 'ios') ? true : false;
		var widgetId = ((isIOS) ? 'MB_1' : 'MB_2');
		var appVer = ((isIOS) ? '3.2' : '3.0.9');
		var partnerKey = ((isIOS) ? 'TIMES25JPQ5PE30GMK56AFMN8' : 'TIMES20LJK2AGB8OAP1DMK42M');
		//var advertising_id = ((isIOS) ? '8F94EFC3-5F34-47AF-998E-3D8B792FC3F1' : '909e86b9-ecec-49a8-8eec-821291771e45');
		var bannerHtml = '<div class="OUTBRAIN" data-src="' + (window.location.href).replace('dev', 'www') + '"' +
			'data-widget-id="' + widgetId + '"' +
			'data-ob-template="Times Of Israel"' +
			'data-ob-installation-type="app_js_widget"' +
			'data-ob-user-id="' + ((advertising_id!='') ? advertising_id : null) + '"' +
			'data-ob-app-ver="' + appVer + '"' +
			'data-ob-installation-key="' + partnerKey + '">' +
			'</div>';

		$('.outbrain-replace').replaceWith(bannerHtml);
		//$('body').prepend(advertising_id + ', ' + os);
		OBR.extern.researchWidget();
	}
}

function rgbRemoveHeadBanners (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return false;
}

function checkRefreshedPages() {
  var refreshCount = 0;
  var currentUrl = window.location.href;
  var countRequest = Number(sessionStorage.getItem("countRequest"));
  var countRequestURL = sessionStorage.getItem("countRequestURL");
  // var startTime = Number(sessionStorage.getItem("startTime"));

  // INIT
  if (!countRequestURL && !countRequest) {
    var targetEvent = [currentUrl, refreshCount];
    sessionStorage.setItem("countRequestURL", currentUrl);
    sessionStorage.setItem("countRequest", refreshCount);
    // sessionStorage.setItem("startTime", currentTime);
    return targetEvent;
  }else{
    if (countRequestURL && countRequestURL == currentUrl) {
      sessionStorage.setItem("countRequest", countRequest + 1);
      var targetEvent = [countRequestURL, countRequest + 1];
      // sessionStorage.setItem("startTime", currentTime);
      return targetEvent;
    }else if (countRequestURL && countRequestURL !== currentUrl){
      var targetEvent = [countRequestURL, refreshCount];
      sessionStorage.setItem("countRequestURL", currentUrl);
      sessionStorage.setItem("countRequest", refreshCount);
      // sessionStorage.setItem("startTime", currentTime);
      return targetEvent;
    }
  }

  return [];
}