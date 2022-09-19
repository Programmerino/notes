
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"107",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentAuthorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCmsCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCmsTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentModifiedDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentPublishedDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentShownOnPlatform"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeIncApplication"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeIncBrand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentSubType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoFranchise"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCmsId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoTags"
    },{
      "function":"__d",
      "vtp_elementSelector":"video.vjs-tech",
      "vtp_attributeName":"data-video-id",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoCustomFields.campaign_id"
    },{
      "function":"__j",
      "vtp_name":"localStorage.kxtimemagazine_kuid"
    },{
      "function":"__j",
      "vtp_name":"localStorage._kxtimemagazine_kuid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",5],8,16],"),b=new Date;return(a=Math.ceil((b.getTime()-a.getTime())\/1E3\/60\/60\/24))?a:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a.split(\"T\")[0]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adTags"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",22],8,16],"){var a=document.createElement(\"a\");a.href=",["escape",["macro",22],8,16],";return a.hostname.match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],";if(a){a=a.split(\"|\");var e={utmcsr:\"source\",utmcmd:\"medium\",utmccn:\"campaign\",utmcct:\"content\",utmctr:\"keyword\"},d={},b;for(b=0;b\u003Ca.length;b++){var c=a[b].split(\"\\x3d\");var f=c[0];c=c[1];d[e[f]]=c}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",25],8,16],".source})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",25],8,16],".campaign})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",25],8,16],".medium})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",25],8,16],".content})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",25],8,16],".keyword})();"]
    },{
      "function":"__j",
      "vtp_name":"browserName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent;var b=navigator.vendor;var c=\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i;var d=\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i;\nvar e=\/(tablet|ipad|playbook|silk)|(android(?!.*mobile))\/i;return a?c.test(a)?\"mobile\":d.test(a.substr(0,4))?\"mobile\":e.test(a.substr(0,4))?\"tablet\":\"desktop\":b?c.test(b)?\"mobile\":d.test(b.substr(0,4))?\"mobile\":\"desktop\":\"inconclusive: neither userAgent nor vendor found\"})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-word_count",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",33],8,16],",b=\"\",c={1:\"not an article page\",50:\"0-49 words\",100:\"50-99 words\",250:\"100-249 words\",500:\"250-499 words\",800:\"500-799 words\",1E3:\"800-999 words\",1500:\"1,000-1,499 words\",2E3:\"1,500-1,999 words\",3E3:\"2,000-2,999 words\",5E3:\"3,000-4,999 words\",1E5:\"5,000+ words\"},a;for(a in c)if(d\u003Ca){b=c[a];break}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date(",["escape",["macro",5],8,16],"),b=new Date;a=Math.ceil((b.getTime()-a.getTime())\/1E3\/60\/60\/24);return(a=Math.ceil(a\/7))?a:null})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-97981691-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",1]],["map","index","2","dimension",["macro",2]],["map","index","4","dimension",["macro",3]],["map","index","5","dimension",["macro",4]],["map","index","6","dimension",["macro",5]],["map","index","7","dimension",["macro",6]],["map","index","8","dimension",["macro",7]],["map","index","9","dimension",["macro",8]],["map","index","10","dimension",["macro",9]],["map","index","12","dimension",["macro",10]],["map","index","24","dimension",["macro",11]],["map","index","25","dimension",["macro",12]],["map","index","26","dimension",["macro",13]],["map","index","27","dimension",["macro",14]],["map","index","28","dimension",["macro",15]],["map","index","33","dimension",["macro",16]],["map","index","34","dimension",["macro",17]],["map","index","35","dimension",["macro",18]],["map","index","29","dimension",["macro",19]],["map","index","30","dimension",["macro",20]],["map","index","11","dimension",["macro",21]],["map","index","36","dimension",["macro",23]],["map","index","37","dimension",["macro",26]],["map","index","38","dimension",["macro",27]],["map","index","39","dimension",["macro",28]],["map","index","40","dimension",["macro",29]],["map","index","41","dimension",["macro",30]],["map","index","42","dimension",["macro",31]],["map","index","43","dimension",["macro",32]],["map","index","61","dimension",["macro",33]],["map","index","63","dimension",["macro",34]],["map","index","31","dimension",["macro",35]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "convert_false_to":"email",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",41],8,16],";a=a.closest(\"[data-social-service]\");return a.dataset.socialService})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentAuthorName"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cvt_11864053_324",
      "vtp_getValueDefault":"inputAttr",
      "vtp_searchAttr":"class",
      "vtp_getAttrNameDefault":"data-variation",
      "vtp_filteringRule":["list",["map","filterOperator","contain","filterValue","component feed"],["map","filterOperator","contain","filterValue","inline-recirc"]],
      "vtp_searchFilter":true
    },{
      "function":"__cvt_11864053_324",
      "vtp_getValueDefault":"searchAttr",
      "vtp_searchAttr":"class",
      "vtp_filteringRule":["list",["map","filterOperator","contain","filterValue","component"],["map","filterOperator","contain","filterValue","most-popular"]],
      "vtp_searchFilter":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",46],8,16],";return a.includes(\"inline\")?\"most-popular mobile\":\"most-popular desktop\"})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"div.component.newsletter-signup-form",
      "vtp_attributeName":"data-newsletter",
      "vtp_selectorType":"CSS"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-139738878-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_headline",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_featured_image",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_modified_date",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_cms_sub_category",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_cms_id",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_published_date",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_shown_on_platform",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_type",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-path",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-referrer",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-search",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_is_post",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-title",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_cms_category",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_cms_tags",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_cms_terms",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-time_inc_brand",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-time_inc_application",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_syndicated",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_syndicated_brand",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"div.keyvals",
      "vtp_attributeName":"data-content_syndicated_url",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCmsSubCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentCmsTerms"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentFeaturedImage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentHeadline"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",41],8,16],";a=a.closest(\".newsletter-signup-confirmation-message\");a=a.style.display;var b=!1;a||\"block\"!==a||(b=!0);return b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmz"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__utmzzses"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",86],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelectorAll(\"div.menu.desktop-only li.selected a\")[0].text.trim()})();"]
    },{
      "function":"__cvt_11864053_324",
      "vtp_getValueDefault":"innerText",
      "vtp_searchAttr":"class",
      "vtp_searchFilter":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":1
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":2
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"All",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Ad Blocker Detected",
      "vtp_eventLabel":"(not set)",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__csm",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_clientId":"30714874",
      "tag_id":22
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":["template",["macro",40],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":365
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Social Share Click",
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":367
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Author Click",
      "vtp_eventLabel":["macro",43],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":368
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Section Click",
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":369
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Tag Click",
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":370
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Subscribe Click",
      "vtp_eventLabel":"Footer",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":371
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Subscribe Click",
      "vtp_eventLabel":"Hamburger",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":372
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Subscribe Click",
      "vtp_eventLabel":"Nav Header",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":373
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Newsletter Click",
      "vtp_eventLabel":"Bottom Banner",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":374
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Newsletter Click",
      "vtp_eventLabel":"Footer",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":375
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Sign Up Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Newsletter Click",
      "vtp_eventLabel":"Header",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":376
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":377
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":"spotlight-story",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":378
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":379
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Newsletter Inline Sign-Up",
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":380
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":"top-recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":381
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":"right-rail recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":382
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Click",
      "vtp_eventLabel":"bottom-recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":383
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Newsletter Inline Impression",
      "vtp_eventLabel":["macro",48],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":398
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":399
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":"right-rail recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":400
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":"top-recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":401
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":"bottom-recirc",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":402
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":["macro",47],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":403
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Content Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Recirc Impression",
      "vtp_eventLabel":"spotlight-story",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":404
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Clicks to Ticketing Site",
      "vtp_eventLabel":"Book Now",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":405
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":406
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Subscription Page Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":["macro",49],
      "vtp_eventLabel":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":407
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Subscription Page Action",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",37],
      "vtp_eventAction":"Subscription Navigation Menu Click",
      "vtp_eventLabel":["macro",52],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":408
    },{
      "function":"__cvt_11864053_405",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_parselySiteId":"time.com",
      "tag_id":411
    },{
      "function":"__cvt_11864053_406",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_cd":true,
      "vtp_nsId":"ns:timemagazine",
      "vtp_route":"set",
      "vtp_tg":true,
      "vtp_re":false,
      "vtp_dataId":"txq8vt5yx",
      "vtp_checkCallback":false,
      "vtp_sh":false,
      "vtp_al":true,
      "vtp_consoleLogging":false,
      "vtp_dc":true,
      "tag_id":412
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/beacon.krxd.net\/event.gif?event_id=NMup1Vj1\u0026event_type=clk\u0026etixclicks=ETIX",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",53],
      "tag_id":413
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"10,25,50,75,90",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"11864053_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":440
    },{
      "function":"__cl",
      "tag_id":441
    },{
      "function":"__cl",
      "tag_id":442
    },{
      "function":"__cl",
      "tag_id":443
    },{
      "function":"__cl",
      "tag_id":444
    },{
      "function":"__cl",
      "tag_id":445
    },{
      "function":"__cl",
      "tag_id":446
    },{
      "function":"__cl",
      "tag_id":447
    },{
      "function":"__cl",
      "tag_id":448
    },{
      "function":"__cl",
      "tag_id":449
    },{
      "function":"__cl",
      "tag_id":450
    },{
      "function":"__cl",
      "tag_id":451
    },{
      "function":"__cl",
      "tag_id":452
    },{
      "function":"__cl",
      "tag_id":453
    },{
      "function":"__cl",
      "tag_id":454
    },{
      "function":"__cl",
      "tag_id":455
    },{
      "function":"__cl",
      "tag_id":456
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.component.newsletter-signup-form",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_368",
      "tag_id":457
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.component.feed.inline-recirc",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_370",
      "tag_id":458
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.component.feed.right-rail",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_371",
      "tag_id":459
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.component.header-recirc.active",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"5",
      "vtp_uniqueTriggerId":"11864053_372",
      "tag_id":460
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.component.feed.bottom-recirc",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_373",
      "tag_id":461
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.component.most-popular-feed",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_374",
      "tag_id":462
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"div.component.spotlight-story",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"11864053_375",
      "tag_id":463
    },{
      "function":"__cl",
      "tag_id":464
    },{
      "function":"__cl",
      "tag_id":465
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=a.createElement(\"script\");b.src=a.location.protocol+\"\/\/tag.bounceexchange.com\/1709\/i.js\";b.async=!0;a.getElementsByTagName(\"head\")[0].appendChild(b)})(document);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"417891852373462\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=417891852373462\u0026amp;ev=PageView\n\n\u0026amp;noscript=1\"\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1487873964837635\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1487873964837635\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cfigure class=\"op-tracker\"\u003E\n    \u003Ciframe\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003EPARSELY={autotrack:!1,fbInstantArticles:!0,onload:function(){PARSELY.beacon.trackPageView({urlref:\"http:\/\/facebook.com\/instantarticles\"});return!0}};\u003C\/script\u003E\n        \u003Cscript id=\"parsely-cfg\" data-gtmsrc=\"\/\/cdn.parsely.com\/keys\/time.com\/p.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n    \u003C\/iframe\u003E\n\u003C\/figure\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":361
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2685828884836994\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=2685828884836994\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":386
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o2nvu\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":387
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"gtm-__utmzz-cookie-replicator\" type=\"text\/gtmscript\"\u003E(function(g){function w(c){var e=[\"source\",\"medium\",\"campaign\",\"term\",\"content\"];e=new RegExp(\"(utm_(\"+e.join(\"|\")+\")|(d|g)clid)\\x3d.*?([^\\x26#]*|$)\",\"gi\");c=c.match(e);var l;if(c){var a={};var b=c.length;for(l=0;l\u003Cb;l++)(e=c[l].split(\"\\x3d\"))\u0026\u0026(a[e[0]]=e[1])}return a}function x(c){if(c){var e={\"daum.net\":{p:\"q\",n:\"daum\"},\"eniro.se\":{p:\"search_word\",n:\"eniro \"},\"naver.com\":{p:\"query\",n:\"naver \"},\"yahoo.com\":{p:\"p\",n:\"yahoo\"},\"msn.com\":{p:\"q\",n:\"msn\"},\"bing.com\":{p:\"q\",n:\"live\"},\"aol.com\":{p:\"q\",n:\"aol\"},\n\"lycos.com\":{p:\"q\",n:\"lycos\"},\"ask.com\":{p:\"q\",n:\"ask\"},\"altavista.com\":{p:\"q\",n:\"altavista\"},\"search.netscape.com\":{p:\"query\",n:\"netscape\"},\"cnn.com\":{p:\"query\",n:\"cnn\"},\"about.com\":{p:\"terms\",n:\"about\"},\"mamma.com\":{p:\"query\",n:\"mama\"},\"alltheweb.com\":{p:\"q\",n:\"alltheweb\"},\"voila.fr\":{p:\"rdata\",n:\"voila\"},\"search.virgilio.it\":{p:\"qs\",n:\"virgilio\"},\"baidu.com\":{p:\"wd\",n:\"baidu\"},\"alice.com\":{p:\"qs\",n:\"alice\"},\"yandex.com\":{p:\"text\",n:\"yandex\"},\"najdi.org.mk\":{p:\"q\",n:\"najdi\"},\"seznam.cz\":{p:\"q\",\nn:\"seznam\"},\"search.com\":{p:\"q\",n:\"search\"},\"wp.pl\":{p:\"szukaj \",n:\"wirtulana polska\"},\"online.onetcenter.org\":{p:\"qt\",n:\"o*net\"},\"szukacz.pl\":{p:\"q\",n:\"szukacz\"},\"yam.com\":{p:\"k\",n:\"yam\"},\"pchome.com\":{p:\"q\",n:\"pchome\"},\"kvasir.no\":{p:\"q\",n:\"kvasir\"},\"sesam.no\":{p:\"q\",n:\"sesam\"},\"ozu.es\":{p:\"q\",n:\"ozu \"},\"terra.com\":{p:\"query\",n:\"terra\"},\"mynet.com\":{p:\"q\",n:\"mynet\"},\"ekolay.net\":{p:\"q\",n:\"ekolay\"},\"rambler.ru\":{p:\"words\",n:\"rambler\"},google:{p:\"q\",n:\"google\"}},a=g.createElement(\"a\"),b={};a.href=\nc;-1\u003Ca.hostname.indexOf(\"google\")\u0026\u0026(m=\"google\");e[m]?(c=e[m],e=new RegExp(c.p+\"\\x3d.*?([^\\x26#]*|$)\",\"gi\"),a=a.search.match(e),b.source=c.n,b.medium=\"organic\",b.term=(a?a[0].split(\"\\x3d\")[1]:\"\")||\"(not provided)\"):m!==n\u0026\u0026(b.source=a.hostname,b.medium=\"referral\");return b}}function u(c,a,b,d,f){c=c+\"\\x3d\"+a+\";\";b\u0026\u0026(c+=\"Expires\\x3d\"+b.toGMTString()+\";\");d\u0026\u0026(c+=\"Path\\x3d\"+d+\";\");f\u0026\u0026(c+=\"Domain\\x3d\"+f+\";\");g.cookie=c}function q(a){var b=\"; \"+g.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(1\u003Ca.length)return a.pop().split(\";\")[0]}\nfunction v(a){if(a){var b=g.createElement(\"a\");b.href=a;try{return b.hostname.match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]}catch(l){}}}var p=g.referrer,b={utmcsr:\"(direct)\",utmcmd:\"(none)\",utmccn:\"(not set)\"},r=g.location.hostname,n=v(r),m=v(g.referrer),k=q(\"__utmzzses\");r=new Date(+new Date+15552E6);var a=g.location.search.replace(\"?\",\"\"),h=g.location.hash.replace(\"#\",\"\");a=w(a+\"#\"+h);var d=x(p);h=q(\"__utmz\")||q(\"__utmzz\");p=[];var t={utm_source:\"utmcsr\",utm_medium:\"utmcmd\",utm_campaign:\"utmccn\",\nutm_content:\"utmcct\",utm_term:\"utmctr\",gclid:\"utmgclid\",dclid:\"utmdclid\"},f;k\u0026\u0026m===n\u0026\u0026(d=a=null);if(a\u0026\u0026(a.utm_source||a.gclid||a.dclid)){for(f in a)\"undefined\"!==typeof a[f]\u0026\u0026(k=t[f],b[k]=a[f]);if(a.gclid||a.dclid)b.utmcsr=\"google\",b.utmcmd=b.utmgclid?\"cpc\":\"cpm\"}else if(d)b.utmcsr=d.source,b.utmcmd=d.medium,d.term\u0026\u0026(b.utmctr=d.term);else if(h)for(b={},h=h.split(\"|\"),t=h.length,d=0;d\u003Ct;d++)k=h[d].split(\"\\x3d\"),a=k[0].split(\".\").pop(),b[a]=k[1];for(f in b)\"undefined\"!==typeof b[f]\u0026\u0026p.push(f+\"\\x3d\"+\nb[f]);u(\"__utmzz\",p.join(\"|\"),r,\"\/\",n);u(\"__utmzzses\",1,null,\"\/\",n)})(document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":393
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nVer=navigator.appVersion,nAgt=navigator.userAgent,browserName=navigator.appName,fullVersion=\"\"+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10),nameOffset,verOffset,ix;\n-1!=(verOffset=nAgt.indexOf(\"OPR\/\"))?(browserName=\"Opera\",fullVersion=nAgt.substring(verOffset+4)):-1!=(verOffset=nAgt.indexOf(\"Opera\"))?(browserName=\"Opera\",fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf(\"Version\"))\u0026\u0026(fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf(\"MSIE\"))?(browserName=\"Microsoft Internet Explorer\",fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf(\"Chrome\"))?(browserName=\"Chrome\",fullVersion=nAgt.substring(verOffset+\n7)):-1!=(verOffset=nAgt.indexOf(\"Safari\"))?(browserName=\"Safari\",fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf(\"Version\"))\u0026\u0026(fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf(\"Firefox\"))?(browserName=\"Firefox\",fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(\" \")+1)\u003C(verOffset=nAgt.lastIndexOf(\"\/\"))\u0026\u0026(browserName=nAgt.substring(nameOffset,verOffset),fullVersion=nAgt.substring(verOffset+1),browserName.toLowerCase()==browserName.toUpperCase()\u0026\u0026\n(browserName=navigator.appName));-1!=(ix=fullVersion.indexOf(\";\"))\u0026\u0026(fullVersion=fullVersion.substring(0,ix));-1!=(ix=fullVersion.indexOf(\" \"))\u0026\u0026(fullVersion=fullVersion.substring(0,ix));majorVersion=parseInt(\"\"+fullVersion,10);isNaN(majorVersion)\u0026\u0026(fullVersion=\"\"+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"417891852373462\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=417891852373462\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"417891852373462\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=417891852373462\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":410
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" id=\"krux_cu\"\u003Evar dataLayer=window.dataLayer=window.dataLayer||[];dataLayer.push({user:{referrerDomain:\"",["escape",["macro",23],7],"\",gaSource:\"",["escape",["macro",26],7],"\",gaCampaign:\"",["escape",["macro",27],7],"\",gaMedium:\"",["escape",["macro",28],7],"\",gaContent:\"",["escape",["macro",29],7],"\",gaKeyword:\"",["escape",["macro",30],7],"\",gaBrowser:\"",["escape",["macro",31],7],"\",gaDevice:\"",["escape",["macro",32],7],"\"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=20735850\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E \n\n\n\u003Cimg src=\"\/\/us-gmtdmp.mookie1.com\/t\/v2\/activity?tagid=V2_840001\u0026amp;src.rand=[timestamp]\u0026amp;\" style=\"display:none;\"\u003E\n\n\n ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-1800773\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-1800773\");\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-1800773\/timet0\/timel0+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=1800773;type=timet0;cat=timel0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003Eaert543\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":432
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var u=\"UA-97981691-1\",k=!1,n=function(){var c=document.getElementsByTagName(\"head\")[0],f=document.createElement(\"script\");f.type=\"text\/javascript\";f.src=\"https:\/\/www.googletagmanager.com\/gtag\/js\";f.defer=!0;c.appendChild(f);k=!0;window.dataLayer=window.dataLayer||[];c=function(){dataLayer.push(arguments)};window.gtag=c;c(\"js\",new Date)},l=setInterval(function(){var c=window.gtag;c?(clearInterval(l),p()):k||n()},200);setTimeout(function(){clearInterval(l)},1E4);var p=function(){function c(a){var b=\na.src.match(\/https:\\\/\\\/players\\.brightcove\\.net\\\/(.+)\\\/(.+)\\\/.*videoId=(.+)\/)||a.src.match(\/https:\\\/\\\/players\\.brightcove\\.net\\\/(.+)\\\/(.+)\\\/.*playlistId=(.+)\/);if(null!==b)if(a.getAttribute(\"width\")\u0026\u0026a.getAttribute(\"height\")||!a.getAttribute(\"style\")||a.getAttribute(\"style\").match(\/width: (([0-9]*)(px|%))\/)\u0026\u0026a.getAttribute(\"style\").match(\/height: (([0-9]*)(px|%))\/)){var g=\"\",d=\"\",m;if(m=\/playlistId\/.test(a.src)){d=b[3];m=a.parentNode.parentNode.offsetWidth;var c=a.parentNode.parentNode.offsetHeight;\na.parentNode.setAttribute(\"style\",\"padding: 0px\")}else g=b[3],m=a.offsetWidth,c=a.offsetHeight;b={accountId:b[1],playerId:b[2].split(\"_\")[0],embed:b[2].split(\"_\")[1],videoId:g,playlistId:d,width:m,height:c};a.setAttribute(\"style\",\"width:0; height:0; border:0; border:none\");a.replaceWith(p(b))}else console.log(\"~ BrightCove Player cannot be tracked.  Convert to Advanced player\")}function f(a){if(a.id\u0026\u0026!a._asData){a._asData={eventType:\"not set\",videoTitle:\"not set\",videoPlayer:\"brightcove\",videoLength:\"not set\",\nmilestones:[25,50,75],firstPlay:!0,justSeeked:!1,justFinished:!1,justMuted:!1,justFullScreen:!1,isFullScreen:!1,nonInteraction:null,vidLoaded:!1,hitValue:0,autoplay:a.autoplay||a.parentNode.player.options_.autoplay,isPlaylist:!1,adPlaying:!1};var b=a,g=n,d;for(d in g)b[d]=g[d];a.setListeners()}}function k(){function a(){var a=document.body,b=document.documentElement;return document.height||Math.max(Math.max(a.scrollHeight,b.scrollHeight),Math.max(a.offsetHeight,b.offsetHeight),Math.max(a.clientHeight,\nb.clientHeight))}var b=a();window.setInterval(function(){var g=100,d=Math.max(b,a());d\u003Eb+g\u0026\u0026(b=d,q=document.getElementsByTagName(\"iframe\"),Array.prototype.map.call(q,c),setTimeout(function(){e=document.getElementsByTagName(\"video\");for(var a=0;a\u003Ce.length;a++)e[a].id\u0026\u0026!e[a]._asData\u0026\u0026f(e[a])},2E3))},3E3)}var l=function(){var a=u,b=!1;window.dataLayer\u0026\u00260\u003Cwindow.dataLayer.length\u0026\u0026(b=window.dataLayer.filter(function(b){return\"config\"===b[0]\u0026\u0026b[1]===a}),b=void 0!==b[0]);b||gtag(\"config\",a,{send_page_view:!1});\nreturn function(b){if(\"not set\"!==b.videoTitle){var d=b.hitValue;d=d?{event_category:\"NTG Video\",event_label:b.videoTitle,value:b.hitValue,send_to:a,non_interaction:b.nonInteraction}:{event_category:\"NTG Video\",event_label:b.videoTitle,send_to:a,non_interaction:b.nonInteraction};gtag(\"event\",b.eventType,d)}}}(),n={setMilestones:function(){var a=this,b=window.setInterval(function(){if(!isNaN(a._asData.videoLength)){var c=a._asData.videoLength;a._asData.milestones=a._asData.milestones.map(function(a){return a\/\n100*c});window.clearInterval(b)}},40,a)},setVideoTitle:function(){var a=this.parentNode;try{this._asData.videoTitle=a.player\u0026\u0026a.player.mediainfo?a.player.mediainfo.name||a.player.mediainfo.id:document.location.pathname}catch(b){this._asData.videoTitle=document.location.pathname}},getVideoLength:function(){return Math.round(this.duration)},setVideoLength:function(){var a=this,b=window.setInterval(function(){isNaN(a._asData.videoLength)?a._asData.videoLength=Math.round(a.duration):window.clearInterval(b)},\n20,a)},getCurrentTime:function(){return Math.round(this.currentTime)},isVideo:function(){return this\u0026\u0026\"VIDEO\"===this.nodeName},checkForNextVideo:function(){var a=this._asData.videoTitle;this.setVideoTitle();var b=this._asData.videoTitle;\"not set\"!==a\u0026\u0026a!==b\u0026\u0026(this._asData.firstPlay=!0,this._asData.milestones=[25,50,75],this._asData.videoLength=\"not set\",this._asData.vidLoaded=!1,this._vidLoaded())},_vidLoaded:function(){this._asData.vidLoaded||(this._asData.vidLoaded=!0,this.setVideoTitle(),this.setVideoLength(),\n3!==this._asData.milestones.length\u0026\u0026(this._asData.milestones=[25,50,75]),this.setMilestones(),this._asData.justMuted=this.muted,this._sendHit(\"player loaded\",!0),this.parentNode.player\u0026\u0026this.parentNode.player.playlist\u0026\u00260\u003Cthis.parentNode.player.playlist().length\u0026\u0026(this._asData.isPlaylist=!0),this._asData.justFinished=!1)},_vidPlay:function(){var a=this;if(!h)if(a._asData.vidLoaded){a._asData.justFinished\u0026\u0026(a._asData.justFinished=!1);var b=a._asData.firstPlay?[\"initial click to play\",\"autoplay\"]:\"resume\";\n2===b.length?(a._asData.firstPlay=!1,a._asData.autoplay?a._sendHit(b[1],!0):a._sendHit(b[0],!1)):a._sendHit(b,!1)}else a._vidLoaded(),a._vidPlay()},_vidPause:function(){var a=this;window.setTimeout(function(){h||a._asData.justFinished||a._asData.justFullScreen||a.getCurrentTime()!==a._asData.videoLength\u0026\u0026a._sendHit(\"pause\",!1)},2E3,a)},_vidSeek:function(){h||this._asData.justFinished||this._asData.justFullScreen||(h=!0,window.setTimeout(function(){h=!1},4E3),this._sendHit(\"seek\",!1))},_vidComplete:function(){this._asData.justFinished=\n!0;this._asData.hitValue=100;this._sendHit(\"complete\",!0);this._asData.firstPlay=!0;this._asData.milestones=[25,50,75];this._asData.isPlaylist||(this.setVideoLength(),this.setMilestones())},_vidMilestones:function(){if(!(r||5\u003Ethis.getCurrentTime()||(r=!0,setTimeout(function(){r=!1},2E3),this._asData.firstPlay\u0026\u0026this._vidPlay(),this.currentTime\u003Cthis._asData.milestones[0]||0===this._asData.milestones.length))){var a=this.currentTime;do var b=this._asData.milestones.splice(0,1)[0];while(b\u003Ea);a=b\/this._asData.videoLength*\n100;!Number.isNaN(a)\u0026\u00260===a%25\u0026\u00260\u003Ca\u0026\u0026100\u003E=a\u0026\u0026(this._asData.hitValue=a,this._sendHit(decodeURIComponent(encodeURIComponent(\"milestone \"+a+\"%\")),!0))}},_vidMuted:function(){this.muted||0===this.volume?this._asData.justMuted||(this._asData.justMuted=!0,this._sendHit(\"mute\",!1)):this._asData.justMuted\u0026\u0026(this._asData.justMuted=!1,this._sendHit(\"unmute\",!1))},_vidFullScreen:function(){var a=this;if(document.fullscreenElement||document.mozFullScreen||document.webkitIsFullScreen||document.msFullscreenElement||\ndocument.fullScreen){this._asData.justFullScreen\u0026\u0026window.clearTimeout(b);this._sendHit(\"full screen\",!1);this._asData.justFullScreen=!0;this._asData.isFullScreen=!0;var b=window.setTimeout(function(){a._asData.justFullScreen=!1},3E3,a)}else this._asData.isFullScreen\u0026\u0026(this._asData.justFullScreen\u0026\u0026window.clearTimeout(b),this._asData.isFullScreen=!1,this._asData.justFullScreen=!0,b=window.setTimeout(function(){a._asData.justFullScreen=!1},3E3,a))},_sendHit:function(a,b){this._asData.eventType=a;this._asData.hitValue=\na.match(\/milestone|complete\/i)?this._asData.hitValue:null;this._asData.nonInteraction=b;l(this._asData)},setListeners:function(){this.addEventListener(\"play\",function(){var a=this;window.setTimeout(function(){if(void 0!==a.playerId){var b=document.getElementById(a.playerId);b.classList.contains(\"vjs-ad-playing\")||b.classList.contains(\"ima3-ad-loading\")?(a._asData.adPlaying=!0,a._vidPlay()):a._asData.adPlaying?a._asData.adPlaying=!1:a._vidPlay()}else a._vidPlay()},3E3,a)},!0);this.addEventListener(\"pause\",\nfunction(){if(this.getCurrentTime()!==this._asData.videoLength\u0026\u0026!this._asData.justFullScreen)if(void 0!==this.playerId){var a=document.getElementById(this.playerId);a.classList.contains(\"vjs-ad-playing\")||a.classList.contains(\"vjs-ad-loading\")||this._vidPause()}else this._vidPause()},!0);this.addEventListener(\"seeked\",function(){this._vidSeek()},!0);this.addEventListener(\"ended\",function(){this._vidComplete()},!0);this.addEventListener(\"timeupdate\",function(){this._vidMilestones()},!0);this.addEventListener(\"volumechange\",\nfunction(){this._vidMuted()},!0);this.oncanplay=this.checkForNextVideo;this.parentNode.addEventListener(\"fullscreenchange\",function(){for(var a=this.childNodes,b=0;b\u003Ca.length;b++)if(a[b]._vidFullScreen){a[b]._vidFullScreen();break}},!0);this.parentNode.addEventListener(\"webkitfullscreenchange\",function(){for(var a=this.childNodes,b=0;b\u003Ca.length;b++)if(a[b]._vidFullScreen){a[b]._vidFullScreen();break}},!0);this.parentNode.addEventListener(\"mozfullscreenchange\",function(){for(var a=this.childNodes,\nb=0;b\u003Ca.length;b++)if(a[b]._vidFullScreen){a[b]._vidFullScreen();break}},!0);this.parentNode.addEventListener(\"msfullscreenchange\",function(){for(var a=this.childNodes,b=0;b\u003Ca.length;b++)if(a[b]._vidFullScreen){a[b]._vidFullScreen();break}},!0)}},p=function(a){var b=document.createElement(\"video-js\");b.setAttribute(\"id\",\"myPlayerID\");\"\"===a.playlistId?b.setAttribute(\"data-video-id\",a.videoId):b.setAttribute(\"data-playlist-id\",a.playlistId);b.setAttribute(\"data-account\",a.accountId);b.setAttribute(\"data-player\",\na.playerId);b.setAttribute(\"data-embed\",a.embed);b.setAttribute(\"width\",a.width);b.setAttribute(\"height\",a.height);b.setAttribute(\"controls\",\"\");b.classList.add(\"video-js\");var c=document.createElement(\"script\");c.src=\"https:\/\/players.brightcove.net\/\"+a.accountId+\"\/\"+a.playerId+\"_default\/index.min.js\";document.body.appendChild(c);return b},e,h=!1,r=!1,q=document.getElementsByTagName(\"iframe\");Array.prototype.map.call(q,c);var t=setInterval(function(){e=document.getElementsByTagName(\"video\");0\u003Ce.length\u0026\u0026\n(clearInterval(t),Array.prototype.map.call(e,f))},500);setTimeout(function(){clearInterval(t)},1E4);k()}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":436
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"417891852373462\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=417891852373462\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":438
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-1800773\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-1800773\");\u003C\/script\u003E\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-1800773\/timet0\/ticke0+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=1800773;type=timet0;cat=ticke0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":439
    },{
      "function":"__opt",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-WB22H4T",
      "vtp_gaSettings":["macro",37],
      "tag_id":357
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"Loaded a Page|Loaded A Page"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"google tag manager"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":",4,"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_294($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"[data-social-service], [data-social-service] *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"a.author-name"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"a.breadcrumb-link[href^=\"https:\/\/time.com\/section\/\"] span.breadcrumb-title"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"a.breadcrumb-link[href^=\"https:\/\/time.com\/tag\/\"] span.breadcrumb-title"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":".footer-links a[href=\"https:\/\/time.com\/subscribe-time\"]"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"li.menu-item a[href=\"https:\/\/time.com\/subscribe-time\"]"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"a[href=\"\/subscribe-header-time\"], a[href=\"https:\/\/time.com\/subscribe-header-time\"], a[href^=\"https:\/\/www.magazine.store\/\"]"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.newsletter-callout a[href^=\"https:\/\/cloud.newsletters.time.com\/newsletters\/\"]"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"nav.footer-links a[href^=\"https:\/\/cloud.newsletters.time.com\/newsletters\/\"]"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.header-section a.newsletter-signup"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.feed.inline-recirc *"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.spotlight-story *"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.most-popular-feed *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Inline Newsletter Sign-Up"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.header-recirc *"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.feed[data-title=\"Related Stories\"] *"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.inline-recirc *"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"div.component.feed.bottom-recirc *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_368($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_370($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_371($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_372($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_373($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_374($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"(^$|((^|,)11864053_375($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"a.book-now *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Subscription Fail - Order"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Subscription Fail - Transaction"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Subscription Fail - TimeOut"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Subscription Success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Subscription Fail - Update_Details"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"\/subscribe\/"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"SUBSCRIBE|GIVE A GIFT|STUDENT OFFER|TIME HEALTH"
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":",2,"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"facebook instant",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"\/the-march\/"
    },{
      "function":"_re",
      "arg0":["macro",51],
      "arg1":"[a-z 0-9]*\/davos-2020\/[a-z 0-9]*\/content-from-sompo",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",51],
      "arg1":"https:\/\/partners.time.com\/partners\/kia-motors-europe"
    }],
  "rules":[
    [["if",0],["add",0,3,62,30,33,34,68,69,75,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]],
    [["if",1],["add",1]],
    [["if",1,2],["unless",3],["add",2]],
    [["if",6,7],["add",4]],
    [["if",8,9],["add",5]],
    [["if",9,10],["add",6]],
    [["if",9,11],["add",7]],
    [["if",9,12],["add",8]],
    [["if",9,13],["add",9]],
    [["if",9,14],["add",10]],
    [["if",9,15],["add",11]],
    [["if",9,16],["add",12]],
    [["if",9,17],["add",13]],
    [["if",9,18],["add",14]],
    [["if",9,19],["add",15]],
    [["if",9,20],["add",16]],
    [["if",9,21],["add",17]],
    [["if",22],["add",18]],
    [["if",9,23],["add",19]],
    [["if",9,24],["unless",25],["add",20]],
    [["if",9,26],["add",21]],
    [["if",27,28],["add",22]],
    [["if",27,29],["add",23]],
    [["if",27,30],["add",24]],
    [["if",27,31],["add",25]],
    [["if",27,32],["add",26]],
    [["if",27,33],["add",27]],
    [["if",27,34],["add",28]],
    [["if",9,35],["add",29,35,77]],
    [["if",36],["add",31]],
    [["if",37],["add",31]],
    [["if",38],["add",31]],
    [["if",39],["add",31]],
    [["if",40],["add",31]],
    [["if",9,41,42],["add",32]],
    [["if",44],["add",36]],
    [["if",4,5],["add",63,64]],
    [["if",1,45],["add",65]],
    [["if",0,41],["add",66,67]],
    [["if",0,46],["add",70,73,74]],
    [["if",0,47],["add",71]],
    [["if",48],["add",72]],
    [["if",0,49],["add",76]],
    [["if",5],["unless",4],["block",3,62,65,66,67,71,76]],
    [["if",5],["unless",43],["block",33,34]]]
},
"runtime":[[50,"__cvt_11864053_324",[46,"a"],[41,"g","h"],[52,"b",["require","copyFromDataLayer"]],[52,"c",[51,"",[7,"i"],[22,[20,[2,[15,"i"],"indexOf",[7,"data-"]],0],[46,[36,[0,".dataset.",[2,[2,[2,[2,[15,"i"],"substring",[7,[17,"data-","length"]]],"split",[7,"-"]],"map",[7,[51,"",[7,"j","k"],[22,[20,[15,"k"],0],[46,[36,[15,"j"]]],[46,[36,[0,[2,[2,[15,"j"],"charAt",[7,0]],"toUpperCase",[7]],[2,[15,"j"],"substring",[7,1]]]]]]]]],"join",[7,""]]]]],[46,[22,[20,[15,"i"],"tagName"],[46,[36,".tagName"]],[46,[22,[20,[15,"i"],"innerText"],[46,[36,".innerText"]],[46,[36,[0,[0,".attributes.",[15,"i"]],".value"]]]]]]]]]],[52,"d",[51,"",[7],[36,[0,[17,[15,"g"],"top"],[17,[15,"g"],"parent"]]]]],[52,"e",[51,"",[7],[38,[30,[17,[15,"a"],"getValueDefault"],[17,[15,"a"],"getValueTagName"]],[46,"innerText"],[46,[5,[46,[36,[2,[2,[2,[2,[2,["b",[0,["d"],[17,[15,"g"],"getBottom"]]],"trim",[7]],"split",[7,"\n"]],"join",[7," "]],"split",[7,"\t"]],"join",[7,""]]]]],[9,[46,[36,[30,["b",[0,["d"],[17,[15,"g"],"getBottom"]]],[44]]]]]]]]],[52,"f",[51,"",[7,"i"],[22,[21,[17,[15,"a"],"searchAttr"],"tagName"],[46,[36,[39,[20,[17,[2,[2,[17,[17,[15,"g"],"filter"],"rule"],"map",[7,[51,"",[7,"j"],[38,[17,[15,"j"],"filterOperator"],[46,"contain","not-contain","equal","not-equal"],[46,[5,[46,[36,[39,[19,[2,[15,"i"],"indexOf",[7,[17,[15,"j"],"filterValue"]]],0],true,false]]]],[5,[46,[36,[39,[23,[2,[15,"i"],"indexOf",[7,[17,[15,"j"],"filterValue"]]],0],true,false]]]],[5,[46,[36,[39,[20,[15,"i"],[17,[15,"j"],"filterValue"]],true,false]]]],[5,[46,[36,[39,[21,[15,"i"],[17,[15,"j"],"filterValue"]],true,false]]]]]]]]],"filter",[7,[51,"",[7,"j"],[36,[20,[15,"j"],false]]]]],"length"],0],true,false]]],[46,[36,[39,[20,[2,[17,[17,[15,"g"],"filter"],"tagName"],"toUpperCase",[7]],[15,"i"]],true,false]]]]]],[3,"g",[8,"top","gtm.element","parent","","searchBottom","","getBottom",""]],[38,[17,[15,"a"],"searchAttr"],[46,"custom","tagName"],[46,[5,[46,[43,[15,"g"],"searchBottom",["c",[17,[15,"a"],"searchAttrName"]]],[4]]],[5,[46,[43,[15,"g"],"searchBottom",["c",[17,[15,"a"],"searchAttr"]]],[43,[15,"g"],"filter",[8,"tagName",[17,[15,"a"],"searchTagName"]]],[4]]],[9,[46,[43,[15,"g"],"searchBottom",["c",[17,[15,"a"],"searchAttr"]]],[4]]]]],[22,[17,[15,"a"],"searchFilter"],[46,[43,[15,"g"],"filter",[8,"rule",[17,[15,"a"],"filteringRule"]]]]],[43,[15,"g"],"getBottom",[17,[15,"g"],"searchBottom"]],[38,[30,[17,[15,"a"],"getValueDefault"],[17,[15,"a"],"getValueTagName"]],[46,"inputAttr","innerText"],[46,[5,[46,[43,[15,"g"],"getBottom",["c",[30,[17,[15,"a"],"getAttrNameDefault"],[17,[15,"a"],"getAttrNameTagName"]]]],[4]]],[5,[46,[43,[15,"g"],"getBottom",["c",[30,[17,[15,"a"],"getValueDefault"],[17,[15,"a"],"getValueTagName"]]]],[4]]]]],[42,["b",[0,["d"],".tagName"]],[46],true,[46,[3,"h",["b",[0,["d"],[17,[15,"g"],"searchBottom"]]]],[22,[21,[15,"h"],[44]],[46,[22,[28,[17,[15,"g"],"filter"]],[46,[36,["e"]]],[46,[22,["f",[15,"h"]],[46,[36,["e"]]]]]]]],[43,[15,"g"],"parent",[0,[17,[15,"g"],"parent"],".parentElement"]]]],[36,[44]]],[50,"__cvt_11864053_405",[46,"a"],[52,"b",["require","logToConsole"]],[52,"c",["require","queryPermission"]],[52,"d",["require","injectScript"]],[52,"e",["require","encodeUriComponent"]],["b","data \u003d",[15,"a"]],[52,"f",["e",[17,[15,"a"],"parselySiteId"]]],[52,"g",[0,[0,"https://cdn.parsely.com/keys/",[15,"f"]],"/p.js"]],[52,"h",[51,"",[7],["b","Parse.ly tracker loaded for",[15,"f"]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"i",[51,"",[7],["b","Unable to load Parse.ly tracker"],[2,[15,"a"],"gtmOnFailure",[7]]]],[22,["c","inject_script",[15,"g"]],[46,["d",[15,"g"],[15,"h"],[15,"i"],"parsely"]],[46,[2,[15,"a"],"gtmOnFailure",[7]]]]],[50,"__cvt_11864053_406",[46,"a"],[52,"b",["require","callInWindow"]],[52,"c",["require","copyFromWindow"]],[52,"d",["require","createQueue"]],[52,"e",["require","injectScript"]],[52,"f",["require","setInWindow"]],[52,"g",["require","encodeUri"]],[52,"h",[39,[17,[15,"a"],"consoleLogging"],["require","logToConsole"],[51,"",[7]]]],[52,"i",[51,"",[7,"t"],[55,"u",[15,"t"],[46,[22,[2,[15,"t"],"hasOwnProperty",[7,[15,"u"]]],[46,[36,false]]]]],[36,true]]],[52,"j",[51,"",[7],[41,"t"],[3,"t",["c","Krux"]],[22,[15,"t"],[46,[36,[15,"t"]]]],["f","Krux",[51,"",[7],["b","Krux.q.push",[15,"arguments"]]]],["d","Krux.q"],[36,["c","Krux"]]]],[52,"k",["j"]],[52,"l",[39,[17,[15,"a"],"checkCallback"],[17,[15,"a"],"optCallback"],[17,[15,"a"],"callback"]]],[52,"m",[51,"",[7,"t","u"],[22,[15,"t"],[46,["h","Audience Studio Consent tag failed: ",[15,"t"]]],[46,[22,[15,"u"],[46,["h","Audience Studio Consent tag executed successfully. Request body: ",[15,"u"]]],[46,["h","Audience Studio Consent tag executed successfully"]]]]],[22,[15,"l"],[46,["l",[15,"t"],[15,"u"]]]]]],[52,"n",["g",[0,[0,"https://cdn.krxd.net/controltag/",[17,[15,"a"],"dataId"]],".js"]]],[52,"o",[17,[15,"a"],"nsId"]],[52,"p",[0,"consent:",[17,[15,"a"],"route"]]],[41,"q"],[22,[20,[17,[15,"a"],"route"],"set"],[46,[3,"q",[8,"dc",[17,[15,"a"],"dc"],"al",[17,[15,"a"],"al"],"tg",[17,[15,"a"],"tg"],"cd",[17,[15,"a"],"cd"],"sh",[17,[15,"a"],"sh"],"re",[17,[15,"a"],"re"]]]],[46,[22,[17,[15,"a"],"optflagsCheck"],[46,[3,"q",[8,"dc",[17,[15,"a"],"optDc"],"al",[17,[15,"a"],"optAl"],"tg",[17,[15,"a"],"optTg"],"cd",[17,[15,"a"],"optCd"],"sh",[17,[15,"a"],"optSh"],"re",[17,[15,"a"],"optRe"]]]],[46,[3,"q",[8]]]]]],[22,[17,[15,"a"],"idt"],[46,[43,[15,"q"],"idt",[17,[15,"a"],"idt"]]]],[22,[17,[15,"a"],"dt"],[46,[43,[15,"q"],"dt",[17,[15,"a"],"dt"]]]],[22,[17,[15,"a"],"bk"],[46,[43,[15,"q"],"bk",[17,[15,"a"],"bk"]]]],[22,[17,[15,"a"],"idv"],[46,[43,[15,"q"],"idv",[17,[15,"a"],"idv"]]]],[22,[17,[15,"a"],"pr"],[46,[43,[15,"q"],"dt",[17,[15,"a"],"pr"]]]],[3,"q",[39,["i",[15,"q"]],[44],[15,"q"]]],[52,"r",[51,"",[7],[38,true,[46,[1,[21,[15,"o"],[44]],[21,[15,"q"],[44]]],[21,[15,"o"],[44]],[21,[15,"q"],[44]]],[46,[5,[46,["k",[15,"o"],[15,"p"],[15,"q"],[15,"m"]],[4]]],[5,[46,["k",[15,"o"],[15,"p"],[15,"m"]],[4]]],[5,[46,["k",[15,"p"],[15,"q"],[15,"m"]],[4]]],[9,[46,["k",[15,"p"],[15,"m"]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"s",[51,"",[7],["h","Failed to load Audience Studio Control Tag"],[2,[15,"a"],"gtmOnFailure",[7]]]],["e",[15,"n"],[15,"r"],[15,"s"]]]]
,"permissions":{"__cvt_11864053_324":{"read_data_layer":{"keyPatterns":["gtm.element.*"]}},"__cvt_11864053_405":{"inject_script":{"urls":["https:\/\/cdn.parsely.com\/keys\/*\/p.js"]},"logging":{"environments":"debug"}},"__cvt_11864053_406":{"access_globals":{"keys":[{"key":"Krux","read":true,"write":true,"execute":true},{"key":"Krux.q.push","read":false,"write":false,"execute":true},{"key":"Krux.q","read":true,"write":true,"execute":false}]},"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/cdn.krxd.net\/controltag\/*"]}}}
,"sandboxed_scripts":["__cvt_11864053_324","__cvt_11864053_405","__cvt_11864053_406"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={zf:!0},fa={};try{fa.__proto__=ea;da=fa.zf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=ca,ia=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.m={};this.i=!1;this.o={}};ra.prototype.get=function(a){return this.m["dust."+a]};ra.prototype.set=function(a,b){this.i||(a="dust."+a,this.o.hasOwnProperty(a)||(this.m[a]=b))};ra.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var g=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=g.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.Tb=function(){for(var a=sa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new g(a)};
var ta=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.o.hasOwnProperty(d)||delete c.m[d]}};aa=g.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new g(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,h){if(b[f]){if(b[f].Kb+h>b[f].max)throw Error("Quota exceeded");b[f].Kb+=h}}var b={},c=void 0,d=void 0,e={Sg:function(f){c=f},ne:function(){c&&a(c,1)},Ug:function(f){d=f},ya:function(f){d&&a(d,f)},rh:function(f,h){b[f]=b[f]||{Kb:0};b[f].max=h},pg:function(f){return b[f]&&b[f].Kb||0},reset:function(){b={}},Yf:a};e.onFnConsume=e.Sg;e.consumeFn=e.ne;e.onStorageConsume=e.Ug;e.consumeStorage=e.ya;e.setMax=e.rh;e.getConsumed=e.pg;e.reset=e.reset;e.consume=e.Yf;return e};var xa=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};xa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.i)if(a.F.ya(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.o["dust."+b]=!0}else a.i.set(b,c)};
xa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.ya(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};xa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};xa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ba=function(a){var b=new xa(a.F,a);a.o&&(b.o=a.o);b.S=a.S;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Fa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Fa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},La=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Fa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];La(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){ra.call(this);this.F=a;this.S=b};oa($a,ra);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof pa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.Tb=function(){return new g(sa(this))};$a.prototype.a=function(a,b){a.F.ne();return this.S.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Fa(d)?ab(e,d):d};c.prototype.o=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Aa=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){ra.call(this)};oa(db,ra);db.prototype.Tb=function(){return new g(sa(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof g?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},G=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var ob=function(a,b){var c=[],d=[],e=function(h,k){for(var l=sa(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Tb(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof db){var q={};c.push(h);d.push(q);e(h,q);return q}if(h instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=nb(p[u],b);var v=b?b.F:va(),w=new xa(v);b&&
(w.a=b.a);return f(h.a.apply(h,[w].concat(p)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},nb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(Fa(h)||Ma(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(jb(h)){var n=
new db;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var q=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=ob(this.a(u[v]),b);return f((0,this.i.S)(h,h,u))});c.push(h);d.push(q);e(h,q);return q}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var pb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().ya(a.length+f.length);return new $a(a,function(){return function(h){var k=Ba(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.set(e.get(q),l[q]):k.set(e.get(q),void 0);k.set("arguments",new g(l));var t=bb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.ya(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.ya(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),h=e.length;h+="string"===
typeof f?f.length:1;b.ya(h);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof pa||c instanceof $a||c instanceof g||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=va();this.a=new xa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Qb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.o=function(a,b){var c=Ba(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),xb=new pa("break"),yb=new pa("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return nb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var h=a.get(b);if(h instanceof $a){var k=tb(c);k.unshift(this.i);return h.a.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ba(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Eb=function(){return xb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Hb=function(){return yb},
Ib=function(a,b,c){var d=new g;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Kb=function(a,b){return this.a(a)/this.a(b)},Lb=function(a,b){return this.a(a)==this.a(b)},Mb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Nb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof g||b instanceof $a)for(var h=b.Tb(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=bb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);ya(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof g||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Vb=function(a,b){return this.a(a)>=this.a(b)},Wb=function(a,b){return this.a(a)===this.a(b)},Xb=function(a,b){return this.a(a)!==this.a(b)},Yb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.o(d);if(e instanceof pa)return e},Zb=function(a,b){return this.a(a)<this.a(b)},$b=function(a,b){return this.a(a)<=
this.a(b)},ac=function(a,b){return this.a(a)%this.a(b)},bc=function(a,b){return this.a(a)*this.a(b)},cc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new pa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof g||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Fa(d)||!Fa(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.o(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.o(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Qb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.o(a,b)},zc=function(a){function b(e,f){var h=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(h,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,zb);c(1,Ab);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Kb);c(12,Lb);c(13,Mb);c(47,Ob);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Vb);c(20,Wb);c(21,Xb);c(22,Yb);c(23,Zb);c(24,$b);c(25,ac);c(26,bc);c(27,
cc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.S=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Gc[7]=function(a){return String(a).replace(Oc,Qc)};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=cd[f];if(!h||b.Tc(h))return;c[f]=!0;try{var k=od(h,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.$f(d,k))}catch(y){b.Ee&&b.Ee(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Ab);d.push(q)}return jd&&m?jd.cg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Fa(a[1])&&"macro"===a[1][0]&&jd.Dg(a))return jd.$g(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={te:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Ad:a("convert_case_to"),Bd:a("convert_false_to"),Cd:a("convert_null_to"),Dd:a("convert_true_to"),Ed:a("convert_undefined_to"),Lh:a("debug_mode_metadata"),wa:a("function"),af:a("instance_name"),ef:a("live_only"),hf:a("malware_disabled"),jf:a("metadata"),Mh:a("original_vendor_template_id"),pf:a("once_per_event"),Nd:a("once_per_load"),Vd:a("setup_tags"),Xd:a("tag_id"),Yd:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.m=b;this.a=c};oa(sd,Error);function td(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};oa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Cd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=Ad(a);for(var e=0;e<dd.length;e++){var f=dd[e],h=Bd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=yd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new sd(c,d,h);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,h);Ed(f,b,d,h)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,h){var k={};La(h,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Xd=/^[a-z$_][\w$]*$/i,Yd=/^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
var Zd=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},$d=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Zd(b,"/*")&&(b=b.slice(0,-2));Zd(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ae=/^[a-z0-9-]+$/i,be=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ce=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ae.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!be.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=q;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=$d(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function fe(a){return""+a}
function ge(a,b){var c=[];return c};var he=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ie=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,he(a+"_"+d,e)):(Ea(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var je=function(a,b){E(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ie("AssertApiSubject",c)};var ke=function(a,b){E(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ie("AssertThatSubject",c)};var le=function(a){var b;return b};var me=function(a){var b;return b};var ne=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var oe=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var pe=function(a){E(this.getName(),["message:?string"],arguments);};var qe=function(a,b){E(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var re=function(){return(new Date).getTime()};var se=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Mf.apply(null,Array.prototype.slice.call(arguments,1))};var te=!1;var ue={Ah:'',jg:''},ve=function(){se(this,"read_container_data");var a=new db;a.set("containerId",'GTM-P59JVDP');a.set("version",'107');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",Oa(ue.Ah));a.set("environmentMode",Oa(ue.jg));a.i=!0;return a};var we=function(a){return null===a?"null":a instanceof g?"array":a instanceof $a?"function":typeof a};var xe=function(a){return Na(ob(a,this.i))};var ye=function(a){return Number(ob(a,this.i))};var ze=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ae=function(a,b,c){var d=null,e=!1;return e?d:null};var Be="floor ceil round max min abs pow sqrt".split(" ");function Ce(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(ob(arguments[d],c));return a.apply(null,b)}}function De(){for(var a=Math,b={},c=0;c<Be.length;c++){var d=Be[c];a.hasOwnProperty(d)&&(b[d]=Ce(a[d].bind(a)))}return b};var Ee=function(){var a={};return{qg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},sh:function(b,c){a[b]=c},reset:function(){a={}}}},Fe=function(a,b){E(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ge=function(){this.a={}};Ge.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ge.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?he(a,b):ie(a,b)};function He(){var a={};return a};var D=window,H=document,Ie=navigator,Je=H.currentScript&&H.currentScript.src,Ke=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Le=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Me=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Le(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Ne=function(){if(Je){var a=Je.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oe=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Le(c,b);void 0!==a&&(c.src=a);return c},Pe=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qe=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Re=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){D.setTimeout(a,0)},Se=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Te=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ue=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ve=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},We=function(a){Ie.sendBeacon&&Ie.sendBeacon(a)||Pe(a)},Xe=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ze=function(a){return Ye?H.querySelectorAll(a):null},$e=function(a,b){if(!Ye)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},af=!1;if(H.querySelectorAll)try{var bf=H.querySelectorAll(":root");bf&&1==bf.length&&bf[0]==H.documentElement&&(af=!0)}catch(a){}var Ye=af;var M={sa:"_ee",yc:"event_callback",zb:"event_timeout",D:"gtag.config",Z:"allow_ad_personalization_signals",zc:"restricted_data_processing",Ua:"allow_google_signals",aa:"cookie_expires",yb:"cookie_update",Va:"session_duration",fa:"user_properties"};M.se=[M.Z,M.Ua,M.yb];M.ye=[M.aa,M.zb,M.Va];var sf=/[A-Z]+/,tf=/\s/,uf=function(a){if(r(a)&&(a=Qa(a),!tf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(sf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},wf=function(a){for(var b={},c=0;c<a.length;++c){var d=uf(a[c]);d&&(b[d.id]=d)}vf(b);var e=[];La(b,function(f,h){e.push(h)});return e};
function vf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gd={},Q=null,xf=Math.random();Gd.w="GTM-P59JVDP";Gd.Eb="2q2";var yf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},zf="www.googletagmanager.com/gtm.js";var Af=zf,Bf=null,Cf=null,Df=null,Ef="//www.googletagmanager.com/a?id="+Gd.w+"&cv=107",Ff={},Gf={},Hf=function(){var a=Q.sequence||0;Q.sequence=a+1;return a};var If={},Jf=function(a,b){If[a]=If[a]||[];If[a][b]=!0},Kf=function(a){for(var b=[],c=If[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Lf=function(){return"&tc="+fd.filter(function(a){return a}).length},Of=function(){Mf||(Mf=D.setTimeout(Nf,500))},Nf=function(){Mf&&(D.clearTimeout(Mf),Mf=void 0);void 0===Pf||Qf[Pf]&&!Rf&&!Sf||(Tf[Pf]||Uf.Fg()||0>=Vf--?(Jf("GTM",1),Tf[Pf]=!0):(Uf.jh(),Pe(Wf()),Qf[Pf]=!0,Xf=Yf=Sf=Rf=""))},Wf=function(){var a=Pf;if(void 0===a)return"";var b=Kf("GTM"),c=Kf("TAGGING");return[Zf,Qf[a]?"":"&es=1",$f[a],b?"&u="+b:"",c?"&ut="+c:"",Lf(),Rf,Sf,Yf,Xf,"&z=0"].join("")},ag=function(){return[Ef,"&v=3&t=t",
"&pid="+Ha(),"&rv="+Gd.Eb].join("")},bg="0.005000">Math.random(),Zf=ag(),cg=function(){Zf=ag()},Qf={},Rf="",Sf="",Xf="",Yf="",Pf=void 0,$f={},Tf={},Mf=void 0,Uf=function(a,b){var c=0,d=0;return{Fg:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},jh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Vf=1E3,dg=function(a,b){if(bg&&!Tf[a]&&Pf!==a){Nf();Pf=a;Xf=Rf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$f[a]="&e="+c+"&eid="+a;Of()}},eg=function(a,b,c){if(bg&&
!Tf[a]&&b){a!==Pf&&(Nf(),Pf=a);var d,e=String(b[rd.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Rf=Rf?Rf+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(hd[h]?"1":"2")+d;Xf=Xf?Xf+"."+k:"&ti="+k;Of();2022<=Wf().length&&Nf()}},fg=function(a,b,c){if(bg&&!Tf[a]){a!==Pf&&(Nf(),Pf=a);var d=c+b;Sf=
Sf?Sf+"."+d:"&epr="+d;Of();2022<=Wf().length&&Nf()}};var gg={},hg=new Ia,ig={},jg={},mg={name:"dataLayer",set:function(a,b){G(Ya(a,b),ig);kg()},get:function(a){return lg(a,2)},reset:function(){hg=new Ia;ig={};kg()}},lg=function(a,b){if(2!=b){var c=hg.get(a);if(bg){var d=ng(a);c!==d&&Jf("GTM",5)}return c}return ng(a)},ng=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:pg(d)},pg=function(a){for(var b=ig,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var rg=function(a,b){jg.hasOwnProperty(a)||(hg.set(a,b),G(Ya(a,b),ig),kg())},kg=function(a){La(jg,function(b,c){hg.set(b,c);G(Ya(b,void 0),ig);G(Ya(b,c),ig);a&&delete jg[b]})},sg=function(a,b,c){gg[a]=gg[a]||{};var d=1!==c?ng(b):hg.get(b);"array"===hb(d)||"object"===hb(d)?gg[a][b]=G(d):gg[a][b]=d},tg=function(a,b){if(gg[a])return gg[a][b]},ug=function(a,b){gg[a]&&delete gg[a][b]};var vg=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===wg()||d||"http:"!=D.location.protocol?a:b)+c},wg=function(){var a=Ne(),b;if(1===a)a:{var c=Af;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Lg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Mg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ng={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Og="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Rg=function(a){var b=lg("gtm.whitelist");b&&Jf("GTM",9);var c=b&&Wa(Pa(b),Mg),d=lg("gtm.blacklist");d||(d=lg("tagTypeBlacklist"))&&Jf("GTM",3);
d?Jf("GTM",8):d=[];Pg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Jf("GTM",2);var e=d&&Wa(Pa(d),Ng),f={};return function(h){var k=h&&h[rd.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Gf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var q=
0;q<l.length;q++){if(0>C(c,l[q])){Jf("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ja(e,l||[]);u&&Jf("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ja(e,Og));return f[k]=v}},Pg=function(){return Lg.test(D.location&&D.location.hostname)};var Sg={$f:function(a,b){b[rd.Ad]&&"string"===typeof a&&(a=1==b[rd.Ad]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Cd)&&null===a&&(a=b[rd.Cd]);b.hasOwnProperty(rd.Ed)&&void 0===a&&(a=b[rd.Ed]);b.hasOwnProperty(rd.Dd)&&!0===a&&(a=b[rd.Dd]);b.hasOwnProperty(rd.Bd)&&!1===a&&(a=b[rd.Bd]);return a}};var Tg={active:!0,isWhitelisted:function(){return!0}},Ug=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var Vg=function(){};var Wg=!1,Xg=0,Yg=[];function Zg(a){if(!Wg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Wg=!0;for(var e=0;e<Yg.length;e++)I(Yg[e])}Yg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function $g(){if(!Wg&&140>Xg){Xg++;try{H.documentElement.doScroll("left"),Zg()}catch(a){D.setTimeout($g,50)}}}var ah=function(a){Wg?a():Yg.push(a)};var bh={},ch={},dh=function(a,b,c,d){if(!ch[a]||yf[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return ch[a].tags.push(e)-1},eh=function(a,b,c,d){if(ch[a]){var e=ch[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function fh(a){for(var b=bh[a]||[],c=0;c<b.length;c++)b[c]();bh[a]={push:function(d){d(Gd.w,ch[a])}}}
var ih=function(a,b,c){ch[a]={tags:[]};Da(b)&&gh(a,b);c&&D.setTimeout(function(){return fh(a)},Number(c));return hh(a)},gh=function(a,b){bh[a]=bh[a]||[];bh[a].push(Ta(function(){return I(function(){b(Gd.w,ch[a])})}))};function hh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&fh(a)})},Kf:function(){d=!0;b>=c&&fh(a)}}};var jh=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Q._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ea(mg.get("gtm.start"))?mg.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Cf-b)}}};var nh={},oh=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},ph=!1;
var qh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Jf("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}jh();return D[b]},rh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=oh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var th=function(a){},sh=function(){return D.GoogleAnalyticsObject||"ga"};var vh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var wh=/:[0-9]+$/,xh=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ah=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=yh(a.protocol)||yh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(wh,"").toLowerCase());return zh(a,b,c,d,e)},zh=function(a,b,c,d,e){var f,h=yh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Bh(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(wh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Jf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=xh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},yh=function(a){return a?a.replace(":",
"").toLowerCase():""},Bh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Ch=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Jf("TAGGING",1),c="/"+c);var d=b.hostname.replace(wh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Hh=function(){return!1},Jh=function(a){},
Kh=function(){var a={};return function(b,c,d){}};function Ih(a,b,c){b.containerId=Gd.w;var d={type:a,value:b};c.length&&(d.trace=c);return d};function Lh(a,b,c,d){var e=fd[a],f=Mh(a,b,c,d);if(!f)return null;var h=nd(e[rd.Vd],c,[]);if(h&&h.length){var k=h[0];f=Lh(k.index,{C:f,B:1===k.te?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mh(a,b,c,d){function e(){if(f[rd.hf])k();else{var w=od(f,c,[]),y=dh(c.id,String(f[rd.wa]),Number(f[rd.Xd]),w[rd.jf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ra()-z;eg(c.id,fd[a],"5");eh(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ra()-z;eg(c.id,fd[a],"6");eh(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;eg(c.id,f,"1");var A=function(B){var F=Ra()-z;Jh(B);eg(c.id,f,"7");eh(c.id,y,"exception",F);x||(x=!0,k())};var z=Ra();try{md(w,c)}catch(B){A(B)}}}var f=fd[a],h=b.C,k=b.B,l=b.terminate;if(c.Tc(f))return null;var m=nd(f[rd.Yd],c,[]);if(m&&m.length){var n=m[0],q=Lh(n.index,{C:h,B:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.te?l:q}if(f[rd.Nd]||f[rd.pf]){var t=f[rd.Nd]?gd:c.uh,p=h,u=k;if(!t[a]){e=Ta(e);var v=Nh(a,t,e);h=v.C;k=v.B}return function(){t[a](p,u)}}return e}
function Nh(a,b,c){var d=[],e=[];b[a]=Oh(d,e,c);return{C:function(){b[a]=Ph;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=Qh;for(var f=0;f<e.length;f++)e[f]()}}}function Oh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ph(a){a()}function Qh(a,b){b()};var Th=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.qb[d]){var e=fd[d];var f=b.add();try{var h=Lh(d,{C:f,B:f,terminate:f},a,d);h?c.push({Pe:d,Ke:pd(e),Qb:h}):(Rh(d,a),f())}catch(l){f()}}b.Kf();c.sort(Sh);for(var k=0;k<c.length;k++)c[k].Qb();return 0<c.length};function Sh(a,b){var c,d=b.Ke,e=a.Ke;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Pe,k=b.Pe;f=h>k?1:h<k?-1:0}return f}
function Rh(a,b){if(!bg)return;var c=function(d){var e=b.Tc(fd[d])?"3":"4",f=nd(fd[d][rd.Vd],b,[]);f&&f.length&&c(f[0].index);eg(b.id,fd[d],e);var h=nd(fd[d][rd.Yd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Uh=!1,Vh=function(a,b,c,d,e){if("gtm.js"==b){if(Uh)return!1;Uh=!0}dg(a,b);var f=ih(a,d,e);sg(a,"event",1);sg(a,"ecommerce",1);sg(a,"gtm");var h={id:a,name:b,Tc:Rg(c),qb:[],uh:[],Ee:function(n){Jf("GTM",6);Jh(n)}};h.qb=Cd(h);var k=Th(h,f);"gtm.js"!==b&&"gtm.sync"!==b||th(Gd.w);if(!k)return k;for(var l=0;l<h.qb.length;l++)if(h.qb[l]){var m=fd[l];if(m&&!yf[String(m[rd.wa])])return!0}return!1};var Xh=/^https?:\/\/www\.googletagmanager\.com/;function Yh(){var a;return a}function $h(a,b){}
function Zh(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function ai(){var a=!1;return a};var bi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.C=function(){};this.B=function(){}},ci=function(a){var b=new bi;b.eventModel=a;return b},di=function(a,b){a.targetConfig=b;return a},ei=function(a,b){a.containerConfig=b;return a},fi=function(a,b){a.a=b;return a},gi=function(a,b){a.globalConfig=b;return a},hi=function(a,b){a.C=b;return a},ii=function(a,b){a.B=b;return a};
bi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ji=function(a){function b(e){La(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];La(c,function(e){d.push(e)});return d};var ki=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},ni=function(a,b,c,d){var e=li(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mi(e,function(f){return f.Ob},b);if(1===e.length)return e[0].id;e=mi(e,function(f){return f.rb},c);return e[0]?e[0].id:void 0}};
function oi(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ki(b,e).indexOf(c)}
var ri=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var q=pi(),t=void 0,p=0,u=0;u<q.length;++u){var v=
"none"!=q[u]?q[u]:void 0;if(e){c.domain=v;try{e(a,c)}catch(w){t=w;continue}}p+=1;if(!qi(v,l)&&oi(f+(v?"; domain="+v:""),a,b))return!0}if(t&&!p)throw t;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!qi(k,l)&&oi(f,a,b)},si=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return ri(a,b,h,f)};
function mi(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function li(a,b){for(var c=[],d=ki(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Ob:1*k[0]||1,rb:1*k[1]||1}))}}return c}
var ti=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ui=/(^|\.)doubleclick\.net$/i,qi=function(a,b){return ui.test(document.location.hostname)||"/"===b&&ti.test(a)},pi=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ui.test(e)||ti.test(e)||a.push("none");return a};function vi(){for(var a=wi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function xi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var wi,yi;function zi(a){wi=wi||xi();yi=yi||vi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(wi[l],wi[m],wi[n],wi[q])}return b.join("")}
function Ai(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=yi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}wi=wi||xi();yi=yi||vi();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Bi;var Fi=function(){var a=Ci,b=Di,c=Ei(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qe(H,"mousedown",d);Qe(H,"keyup",d);Qe(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Gi=function(a,b,c){for(var d=Ei().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==H.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ua(e,h.callback())}}return e},Ei=function(){var a=Ke("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Hi=/(.*?)\*(.*?)\*(.*)/,Ii=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ji=/^(?:www\.|m\.|amp\.)+/,Ki=/([^?#]+)(\?[^#]*)?(#.*)?/;function Li(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Ni=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(zi(String(d))))}var e=b.join("*");return["1",Mi(e),e].join("*")},Mi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Bi)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Bi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Bi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Pi=function(){return function(a){var b=Ch(D.location.href),c=b.search.replace("?",""),d=xh(c,"_gl",!1,!0)||"";a.query=Oi(d)||{};var e=Ah(b,"fragment").match(Li("_gl"));a.fragment=Oi(e&&e[3]||"")||{}}},Qi=function(){var a=Pi(),b=Ei();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},Oi=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Hi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Mi(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Ai(t[p+1]);return q}}}}catch(u){}};
function Ri(a,b,c,d){function e(n){var q=n,t=Li(a).exec(q),p=q;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Ki.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Si(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Gi(b,1,c),e=Gi(b,2,c),f=Gi(b,3,c);if(Va(d)){var h=Ni(d);c?Ti("_gl",h,a):Ui("_gl",h,a,!1)}if(!c&&Va(e)){var k=Ni(e);Ui("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Ui(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Ti(m,n,q);break a}}"string"==typeof q&&Ri(m,n,q,void 0)}}
function Ui(a,b,c,d){if(c.href){var e=Ri(a,b,c.href,void 0===d?!1:d);vh.test(e)&&(c.href=e)}}
function Ti(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Ri(a,b,c.action);vh.test(m)&&(c.action=m)}}}
var Ci=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Si(e,e.hostname)}}catch(h){}},Di=function(a){try{if(a.action){var b=Ah(Ch(a.action),"host");Si(a,b)}}catch(c){}},Vi=function(a,b,c,d){Fi();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};Ei().decorators.push(f)},Wi=function(){var a=H.location.hostname,
b=Ii.exec(H.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ji,""),l=e.replace(Ji,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Xi=function(a,b){return!1===a?!1:a||b||Wi()};var Yi={};var Zi=/^\w+$/,$i=/^[\w-]+$/,aj=/^~?[\w-]+$/,bj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function cj(a){return a&&"string"==typeof a&&a.match(Zi)?a:"_gcl"}
var ej=function(){var a=Ch(D.location.href),b=Ah(a,"query",!1,void 0,"gclid"),c=Ah(a,"query",!1,void 0,"gclsrc"),d=Ah(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||xh(e,"gclid",!1,void 0);c=c||xh(e,"gclsrc",!1,void 0)}return dj(b,c,d)},dj=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match($i))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Yi.gtm_3pds?0:Yi.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},gj=function(a){var b=ej();fj(b,a)};
function fj(a,b,c){function d(q,t){var p=hj(q,e);p&&si(p,t,h,f,l,!0)}b=b||{};var e=cj(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Oa?7776E3:b.Oa;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.ei?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var jj=function(a,b,c,d,e){for(var f=Qi(),h=cj(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==bj[l]){var m=hj(l,h),n=f[m];if(n){var q=Math.min(ij(n),Ra()),t;b:{for(var p=q,u=ki(m,H.cookie),v=0;v<u.length;++v)if(ij(u[v])>p){t=!0;break b}t=!1}t||si(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};fj(dj(f.gclid,f.gclsrc),w)},hj=function(a,b){var c=bj[a];if(void 0!==c)return b+c},ij=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function kj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var lj=function(a,b,c,d,e){if(Fa(b)){var f=cj(e);Vi(function(){for(var h={},k=0;k<a.length;++k){var l=hj(a[k],f);if(l){var m=ki(l,H.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},mj=function(a){return a.filter(function(b){return aj.test(b)})},nj=function(a,b){for(var c=cj(b&&b.prefix),d={},e=0;e<a.length;e++)bj[a[e]]&&(d[a[e]]=bj[a[e]]);La(d,function(f,h){var k=ki(c+h,H.cookie);if(k.length){var l=k[0],m=ij(l),n={};n[f]=[kj(l)];fj(n,b,m)}})};function oj(){var a=ej(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Q.reported_gclid||(Q.reported_gclid={});d=Q.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));We("https://www.google.com"+e)}}};var pj;if(3===Gd.Eb.length)pj="g";else{var qj="G";pj=qj}
var rj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pj,OPT:"o"},sj=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=rj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Eb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Gd.Eb+e};var Cj=function(){for(var a=Ie.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Fj=function(a,b,c,d){var e=Dj(b);return ni(a,e,Ej(c),d)},Gj=function(a,b,c,d){var e=""+Dj(c),f=Ej(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Dj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ej=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Hj=["1"],Ij={},Mj=function(a,b,c,d){var e=Jj(a);Ij[e]||Kj(e,b,c)||(Lj(e,Cj(),b,c,d),Kj(e,b,c))};function Lj(a,b,c,d,e){var f=Gj(b,"1",d,c);si(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function Kj(a,b,c){var d=Fj(a,b,c,Hj);d&&(Ij[a]=d);return d}function Jj(a){return(a||"_gcl")+"_au"};var Nj=function(){for(var a=[],b=H.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({od:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].od]||(f[a[h].od]=[]),f[a[h].od].push({timestamp:k[1],ng:k[2]}))}return f};var Oj=/^\d+\.fls\.doubleclick\.net$/;function Pj(a){var b=Ch(D.location.href),c=Ah(b,"host",!1);if(c&&c.match(Oj)){var d=Ah(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Qj(a,b){if("aw"==a||"dc"==a){var c=Pj("gcl"+a);if(c)return c.split(".")}var d=cj(b);if("_gcl"==d){var e;e=ej()[a]||[];if(0<e.length)return e}var f=hj(a,d),h;if(f){var k=[];if(H.cookie){var l=ki(f,H.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=kj(l[m]);n&&-1===C(k,n)&&k.push(n)}h=mj(k)}else h=k}else h=k}else h=[];return h}
var Rj=function(){var a=Pj("gac");if(a)return decodeURIComponent(a);var b=Nj(),c=[];La(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].ng);f=mj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Sj=function(a,b,c,d,e){Mj(b,c,d,e);var f=Ij[Jj(b)],h=ej().dc||[],k=!1;if(f&&0<h.length){var l=Q.joined_au=Q.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk";q=q+"?gclid="+h[n]+"&auiddc="+f;We(q);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=Jj(b),
p=Ij[t];p&&Lj(t,p,c,d,e)}};var Mk={},Nk=["G","GP"];Mk.Qe="";var Ok=Mk.Qe.split(",");function Pk(){var a=Q;return a.gcq=a.gcq||new Qk}
var Rk=function(a,b,c){Pk().register(a,b,c)},Sk=function(a,b,c,d){Pk().push("event",[b,a],c,d)},Tk=function(a,b){Pk().push("config",[a],b)},Uk={},Vk=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Wk=function(a,b,c,d,e){this.type=a;this.m=b;this.P=c||"";this.a=d;this.i=e},Qk=function(){this.i={};this.m={};this.a=[]},Xk=function(a,b){var c=uf(b);return a.i[c.containerId]=a.i[c.containerId]||new Vk},Yk=function(a,b,c,d){if(d.P){var e=Xk(a,d.P),
f=e.m;if(f){var h=G(c),k=G(e.targetConfig[d.P]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),q=lg("gtm.uniqueEventId"),t=uf(d.P).prefix,p=ii(hi(gi(fi(ei(di(ci(h),k),l),m),n),function(){fg(q,t,"2");}),function(){fg(q,t,"3");});try{fg(q,t,"1");f(d.P,b,d.m,p)}catch(u){
fg(q,t,"4");}}}};
Qk.prototype.register=function(a,b,c){if(3!==Xk(this,a).status){Xk(this,a).m=b;Xk(this,a).status=3;c&&(Xk(this,a).i=c);var d=uf(a),e=Uk[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,h=d.prefix.toUpperCase();Q[d.containerId]._spx&&(h=h.toLowerCase());var k=lg("gtm.uniqueEventId"),l=h,m=Ra()-f;if(bg&&!Tf[k]){k!==Pf&&(Nf(),Pf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);Yf=Yf?Yf+","+n:"&cl="+n}delete Uk[d.containerId]}this.flush()}};
Qk.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);a:if(c){var f=uf(c),h;if(h=f){var k;if(k=1===Xk(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(Xk(this,c).status=2,this.push("require",[],f.containerId),Uk[f.containerId]=Ra(),vg()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Me(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new Wk(a,e,c,b,d));d||this.flush()};
Qk.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Xk(this,c.P).status&&!a)return;break;case "set":La(c.a[0],function(l,m){G(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[M.Zb];delete d[M.Zb];var f=Xk(this,c.P),h=uf(c.P),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.P]={});f.a&&e||Yk(this,M.D,d,c);f.a=!0;delete d[M.sa];k?G(d,f.containerConfig):G(d,f.targetConfig[c.P]);break;
case "event":Yk(this,c.a[1],c.a[0],c)}this.a.shift()}};var Zk=function(a,b){return!0};var $k=function(a,b){var c;E(this.getName(),["path:!string"],[a]);se(this,"access_globals","execute",a);for(var d=a.split("."),e=D,f=e[d[0]],h=1;f&&h<d.length;h++)e=f,f=f[d[h]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(ob(arguments[l],this.i));c=nb((0,this.i.S)(f,e,k),this.i);return c};var al=function(a){};var bl=function(a){var b;E(this.getName(),["path:!string"],arguments);se(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return nb(b,this.i)};var cl=function(a,b){var c=null;return nb(c,this.i)};var dl=function(a){var b;E(this.getName(),["path:!string"],arguments);se(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Da(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return nb(b,
this.i)};var el=function(a){var b;return b};var fl=function(a,b){b=void 0===b?!0:b;var c;return c};var gl=function(a,b){var c;return c};var hl=function(a,b){var c;return c};var il=function(a){var b="";return b};var jl=function(a){var b="";return b};var kl=function(a,b){};var ll={},ml=function(a,b,c,d){E(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);se(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Aa(e)},h=function(){c instanceof $a&&c.Aa(e)};if(!d){Me(a,f,h);return}var k=d;ll[k]?(ll[k].onSuccess.push(f),ll[k].onFailure.push(h)):(ll[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=ll[k].onSuccess,m=0;m<l.length;m++)I(l[m]);l.push=function(n){I(n);
return 0}},h=function(){for(var l=ll[k].onFailure,m=0;m<l.length;m++)I(l[m]);ll[k]=null},Me(a,f,h));};var nl=function(){return!1},ol={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var pl=function(){try{se(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=ob(a[b],this.i);console.log.apply(console,a);};var ql=function(a,b){var c=!1;E(this.getName(),["permission:!string"],[a]);for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;++e)d[e]=ob(d[e],this.i);d.unshift(this);try{se.apply(null,d),c=!0}catch(f){return!1}return c};var rl=function(a,b,c){};var sl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var tl=function(a,b,c){E(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);se(this,"access_globals","readwrite",a);var d=a.split("."),e=D,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=ob(b,this.i),!0;return!1};var ul=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var vl=function(a,b,c){var d=this;};var wl=function(a){var b;return b};function xl(a){}
function yl(a,b){var c;E(this.getName(),["key:!string","dataLayerVersion:?number"],arguments),se(this,"read_data_layer",a),c=lg(a,b||2);return nb(c,this.i)}function zl(){var a="";return a}
function Al(){var a="";return a}
var Dc=function(){var a=new Ge;vg()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",kl),a.add("injectScript",ml));var b=rl;a.add("addEventCallback",xl);a.add("aliasInWindow",Zk);a.add("assertThat",ke);a.add("assertApi",je);a.add("callInWindow",$k);a.add("callLater",al);a.add("copyFromDataLayer",
yl);a.add("copyFromWindow",bl);a.add("createQueue",dl);a.add("createArgumentsQueue",cl);a.add("decodeUri",le);a.add("decodeUriComponent",me);a.add("encodeUri",ne);a.add("encodeUriComponent",oe);a.add("fail",pe);a.add("generateRandom",qe);a.add("getCookieValues",fl);a.add("getQueryParameters",gl);a.add("getReferrerQueryParameters",hl);a.add("getReferrerUrl",il);a.add("getTimestamp",re);a.add("getType",we);a.add("getUrl",jl);a.add("logToConsole",pl);a.add("makeInteger",xe);a.add("makeNumber",ye);a.add("makeString",
ze);a.add("makeTableMap",Ae);a.add("Math",De());a.add("mock",Fe);a.add("queryPermission",ql);a.add("readCharacterSet",zl);a.add("readTitle",Al);a.add("sendPixel",b);a.add("setCookie",sl);a.add("setInWindow",tl);a.add("sha256",vl);a.add("TestHelper",He());return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;function Bl(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;Cl();bd=function(e,f,h){Dl(f);var k=new db;La(f,function(n,q){k.set(n,nb(q))});Bc.a.a.o=xd();var l={Mf:Ld(e),eventId:void 0!==h?h.id:void 0};Hh()&&(l.Y={Yc:Ee(),kb:{},mb:Kh()});var m=Cc(l,[e,k]);Bc.a.a.o=void 0;m instanceof pa&&"return"===m.a&&(m=m.i);return ob(m)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Fa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Qb(d)}}
function Dl(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){I(b)});Da(c)&&(a.gtmOnFailure=function(){I(c)})}function Cl(){var a=Bc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function El(a){void 0!==a&&La(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Gf[e]=Gf[e]||[];Gf[e].push(b)}})};var Fl=["GP","G"],Gl="G".split(/,/);var Hl=!1;Hl=!0;var Il=null,Jl={},Kl={},Ll;function Ml(a,b){var c={event:a};b&&(c.eventModel=G(b),b[M.yc]&&(c.eventCallback=b[M.yc]),b[M.zb]&&(c.eventTimeout=b[M.zb]));return c}
var Sl={config:function(a){},event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=Ml(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=G(a[1]):3==a.length&&r(a[1])&&(b={},jb(a[2])||Fa(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Tl={policy:!0};var Ul=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Wl=function(a){var b=Vl(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Xl=!1,Yl=[];function Zl(){if(!Xl){Xl=!0;for(var a=0;a<Yl.length;a++)I(Yl[a])}}var $l=function(a){Xl?I(a):Yl.push(a)};var om=function(a){if(nm(a))return a;this.a=a};om.prototype.ug=function(){return this.a};var nm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};om.prototype.getUntrustedUpdateValue=om.prototype.ug;var pm=[],qm=!1,rm=function(a){return D["dataLayer"].push(a)},sm=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function tm(a){var b=a._clear;La(a,function(f,h){"_clear"!==f&&(b&&rg(f,void 0),rg(f,h))});Bf||(Bf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Hf(),a["gtm.uniqueEventId"]=d,rg("gtm.uniqueEventId",d));Df=c;var e=
um(a);Df=null;switch(c){case "gtm.init":Jf("GTM",19),e&&Jf("GTM",20)}return e}function um(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Q.zones;d=e?e.checkState(Gd.w,c):Tg;return d.active?Vh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function vm(){for(var a=!1;!qm&&0<pm.length;){qm=!0;delete ig.eventModel;kg();var b=pm.shift();if(null!=b){var c=nm(b);if(c){var d=b;b=nm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=lg(h,1);if(Fa(k)||jb(k))k=G(k);jg[h]=k}}try{if(Da(b))try{b.call(mg)}catch(u){}else if(Fa(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=lg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(u){}}}else{if(Ma(b)){a:{if(b.length&&r(b[0])){var p=Sl[b[0]];if(p&&(!c||!Tl[b[0]])){b=p(b);break a}}b=void 0}if(!b){qm=!1;continue}}a=tm(b)||a}}finally{c&&kg(!0)}}qm=!1}return!a}function wm(){var a=vm();try{Ul(D["dataLayer"],Gd.w)}catch(b){}return a}
var ym=function(){var a=Ke("dataLayer",[]),b=Ke("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ah(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});$l(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Q.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new om(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);pm.push.apply(pm,d);if(300<
this.length)for(Jf("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return vm()&&h};pm.push.apply(pm,a.slice(0));xm()&&I(wm)},xm=function(){var a=!0;return a};var zm={};zm.Ab=new String("undefined");
var Am=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===zm.Ab?b:a[d]);return c.join("")}};Am.prototype.toString=function(){return this.a("undefined")};Am.prototype.valueOf=Am.prototype.toString;zm.xf=Am;zm.Fc={};zm.cg=function(a){return new Am(a)};var Bm={};zm.kh=function(a,b){var c=Hf();Bm[c]=[a,b];return c};zm.oe=function(a){var b=a?0:1;return function(c){var d=Bm[c];if(d&&"function"===typeof d[b])d[b]();Bm[c]=void 0}};zm.Dg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};zm.$g=function(a){if(a===zm.Ab)return a;var b=Hf();zm.Fc[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};zm.Ng=function(a,b,c){a instanceof zm.xf&&(a=a.a(zm.kh(b,c)),b=Ca);return{Rc:a,C:b}};var Cm=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Se(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Dm=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Em=function(a,b,c){Dm(a)[b]=c},Fm=function(a,b,c,d){var e=Dm(a),f=Sa(e,b,d);e[b]=c(f)},Gm=function(a,b,c){var d=Dm(a);return Sa(d,b,c)};var Hm=["input","select","textarea"],Im=["button","hidden","image","reset","submit"],Jm=function(a){var b=a.tagName.toLowerCase();return!Ga(Hm,function(c){return c===b})||"input"===b&&Ga(Im,function(c){return c===a.type.toLowerCase()})?!1:!0},Km=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):Ve(a,["form"],100)},Lm=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Jm(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Mm=!!D.MutationObserver,Nm=void 0,Om=function(a){if(!Nm){var b=function(){var c=H.body;if(c)if(Mm)(new MutationObserver(function(){for(var e=0;e<Nm.length;e++)I(Nm[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qe(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Nm.length;e++)I(Nm[e])}))})}};Nm=[];H.body?b():I(b)}Nm.push(a)};
var Zm=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};Jf("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},$m=function(a){var b=Zm(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},an=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var bn=[],cn=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),dn=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<bn.length;f++)if(!bn[f])return bn[f]=d,f;return bn.push(d)-1},en=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ra()};I(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=$m(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},fn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(cn){var e=!1;I(function(){e||en(a,b,c)()});return dn(function(f){e=!0;for(var h={Ra:0};h.Ra<f.length;h={Ra:h.Ra},h.Ra++)I(function(k){return function(){return a(f[k.Ra])}}(h))},b,c)}return D.setInterval(en(a,b,c),1E3)},gn=function(a){cn?0<=a&&a<bn.length&&bn[a]&&(bn[a].disconnect(),bn[a]=void 0):D.clearInterval(a)};var jn=D.clearTimeout,kn=D.setTimeout,T=function(a,b,c){if(vg()){b&&I(b)}else return Me(a,b,c)},ln=function(){return D.location.href},mn=function(a){return Ah(Ch(a),"fragment")},nn=function(a){return Bh(Ch(a))},on=function(a,b){return lg(a,b||2)},pn=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=rm(a)):d=rm(a);return d},qn=function(a,b){D[a]=b},U=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},rn=function(a,b,c){return ki(a,b,void 0===c?!0:!!c)},sn=function(a,b){if(vg()){b&&I(b)}else Oe(a,b)},tn=function(a){return!!Gm(a,"init",!1)},un=function(a){Em(a,"init",!0)},vn=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Af;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(R("https://","http://",c))},wn=function(a,b){var c=a[b];return c};
var xn=zm.Ng;var Un=new Ia;function Vn(a,b){function c(h){var k=Ch(h),l=Ah(k,"protocol"),m=Ah(k,"host",!0),n=Ah(k,"port"),q=Ah(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Wn(a){return Xn(a)?1:0}
function Xn(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Fa(c)){for(var d=0;d<c.length;d++)if(Wn({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=Un.get(p);u||(u=new RegExp(c,t),Un.set(p,u));q=u.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Vn(b,
c)}return!1};var Yn=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Zn={},$n=encodeURI,W=encodeURIComponent,ao=Pe;var bo=function(a,b){if(!a)return!1;var c=Ah(Ch(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var co=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Zn.Eg=function(){var a=!1;return a};var pp=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var Ap=window,Bp=document,Cp=function(a){var b=Ap._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ap["ga-disable-"+a])return!0;try{var c=Ap.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ki("AMP_TOKEN",Bp.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Bp.getElementById("__gaOptOutExtension")?!0:!1};var Fp=function(a){La(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.fa]||{};La(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Jp=function(a,b,c){Sk(b,c,a)},Kp=function(a,b,c){Sk(b,c,a,!0)},Mp=function(a,b){};
function Lp(a,b){}var Y={b:{}};
Y.b.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.priorityOverride=0})(function(){return"107"})}();
Y.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],z=x.split(","),B=0;B<z.length;B++){var F=Number(z[B]);if(isNaN(F))return[];n.test(z[B])||A.push(F)}return A}function c(){var x=0,A=0;return function(){var z=Zm(),B=z.height;x=Math.max(v.scrollLeft+z.width,x);A=Math.max(v.scrollTop+B,A);return{fg:x,gg:A}}}function d(){p=U("self");
u=p.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,A,z,B){var F=l(A),J={},N;for(N in F){J.Ea=N;if(F.hasOwnProperty(J.Ea)){var Z=Number(J.Ea);x<Z||(pn({event:"gtm.scrollDepth","gtm.scrollThreshold":Z,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":B,"gtm.triggers":F[J.Ea].join(",")}),Fm("sdl",A,function(la){return function(X){delete X[la.Ea];return X}}(J),{}))}J={Ea:J.Ea}}}function f(){var x=y(),A=x.fg,z=x.gg,B=A/v.scrollWidth*100,F=z/v.scrollHeight*100;e(A,"horiz.pix",
q.Cb,t.Gd);e(B,"horiz.pct",q.Bb,t.Gd);e(z,"vert.pix",q.Cb,t.be);e(F,"vert.pct",q.Bb,t.be);Em("sdl","pending",!1)}function h(){var x=250,A=!1;u.scrollingElement&&u.documentElement&&p.addEventListener&&(x=50,A=!0);var z=0,B=!1,F=function(){B?z=kn(F,x):(z=0,f(),tn("sdl")&&!a()&&(Re(p,"scroll",J),Re(p,"resize",J),Em("sdl","init",!1)));B=!1},J=function(){A&&y();z?B=!0:(z=kn(F,x),Em("sdl","pending",!0))};return J}function k(x,A,z){if(A){var B=b(String(x));Fm("sdl",z,function(F){for(var J=0;J<B.length;J++){var N=
String(B[J]);F.hasOwnProperty(N)||(F[N]=[]);F[N].push(A)}return F},{})}}function l(x){return Gm("sdl",x,{})}function m(x){I(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,z=x.vtp_horizontalThresholdsPixels,B=x.vtp_horizontalThresholdsPercent,F=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,N=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.Cb:k(z,A,"horiz.pix");break;case q.Bb:k(B,A,"horiz.pct")}switch(F){case q.Cb:k(J,A,"vert.pix");break;case q.Bb:k(N,
A,"vert.pct")}tn("sdl")?Gm("sdl","pending")||(w||(d(),w=!0),I(function(){return f()})):(d(),w=!0,v&&(un("sdl"),Em("sdl","pending",!0),I(function(){f();if(a()){var Z=h();Qe(p,"scroll",Z);Qe(p,"resize",Z)}else Em("sdl","init",!1)})))}var n=/^\s*$/,q={Bb:"PERCENT",Cb:"PIXELS"},t={be:"vertical",Gd:"horizontal"},p,u,v,w=!1,y;(function(x){Y.__sdl=x;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):$l(function(){m(x)})})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.b.d=["google"],function(){(function(a){Y.__d=a;Y.__d.g="d";Y.__d.h=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Ze(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=H.getElementById(a.vtp_elementId);b&&(d?c=Se(b,d):c=Te(b));return Qa(String(b&&c))})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(tg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=on("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ah(Ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nn(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Cm(c,"gtm.click");pn(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!tn("cl")){var c=U("document");Qe(c,"click",a,!0);un("cl")}I(b.vtp_gtmOnSuccess)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return rn(a.vtp_name,on("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,q,t){if(!r(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<C(e,t))return}else if("write"===q){if(-1<C(f,t))return}else if("readwrite"===q){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===q){if(-1<C(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},J:a}})}();Y.b.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.priorityOverride=0})(function(a){return Ha(a.vtp_min,a.vtp_max)})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=on("gtm.url",1);c=c||ln();var d=b[a("vtp_component")];if(!d||"URL"==d)return nn(String(c));var e=Ch(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?Fa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ah(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ah(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=on(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(co(n.vtp_fieldsToSet,"fieldName","value"),f);G(co(n.vtp_contentGroup,"index","group"),h);G(co(n.vtp_dimension,"index","dimension"),k);G(co(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=G(n);d=G(d,q)}G(co(d.vtp_fieldsToSet,"fieldName","value"),f);G(co(d.vtp_contentGroup,
"index","group"),h);G(co(d.vtp_dimension,"index","dimension"),k);G(co(d.vtp_metric,"index","metric"),l);var t=qh(d.vtp_functionName);if(Da(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Hf(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(P){var K=[].slice.call(arguments,0);K[0]=p+K[0];t.apply(window,K)},x=function(P,K){return void 0===K?K:P(K)},A=function(P,K){if(K)for(var za in K)K.hasOwnProperty(za)&&
y("set",P+za,K[za])},z=function(){},B=function(P,K,za){var Ub=0;if(P)for(var Ka in P)if(P.hasOwnProperty(Ka)&&(za&&v[Ka]||!za&&void 0===v[Ka])){var kb=w[Ka]?Oa(P[Ka]):P[Ka];"anonymizeIp"!=Ka||kb||(kb=void 0);K[Ka]=kb;Ub++}return Ub},F={name:u};B(f,
F,!0);t("create",d.vtp_trackingId||e.trackingId,F);y("set","&gtm",sj(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,K){void 0!==d[K]&&y("set",P,d[K])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var J={};B(f,J,!1)&&y("set",J);var N;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=f&&f.hitCallback;Da(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var Z={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Na,d.vtp_eventValue||e.value)};B(N,Z,!1);y("send",Z);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var wa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:wa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ua})}N?y("send","pageview",N):y("send","pageview");}if(!a){var Aa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var mb=R("https:","http:","//www.google-analytics.com/"+Aa,f&&f.forceSSL);
T(mb,function(){var P=oh();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.priorityOverride=0}();

Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Script URL must be a string.");try{if(ce(Ch(f),c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();


Y.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;G(co(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=G(e);c=G(c,f)||{}}G(co(c.vtp_fieldsToSet,"fieldName","value"),d);var h=qh(c.vtp_functionName);if(Da(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Hf(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,A){var z=0,B;for(B in y)if(y.hasOwnProperty(B)&&
(A&&m[B]||!A&&void 0===m[B])){var F=n[B]?Oa(y[B]):y[B];"anonymizeIp"!==B||F||(F=void 0);x[B]=F;z++}return z},t={name:l};q(d,t,!0);var p={"&gtm":sj(!0)};q(d,p,!1);var u=encodeURI(R("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(u,function(){return oh().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=U("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else I(c.vtp_gtmOnFailure)};Y.__opt=b;Y.__opt.g="opt";Y.__opt.h=!0;Y.__opt.priorityOverride=0}();
Y.b.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.priorityOverride=0})(function(){return Gd.w})}();


Y.b.aev=["google"],function(){function a(p,u){var v=tg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(p,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var z=q.shift();delete n[z]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(ln());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!bo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ah(Ch(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Se(p,"value");case "button":return Te(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)Jm(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&Se(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Te)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),z=Ch(A),B=String(p.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,p.vtp_affiliatedDomains);break a;default:x=Ah(z,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var J=p.vtp_attribute,N=a(u,"element");F=N&&Se(N,J)||v||""}return F;case "MD":var Z=p.vtp_mdValue,la=b(u,"MD",Vm);return Z&&la?Ym(la,
Z)||v:la||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[rd.wa]=null;c[rd.af]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.b.read_data_layer=["google"],function(){function a(b,c){return{key:c}}(function(b){Y.__read_data_layer=b;Y.__read_data_layer.g="read_data_layer";Y.__read_data_layer.h=!0;Y.__read_data_layer.priorityOverride=0})(function(b){var c=b.vtp_keyPatterns||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Keys must be strings.");try{var h;a:{for(var k=0;k<c.length;k++){var l=f,m=c[k];if(!Yd.exec(m))throw Error("Invalid key wildcard");var n=m.indexOf(".*"),q=-1!==n&&n===
m.length-2,t=q?m.slice(0,m.length-2):m,p;b:if(0===l.length)p=!1;else{for(var u=l.split("."),v=0;v<u.length;v++)if(!Xd.exec(u[v])){p=!1;break b}p=!0}if(!p||t.length>l.length||!q&&l.length!=m.length?0:q?0===l.indexOf(t)&&(l===t||"."==l.charAt(t.length)):l===t){h=!0;break a}}h=!1}if(h)return}catch(w){throw d(e,{},"Invalid key filter.");}throw d(e,{},"Prohibited read from data layer variable: "+f+".");},J:a}})}();Y.b.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.g="logging";Y.__logging.h=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Zn.Eg())throw d(e,{},"Logging is not enabled in all environments");},J:a}})}();




Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();Y.b.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.g="hid";Y.__hid.h=!0;Y.__hid.priorityOverride=0})(function(){return zm.Ab})}();
Y.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Le(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=xn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Rc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Ue(h),k,e)()}else kn(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();

Y.b.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.g="dbg";Y.__dbg.h=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();


Y.b.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.g="img";Y.__img.h=!0;Y.__img.priorityOverride=0})(function(a){var b=Ue('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}ao(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.b.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(on("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!an(f.target)){h.has(e.Db)||h.set(e.Db,""+b());h.has(e.Bc)||h.set(e.Bc,""+b());var q=0;h.has(e.Fb)&&(q=Number(h.get(e.Fb)));q+=100;h.set(e.Fb,""+q);if(q>=k){var t=Cm(f.target,"gtm.elementVisibility",[h.uid]),p=$m(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.Bc));
t["gtm.visibleLastTime"]=Number(h.get(e.Db));pn(t);l()}}}if(!h.has(e.Ya)&&(0==k&&m(),!h.has(e.Fa))){var n=U("self").setInterval(m,100);h.set(e.Ya,n)}}function d(f){f.has(e.Ya)&&(U("self").clearInterval(Number(f.get(e.Ya))),f.a(e.Ya))}var e={Ya:"polling-id-",Bc:"first-on-screen-",Db:"recent-on-screen-",Fb:"total-visible-time-",Fa:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Ze(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=H.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new a(v[z],p);d(B)}v=[];for(var F=0;F<x.length;F++)v.push(x[F]);0<=w&&gn(w);0<v.length&&(w=fn(k,v,[t]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=t?x.has(e.Fa)||c(y,x,q,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var z=new a(v[A],p);z.set(e.Fa,"1");d(z)}gn(w);if(n&&Nm)for(var B=0;B<Nm.length;B++)Nm[B]===h&&Nm.splice(B,1)}:function(){x.set(e.Fa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===u&&x.has(e.Fa)&&(x.a(e.Fa),x.a(e.Fb)),x.a(e.Db))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Om(h);I(f.vtp_gtmOnSuccess)})}();


Y.b.csm=["nonGoogleScripts"],function(){(function(a){Y.__csm=a;Y.__csm.g="csm";Y.__csm.h=!0;Y.__csm.priorityOverride=0})(function(a){var b=U("document");ao(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+W(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=new Date,h=(e||"").split("&");e="";for(var k=0;k<h.length;k++)if(h[k]){var l=h[k].match(/([^=]*)=?(.*)/);e+="&"+W(l[1])+"="+W(l[2])}return R("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
W(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.Th||"")+"&c8="+W(b.title||"")+e+"&c7="+W(b.URL)+"&c9="+W(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),h=0;h<f.length;h++){var k=f[h].indexOf("comScore");0<=k&&(d=unescape(f[h].substring(k+8)))}return d}())));var c=function(){var d=R("https://sb","http://b",".scorecardresearch.com/c2/"+W(a.vtp_clientId)+"/cs.js");T(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():Qe(U("self"),"load",c)})}();var Np={};Np.macro=function(a){if(zm.Fc.hasOwnProperty(a))return zm.Fc[a]},Np.onHtmlSuccess=zm.oe(!0),Np.onHtmlFailure=zm.oe(!1);Np.dataLayer=mg;Np.callback=function(a){Ff.hasOwnProperty(a)&&Da(Ff[a])&&Ff[a]();delete Ff[a]};function Op(){Q[Gd.w]=Np;Ua(Gf,Y.b);jd=jd||zm;kd=Sg}
function Pp(){Yi.gtm_3pds=!0;Q=D.google_tag_manager=D.google_tag_manager||{};if(Q[Gd.w]){var a=Q.zones;a&&a.unregisterChild(Gd.w)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)ed.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Y;id=Wn;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Bl();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Gf[x]=w}El(v);Op();ym();Wg=!1;Xg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Zg();else{Qe(H,"DOMContentLoaded",
Zg);Qe(H,"readystatechange",Zg);if(H.createEventObject&&H.documentElement.doScroll){var A=!0;try{A=!D.frameElement}catch(J){}A&&$g()}Qe(D,"load",Zg)}Xl=!1;"complete"===H.readyState?Zl():Qe(D,"load",Zl);a:{if(!bg)break a;D.setInterval(cg,864E5);}
Cf=(new Date).getTime();}}Pp();

})()
