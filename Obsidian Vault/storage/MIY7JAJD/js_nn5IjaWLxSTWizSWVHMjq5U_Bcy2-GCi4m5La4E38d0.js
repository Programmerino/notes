/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(b){"object"==typeof module&&"object"==typeof module.exports?module.exports=b:"function"==typeof define&&define.amd&&define("picturefill",function(){return b}),"object"==typeof a&&(a.picturefill=b)}function e(a){var b,c,d,e,f,i=a||{};b=i.elements||g.getAllElements();for(var j=0,k=b.length;k>j;j++)if(c=b[j],d=c.parentNode,e=void 0,f=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[g.ns]||(c[g.ns]={}),i.reevaluate||!c[g.ns].evaluated)){if(d&&"PICTURE"===d.nodeName.toUpperCase()){if(g.removeVideoShim(d),e=g.getMatch(c,d),e===!1)continue}else e=void 0;(d&&"PICTURE"===d.nodeName.toUpperCase()||!g.sizesSupported&&c.srcset&&h.test(c.srcset))&&g.dodgeSrcset(c),e?(f=g.processSourceSet(e),g.applyBestCandidate(f,c)):(f=g.processSourceSet(c),(void 0===c.srcset||c[g.ns].srcset)&&g.applyBestCandidate(f,c)),c[g.ns].evaluated=!0}}function f(){function c(){clearTimeout(d),d=setTimeout(h,60)}g.initTypeDetects(),e();var d,f=setInterval(function(){return e(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(f):void 0},250),h=function(){e({reevaluate:!0})};a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void d(function(){});b.createElement("picture");var g=a.picturefill||{},h=/\s+\+?\d+(e\d+)?w/;g.ns="picturefill",function(){g.srcsetSupported="srcset"in c,g.sizesSupported="sizes"in c,g.curSrcSupported="currentSrc"in c}(),g.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},g.makeUrl=function(){var a=b.createElement("a");return function(b){return a.href=b,a.href}}(),g.restrictsMixedContent=function(){return"https:"===a.location.protocol},g.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},g.getDpr=function(){return a.devicePixelRatio||1},g.getWidthFromLength=function(a){var c;if(!a||a.indexOf("%")>-1!=!1||!(parseFloat(a)>0||a.indexOf("calc(")>-1))return!1;a=a.replace("vw","%"),g.lengthEl||(g.lengthEl=b.createElement("div"),g.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",g.lengthEl.className="helper-from-picturefill-js"),g.lengthEl.style.width="0px";try{g.lengthEl.style.width=a}catch(d){}return b.body.appendChild(g.lengthEl),c=g.lengthEl.offsetWidth,0>=c&&(c=!1),b.body.removeChild(g.lengthEl),c},g.detectTypeSupport=function(b,c){var d=new a.Image;return d.onerror=function(){g.types[b]=!1,e()},d.onload=function(){g.types[b]=1===d.width,e()},d.src=c,"pending"},g.types=g.types||{},g.initTypeDetects=function(){g.types["image/jpeg"]=!0,g.types["image/gif"]=!0,g.types["image/png"]=!0,g.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.types["image/webp"]=g.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},g.verifyTypeSupport=function(a){var b=a.getAttribute("type");if(null===b||""===b)return!0;var c=g.types[b];return"string"==typeof c&&"pending"!==c?(g.types[b]=g.detectTypeSupport(b,c),"pending"):"function"==typeof c?(c(),"pending"):c},g.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},g.findWidthFromSourceSize=function(c){for(var d,e=g.trim(c).split(/\s*,\s*/),f=0,h=e.length;h>f;f++){var i=e[f],j=g.parseSize(i),k=j.length,l=j.media;if(k&&(!l||g.matchesMedia(l))&&(d=g.getWidthFromLength(k)))break}return d||Math.max(a.innerWidth||0,b.documentElement.clientWidth)},g.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},g.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),f=g.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||g.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/f)}return c||1},g.getCandidatesFromSourceSet=function(a,b){for(var c=g.parseSrcset(a),d=[],e=0,f=c.length;f>e;e++){var h=c[e];d.push({url:h.url,resolution:g.parseDescriptor(h.descriptor,b)})}return d},g.dodgeSrcset=function(a){a.srcset&&(a[g.ns].srcset=a.srcset,a.srcset="",a.setAttribute("data-pfsrcset",a[g.ns].srcset))},g.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[g.ns]&&a[g.ns].srcset&&(b=a[g.ns].srcset),b&&(d=g.getCandidatesFromSourceSet(b,c)),d},g.backfaceVisibilityFix=function(a){var b=a.style||{},c="webkitBackfaceVisibility"in b,d=b.zoom;c&&(b.zoom=".999",c=a.offsetWidth,b.zoom=d)},g.setIntrinsicSize=function(){var c={},d=function(a,b,c){b&&a.setAttribute("width",parseInt(b/c,10))};return function(e,f){var h;e[g.ns]&&!a.pfStopIntrinsicSize&&(void 0===e[g.ns].dims&&(e[g.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[g.ns].dims||(f.url in c?d(e,c[f.url],f.resolution):(h=b.createElement("img"),h.onload=function(){if(c[f.url]=h.width,!c[f.url])try{b.body.appendChild(h),c[f.url]=h.width||h.offsetWidth,b.body.removeChild(h)}catch(a){}e.src===f.url&&d(e,c[f.url],f.resolution),e=null,h.onload=null,h=null},h.src=f.url)))}}(),g.applyBestCandidate=function(a,b){var c,d,e;a.sort(g.ascendingSort),d=a.length,e=a[d-1];for(var f=0;d>f;f++)if(c=a[f],c.resolution>=g.getDpr()){e=c;break}e&&(e.url=g.makeUrl(e.url),b.src!==e.url&&(g.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+e.url):(b.src=e.url,g.curSrcSupported||(b.currentSrc=b.src),g.backfaceVisibilityFix(b))),g.setIntrinsicSize(b,e))},g.ascendingSort=function(a,b){return a.resolution-b.resolution},g.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},g.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var f=c[d];("PICTURE"===f.parentNode.nodeName.toUpperCase()||null!==f.getAttribute("srcset")||f[g.ns]&&null!==f[g.ns].srcset)&&a.push(f)}return a},g.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,f=d.length;f>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||g.matchesMedia(i))){var j=g.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},f(),e._=g,d(e)}(window,window.document,new window.Image);
;
if(typeof Drupal!=="undefined"&&typeof jQuery!=="undefined"){(function(e){Drupal.behaviors.picture={attach:function(t){if(!("HTMLPictureElement"in window)){var n=e(t).find("img");if(n.length){window.picturefill({elements:n.get()})}}if(t==="#cboxLoadedContent"&&e(t).find("picture").length){e.colorbox.resize();e("img",t).once("colorbox-lazy-load",function(){e(this).load(function(){this.style.maxHeight=e(window).height()+"px";this.style.maxWidth=e(window).width()+"px";e.colorbox.resize({innerHeight:this.height,innerWidth:this.width});this.style.maxHeight=null;this.style.maxWidth=null})})}}}})(jQuery)}
;
// Add the F*in cookie code directly. No more errors.
jQuery.cpCookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.content_paywall = {
    attach: function(context, settings) {
      
      var contentDeselectors = Drupal.settings.content_paywall.content_deselectors;
      var contentSelectors = Drupal.settings.content_paywall.content_selector;
      var contentRestriction = Drupal.settings.content_paywall.content_restriction_type;
      var cookieExpiry = Drupal.settings.content_paywall.expiry;
      var nid = Drupal.settings.content_paywall.nid;
      var articleLimit = Drupal.settings.content_paywall.article_limit;
      var accessDeniedMsg = Drupal.settings.content_paywall.access_denied_msg;
      var block_tags = $.parseJSON(Drupal.settings.content_paywall.block_tags);

      $('body').addClass('content-paywall-restriction__' + contentRestriction);

      //check for double breaks
      var doubleBreakContainers = $(contentSelectors + ' :has(br+br)');

      if (doubleBreakContainers.length > 0) {
        //replace double breaks with paragraphs.
        stripBeakTags($, doubleBreakContainers);
      }

      var has_access = contentRestriction == 'premium' ? false : true;
      // Now, if it's metered, check cookie to see if they've passed the limit.
      if (contentRestriction.substring(0, 7) == "metered") {
        var cookieArray = $.cpCookie('content_paywall_js') ? $.makeArray($.cpCookie('content_paywall_js').split(',')) : [];
        // If they've already gotten to read the article grant them access.
        var has_accessed = $.inArray(nid, cookieArray) >= 0 ? true : false;
        var is_over_limit = cookieArray.length >= articleLimit;
        if (is_over_limit && !has_accessed) {
          has_access = false;
        }
        // If they haven't read it but now get permanent access, and they're
        // not over the limit, add to cookie.
        if (has_access && !(is_over_limit) && !has_accessed) {
          cookieArray.push(nid); // add new nid to cookie.
          $.cpCookie('content_paywall_js', cookieArray.join(','), {
            expires: cookieExpiry,
            path: '/',
            domain: document.domain
          });
        }
      }
      else {
        $.cpCookie('content_paywall_js', nid, {
          expires: cookieExpiry,
          path: '/',
          domain: document.domain
        });
      }
      if (!has_access) {
        // Truncate content.
        var paragraphCount = 0;
        $(contentSelectors + contentDeselectors).children().each(function () {
          var charCount = $(this).text().length;
          if (charCount > Drupal.settings.content_paywall.minimum_paragraph
            && $.inArray($(this)[0].nodeName.toLowerCase(), block_tags) >= 0) {
            paragraphCount += 1;
          }
          if (paragraphCount > Drupal.settings.content_paywall.paragraphs_allowed) {
            $(this).remove();
          }
        });
        $(contentSelectors).append(accessDeniedMsg);
        $('body').addClass('content-paywall-truncated');
        
        // Track with Google Analytics.
        GAEventsTrackPaywall();
      }
    }
  }
})(jQuery, Drupal, this, this.document);

/**
 * Track Paywall popping-up in Google Analytics Events.
 */
function GAEventsTrackPaywall() {
  (window,document,"script","https://www.google-analytics.com/analytics.js","ga");
  var result = ga('send', 'event', 'Paywall', 'Paywall-reached', 'Paywall-displayed', 0, {nonInteraction: true});
}

//strips double breaks and wraps them in p tags
function stripBeakTags($, doubleBreakContainers) {
  var targetP = null;
  var justSplit = false;
  doubleBreakContainers.each( function() {
    var parentP = $(this);
    var isFirstPart = true;
    parentP.contents().each( function(index) {
      if (justSplit) {
        justSplit = false;
        // Continue the loop. Otherwise, it would copy an unwanted <br>.
        return true;
      }
      var thisjNode = $(this);
      var nextjNode = $(this.nextSibling);
      if (thisjNode.is("br") && nextjNode.is("br") ) {
        // Loop through and remove preceding elements, copy out html to to echo in p tag.
        var firstPart = '';
        if (isFirstPart) {
          parentP.contents().each(function (innerIndex, innerElement) {
            if (innerIndex == index) {
              return false;
            }
            firstPart += outerHTML(innerElement);
            $(innerElement).remove();
          });
          isFirstPart = false;
        }
        if (targetP == null) {
          //console.log(firstPart, 'firstPart');
          parentP.prepend('<p class="firstParagraph">'+firstPart+'</p>');
          targetP = parentP.find('p.firstParagraph');
        }
        thisjNode.remove(); //-- Kill this <br>
        nextjNode.remove(); //-- and the next

        //-- Create a new p for any following content
        targetP.after ('<p></p>');
        targetP = targetP.next ("p");
        justSplit = true;
      }
      else if (targetP) {
        //-- Move the node to its new home.
        targetP.append(this);
      }
    });
  } );
}

function outerHTML(node) {
  // if IE, Chrome take the internal method otherwise build one.
  return node.outerHTML || (
    function(n) {
      var div = document.createElement('div'), h;
      div.appendChild( n.cloneNode(true) );
      h = div.innerHTML;
      div = null;
      return h;
    })(node);
}

/**
 * Track clicks on JS-added text within the pop-up and alertbox.
 */
jQuery(document).ready(function() {
  jQuery('body').find('.paywall_subscribe').click(function() {
    (window,document,"script","https://www.google-analytics.com/analytics.js","ga");
    var result = ga('send', 'event', 'Paywall', 'Click', 'Paywall-subscribe-1', 0, {nonInteraction: false});
  });
  jQuery('body').find('.paywall_login').click(function() {
    (window,document,"script","https://www.google-analytics.com/analytics.js","ga");
    var result = ga('send', 'event', 'Paywall', 'Click', 'Paywall-login-1', 0, {nonInteraction: false});
  });
});;
