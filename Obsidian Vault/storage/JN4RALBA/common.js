/***********************************************
* common.js 모듈 수정 by SSC (2018.01.02~)
작업 설명 : 실 서비스 페이지 적용을 위해 수정
************************************************/

if(jQuery.browser.msie && jQuery.browser.version < 9) {
	!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
}

if(typeof Array.prototype.indexOf === "undefined") {
	Array.prototype.indexOf = function indexOf(member, startFrom) {
		if (this == null) {
			throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
		}
		var index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
			that = this instanceof Object ? this : new Object(this),
			length = isFinite(that.length) ? Math.floor(that.length) : 0;
		if (index >= length) {
			return -1;
		}
		if (index < 0) {
			index = Math.max(length + index, 0);
		}
		if (member === undefined) {
			do {
				if (index in that && that[index] === undefined) {
					return index;
				}
			} while (++index < length);
		} else {
			do {
				if (that[index] === member) {
					return index;
				}
			} while (++index < length);
		}
		return -1;
	};
}

if(typeof String.prototype.trim === "undefined") {
	String.prototype.trim = function () {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}
}

// set font
var currentFontSize='font-size03';
if(getCookie("cFontSize")) currentFontSize = getCookie("cFontSize");
/*
$(document).ready(function(){
	if( $('.story-view-zone').length ) currentFontSize = $('.text-group p').eq(0).css('font-size');
    if(getCookie("cFontSize")) currentFontSize = getCookie("cFontSize");
});
if(getCookie("cFontSize")) currentFontSize = getCookie("cFontSize");
*/

/** 2017년 퓨즈 개발 및 추가수정(SSC) */
(function(window, $) {
	var $html, $body, $lang, $pageActive01, $pageActive02, $pageActive03;
	var $is_svideo_close = window.$is_svideo_close = false;
	/** 브라우저 디바이스 확인 모듈 - 모바일일 경우 처리를 위해 설정함 */
	var checkDevice = (function(){
		var _check_device = function(){
			this.currentOS = null;
			this.mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
			if (this.mobile) {
				this.userAgent = navigator.userAgent.toLowerCase();
				if (this.userAgent.search("android") > -1){
					this.currentOS = "android";
				} else if ((this.userAgent.search("iphone") > -1) || (this.userAgent.search("ipod") > -1) || (this.userAgent.search("ipad") > -1)) {
					this.currentOS = "ios";
				} else {
					this.currentOS = "else";
				}
			} else {
				this.currentOS = "webViewer";
			}
			return this.currentOS;
		};
		return new _check_device();
	}());
	if( checkDevice.currentOS !== "webViewer" || checkDevice.mobile ){ /* 모바일 경우 */
		var meta = $("meta[name=viewport]")[0];
		if(meta){
			var arrayMeta = (meta.content).split(',');
			var newArray = $.map(arrayMeta, function(val){
				if( val.indexOf('width') !== -1 && val.indexOf('device-width') !== -1 ){ return 'width=1100'; }
				if( val.indexOf('densitydpi') !== -1 ){ return; }
				return val;
			});
			meta.content = newArray.join(',');
		}

		//TODO : 기존 설정이 왜 width 값만 설정했는지 모르겠음..일단 기존 내용은 주석처리!.
		//document.querySelector("meta[name=viewport]").content = "width=1100"
	}

	/*온로드 실행 함수 start*/
	/** html load complete start method */
	$(function() {
		//urgent가 있을 때
		if($('.urgent-news').css("display") === undefined) // 중문쪽은 따로 처리...
			$('.wrap-header').css('top','0');
		else if(!$('.urgent-news').hasClass("dis-none"))
			$('.wrap-header').css('top','60px');
		else//urgent가 없을 때
			$('.wrap-header').css('top','0');

		// 기존에 input value에 들어있는 value 값을 body안에 depth01과 depth02에 넣어줌
		var sectionName = $("#section").attr("value");
		var depthSection = $("#section02").attr("value");

		if(window.location.href.indexOf("/view/") >= 0) {
			$("body").attr("data-depth01", sectionName);

			if(depthSection !== undefined)
				$("body").attr("data-depth02", depthSection);
		}

		/**
		 * 왜 퓨즈에서 window 전역을 사용하는지 알 수 없음 ~
		 * 다른 script js 모듈에서 참조를 위한것인지?? 특별한 이유가 있는지??
		 * */
		$html = window.$html = $('html');
		$body = window.$body = $('body');
		$lang = window.$lang = $html.attr('lang');
		$pageActive01 = window.$pageActive01 = $body.attr('data-depth01');
		$pageActive02 = window.$pageActive02 = $body.attr('data-depth02');
		$pageActive03 = window.$pageActive03 = $body.attr('data-depth03');

		//전체 사이트 공통 함수 실행
		Master.init();

		//스트롤 이벤트 모음
		Master.scrollDetect();
		$(window).on('scroll',function () {
			Master.scrollEvt($(this));//공통 스크롤
			Master.scrollSns($(this)); //기사상세 스크롤
		});

		//페이지별 개별 함수
		if($body.hasClass('page-main')){
			//메인용 함수 실행
			MainCom.init();
			if( $('.main-video-nknow').length < 1 ){
				// 동적 컴포넌트가 있을 때와 없을 때를 분리하여 처리함
				var cp = function(){
					MainCom.MainVideo();
				};
				addCallback(cp);
				if( $('[data-type="auto"]').length < 1 ) MainCom.MainVideo();
			}
			if( $('.main-video-nknow').length ) YtbContent.init();

		}
		if($body.hasClass('page-view')){
			//기사상세 함수 실행
			articleCom.init();
			if( $('.view-nknow').length ) {
				YtbContent.init();
				VideoPlayCom.no_wraphead_View();
				VideoPlayCom.video_view();
			}
		}
		if($body.hasClass('page-video')){
			//기사상세 함수 실행
			if( $('.video-nknow').length < 1 ) {
				if( $('[data-type="auto"]').length ) {
					var tt = function(){
						VideoPlayCom.setSlide();
						VideoPlayCom.init();
					};
					addCallback(tt);
				} else {
					VideoPlayCom.setSlide();
					VideoPlayCom.init();
				}
			}
			if( $('.video-nknow').length ) YtbContent.init();

		}
		if($body.hasClass('page-image')){
			//기사상세 함수 실행
			ImageCom.init();
		}
		if($body.hasClass('page-search')){
			//기사상세 함수 실행
			SearchCom.init();
		}
		if($body.hasClass('page-k-brief')){
			//koreainbrief 함수 실행
			kbCom.init();
		}
		if($body.hasClass('page-most-viewed')){
			//article_view 함수 실행
			mvCom.init();
		}
		if($body.hasClass('page-kt')){	//[아랍]
			//kt_list 함수 실행
			KtCom.init();
		}
		if($body.hasClass('page-article')){
			//article_view 함수 실행
			ArticleView.init();
		}
		if($body.attr('data-attr') == 'pictorial'){ //[중문][일문]
			//pictorial 함수 실행
			picCom.init();
		}
		if($body.hasClass('page-saved')){
			//saved 함수 실행
			savedCom.init();
		}
		if($body.hasClass('page-festival') && !$pageActive02){
			//Festival Calendar함수 실행	fc_month_all.html은 실행하지 않음 $pageActive02='00'
			fcCom.init();
			// DLinker로 링크 연결
			try{ DLinker.link('.txt-desc','anc'); } catch(e) {}
		}
		if($body.hasClass('page-list') || $body.hasClass('page-main') || $body.hasClass('page-article')){
			//우측상단 탭 선택 [중문][일문]
			listCom.init();
		}
		if($body.hasClass('page-topics')){
			//topic 함수 실행
			topicCom.init();
		}
		if($('html').hasClass('webkit') && $('#audioPlayer01').length == 1){
			audioNews.init();
		}
		// cp.js가 동적으로 넣어주는 컴포넌트가 있을 경우에 imgCrop 나중에 실행
		if($('[data-type="auto"]').length){
			var cp = function(){
				imgCrop();
				if( Window.NOW_TIME == undefined ){
					var now = changeDateFormat.getNowTime();
					Window.NOW_TIME = now;
				}
				changeDateFormat.change(Window.NOW_TIME);
			};
			addCallback(cp);
		}

		//addClass
		$(".thumb-list-type01").find(".slick-arrow").wrapAll("<div class='arrow-box'></div>");
		$(".thumb-list-type02").find(".slick-arrow").wrapAll("<div class='arrow-box'></div>");
		$(".thumb-list-type03").find(".slick-arrow").wrapAll("<div class='arrow-box'></div>");
		$(".thumb-list-type04").find(".slick-arrow").wrapAll("<div class='arrow-box'></div>");
		$(".thumb-list-type05").find(".slick-arrow").wrapAll("<div class='arrow-box arrow-btn-size'></div>");

		var slickTimer = setInterval(function(){
			if($(".latest-news-slide").hasClass('slick-slider') && $(".weather-slide").hasClass('slick-slider')){
				$(".latest-news-slide").slick("play");
				$(".weather-slide").slick("play");
				clearInterval(slickTimer);
			}
		}, 500);

		imgCrop();
	});/*온로드 실행 함수 end*/

	var Master = {
		//Master.init
		init : function() {
			Master.common();
			Master.navActive();
			Master.gnb();
			Master.gnb02();
			Master.dim();
			Master.videoCom();
			Master.popUp();
			Master.latestNews();
			Master.weather();
			Master.weatherLayer();
			Master.datePicker();
			Master.sns();
			Master.latestNewsList();
			changeUrgentSection.init();
			Master.rssBtn();
			keywordZone.init();
			Master.searchEvent();
			Master.slideCom();
			Master.setTime();
			Master.frLastArticle();
		},
		common:function(){
			//언어 선택 영역
			$('.f-btn-lang').hover(function(e) {
				e.preventDefault();
				$('.f-btn-lang').addClass('on');
				$(this).parent().find(".f-lang-list").stop().slideDown(150).show();
				$(this).parent().hover(function() {
						$(this).parent().find(".f-lang-list").stop().slideDown(150).show();
					},
					function(e){
						e.preventDefault();
						$('.f-btn-lang').removeClass('on');
						$(this).parent().find(".f-lang-list").stop().slideUp('slow');
					});
			});
			$('.lang-menu .btn-lang').hover(function() {
				$('.btn-lang').addClass('on');
				$(this).parent().find("menu.list").slideDown(150).show();
				$(this).parent().hover(function() {
						$(this).parent().find("menu.list").stop().slideDown(150);
					},
					function(){
						$('.btn-lang').removeClass('on');
						$(this).parent().find("menu.list").slideUp('slow');
					});
			});
			//속보 2017.08.08
			$('.urgent-news .btn-close').on('click',function() {
				$('.urgent-news').slideUp();
				$( ".wrap-header" ).stop().animate({top: "0"}, 0);
				$( ".all-menu" ).stop().animate({top: "0"}, 0);
				$( ".search-layer" ).stop().animate({top: "0"}, 0);
			});
			//top버튼
			$("#btn-go-wrap .go-to-top").on('click',function () {
				$("body,html").animate({ scrollTop: 0 }, 800 );
				return false;
			});

			//일본어 푸터 하단 お問い合わせ 버튼  (2019-12-19 이동규)
			$('.btn-pop-info').on('click', function (evt) {
				popupBtnClick(evt);
				$('#infoLayer, .dim').show();
			});
			$('#infoLayer .pop-close').on('click', function (evt) {
				var positionTop = Math.abs(parseInt($('body').css('top')));
				$('#infoLayer, .dim').hide();
				$(window).scrollTop(positionTop);
			});
		},
		//내비게이션 활성화
		navActive : function() {
			var root01 = "";
			var root02 = "";
			var root03 = "";

			$('.nav .depth01').each(function(){
				var $self = $(this);
				var $dep01 = $self.find('>a').attr('data-depth01');

				if($pageActive01 == $dep01) {
					$self.addClass('on');
					root01 = $self.find('>a').text();

					$self.find('.depth02').each(function(){
						var $dep02 = $(this).find('>a').attr('data-depth02');
						if($pageActive02 == $dep02) {
							$(this).parent('ul.sub-menu').stop().slideDown(150);
							// $('.wrap-header').addClass('on');
							$(".sub-menu-bar").show();
							$('.wrap-container').stop().animate({paddingTop: "253px"}, 400);
							$(this).addClass('on');
							root02 = $(this).find('>a').text();
						}
					});
				}
			});
		},
		slideCom:function(){
			//공용 메인용 분리 필요
			if( !$('body').hasClass('page-main') && !$('body').hasClass('page-video') ){
				$('.slide-con').slick({
					centerMode: true,
					variableWidth: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1
				});
			}
			if( ($('.video-nknow').length < 1 && $('.view-nknow').length < 1) ) {
				if( LANG_TYPE != 'ar' ){
					$('.img-slide-div:not(.img-slide-section .img-slide-div)').slick({
						autoplay: false,
						autoplaySpeed: 3000,
						speed: 600,
						adaptiveHeight:true,
						arrows: true,
						pauseOnHover: true,
						cssEase: 'linear',
						variableWidth: true,
						infinite: false,
						slidesToShow: 4,
						slidesToScroll: 4
					});
				}
				else {
					$('.img-slide-div:not(.img-slide-section .img-slide-div)').slick({
						autoplay: false,
						autoplaySpeed: 3000,
						speed: 600,
						adaptiveHeight:true,
						arrows: true,
						pauseOnHover: true,
						cssEase: 'linear',
						variableWidth: true,
						infinite: false,
						rtl : true,
						slidesToShow: 4,
						slidesToScroll: 4
					});
				}
			}
			if( LANG_TYPE != 'ar' ){
				// 비디오본문 슬라이드와 이미지메인 같은 클래스를 사용해서 분기함..
				$('.img-slide-section .img-slide-div').slick({
					autoplay: false,
					autoplaySpeed: 3000,
					speed: 600,
					adaptiveHeight:true,
					arrows: true,
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 3
				});
			}else{
				// 비디오본문 슬라이드와 이미지메인 같은 클래스를 사용해서 분기함..
				//$('.img-slide-section .img-slide-div').css('direction', 'rtl');
				$('.img-slide-div .item').css('float','right');
				$('.img-slide-section .img-slide-div').slick({
					autoplay: false,
					autoplaySpeed: 3000,
					speed: 600,
					adaptiveHeight:true,
					arrows: true,
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: true,
					infinite: false,
					rtl : true,
					slidesToShow: 3,
					slidesToScroll: 3
				});
			}

			$('.exchange ul').slick({
				autoplay: true,
				adaptiveHeight:true,
				vertical: true,
				arrows: false,
				infinite: false,
				slide: 'li',
				slickPause: true
			});
			/*$('.kwave-zone-slide').slick({
				autoplay: true,
				adaptiveHeight:false,
				slidesToShow: 1,
				speed: 600,
				infinite: true,
				slidesToScroll: 1,
				dots:true
			});*/
			$('.thumb-list-type01,.thumb-list-type02,.thumb-list-type03,.thumb-list-type04,.thumb-list-type05').slick({
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 600,
				adaptiveHeight:true,
				arrows: true,
				pauseOnHover: true,
				cssEase: 'linear',
				variableWidth: true,
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 4
			});
			$('.slide-type02').slick({
				swipe:false,
				adaptiveHeight:true,
				speed: 1,
				fade: true,
				arrows:true,
				cssEase: 'linear'
			});
			$('.slide-type02').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$(".inner-lst li").each(function(index,item){
					if(index == currentSlide)
					{
						$(this).addClass('on');
						// console.log($(item).text());
						$('.inner-tit span').html($(item).text());
					}
					else
						$(this).removeClass('on');

					$('.inner-lst').hide();
				});
			});
			$('.fc-slick').slick({
				swipe:true,
				adaptiveHeight:true,
				initialSlide : Window.INIT_SLICK_NUM || 0,
				speed: 1,
				fade: true,
				arrows:true,
				cssEase: 'linear'
			});
			$('.fc-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$('.list-type-photo li').each(function(index,item){
					if(index == currentSlide)
						$(this).addClass('on');
					else
						$(this).removeClass('on');
				});
			});
			$('.festival-calendar .list-type-photo li').on('click', function(){
				$(this).siblings().removeClass('on');
				$(this).addClass('on');
				var index = $(this).index();
				$('.fc-slick').slick('slickGoTo',index);
			});

			if($lang=='ar'){//아랍
				//article view : right-list-zone .slide-con02
				$('.photo-fade').slick({
					autoplay: true,
					autoplaySpeed: 1500,
					arrows: false,
					dots: true,
					infinite: false,
					speed: 500,
					fade: true,
					rtl: true,
					cssEase: 'linear'
				});
				//article view : slide photo (이미지 슬라이드 복수)
				$('.pic-zone .slide-article').slick({
					arrows:false,
					pauseOnHover: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					adaptiveHeight:false,
					infinite: false,
					rtl: false,
					asNavFor: '.pic-zone .thumb-imgs',
					cssEase: 'linear'
				});
				$('.pic-zone .thumb-imgs').slick({
					autoplay: false,
					focusOnSelect: true,
					rtl: false,
					arrows: false,
					asNavFor: '.pic-zone .slide-article',
					cssEase: 'linear',
					infinite: false,
					centerMode: false,
					speed: 600,
					slidesToShow: 8,
					slidesToScroll: 8
				});
			}else{
				//article view : right-list-zone .slide-con02
				$('.photo-fade').slick({
					autoplay: true,
					autoplaySpeed: 1500,
					arrows: false,
					dots: true,
					infinite: false,
					speed: 500,
					fade: true,
					cssEase: 'linear'
				});
				// 일문 메인에서 자동데이터셋 슬라이드 되지 않는 문제를 수정한다.
				if( LANG_TYPE == 'jp' && $('body').hasClass('page-main') && $('[data-type="auto"]').length ){
					var cp = function(){
						$('.photo-fade').slick({
							autoplay: true,
							autoplaySpeed: 1500,
							arrows: false,
							dots: true,
							infinite: false,
							speed: 500,
							fade: true,
							cssEase: 'linear'
						});
					};
					addCallback(cp);
				}
				//article view : slide photo (이미지 슬라이드 복수)
				var findSlideArticle = $('body').find('.pic-zone');
				$.each(findSlideArticle, function(idx){
					var dataIndexName = 'pic_'+(idx+1);
					var slideArticle = $(this).find('.slide-article').attr('data-target', dataIndexName).addClass('newPicZone');
					var thumbImage = $(this).find('.thumb-imgs').attr('data-target', dataIndexName).addClass('newPicZone');
					slideArticle.find(".btn-prev02, .btn-next02").hide().end()
						.slick({
							arrows:false,
							pauseOnHover: true,
							slidesToShow: 1,
							slidesToScroll: 1,
							fade: true,
							adaptiveHeight:false,
							infinite: false,
							asNavFor: '.pic-zone .thumb-imgs[data-target='+dataIndexName+']',
							cssEase: 'linear'
							// rtl: true,
						});
					thumbImage.slick({
						autoplay: false,
						focusOnSelect: true,
						arrows: false,
						asNavFor: '.pic-zone .slide-article[data-target='+dataIndexName+']',
						cssEase: 'linear',
						infinite: false,
						centerMode: false,
						speed: 600,
						slidesToShow: 8,
						slidesToScroll: 8
						// rtl: true,
					});
				});
			}
			var findSlideVideo = $('body').find('.slider-group.video-group');
			$.each(findSlideVideo, function(){
				var thumbBox = $(this).find('.thumb-box');
				if( thumbBox.length > 0 ){
					var thumbImage = thumbBox.find('.thumb-imgs');
					thumbImage.slick({
						autoplay: false,
						variableWidth: true,
						speed: 600,
						arrows: false,
						cssEase: 'linear',
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 3
						// centerMode: true,
						// autoplaySpeed: 3000
					});
				}

				/** 슬라이드가 이뤄진 것을 확인하기 위한 메서드 */
				thumbImage.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$(this).attr('data-slide', 'true');
				});
			});
			$('.pic-zone02 .slide-article').slick({
				arrows:false,
				pauseOnHover: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				adaptiveHeight:false,
				infinite: false,
				rtl: true,
				asNavFor: '.pic-zone02 .thumb-imgs',
				cssEase: 'linear'
			});
			$('.pic-zone02 .thumb-imgs').slick({
				autoplay: false,
				focusOnSelect: true,
				rtl: true,
				arrows: false,
				asNavFor: '.pic-zone02 .slide-article',
				cssEase: 'linear',
				infinite: false,
				centerMode: false,
				speed: 600,
				slidesToShow: 8,
				slidesToScroll: 8
			});
			/* [중문] 메인 */
			$('.slide-con02.news-con').slick({
				dots:true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 600,
				adaptiveHeight:true,
				arrows: true,
				pauseOnHover: true,
				cssEase: 'linear',
				variableWidth: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
			/* [중문] pictorial [일문] pictorial */
			if($body.attr('data-attr') == 'pictorial'){
				$('.view-body .thumb-imgs').slick({
					arrows: false,
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: false,
					infinite: false,
					slidesToShow: 11,
					slidesToScroll: 11
				});
				if($('.view-body .image-gallery').length>0){
					$(".page-view .dis-opacity").addClass("gallery-slick-btn");
				}

				// 화보 슬라이드 이미지 중앙 정렬(이미지가 load 됐을 때)
				$('.view-body .image-gallery img').on('load', function(){
					$('.view-body .image-gallery .slick-track').each(function(index){
						$(this).css("height", $('.view-body .image-gallery').height() + "px");
					});
					$('.view-body .image-gallery .img-zone figure').css("position", "absolute");
					$('.view-body .image-gallery .img-zone figure img').each(function(index){
						var imgWidth = $(this).width();
						$('.view-body .image-gallery .img-zone figure figcaption').eq(index).css("width", imgWidth);
						var icoPos = ($('.view-body .image-gallery .img-zone figure').width()- imgWidth)/2+15;
						$('.view-body .image-gallery .img-zone figure .ico-zoomin').eq(index).css("right", icoPos);
						var imgTopPos = ($('.image-gallery .comp-box.img-group').height()-$('.view-body .image-gallery .img-zone figure').eq(index).height())/2;
						$('.view-body .image-gallery .img-zone figure').eq(index).css({"top":imgTopPos,"bottom":"auto"});
					});
				});
				$('.view-body .image-gallery').slick({
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: false,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					lazyLoad: 'ondemand',
					prevArrow:'<button type="button" class="btn-prev"></button>',
					nextArrow:'<button type="button" class="btn-next"></button>'
				});

				/* [중문] pictorial [일문] pictorial */
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick({
					arrows: false,
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: false,
					infinite: false,
					accessibility: false,
					speed: 1,
					// asNavFor: '.pictorial-slide',
					slidesToShow: 1,
					slidesToScroll: 1
				});
			}
		},
		latestNewsList:function(){
			if( $('#latestNews').length < 1 ) return;
			jQuery.ajax({
				url: encodeURI(LATESTNEWS),
				type: 'GET',
				dataType: 'json',
				cache : true,
				success : function(data) { latestNewsListRequestCallback(data); }
			});
		},
		submitFeedback : function(){
			var lang = LANG_TYPE;
			// 영문, 일문, 아랍어인 경우에만
			if (lang == 'en' || lang == 'jp' || lang == 'ar') {
				var txt = $('#feedbackArea').val();
				// 피드백 내용이 있을 때만 실행
				if ($.trim(txt).length > 0) {
					var params = $('#feedbackForm').serialize();
					var url = $('#feedbackForm').attr('action');
					$.ajax({
						url : url,
						type : 'POST',
						crossDomain : true,
						dataType : 'json',
						data : params,
						//jsonpCallback : 'feedbackResult',
						cache : true,
						success : function(data){
							if( data != null ){
								if( data['resultCd'] == true && data['resultMsg'] == 'SUCCESS' ) {
									alert(FEEDBACK_SUCCESS);
									$(".pop-close").trigger("click");
								}
								else { feedbadkFail(); }
							}
							else { feedbadkFail(); }
						},
						error : function(){ feedbadkFail(); }
					});
				} else { feedbadkFail(); }
			}
			function feedbadkFail(){
				$('#feedbackForm').focus();
				alert(FEEDBACK_FAIL);
			}
		},
		rssBtn : function(){
			$('.copy-url button').on('click', function(){
				var aux = document.createElement("input");
				aux.setAttribute("value", $(this).parent().find('a').attr('href'));
				document.body.appendChild(aux);
				aux.select();
				document.execCommand("copy");
				alert(COPY_COMPLETE);
			});
		},
		searchEvent : function(){
			var LANG = LANG_TYPE;
			if (LANG == "cn") LANG = "ck";
			// 검색 헤더의 검색 키워드
			jQuery.ajax({
				url: SEARCH_KEYWORD_API,
				type: 'GET',
				dataType: 'json',
				success:function(data){
					var keyword = data['DATA'];
					var html = "";
					if(keyword.length === 5) {
						for (var i = 0; i < keyword.length; i++) {
							html += '<span>' +
								'<a href="' + DOMAIN + "/search/index?query=" + encodeURI(keyword[i]['KEYWORD']) + "&lang=" + LANG_TYPE.toUpperCase() + '">' + '#' + keyword[i]['KEYWORD'] + '</a>' +
								'</span>';
						}
					}
					if(html){
						$('#headerSearch .keyword').html(html);
					}
				}
			});

			var search = function(e) {
				var search_domain = window.location.host;
				var keyword = $("#index-sch-keyword").val().trim();
				if(keyword == "") {
					alert(SEARCH_NULL);
					e.preventDefault();
				}else {
					if (search_domain == "cb.yna.co.kr") {
						location.href = "//" + search_domain + "/gate/big5/cn.yna.co.kr" + "/search/index?query=" + encodeURI(keyword) + "&lang=" + LANG_TYPE.toUpperCase();
					} else {
						location.href = "//" + search_domain + "/search/index?query=" + encodeURI(keyword) + "&lang=" + LANG_TYPE.toUpperCase();
					}
				}
			};
			$(".btn-search").click(function(e) {
				search(e);
			});

			//enter key 누를 시 이벤트 제어
			$("#index-sch-keyword").bind('keydown',function (e) {
				if (e.which == 13) {
					search(e);

					return false;
				}
			});
		},
		onNav : function() {
			$("ul.gnb").find("li").click(function() {
				$(this).find("ul.sub-menu").hide();
			});

			$('ul.gnb > li.main-menu').each(function (index, navList) {
				var depth01 = $(navList).find("a").attr("data-depth01");

				if($(navList).hasClass("on")) {
					if($(this).find("ul.sub-menu").length > 0) {
						if($(window).scrollTop() < 210) {
							$(this).find("ul.sub-menu").show();
							$(".sub-menu-bar").show();
							$('.wrap-container').stop().animate({paddingTop: "253px"}, 200);
						} else {
							$('ul.sub-menu').hide();
						}
					}
				}

				$(navList).on("mouseenter", function () {
					if (depth01 !== $pageActive01) {
						// 다른 메뉴에 마우스 포인터를 가져갔을 때
						if($(window).scrollTop() < 210) {
							$('ul.sub-menu').hide();
							$('ul', this).stop().slideDown(150);
							$('li.main-menu').removeClass('on');
							$(".sub-menu-bar").show();
							$('.wrap-container').stop().animate({paddingTop: "253px"}, 200);
						} else {
							$('ul.sub-menu').hide();
						}
					} else {
						if($(window).scrollTop() < 210) {
							$('ul', this).stop().slideDown(150);
							$(".sub-menu-bar").show();
							$('.wrap-container').stop().animate({paddingTop: "253px"}, 200);
						} else {
							$('ul.sub-menu').hide();
						}
					}
				}).on("mouseleave", function () {
					if(depth01 !== $pageActive01) {
						if($(window).scrollTop() < 210) {
							$('ul', this).stop().slideUp(150);
							$(".sub-menu-bar").hide();
							$('.wrap-container').stop().animate({paddingTop: "210px"}, 200);
						} else {
							$('ul.sub-menu').hide();
						}
					} else {
						if($(window).scrollTop() < 210) {
							if($(this).find("ul.sub-menu li").hasClass("on")) {
								$('ul', this).stop().slideUp(150);
							}

							setTimeout(function() {
								if($("ul.sub-menu").css("display") === "none") {
									$('ul', this).stop().slideDown(150);
								} else {
									$('ul', this).stop().slideUp(150);
								}
							}, 500);

							$(".sub-menu-bar").hide();
							$('.wrap-container').stop().animate({paddingTop: "210px"}, 200);
							$('ul.sub-menu').hide();
						} else {
							$('ul.sub-menu').hide();
						}
					}
				});
			});

			$("#nav").find(".gnb").on("mouseleave", function () {
				$(".gnb li").each(function () {
					var self = $(this);
					var dep01 = $(self).find("a").attr("data-depth01");

					if ($pageActive01 || $pageActive02) {
						if(dep01 === $pageActive01) {
							if($pageActive02) {
								$(this).addClass("on");
								$('ul', this).stop().slideDown(150);
							} else if(dep01.indexOf($pageActive01) >= 0) {
								$(this).addClass("on");

								if($(window).scrollTop() < 210) {
									if($(this).find("ul.sub-menu").length > 0) { // 2depth 메뉴 일 때
										$(this).find("ul.sub-menu").show();
										$(".sub-menu-bar").show();
										$('.wrap-container').stop().animate({paddingTop: "253px"}, 200);
									}
								}
							}

							$(this).find(".depth02").each(function () {
								var depth02 = $(this).find("a").attr("data-depth02");

								if (depth02 === $pageActive02) {
									if($(window).scrollTop() < 210) {
										$(".sub-menu-bar").show();
										$('.wrap-container').stop().animate({paddingTop: "253px"}, 200);
									} else {
										$(this).parents(".sub-menu").hide();
									}
								}
							});
						}
					}
				});
			});
		},
		gnb:function(){
			// 혹시라도 문제가 될지 몰라서 일단 백업용으로 주석 처리
			/*$('ul.gnb > li.main-menu').each(function(index) {
			 $(this).on('mouseenter',function() {
			 $('ul.sub-menu').hide();
			 $('li.main-menu').removeClass('on');
			 $('ul', this).stop().slideDown(150);
			 $('.wrap-header').addClass('on');
			 $(this).addClass('on');
			 $('.wrap-container').stop().animate({paddingTop: "253px"}, 400);
			 });
			 $(this).on('mouseleave',function() {
			 $('ul', this).stop().slideUp(150);
			 $('.wrap-header').removeClass('on');
			 $(this).not('.sub-menu li').removeClass('on');
			 $('.wrap-container').stop().animate({paddingTop: "210px"}, 400);
			 });
			 });*/

			Master.onNav(); // lnb on 유지

			var wrap = $('#allMenu'),
				btnmenu = $('#btnMenu'),
				btn = $('.btn-all-menu'),
				topmenu = $('.top-menu'),
				search = $('#headerSearch'),
				btn_menu = $('.btn-all-menu'),
				// btn_close = $('.btn-close, .dim');
				btn_close = $('.btn-close'),
				div_dim = $('.dim'),
				btn_search = $('.btn-pop-search');

			btn.on('click',function () {
				//기본버튼
				if(!btn.hasClass('btn-close'))
				{
					// $('body').css('overflow-y','hidden');
					$('.dim').show();
					// $('.urgent-news').css('zIndex', '999');
					$('.btn-all-menu').addClass('on');
					$('.btn-pop-search').addClass('on');
					$('.btn-history').addClass('on');
					$('.history-num').addClass('on');
					$('.lang-menu').addClass('on');
					$('.urgent-news').addClass('on');

					wrap.show();
					//focus() 삭제 2017.08.11
					wrap.attr('tabindex','0');
					//x 버튼으로 바꿈
					btn.addClass('btn-close').addClass('on');
				} else { //x 버튼

					// $('body').css('overflow-y','auto');
					$('.dim').hide();

					btn.removeClass('btn-close');

					if($('.urgent-news').is(":visible"))
					{
						$('.btn-all-menu').removeClass('on');
						$('.btn-pop-search').removeClass('on');
						$('.btn-history').removeClass('on');
						$('.history-num').removeClass('on');
						$('.lang-menu').removeClass('on');
						$('.wrap-header').css('top','60px');
						$('.all-menu').css('top','0');
					}
					wrap.hide();
					wrap.removeAttr('tabindex');
				}

				//dim 화면 클릭시
				div_dim.on('click',function () {
					$('body').css('overflow','auto');
					$('.dim').hide();
					$('#txt-sch-keyword').val('');
					wrap.hide();
					wrap.removeAttr('tabindex');
					btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
					btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');

					return false;
				});

				//버튼이 눌러진 height
				var btn_event_height = btn.offset().top;

				// Init_top_menu();
				if(btn_event_height > 75)
					$('.wrap-header').css('top','0px');

				wrap.css('top','0px');
				//all-menu 버튼 누르면 search 버튼 정상으로 변경
				search.hide();
				btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');

				return false;
			});

		},
		gnb02:function(){  //search button
			var wrap = $('#headerSearch'),
				btn_all_menu = $('#allMenu'),
				btn_menu = $('.btn-all-menu'),
				btn_del = $('.btn-del'),
				btn_search = $('.btn-pop-search'),
				search_box = $('.input-box'),
				div_dim = $('.dim'),
				btn_close = $('#headerSearch .btn-wrap .btn-close');

			$('.btn-all-menu, .btn-pop-search, .dim').on('click', function(){
				if($(this).hasClass("btn-close")){
					$('.yna-fx-loader').addClass("dis-none");
				} else {
					$('.yna-fx-loader').removeClass("dis-none");
				}
			});

			//클릭시 테두리 안생기게 수정.
			// 다국어 웹에서 검색어 입력창 클릭시 focus가 blur 되는 현상이 있어 headerSearch 클릭 이벤트 핸들러 제거
			$('#allMenu').on('click',function () {
				$(this).focus().css('outline','none');
			});

			btn_search.on('click',function () {
				//search 버튼 클릭시 검색창 내용 초기화
				$(".txt-sch-keyword, .input-box input").val('');
				//search 버튼
				if(!btn_search.hasClass('btn-close'))
				{
					// $('body').css('overflow','hidden');
					$('.dim').show();
					$('.btn-all-menu').addClass('on');
					$('.btn-pop-search').addClass('on');
					$('.btn-history').addClass('on');
					$('.history-num').addClass('on');
					$('.lang-menu').addClass('on');
					$('.urgent-news').addClass('on');

					wrap.show();

					$('#index-sch-keyword').focus().css('outline','none');
					// $(this).parent().find("input").focus().css('outline','none');

					// wrap.attr('tabindex','0');
					// search_box.addClass('focus');
					search_box.find("label").show();

					//all-menu hide
					btn_all_menu.hide();
					if(btn_menu.hasClass('btn-close'))
						btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
					//btn 클래스 변경
					btn_search.addClass('btn-close').addClass('on'); //x 버튼으로 변경
					btn_del.hide();
				} else { // x 버튼
					// $('body').css('overflow','auto');
					$('.dim').hide();
					wrap.hide();
					$('#txt-sch-keyword').val('');
					wrap.removeAttr('tabindex');
					btn_search.removeClass('btn-close').addClass('on');
				}

				var urgent_height = $('.urgent-news').height();
				//urgent가 없는 상태에서 클릭했을 경우
				var btn_event_height = btn_search.offset().top;
				if(btn_event_height < urgent_height)
					$('.wrap-header').css('top','0px');

				return false;

			});

			btn_close.on('click',function () {
				$('body').css('overflow','auto');
				$('.dim').hide();
				// btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');
				wrap.hide();
				wrap.removeAttr('tabindex');
				return false;
			});

			div_dim.on('click',function () {
				$('body').css('overflow','auto');
				$('.dim').hide();
				$(this).parent().find("input").val('');
				wrap.hide();
				wrap.removeAttr('tabindex');
				btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
				btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');

				return false;
			});

			//검색창에서 키 눌렀을 경우

			$("#txt-sch-keyword02, .input-box input").bind('click keyup keydown',function () {
				$(this).focus().css('outline','none');
				$(this).parent().find(".input-box").addClass('focus');

				if(!$(this).val()) //검색창 값을 지웠을 경우
				{
					//우측 삭제버튼(x) 없애기
					$(this).parent().find(".btn-del").hide();
					$(this).val("");
					$(this).parent().find("label").show();
				}
				else  //검색창에 값이 있을경우
				{
					$(this).parent().find(".btn-del").show();   //x버튼 보여주기
					$(this).parent().find("label").hide();
				}
			});
			$(window).load(function(){
				if($("#txt-sch-keyword02").val() != ""){
					$("#txt-sch-keyword02").parent().find("label").hide();
				}else{
					$("#txt-sch-keyword02").val("");
					$("#txt-sch-keyword02").parent().find("label").show();
				}
			});
			//검색창에서 focus가 나갔을 때 값이 있으면 label(x) 없다면 label(o)
			$("#txt-sch-keyword02, .input-box input").on("blur", function(){
				if($(this).val() != ""){
					$(this).parent().find("label").hide();
				}else{
					$(this).val("");
					$(this).parent().find("label").show();
				}
			});

			//0821
			$("#txt-sch-keyword02, .input-box input").on("focus", function(){
				$(this).addClass('focus');
			});

			$('.input-box .btn-del').on('click', function(){
				$(this).parent().find('input').val('');
				$(this).parent().find('input').focus().css('outline','none');
				$(this).parent().find('input').addClass('focus');
				$(this).parent().find("label").show();
				$(this).hide();
			});

			wrap.css('top','0px');
		},
		dim:function($this){
			var wrap = $('#headerSearch'),
				btn_menu = $('.btn-all-menu'),
				btn_search = $('.btn-pop-search');
			$('.dim').on('click',function () {
				$('body').css('overflow','auto');
				$('.dim').hide();
				wrap.hide();
				wrap.removeAttr('tabindex');

				btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
				btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');
				return false;
			});
		},
		articleview_slideInit:function($this){
			//slide init 기능이 Master에서 실행해야 동작되어 article_view에서 이동함..
			if($body.hasClass('page-view') && $body.hasClass('page-article')){
				$('.pic-zone .thumb-imgs').on('init', function (event, slick, currentSlide, nextSlide) {
					var i = (currentSlide ? currentSlide : 0) + 1;
					var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
					$('.comp-box.slider-group.pic-zone .control-box .num').html(slideInfo);
					return false;
				});

				$('.video-zone .thumb-box .thumb-imgs').on('init', function (event, slick, currentSlide, nextSlide) {
					var i = (currentSlide ? currentSlide : 0) + 1;
					var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
					$('.video-zone .control-box .num').html(slideInfo);
					return false;
				});
			}
			//[중문] pictorial_view [일문] pictorial_view
			else if($body.attr('data-attr') == 'pictorial') {
				$('.pictorial-zone .thumb-imgs').on('init', function (event, slick, currentSlide, nextSlide) {
					var i = (currentSlide ? currentSlide : 0) + 1;
					var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
					$('.pictorial-zone .control-box .num').html(slideInfo);
					return false;
				});
			}
		},
		scrollDetect:function(){
			var lastScroll = 0;
			window.onscroll = function() {
				var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
				//console.log('currentScroll'+currentScroll);
				if(currentScroll == 0){
					//lastScroll = currentScroll;
					$body.removeClass('body-up').removeClass('body-down');
				}else if (currentScroll > 0 && lastScroll <= currentScroll){
					lastScroll = currentScroll;
					$body.removeClass('body-up').addClass('body-down');
				}else{
					lastScroll = currentScroll;
					$body.removeClass('body-down').addClass('body-up');
				}
			};
		},
		scrollEvt:function($this){
			if($(window).scrollTop() == 0){
				$(".sub-menu-bar").addClass("dis-none");
			} else {
				$(".sub-menu-bar").removeClass("dis-none");
			}

			var wrap = $('#allMenu'),
				search = $('#headerSearch'),
				btn_menu = $('.btn-all-menu'),
				btn_search = $('.btn-pop-search'),
				btn_pause = $('.latest-news .btn-latest-pause'),
				last_news = $('.latest-news .latest-news-slide .slick-list'),
				weather = $('#tickerWeather .weather-slide');

			if($(window).scrollTop() > 210){
				$("#btn-go-wrap").fadeIn();
				$body.addClass('body-fixed');
				$(".wrap-header").addClass('smenu-on');
				$(".yna-fx-loader").removeClass("dis-none");
				$('.wrap-header').css('top','0');
				$(".nav").addClass("scroll-nav");
				$('.all-menu').css('top','0');
				$('.search-layer').css('top','0');
				$(".sub-menu-bar").hide();
				$("ul.sub-menu").hide();
				last_news.css('height','31px');
				//lastesNewsSlide 호출확인
				$('#latestNewsLayer').hide();
				btn_pause.attr('class','btn-latest-play');
				var lastesNewsSlide = $(".latest-news-slide");
				if( lastesNewsSlide.hasClass('slick-slider') ){
					lastesNewsSlide.slick("pause");
				}
				// weather 호출 확인
				if( weather.hasClass('slick-slider') ){
					weather.slick("pause");
				}

				//스크롤할 경우 팝업해제
				$('.dim').hide();
				wrap.hide();
				search.hide();

				//상단 메뉴 버튼 초기화
				if(btn_menu.hasClass('btn-close'))
					btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
				if(btn_search.hasClass('btn-close'))
					btn_search.removeClass('btn-close').addClass('btn-all-menu').addClass('on');

				// 2depth 리스트를 none 시킴
				/*$(".gnb li").each(function () {
				 $(this).find(".depth02").each(function () {
				 var depth02 = $(this).find("a").attr("data-depth02");

				 console.log(depth02 + " " + $pageActive02);
				 if (depth02 === $pageActive02) {
				 // $(this).parents(".sub-menu").css("display", "none");
				 $(this).find("ul.sub-menu").hide();
				 }
				 });
				 });*/
			}else if($(window).scrollTop() < 210) {
				$("#btn-go-wrap").fadeOut();
				$body.removeClass('body-fixed');
				$(".wrap-header").removeClass('smenu-on');
				$(".yna-fx-loader").addClass("dis-none");
				// $('ul.sub-menu').hide();
				// $(".sub-menu-bar").hide();
				$(".nav").removeClass("scroll-nav");
				last_news.css('height','31px');
				//호출 확인

				var lastesNewsSlide = $(".latest-news-slide");
				if( lastesNewsSlide.hasClass('slick-slider') && weather.hasClass('slick-slider') ){
					lastesNewsSlide.slick("play");
					weather.slick("play");

					$('.latest-news .btn-latest-play').attr('class','btn-latest-pause');
				}

				//스크롤 조금이라도 되면 all-menu, search-menu 닫고 초기화
				$('.dim').hide();
				wrap.hide();
				search.hide();
				btn_menu.removeClass('btn-close').addClass('btn-all-menu').addClass('on');
				btn_search.removeClass('btn-close').addClass('btn-pop-search').addClass('on');

				//urgent가 있을 때
				if($('.urgent-news').css("display") === undefined) // 중문 쪽은 따로 처리...
					$('.wrap-header').css('top','0');
				else if(!$('.urgent-news').hasClass("dis-none"))
					$('.wrap-header').css('top','60px');
				else//urgent가 없을 때
					$('.wrap-header').css('top','0');

				// 2depth 리스트를 block 시킴
				$('ul.gnb > li.main-menu').each(function (index, navList) {
					if($(navList).hasClass("on")) {
						if($(this).find("ul.sub-menu").length > 0) {
							$(this).find("ul.sub-menu").show();
							$(".sub-menu-bar").show();
						}
					}
				});
			}
		},
		scrollSns:function($this){
			if($('.view-body .image-gallery').length <= 0){
				if ($this.scrollTop() > 550) {
					if(!$body.hasClass('page-image'))  //photos_view, photos_graphic_view는 sns-flying 없음
						$('.sns-flying').stop().fadeIn(200);
					$('.btn-a-prev').stop().fadeIn(200);
					$('.btn-a-next').stop().fadeIn(200);
				} else {
					if(!$body.hasClass('page-image'))
						$('.sns-flying').stop().fadeOut(200);
					$('.btn-a-prev').stop().fadeOut(200);
					$('.btn-a-next').stop().fadeOut(200);
				}
			}
		},
		videoCom:function(){
			$('button.vjs-play-button').on('click',function() {
				$('body').addClass('on');
			});
		},
		popUp:function(){
			//btn-feedback
			$('.btn-feedback').on('click', function(evt){
				popupBtnClick(evt);
				$('#feedLayer, .dim, #feedLayer #popCon01').show();
				$('#feedLayer #popCon02').hide();
				popTopPosition($('#feedLayer .pop-pos01'));
				$('.textarea-box .textarea').val('');
				if($lang=="en"){
					$('.btns-con input').val('SUBMIT');
				}
				if($lang=="ja"){
					$('.btns-con input').val('提出');
				}
				if($lang=="ar"){
					$('.btns-con input').val('عرض');
				}

				$('.textarea-box .textarea').focus();
				$('.textarea-box .textarea').siblings('label').show();
			});
			$('.textarea').on('keyup keydown',function(){
				if($('.textarea').val()==''){
					$(this).siblings('label').show();
				}else{
					$(this).siblings('label').hide();
				}
			});
			//btn-submit
			$('.btn-submit').on('click', function(evt){
				evt.preventDefault();
				Master.submitFeedback();
			});

			$('.pop-layer .pop-wrap .pop-close').on('click',function(evt){
				evt.preventDefault();
				var positionTop = Math.abs(parseInt($('body').css('top')));
				$(this).parent().parent().parent().hide();
				$('.dim').css('z-index', '50').hide();
				$('body').removeClass('scrollStop');
				$('body').css('top','0');
				$(window).scrollTop(positionTop);
			});
			$('.pop-layer .pop-wrap .pop-close02').click(function(evt){
				evt.preventDefault();
				var positionTop = Math.abs(parseInt($('body').css('top')));
				$(this).parent().parent().parent().parent().parent().parent().hide();
				$('.dim').css('z-index', '50').hide();
				$('body').removeClass('scrollStop');
				$('body').css('top','0');
				$(window).scrollTop(positionTop);
			});
		},
		latestNews:function(){
			var wrap = $('#latestNewsLayer'),
				btn_pause = $('.latest-news .btn-latest-pause'),
				btn_more = $('.latest-news .btn-latest-more'),
				btn_close = $('.latest-news-layer .btn-close');
			var xpaused = false;
			btn_pause.on('click',function () {
				if(!xpaused){
					$(".latest-news-slide").slick("pause");
					btn_pause.attr('class','btn-latest-play');
				} else {
					$(".latest-news-slide").slick("play");
					btn_pause.attr('class','btn-latest-pause');
				}
				xpaused = !xpaused;
				return false;
			});
			btn_more.on("click", function() {
				wrap.slideToggle(150);
				$(".latest-news-slide").slick("pause");
				btn_pause.removeClass('btn-latest-pause').addClass('btn-latest-play').addClass('disabled');
			});
			btn_close.on("click", function() {
				wrap.slideToggle(150);
				$(".latest-news-slide").slick("play");
				btn_pause.removeClass('btn-latest-play').removeClass('disabled').addClass('btn-latest-pause');
			});
		},
		weather:function(){
			//slideup down에서 show/hide로 변경 2017.08.07
			$('ul.weather-slide li a').hover(function() {
				$(this).parent().parent().parent().find(".weather-layer").stop().show();
				$(this).parent().parent().parent().hover(function() {
					},
					function(){
						$(this).parent().parent().parent().find(".weather-layer").hide();
					});
			});
		},
		weatherLayer:function(){
			$('.weather-layer .con-wrap .tit a').click(function(){
				// $('#con-wrap02').show().stop();
				$('.weather-layer .con-wrap').show().stop();
				return false;
			});
			//gnb weather
			$('.weather-layer .con-wrap .btn-close').click(function(){
				$('.weather-layer #con-wrap02').hide();
				// $(this).parent().find('.con-wrap').hide();
				// $('#con-wrap01').hide();
				return false;
			});
			//weather.html
			$('.weather-zone01 .weather-layer .con-wrap .btn-close').click(function(){
				$(this).parents('.weather-zone').find('.weather-layer').hide();
				return false;
			});
			//Today Weather 상세설명 팝업
			$('.txt-type03').click(function(){
				$(this).parents('.today-weather').find('.weather-layer').toggle();
				return false;
			});
			$('.btn-today-map').hide();
			$('.today-point-menu li').click(function(){
				var click_idx = $(this).index();
				$(".today-point-menu li").each(function(index,item){
					if(click_idx == index)
						$(this).addClass('on');
					else
						$(this).removeClass('on');
					if(click_idx>0)
						$('.today-point-box').find('p').hide();
					else
						$('.today-point-box').find('p').show();
				});

				if($(this).index() == '0')
					$('.btn-today-map').hide();
				else
					$('.btn-today-map').show();

				return false;
			});
			//날씨 지도 AM/PM 클릭
			$('.today-map-point .on .btn-today-map li').click(function(){
				var click_idx = $(this).index();
				$(".today-map-point .on .btn-today-map li button").each(function(index,item){

					if(click_idx == index)
						$(this).addClass('on');
					else
						$(this).removeClass('on');
				});
				return false;
			});
		},
		datePicker:function(){
			$(".inp-date").asDatepicker({
				mode: 'range',
				min: '2010-1-1',
				button: 'cancel'
			});
			$(".option-area.fixed .inp-label").click(function(){
				if($(this).hasClass("on")){
					$(".display-date").addClass("on");
				}else if($(this).hasClass("off")){
					$(".display-date").removeClass("on");
				}
			});
		},
		masonry:function(){
			$masonry = $(".wrap-thumb-list").masonry({
				itemSelector	: ".box",
				gutter: 20,
				columnWidth	: 260
			});
			$('.btn-load').on('click', function(){
				var items = [];
				items.push(Master.newItem(), Master.newItem(), Master.newItem(), Master.newItem());
				$masonry.append(items).masonry('appended', items);
			});

		},
		sns:function(){
			$(document).on('click', '.option-type01 .btn-share', function(){
				$('.pop-share').removeClass('on');

				var elements = $(this).parents('article').find('figure').height();
				var maxheight = 0;

				$(this).parents('article').find('.pop-share').each(function(){
					$(this).height(elements);
				});

				$(this).parents('article').find('.pop-share').addClass('on');
				//mv_today_list article이 아니라 li 상단 2017.08.11 추가
				$(this).parents('li').find('.pop-share').addClass('on');
			});
			$(document).on('click', '.pop-share .btn-sns-close', function(){
				$(this).parent().removeClass('on');
			});
			if($('article').has('.option-type01')){
				$(document).on('mouseenter', 'article figure', function(){
					$(this).siblings('.option-type01').css('display','block');
					/*
					 if($html.hasClass('zh') || $html.hasClass('ja')){
					 //중문 일문 화보 아이콘 remove
					 $(this).find('.pictorial').css('display','none');
					 }else{
					 $(this).find('.pictorial').css('display','block');
					 }
					 */
				});
				$(document).on('mouseleave', 'article', function(){
					$(this).find('.option-type01').css('display','none');
					$(this).find('.pictorial').css('display','block');
				});
			}
		},
		imgCropEvt : function(conEl,findImg,limitW,limitH) {
			var $cropName = $(conEl); //크롭 컨텐츠 선택자
			var $findImgName = findImg; // 이미지 컨텐츠
			var $limitW = limitW; //제한 width
			var $limitH = limitH; //제한 height
			function imgWidth(){
				$cropName.find($findImgName).each(function(){
					var imgW = $(this).width();
					var imgH = $(this).height();
					var moveL = -(imgW-limitW)/2;
					//가로 이미지 일때
					if(imgW >= imgH){
						if(limitH <= imgH){
							//썸네일 사이즈보다 이미지가 클 경우 - 가운데 정렬
							$(this).addClass('col-w').css('margin-left',Math.round(moveL));
						}else{
							//썸네일 사이즈보다 이미지가 작을 경우 - 높이 기준 늘림
							$(this).addClass('col-w').css('height','100%');
						}
					}
					// 세로 이미지 일때 (넓이 기준 크롭)
					else if(imgW < imgH){
						$(this).addClass('rowH').css('width','100%');
					}
					//console.log(imgW);
				});
			}
			$cropName.find($findImgName).each(function(){
				var $cropW = $(this).width();
				var $cropH = $(this).height();
				if($cropW > $cropH){
					//가로 이미지 일때
					imgWidth();
				}
			});
		},
		newItem:function(){
			var option = {'height' : ['457px', '225px', '231px', '408px']};
			var i = {'h' : Math.floor((Math.random() * 4) + 1) - 1};
			var $item = $('<li>', {'class' : 'box new'}).css('height', option['height'][i['h']]);
			var img = $('<a href="#" class="kwave-img"><!-- <img src="../../img/@temp/img_kwave03.jpg" alt="Lee Ha-nui fan meeting"> --></a><h3 class="kwave-title"><a href="#">Lee Ha-nui fan meeting</a></h3><span class="kwave-update">March 23, 2017 13:20</span>');
			$item.append(img);
			return $item.get(0);
		},
		setTime:function(){
			setTimeout(function(){
				//이 이미지 크롭 이벤트가 어디서 사용하는지 파악 필요 함 공통이면 여기에 선언하시고 메인용이라면 메인 커먼에서 실행 되어야 합니다.
				Master.imgCropEvt('.right-list-type01','figure img','50','50');
				Master.imgCropEvt('.right-list-type02','figure img','50','50');
				Master.imgCropEvt('.right-poho-type','figure img','120','120');
				Master.imgCropEvt('.smain-list-type01','figure img','190','135');
				Master.imgCropEvt('.smain-list-type02','figure img','190','135');
				Master.imgCropEvt('.top-sub-news','figure img','330','242');
				Master.imgCropEvt('.smain-news','figure img','120','120');
				Master.imgCropEvt('.smain-photo-type01','figure img','230','230');
				Master.imgCropEvt('.smain-photo-type02','figure img','230','140');
				Master.imgCropEvt('.smain-video-type01','figure img','230','130');
			},300)
		},
		frLastArticle:function(){
			if( LANG_TYPE != 'fr' ) return;
			//  프랑스 헤더 부분 최종 송고시간
			$.ajax({
				url : APS + 'articlelink?body=Y&id=385&before=30&count=1',
				method : 'GET',
				success : function(data){
					if( data != null && data.DATA != '' ) {
						var date = data.DATA[0]['DATETIME'];
						date = 'Mise à jour à '+date.slice(8,10)+'h'+date.slice(10,12)+' - Séoul';
						$('.top-menu p.date').text(date);
					}
				}
			})
		}
	};

	var MainCom = {
		init:function(){
			MainCom.MoreMainNews();
		},
		AnimateBlockLayout : function(target, height){
			target.animate({
				height : height
			}, 350, function(){

			});
		},
		MoreMainNews:function(){
			var _this = this;
			var listTarget = $(".related-list01");
			var listTargetMaxHeight = listTarget.find("ul").height();
			var defaultlistheight = 0;
			var btnClose = "btn-more-close";
			var btnOpen = "btn-more-news";
			var wrap = $('#MoreMainNews'),
				btn = $('.btn-more-news');

			for( var i = 0; i < listTarget.find('li').length; i++ ){
				if( i==3 ) break;
				defaultlistheight += listTarget.find('li').eq(i).outerHeight();
			}
			listTarget.find("ul").height(defaultlistheight);

			btn.click(function () {
				if( $(this).hasClass(btnOpen) ){
					_this.AnimateBlockLayout(listTarget, listTargetMaxHeight+"px");
					$(this).addClass(btnClose).removeClass(btnOpen);
				} else {
					_this.AnimateBlockLayout(listTarget, defaultlistheight);
					$(this).addClass(btnOpen).removeClass(btnClose);
				}
				return false;
			});

			//[중문,일문] 슬라이드 이미지 눌렀을때 autoplay 중지, 화살표 x, dots x
			$(document).on('click', '.zh .section-enter-news .slide-con02 .btn-share,.ja .kwave-zone .slide-con02 .btn-share', function () {
				// $('.slider.news-con').slick('slickPause');
				$(this).parents('.slide-con02').slick('slickSetOption','autoplay',false, true);
				$(this).parents('.slide-con02').slick('slickSetOption','arrows',false, true);
				$(this).parents('.slide-con02').slick('slickSetOption','dots',false, true);
			});
			$(document).on('click', '.zh .section-enter-news .slide-con02 .btn-sns-close,.ja .kwave-zone .slide-con02 .btn-sns-close', function () {
				// $('.slider.news-con').slick('slickPause');
				$('.pop-share').removeClass('on');
				$(this).parents('.slide-con02').slick('slickSetOption','autoplay',true, true);
				$(this).parents('.slide-con02').slick('slickSetOption','arrows',true, true);
				$(this).parents('.slide-con02').slick('slickSetOption','dots',true, true);
			});
			// dot만 나오는 경우
			$('.ja .ja-photo-zone .slide-con02 .btn-share').click(function () {
				$(this).parents('.slide-con02').slick('slickSetOption','autoplay',false, true);
				// $(this).parents('.slide-con02').slick('slickSetOption','arrows',false, true);
				$(this).parents('.slide-con02').slick('slickSetOption','dots',false, true);
			});
			$('.ja .ja-photo-zone .slide-con02 .btn-sns-close').click(function () {
				$('.pop-share').removeClass('on');
				$(this).parents('.slide-con02').slick('slickSetOption','autoplay',true, true);
				// $(this).parents('.slide-con02').slick('slickSetOption','arrows',true, true);
				$(this).parents('.slide-con02').slick('slickSetOption','dots',true, true);
			});
		},
		MainVideo:function(){
			var wrap = $('.today-video-zone'),
				btn = $('.today-video-zone button.btn-play'),
				btn_close = $('.today-video-zone .btn-close, .media-box .btn-close');

			$('.today-video-zone .slide-con').slick({
				centerMode: true,
				variableWidth: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});

			// 2018-05-23 추가 *****
			var current = $('.today-video-zone').find('.slick-active');
			var cid = current.data('cid'); if( !cid ){ return; }
			var tit = current.find('h3.tit').text();
			var body = current.find('input[type="hidden"]').val();
			var img = current.find('figure img').attr('src');

			var target = $('.video-view-con video');
			var src = 'http://cdnvod.yonhapnews.co.kr/yonhapnewsvod/' + cid.slice(3, 9)  +'/' + cid + '_700M1.mp4';
			target.attr('poster', img);
			target.attr('src', src).find('source').attr('src', src);

			target = $('.video-view-con .txt-con:not(.video-finish .txt-con)');
			target.find('.tit').text(tit);
			target.find('.desc').html(body);

			$('.today-video-zone .slick-arrow').on('click', function(){
				var current = $('.today-video-zone').find('.slick-active');
				var cid = current.data('cid'); if( !cid ){ return; }
				var tit = current.find('h3.tit').text();
				var body = current.find('input[type="hidden"]').val();
				var img = current.find('figure img').attr('src');

				var target = $('.video-view-con video');
				target.attr('poster', img);
				target.attr('src', 'http://cdnvod.yonhapnews.co.kr/yonhapnewsvod/' + cid.slice(3, 9)  +'/' + cid + '_700M1.mp4');

				target = $('.video-view-con .txt-con:not(.video-finish .txt-con)');
				target.find('.tit').text(tit);
				target.find('.desc').html(body);
			});

			var video = videojs('todayVideoPlay').ready(function() {
				btn.on('click',function () {
					$('.video-view-con').addClass('on');
					video.play();
					return false;
				});
				btn_close.on('click',function () {
					//재생 초기화
					video.pause();
					video.currentTime(0);
					$('.video-view-con').removeClass('on');
					$('.video-finish.bg').hide();

					return false;
				});
				this.on('play', function() {
					$('.video-finish.bg').hide();
				});
				//재생 끝나고 보여줄 화면
				this.on('ended', function() {
					$('.video-finish.bg').show();
				});

				vjsControl(this);
			});

			// bott-con  마우스 오버시 리드문 처리
			VideoPlayCom.overTxtLoad();
		}
	};
	// 기사상세
	var VideoPlayCom = {
		init:function(){
			if(!$body.hasClass('page-view')){
				VideoPlayCom.VideoMain();
				VideoPlayCom.overTxtLoad();

				var li_dum = $('.box-video-list ul li');
				var video_list = {};
				var arr = [];
				$.each(li_dum, function(idx){
					var obj = {
						'CID' : li_dum.eq(idx).data('cid'),
						'URL' : li_dum.eq(idx).find('.tit a').attr('href'),
						'IMG' : li_dum.eq(idx).find('img').attr('src'),
						'TITLE' : li_dum.eq(idx).find('.tit').text()
					};
					arr.push(obj);
				});
				video_list['video'] = arr;
				sessionStorage.setItem('video_list', JSON.stringify(video_list));
			}
			else{
				VideoPlayCom.video_view();
				VideoPlayCom.no_wraphead_View();
				VideoPlayCom.watchNext();
			}
		},
		video_view:function($this){
			//작은 화면 close
			$('.default .btn-close02').on('click',function () {
				$('.media-top-box .left-con .default').removeClass('video-layer');
				//css의 width/height가 안먹어 넣음
				$('.media-top-box .left-con .default').width(796);
				$('.media-top-box .left-con .default').height(450);
				$is_svideo_close = window.$is_svideo_close = true;
				return false;
			});
			var target_height = $('.media-top-box .right-con .next-video').offset().top*(5/6);
			$(window).scroll(function() {

				if(target_height  > $(window).scrollTop()) {
					//video 원래 위치
					$('.media-top-box .left-con .default').removeClass('video-layer');
				} else {	//닫기버튼 누르고 나면 작은화면 다시 생기지 않음
					if( !$is_svideo_close && !window.$is_svideo_close ) {
						//video 작은 화면 위치
						$('.media-top-box .left-con .default').addClass('video-layer');
					}
				}
			});
			try {
				var video = videojs('todayVideoPlay').ready(function() {
					this.on('play', function() {
						$('.video-finish.bg').hide();
					});
					//재생 끝나고 보여줄 화면
					this.on('ended', function() {
						$('.video-finish.bg').show();
					});

					vjsControl(this);
				});
			} catch(e) {
				console.log('Youtube Video Page');
			}

			// 영상 본문에서 스크롤을 했을 때 이벤트 처리
			var vjsScroll = $(".video-view-con").find(".video-js");

			$(window).on("scroll", function() {
				if($(this).scrollTop() > 650) {
					vjsScroll.css("width", "304px");
					vjsScroll.css("height", "166px");
				} else {
					vjsScroll.css("width", "801px");
					vjsScroll.css("height", "450px");
				}
			});
		},
		VideoMain:function(){
			var btn = $('.media-box button.btn-play'),
				btn_close = $('.media-box .btn-close');

			// 2018-05-23 추가 *****
			var current = $('.video-main-zone').find('.slick-active');
			var cid = current.data('cid'); if( !cid ){ return; }
			var tit = current.find('h3.tit').text();
			var body = current.find('input[type="hidden"]').val();
			var img = current.find('figure img').attr('src');

			var target = $('.video-view-con video');
			var src = 'http://cdnvod.yonhapnews.co.kr/yonhapnewsvod/' + cid.slice(3, 9)  +'/' + cid + '_700M1.mp4';
			target.attr('poster', img);
			target.attr('src', src).find('source').attr('src', src);

			target = $('.video-view-con .txt-con:not(.video-finish .txt-con)');
			target.find('h1.tit').text(tit);
			target.find('.desc').html(body);

			$('.video-main-zone .slick-arrow').on('click', function(){
				var current = $('.video-main-zone').find('.slick-active');
				var cid = current.data('cid'); if( !cid ){ return; }
				var tit = current.find('h3.tit').text();
				var body = current.find('input[type="hidden"]').val();
				var img = current.find('figure img').attr('src');

				var target = $('.video-view-con video');
				target.attr('poster', img);
				target.attr('src', 'http://cdnvod.yonhapnews.co.kr/yonhapnewsvod/' + cid.slice(3, 9)  +'/' + cid + '_700M1.mp4');

				target = $('.video-view-con .txt-con:not(.video-finish .txt-con)');
				target.find('h1.tit').text(tit);
				target.find('.desc').html(body);
			});

			//video_source setting
			var video = videojs('todayVideoPlay').ready(function() {
				//이미지 클릭했을 경우 해당 비디오 재생
				//slide 선택된 video_source setting

				btn.on('click',function () {
					$('.video-view-con').addClass('on');
					// div_btn_play.hide();
					video.play();
					return false;
				});

				btn_close.on('click',function () {
					//재생 초기화
					video.pause();
					video.currentTime(0);
					$('.video-view-con').removeClass('on');

					return false;
				});

				this.on('play', function() {
					$('.video-finish.bg').hide();
				});
				//재생 끝나고 보여줄 화면
				this.on('ended', function() {
					$('.video-finish.bg').show();
				});

				vjsControl(this);
			});
		},
		watchNext:function(){
			var video_list = JSON.parse(sessionStorage.getItem('video_list'));
			var cid = $('#cid').val();
			var tit = $('.next-video .tit').clone();

			if ( video_list == null ) {
				getVideoList();
			}else{
				var next;
				video_list = video_list['video'];
				$.each(video_list, function(idx, li){
					if (li['CID'] == cid && idx < video_list.length-1 ) next = video_list[idx+1];
				});
				if( next != undefined && next != null ) set(next);
				else getVideoList();
			}

			function getVideoList(){
				$.ajax({
					method : 'GET',
					url : LIST_TYPE_DATASET+'?id='+LATESTVIDEOID+'&body=N&count=2',
					success : function(data){
						if( data != null && data.DATA.length > 1 ){
							var next;
							if( cid != data.DATA[0]['CID'] ) next = data.DATA[0];
							else next = data.DATA[1];
							next['IMG'] = setImgDomain(next['IMG']) + next['IMG'];
							set(next);
						}
					}
				});
			}
			function set(next){
				var UI = window.YNA_SERVICE['YNA_UI'];
				var origin = UI.getUrlQuery()['urlData']['origin'];
				var path = UI.getUrlQuery()['urlData']['path'];
				path = path.split('/view')[0];
				var html = '<h2 class="tit">'+tit.html()+'</h2><div class="video-box">' +
					(next['IMG']!=undefined?'<figure class="img-con img-cover">' +
					'<a href="'+origin+path+next['URL']+'"><img src="'+next['IMG'].replace('_T','_T2').replace('_P2','_T2')+'" alt="'+next['TITLE']+'"></a>' +
					'</figure>':'') +
					'</div><span class="lead"><a href="'+origin+path+next['URL']+'">'+next['TITLE']+'</a></span>';
				$('.next-video').html(html);
				imgCrop();
			}
		},
		no_wraphead_View:function(){
			//video_view는 첫메뉴 스크롤 된 상태로 로딩
			if( $('.aside-top-bnr').length ) var init_height = $('.aside-top-bnr').offset().top+20;
			else var init_height = $('.wrap-header').height()+30;
			//var body = $('html, body');
			//body.stop().animate({ //1116수정 서울
			//scrollTop : init_height //1116수정 서울
			//},150); //1116수정 서울
			// $('.page-view.page-video').animate({scrollTop : init_height}, 100);
			$(window).scrollTop(init_height);//ie에서만 해당 됨.
		},
		overTxtLoad:function(){
			var bott = '-200px';
			$.each($('.slide-con .video-con'), function(idx, slide){
				$(slide).on('mouseenter', function(){
					$(slide).find('.bott-con').animate({'bottom':'0px'});
				});
				$(slide).on('mouseleave', function(){
					$(slide).find('.bott-con').animate({'bottom':bott});
				});
			});
		},
		setSlide:function(){
			$('.slide-con').slick({
				centerMode: true,
				variableWidth: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	};

	// 기사상세
	var articleCom = {
		init:function(){
			articleCom.articleViewBtn();
			// articleCom.snsMore();
			// articleCom.snsCopy();
			articleCom.snsShare();
			articleCom.setFontsize();
			articleCom.flying_snsButton();
			articleCom.fixed_snsButton();
			articleCom.saved();
			articleCom.setSectionLatestNews();
		},
		articleViewBtn:function(){
			if($body.hasClass('page-article')){
				if($("#footer div").length !== 0) {
					var sub_h = $('#footer').offset().top,
						btn_h = $('.btn-a-prev').height(),
						target_h = sub_h-(btn_h*2);
				}
			} else if($body.hasClass('page-image')) {	//photos_view, photos_graphics_view
				var btn_h = $('.btn-a-prev').height();
				var sub_h = $('#footer').offset().top;
				var target_h = sub_h-(btn_h*5);
			} else {
				return;
			}

			$(window).bind('scroll',function () {
				var btn_arrow = $(window).scrollTop();
				// 더보기 버튼이 없을 수가 있기 때문에 없을 때 예외처리 필요함
				if($('.btn-more04').length) {
					if($('.btn-more04').css("display") !== "none") {
						sub_h = $('.btn-more04').offset().top;
					} else {
						sub_h = $("div.path").offset().top;
					}
				}

				if( $('.main-rightnow').length ) sub_h = $('.main-rightnow').offset().top;
				target_h = sub_h-(btn_h*5);
				if($('.view-body .image-gallery').length) {
					sub_h = $('.view-body .image-gallery').offset().top;
					target_h = sub_h+(btn_h*5);
				}

				if(btn_arrow > target_h) {
					if($body.hasClass('page-article')) $('.sns-flying').stop().fadeOut(300);
					$('.btn-a-prev').stop().fadeOut(300);
					$('.btn-a-next').stop().fadeOut(300);
				} else {
					if(btn_arrow > 210) {
						if($body.hasClass('page-article')) $('.sns-flying').stop().fadeIn(300);
						$('.btn-a-prev').stop().fadeIn(300);
						$('.btn-a-next').stop().fadeIn(300);
					}
				}
			});

			$(window).bind('resize',function () {
				var window_w = $(window).width(),
					target_w = 1300;
				//화면 1350보다 작으면 layer메뉴들 숨김
				if(window_w < target_w) {
					if($body.hasClass('page-article')) $('.sns-flying').stop().fadeOut(200);
					$('.btn-a-prev').stop().fadeOut(200);
					$('.btn-a-next').stop().fadeOut(200);
				} else {
					if($body.hasClass('page-article')) $('.sns-flying').stop().fadeIn(200);
					$('.btn-a-prev').stop().fadeIn(200);
					$('.btn-a-next').stop().fadeIn(200);
				}
			});

			//기사상세 좌우버튼
			$('.page-article .btn-a-prev').on('mouseenter',function(){
				if($lang=='ar') //[아랍]
					$(this).find('.a-thumb-link').stop().animate({'right':'69px'},400);
				else
					$(this).find('.a-thumb-link').stop().animate({'left':'69px'},400);
			});
			$('.page-article .btn-a-prev').on('mouseleave',function(){
				if($lang=='ar')//[아랍]
					$(this).find('.a-thumb-link').stop().animate({'right':'-270px'},400);
				else
					$(this).find('.a-thumb-link').stop().animate({'left':'-270px'},400);
			});
			$('.page-article .btn-a-next').on('mouseenter',function(){
				if($lang=='ar')//[아랍]
					$(this).find('.a-thumb-link').stop().animate({'left':'69px'},400);
				else
					$(this).find('.a-thumb-link').stop().animate({'right':'69px'},400);
			});
			$('.page-article .btn-a-next').on('mouseleave',function(){
				if($lang=='ar')//[아랍]
					$(this).find('.a-thumb-link').stop().animate({'left':'-270px'},400);
				else
					$(this).find('.a-thumb-link').stop().animate({'right':'-270px'},400);
			});
		},
		snsMore:function(){

		},
		snsCopy:function(){
			return;
			$('.sns-flying .share-btn02.copy').on('click',function(){
				if($(this).hasClass('on')){
					$('.share-btn02.copy').removeClass('on');
					$(this).parents('.more-box').find('.share-copy').hide();
				}else{
					$(this).addClass('on');
					$(this).parents('.more-box').find('.share-copy').show();
				}
			})
			$('.sns-flying .share-btn02.copy').on('blur',function(){
				$(this).removeClass('on');
			})
		},
		snsShare:function(){
			//share-copy close
			$('.btn-g').click(function(e){
				$(this).parents('.more-box').find('.share-copy').hide();
			});

			//share-btn02 영역 밖에서 클릭했을 때 닫음
			$(document).ready(function() {
				var layer_popup = $('.social-btns.social-type02 .sns-share');
				var layer_popup03 = $('.sns-share02.social-type02 .sns-share');
				var sns_btn = $('.btn-share');
				var sns_btn02 = $('.share-btn02');

				$(document).mouseup(function(e){
					if($('.share-copy').has(e.target).length===0)
					{
						$('.share-btn02.copy').removeClass('on');
						$('.share-copy').hide();
					}

					if(layer_popup.has(e.target).length !== 0) {
						layer_popup.hide();
						sns_btn.removeClass("focus");
					}

					$(".screen-full").on("click", function() {
						layer_popup.hide();
						sns_btn.removeClass("focus");
						$(this).remove();
					});

					$(".screen-full02").on("click", function() {
						console.log("test");
						layer_popup03.hide();
						sns_btn02.removeClass("on");
						$(this).remove();
					});
				});
			});

			//popup 밖에 클릭했을때 layer 닫음
			/*$(document).mousedown(function(e){
				if(layer_popup.css('display') == 'block')
				{
					var l_position = layer_popup.offset();
					l_position.right = parseInt(l_position.left) + (layer_popup.width()) + 10; //padding 값 추가
					l_position.bottom = parseInt(l_position.top) + parseInt(layer_popup.outerHeight(true)) + 10; //padding 값 추가

					if( ( l_position.left <= e.pageX && e.pageX <= l_position.right ) && ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) ){
						// console.log(e.pageY + '-' +  l_position.bottom);
					}
					else
					{
						// sns_btn.removeClass('focus');
						// layer_popup.removeClass('on');
						// layer_popup.hide();
					}
				}
			});*/

			var layer_popup02 = $('.view-body .sns-share');
			$(document).mousedown(function(e){
				if(layer_popup02.css('display') == 'block')
				{
					var l_position = layer_popup02.offset();
					l_position.right = parseInt(l_position.left) + (layer_popup02.width()) + 10; //padding 값 추가
					l_position.bottom = parseInt(l_position.top) + parseInt(layer_popup02.height()) + 50; //padding 값 추가

					if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
						&& ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) )
						console.log(e.pageY + '-' +  l_position.bottom);
					else
					{
						sns_btn.removeClass('focus');
						layer_popup02.removeClass('on');
						layer_popup02.hide();
					}
				}
			});
		},
		setFontsize:function(){
			//layer popup 라디오 버튼 클릭
			$('.layer-font li').on('click',function(){
				if($(this).find(':radio[name="inpFont"]:checked').val()){
					$(this).focus();
					var fontSize = $(this).find(':radio[name="inpFont"]:checked').val();
					setViewFont(fontSize);
					/*
					 var video_view_font = $('.media-desc .left-con'),
					 page_view_font01 = $('.page-view .caption-zone'),
					 page_view_font02 = $('.page-view .view-body p'),
					 page_view_font03 = $('.img-zone figcaption .tit');

					 //set fontsize
					 video_view_font.css({"font-size":fontSize+"px"});
					 page_view_font01.css({"font-size":fontSize+"px"});
					 page_view_font02.css({"font-size":fontSize+"px"});
					 fontSize +=4;//page_view title
					 page_view_font03.css({"font-size":fontSize+"px"});
					 */
					setCookie("cFontSize",fontSize,1);
				}
			});

			//layer_popup 밖에 클릭했을때 layer 닫음
			var layer_popup = $('.layer-font');
			var sns_btn = $('.btn-fontsize');
			$(document).mousedown(function(e){
				if(layer_popup.css('display') == 'block')
				{
					var l_position = layer_popup.offset();
					l_position.right = parseInt(l_position.left) + (layer_popup.width()) + 40; //padding
					l_position.bottom = parseInt(l_position.top) + parseInt(layer_popup.height()) + 50; //padding

					if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
						&& ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) ){
						//console.log(e.pageY + '-' +  l_position.bottom);
					}
					else {
						sns_btn.removeClass('focus');
						layer_popup.hide();
					}
				}
			});
		},
		snsLayerPopup : function() {
			var screenFull = $("<div class='screen-full'></div>");
			var screenWidth = $(window).width();
			var screenHeight = $(document).height();

			$("body").append(screenFull);
			$(".screen-full").css({
				width : screenWidth,
				height : screenHeight,
				position : "absolute",
				top : 0,
				left : 0
			});
		},
		flying_snsButton:function(){
			$('.sns-share02.social-type02 :button').on('click',function(){
				var btn_class = $(this).attr('class');
				var screenFull = $("<div class='screen-full02'></div>");
				var screenWidth = $(window).width();
				var screenHeight = $(document).height();
				$('.sns-share02.social-type02 :button').each(function(index){
					if($(this).hasClass(btn_class))
					{
						if($(this).hasClass('mor'))	//btn-share 클릭
						{
							if($(this).hasClass('on')){
								$(this).removeClass('on');
								$('.more-box .sns-share').hide();
								$(".screen-full02").remove()
								// $(this).removeClass('on');
								// $(this).parents('.more-box').find('.sns-share').hide();
							} else {
								$(this).addClass('on');
								$('.more-box .sns-share').show();
								$("body").append(screenFull);
								$(".screen-full02").css({
									width : screenWidth,
									height : screenHeight,
									position : "absolute",
									top : 0,
									left : 0
								});
								$(".screen-full02").show();
								// $(this).addClass('on');
								// $(this).parents('.more-box').find('.sns-share').show();
							}
							$('.more-box .share-copy').hide();
						} else if($(this).hasClass('copy')) {	//btn-fontsize 클릭
							if($(this).hasClass('on')){
								$(this).removeClass('on');
								$(this).parents('.more-box').find('.share-copy').hide();
							} else {
								$(this).addClass('on');
								$(this).parents('.more-box').find('.share-copy').show();
							}
							// $(this).parents('.more-box').find('.sns-share').hide();
							$('.more-box .sns-share').hide();
						} else {		//ggp, tw, fb
							$(this).parents('.more-box').find('.sns-share').hide();
							$(this).parents('.more-box').find('.share-copy').hide();
							$(this).removeClass('on');
						}
					}
					else
						$(this).removeClass('on');
				});
			});
		},
		fixed_snsButton:function(){
			var parents;
			$('.social-btns.social-type02 :button').on("click", function(){

				var btn_class = $(this).attr('class');
				var click_parents = $(this).parent().parent().parent().attr('class');
				$('.social-btns.social-type02 :button').each(function(index){
					parents = $(this).parent().parent().parent().attr('class'); //photos_view는 구조가 다름
					if($(this).hasClass(btn_class))
					{
						if($(this).hasClass('btn-share'))	//왼쪽 공유버튼
						{
							if($(this).hasClass('focus'))
							{
								if($body.hasClass('page-image'))
								{
									if(click_parents == parents) //photos_view는 fixed sns-button이 위아래 2개
									{
										$(this).removeClass('focus');
										$(this).parents('.'+parents).find('.sns-share').hide();
										$(".screen-full").remove();
									}
								} else {
									$(this).removeClass('focus');
									$(this).parent().find('.sns-share').hide();
									$(".screen-full").remove();
								}
							} else {
								if($body.hasClass('page-image'))
								{
									if(click_parents == parents) //photos_view는 fixed sns-button이 위아래 2개
									{
										$(this).addClass('focus');
										$(this).parents('.'+parents).find('.sns-share').show();
										articleCom.snsLayerPopup();
									}
								} else {
									$(this).addClass('focus');
									$(this).parent().find('.sns-share').show();
									articleCom.snsLayerPopup();
									$(".screen-full").show();
								}
							}
							// $(this).parents('.social-btns.social-type02').find('.layer-font').hide();
							$(this).parent().find('.layer-font').hide();
						} else if($(this).hasClass('btn-fontsize')) {	//우측 폰트 클릭
							if($(this).hasClass('focus'))
							{
								$(this).removeClass('focus');
								$(this).parent().find('.layer-font').hide();
							} else {
								$(this).addClass('focus');
								$(this).parent().find('.layer-font').show();
							}
							// $(this).parents('.social-btns.social-type02').find('.layer-font').hide();
							// $(this).toggleClass('focus');
							// $(this).parent().find('.layer-font').toggle();
							$(this).parents('.social-btns').find('.sns-share').hide();
						} else if($(this).hasClass('copy')) {
							if($body.hasClass('page-image'))
							{
								if(click_parents == parents)
								{
									$(this).parents('.'+parents).find('.sns-share').hide();
									$(this).parents('.'+parents).find('.share-copy').fadeIn(1);
									$(this).parents('.'+parents).find('.share-copy').delay(2000).fadeOut(500);
								}
							} else {
								$(this).parents('.social-btns.social-type02').find('.sns-share').hide();
								$(this).parents('.social-btns.social-type02').find('.share-copy').fadeIn(1);
								$(this).parents('.social-btns.social-type02').find('.share-copy').delay(2000).fadeOut(500);
							}
						} else {		//가운데 버튼3개
							$('.btn-share').removeClass('focus');
							$(this).parent().find('.sns-share').hide();
							$('.btn-fontsize').removeClass('focus');
							$(this).parent().find('.layer-font').hide();
						}
					}
					else
						$(this).removeClass('focus');
				});
			});
			$('.social-btns.social-type02 :button').blur(function(){
				if(!$(this).hasClass('btn-fontsize') && !$(this).hasClass('btn-share')) {
					$(this).parent().find('.layer-font').hide();
					// $(this).parent().find('.sns-share').hide();
					// $(this).removeClass('focus');
				}
			});
		},
		saved:function(){
			//pictorial layer
			$('.btn-save').on('click',function(){
				if($body.attr('data-attr') == 'pictorial'){
					$('.btn-save').toggleClass('on');
				} else {
					$('.btn-save').toggleClass('on');
				}
			});
		},
		setSectionLatestNews:function(){
			var target = $('.latest-news-zone');
			if( target.length ){
				var lang = LANG_TYPE;
				var section_full = $('input#requestSection').val();
				var section = section_full.split('/')[0];
				var url = BOTTOMSECTIONNEWS+'&lang='+lang.toUpperCase()+'&section='+section+'&image=N';

				$.ajax({
					url : encodeURI(url),
					type : 'GET',
					success : function(data){
						if( data != '' && data.DATA != '' ) {
							var raw = data.DATA;
							var information = [];
							$.each(raw, function(idx, section){
								if( idx < 5 ) information.push(section);
								else return false;
							});
							target.find('ul').html(set(information));
							imgCrop();
						}
					}
				});
			}

			function set(data){
				var UI = window.YNA_SERVICE['YNA_UI'];
				var origin = UI.getUrlQuery()['urlData']['origin'];
				var path = UI.getUrlQuery()['urlData']['path'];
				path = path.split('/view')[0];
				var html = '';
				$.each(data, function(idx, d){
					var img = '';
					var url = origin+path+d['URL'];
					(d['IMG']!='' ? img = setImgDomain(d['IMG']) + d['IMG'] : '');
					html += '<li><article><a href="'+url+'">' +
						(d['IMG']!='' ? '<figure class="img-con img-cover"><img src="'+img+'" alt="'+d['TITLE']+'"></figure>' : '') +
						'<h4 class="tit">'+d['TITLE']+'</h4>' +
						'</a></article></li>';
				});
				return html;
			}
		}
	};

	/** ArticleView Module Start ---------------------------------------------------------------------------------- */
	/** 2018.01.02 common > ArticleView 모듈 객체 수정 by SSC
	 * 1차 모듈 제작 : 퓨즈 (~2017)
	 * 최종 모듈 수정 : SSC (2018~)
	 * 모듈정보 : ArticleView 모듈은 service > article view 페이지에 필요한 모듈을 포함한다.
	 * 작업설명 : 기존 퓨즈의 sample 페이지에 적용된 script 모듈을 제거 및 수정 하여 실 service 페이지에 대응한다.
	 * */
	var ArticleView = {
		/**
		 * 슬라이드 컨텐츠의 공통 메서드
		 * @param node : slide item
		 */
		defaultMustChangeFnc : function(type, node){
			var slideGroup;
			var slideCurrent;
			var slideCaption;
			var capZone;

			if( type === 'photo' ){
				slideGroup = $(node).parents('.pic-zone');
				slideCurrent = slideGroup.find('.slick-current');
				slideCaption = slideCurrent.find('.yhnCaption');
				capZone = slideGroup.find('.caption-zone');

				if( slideCaption.text().length > 0 ) {
					capZone.find('p.desc').show();
					capZone.find('p.desc').text(slideCaption.text());
					ArticleView.multimediaCationRender($(node),true);
				}
				else {
					capZone.find('p.desc').hide();
					capZone.find('p.desc').text('');
					ArticleView.multimediaCationRender($(node),false);
				}
			} else if( type === 'video' ) {
				slideGroup = $(node).parents('.video-group');
				slideCurrent = $(node);
				var videoNodes = slideGroup.find('video');
				$.each(videoNodes, function(){
					this.pause();
					this.currentTime = 0;
				});
				slideCaption = slideCurrent.find('.yhnCaption');
				capZone = slideGroup.find('.caption-zone');
                capZone.find('.title').text(slideCaption.attr('data-title'));
                capZone.find('p.desc').text(slideCaption.text());

				if( slideCaption.attr('data-title').length > 0 && slideCaption.text().length > 0 ) {
					capZone.find('.title').show();
					capZone.find('p.desc').show();
					ArticleView.multimediaCationRender($(node),true,'video');
				}
				else {
					capZone.find('.title').hide();
					capZone.find('p.desc').hide();
					ArticleView.multimediaCationRender($(node),false,'video');
				}
			}
		},

		/**
		 * 사진 / 비디오 그룹 - 하단 캡션 텍스트 렌더링
		 * @param target : video event target
		 * @param type   : boolean
		 */
		multimediaCationRender : function(target, type, chk){
			var group = target.parents('.comp-box');
			if( group && group.length > 0 ){
				var desc = group.find('.desc');
				var tit = group.find('.title');
				var txtShow = group.find('.txt-show');
				var txtHide = group.find('.txt-hide');
				var btnCaption = group.find('.btn-caption');
				if(type){
					if( chk == 'video' && tit.text().length ) tit.show(250);
					else tit.hide();
					desc.slideDown(250);
					txtShow.hide();
					txtHide.show();
					btnCaption.removeClass('on');
				} else {
					if( chk == 'video' && tit.text().length ) tit.hide(250);
					else tit.hide();
					desc.slideUp(250);
					txtShow.show();
					txtHide.hide();
					btnCaption.addClass('on');
				}
			}
		},

		/**
		 * videoJs 모듈 - multi player 및 switch 실행 모듈 정의
		 * @param target      : video target event
		 * @param controlBox  : control box in video group
		 * @param video       : current video object
		 * @param videoBox    : video node
		 * @param videoSrc    : string video source link
		 * @param videoPoster : string video poster image link
		 * @param videoIdx    : number video index number
		 */
		videoJsPlayHandler : function(target, controlBox, video, videoBox, videoSrc, videoPoster, videoIdx){
			var _module = this;
			controlBox.find('strong').text(videoIdx+1);
			video.posterImage.el_.style.display = 'none';
			video.bigPlayButton.hide();
			videoBox.find('.video-js').attr('poster', videoPoster).css('background', '#000');
			videoBox.find('.video-js video').hide();
			video.pause().currentTime(0);
			video.src(videoSrc);
			video.ready(function(){
				setTimeout(function(){
					video.play().poster(videoPoster);
					videoBox.find('.video-js video').fadeIn(250);
					video.posterImage.el_.style.display = 'none';
				}, 500);
			});
		},

		/**
		 * 비디오 아이템 슬라이드 - 비디오 선택 썸네일 노드를 생성하는 함수
		 * @param param : video src, etc
		 * @param slideOption : boolean
		 * @returns {*|vjs.Component}
		 */
		createVideoBoxNode : function(param, slideOption){
			var videoContent = $('<div></div>').addClass('comp-box video-group');
			if( slideOption ){ videoContent.addClass('slider-group'); }
			var videoZone = $('<div></div>').addClass('video-zone');
			var innerNode = $('<div></div>').addClass('inner');
			var videoViewCon = $('<div></div>').addClass('video-view-con');
			var captionZone = $('<div></div>').addClass('caption-zone');
			var buttonZone = $('<button></button>').addClass('btn-caption btn');
			var thumbBox;
			var controlBox;
			var videoFinish;
			var thumbImgBox = '';
			/** video content 제작 */
			videoViewCon.html(
				'<div class="video">' +
				'<video id="todayVideoPlay" class="video-js vjs-default-skin vid-skin02">' +
				'<source src="" type="video/mp4">' +
				'</video>' +
				'</div>'
			);
			/** caption 제작 */
			captionZone.html('' +
				'<strong>Video :</strong>' +
				'<span></span>' +
				'<p class="desc"></p>'
			);
			/** caption button 제작 */
			buttonZone.html('' +
				'<span class="txt-show">Show Caption</span>' +
				'<span class="txt-hide">Hide Caption></span>'
			);
			/** videoFinish 의 리스트 생성 로직이 필요함 */
			if( param['etcVideoList'] ){
				videoFinish = $('<div></div>').addClass('video-finish bg');
				videoViewCon.append(videoFinish);
				videoFinish.html('<div class="box-video-list02"><ul></ul></div>');
				$.each(param['list'], function(idx, val){
					videoFinish.append($('<li>' +
						'<figure class="img-con">' +
						'<a href="#none"><img src="'+val.url+'"><span class="runtime">'+val.time+'</span></a>' +
						'</figure>' +
						'<div class="txt-con">' +
						'<h4 class="tit"><a href="#">'+val.title+'</a></h4>' +
						'</div>' +
						'</li>')
					);
				});
			}
			/** slide option 이 있을경우 생성을 해주어야 함 */
			if( slideOption ){
				thumbBox = $('<div></div>').addClass('thumb-box');
				controlBox = $('<div></div>').addClass('control-box');
				controlBox.html('' +
					'<div class="controller">' +
					'<button class="btn-prev">previous</button>' +
					'<button class="btn-next">next</button>' +
					'</div>' +
					'<span class="num"><strong>1</strong><span> of</span><span> 9</span></span>' +
					'<div class="thumb-list-wrap">' +
					'<div class="thumb-imgs slider-nav">' +
					'</div>' +
					'</div>'
				);
				$.each(param['thumb'], function(idx, val){
					thumbImgBox += '<div class="thumb-slide">' +
						'<figure class="img-con">' +
						'<a href="#none"><img src="'+val.url+'"></a>' +
						'</figure>' +
						'</div>';
				});
				thumbBox.append(controlBox);
				controlBox.find('.thumb-imgs').html(thumbImgBox);
			}
			thumbBox.append(controlBox);
			videoZone.append(innerNode);
			innerNode.append(videoViewCon, captionZone, buttonZone, thumbBox);
			videoContent.append(videoZone);
			return videoContent;
		},

		/**
		 * 메인 슬라이드 - 메인 이미지 및 썸네일 노드를 생성하는 함수
		 * @param param : object > video src, text, etc
		 * @returns {*|vjs.Component}
		 */
		createSlideImageNode : function(param){
			var slideContent = $('<div></div>').addClass('comp-box slider-group pic-zone');
			var innerNode = $('<div></div>').addClass('inner');
			var slideArticle = $('<div></div>').addClass('slide-article');
			var captionZone = $('<div></div>').addClass('caption-zone');
			var buttonZone = $('<button></button>').addClass('btn-caption btn');
			var thumbBox = $('<div></div>').addClass('thumb-box');
			var controlBox = $('<div></div>').addClass('control-box');
			var mainImgBox = '';
			var thumbImgBox = '';
			captionZone.html('' +
				'<strong>Photos :</strong>' +
				'<span></span>' +
				'<p class="desc"></p>'
			);
			buttonZone.html('' +
				'<span class="txt-show">Show Caption</span>' +
				'<span class="txt-hide">Hide Caption></span>'
			);
			controlBox.html('' +
				'<div class="controller">' +
				'<button class="btn-prev">previous</button>' +
				'<button class="btn-next">next</button>' +
				'</div>' +
				'<span class="num"><strong>1</strong><span> of</span><span> 20</span></span>' +
				'<div class="thumb-list-wrap">' +
				'<div class="thumb-imgs slider-nav">' +
				'</div>' +
				'</div>'
			);
			thumbBox.append(controlBox);
			// 메인 이미지 슬라이드 동적생성 필요
			$.each(param['main'], function(idx, val){
				mainImgBox += '<div class="pto-view-con">' +
					'<div class="img-box"></div>' +
					'<figure>' +
					'<img src="'+val.url+'">' +
					'<figcaption style="display: none">' +
					'<span class="title">'+val.title+'</span>' +
					'<span class="texts">'+val.texts+'</span>' +
					'</figcaption>' +
					'</figure>' +
					'<button class="btn-prev02">previous</button>' +
					'<button class="btn-next02">next</button>' +
					'</div>';
			});
			// 썸네일 이미지 슬라이드 동적생성 필요
			$.each(param['thumb'], function(idx, val){
				thumbImgBox += '<div class="thumb-slide">' +
					'<figure class="img-con">' +
					'<a href="#none">' +
					'<img src="'+val.url+'">' +
					'</a>' +
					'</figure>' +
					'</div>';
			});

			slideArticle.html(mainImgBox);
			controlBox.find('.thumb-imgs').html(thumbImgBox);
			innerNode.append(slideArticle, captionZone, buttonZone, thumbBox);
			slideContent.append(innerNode);
			return slideContent;
		},

		/**
		 * 메인 슬라이드 구성을 위한 ynagroup 태그 분석 및 파싱 정의 > 노드 생성
		 */
		appendSlideImageNode : function(){
			var mainImg = [];
			var thumbImg = [];
			var getSildeNode = this.createSlideImageNode({
				main : mainImg,
				thumb : thumbImg
			});
		},

		/**
		 * aricle view의 포토 슬라이드 및 비디오 관련 컨트롤 및 UI 정의
		 */
		article_View : function(){
			var _module = this;
			/** ----------------------------------------------------------------------------- */
			/** 2018.01.02 article_view 페이지의 메인 이미지 슬라이드 모듈의 수정 Start - by SSC  */
			/**
			 * 기사 본문의 사진 슬라이드의 이미지를 비율처리한다.
			 */
			$('.pic-zone .img-box figure img').on('load', function(){
				$(".pic-zone .img-box figure img").each(function(index,item){
					var $item = $(item);
					$item.removeClass();
					if($item.width()>$item.height()){
						var imgRate = $item[0].naturalWidth/$item[0].naturalHeight;
						var boxRate = $('.pic-zone .img-box figure').width()/$('.pic-zone .img-box figure').height();
						if(imgRate < boxRate){
							$item.addClass("portrait");
						} else {
							$item.addClass("landscape");
						}
					} else {
						$item.addClass("portrait");
					}
					$item.siblings("figcaption").hide();
				});
			});

			/** 메인 슬라이드 이미지의 현재 숫자 카운트 및 셀렉트 이벤트
			 * @param node : target node on event handler
			 * @param idx  : current node number on event handlerK
			 */
			var thumbSlideNumHandler = function(node, idx){
				var thisPicZone = node.parents('.pic-zone');
				var thumbZone = thisPicZone.find('.thumb-imgs .thumb-slide[data-slick-index='+idx+']');
				var controlBox = thisPicZone.find('.control-box .num strong');
				var childLength = parseInt(thisPicZone.attr('data-total'));
				if( idx < 0 ){ idx = 0 }
				else if(idx >= childLength) { idx = idx-1; }
				controlBox.text(idx+1);
				thisPicZone.find('.slide-article').slick('slickGoTo',idx, false);
				thumbZone.addClass('slick-current').siblings().removeClass('slick-current');
			};

			/** 메인 이미지와 썸네일 이미지 슬라이드 연결 이벤트
			 * @param node   : target node on event handler
			 * @param num    : current node number on event handler
			 * @returns {*}  : slide content node
			 */
			var thumbSlideHandler = function(node, num){
				var thisSlider = node.parents('.slide-article');
				var dataIndex = parseInt(node.parents('.slick-slide').attr('data-slick-index'))+num;
				thumbSlideNumHandler(node, dataIndex);
				return thisSlider;
			};

			/** 메인 이미지 슬라이드 후 caption 동작 */
			$('.pic-zone .slide-article').on('afterChange', function(event, slick, currentSlide, direction){
				var node = $(this).find('.slick-current'), dataIndex = parseInt(node.attr('data-slick-index'));
				thumbSlideNumHandler($(this), dataIndex);
				_module.defaultMustChangeFnc('photo', this);
			});

			/** 메인 썸네일 선택 및 연동 이벤트 */
			$('.pic-zone .thumb-slide').on('click', function(){
				var node = $(this), dataIndex = parseInt(node.attr('data-slick-index'));
				thumbSlideNumHandler(node, dataIndex);
				return false;
			});

			/** 메인 이미지 슬라이드 prev 버튼 클릭 시 이벤트 */
			$('.pic-zone .slide-article .btn-prev02').click(function(){
				thumbSlideHandler($(this), -1).slick('slickPrev');
				return false;
			});

			/** 메인 이미지 슬라이드 next 버튼 클릭 시 이벤트 */
			$('.pic-zone .slide-article .btn-next02').click(function(){
				thumbSlideHandler($(this), 1).slick('slickNext');
				return false;
			});

			/** 메인 이미지 슬라이드의 현재 캡션 렌더링 이벤트 */
			$('.pic-zone .btn-caption').click(function(){
				var desc = $(this).parent().find(".desc");
				var bool = desc.is(":visible")?false:true;
				_module.multimediaCationRender($(this), bool);
				return false;
			});

			/** 메인 이미지 슬라이드 좌우 버튼 랜더링 */
			$('.slide-article').mouseenter(function(){
				$(this).find('.btn-prev02, .btn-next02').show();
				return false;
			}).mouseleave(function(){
				$(this).find('.btn-prev02, .btn-next02').hide();
				return false;
			});

			/** 썸네일 박스의 prev 버튼 이벤트 */
			$('.pic-zone .control-box .btn-prev').click(function(){
				$(this).parents('.thumb-box').find('.thumb-imgs').slick('slickPrev');
				thumbSlideNumHandler($(this), 0);
				return false;
			});

			/** 썸네일 박스의 next 버튼 이벤트 */
			$('.pic-zone .control-box .btn-next').click(function(){
				var self = $(this);
				self.parents('.thumb-box').find('.thumb-imgs').slick('slickNext');
				var thumbBox = self.parents('.thumb-box');
				var index = parseInt(thumbBox.find('.slick-current').attr('data-slick-index'));
				thumbSlideNumHandler(self, index);
				return false;
			});

			/** 2018.01.02 article_view 페이지의 메인 이미지 슬라이드 모듈의 수정 End - by SSC  */
			/** ---------------------------------------------------------------------------- */

			/** ------------------------------------------------------------------------------------ */
			/** 2018.01.02 article_view 페이지의 메인 동영상 슬라이드 및 연결 모듈의 수정 Start - by SSC  */

			/** video 공통 선언 - videoJs 의 객체를 multi로 할당하여 초기화 한다. */
			var videoArray = [];
			var videoNodes = $body.find('.video-group video');
			$.each(videoNodes, function(idx){
				var self = $(this);
				var videoId = self.attr('id');
				var thisBgList = self.parents('.video-group').find('.video-finish.bg');
				self.attr('data-index', idx).parent().css('background-color', '#000');
				videojs(videoId).ready(function() {
					if( thisBgList.length > 0 ){
						this.on('play', function() { thisBgList.hide(); });
						this.on('ended', function() { thisBgList.show(); });
					}
				});
				videoArray.push( videojs(videoId) );
			});

			/** 메인 비디오의 플레이 실행 이벤트 */
			$('.video-view-con').click(function(){
				// 비디오를 재생시킬 때 비디오의 영상과 캡션이 있을 경우에 뜨도록 한다.
				if( !$('.video-view-con video').get(0).paused ){
					var target = $('.video-group .thumb-list-wrap .slick-current .yhnCaption');
					if( target.attr('data-title').length > 0 && target.text().length > 0 )
						_module.multimediaCationRender($(this), true, 'video');
				}
			});

			/** 메인 비디오의 캡션 버튼 실행 이벤트 */
			$('.video-group .btn-caption').click(function(){
				var desc = $(this).parent().find(".desc");
				var bool = desc.is(":visible")?false:true;
				_module.multimediaCationRender($(this), bool, 'video');
				return false;
			});

			/** 비디오 영상 종료후 기타 영상 리스트 출력시 해당 아이템 이벤트 */
			$body.on("click", '.video-finish.bg li', function(){
				var videoGroup = $(this).parents('.video-group');
				var video = videoGroup.find('video');
				var videoIdx = parseInt(video.attr('data-index'));
				var videoObj = videoArray[videoIdx];

				alert('영상이 끝나고 기타 영상 목록에서 아이템 선택시!!! 개별 플레이가 필요할듯 ');
				//TODO : 실제 데이터가 붙었을때 구현이 가능할듯!!
				console.log(video, videoObj, videoIdx);
				return false;
			});

			/** 메인 비디오의 썸네일 이미지 실행 이벤트 */
			$('.video-zone .thum-slide').on({
				'mousedown' : function(){
					var parent = $(this).parents('.thumb-imgs');
					parent.attr('data-slide', 'false');
				},
				'click' : function(){
					var self = $(this),
						videoIdx = parseInt(self.attr('data-slick-index')),
						videoBox = self.parents('.video-group'),
						parent = self.parents('.thumb-imgs'),
						videoSrc = self.find('figure a').attr('data-video'),
						videoPoster = self.find('img').attr('src'),
						controlBox = videoBox.find('.control-box .num');

					/** video 타겟 선택 */
					var video = videoArray[parseInt(videoBox.find('video').attr('data-index'))];
					if( parent.attr('data-slide') !== 'true' ){
						_module.videoJsPlayHandler(self, controlBox, video, videoBox, videoSrc, videoPoster, videoIdx);
					}
					self.find(".img-con").addClass('on').parents(".thum-slide").siblings().find(".img-con").removeClass('on');
					_module.defaultMustChangeFnc('video', this);
                    // 선택한 슬라이드로 이동
                    $('.thumb-box .thumb-imgs').slick('slickGoTo',videoIdx, false);
                    controlBox.find('strong').text(videoIdx+1);
					return false;
				}
			});

			/** 비디오 그룹 슬라이드 좌우 버튼 이벤트 */
			$('.video-zone .control-box').on('click', '.btn-prev', function(){
				$(this).parents('.thumb-box').find('.thumb-imgs').slick('slickPrev');
				return false;
			}).on('click', '.btn-next', function(){
				$(this).parents('.thumb-box').find('.thumb-imgs').slick('slickNext');
				return false;
			});


			/** 2018.01.02 article_view 페이지의 메인 동영상 슬라이드 및 연결 모듈의 수정 End - by SSC  */
			/** ----------------------------------------------------------------------------------- */
		},
		article_xed_View:function(){
			var video = videojs('todayVideoPlay').ready(function() {
				this.on('play', function() {
					$('.video-finish.bg').hide();
				});
				this.on('ended', function() {
					$('.video-finish.bg').show();
				});
			});
			//video 재생했을 때 caption 자동 열림
			$('.video-view-con').click(function(){
				var self = $(this);
				var videoZone = self.parents('.video-zone');
				videoZone.find('.desc').show();
				videoZone.find('.txt-show').hide();
				videoZone.find('.txt-hide').show();
				self.parents('.video-group').find('.btn-caption').removeClass('on');
				return false;
			});

			/** 비디오 캡션 렌더링 이벤트 */
			$('.video-group .btn-caption').click(function(){
				var self = $(this);
				var videoZone = self.parents('.video-zone');
				var descZone = videoZone.find('.desc');
				if( descZone.is(":visible") ) {
					descZone.slideUp();
					self.text('Show Caption');
					self.addClass('on');
				} else {
					descZone.slideDown();
					self.text('Hide Caption');
					self.removeClass('on');
				}
				return false;
			});
		},
		AnimateBlockLayout : function(target, height){
			target.animate({
				height : height
			}, 350, function(){

			});
		},
		init_article:function(){
			var _this = this;
			//관련기사 더보기
			var wrap_article = $('#moreArticleNews'),
				articleParent = wrap_article.parent(".article-list"),
				btn_article = articleParent.parent('.related-zone').find('.btn'),
				news_article = $('#moreArticleNews li'),
				articleInitHeight = articleParent.outerHeight(),
				articleUlMaxHeight = news_article.length*news_article.outerHeight();

			btn_article.on('click', function () {
				var self = $(this);
				if(btn_article.hasClass('on')) {
					self.removeClass('on');
					self.find('.txt-more').show();
					self.find('.txt-close').hide();
					_this.AnimateBlockLayout(articleParent, articleInitHeight+"px");
					setTimeout(function(){
						news_article.hide();
					}, 300);
					articleParent.removeClass("on");
				} else {
					self.addClass('on');
					self.find('.txt-more').hide();
					self.find('.txt-close').show();
					_this.AnimateBlockLayout(articleParent, articleUlMaxHeight+"px");
					news_article.show();
					articleParent.addClass("on");
				}
				return false;
			});

			//관련이슈 더보기
			var wrap_issue = $('#moreIssueNews'),
				issueParent = wrap_issue.parent('.article-list'),
				btn_issue = issueParent.parent('.related-zone').find('.btn'),
				news_issue = $('#moreIssueNews li'),
				issueInitHeight = issueParent.outerHeight(),
				issueUlMaxHeight = news_issue.length*news_issue.outerHeight();

			btn_issue.on('click', function () {
				var self = $(this);
				if(btn_issue.hasClass('on')) {
					self.removeClass('on');
					self.find('.txt-more').show();
					self.find('.txt-close').hide();
					_this.AnimateBlockLayout(issueParent, issueInitHeight+"px");
					setTimeout(function(){
						news_issue.hide();
					}, 300);
					issueParent.removeClass("on");
				} else {
					self.addClass('on');
					self.find('.txt-more').hide();
					self.find('.txt-close').show();
					_this.AnimateBlockLayout(issueParent, issueUlMaxHeight+"px");
					news_issue.show();
					issueParent.addClass("on");
				}
				return false;
			});
			//video cation default 닫힘
			//$('.video-group .desc').hide();
		},

		/** Article View 모듈 Init */
		init:function(){
			ArticleView.init_article();
			if( $body.hasClass('page-article') && $pageActive01 !== "articleXed" ){
				ArticleView.article_View();
			}
			/** article xed > 영문만 있음 */
			if($pageActive01 === "articleXed"){
				ArticleView.article_xed_View();
			}
		}
	};
	/** ArticleView Module End ------------------------------------------------------------------------------------ */

	var mvCom = {
		init:function(){
			if( $('#mVVideoPlay').length ) mvCom.mvTodaylist();
		},
		mvTodaylist:function($this){
			var btn = $('.list-type-video .play-con figure a');
			var video = videojs('mVVideoPlay').ready(function() {
				var click_idx = 0;
				//이미지 클릭했을 경우 해당 비디오 재생
				$('.related-video li').on('click',function () {
					click_idx = $(this).index();
					$(this).siblings().find('figure').removeClass('on');

					//선택한 이미지 이름에 '_b'를 붙여 비디오재생 화면 크기의 이미지 불러옴(700x400)
					var click_img = $(this).find('img').attr('src').replace('_P1', '_P4');//.replace(/.jpg/g,'_b.jpg');
					// click_img = "../../img/@temp/img_most_viewed14_b.jpg";
					$(this).find("figure").addClass('on');
					// 재생될 영상
					var play_src = 'http://cdnvod.yonhapnews.co.kr/yonhapnewsvod/' + $(this).data('cid').slice(3, 9) + '/' + $(this).data('cid') + '_700M1.mp4';

					video.pause();
					video.src(play_src); //재생되는 비디오 파일
					video.poster(click_img); // 재생되는 파일의 이미지
					video.play();
					/*
					 video.oncanplaythrough = function() {	// 로드 완료되면 실행
					 video.play();
					 };
					 */
					//재생될 이미지
					var target_img = $(this).parents('.list-type-video').find('.play-con figure img').not('.video-finish.bg img');
					target_img.attr('src', click_img);

					var caption_box = $('.right-caption .inner');
					var tit = $(this).find('.tit a').text();
					var body = $(this).find('.news-body').val();
					var info = '<strong class="tit">' + tit + '</strong>' + body;
					caption_box.html(info);
					//caption_box.find('.inner').html('<strong class="tit">' + tit + '</strong>' + body);

					//자막
					$('.play-con').addClass('on');
					$('.video-view-con').addClass('on');
					$('.right-caption').show();
				});
				btn.on('click',function () {
					video.pause();
					video.play();

					//자막
					$('.play-con').addClass('on');
					$('.video-view-con').addClass('on');
					$('.right-caption').show();
				});
				this.on('play', function() {
					$('.right-caption').show();
					$('.video-finish.bg').hide();
				});
				//재생 끝나고 보여줄 화면
				this.on('ended', function() {
					$('.video-finish.bg').show();
				});

                vjsControl(this);
			});
			$('.btn-close').on('click',function () {
				video.pause();
				video.currentTime(0);
				$('.video-finish.bg').hide();
				$('.right-caption').hide();
				$('.video-view-con').removeClass('on');
			});
		}
	};

	var kbCom = {
		init:function(){
			kbCom.Koreainbrief();
		},
		Koreainbrief:function($this){
			$('.inner-tit button').on('click',function () {
				$('.inner-lst').toggle();
			});

			$('.inner-lst li').on('click',function () {
				var click_idx = $(this).index();

				//선택한 slide로 이동
				$('.slide-type02').slick('slickGoTo',click_idx, false);
				//선택한 목록 highlight
				$(".inner-lst li").each(function(index,item){
					if(index == click_idx) {
						$(this).addClass('on');
						// console.log($(item).text());
						$('.inner-tit span').html($(item).text());
					} else {
						$(this).removeClass('on');
					}
				});
			});
		}
	};

	var topicCom = {
		init:function(){
			topicCom.topic_list();
		},
		topic_list:function(){ //topic 배너가 4개 이상 일때 clear:both 추가
			var toList = $('.topic-zone .t-img-box:nth-child(4n)');
			$('<p class="clear-both"></p>').insertAfter(toList);
		}
	};

	var fcCom = {
		init:function(){
			fcCom.festival_cal();
		},
		festival_cal:function($this){
			$('.list-type-photo li').on('click',function () {

				var click_idx = $(this).index();

				//선택한 slide로 이동
				$('.fc-slick').slick('slickGoTo',click_idx, false);
				//선택한 목록 highlight
				$('.list-type-photo li').each(function(index,item){
					if(index == click_idx)
						$(this).addClass('on');
					else
						$(this).removeClass('on');
				});

			});

		}
	};

	//로딩시 레이아웃 깨짐 수정
	var ImageCom = {
		init:function(){
			ImageCom.Image_main();
			//photos_view, photos_graphics_view
			if($body.hasClass('page-view'))
				ImageCom.no_wraphead_View();
		},
		Image_main:function($this){
			$('.img-slide-div .item').css('display','block');
		},
		no_wraphead_View:function(){
			//photos_view, photos_graphics_view는 첫메뉴 스크롤 된 상태로 로딩
			// var init_height = $('.wrap-header').height() + $('.aside-top-bnr').height() + 260;
			var init_height = $('.wrap-header').height() + 40;
			var body = $('html, body');
			/*
			 setTimeout(function(){
			 body.scrollTop(init_height);

			 //$("body").removeClass("blind");
			 },100);
			 */
			body.stop().animate({
				scrollTop : init_height
			},150); //150에서1로 1116수정 서울
			// $('.page-view.page-image').animate({scrollTop : init_height}, 100);
			$(window).scrollTop(init_height);//ie에서만 해당 됨.
		}
	};

	var SearchCom = {
		init:function(){
			var is_tab=false;
			SearchCom.Search_common();
			SearchCom.filter();
		},
		Search_common:function($this){
			// 검색 페이지 진입시 자동 스크롤
			// if($pageActive02)
			// 	return;
			var init_height = $('.left').offset().top;
			var body = $('html, body');
			body.stop().animate({
				scrollTop : init_height - 5
			},150);
		},
		filter:function(){
			var $filterOption = $('.filter span .inp-label');
			$filterOption.each(function(){
				$(this).on('click',function(){
					$('.filter span .inp-label').removeClass('on');
					$(this).toggleClass('on');

					setTimeout(function() {
						$('#search_click, button[name = filterSearch]').trigger("click");
					}, 200);
				})
			})
		}
	};

	var savedCom = {
		init:function(){
			var is_tab=false;
			savedCom.saved_common();
			savedCom.layer_position();
			savedCom.filter();
		},
		saved_common:function($this){
			// layer-popup
			$('.tooltip-con .noti03').click(function(){
				$('.layer-tooltip').toggle();
				return false;
			});

			$('.tooltip-con .btn-close').click(function(){
				$('.layer-tooltip').hide();
				return false;
			});
			//layer-tooltip 영역 밖에서 클릭했을 때 닫음

			//fixed_snsbutton과 같은 기능.. 구조가 조금 달라 일단 분기;
			$('.smain-list-type01 .btn-i-share').on('click', function(){
				var click_idx = $(this).index();
				if($(this).hasClass('focus'))
				{
					$(this).removeClass('focus');
					$(this).parent().find('.sns-share').hide();
				}
				else
				{
					$('.smain-list-type01 .btn-i-share').removeClass('focus');
					$('.smain-list-type01 .sns-share').hide();
					$(this).addClass('focus');
					$(this).parent().find('.sns-share').show();
				}
				$(this).parent().parent().find('.share-copy').hide();
				//focus된 버튼옆에 layer 찾아서 닫음
				$('.saved-list-zone .btn-i-share').each(function(index){
					if($(this).hasClass('focus'))
					{
						var layer_popup = $(this).parent().find('.sns-share');
						var sns_btn = $(this);
						$(document).mousedown(function(e){
							if(layer_popup.css('display') == 'block')
							{
								var l_position = layer_popup.offset();
								l_position.right = parseInt(l_position.left) + (layer_popup.width()) + 30; //padding
								l_position.bottom = parseInt(l_position.top) + parseInt(layer_popup.height()) + 40; //padding

								if( ( l_position.left <= e.pageX && e.pageX <= l_position.right )
									&& ( l_position.top <= e.pageY && e.pageY <= l_position.bottom ) )
									console.log(e.pageY + '-' +  l_position.bottom);
								else {
									sns_btn.removeClass('focus');
									layer_popup.hide();
								}
							}
						});
					}
				});
			});

			$('.smain-list-type01 .btn-i-remove').on('click', function(){
				$(this).parents('.smain-list-type01').find('.btn-i-share').removeClass('focus');
				$(this).parent().find('.sns-share').hide();
			});

			$('.share-btn.copy').on('click', function(e){
				$(this).parents('.smain-list-type01').find('.btn-i-share').removeClass('focus');
				$(this).parent().parent().find('.share-copy').fadeIn(1).delay(2000).fadeOut(500);
				$(this).parents('.social-type02').find('.sns-share').hide();
				// $('.share-copy').fadeIn(1);
				// $('.share-copy').delay(2000).fadeOut(500);
			});
		},
		layer_position:function(btn,e){
		},
		filter:function(){
			var $filterOption = $('.type-time button');
			$filterOption.each(function(){
				$(this).on('click',function(){
					$('.type-time button').removeClass('on');
					$(this).toggleClass('on');
				})
			})
		}
	};

	$(document).ready (function () {
		//탭(ul) onoff 전국날씨 이중탭
		$('.city-map-tab>.map-cont').children().css('display', 'none');
		$('.tab-city-map>.map-cont div:first-child').css('display', 'block');
		$('.tab-city-map>.city-day-tab li:first-child').addClass('day-tab-on');
		$('.tab-city-map').delegate('.city-day-tab>li', 'click', function() {
			var index = $(this).parent().children().index(this);
			$(this).siblings().removeClass();
			$(this).addClass('day-tab-on');
			$(this).parent().next('.map-cont').children().hide().eq(index).show();
		});
	});

	var KtCom = {
		init:function(){
			var is_tab=false;
            KtCom.setImgSize();
			KtCom.kt_list();
		},
        setImgSize : function(){
            // 본문 이미지의 비율을 계산하여 이미지 사이즈 재조정.
            var mainPicZone = $('.pic-zone02 .slide-article');
            var width = mainPicZone.find('.pto-view-con:eq(0) figure').width();
            var height = mainPicZone.find('.pto-view-con:eq(0) figure').height();
            var rate = width/height;

            $.each(mainPicZone.find('.pto-view-con img'), function(idx, p){
                var orgWidth = $(this).prop('naturalWidth');
                var orgHeight= $(this).prop('naturalHeight');
                var tmpRate = orgWidth/orgHeight;

                if( tmpRate >= rate ) $(this).css({'width' : '100%', 'height' : 'auto'});
                else $(this).css({'height' : '100%', 'width' : 'auto'});
            });
        },
		kt_list:function($this){
			var mainPicZone = $('.pic-zone02 .slide-article');
			var picZone = $(".pic-zone02 .thumb-imgs");
            var max = picZone.find('.thumb-slide').length;

            /** 메인 슬라이드 이미지의 현재 숫자 카운트 및 셀렉트 이벤트
             * @param node : target node on event handler
             * @param idx  : current node number on event handlerK
             */
			var thumbSlideNumHandler = function(node, idx){
                var thisPicZone = node.parents('.pic-zone02');
				picZone.find('.thumb-slide .img-con').removeClass('on');
				var caption = node.find('input.slide-caption').val();
				$('.caption-zone span').text(caption);

				var thumbZone = picZone.find('.thumb-slide[data-slick-index='+idx+']');
                thumbZone.addClass('slick-current').siblings().removeClass('slick-current');
                thumbZone.find(".img-con").addClass("on");

				var controlBox = thisPicZone.find('.control-box .num strong');
				var childLength = parseInt(thisPicZone.attr('data-total'));
				if( idx < 0 ){ idx = 0; }
				else if(idx >= childLength) { idx = idx-1; }
				controlBox.text(idx+1);
			};

			//.slide-article prev
			$('.pic-zone02 .slide-article .btn-prev02').on('click', function(){
				mainPicZone.slick('slickPrev');
				var node = mainPicZone.find('.slick-current'), dataIndex = parseInt(node.attr('data-slick-index'));
				thumbSlideNumHandler(node, dataIndex);
				return false;
			});
			//.slide-article next
			$('.pic-zone02 .slide-article .btn-next02').on('click', function(){
				mainPicZone.slick('slickNext');
                var node = mainPicZone.find('.slick-current'), dataIndex = parseInt(node.attr('data-slick-index'));
                thumbSlideNumHandler(node, dataIndex);
				return false;
			});

			$('.pic-zone02 .slide-article').mouseenter(function(){
				$('.pic-zone02 .slide-article .btn-prev02').show();
				$('.pic-zone02 .slide-article .btn-next02').show();
				return false;
			});

			$('.pic-zone02 .slide-article').mouseleave(function(){
				$('.pic-zone02 .slide-article .btn-prev02').hide();
				$('.pic-zone02 .slide-article .btn-next02').hide();
				return false;
			});

			//pic-zone slide prev
			$('.pic-zone02 .control-box .btn-prev').click(function(){
				var dataIdx = parseInt(picZone.find('.slick-current').attr('data-slick-index'));
				if( dataIdx - 8 < 1) picZone.slick('slickGoTo',0);
				else picZone.slick('slickPrev');
                var node = picZone.find('.slick-current'), dataIndex = parseInt(node.attr('data-slick-index'));
                thumbSlideNumHandler(node, dataIndex);
				return false;
			});
			//pic-zone slide next
			$('.pic-zone02 .control-box .btn-next').click(function(){
                var dataIdx = parseInt(picZone.find('.slick-current').attr('data-slick-index'));
                if( dataIdx+8 <= max-1 ){
                    var destination = Math.floor(dataIdx/8+1)*8;
                    picZone.slick('slickGoTo',destination);
                }
                var node = picZone.find('.slick-current'), dataIndex = parseInt(node.attr('data-slick-index'));
                thumbSlideNumHandler(node, dataIndex);
				return false;
			});

			// 아랍어 화보 이미지 체인지
			$(picZone).find('.thumb-slide').click(function(e) {
				e.preventDefault();
				var dataIndex = parseInt($(this).attr('data-slick-index'));
				$(".control-box span.num").find("strong").text(dataIndex+1);
                var caption = mainPicZone.find('.slick-current input.slide-caption').val();
                $('.caption-zone span').text(caption);
				picZone.find('.img-con').removeClass('on');
				$(this).find('.img-con').addClass('on');
			});
		}
	};

	var listCom = {
		init:function(){
			listCom.List_common();
		},
		List_common:function($this){
			//[중문] 순위 탭1/2 선택
			$('.tab-type01.n2 li').click(function () {
				var click_idx = $(this).index();//선택한 탭 on
				$('.tab-type01.n2 li').each(function (index) {
					if(click_idx==index)
						$(this).addClass('on');
					else
						$(this).removeClass('on');
				});

				if($(this).index() == 0)
				{
					$('#tab-list01').show();
					$('#tab-list02').hide();
				}
				else
				{
					$('#tab-list01').hide();
					$('#tab-list02').show();
				}
			});
		}
	};
	//[중문][일문]
	var picCom = {
		init:function(){
			picCom.pictorial();
			// picCom.isOverflow();
		},
		pictorial:function($this){
			var control_box_num = $(".pictorial-zone").find(".control-box .num strong");

			$(".gallery-slick-btn a.btn-arrow").css("display", "block");

			//photos_pictorial_view 상단 slide
			$('.pictorial-zone .btn-prev').click(function(){
				$('.pictorial-zone .thumb-imgs').slick('slickPrev');
				return false;
			});
			$('.pictorial-zone .btn-next').click(function(){
				$('.pictorial-zone .thumb-imgs').slick('slickNext');
				return false;
			});

			$('.pictorial-zone .thumb-imgs').on('afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				//   if($lang=="ar")//[아랍]
				//     var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
				// else
				var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
				// ex) 1 of 18
				//$('.pictorial-zone .control-box .num').html(slideInfo);
				//control_box_num.text(i);
				return false;
			});

			$('.view-body .pictorial-zone .thumb-slide').each(function(index){
				$(this).click(function(){
					$('.view-body .image-gallery').slick('slickGoTo',index, false);
					control_box_num.text(index+1);
				});
			});

			$('.view-body .image-gallery').on('afterChange', function (event, slick, currentSlideIdx) {
				var currentThumb = $('.view-body .pictorial-zone .thumb-slide').eq(currentSlideIdx);
				$('.view-body .pictorial-zone .thumb-slide .img-con').removeClass("on");
				currentThumb.find('.img-con').addClass("on");
				$('.view-body .thumb-imgs').slick('slickGoTo',currentSlideIdx, false);
				control_box_num.text(currentSlideIdx+1);
			});

			$(".btn-a-prev").click(function(e){
				e.preventDefault();

				$(".view-body .image-gallery .btn-prev").trigger("click");
			});

			$(".btn-a-next").click(function(e){
				e.preventDefault();

				$(".view-body .image-gallery .btn-next").trigger("click");
			});

			$('.pictorial-zone .btn-caption').click(function(){
				// $('.pictorial-zone .thumb-box').toggle();
				//$('.pictorial-zone .control-box .num').toggle();

				if($(this).parents('.pictorial-zone').find('.thumb-box').is(":visible")){
					$(this).parents('.pictorial-zone').find('.thumb-box').slideUp(100);
					$(this).parent().find('.txt-show').show();
					$(this).parent().find('.txt-hide').hide();
					$(this).addClass('on');
				} else {
					$(this).parents('.pictorial-zone').find('.thumb-box').slideDown(100);
					$(this).parent().find('.txt-show').hide();
					$(this).parent().find('.txt-hide').show();
					$(this).removeClass('on');
				}
				return false;
			});

			//pop-pictorail-layer 시작
			$('.pictorial-txt-bottom').show();
			$('.ico-zoomin').unbind().bind("click",function(){
				$('.pop-pictorial-layer').show();
				$('.pop-pictorial-layer').css('z-index',9999);
				$('.pop-pictorial-layer .next').children("a").attr("href", "#");
				$('.pop-pictorial-layer .prev').children("a").attr("href", "#");
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick('slickGoTo',0, false);
				$body.css('overflow-y', 'hidden'); //레이어 창에서 스크롤 사라지게 함
				$('.pictorial-txt').css("bottom","-115px");
				$('.pop-pictorial-layer .btn-pictorial').removeClass("open");
				/* [중문] pictorial [일문] pictorial */
				$('.pictorial-slide').slick({
					arrows: false,
					pauseOnHover: true,
					cssEase: 'linear',
					variableWidth: false,
					infinite: false,
					// speed: 1,
					slidesToShow: 6,
					slidesToScroll: 6
				});

				$(".pop-pictorial-layer .img-zone figure").css("height",$(".pop-pictorial-layer").height()-200 );
				$(window).bind('resize',function () {
					$(".pop-pictorial-layer .img-zone figure").css("height",$(".pop-pictorial-layer").height()-200 );

					var descSpan = $("<span class='desc-span'></span>");

					$("body").append(descSpan);
					$(".desc-span").text(desc.text());

					descWidth = desc.width();
					descSpanWidth = $(".desc-span").width();

					if(descWidth > descSpanWidth) {
						$('.pop-pictorial-layer .btn-txt-pictorial').hide();
					} else {
						$('.pop-pictorial-layer .btn-txt-pictorial').show();
					}
				});
			});
			//layer 닫으면 초기화
			$('.pictorial-close').click(function(){
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick('slickGoTo',0, false);
				$('.pictorial-slide').slick('slickGoTo',0, false);
				$('.pop-pictorial-layer .btn-txt-pictorial').show();
				$('.pop-pictorial-layer, .pop-pictorial-layer .sns-share').hide();
				$('.pop-pictorial-layer .btn-share').removeClass('focus');
				$body.css('overflow-y', 'auto'); //레이어 창에서 스크롤 사라지게 함
				$('.pictorial-slide').slick('unslick');
			});
			//pop-layer caption 위 버튼 overflow 확인하는 다른 방법을 찾아야 할 듯..
			var desc = $('.pictorial-txt-bottom .desc'),
				default_height = 25,
				line_char = 75,
				max_height;
			var descWidth = 0, descSpanWidth = 0;

			//전체 caption 버튼
			$('.pop-pictorial-layer .btn-pictorial').click(function(){
				var btn_pic = $(this);
				var descSpan = $("<span class='desc-span'></span>");

				if(btn_pic.hasClass("open")){
					btn_pic.removeClass('open');

					if(desc.css('overflow') == 'visible') {
						$('.pictorial-txt').animate({"bottom":"-130px"});
					} else {
						$('.pictorial-txt').animate({"bottom":"-115px"});
					}

					$(this).parent().find('.btn-pictorial').find('.txt-show').show();
					$(this).parent().find('.btn-pictorial').find('.txt-hide').hide();
				}
				else{
					$("body").append(descSpan);
					$(".desc-span").text(desc.text());

					descWidth = desc.width();
					descSpanWidth = $(".desc-span").width();

					if(descWidth > descSpanWidth) {
						$('.pop-pictorial-layer .btn-txt-pictorial').hide();
					} else {
						$('.pop-pictorial-layer .btn-txt-pictorial').show();
					}

					$('.pictorial-txt').animate({"bottom":"0"});
					btn_pic.addClass('open');
					$(this).parent().find('.btn-pictorial').find('.txt-show').hide();
					$(this).parent().find('.btn-pictorial').find('.txt-hide').show();
				}
			});
			//아래 문단 caption 버튼
			$('.pop-pictorial-layer .btn-txt-pictorial').click(function(){
				var btn_pic = $(this);
				if(desc.css('overflow') == 'hidden'){
					desc.css('overflow', 'visible');
					max_height = (desc.text().length/line_char)*default_height + 35;
					desc.css('max-height', max_height +'px');
					btn_pic.addClass('open');
					$(this).parent().find('.btn-txt-pictorial').find('.txt-show').hide();
					$(this).parent().find('.btn-txt-pictorial').find('.txt-hide').show();
				}
				else{
					desc.css('overflow', 'hidden');
					max_height = default_height;
					desc.css('max-height', max_height +'px');
					btn_pic.removeClass('open');
					$(this).parent().find('.btn-txt-pictorial').find('.txt-show').show();
					$(this).parent().find('.btn-txt-pictorial').find('.txt-hide').hide();
				}
			});
			// var b_slide_btn_prev = $('.pop-pictorial-layer .comp-box.img-group .btn-a-prev');
			// var b_slide_btn_next = $('.pop-pictorial-layer .comp-box.img-group .btn-a-next');
			/*
			 $('.pop-pictorial-layer .btn-a-prev, .pop-pictorial-layer .btn-a-next').mouseenter(function(){
			 $(this).css('opacity', '1');
			 return false;
			 });

			 $('.pop-pictorial-layer .btn-a-prev, .pop-pictorial-layer .btn-a-next').mouseleave(function(){
			 $(this).css('opacity', '0');
			 return false;
			 });
			 */

			$('.pop-pictorial-layer .comp-box.img-group .btn-layer-prev').click(function(){
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick('slickPrev');
			});
			$('.pop-pictorial-layer .comp-box.img-group .btn-layer-next').click(function(){
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick('slickNext');
			});

			$('.pop-pictorial-layer .comp-box.img-group .img-zone').on('afterChange', function (event, slick, currentSlideIdx) {
				var slickActive = $('.pop-pictorial-layer .inner').find("div.slick-active");
				var slickImg = slickActive.find("img").attr("src");

				$(this).find(".p-content").hide();
				$(".pictorial-txt-bottom").find("strong.tit").text(slickActive.find("img").attr("data-caption"));
				$(".pictorial-txt-bottom").find("p.desc").text(slickActive.find(".p-content").text());
				$(".photos-zoom").attr("href", slickImg);
				$('.pictorial-slide').slick('slickGoTo',currentSlideIdx, false);
			});

			//pop-pictorial-layer 하단 여러 개 slide
			$('.pop-pictorial-layer .thumb-box .btn-next').click(function(){
				$('.pictorial-slide').slick('slickNext');
			});

			$('.pop-pictorial-layer .thumb-box .btn-prev').click(function(){
				$('.pictorial-slide').slick('slickPrev');
			});

			$('.pictorial-slide .thumb-slide').on('click',function () {
				var click_idx = $(this).index();
				//선택한 slide로 이동
				$('.pop-pictorial-layer .comp-box.img-group .img-zone').slick('slickGoTo',click_idx, false);
				//선택한 목록 highlight
				$('.pictorial-slide .thumb-slide').each(function(index,item){
					if(index == click_idx){
						$(this).addClass('on');
					} else{
						$(this).removeClass('on');
					}
				});
			});
			$('.pop-pictorial-layer .comp-box.img-group .img-zone').on('afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				//   if($lang=="ar")//[아랍]
				//     var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
				// else
				var slideInfo = "<strong>" + i + "</strong>" + " / " + slick.slideCount;
				// ex) 1 of 18
				$('.pop-pictorial-layer .paging').html(slideInfo);

				$('.pictorial-slide .thumb-slide').each(function(index,item){
					if(index == currentSlide){
						$(this).find('figure').addClass('on');
					}else
						$(this).find('figure').removeClass('on');
				});

				return false;
			});
		}
	}
})(window, jQuery);


/** ------------------------------------------------------- */
/** 개별함수 */
/** ------------------------------------------------------- */
//검색 영역 text 삭제 버튼 추가
function eventSchKeyPress(event){
	if(event.keyCode)
		var keycode = event.keyCode;

	// $('.input-box').find(".btn-del").show();
}
//layer dim pop height
function popTopPosition(obj){
	var wHeight = $(window).height();
	var contHeight = obj.height();

	if(wHeight <= contHeight){
		obj.css({
			'top': '0'
		});
	} else {
		obj.css({
			'top':(wHeight/2)-(contHeight/2)+'px'
		});
	}
}
//layer dim pop width
function popLeftPosition(obj){
	var wWidth = $(window).width();
	var contWidth = obj.width();

	if(wWidth <= contWdith){
		obj.css({
			'left': '0'
		});
	} else {
		obj.css({
			'left':(wWidth/2)-(contWidth/2)+'px'
		});
	}
}
//layer dim pop on click
function popupBtnClick(e){
	e.preventDefault();
	var posY = $(window).scrollTop();
	$('body').addClass('scrollStop');
	$('body').css('top',-posY);
	$('.dim').css('z-index', '99').show();
}
// cookie
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	var path = 'path=/';
	document.cookie = cname + "=" + cvalue + "; " + expires + "; " + path;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}
// set view font
function setViewFont(fontSize){
	var target = $('.story-view-zone');
	if( !target.length ) return;
	var targetClass = $('.story-view-zone')[0].classList;
	var nameReg = /font-size\d{2}/;
	$.each(targetClass, function(idx, c){
		if( nameReg.test(c) ) target.removeClass(c);
	});
	target.addClass(fontSize);

	$('input:radio[name=inpFont]:input[value='+fontSize+']').attr('checked',true);
}

// dev-img[0-9]에서 숫자 정하는 hash
function hashmod(str,mod) {
	var h = 0;
	for (var i=0; i<str.length; i++)
	{
		h = 0xffffffff & (31 * h + str.charCodeAt(i));
	}
	return Math.abs(mod ? h % mod : h % 10);
}

// 이미지 크롭
function imgCrop(){
	// 썸내일 이미지 크롭
	$('.img-cover').imgLiquid({fill:true, verticalAlign:'top'});

	$('.img-cover').on('click', function() {
		var url = $(this).find('a').attr('href');
		if(typeof url !== "undefined"){
			location.href=$(this).find('a').attr('href');
		}
	});
}

// 영상 확대를 했을 때 축소 아이콘으로 변경
function vjsControl(thisControl) {
	thisControl.on('webkitfullscreenchange', function() {
		if($(".vjs-fullscreen-control").length == 1){
			$(".vjs-fullscreen-control").addClass("vjs-fullscreen-cut");
			$(".vjs-fullscreen-control").removeClass("vjs-fullscreen-control");
		}else if($(".vjs-fullscreen-cut").length == 1){
			$(".vjs-fullscreen-cut").addClass("vjs-fullscreen-control");
			$(".vjs-fullscreen-cut").removeClass("vjs-fullscreen-cut");
		}
	})
}

function setImgDomain(img_src){
	var result = '';
	if (img_src){
		var dot = IMG_DOMAIN.indexOf('.');
		result = IMG_DOMAIN.slice(0, dot) + hashmod(img_src, 10).toString() + IMG_DOMAIN.slice(dot);
	}
	return result;
}
// 최상단 속보 callback 함수
function latestNewsListRequestCallback(data){
	if( data == null || data.DATA == '' ) return;
	var list = ""; //속보 부분 HTML을 대신하는 변수
	var slideList = "";
	var domain = window.YNA_SERVICE['YNA_UI'].getUrlQuery()['urlData']['origin'];
	if( domain.match('https://cb.yna.co.kr') ) {
		domain = 'https://cb.yna.co.kr/gate/big5/cn.yna.co.kr';
	}

	$.each(data.DATA, function(index, listFile) {
		//날짜 형식 변경 YYYY-MM-DD
		var maimList = listFile.DATETIME;
		var mainList_count = [maimList.slice(0, 4), "-", maimList.slice(4, 6), "-", maimList.slice(6, 8), " ", maimList.slice(8, 10), ":", maimList.slice(10, 12)].join('');

		//속보 리스트
		list += "<li>" +
			"<h3 class='tit'>" +
			"<a href='" + domain + listFile.URL + "'>" + listFile.TITLE + "</a>" +
			"</h3>" +
			"<span class='date datefm-short-"+ LANG_TYPE +"01'>" +  mainList_count + "</span>" +
			"</li>";

		//속보 리스트 롤링
		slideList += "<article>" +
			"<h3 class='tit'>" +
			"<a href='" + domain + listFile.URL + "'>" + listFile.TITLE + "</a>" +
			"</h3>" +
			"<span class='date ico-date01 datefm-short-"+ LANG_TYPE +"01'>" +  mainList_count + "</span>" +
			"</article>";
	});
	//속보 리스트 내용 추가
	$("#latestNewsLayer ul").html(list);
	//속보 리스트 롤링 내용 추가
	$(".latest-news-slide").html(slideList);
	$('.latest-news-slide').slick({
		autoplay: true,
		adaptiveHeight:true,
		vertical: true,
		arrows: false,
		infinite: true,
		slide: 'article',
		slickPause: true
	});

	$(".latest-news-slide").slick("pause");
	$(".latest-news-slide article span").removeClass('datefm-short-' + LANG_TYPE + '01');
	$(".latest-news-slide article span").addClass('datefm-mini-' + LANG_TYPE + '01');

	if( Window.NOW_TIME == undefined ){
		var now = changeDateFormat.getNowTime();
		Window.NOW_TIME = now;
	}
	changeDateFormat.changeLastestNewsLayer(Window.NOW_TIME);
}

$(document).ready(function(){
	// 폰트 설정
	setViewFont(currentFontSize);
	//중문 pc 메인 상단 QR 2018-10-16
	$(".sns-link .wec .sns-clicked, .sns-link .wec .sns-layer-inner .close").on('click', function() {
		$(".sns-link .wec .sns-layer-wec").toggle();
	});
	//중문 pc 메인 하단 QR 2018-10-16
	$(".f-sns .wec .fsns-clicked, .f-sns .wec .fsns-layer-inner .fclose").on('click', function() {
		$(".f-sns .wec .fsns-layer-wec").toggle();
	});
});

/** ------------------------------------------------------- */


/***********************************************
* 원본 파일 (//img.yonhapnews.co.kr/basic/svc/00_en/src/2016/js/ui.js)
* 작업자 : 박지선 (2018-05-23)
- TOBE 수정 : 서울시스템즈 (2018-06-22)
- North korea Now → Korea Now 교체 (2018-11-29)

---------------------
* 북한은지금 유튜브 North korea Now
- API Key : AIzaSyADOfUgSvGViw7jop8bAr732djQKaKfaP4
- ID : UChX-Cgkfava-G-LlfwC9v_g
- contentDetails.uploads : UUhX-Cgkfava-G-LlfwC9v_g

* 재생 목록 조회
https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUhX-Cgkfava-G-LlfwC9v_g&key=AIzaSyADOfUgSvGViw7jop8bAr732djQKaKfaP4
---------------------
* 한국은지금 유튜브 Korea Now
- API Key : AIzaSyBx0VZLseFJFzhy7bDdOJsvbDUFOmmeJ2s
- ID : UCR-L8oZkHzgDh1ahJhH2WDQ
- contentDetails.uploads : UUR-L8oZkHzgDh1ahJhH2WDQ

* 재생 목록 조회
https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUR-L8oZkHzgDh1ahJhH2WDQ&key=AIzaSyBx0VZLseFJFzhy7bDdOJsvbDUFOmmeJ2s
 ***********************************************/
/* Youtube API 로드 */
function youtubeApi(){
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

//배열 정렬
var sortBy = function(field, reverse){
	var key = function(x){ return x[field] };
	reverse = [-1, 1][+!!reverse];
	return function(a, b){
		return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
	}
}

//한국 표준시 변환 (24시간)
function convertLocalDate(val){
	var date = new Date(val);
	var dd = date.getDate();
	var mm = date.getMonth() + 1;
	if(mm < 10) mm = '0'+mm
	var yy = date.getFullYear();
	var hh = date.getHours();
	var min = date.getMinutes();
	if(min < 10) min = '0'+min
	var ss = date.getSeconds();
	var ms = date.getMilliseconds();
	//console.log(yy+'-'+mm+'-'+dd+' '+hh+':'+min);
	return yy+'-'+mm+'-'+dd+' '+hh+':'+min;
}

//재생시간 초단위 변환
function convertDura(val){
	var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
	var hours = 0, minutes = 0, seconds = 0, totalseconds;
	if (reptms.test(val)) {
		var matches = reptms.exec(val);
		if(matches[1]) hours = Number(matches[1]);
		if(matches[2]) minutes = Number(matches[2]);
		if(matches[3]) seconds = Number(matches[3]);
		totalseconds = hours * 3600  + minutes * 60 + seconds;
	}
	return totalseconds;
}

//재생시간 시간단위 변환
function toHHMMSS(secs){
	var sec_num = parseInt(secs, 10);
	var hours   = Math.floor(sec_num / 3600) % 24;
	var minutes = Math.floor(sec_num / 60) % 60;
	var seconds = sec_num % 60;

	if(hours <= 0){
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		return [minutes,seconds].join(":")
	}else{
		if (hours   < 10) {hours  = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		return [hours,minutes,seconds].join(":")
	}
}

var dataYtb = [];
var YtbContent = {
	init : function() {
		youtubeApi();
		YtbContent.load();
	},

	param : function() {
		var s = document.location.search.replace(/^\?/, '');
		var a = s.split(/&+/);
		var b = {};
		for (var n in a) {
			var m = a[n].split(/=/);
			try {
				if (m && m.length == 2) b[m[0]] = decodeURIComponent(m[1])
			} catch (e) {}
		}
		return b;
	},

	//id : 'UChX-Cgkfava-G-LlfwC9v_g',
	//key : 'AIzaSyADOfUgSvGViw7jop8bAr732djQKaKfaP4',
	linkList : location.origin+'/video/korea-now/index',
	linkView : location.origin+'/video/korea-now/koreanow',
	section : 'video/korea-now',
	page: undefined,
	page_limit: 3, //페이징 수
	page_show: 20, //한 페이지당 출력 개수
	page_main: 20, //첫페이지만 17 개 출력
	total: 50,

	load : function(pid,len) {

		var aaa = $.ajax({
			url: '//ars.yna.co.kr/api/v2/youtube/playlistItems?key=api5&part=snippet,status,contentDetails,statistics&playlistId=UUR-L8oZkHzgDh1ahJhH2WDQ&relay=true',
			//url: '//ars.yna.co.kr/api/v2/youtube.items?key=api3&playlistId=UUR-L8oZkHzgDh1ahJhH2WDQ',
			//url: '//ars.yna.co.kr/api/v2/youtube.list?key=api2&playlistId=UUR-L8oZkHzgDh1ahJhH2WDQ',
			//url: '//ars.yna.co.kr/api/v2/svc.koreanow',
			cache: true,
			method: "GET",
			dataType: "json",
			success: function(data){
				var $body = $('body');
				var vid, tit, desc, thumbHigh, thumbMaxSta, dura, viewCount;

				//데이터 생성
				$.each(data.items, function(i,item) {
					//console.log(this.snippet);
					vid = this.id; //this.snippet.resourceId.videoId;
					tit = this.snippet.title;
					desc = this.snippet.description;
					pub = this.snippet.publishedAt;

					if(tit != 'Private video'){
						if(tit != 'Deleted video'){

							dura = this.contentDetails.duration;
							dura = convertDura(dura);
							dura = toHHMMSS(dura); //console.log(dura);
							viewCount = this.statistics.viewCount;

							if(this.snippet.thumbnails != undefined){
								thumbHigh = this.snippet.thumbnails.high.url;

								if(this.snippet.thumbnails.maxres != undefined){
									thumbMaxSta = this.snippet.thumbnails.maxres.url;
								}
								else if(this.snippet.thumbnails.standard != undefined){
									thumbMaxSta = this.snippet.thumbnails.standard.url;
								}
							}

							var makeData = {vid: vid, title:tit, desc:desc, time:pub, imgHigh:thumbHigh, imgMax:thumbMaxSta, duration:dura, viewCount:viewCount};
							dataYtb.push(makeData);
						}
					}
				});
				//데이터 시간 순으로 정렬
				dataYtb.sort(sortBy('time', false));

				//페이지별 함수 실행
				if ($body.hasClass('page-main')) {
					YtbContent.corner(dataYtb); //코너
					//ytbDataTime.init(dataYtb, 5); //재생시간
				}
				else if ($body.hasClass('page-section')){
					YtbContent.corner(dataYtb); //코너
					YtbContent.sectionList(dataYtb, 5); //세션리스트
					//ytbDataTime.init(dataYtb, 5); //재생시간
					//ytbDataView.init(dataYtb, 5); //조회수
				}
				else if ($body.hasClass('page-list')) {
					YtbContent.subList(dataYtb);	//리스트
					//ytbDataTime.init(dataYtb, 0); //재생시간
					//ytbDataView.init(dataYtb, 0); //조회수
				}
				else if ($body.hasClass('page-view')) {
					YtbContent.embed(dataYtb);
					YtbContent.viewList(dataYtb, 0, 6); //리스트
					//ytbDataTime.init(dataYtb, 6, 6); //재생시간
					//ytbDataView.init(dataYtb, 0, 6); //조회수
					setViewFont(currentFontSize);
				}

			}
		});
	},

	corner : function(data) {
		var html = '';
		$(data).each(function(i){
			if(i < 5){
				var ytb = 'https://youtu.be/';
				var vid = data[i].vid;
				var tit = data[i].title;
				var thumb = data[i].imgMax;
				var url = YtbContent.linkView + '?vid=' + vid + '&section=' + YtbContent.section;
				var pub = data[i].time;
				pub = YtbContent.replaceDate01(pub);
				var dura = data[i].duration;

				if(tit != 'Deleted video' && tit != 'Private video'){
					html += '<article class="video-con" data-vid="' + vid + '">' +
						'<figure class="img-con img-cover"><a href="' + url + '"><img src="' + thumb + '" alt="' + tit + '"></a></figure>' +
						'<div class="txt-con bott-con">' +
						'<h3 class="tit">' + tit + '</h3>' +
						'<span class="date">' + pub + '</span>' +
						'<span class="time">'+dura+'</span>' +
						'<input type="hidden" value=""/>' +
						'</div>' +
						'<a class="btn-play" href="' + url + '"><span>Play</span></a>' +
						'</article>';
				}
			}
		});

		$('.slide-con').append(html);
		$.each($('.today-video-zone .video-con .btn-play'), function(){
			$(this).on('click', function(){ window.location = $(this).find('a').attr('href'); });
		});

		YtbContent.slider();
		var bott = '-200px';
		$.each($('.video-con.slick-slide'), function(idx, slide){
			$(slide).on('mouseenter', function(){
				$(slide).find('.bott-con').animate({'bottom':'0px'});
			});
			$(slide).on('mouseleave', function(){
				$(slide).find('.bott-con').animate({'bottom':bott});
			});
		});
		imgCrop();

		$('.btn-play').off().on('click', function(){
			window.location.href = $(this).attr('data-url');
		});
	},

	sectionList : function(data, start){
		var html = '';

		for (var i=start;i<13;i++) { //data.length
			var ytb = 'https://youtu.be/';
			var vid = data[i].vid;
			var tit = data[i].title;
			var thumb = data[i].imgHigh;
			var url = YtbContent.linkView + '?vid=' + vid + '&section=' + YtbContent.section;
			var pub = data[i].time;
			pub = YtbContent.replaceDate01(pub);
			var dura = data[i].duration;
			var viewCount = data[i].viewCount; //console.log(viewCount);

			html += '<li>' +
				'<article>' +
				'<figure class="img-con02 img-cover">' +
				'<a href="' + url +'">' +
				'<img src="' + thumb + '" alt="' + tit + '">' +
				'<span class="runtime">'+dura+'</span>' +
				'</a>' +
				'</figure>' +
				'<div class="txt-con">' +
				'<h4 class="tit">' +
				'<a href="' + url + '">' + tit + '</a>' +
				'</h4>' +
				'<span class="thumb-date view"><strong class="count">' + viewCount + '</strong>' + pub + '</span>' +
				'</div>' +
				'</article>' +
				'</li>';
		}
		$('.general-s-zone .box-video-list ul').html(html);
		imgCrop();
	},

	subList : function(data) {
		var html = '';
		var page = YtbContent.param()['page'];
		if( page == undefined ) page = 1;
		var show = YtbContent.page_show;	// 한 페이지당 출력 개수

		//페이지당 출력 개수가 변동이 없는 경우
		var pageStart = Math.abs((show * page) - show);
		var pageItems = 50;
		show * page < 50 ? pageItems = show * page : '';

		console.log('pageStart '+pageStart, 'pageItems '+pageItems);

		var ytb = 'https://youtu.be/';
		for(i=pageStart;i<pageItems;i++){
			var vid = data[i].vid;
			var tit = data[i].title;
			var thumb = data[i].imgHigh;
			var url = YtbContent.linkView + '?vid=' + vid + '&section=' + YtbContent.section;
			var pub = data[i].time;
			pub = YtbContent.replaceDate01(pub);
			var dura = data[i].duration;
			var viewCount = data[i].viewCount; console.log(viewCount);

			html += '<li>' +
				'<article>' +
				'<figure class="img-con02 img-cover">' +
				'<a href="' + url +'">' +
				'<img src="' + thumb + '" alt="' + tit + '">' +
				'<span class="runtime">'+dura+'</span>' +
				'</a>' +
				'</figure>' +
				'<div class="txt-con">' +
				'<h4 class="tit">' +
				'<a href="' + url + '">' + tit + '</a>' +
				'</h4>' +
				'<span class="thumb-date view"><strong class="count">' + viewCount + '</strong>' + pub + '</span>' +
				'</div>' +
				'</article>' +
				'</li>';
		}
		$('.box-video-list ul').append(html);
		YtbContent.makePaging(page, YtbContent.total);
		imgCrop();
	},

	viewList : function(data, limitA, limitB) {
		var html = '';
		for(i=limitA;i<limitB;i++){
			//console.log(i,data[i]);
			var vid = data[i].vid;
			var tit = data[i].title;
			var thumb = data[i].imgHigh;
			var url = YtbContent.linkView + '?vid=' + vid + '&section=' + YtbContent.section;
			var pub = data[i].time;
			pub = YtbContent.replaceDate01(pub);
			var dura = data[i].duration;
			var viewCount = data[i].viewCount; //console.log(viewCount);

			html += '<div class="box-type">' +
				'<article>' +
				'<figure class="img-con02 img-cover">' +
				'<a href="' + url + '">' +
				'<img src="' + thumb + '" alt="' + tit + '">' +
				'<span class="btn-play-s"></span>' +
				'<span class="runtime">'+dura+'</span>' +
				'</a>' +
				'</figure>' +
				'<div class="txt-con bott-con">' +
				'<h4 class="tit">' +
				'<a href="' + url + '">' + tit + '</a>' +
				'</h4>' +
				'<span class="thumb-date view"><strong class="count">' + viewCount + '</strong>' + pub + '</span>' +
				'</div>' +
				'</article>' +
				'</div>';
		}
		$('.slide-video-list').append(html);
		YtbContent.slider();
		var bott = '-200px';
		$.each($('.video-con.slick-slide'), function(idx, slide){
			$(slide).on('mouseenter', function(){
				$(slide).find('.bott-con').animate({'bottom':'0px'});
			});
			$(slide).on('mouseleave', function(){
				$(slide).find('.bott-con').animate({'bottom':bott});
			});
		});

		imgCrop();
	},

	player :function(vid){
		//유튜브 영상 ID 조회
		$.get("//ars.yna.co.kr/api/v2/youtube/videos?key=api5&part=snippet,contentDetails&vid="+vid,
			function(data) {
				console.log(data);
				var tit, desc, pub, dura;
				$.each(data.items, function(i,item) {
					//console.log(data.items[i].snippet);
					//console.log(data.items[i].snippet.title);
					tit = data.items[i].snippet.title;
					desc = data.items[i].snippet.description;
					pub = data.items[i].snippet.publishedAt;
					pub = YtbContent.replaceDate04(pub);
					dura = data.items[i].contentDetails.duration;
					dura = convertDura(dura);
					dura = toHHMMSS(dura);
				});
				// 제목 title
				$('.title-article01 .tit').html(tit);
				$('.page-view-title strong').html(tit);
				$('.info-con .txt strong').text('North Korea Now');
				// 송고시간 publishedAt
				$('.title-article01 .date').html(pub);
				// 본문 description
				desc = desc.replace(/^\s*|\s*$/g, '').replace(/[\r\n]+/g, '</p>\r\n<p>');
				$('.media-desc .txt-desc').append('<p>'+desc+'</p>');
				// 재생시간 duration
				$('.title-article01 .runtime02').html('<strong></strong>' + dura);
			}
		);
	},

	embed : function(data) {
		//console.log(data);
		//유튜브 링크 조회 embed 코드 생성
		var auto = 1; // 정지 0, 자동재생 1
		var a = YtbContent.param().vid; //console.log(a);
		var player;
		$('.vid').val(a);
		//var b = 'https://www.youtube.com/embed/'+a+'?rel=0&amp;controls=1&amp;showinfo=1&amp;autoplay='+auto+'&amp;';
		//var c = '<iframe width="980" height="551" id="ytbplayer" class="ifm-youtube" src="'+b+'" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen></iframe>';
		//$('.video-view-con').append(c);

		var player = new YT.Player('player', {
			width: '980',
			height: '551',
			videoId: a,
			events: {'onReady': onPlayerReady}
		});
		function onPlayerReady(event) {
			event.target.playVideo();
			event.target.setVolume(50);
		}

		// Watch Next
		var next = null;
		$.each(data, function(idx, d){
			if (a == d.vid) {
				if (idx != (data.length-1)) next = data[idx+1];
				else next = data[0];
			}
		});
		var e = '<h2 class="tit">Watch Next</h2>' +
			'<div class="video-box"><figure class="img-con img-cover">' +
			'<a href="' + YtbContent.linkView + '?vid=' + next.vid + '&section=' + YtbContent.section +'"><img src="' + next.imgHigh +'" alt="' + next.title + '" style="width:120px"></a>' +
			'</figure></div>' +
			'<span class="lead">' +
			'<a href="' + YtbContent.linkView + '?vid=' + next.vid + '&section=' + YtbContent.section +'">' + next.title + '</a>' +
			'</span>';

		$('.next-video').html(e);
		YtbContent.player(a);
		imgCrop();

		/* // 조회수, 좋아요
		var d = $.ajax('https://www.googleapis.com/youtube/v3/videos?key='+YtbContent.key+'&part=statistics&id='+a);
		$.when(d).done(function(data){
		var data1 = data['items'][0]['statistics']['viewCount'];
		data1 = data1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('.title-article01 .runtime02').html('<strong></strong>' + data1);
		var data2 = data['items'][0]['statistics']['likeCount'];
		data2 = data2.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('.title-article01 .like').text(data2);
		});*/

		// 영상 재생 시간
		/* var d = $.ajax('https://www.googleapis.com/youtube/v3/videos?key='+YtbContent.key+'&part=contentDetails&id='+a);
		$.when(d).done(function(data){
			var duration = data['items'][0]['contentDetails']['duration'];
			var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
			var hours = 0, minutes = 0, seconds = 0, totalseconds;
			if (reptms.test(duration)) {
				var matches = reptms.exec(duration);
				if (matches[1]) hours = Number(matches[1]);
				if (matches[2]) minutes = Number(matches[2]);
				if (matches[3]) seconds = Number(matches[3]);
				totalseconds = hours * 3600  + minutes * 60 + seconds;
			}
			$('.title-article01 .runtime02').html('<strong></strong>' + toHHMMSS(totalseconds));
		}); */
	},

	makePaging: function(a, b) { // a = 현재 페이지(활성화), b = 전체 기사 개수
		var c = Math.floor((a - 1) / YtbContent.page_limit) * YtbContent.page_limit + 1;
		var d = Math.ceil(b / YtbContent.page_show);
		var e = c > 1 ? c - YtbContent.page_limit : 1;
		var f = (c + YtbContent.page_limit < d ? c + YtbContent.page_limit : d);
		var g = '';

		if (b < 1 || a > d || a < 1) $('.paging').html('');
		else {
			if (a != 1) g += '<a href="' + YtbContent.linkList + '?page=' + (a-1) + '" class="prev"><span>Previous</span></a>';

			for (var i = c; i < c + YtbContent.page_limit; i++) {
				if (i > d) break;
				if (i == a) g += '<a href="#none" class="on">' + a + '</a>';
				else g += '<a href="' + YtbContent.linkList + '?page=' + i + '">' + i + '</a>';
			}

			if (a != YtbContent.page_limit) g += '<a href="' + YtbContent.linkList + '?page=' + (Number(a)+1) + '" class="next"><span>Next</span></a>';
		}

		$('.paging').html(g);
	},

	slider : function() {
		$('.slide-con').slick({
			centerMode: true,
			variableWidth: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.img-slide-div').slick({
			autoplay: false,
			autoplaySpeed: 3000,
			speed: 600,
			adaptiveHeight:true,
			arrows: true,
			pauseOnHover: true,
			cssEase: 'linear',
			variableWidth: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4
		});
	},
	replaceDate01: function(val) { // 09:58 Oct. 04
		var date01 = new Date(val.substr(0,4), parseInt(val.substr(5,2))-1, val.substr(8,2));
		var result = val.substr(11,5) + ' ' + date01.Format2('MMM', LANG_TYPE) + '. ' + date01.Format2('dd');
		return result;
	},

	replaceDate02: function(val) {	// 12/12 08:22
		var result = val.substr(5,2) + '/' + val.substr(8,2) + ' ' + val.substr(11,5);
		return result;
	},

	replaceDate03 : function(val) { // 08:22
		var result = val.substr(11,5);
		return result;
	},

	replaceDate04 : function(val) { // MAY 25, 2018 05:25
		var date01 =  new Date(val.substr(0,4), parseInt(val.substr(5,2))-1, val.substr(8,2));
		var result = date01.Format2('MMMM', LANG_TYPE)+' '+date01.Format2('dd')+', '+date01.Format2('yyyy')+' '+val.substr(11,5);
		return result;
	}
};

// 조회수
/* var ytbDataView = {
	src:'https://www.googleapis.com/youtube/v3/videos?key='+YtbContent.key+'&part=statistics&id=',
	init:function(data, slidelength, max){
		var last = data.length;
		max != undefined ? last = max : '';
		var target = $('.general-s-zone .box-video-list li .view .count, .k-wave-list .box-video-list li .view .count');
		$('body').hasClass('page-view') ? target = $('.box-type .thumb-date .count') : '';
		for(var i=slidelength;i<last;i++){
			var vv = $.ajax(ytbDataView.src+data[i].vid);
			view(i);
		}
		function view(i){
			$.when(vv).done(function(data){
				var data1 = data['items'][0]['statistics']['viewCount'];
				data1 = data1.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var makeData = {idx: i, view:data1};
				target.eq(i-slidelength).html(data1);
			});
		}
	}
}; */

/* var ytbDataTime = {
	src:'https://www.googleapis.com/youtube/v3/videos?key='+YtbContent.key+'&part=contentDetails&id=',
	init:function(data, slidelength, max){
		var last = data.length;
		max != undefined ? last = max : '';
		var target = $('.general-s-zone .box-video-list, .k-wave-list .box-video-list');
		for(var i=0;i<last;i++){
			var tt = $.ajax(ytbDataTime.src + data[i].vid);
			time(i);
		}
		function time(i){
			$.when(tt).done(function(data){
				var duration = data['items'][0]['contentDetails']['duration'];
				var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
				var hours = 0, minutes = 0, seconds = 0, totalseconds;

				if (reptms.test(duration)) {
					var matches = reptms.exec(duration);
					if (matches[1]) hours = Number(matches[1]);
					if (matches[2]) minutes = Number(matches[2]);
					if (matches[3]) seconds = Number(matches[3]);
					totalseconds = hours * 3600  + minutes * 60 + seconds;
				}

				if (slidelength == undefined) {
					// 리스트 영상의 재생시간만 구함
					target.find('li .runtime').eq(i).text(toHHMMSS(totalseconds));
				} else {
					// 슬라이드 + 리스트
					if (i < slidelength) $('.video-con .time, .box-type .runtime').eq(i).text(toHHMMSS(totalseconds));	// 슬라이드 영상시간
					else target.find('li .runtime').eq(i-slidelength).text(toHHMMSS(totalseconds));	// 리스트 영상시간
				}
			});
		}
	}
}; */


/***********************************************
 * 오디오뉴스
 * 작업자 : 박지선 (2018-06-19)
 * 원본 : http://ddl52wxqpbv3n.cloudfront.net/news/english.json
 ***********************************************/
var audioNews = {
	init : function() {
		if( $('.audio-cont').length < 1 ) return;
		audioNews.start();
		audioNews.load();
	},
	json : [],
	player : '',
	el : '', tit : '', prev : '', next : '', current : 0,
	load : function() {
		$.ajax({
			url: '//feed.yna.co.kr/alexa/english.json',
			//url: '//english.yonhapnews.co.kr/web/7004010000.json',
			cache: true,
			data: { time:Math.floor(new Date().getTime() / 1000 / 60) },
			method: "GET",
			dataType: "json",
			success: function(data){
				audioNews.json.push(data); //데이터 저장
				audioNews.makeList(); //재생목록 생성 (audioNews.audio 보다 먼저 선언되어야 함)
				audioNews.openList(); //재생목록 슬라이드 효과
				audioNews.audio(0); //플레이어 재생 준비
				$('.audio-player').addClass('show');
                $("#audioPlayer01").css("height", "94px");
			}
		});
	},

	start : function() {
		audioNews.el = $('#boxAudio audio');
		audioNews.tit = $('#titleAudio .tit');
		audioNews.prev = $('.audio-cont .btn-prev');
		audioNews.next = $('.audio-cont .btn-next');

		// $("#boxAudio").find("div#audioPlayer01").css("width", "760px");
	},

	dataSet : function(num) {
		var list = '#audioList li';
		var data = audioNews.json[0];
		var uid = data[num].uid;
		var title = data[num].titleText;
		title = audioNews.replaceTxt(title);
		var url = data[num].streamUrl;
		num = parseInt(num);

		audioNews.tit.text(title);
		audioNews.el.attr('src',url);
		audioNews.el.find('source').attr('src',url);
		$(list+':eq('+num+')').addClass('on').siblings('li').removeClass('on');
		$('#boxAudio').attr('data-num',num);
		if(num == 0) audioNews.prev.attr('data-num',4);
		else audioNews.prev.attr('data-num',num-1);
		if(num == 4) audioNews.next.attr('data-num',0);
		else audioNews.next.attr('data-num',num+1);
	},

	reset : function() {
		audioNews.tit.text('');
		audioNews.el.attr('src','');
		audioNews.el.find('source').attr('src','');
		audioNews.prev.attr('data-num','');
		audioNews.next.attr('data-num','');
	},

	audio : function(num) {
		var list = '#audioList li';
		var trackNum = num;
		audioNews.dataSet(trackNum);

		$("#boxAudio").find(".vjs-control-bar").css("width", "770px");
		audioNews.player = videojs('audioPlayer01',{
			controls: true,
			autoplay: false,
			loop: false,
			fluid: false
		}, function onPlayerReady() {
			//this.play(); //자동 재생
			this.volume(0.5);
			this.on('play', function() {
				$(list+':eq('+audioNews.current+')').find('i').addClass('ico-play').removeClass('ico-stop');
				$(list+':eq('+audioNews.current+')').siblings('li').find('i').removeClass('ico-play').addClass('ico-stop');

				/* 2018-07-05 (STAT-58) */
				var d = new Image();
				d.src = "//www.yonhapnews.co.kr/stat/audio_stat.html?c=en_audio&_c=" + (new Date()).getTime();
				//console.log(d);
			});

			this.on('pause', function() {
				$(list).find('i').removeClass('ico-play').addClass('ico-stop');
			});

			this.on('ended', function() {
				audioNews.current++;
				if(audioNews.current < 5){
					audioNews.reset();
					audioNews.dataSet(audioNews.current);
					this.play();
				}else{
					this.pause();
				}
			});
		});
	},

	makeList : function() {
		var data = audioNews.json[0];
		var html = '';

		html+='<ul>\n';
		for(var i=0; i<5; i++){
			var uid = data[i].uid;
			var title = data[i].titleText;
			title = audioNews.replaceTxt(title);
			//var update = data[i].updateDate;
			var url = data[i].streamUrl;

			html+='<li>\n';
			html+='<a href="'+url+'">\n';
			html+='<i class="ico-stop"></i>';
			html+=title;
			html+='</a>\n';
			html+='</li>\n';
		}
		html+='</ul>\n';

		$('#audioList').prepend(html);
	},

	openList : function() {
		var $openBtn = $('.audio-cont .btn-list');
		var $targetCont = $('#audioList');

		$openBtn.on('click vclick', function(){
			if($targetCont.hasClass('show')){
				$targetCont.removeClass('show').slideUp(150);
			}else{
				$targetCont.addClass('show').slideDown(150);
			}
		});

		audioNews.button();
	},

	button : function() {
		var $listItem = $('#audioList li a');

		function active(num){
			audioNews.player.pause(); // 일시정지
			audioNews.reset(); // 리셋
			audioNews.current = num;
			audioNews.audio(num);
			audioNews.player.load(); // 비디오 재로드
			audioNews.player.play(); // 재생
		}

		$listItem.on('click vclick', function(e){
			e.preventDefault();
			var $self = $(this);
			var idx = $self.parent('li').index(); //console.log(idx);
			audioNews.current = idx;
			$self.parent('li').addClass('on').siblings('li').removeClass('on');
			$self.find('i').removeClass('ico-stop').addClass('ico-play');
			$self.parent('li').siblings('li').find('i').removeClass('ico-play').addClass('ico-stop');
			active(idx);
		});

		audioNews.prev.on('click vclick', function(e){
			var $self = $(this);
			var idx = $self.attr('data-num');
			active(idx);
		});

		audioNews.next.on('click vclick', function(e){
			var $self = $(this);
			var idx = $self.attr('data-num');
			active(idx);
		});
	},

	replaceTxt: function (val) {
		var result = val.replace(/\(.*\)/g, '');
		return result;
	}
};

/***********************************************
 * 긴급뉴스
 ***********************************************/
var changeUrgentSection = {
	cid : '',
	init : function(){
		if( $('.urgent-news').length < 1 ) return;
		changeUrgentSection.loadData();
		$('.btn-close').click(function(){		// 긴급창 닫기 버튼 눌렀을 때
			sessionStorage.setItem('urgent', changeUrgentSection.cid);
            $('.urgent-news').remove();
		});
	},
	loadData : function() {
		//$.support.cors = true;
		$.ajax({
			url: encodeURI(URGENTNEWS),
			type: 'GET',
			dataType: 'json',
			cache : true,
			success : function(data) { changeUrgentSection.loadDataProcess(data); }
		});
	},
	show : function() {
		//$('.urgent-news').css('display',"block");
		$('.urgent-news').removeClass("dis-none");
		$('.wrap-header').css('top', '60px');
	},
	hide : function() {
		$('.urgent-news').find('.con').find('h2').html('');
		$('.urgent-news').addClass("dis-none");
		$('.wrap-header').css('top', '0px');
	},
	loadDataProcess : function(data) {
		// 긴급 뉴스가 있으면 상단 urgent-news section에 출력
		var domain = window.YNA_SERVICE['YNA_UI'].getUrlQuery()['urlData']['origin'];
		if( domain.match('https://cb.yna.co.kr') ) {
			domain = 'https://cb.yna.co.kr/gate/big5/cn.yna.co.kr';
		}

		if(data != null && data.DATA != ''){
			try { var obj = JSON.parse(data); } catch(e) { var obj = data; }
			var title = obj.DATA[0].TITLE;
			if (title != null && title != '') { // title이 비어있지 않은 경우에만 실행
				changeUrgentSection.cid = obj.DATA[0].CID;
				if (sessionStorage.getItem('urgent') != obj.DATA[0].CID) {
					var url = domain + obj.DATA[0].URL;
					if (url == null) url = ''; // url이 비어있으면 공백으로 대체
					var urgent_txt = '<a href="'+ url +'\" id="' + changeUrgentSection.CID + '">' + title.replace(/\"/, "") + '</a>';
					$('.urgent-news').find('.con').find('h2').html(urgent_txt);	// urgent-news에 내용 채우기
					changeUrgentSection.show(); // urgent-news section 보여주기
				}
			} else { console.log('title is null or empty'); }
		} else { console.log('data is empty'); }
	}
};

/***********************************************
 * 키워드(keyword) 5개, 키워드 관련 기사 받아오기
 ***********************************************/
var keywordZone = {
	init : function() {
		if ($('.keyword-zone').length ) keywordZone.loadKeywordData($('.keyword-zone'));
	},
	currentPosition : null,
	ui : window.YNA_SERVICE['YNA_UI'],
	keywordDataCallback : function(data) {
		if (data != null) {
			if (data.DATA != null) {
				this.currentPosition.css('display', '');
				// 키워드 채우기(데이터와 위치 전달)
				keywordZone.set(data.DATA, this.currentPosition);

				if (this.currentPosition.hasClass('right-list-zone')) {
					// 키워드 관련 기사 리스트를 출력하는 ul이 존재할 때
					keywordZone.setArticle(data.ARTICLES, this.currentPosition.find('.list-box01'));
				}
			} else { this.currentPosition.css('display', 'none'); }
		} else { this.currentPosition.css('display', 'none'); }
	},
	loadKeywordData : function(position) {
		// 키워드 가져오기
		this.currentPosition = position;
		$.ajax ({
			url : encodeURI(KEYWORD_API),
			data : 'GET',
			dataType : 'json',
			cache : true,
			success : function(data) { keywordZone.keywordDataCallback(data); }
		});
	},
	set : function(obj, position) {
		var txt = ''; // 출력텍스트
		var lang = LANG_TYPE.toUpperCase();
		var UI = window.YNA_SERVICE['YNA_UI'];
		var origin = UI.getUrlQuery()['urlData']['origin'];
		var path = UI.getUrlQuery()['urlData']['path'];
		if( !UI.isViewPage() ) path = path.slice(0, path.lastIndexOf('/'));
		else path = path.split('/view')[0];

		$.each(obj, function(idx, k){
			txt += '<span><a href="'+origin+path+'/search/index?query='+encodeURI(k.KEYWORD)+'&lang='+lang+'">#'+k.KEYWORD+'</a></span>';
		});

		position.find('.keyword').html(txt);
	},
	setArticle : function(obj, position) {
		var txt = ''; // 출력텍스트
		var UI = window.YNA_SERVICE['YNA_UI'];
		var origin = UI.getUrlQuery()['urlData']['origin'];
		var path = UI.getUrlQuery()['urlData']['path'];
		if( !UI.isViewPage() ) path = path.slice(0, path.lastIndexOf('/'));
		else path = path.split('/view')[0];

		$.each(obj, function(idx, a){
			txt += '<li><article><a href="'+origin+path+a.URL+'">'
				+ (a.IMG != '' ? '<figure class="img-cover"><img src="' + setImgDomain(a.IMG) + a.IMG + '" alt="' + a.TITLE + '"></figure>' : '')
				+ '<h4 class="tit">' + a.TITLE + '</h4></a></article></li>';
		});
		position.html(txt);
		imgCrop();
	}
};