/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);;
/*
 * urlInternal - v1.0 - 10/7/2009
 * http://benalman.com/projects/jquery-urlinternal-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var g,i=!0,r=!1,m=window.location,h=Array.prototype.slice,b=m.href.match(/^((https?:\/\/.*?\/)?[^#]*)#?.*$/),u=b[1]+"#",t=b[2],e,l,f,q,c,j,x="elemUrlAttr",k="href",y="src",p="urlInternal",d="urlExternal",n="urlFragment",a,s={};function w(A){var z=h.call(arguments,1);return function(){return A.apply(this,z.concat(h.call(arguments)))}}$.isUrlInternal=q=function(z){if(!z||j(z)){return g}if(a.test(z)){return i}if(/^(?:https?:)?\/\//i.test(z)){return r}if(/^[a-z\d.-]+:/i.test(z)){return g}return i};$.isUrlExternal=c=function(z){var A=q(z);return typeof A==="boolean"?!A:A};$.isUrlFragment=j=function(z){var A=(z||"").match(/^([^#]?)([^#]*#).*$/);return !!A&&(A[2]==="#"||z.indexOf(u)===0||(A[1]==="/"?t+A[2]===u:!/^https?:\/\//i.test(z)&&$('<a href="'+z+'"/>')[0].href.indexOf(u)===0))};function v(A,z){return this.filter(":"+A+(z?"("+z+")":""))}$.fn[p]=w(v,p);$.fn[d]=w(v,d);$.fn[n]=w(v,n);function o(D,C,B,A){var z=A[3]||e()[(C.nodeName||"").toLowerCase()]||"";return z?!!D(C.getAttribute(z)):r}$.expr[":"][p]=w(o,q);$.expr[":"][d]=w(o,c);$.expr[":"][n]=w(o,j);$[x]||($[x]=function(z){return $.extend(s,z)})({a:k,base:k,iframe:y,img:y,input:y,form:"action",link:k,script:y});e=$[x];$.urlInternalHost=l=function(B){B=B?"(?:(?:"+Array.prototype.join.call(arguments,"|")+")\\.)?":"";var A=new RegExp("^"+B+"(.*)","i"),z="^(?:"+m.protocol+")?//"+m.hostname.replace(A,B+"$1").replace(/\\?\./g,"\\.")+(m.port?":"+m.port:"")+"/";return f(z)};$.urlInternalRegExp=f=function(z){if(z){a=typeof z==="string"?new RegExp(z,"i"):z}return a};l("www")})(jQuery);;
/*
sessvars ver 1.01
- JavaScript based session object
copyright 2008 Thomas Frank

This EULA grants you the following rights:

Installation and Use. You may install and use an unlimited number of copies of the SOFTWARE PRODUCT.

Reproduction and Distribution. You may reproduce and distribute an unlimited number of copies of the SOFTWARE PRODUCT either in whole or in part; each copy should include all copyright and trademark notices, and shall be accompanied by a copy of this EULA. Copies of the SOFTWARE PRODUCT may be distributed as a standalone product or included with your own product.

Commercial Use. You may sell for profit and freely distribute scripts and/or compiled scripts that were created with the SOFTWARE PRODUCT.

v 1.0 --> 1.01
sanitizer added to toObject-method & includeFunctions flag now defaults to false

*/

sessvars=function(){

	var x={};
	
	x.$={
		prefs:{
			memLimit:2000,
			autoFlush:true,
			crossDomain:false,
			includeProtos:false,
			includeFunctions:false
		},
		parent:x,
		clearMem:function(){
			for(var i in this.parent){if(i!="$"){this.parent[i]=undefined}};
			this.flush();
		},
		usedMem:function(){
			x={};
			return Math.round(this.flush(x)/1024);
		},
		usedMemPercent:function(){
			return Math.round(this.usedMem()/this.prefs.memLimit);
		},
		flush:function(x){
			var y,o={},j=this.$$;
			x=x||top;
			for(var i in this.parent){o[i]=this.parent[i]};
			o.$=this.prefs;
			j.includeProtos=this.prefs.includeProtos;
			j.includeFunctions=this.prefs.includeFunctions;
			y=this.$$.make(o);
			if(x!=top){return y.length};
			if(y.length/1024>this.prefs.memLimit){return false}
			x.name=y;
			return true;
		},
		getDomain:function(){
				var l=location.href
				l=l.split("///").join("//");
				l=l.substring(l.indexOf("://")+3).split("/")[0];
				while(l.split(".").length>2){l=l.substring(l.indexOf(".")+1)};
				return l
		},
		debug:function(t){
			var t=t||this,a=arguments.callee;
			if(!document.body){setTimeout(function(){a(t)},200);return};
			t.flush();
			var d=document.getElementById("sessvarsDebugDiv");
			if(!d){d=document.createElement("div");document.body.insertBefore(d,document.body.firstChild)};
			d.id="sessvarsDebugDiv";
			d.innerHTML='<div style="line-height:20px;padding:5px;font-size:11px;font-family:Verdana,Arial,Helvetica;'+
						'z-index:10000;background:#FFFFCC;border: 1px solid #333;margin-bottom:12px">'+
						'<b style="font-family:Trebuchet MS;font-size:20px">sessvars.js - debug info:</b><br/><br/>'+
						'Memory usage: '+t.usedMem()+' Kb ('+t.usedMemPercent()+'%)&nbsp;&nbsp;&nbsp;'+
						'<span style="cursor:pointer"><b>[Clear memory]</b></span><br/>'+
						top.name.split('\n').join('<br/>')+'</div>';
			d.getElementsByTagName('span')[0].onclick=function(){t.clearMem();location.reload()}
		},
		init:function(){
			var o={}, t=this;
			try {o=this.$$.toObject(top.name)} catch(e){o={}};
			this.prefs=o.$||t.prefs;
			if(this.prefs.crossDomain || this.prefs.currentDomain==this.getDomain()){
				for(var i in o){this.parent[i]=o[i]};
			}
			else {
				this.prefs.currentDomain=this.getDomain();
			};
			this.parent.$=t;
			t.flush();
			var f=function(){if(t.prefs.autoFlush){t.flush()}};
			if(window["addEventListener"]){addEventListener("unload",f,false)}
			else if(window["attachEvent"]){window.attachEvent("onunload",f)}
			else {this.prefs.autoFlush=false};
		}
	};
	
	x.$.$$={
		compactOutput:false, 		
		includeProtos:false, 	
		includeFunctions: false,
		detectCirculars:true,
		restoreCirculars:true,
		make:function(arg,restore) {
			this.restore=restore;
			this.mem=[];this.pathMem=[];
			return this.toJsonStringArray(arg).join('');
		},
		toObject:function(x){
			if(!this.cleaner){
				try{this.cleaner=new RegExp('^("(\\\\.|[^"\\\\\\n\\r])*?"|[,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t])+?$')}
				catch(a){this.cleaner=/^(true|false|null|\[.*\]|\{.*\}|".*"|\d+|\d+\.\d+)$/}
			};
			if(!this.cleaner.test(x)){return {}};
			eval("this.myObj="+x);
			if(!this.restoreCirculars || !alert){return this.myObj};
			if(this.includeFunctions){
				var x=this.myObj;
				for(var i in x){if(typeof x[i]=="string" && !x[i].indexOf("JSONincludedFunc:")){
					x[i]=x[i].substring(17);
					eval("x[i]="+x[i])
				}}
			};
			this.restoreCode=[];
			this.make(this.myObj,true);
			var r=this.restoreCode.join(";")+";";
			eval('r=r.replace(/\\W([0-9]{1,})(\\W)/g,"[$1]$2").replace(/\\.\\;/g,";")');
			eval(r);
			return this.myObj
		},
		toJsonStringArray:function(arg, out) {
			if(!out){this.path=[]};
			out = out || [];
			var u; // undefined
			switch (typeof arg) {
			case 'object':
				this.lastObj=arg;
				if(this.detectCirculars){
					var m=this.mem; var n=this.pathMem;
					for(var i=0;i<m.length;i++){
						if(arg===m[i]){
							out.push('"JSONcircRef:'+n[i]+'"');return out
						}
					};
					m.push(arg); n.push(this.path.join("."));
				};
				if (arg) {
					if (arg.constructor == Array) {
						out.push('[');
						for (var i = 0; i < arg.length; ++i) {
							this.path.push(i);
							if (i > 0)
								out.push(',\n');
							this.toJsonStringArray(arg[i], out);
							this.path.pop();
						}
						out.push(']');
						return out;
					} else if (typeof arg.toString != 'undefined') {
						out.push('{');
						var first = true;
						for (var i in arg) {
							if(!this.includeProtos && arg[i]===arg.constructor.prototype[i]){continue};
							this.path.push(i);
							var curr = out.length; 
							if (!first)
								out.push(this.compactOutput?',':',\n');
							this.toJsonStringArray(i, out);
							out.push(':');                    
							this.toJsonStringArray(arg[i], out);
							if (out[out.length - 1] == u)
								out.splice(curr, out.length - curr);
							else
								first = false;
							this.path.pop();
						}
						out.push('}');
						return out;
					}
					return out;
				}
				out.push('null');
				return out;
			case 'unknown':
			case 'undefined':
			case 'function':
				if(!this.includeFunctions){out.push(u);return out};
				arg="JSONincludedFunc:"+arg;
				out.push('"');
				var a=['\n','\\n','\r','\\r','"','\\"'];
				arg+=""; for(var i=0;i<6;i+=2){arg=arg.split(a[i]).join(a[i+1])};
				out.push(arg);
				out.push('"');
				return out;
			case 'string':
				if(this.restore && arg.indexOf("JSONcircRef:")==0){
					this.restoreCode.push('this.myObj.'+this.path.join(".")+"="+arg.split("JSONcircRef:").join("this.myObj."));
				};
				out.push('"');
				var a=['\n','\\n','\r','\\r','"','\\"'];
				arg+=""; for(var i=0;i<6;i+=2){arg=arg.split(a[i]).join(a[i+1])};
				out.push(arg);
				out.push('"');
				return out;
			default:
				out.push(String(arg));
				return out;
			}
		}
	};
	
	x.$.init();
	return x;
}();


/*** section page box fix ***/
jQuery(document).ready(function() {
var maxHeight = 0;
jQuery('.half-box').each(function() { 
	maxHeight = Math.max(maxHeight, jQuery(this).height()); })
   .height(maxHeight);

});
;
/*
 *  Remodal - v1.1.0
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});;
/*!
 * jquery.customSelect() - v0.5.1
 * http://adam.co/lab/jquery/customselect/
 * 2014-04-19
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);;
// JavaScript Document

jQuery(window).load(function () {
    var trendingWidth = jQuery('#trending li').width();
    jQuery('#trending li').height(trendingWidth);
    jQuery('#trending li div').width(trendingWidth);
    jQuery('#trending li div').height(trendingWidth);

    var videoWidth = jQuery('#video-view-region li').width();
    jQuery('#video-view-region li').height(videoWidth);
    jQuery('#video-view-region li div').width(videoWidth);
    jQuery('#video-view-region li div').height(videoWidth);
    

    var drugWidth = jQuery('#view-images li').width();
    jQuery('#view-images li').height(drugWidth);
    jQuery('#view-images li div').width(drugWidth);
    jQuery('#view-images li div').height(drugWidth);

    var animWidth = jQuery('.anim-wrapper').width();
    jQuery('.anim-wrapper').height(animWidth);
    
    var videosRegion = jQuery('#video-view-region');
    if(videosRegion.css('border-right-style') === "double") {
        jQuery('#dea-360-region').height(videosRegion.height());
    } else {
        var threesixtyHeight = jQuery('#threesixty-image-circle').height();
        jQuery('#dea-360-region').height(threesixtyHeight);
    }


        /*
//matching heights
    if (jQuery(window).width() > 850) {
        jQuery('#trending').css({'height' : 'auto'});
        jQuery('#left-bar').css({'height' : 'auto'});
        var colHeight = Math.max(jQuery('#trending').height(), jQuery('#left-bar').height());
        //jQuery('.main-col').height(colHeight);

        var pageHeight = Math.max(jQuery('#article-content').height(), jQuery('#left-bar').height());
        jQuery('.page-col').height(pageHeight + 10);
        jQuery('#article-main').height(pageHeight + 20);


    }
    else if (jQuery(window).width() < 850) {
        jQuery('.main-col').css({'height': 'auto'});
        jQuery('.page-col').css({'height': 'auto'});
    }*/

}); // end load functions

jQuery(document).ready(function ($) {

    //If special notice block exists, add class to header to increase padding-top.
    //CSS uses min-width check to only add padding-top for displays 768px or larger. 
    if ($('#special-notice-banner').length) {
        $('header').addClass('increase-header-padding');
    }

    $("iframe").wrap("<div class='video-container'/>");

    // jQuery.reject();

    sessvars.pageCount = sessvars.pageCount || 0;
    sessvars.pageCount++;

    // close panel
    $("#close-welcome").click(function () {
        $('#welcome-banner').fadeOut(300);
    });

    // Timer Script
    $(function () {
        if (sessvars.pageCount < 2) {
            window.setTimeout(function () {
                $('#welcome-banner').addClass('expanded-banner');
                $('#welcome-banner p, #welcome-banner h1 img').fadeIn(300);
            }, 4000);
        }
        else {
            $('#welcome-banner').fadeOut(0);
        }

    });

// variables
    var navTop = jQuery('nav#main').position().top;
    var navHeight = jQuery('ul.dropdown li a').height();


    jQuery('#slider2').bxSlider({
        captions: true,
        pagerCustom: '#bx-pager',
        controls: false
    });


       if (jQuery(window).width() < 768) {
            var SearchForm = '<form action="/site-search" method="get" accept-charset="UTF-8"><div><input name="search" type="text" />  <button id="mobile-submit" type="submit"> <i class="fa fa-search"></i></button></div></form>';

            $('#mobile-search').html(SearchForm);
        }


/////// resizing functions ///////////////
    jQuery(window).resize(function () {
        var trendingWidth = $('#trending li').width();
        $('#trending li').height(trendingWidth);
        $('#trending li div').width(trendingWidth);
        $('#trending li div').height(trendingWidth);

        var videoWidth = jQuery('#video-view-region li').width();
        jQuery('#video-view-region li').height(videoWidth);
        jQuery('#video-view-region li div').width(videoWidth);
        jQuery('#video-view-region li div').height(videoWidth);
        

        var drugWidth = jQuery('#view-images li').width();
        $('#view-images li').height(drugWidth);
        $('#view-images li div').width(drugWidth);
        $('#view-images li div').height(drugWidth);

        var animWidth = jQuery('.anim-wrapper').width();
        jQuery('.anim-wrapper').height(animWidth);


        var sliderWidth = jQuery('.views_slideshow_cycle_main').width();
        $('.views-slideshow-cycle-main-frame').width(sliderWidth);
        
        var videosRegion = jQuery('#video-view-region');
        if(videosRegion.css('border-right-style') === "double") {
            jQuery('#dea-360-region').height(videosRegion.height());
        } else {
            var threesixtyHeight = jQuery('#threesixty-image-circle').height();
            jQuery('#dea-360-region').height(threesixtyHeight);
        }

       if (jQuery(window).width() < 768) {
            var SearchForm = '<form action="/site-search" method="get" accept-charset="UTF-8"><div><input name="search" type="text" />  <button id="mobile-submit" type="submit"> <i class="fa fa-search"></i></button></div></form>';

            $('#mobile-search').html(SearchForm);
        }




/*

if (jQuery(window).width() > 850) {
        jQuery('#trending').css({'height' : 'auto'});
        jQuery('#left-bar').css({'height' : 'auto'});
        var colHeight = Math.max(jQuery('#trending').height(), jQuery('#left-bar').height());
        //jQuery('.main-col').height(colHeight);

        var pageHeight = Math.max(jQuery('#article-content').height(), jQuery('#left-bar').height());
        jQuery('.page-col').height(pageHeight + 10);
        jQuery('#article-main').height(pageHeight + 20);


    }
    else if (jQuery(window).width() < 850) {
        jQuery('.main-col').css({'height': 'auto'});
        jQuery('.page-col').css({'height': 'auto'});
    }
*/



    });


// styling select menu
    $('#edit-field-tags-tid').customSelect();

// Expand Panel
    $("li.has-drop").click(function () {

        var welcome = $('#welcome-banner').height();

        var panelTop = $('#drop-panel').position().top;
        var dropTop = (navTop + navHeight) - welcome;
        var url = $(this).children('.menu-attach-block-wrapper');
        var littleLoad = '<i class="icon-spin5 animate-spin" id="little-loader"></i>';
        var navCondition = $(this).hasClass('panel-live');

        $(this).siblings('li').removeClass('panel-live');

        if (panelTop < 0 && $(window).width() > 1054) {
            $("#drop-panel").animate({'top': dropTop}, 600);
            $(this).addClass('panel-live');
            $("#drop-panel-content").html($(this).find('.dropdown li').html());
        }
        else if (panelTop < 0 && $(window).width() <= 1054) {
            $("#drop-panel").animate({'top': '0'}, 400);
            $(this).addClass('panel-live');
            $("#drop-panel-content").html($(this).find('.dropdown li').html());
        }
        else if (panelTop > 0 && navCondition) {
            $('#drop-panel').animate({'top': '-100%'}, 600, function () {
                $("#drop-panel-content").html($(this).find('.dropdown li').html());
            });
            $(this).removeClass('panel-live');
        }
        else {
            $(this).addClass('panel-live');
            var menu = $(this);
            $("#drop-panel-content").fadeOut(200, function () {
                $("#drop-panel-content").html(menu.find('.dropdown li').html());
                $("#drop-panel-content").fadeIn(400);
            });
        }
        //alert(panelTop);

        return false;

    });


    // Hide Drop Panels

    $("a#panel-close").click(function () {
        $('#drop-panel').animate({'top': '-100%'}, 600);
        $('.dropdown li').removeClass('panel-live');

        //close main nav as well
        $('nav#main').animate({'height': '43px'});
        $('#mobile-tag').removeClass('opened');
    });

    $('#article-main').click(function (e) {

        $('#drop-panel').animate({'top': '-100%'}, 600);
        $('.dropdown li').removeClass('panel-live');

    });


    // mobile nav display
    $('#mobile-tag').click(function () {
        var listNum = $('.navbar-1-collapse > .dropdown > li').length;
        var listHeight = (listNum * 43) + 43; // extra 43 for the mobile icon

        if ($(this).hasClass('opened')) {
            $('nav#main').animate({'height': '43px'});
            $('#mobile-tag').removeClass('opened');

            // move open drop panels back to hidden state
            $('#drop-panel').animate({'top': '-100%'}, 600);
            $('.dropdown li').removeClass('panel-live');
        }
        else {
            $('nav#main').animate({'height': listHeight});
            $('#mobile-tag').addClass('opened');
        }
    });

    /******** DRUG INDEX FUNCTIONS ***********/
    $('#view-list-tab').click(function () {
        $('#drug-tabs a').removeClass('active');
        $('#view-images').fadeOut(300);
        $('#view-para').fadeOut(300);
        $('#view-list').fadeIn(300);
        $('#sub-tabs ul').fadeIn(300);
        $('#para-tabs ul').fadeOut(300);
        $(this).addClass('active');

        return false;
    });

    $('#view-images-tab').click(function () {
        $('#drug-tabs a').removeClass('active');
        $('#view-list').fadeOut(300);
        $('#view-para').fadeOut(300);
        $('#view-images').fadeIn(300);
        $('#sub-tabs ul').fadeIn(300);
        $('#para-tabs ul').fadeOut(300);
        $(this).addClass('active');

        return false;
    });

    $('#view-para-tab').click(function () {
        $('#drug-tabs a').removeClass('active');
        $('#view-list').fadeOut(300);
        $('#view-images').fadeOut(300);
        $('#sub-tabs ul').fadeOut(300);
        $('#para-tabs ul').fadeIn(300);
        $('#view-para').fadeIn(300);
        $(this).addClass('active');

        return false;
    });

    //sorting drug types
    $('#sub-tabs li').click(function () {
        $('#sub-tabs li').removeClass('active');
        $('#drug-views li').fadeOut(300);

        if ($(this).hasClass('all')) {
            $(this).addClass('active');
            $('#drug-views li').fadeIn(700);
        }
        else if ($(this).hasClass('narcotics')) {
            $(this).addClass('active');
            $('#drug-views li.narcotics').fadeIn(700);
        }
        else if ($(this).hasClass('stimulants')) {
            $(this).addClass('active');
            $('#drug-views li.stimulants').fadeIn(700);
        }
        else if ($(this).hasClass('hallucinogens')) {
            $(this).addClass('active');
            $('#drug-views li.hallucinogens').fadeIn(700);
        }
        else if ($(this).hasClass('cannabis')) {
            $(this).addClass('active');
            $('#drug-views li.cannabis').fadeIn(700);
        }
        else if ($(this).hasClass('depressants')) {
            $(this).addClass('active');
            $('#drug-views li.depressants').fadeIn(700);
        }
        else if ($(this).hasClass('opioid')) {
            $(this).addClass('active');
            $('#drug-views li.opioid').fadeIn(700);
        }
        else if ($(this).hasClass('concern')) {
            $(this).addClass('active');
            $('#drug-views li.concern').fadeIn(700);
        }
        else if ($(this).hasClass('inhalants')) {
            $(this).addClass('active');
            $('#drug-views li.inhalants').fadeIn(700);
        }
        else if ($(this).hasClass('steroids')) {
            $(this).addClass('active');
            $('#drug-views li.steroids').fadeIn(700);
        }
        else if ($(this).hasClass('designer')) {
            $(this).addClass('active');
            $('#drug-views li.designer').fadeIn(700);
        }

        return false;
    });

    // Leaving site notice
    $("a").click(function (e) {
        if ($.isUrlExternal($(this).attr('href'))) {
             linkedUrl = $(this).prop('hostname').split('.');
            if (linkedUrl.length > 1) {
                topLevelDomain = linkedUrl[linkedUrl.length - 1];
                if (topLevelDomain !== "gov" && topLevelDomain != "mil") {
                    if (confirm('Thank you for visiting GetSmartAboutDrugs.com. You are now leaving the site. DEA does not exercise control over the content of external websites. Click OK to continue.')) {

                    } else {
                        e.preventDefault();
                    }
                }
            }
        }
    });


    $('.overlay-trigger').on('click', function (event) {
        event.preventDefault();

        /**
         * Set the overlay variable based on the data provided
         * by the overlay trigger.
         */
        var overlay = $(this).data('overlay');

        /**
         * If the overlay variable is not defined, give a message
         * and return.
         */
        if (!overlay) {
            console.log('You must provide the overlay id in the trigger. (data-overlay="overlay-id").');
            return;
        }

        /**
         * If we've made it this far, we should have the data
         * needed to open a overlay. Here we set the id variable
         * based on overlay variable.
         */
        var id = '#' + overlay;

        /**
         * Let's open up the overlay and prevent the body from
         * scrolling, both by adding a simple class. The rest
         * is handled by CSS (awesome).
         */
        $(id).addClass('overlay-open');
        $('body').addClass('overlay-view');

        /**
         * When the overlay outer wrapper or `overlay-close`
         * triger is clicked, lets remove the classes from
         * the current overlay and body. Removal of these
         * classes restores the current state of the user
         * experience. Again, all handled by CSS (awesome).
         */
        $(id).on('click', function (event) {
            // Verify that only the outer wrapper was clicked.
            if (event.target.id == overlay || event.target.id == 'overlay-close') {
                $(id).removeClass('overlay-open');
                $('body').removeClass('overlay-view');
            }
        });
        /**
         * Closes the overlay when the esc key is pressed. See
         * comment above on closing the overlay for more info
         * on how this is accomplished.
         */
        $(document).keyup(function (event) {
            // Verify that the esc key was pressed.
            if (event.keyCode == 27) {
                $(id).removeClass('overlay-open');
                $('body').removeClass('overlay-view');
            }
        });
    });

}); // end doc ready functions
jQuery(document).ready(function() {

var thisWindow = jQuery(window);
var regionsToAnimate = jQuery('.to-animate');
function isInView(el) {
    var winTop =  thisWindow.scrollTop();
    var winBottom = thisWindow.height() + thisWindow.scrollTop();
    if(( (el.offset().top + el.height()) > winTop) && (el.offset().top + el.height()) < winBottom) {
	    return true;
    }
}

jQuery(window).scroll(function ($) {
    regionsToAnimate.each(function(){
        regionToAnimate = jQuery(this);
        if (isInView(regionToAnimate) && !regionToAnimate.hasClass('anim-trigger')) {
            
            var delayInMS = regionToAnimate.data('delay') || 0;
            regionToAnimate.delay(delayInMS).queue(function() {
                jQuery(this).addClass('anim-trigger');
                jQuery(this).clearQueue();
            });
        } else if (!isInView(regionToAnimate) && regionToAnimate.hasClass('anim-trigger')) {
            regionToAnimate.removeClass('anim-trigger');    
            regionToAnimate.clearQueue();    
        }
    });
});
});
;
