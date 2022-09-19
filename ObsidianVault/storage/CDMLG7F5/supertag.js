/*
 * SuperTag v3.5.9
 * http://supert.ag
 *
 * Copyright (c) 2016 SuperTag Pty Ltd.
 *
 * Date: 29-06-2016 11:03:23 +1000 (Wed, 29 Jun 2016)
 */
superT=window.superT||{};(function(a,b){if(b._loadSyncSafely){return}var c=a.getElementsByTagName("script"),d=(function(){for(var e=0;e<c.length;e++){if(c[e].src.match("supertag.js")){if(!c[e].async){return true}}}return false})();b._loadSyncSafely=function(e){if(d){a.write("\x3Cscript src='"+encodeURI(e)+"' \x3E\x3C/script\x3E")}else{b._loadAsync(e)}};b._loadAsync=function(g){var f=a.createElement("script");f.async=true;f.src=encodeURI(g);var e=c[0];e.parentNode.insertBefore(f,e)};b._isUserOptedIn=(function(){return -1===a.cookie.indexOf("st_opt_out=1")})();b.liveTesting=false})(document,superT);if(~location.href.indexOf("superT=preview")||~document.cookie.indexOf("superT_preview")){superT._loadSyncSafely("//c.supert.ag/key-media/insurance-business/preview/supertag.js");superT._loadAsync("https://app.supert.ag/js/supertag-live-preview.js?_dc=3.5.9")}else{if(~location.href.indexOf("superT=test")||~document.cookie.indexOf("superT_lt")){var force=window.location.search.match(/[?\&](force=.*?)(&|$)/);superT._loadSyncSafely("https://app.supert.ag/p/key-media/insurance-business/supertag.js?"+(force?force[1]:"force=local,livetesting"))}else{(function(d,b,c,a){})(window,document,superT,"undefined");file="//c.supert.ag/key-media/insurance-business/supertag-code-v8.js";superT._loadAsync(file)}};