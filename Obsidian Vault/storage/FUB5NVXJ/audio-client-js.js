(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:
/*!*******************************************!*\
  !*** ./shared/components/audio/client.js ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(/*! jquery */1),i=n.n(c);function a(){var e=this,t=i()(".component.inline-audio");t&&t.prev(".image").each((function(){i()(e).css("margin-bottom","10px")}))}},107:
/*!**********************************************!*\
  !*** ./shared/components/dropdown/client.js ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(/*! radio */0),i=n.n(c),a=n(/*! shared/enums/events */2);function r(){i()(a.b).subscribe((function(e,t){var n=t.closest(".component.dropdown"),c=t.closest(".heading");if(n.length&&c.length){var i=c.find("span[data-default-text]").attr("data-default-text"),a=c.find("span[data-toggle-text]"),r=a.attr("data-toggle-text");return n.hasClass("dropdown-open")?(r&&a.text(r),n.removeClass("dropdown-open")):(r&&a.text(i),n.addClass("dropdown-open"))}return null}))}},108:
/*!**********************************************************!*\
  !*** ./shared/components/embed-ap-interactive/client.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";function c(){var e="ap-script";if(!document.getElementById(e)){var t=document.createElement("script");t.id=e,t.type="text/javascript",t.src="https://elections.ap.org/widgets/js/resizer.client.min.js",document.body.appendChild(t)}}n.r(t),n.d(t,"default",(function(){return c}))},111:
/*!****************************************************!*\
  !*** ./shared/components/embed-omnivirt/client.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";function c(){if("undefined"==typeof OmniVirt){var e=document.createElement("script");e.src="https://remote.vroptimal-3dx-assets.com/scripts/vroptimal.js",document.body.appendChild(e)}}n.r(t),n.d(t,"default",(function(){return c}))},112:
/*!****************************************************!*\
  !*** ./shared/components/embed-playbuzz/client.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";function c(){if("undefined"==typeof PlayBuzz){var e=document.createElement("script");e.src="https://cdn.playbuzz.com/widget/feed.js",document.body.appendChild(e)}}n.r(t),n.d(t,"default",(function(){return c}))},115:
/*!************************************************!*\
  !*** ./shared/components/hero-video/client.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){},117:
/*!************************************************!*\
  !*** ./shared/components/image-link/client.js ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t);var c=n(/*! radio */0),i=n.n(c),a=n(/*! shared/enums/events */2);i()(a.b).subscribe((function(e,t){var n=t.closest(".image-link").attr("data-href");!t.closest("button").length&&n&&(e.preventDefault(),window.location.href=n)})),t.default=function(){}},119:
/*!************************************************!*\
  !*** ./shared/components/line-clamp/client.js ***!
  \************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(/*! radio */0),i=n.n(c),a=n(/*! jquery */1),r=n.n(a),o=n(/*! shared/enums/events */2);function s(){r()(".component.line-clamp").each((function(){var e=r()(this);if(e.hasClass("clamped"))return null;var t,n,c,i,a=e.children(),o=e.height()<a.height()&&e.height()>0?e.height():(t=a,n=e.data("lines"),c=n||3,i=r()(t).css("font-size"),Math.floor(1.3*parseInt(i.replace("px",""),10))*c);if(e.addClass("clamped"),a.height()>o&&function(e,t){for(var n=t,c=n/4;e.height()>n+c;)e.text((function(e,t){return t.replace(/\W*\s(\S)*$/,"...")}))}(a,o),e.data("link")){var s={aria:e.data("link-aria")?e.data("link-aria"):e.data("link"),text:e.data("link"),cms_id:e.data("cms-id"),extra_classes:e.data("extra-classes")},d=' <a class="link-view '.concat(s.extra_classes,'" ').concat(s.cms_id&&'data-cms-id="'.concat(s.cms_id,'"'),' href="#" aria-label="').concat(s.aria,'">').concat(s.text,"</a>");r()(d).appendTo(a)}return null}))}function d(){i()(o.p).subscribe((function(){return s()})),i()(o.a).subscribe((function(){return s()})),s()}},120:
/*!**********************************************************!*\
  !*** ./shared/components/mobile-anchor-recirc/client.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(/*! lodash/throttle */33),i=n.n(c),a=n(/*! lodash/defer */32),r=n.n(a);function o(){var e=document.querySelector(".mobile-anchor-recirc"),t=document.querySelector(".article-bottom"),n=document.querySelector(".adhesion-ad"),c=document.querySelector("footer.main");r()((function(){return e.classList.add("can-animate")})),e.addEventListener("click",(function(){e.classList.contains("minimized")?e.classList.remove("minimized"):e.classList.add("minimized")})),window.addEventListener("scroll",i()((function i(){window.innerHeight+window.scrollY>.75*t.offsetTop&&(e.classList.add("visible"),c.classList.add("mobile-anchor-activated"),n.classList.add("hidden"),window.removeEventListener("scroll",i))}),1e3))}},122:
/*!******************************************************************!*\
  !*** ./shared/components/multi-newsletter-signup-form/client.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(/*! jquery */1),i=n.n(c),a=n(/*! ../../../app/utils/url-get-query-params */203);function r(){for(var e=document.querySelectorAll("input[class=newsletter-checkbox]"),t=0;t<e.length;t+=1)if(e[t].checked)return!0;return!1}function o(){var e=document.getElementById("multi-newsletter-form");r()?e.classList.add("sticky"):e.classList.remove("sticky")}function s(){var e=document.getElementById("submitBn"),t=document.getElementById("signup_section"),n=document.getElementById("loading_circle"),c=document.getElementById("thank_you"),a=i()("#multi_newsletter_form");e.addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll("div[class*=error-warning]").forEach((function(e){return e.classList.add("hide")}));var o=function(){var e=document.getElementById("email"),t=document.getElementById("email_warning"),n=document.getElementById("country"),c=document.getElementById("country_warning"),i=e.checkValidity(),a=!0;return void 0!==n&&n.value||(a=!1),i?t.classList.add("hide"):t.classList.remove("hide"),void 0!==c&&null!=c&&(a?c.classList.add("hide"):c.classList.remove("hide")),i&&a}(),s=r();if(s||document.getElementById("newsletter_warning").classList.remove("hide"),o&&s){grecaptcha.execute();var d=document.querySelectorAll(".email-input")[0].value,u=document.getElementById("ue");t.classList.add("hide"),n.classList.remove("hide"),n.classList.add("loading"),i.a.ajax({method:"POST",url:"/newsletter-signup/?url=".concat(a.attr("action")),data:a.serialize(),success:function(){n.classList.remove("loading"),n.classList.add("hide"),c.classList.remove("hide"),u.innerHTML=d,"undefined"!=typeof dataLayer&&dataLayer.push({event:"Multi Newsletter Signup Success",selectedNewsletters:Array.from(document.querySelectorAll("input[class=newsletter-checkbox]")).filter((function(e){return e.checked})).map((function(e){return e.value})).join("|")})},error:function(e){console.log(e,"Form submission failed."),n.classList.remove("loading"),n.classList.add("hide"),t.classList.remove("hide")}})}}))}function d(){document.querySelectorAll("button[class=select-all]").forEach((function(e){var t=e.attributes.group.nodeValue,n=document.querySelectorAll("input[group=".concat(t,"]"));e.addEventListener("click",(function(t){t.preventDefault(),function(e,t){"false"===e.attributes.checked.nodeValue?(t.forEach((function(e){return e.checked=!0})),e.attributes.checked.nodeValue="true"):(t.forEach((function(e){return e.checked=!1})),e.attributes.checked.nodeValue="false")}(e,n),o()}))})),Array.from(document.querySelectorAll("input[class=newsletter-checkbox]")).forEach((function(e){e.addEventListener("click",(function(){o()}))}));var e,t,n,c=window.location.search;if(c){var i=Object(a.a)(c),r=i.source,d=i.newsletter_name;r&&function(e){document.getElementsByName("SOURCE")[0].value=e}(r),d&&(e=d.toUpperCase(),document.querySelectorAll("input[value=".concat(e,"]"))[0].checked=!0)}!function(){var e=document.getElementById("country_select");if(void 0!==e&&null!=e){var t=document.getElementById("country"),n=["AUT","BEL","BGR","CYP","CZE","DEU","DNK","EST","ESP","FIN","FRA","GBR","GRC","HRV","HUN","IRL","ITA","LTU","LUX","LVA","MLT","NLD","PRT","ROU","SWE","SVN","SVK","ISL","LIE","NOR","POL"],c=document.getElementById("eu_checkbox"),i=document.getElementById("ca_checkbox");n.includes(t.value)?c.classList.remove("hide"):"CAN"===t.value&&i.classList.remove("hide"),void 0!==e&&void 0!==t&&e.addEventListener("change",(function(e){t.value=e.target.value,n.includes(e.target.value)?(c.classList.remove("hide"),i.classList.add("hide")):"CAN"===e.target.value?(i.classList.remove("hide"),c.classList.add("hide")):(c.classList.add("hide"),i.classList.add("hide"))}))}}(),s(),o(),t=document.getElementById("submitBn"),n=(document.compatMode&&"CSS1Compat"===document.compatMode?document.documentElement:document.body).clientWidth,t.innerHTML=n<=414?"SIGN UP":"SIGN UP NOW"}},125:
/*!*****************************************************************!*\
  !*** ./shared/components/newsletter-thank-you-notice/client.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(/*! ../../../app/utils/url-get-query-params */203);function i(e){document.querySelectorAll("".concat(e)).forEach((function(e){return e.classList.remove("hide")}))}function a(e){var t=e.live,n=document.getElementById("more-newsletters-link");n.href=t?"https://time.com/newsletters/?source=thank-you-doi":"https://time.com/newsletters/?source=thank-you-expired"}function r(){var e;(e=window.location.search)&&"1"===Object(c.a)(e).conf?(i("div > .nl-thank-you-success"),a({live:!0})):(i("div > .nl-thank-you-failure"),a({live:!1}))}},127:
/*!*******************************************!*\
  !*** ./shared/components/popup/client.js ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(/*! jquery */1),i=n.n(c),a=n(/*! radio */0),r=n.n(a),o=n(/*! shared/enums/events */2);function s(e,t){e.preventDefault();var n=t,c=n.attr("href"),i=n.attr("data-window-name")||"Share",a=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,o=(window.innerWidth||document.documentElement.clientWidth||screen.width)/2-300+a,s=(window.innerHeight||document.documentElement.clientHeight||screen.height)/2-275+r,d="scrollbars=yes,resizable=yes,toolbar=no,width=".concat(600,",height=").concat(550,",top=").concat(s,",left=").concat(o);return window.open(c,i,d),!1}function d(){r()(o.l).subscribe(s),r()(o.b).subscribe((function(e){var t=i()(e.target).closest(".component.popup");t.length&&s(e,t)}))}},129:
/*!****************************************************!*\
  !*** ./shared/components/search-results/client.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(/*! jquery */1),i=n.n(c);function a(){return e=i()("#search-results-load-more-button"),t=i()("#search-results-load-more-container"),n=encodeURIComponent(e.data("query")),void e.on("click",(function(c){c.preventDefault();var a=parseInt(e.data("page"),10)+1,r={q:n,page:a};t.addClass("loading"),i.a.get("/element-api/content-proxy/site-search/",r).then((function(n){t[0].insertAdjacentHTML("beforebegin",n.html),t.removeClass("loading"),e.data("page",a),n.hasNext||t.addClass("hide")})).catch((function(e){console.error(e),console.log("There was an error with the AJAX request. Requested parameters: ".concat(JSON.stringify(r),"."))}))}));var e,t,n}},131:
/*!*******************************************!*\
  !*** ./shared/components/video/client.js ***!
  \*******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./shared/components lazy ^\.\/.*\/client\.js$ namespace object (referenced with context element) */function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(/*! jquery */1),i=n.n(c),a=!1;function r(){if(!a){var e=i()(".component.video").find("video")[0],t=e.getAttribute("data-account"),n=e.getAttribute("data-player"),c=document.createElement("script");c.src="//players.brightcove.net/".concat(t,"/").concat(n,"_default/index.min.js"),document.body.appendChild(c),a=!0}}},203:
/*!*******************************************!*\
  !*** ./app/utils/url-get-query-params.js ***!
  \*******************************************/
/*! exports provided: urlGetQueryParams */
/*! exports used: urlGetQueryParams */function(e,t,n){"use strict";function c(e){return Object.fromEntries(new Map(e.split("?")[1].split("&").map((function(e){return e.split("=")}))))}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=audio-client-js.1a5ac26a47891a6b55c4.js.map