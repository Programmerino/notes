
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"367",
  
  "macros":[{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"cmapi_cookie_privacy"
    },{
      "function":"__e"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"notice_behavior"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_varType":"URL"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){performance.mark(\"fortune.com GTM GA UA-97981691-5\")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=31,g=[{name:\"EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?!example\\.com)[^\\\/]{4}\/gi,group:\"\"},{name:\"SELF-EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?=example\\.com)[^\\\/]{4}\/gi,group:\"\"},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi,group:\"$1\"},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi,\ngroup:\"$1\"}],h=\"_ga_originalSendHitTask\";return function(a){window[h]=window[h]||a.get(\"sendHitTask\");\"number\"===typeof b\u0026\u0026a.set(\"dimension\"+b,a.get(\"clientId\"));a.set(\"sendHitTask\",function(a){var b=a,k=window[h],l=!0;try{if(\"undefined\"!==typeof g\u0026\u0026g.length){for(var c=a.get(\"hitPayload\").split(\"\\x26\"),d=0;d\u003Cc.length;d++){var e=c[d].split(\"\\x3d\");try{var f=decodeURIComponent(decodeURIComponent(e[1]))}catch(m){f=decodeURIComponent(e[1])}g.forEach(function(a){f=f.replace(a.regex,\"[REDACTED \"+a.name+\n\"]\")});e[1]=encodeURIComponent(f);c[d]=e.join(\"\\x3d\")}a.set(\"hitPayload\",c.join(\"\\x26\"),!0)}l\u0026\u0026k(a)}catch(m){k(b)}})}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",8],
      "vtp_defaultValue":"False",
      "vtp_map":["list",["map","key","cloud.newsletters.fortune.com","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"franchiseName"
    },{
      "function":"__v",
      "convert_null_to":["macro",11],
      "convert_undefined_to":["macro",11],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"channel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"tags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",13],8,16],".join(\"|\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"contentId"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",16]," - ",["macro",17]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"premiumCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Id"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","hitCallback","value",["macro",6]],["map","fieldName","customTask","value",["macro",7]],["map","fieldName","anonymizeIp","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",10]],["map","index","2","group",["macro",12]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",14]],["map","index","8","dimension",["macro",10]],["map","index","2","dimension",["macro",12]],["map","index","25","dimension",["macro",15]],["map","index","29","dimension",["macro",18]],["map","index","32","dimension",["macro",19]],["map","index","33","dimension",["macro",20]],["map","index","34","dimension",["macro",21]],["map","index","1","dimension",["macro",22]],["map","index","64","dimension",["macro",23]],["map","index","65","dimension",["macro",24]],["map","index","27","dimension",["macro",25]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",c=",["escape",["macro",2],8,16],",b=\"false\";a\u0026\u0026a.includes(\"permit\")\u0026\u0026a.includes(\"2\")?b=\"true\":c\u0026\u0026c.includes(\"none\")\u0026\u0026(b=\"true\");return b})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.distance"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.label"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",3],8,16],".indexOf(",["escape",["macro",32],8,16],")?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","pages.email.fortune.com","value","Newsletter"],["map","key","www.magazine.store","value","Magazine"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
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
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"headline"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
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
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__dbg"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_dimension":["list",["map","index","30","dimension","Google Analytics"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",27],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["macro",23],
      "vtp_dimension":["list",["map","index","30","dimension","GA - Video"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_dimension":["list",["map","index","30","dimension","GA - Event - Scroll Tracking"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","30","dimension","GA - Event - Outbound Link Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Subscription Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",36],
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","30","dimension","GA - Event - Subscription Links"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","30","dimension","GA - Event - Social Link Click"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":38
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",37],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",38],
      "vtp_eventLabel":["macro",39],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1545442",
      "tag_id":48
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"o25rz",
      "tag_id":49
    },{
      "function":"__cvt_11517563_226",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"2401094323475187",
      "vtp_standardEventName":"PageView",
      "vtp_disableAutoConfig":false,
      "vtp_userProperties":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav Subscribe Click Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Global Nav Subscribe Click Act",
      "vtp_eventLabel":"Global Nav Subscribe Click Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav Main Logo Click Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Global Nav Main Logo Click Act",
      "vtp_eventLabel":"Global Nav Main Logo Click Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav - Search Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Global Nav - Search Act",
      "vtp_eventLabel":"Global Nav - Search Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":62
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Section Next Page Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Section Page Numbers Button Click Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Section Page Numbers Button Click Act",
      "vtp_eventLabel":"Section Page Numbers Button Click Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage Title Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Homepage Title Act",
      "vtp_eventLabel":"Homepage Title Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"NewsletterSignUpPromo Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"NewsletterSignUpPromo Act",
      "vtp_eventLabel":"NewsletterSignUpPromo Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":97
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav - Search Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Global Nav - Search Act",
      "vtp_eventLabel":"Global Nav - Search Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":98
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav - Sign In Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Global Nav - Sign In Act",
      "vtp_eventLabel":"Global Nav - Sign In Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"RegisterPromoBar Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"RegisterPromoBar Act",
      "vtp_eventLabel":"RegisterPromoBar Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"HomePage SubHeaderArticle Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Homepage Article Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Global Nav Tracking Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"PopularSidebar Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","SubHeaderArticle Act",["macro",35]],
      "vtp_eventLabel":["template","SubHeaderArticle Lab",["macro",40]],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":483
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Eyebrow Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":485
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Latest Sidebar Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",35],
      "vtp_eventLabel":["macro",40],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":487
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Social Click Cat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":"Social Click Lab",
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":489
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Article Text Impression",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",4],
      "vtp_eventLabel":["macro",24],
      "vtp_trackingId":"UA-97981691-5",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":496
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_184",
      "tag_id":497
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_186",
      "tag_id":498
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_187",
      "tag_id":499
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_273",
      "tag_id":500
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_280",
      "tag_id":501
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_286",
      "tag_id":502
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_288",
      "tag_id":503
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_289",
      "tag_id":504
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_409",
      "tag_id":505
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_420",
      "tag_id":506
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_436",
      "tag_id":507
    },{
      "function":"__cl",
      "tag_id":508
    },{
      "function":"__cl",
      "tag_id":509
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_452",
      "tag_id":510
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_458",
      "tag_id":511
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_462",
      "tag_id":512
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_464",
      "tag_id":513
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_466",
      "tag_id":514
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_472",
      "tag_id":515
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_482",
      "tag_id":516
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_484",
      "tag_id":517
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_486",
      "tag_id":518
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11517563_488",
      "tag_id":519
    },{
      "function":"__evl",
      "vtp_elementId":"freestar-instream-content",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"6",
      "vtp_onScreenDuration":"300",
      "vtp_uniqueTriggerId":"11517563_495",
      "tag_id":520
    },{
      "function":"__evl",
      "vtp_elementId":"article_overlay",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"2",
      "vtp_onScreenDuration":"100",
      "vtp_uniqueTriggerId":"11517563_497",
      "tag_id":521
    },{
      "function":"__evl",
      "vtp_elementId":"checkout-container",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"3",
      "vtp_onScreenDuration":"100",
      "vtp_uniqueTriggerId":"11517563_498",
      "tag_id":522
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fortuneGTM.loadScript(\"bounceexchange\",document.location.protocol+\"\/\/tag.bounceexchange.com\/1496\/i.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etp=window.tp||[];\"article\"===",["escape",["macro",10],8,16],"||\"longform\"===",["escape",["macro",10],8,16],"?tp.push([\"setContentSection\",",["escape",["macro",24],8,16],"]):tp.push([\"setContentSection\",\"\"]);tp.push([\"setContentId\",",["escape",["macro",15],8,16],"]);tp.push([\"setCustomVariable\",\"Content Type\",",["escape",["macro",12],8,16],"]);tp.push([\"init\",function(){tp.enableGACrossDomainLinking(\"UA-97981691-5\");tp.experience.execute()}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",62,0]],
      "teardown_tags":["list",["tag",74,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"teconsent\"\u003E\n  \u003Cscript async=\"async\" data-gtmsrc=\"\/\/consent.truste.com\/notice?domain=fortunemedia.com\u0026amp;c=teconsent\u0026amp;js=nj\u0026amp;noticeType=bb\u0026amp;gtm=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n  \u003Cdiv id=\"consent_blackbar\" style=\"position: fixed; bottom: 0; z-index: 1; width: 100vw;\"\u003E\u003C\/div\u003E\n\u003C\/div\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/s.ntv.io\/serve\/load.js\" type=\"text\/gtmscript\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"parsely-cfg\" type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.parsely.com\/keys\/fortune.com\/p.js\" async defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a){a=\"https:\/\/a.pub.network\/fortune-com\";a=window.location.search\u0026\u0026-1!==window.location.search.indexOf(\"fsdebug\")?a+\"\/qa\/pubfig.min.js\":a+\"\/pubfig.min.js\";b.fortuneGTM.loadScript(\"freestar\",a)})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a,b){b=b||{bubbles:!1,cancelable:!1,detail:null};var e=document.createEvent(\"CustomEvent\");e.initCustomEvent(a,b.bubbles,b.cancelable,b.detail);return e}window.fortuneGTM=window.fortuneGTM||{};fortuneGTM.dispatchTagLoadedEvent=function(a){a=new d(\"gtmTagLoaded\",{detail:{tagName:a}});window.dispatchEvent(a)};fortuneGTM.loadScript=function(a,b,e,d){var c=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0],g=\"fortune-gtm-tag-\"+a;c.type=\"text\/javascript\";\nc.async=e||!0;c.defer=d||!1;c.src=b;c.id=g;c.onload=function(){fortuneGTM.dispatchTagLoadedEvent(a)};null===document.getElementById(g)\u0026\u0026f.parentNode.insertBefore(c,f)};if(\"function\"===typeof window.CustomEvent)return!1;d.prototype=window.Event.prototype;window.CustomEvent=d})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(){if(!window.frames.__cmpLocator)if(document.body){var b=document.body,c=document.createElement(\"iframe\");c.style.cssText=\"display:none\";c.name=\"__cmpLocator\";c.id=\"__cmpTrustarc\";c.src=\"\/\/trustarc.mgr.consensu.org\/get?name\\x3dcmpcookie.html\";b.appendChild(c)}else setTimeout(d,5)}function g(){var b=arguments;__cmp.a=__cmp.a||[];if(b.length)if(\"ping\"===b[0])b[2]({gdprAppliesGlobally:f,cmpLoaded:!1},!0);else __cmp.a.push([].slice.apply(b));else return __cmp.a}function a(b){var c=\n\"string\"===typeof b.data;try{var a=c?JSON.parse(b.data):b.data}catch(k){return}if(a\u0026\u0026a.__cmpCall){var e=a.__cmpCall;window.__cmp(e.command,e.parameter,function(a,d){a={__cmpReturn:{returnValue:a,success:d,callId:e.callId}};b.source.postMessage(c?JSON.stringify(a):a,\"*\")})}}var h=!0,f=!1;d();\"function\"!==typeof __cmp\u0026\u0026(window.__cmp=g,__cmp.msgHandler=a,__cmp.gdprApplies=h,__cmp.gdprAppliesGlobally=f,window.addEventListener?window.addEventListener(\"message\",a,!1):window.attachEvent(\"onmessage\",a))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"6035728\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\")+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/sb.scorecardresearch.com\/p?c1=2\u0026amp;c2=6035728\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eself.COMSCORE\u0026\u0026COMSCORE.beacon({c1:\"2\",c2:\"6035728\",cs_ucfr:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2587034314640071\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=2587034314640071\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o25rz\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"1372793\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=1372793\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"nativoRecall\" async type=\"text\/gtmscript\"\u003E(function(){if(\"PostRelease\"in window)return PostRelease.Start(),document.getElementById(\"nativoRecall\").remove()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=Math.random().toString().replace(\".\",\"\");fetch(\"https:\/\/fortune.com\/comscore.json?\"+b).then(function(a){return a.json()}).then(function(a){return a})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-scroll-tracking\"\u003E(function(h,l,a){function q(){if(!h.querySelector||!h.body.getBoundingClientRect)return!1;a.dataLayerName=a.dataLayerName||\"dataLayer\";a.distances=a.distances||{};u();r(l,\"scroll\",y(u,500))}function v(k,a,f,b,d){var e;for(e=0;e\u003Ca.length;e++){var c=parseInt(a[e],10),g=\"%\"!==f?c+d:c\/100*b+d;c+=f;g\u003C=b+d\u0026\u0026(k[c]=g)}return k}function w(a,g){var k=parseInt(a,10),b=g\/k,d=[],e;for(e=1;e\u003Cb+1;e++)d.push(e*k);return d}function u(){var k=x(a.bottom),g=x(a.top);var f=h.body;var b=h.documentElement;f=Math.max(f.scrollHeight,\nf.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight);g\u0026\u0026(f-=g);k\u0026\u0026(f=k-(g||0));f-=5;b=g||0;var d=z()||{},e=[],c=[],m;if(a.distances.percentages\u0026\u0026(a.distances.percentages.each\u0026\u0026(e=e.concat(a.distances.percentages.each)),a.distances.percentages.every))for(m=0;m\u003Ca.distances.percentages.every.length;m++)e=w(a.distances.percentages.every[m],100),e=c.concat(e);if(a.distances.pixels\u0026\u0026(a.distances.pixels.each\u0026\u0026(c=c.concat(a.distances.pixels.each)),a.distances.pixels.every))for(m=0;m\u003Ca.distances.pixels.every.length;m++){var A=\nw(a.distances.pixels.every[m],f);c=c.concat(A)}d=v(d,e,\"%\",f,b);f=d=v(d,c,\"px\",f,b);b=void 0!==l.pageXOffset;d=\"CSS1Compat\"===(h.compatMode||\"\");b=b?l.pageYOffset:d?h.documentElement.scrollTop:h.body.scrollTop;b=parseInt(b,10);d=parseInt;c=\"CSS1Compat\"===h.compatMode?h.documentElement:h.body;c=c.clientHeight;b+=d(c,10);for(var p in f)if(d=f[p],b\u003Ed\u0026\u0026!n[p]\u0026\u0026d\u003C(k||Infinity)\u0026\u0026d\u003E(g||0))if(n[p]=!0,d=p,c=l.GoogleAnalyticsObject,\"undefined\"===typeof l[a.dataLayerName]||a.forceSyntax)if(\"function\"===typeof l[c]\u0026\u0026\n\"function\"===typeof l[c].getAll\u0026\u00262!==a.forceSyntax)l[c](\"send\",\"event\",a.category,d,a.label,{nonInteraction:1});else\"undefined\"!==typeof l._gaq\u0026\u00261!==a.forceSyntax\u0026\u0026l._gaq.push([\"_trackEvent\",a.category,d,a.label,0,!0]);else l[a.dataLayerName].push({event:\"scrollTracking\",attributes:{distance:d,label:a.label}})}function x(a){if(\"number\"===typeof a||parseInt(a,10))return parseInt(a,10);try{var k=1===a.nodeType?a:h.querySelector(a);return t(k)}catch(f){}}function y(a,g){var k,b,d,e=null,c=0,h=function(){c=\nnew Date;e=null;d=a.apply(k,b)};return function(){var f=new Date;c||(c=f);var m=g-(f-c);k=this;b=arguments;0\u003E=m?(clearTimeout(e),e=null,c=f,d=a.apply(k,b)):e||(e=setTimeout(h,m));return d}}function r(a,g,f){if(a.addEventListener)a.addEventListener(g,f);else if(a.attachEvent)a.attachEvent(\"on\"+g,function(b){f.call(a,b)});else if(\"undefined\"===typeof a[\"on\"+g]||null===a[\"on\"+g])a[\"on\"+g]=function(b){f.call(a,b)}}function t(a){a=a.getBoundingClientRect().top;var k=void 0!==l.pageYOffset?l.pageYOffset:\n(h.documentElement||h.body.parentNode||h.body).scrollTop;return a+k}var n={};!a.distances.percentages||!a.distances.percentages.every||a.distances.percentages.every instanceof Array||(a.distances.percentages.every=[a.distances.percentages.every]);!a.distances.pixels||!a.distances.pixels.every||a.distances.pixels.every instanceof Array||(a.distances.pixels.every=[a.distances.pixels.every]);var z=function(a){function g(){var d,e,c;f={};if(a.each)for(c=0;c\u003Ca.each.length;c++){var b=a.each[c];n[b]||(d=\nh.querySelector(b))\u0026\u0026(f[b]=t(d))}if(a.every)for(c=0;c\u003Ca.every.length;c++){b=a.every[c];var g=h.querySelectorAll(b);if(g.length\u0026\u0026!n[b+\":\"+(g.length-1)])for(e=0;e\u003Cg.length;e++){var k=b+\":\"+e;n[k]||(d=g[e],f[k]=t(d))}}}if(a){var f={},b=0;g();return function(){var a={},e;b++;10\u003Cb\u0026\u0026(g(),b=0);for(e in f)a[e]=f[e];return a}}}(a.distances.elements);\"loading\"!==h.readyState?q():h.addEventListener?r(h,\"DOMContentLoaded\",q):r(l,\"load\",q)})(document,window,{forceSyntax:!1,dataLayerName:!1,distances:{percentages:{each:[10,\n90],every:[25]},pixels:{each:[],every:[]},elements:{each:[],every:[]}},top:null,bottom:null,category:\"Scroll Tracking\",label:document.location.pathname});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etp=window.tp||[];tp.push([\"init\",function(){tp.myaccount.show({displayMode:\"inline\",containerSelector:\"#freestar-instream-content\"})}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){document.querySelector(\".truste_box_overlay\")\u0026\u0026(document.querySelector(\".truste_box_overlay\").style.zIndex=26E5)},2E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"permit"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"2"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"fortune.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"cookie_prefs_set"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"none"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"fortune.noticeBehaviorSet"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"fortuneconferences.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/premium\/"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"cloud.newsletters.fortune.com"
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"https:\/\/fortune.com\/newsletter\/"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"fortunemediakit.com"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/videos\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/survey-sweepstakes-official-rules-jul2019\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/opportunity-network\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"videoEvent"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"scrollTracking"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_184($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(www.magazine.store|pages.email.fortune.com)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_186($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":".*(facebook|twitter|linkedin|instagram|pinterest).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_187($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"mynewsletters.fortune.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"SUBSCRIBE"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"https:\/\/preview.fortune.com\/#"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_273($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"logo__primaryLogo--3jL8T"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_280($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"header__registerLogin--2ogSG"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"REGISTER OR LOGIN"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_286($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"NEXT PAGE|PREVIOUS PAGE"
    },{
      "function":"_cn",
      "arg0":["macro",35],
      "arg1":"\/section\/"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_289($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"paginationItem__link--U_15W|paginationItem__active--DE6Ie"
    },{
      "function":"_cn",
      "arg0":["macro",41],
      "arg1":"\/section\/"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_288($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"#content \u003E div.featureThree__wrapper--3SQKF \u003E div.featureThree__feature--1Khrg \u003E div \u003E div \u003E div.featureModule__text--i53AK \u003E a.featureModule__title--AARyz"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_409($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"#content \u003E div.featureThree__wrapper--3SQKF \u003E div.featureThree__feature--1Khrg \u003E div \u003E div \u003E div.featureModule__text--i53AK \u003E div:nth-child(4) \u003E div \u003E div.byline__wrapper--3vOJH"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_420($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"#root \u003E div \u003E div.footer__wrapper--3kGR7 \u003E div.container__xxl--3SCes.container__container--a5NXK.footerSubscribe__wrapper--1LFC5 \u003E div:nth-child(2) \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_436($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"headerSearch__openButton--3wTuY"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"SEARCH"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"headerAccount__text1--th-Rr"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"SIGN IN"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"#root \u003E div \u003E div.footer__wrapper--3kGR7 \u003E div.container__xxl--3SCes.container__container--a5NXK.footerSubscribe__wrapper--1LFC5 \u003E div:nth-child(1) \u003E a"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_458($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",41],
      "arg1":"#root \u003E div \u003E div.header__bottom--14eUZ \u003E div.header__navTop--9Pzf- \u003E nav \u003E div \u003E div"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_462($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"featureThreeGrid__titleLink--2l8WF"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_464($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"grid__titleLink--38gz1"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_466($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"https:\/\/fortuneconferences.com\/|https:\/\/fortune.com\/magazine\/|https:\/\/mynewsletters.fortune.com\/subscribe?source=FO_CMS_Nav|header__registerLogin--2ogSG|headerSearch__openButton--3wTuY|headerAccount__text1--th-Rr|https:\/\/fortune.com\/videos\/|https:\/\/fortune.com\/fortune500\/|https:\/\/fortune.com\/40-under-40\/|https:\/\/fortune.com\/global500\/|https:\/\/fortune.com\/#|"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"^MAGAZINE$|^VIDEO$|^CONFERENCES$|^NEWSLETTERS$|^FORTUNE 500$|^GLOBAL 500$|^RANKINGS$|^40 UNDER 40$|"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"^https:\/\/fortune.com\/#$|^https:\/\/fortune.com\/rankings\/$|^https:\/\/fortune.com\/fortune500\/$|^https:\/\/fortune.com\/global500\/$|^https:\/\/fortune.com\/40-under-40\/$|^https:\/\/fortune.com\/magazine\/$|^https:\/\/mynewsletters.fortune.com\/subscribe?source=FO_CMS_Nav$|^https:\/\/fortune.com\/videos\/$|^https:\/\/fortuneconferences.com\/$"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_472($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"articleSidebar__link--3Wqxo"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_482($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"nativo-tout--header-latest-posts__link ntv-headline-anchor|nativo-tout--header-latest-posts__eyebrowLink|headerLatestPosts__link--1UoQq|headerLatestPosts__eyebrowLink--UvwGj"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_484($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",42],
      "arg1":"contentItem__sidebarTitleLink--8HN33"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_486($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"socialItem__link--2J30T"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"fortune.com|facebook.com|twitter.com|linkedin.com"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_488($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"P"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_497($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"3"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/privacy-policy\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/eu-privacy-policy\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/canada-privacy-policy\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/terms-of-use\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/subscribe-charter50\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/sponsored"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"\/my-account\/"
    },{
      "function":"_re",
      "arg0":["macro",34],
      "arg1":"(^$|((^|,)11517563_498($|,)))"
    }],
  "rules":[
    [["if",0,1,2],["add",0,57]],
    [["if",0,1,3],["add",0,1,57,60]],
    [["if",2,4],["add",0,57,65,69,70]],
    [["if",4,5],["add",0,1,56,57,59,60,61,64,65,69,70]],
    [["if",6,7],["add",0]],
    [["if",7,8],["add",0]],
    [["if",7,9],["add",0]],
    [["if",7,10],["add",0]],
    [["if",7,11],["add",0]],
    [["if",7,12],["add",0],["block",60]],
    [["if",0,1,7],["add",1,60]],
    [["if",4,7],["add",1,56,59,60,61,64]],
    [["if",15],["add",2]],
    [["if",16],["add",3]],
    [["if",19,20,21],["add",4]],
    [["if",20,22,23],["add",5],["block",4]],
    [["if",20,24,25],["add",6],["block",4]],
    [["if",7,26],["add",7]],
    [["if",27],["add",8]],
    [["if",7],["add",9,10,11,58,62,63,71,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]],
    [["if",20,28,29,30],["add",12]],
    [["if",20,31,32],["add",13]],
    [["if",20,33,34,35],["add",14]],
    [["if",20,36,37,38],["add",15]],
    [["if",20,39,40,41],["add",16]],
    [["if",20,42,43],["add",17]],
    [["if",20,44,45],["add",17]],
    [["if",20,46,47],["add",18]],
    [["if",48,49,50],["add",19]],
    [["if",50,51,52],["add",20]],
    [["if",20,53,54],["add",21]],
    [["if",20,55,56],["add",21]],
    [["if",20,57,58],["add",22]],
    [["if",20,59,60],["add",23]],
    [["if",20,61,62,63,64],["add",24]],
    [["if",20,65,66],["add",25]],
    [["if",20,67,68],["add",26]],
    [["if",20,69,70],["add",27]],
    [["if",20,71,72,73],["add",28]],
    [["if",74,75,76],["add",29,73]],
    [["if",7,77],["add",30]],
    [["if",0,7,78],["add",56,59,61,64]],
    [["if",0,3,78],["add",56,59,61,64,69]],
    [["if",0,2,78],["add",65,69,70]],
    [["if",2,85],["add",66,67,68],["block",69]],
    [["if",2,86],["add",72]],
    [["if",75,87],["add",73]],
    [["if",2,13],["block",0,56,58,59,60,61,63,64,65,69,70]],
    [["if",7,13],["block",0,56,58,59,60,61,63,64,65,69,70]],
    [["if",7,14],["block",0,56,58,59,60,61,63,64,65,69,70]],
    [["if",2,14],["block",0,56,58,59,60,61,63,64,65,69,70]],
    [["if",17,18],["block",3,4,5,6,71]],
    [["if",7,79],["block",58,63]],
    [["if",2,79],["block",58,63]],
    [["if",7,80],["block",58,63]],
    [["if",2,80],["block",58,63]],
    [["if",2,81],["block",58,63]],
    [["if",7,81],["block",58,63]],
    [["if",2,82],["block",58,63]],
    [["if",7,82],["block",58,63]],
    [["if",2,83],["block",58,61,63]],
    [["if",2,84],["block",58,61,63]],
    [["if",7,83],["block",58,61,63]],
    [["if",7,84],["block",58,61,63]]]
},
"runtime":[[50,"__cvt_11517563_226",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","getType"]],[52,"j",["require","logToConsole"]],[52,"k",[30,["e","_fbq_gtm_ids"],[7]]],[52,"l",[17,[15,"a"],"pixelId"]],[52,"m",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"n",[51,"",[7,"ba","bb"],[55,"bc",[15,"bb"],[46,[22,[2,[15,"bb"],"hasOwnProperty",[7,[15,"bc"]]],[46,[43,[15,"ba"],[15,"bc"],[16,[15,"bb"],[15,"bc"]]]]]]],[36,[15,"ba"]]]],[52,"o",[51,"",[7],[41,"ba"],[3,"ba",["e","fbq"]],[22,[15,"ba"],[46,[36,[15,"ba"]]]],["f","fbq",[51,"",[7],[52,"bb",["e","fbq.callMethod.apply"]],[22,[15,"bb"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"p",["o"]],[52,"q",[39,[17,[15,"a"],"userPropertyList"],["h",[17,[15,"a"],"userPropertyList"],"name","value"],[8]]],[52,"r",[39,[17,[15,"a"],"advancedMatchingList"],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"s",[39,[17,[15,"a"],"objectPropertyList"],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"t",[39,[20,["i",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"u",["n",[15,"t"],[15,"s"]]],[52,"v",[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]],[52,"w",[39,[20,[2,[15,"m"],"indexOf",[7,[15,"v"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"x",[39,[17,[15,"a"],"userId"],[8,"uid",[17,[15,"a"],"userId"]],[8]]],[52,"y",["n",[15,"x"],[15,"r"]]],[52,"z",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],["p","consent",[15,"z"]],[2,[2,[15,"l"],"split",[7,","]],"forEach",[7,[51,"",[7,"ba"],[22,[20,[2,[15,"k"],"indexOf",[7,[15,"ba"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["p","set","autoConfig",false,[15,"ba"]]]],["p","init",[15,"ba"],[15,"y"]],[2,[15,"k"],"push",[7,[15,"ba"]]],["f","_fbq_gtm_ids",[15,"k"],true],[22,[17,[15,"a"],"userProperties"],[46,["p","setUserProperties",[15,"ba"],[15,"q"]]]]]],["p",[15,"w"],[15,"ba"],[15,"v"],[15,"u"]]]]],["g","https://connect.facebook.net/en_US/fbevents.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]]]
,"permissions":{"__cvt_11517563_226":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"}}}
,"sandboxed_scripts":["__cvt_11517563_226"]


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
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=cd[f];if(!h||b.Tc(h))return;c[f]=!0;try{var k=od(h,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.$f(d,k))}catch(y){b.Ee&&b.Ee(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Ab);d.push(q)}return jd&&m?jd.cg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Fa(a[1])&&"macro"===a[1][0]&&jd.Dg(a))return jd.$g(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={te:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Ad:a("convert_case_to"),Bd:a("convert_false_to"),Cd:a("convert_null_to"),Dd:a("convert_true_to"),Ed:a("convert_undefined_to"),Lh:a("debug_mode_metadata"),wa:a("function"),af:a("instance_name"),ef:a("live_only"),hf:a("malware_disabled"),jf:a("metadata"),Mh:a("original_vendor_template_id"),pf:a("once_per_event"),Nd:a("once_per_load"),Vd:a("setup_tags"),Xd:a("tag_id"),Yd:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.m=b;this.a=c};oa(sd,Error);function td(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};oa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Cd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=Ad(a);for(var e=0;e<dd.length;e++){var f=dd[e],h=Bd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=yd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new sd(c,d,h);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,h);Ed(f,b,d,h)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,h){var k={};La(h,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};
var Zd=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},$d=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Zd(b,"/*")&&(b=b.slice(0,-2));Zd(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ae=/^[a-z0-9-]+$/i,be=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ce=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ae.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!be.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=q;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=$d(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function fe(a){return""+a}
function ge(a,b){var c=[];return c};var he=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ie=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,he(a+"_"+d,e)):(Ea(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var je=function(a,b){E(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ie("AssertApiSubject",c)};var ke=function(a,b){E(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ie("AssertThatSubject",c)};var le=function(a){var b;return b};var me=function(a){var b;return b};var ne=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var oe=function(a){E(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var pe=function(a){E(this.getName(),["message:?string"],arguments);};var qe=function(a,b){E(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var re=function(){return(new Date).getTime()};var se=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Mf.apply(null,Array.prototype.slice.call(arguments,1))};var te=!1;var ue={Ah:'',jg:''},ve=function(){se(this,"read_container_data");var a=new db;a.set("containerId",'GTM-N68KRG3');a.set("version",'367');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",Oa(ue.Ah));a.set("environmentMode",Oa(ue.jg));a.i=!0;return a};var we=function(a){return null===a?"null":a instanceof g?"array":a instanceof $a?"function":typeof a};var xe=function(a){return Na(ob(a,this.i))};var ye=function(a){return Number(ob(a,this.i))};var ze=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ae=function(a,b,c){var d=null,e=!1;E(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var h=a.get(f);h instanceof db&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};var Be="floor ceil round max min abs pow sqrt".split(" ");function Ce(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(ob(arguments[d],c));return a.apply(null,b)}}function De(){for(var a=Math,b={},c=0;c<Be.length;c++){var d=Be[c];a.hasOwnProperty(d)&&(b[d]=Ce(a[d].bind(a)))}return b};var Ee=function(){var a={};return{qg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},sh:function(b,c){a[b]=c},reset:function(){a={}}}},Fe=function(a,b){E(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ge=function(){this.a={}};Ge.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ge.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?he(a,b):ie(a,b)};function He(){var a={};return a};var D=window,H=document,Ie=navigator,Je=H.currentScript&&H.currentScript.src,Ke=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Le=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Me=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Le(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ia.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Ne=function(){if(Je){var a=Je.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oe=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Le(c,b);void 0!==a&&(c.src=a);return c},Pe=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qe=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Re=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){D.setTimeout(a,0)},Se=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Te=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ue=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ve=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},We=function(a){Ie.sendBeacon&&Ie.sendBeacon(a)||Pe(a)},Xe=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ze=function(a){return Ye?H.querySelectorAll(a):null},$e=function(a,b){if(!Ye)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},af=!1;if(H.querySelectorAll)try{var bf=H.querySelectorAll(":root");bf&&1==bf.length&&bf[0]==H.documentElement&&(af=!0)}catch(a){}var Ye=af;var M={sa:"_ee",yc:"event_callback",zb:"event_timeout",D:"gtag.config",Z:"allow_ad_personalization_signals",zc:"restricted_data_processing",Ua:"allow_google_signals",aa:"cookie_expires",yb:"cookie_update",Va:"session_duration",fa:"user_properties"};M.se=[M.Z,M.Ua,M.yb];M.ye=[M.aa,M.zb,M.Va];var sf=/[A-Z]+/,tf=/\s/,uf=function(a){if(r(a)&&(a=Qa(a),!tf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(sf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},wf=function(a){for(var b={},c=0;c<a.length;++c){var d=uf(a[c]);d&&(b[d.id]=d)}vf(b);var e=[];La(b,function(f,h){e.push(h)});return e};
function vf(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gd={},Q=null,xf=Math.random();Gd.w="GTM-N68KRG3";Gd.Eb="2q2";var yf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},zf="www.googletagmanager.com/gtm.js";var Af=zf,Bf=null,Cf=null,Df=null,Ef="//www.googletagmanager.com/a?id="+Gd.w+"&cv=367",Ff={},Gf={},Hf=function(){var a=Q.sequence||0;Q.sequence=a+1;return a};var If={},Jf=function(a,b){If[a]=If[a]||[];If[a][b]=!0},Kf=function(a){for(var b=[],c=If[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
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
case "event":Yk(this,c.a[1],c.a[0],c)}this.a.shift()}};var Zk=function(a,b){E(this.getName(),["toPath:!string","fromPath:!string"],arguments);se(this,"access_globals","write",a);se(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=Xa(c),f=Xa(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};var $k=function(a,b){var c;E(this.getName(),["path:!string"],[a]);se(this,"access_globals","execute",a);for(var d=a.split("."),e=D,f=e[d[0]],h=1;f&&h<d.length;h++)e=f,f=f[d[h]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(ob(arguments[l],this.i));c=nb((0,this.i.S)(f,e,k),this.i);return c};var al=function(a){};var bl=function(a){var b;E(this.getName(),["path:!string"],arguments);se(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return nb(b,this.i)};var cl=function(a,b){var c=null;return nb(c,this.i)};var dl=function(a){var b;E(this.getName(),["path:!string"],arguments);se(this,"access_globals","readwrite",a);var c=a.split("."),d=Xa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Da(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return nb(b,
this.i)};var el=function(a){var b;return b};var fl=function(a,b){b=void 0===b?!0:b;var c;return c};var gl=function(a,b){var c;return c};var hl=function(a,b){var c;return c};var il=function(a){var b="";return b};var jl=function(a){var b="";return b};var kl=function(a,b){};var ll={},ml=function(a,b,c,d){E(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);se(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Aa(e)},h=function(){c instanceof $a&&c.Aa(e)};if(!d){Me(a,f,h);return}var k=d;ll[k]?(ll[k].onSuccess.push(f),ll[k].onFailure.push(h)):(ll[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=ll[k].onSuccess,m=0;m<l.length;m++)I(l[m]);l.push=function(n){I(n);
return 0}},h=function(){for(var l=ll[k].onFailure,m=0;m<l.length;m++)I(l[m]);ll[k]=null},Me(a,f,h));};var nl=function(){return!1},ol={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var pl=function(){try{se(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=ob(a[b],this.i);console.log.apply(console,a);};var ql=function(a,b){var c=!1;return c};var rl=function(a,b,c){};var sl=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var tl=function(a,b,c){E(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);se(this,"access_globals","readwrite",a);var d=a.split("."),e=D,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=ob(b,this.i),!0;return!1};var ul=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var vl=function(a,b,c){var d=this;};var wl=function(a){var b;return b};function xl(a){}
function yl(a,b){var c;return nb(c,this.i)}function zl(){var a="";return a}
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
Y.b.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.priorityOverride=0})(function(){return"367"})}();

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.b.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(tg(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=on("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ah(Ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nn(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Cm(c,"gtm.click");pn(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!tn("cl")){var c=U("document");Qe(c,"click",a,!0);un("cl")}I(b.vtp_gtmOnSuccess)})}();
Y.b.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return rn(a.vtp_name,on("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.g="access_globals";Y.__access_globals.h=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,q,t){if(!r(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<C(e,t))return}else if("write"===q){if(-1<C(f,t))return}else if("readwrite"===q){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===q){if(-1<C(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},J:a}})}();
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


Y.b.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.priorityOverride=0})(function(){return Gd.w})}();


Y.b.aev=["google"],function(){function a(p,u){var v=tg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(p,w);if(A&&(x=v(A),n[y]=x,q.push(y),35<q.length)){var z=q.shift();delete n[z]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(ln());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!bo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ah(Ch(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Se(p,"value");case "button":return Te(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)Jm(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&Se(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Te)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),z=Ch(A),B=String(p.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,p.vtp_affiliatedDomains);break a;default:x=Ah(z,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var F;if(void 0===p.vtp_attribute)F=c(u,w,v);else{var J=p.vtp_attribute,N=a(u,"element");F=N&&Se(N,J)||v||""}return F;case "MD":var Z=p.vtp_mdValue,la=b(u,"MD",Vm);return Z&&la?Ym(la,
Z)||v:la||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();
Y.b.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.priorityOverride=0})(function(a){var b=G(a),c=b;c[rd.wa]=null;c[rd.af]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.b.bzi=["nonGoogleScripts"],function(){(function(a){Y.__bzi=a;Y.__bzi.g="bzi";Y.__bzi.h=!0;Y.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,T(R("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){I(a.vtp_gtmOnFailure)}})}();Y.b.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.g="remm";Y.__remm.h=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.b.logging=["google"],function(){function a(){return{}}(function(b){Y.__logging=b;Y.__logging.g="logging";Y.__logging.h=!0;Y.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Zn.Eg())throw d(e,{},"Logging is not enabled in all environments");},J:a}})}();Y.b.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=co(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Y.b.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.g="twitter_website_tag";Y.__twitter_website_tag.h=!0;Y.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],T("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=co(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);I(a.vtp_gtmOnSuccess)})}();
Y.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Le(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=xn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Rc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Ue(h),k,e)()}else kn(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();

Y.b.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.g="dbg";Y.__dbg.h=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();




Y.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Cg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Ve(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Gm("lcl",k?"nv.mwt":"mwt",0),m;m=k?Gm("lcl","nv.ids",[]):Gm("lcl","ids",[]);if(m.length){var n=Cm(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var q=String(wn(h,"rel")||""),t=!!Ga(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Jf("GTM",36);var p=U((wn(h,"target")||"_self").substring(1)),u=!0;if(pn(n,sm(function(){var v;if(v=u&&p){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Cg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=wn(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else pn(n,function(){},l||2E3);return!0}}};Qe(c,"click",e,!1);Qe(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=wn(d,"href"),h=f.indexOf("#"),k=wn(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=nn(f),m=nn(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.g="lcl";Y.__lcl.h=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Fm("lcl","mwt",k,0);e||Fm("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Fm("lcl","ids",l,[]);e||Fm("lcl","nv.ids",l,[]);tn("lcl")||(a(),un("lcl"));I(c.vtp_gtmOnSuccess)})}();
Y.b.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(on("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!an(f.target)){h.has(e.Db)||h.set(e.Db,""+b());h.has(e.Bc)||h.set(e.Bc,""+b());var q=0;h.has(e.Fb)&&(q=Number(h.get(e.Fb)));q+=100;h.set(e.Fb,""+q);if(q>=k){var t=Cm(f.target,"gtm.elementVisibility",[h.uid]),p=$m(f.target);t["gtm.visibleRatio"]=Math.round(1E3*p)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.Bc));
t["gtm.visibleLastTime"]=Number(h.get(e.Db));pn(t);l()}}}if(!h.has(e.Ya)&&(0==k&&m(),!h.has(e.Fa))){var n=U("self").setInterval(m,100);h.set(e.Ya,n)}}function d(f){f.has(e.Ya)&&(U("self").clearInterval(Number(f.get(e.Ya))),f.a(e.Ya))}var e={Ya:"polling-id-",Bc:"first-on-screen-",Db:"recent-on-screen-",Fb:"total-visible-time-",Fa:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.a=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Y.__evl=f;Y.__evl.g="evl";Y.__evl.h=!0;Y.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Ze(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=H.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new a(v[z],p);d(B)}v=[];for(var F=0;F<x.length;F++)v.push(x[F]);0<=w&&gn(w);0<v.length&&(w=fn(k,v,[t]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=t?x.has(e.Fa)||c(y,x,q,"ONCE"===u?function(){for(var A=0;A<v.length;A++){var z=new a(v[A],p);z.set(e.Fa,"1");d(z)}gn(w);if(n&&Nm)for(var B=0;B<Nm.length;B++)Nm[B]===h&&Nm.splice(B,1)}:function(){x.set(e.Fa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===u&&x.has(e.Fa)&&(x.a(e.Fa),x.a(e.Fb)),x.a(e.Db))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;h();n&&Om(h);I(f.vtp_gtmOnSuccess)})}();

var Np={};Np.macro=function(a){if(zm.Fc.hasOwnProperty(a))return zm.Fc[a]},Np.onHtmlSuccess=zm.oe(!0),Np.onHtmlFailure=zm.oe(!1);Np.dataLayer=mg;Np.callback=function(a){Ff.hasOwnProperty(a)&&Da(Ff[a])&&Ff[a]();delete Ff[a]};function Op(){Q[Gd.w]=Np;Ua(Gf,Y.b);jd=jd||zm;kd=Sg}
function Pp(){Yi.gtm_3pds=!0;Q=D.google_tag_manager=D.google_tag_manager||{};if(Q[Gd.w]){var a=Q.zones;a&&a.unregisterChild(Gd.w)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)ed.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Y;id=Wn;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Bl();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Gf[x]=w}El(v);Op();ym();Wg=!1;Xg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Zg();else{Qe(H,"DOMContentLoaded",
Zg);Qe(H,"readystatechange",Zg);if(H.createEventObject&&H.documentElement.doScroll){var A=!0;try{A=!D.frameElement}catch(J){}A&&$g()}Qe(D,"load",Zg)}Xl=!1;"complete"===H.readyState?Zl():Qe(D,"load",Zl);a:{if(!bg)break a;D.setInterval(cg,864E5);}
Cf=(new Date).getTime();}}Pp();

})()
