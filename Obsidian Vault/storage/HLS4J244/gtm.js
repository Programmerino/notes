
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"20",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",1],8,16],"?",["escape",["macro",1],8,16],":\"Unknown Line\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",3],8,16],"?",["escape",["macro",3],8,16],":\"Unknown Error URL\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer.filter(function(a){return\"unifiedPageview\"===a.event});return a.length})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"askoc"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",6],8,16],"?!1:!0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"askid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",8],8,16],"?!1:!0})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"utm_medium"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",10],8,16],"?",["escape",["macro",10],8,16],":",["escape",["macro",11],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/player\\.vimeo\\.com\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube\\.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"dqi"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"qsrc"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=encodeURIComponent(",["escape",["macro",8],8,16],"),b=\"pv\",c=encodeURIComponent(",["escape",["macro",15],8,16],"),d=encodeURIComponent(",["escape",["macro",16],8,16],"),e=encodeURIComponent(",["escape",["macro",6],8,16],"),f=encodeURIComponent(",["escape",["macro",17],8,16],");return a=[\"https:\/\/www.verywellmind.com\/sp.gif?askid\\x3d\",encodeURIComponent(a),\"\\x26type\\x3d\",encodeURIComponent(b),\"\\x26qsrc\\x3d\",encodeURIComponent(d),\"\\x26o\\x3d\",encodeURIComponent(e),\"\\x26dqi\\x3d\",encodeURIComponent(c),\"\\x26useragent\\x3d\",encodeURIComponent(f)].join(\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){filteredKeys=[];for(var a in b)b[a]\u0026\u0026filteredKeys.push(a);arrayToJoin=[];for(a in filteredKeys)arrayToJoin.push(filteredKeys[a]+\": \"+b[filteredKeys[a]]);return arrayToJoin.join(\" | \")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){a=a||0===a?a.toString():\"\";a=a.replace(\/([a-z])([A-Z])\/g,\"$1 $2\");a=a.replace(\/([A-Z])([a-z])\/g,\" $1$2\");a=a.replace(\/ +\/g,\" \");y=a.charAt(0).toUpperCase()+a.slice(1);return y.trim()}})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoUploadDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",21],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",23],8,16],"?",["escape",["macro",23],8,16],":\"Unknown\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"taxonomyNodes"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function g(a){a=a.slice(5);a=a.map(function(a){return a.shortName+\" (#\"+a.documentId+\")\"});return a.join(\", \")}function h(a){for(var c=[],e,b=e=0;b\u003Ca.length;b++)a[b].length\u003Ee\u0026\u0026(e=a[b].length);for(b=5;b\u003Ce;b++){for(var f=[],d=0;d\u003Ca.length;d++)a[d][b]?f.push(a[d][b].shortName+\" (#\"+a[d][b].documentId+\")\"):f.push(\"\");c.push(f.join(\"|\"))}return c.join(\"~\")}var c=",["escape",["macro",25],8,16],";if(\"object\"==typeof c){if(c[0].constructor===Array)return h(c);if(5\u003Cc.length)return g(c)}return\"\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPreviousAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",29],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoMillisecondsWatched"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",31],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"title"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"?",["escape",["macro",33],8,16],":",["escape",["macro",34],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!!window.opr\u0026\u0026!!opr.addons||!!window.opera||0\u003C=navigator.userAgent.indexOf(\" OPR\/\"),c=\"undefined\"!==typeof InstallTrigger;\/constructor\/i.test(window.HTMLElement);var a=!!document.documentMode,d=!a\u0026\u0026!!window.StyleMedia,e=!!window.chrome\u0026\u0026!!window.chrome.webstore;return b?\"Opera\":c?\"Firefox\":a?\"Internet Explorer\":d?\"Microsoft Edge\":e?\"Chrome\":\"Other\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerColor"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",37],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdLength"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",39],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)0\u003Ca[b].length\u0026\u0026(c[b]=a[b][0].shortName+\" (#\"+a[b][0].documentId+\")\");return a=c.join(\"|\")}if(0\u003Ca.length)return a[0].shortName+\" (#\"+a[0].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerWidth"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",42],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPercent1000Watched"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",44],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"previousPageOrdinal"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"currentPageOrdinal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C",["escape",["macro",46],8,16],"?",["escape",["macro",47],8,16],"\u003E",["escape",["macro",46],8,16],"?\"Down\":\"Up\":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)1\u003Ca[b].length\u0026\u0026(c[b]=a[b][1].shortName+\" (#\"+a[b][1].documentId+\")\");return a=c.join(\"|\")}if(1\u003Ca.length)return a[1].shortName+\" (#\"+a[1].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoLength"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",50],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"pageviewType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"ajax\"==",["escape",["macro",52],8,16],")try{var b=window.dataLayer.filter(function(a){return\"unifiedPageview\"===a.event}).reverse()[1].fullUrl;return b}catch(a){}return document.referrer?document.referrer:null})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoHostPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",54],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoTimestamp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",56],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerHeight"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",58],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)4\u003Ca[b].length\u0026\u0026(c[b]=a[b][4].shortName+\" (#\"+a[b][4].documentId+\")\");return a=c.join(\"|\")}if(4\u003Ca.length)return a[4].shortName+\" (#\"+a[4].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"publishDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",61],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",21],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"true",
      "vtp_name":"nativeAdEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",64],8,16],"?\"Native Ad Enabled\":\"Not Native Ad Enabled\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Time\"===",["escape",["macro",28],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",66],8,16],"||\"Error\"===",["escape",["macro",28],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",66],8,16],"?\"beacon\":null})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",68],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoTargetingType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",70],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"updateDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",72],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)3\u003Ca[b].length\u0026\u0026(c[b]=a[b][3].shortName+\" (#\"+a[b][3].documentId+\")\");return a=c.join(\"|\")}if(3\u003Ca.length)return a[3].shortName+\" (#\"+a[3].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoHostUser"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",75],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoSourceUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",77],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)2\u003Ca[b].length\u0026\u0026(c[b]=a[b][2].shortName+\" (#\"+a[b][2].documentId+\")\");return a=c.join(\"|\")}if(2\u003Ca.length)return a[2].shortName+\" (#\"+a[2].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"millisecondsEngaged"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"timeEngagedGAEvent\"===",["escape",["macro",27],8,16],"?",["escape",["macro",80],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isErrorPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",82],8,16],"?",["escape",["macro",83],8,16],"?",["escape",["macro",83],8,16],"+\" Error\":\"Unknown Error\":\"Not Error Page\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoAutoplayEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",85],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdSkipEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",87],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"hitTimeOffset"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Time\"===",["escape",["macro",28],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",66],8,16],"||\"Error\"===",["escape",["macro",28],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",66],8,16],"?0\u003E",["escape",["macro",89],8,16],"?0:",["escape",["macro",89],8,16],":0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPreviousActionTimestamp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",91],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f,g,b,c){b=0\u003Eb?0:b;c=0\u003Ec?0:c;var a=4,d=f\/a,e=g\/a;d=parseInt(b\/d)+1;e=parseInt(c\/e)+1;b==f\u0026\u0026(d=a);c==g\u0026\u0026(e=a);return d\u003C=a\u0026\u0026e\u003C=a?(e-1)*a+d:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";\"object\"==typeof a\u0026\u00262\u003Ca.length?(a=a[2].shortName,a=a.replace(\/ \/g,\"_\")):a=\"none\";return a=\"https:\/\/d.turn.com\/r\/dd\/id\/L21rdC84MTYvY2lkLzI4NTg1NDMyL3QvMg\/kv\/SiteID\\x3d\"+a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"videoTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",95],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"videoId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",97],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"html\")[0].id;return a.substr(0,a.indexOf(\"_\"))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"article_1-0\").getAttribute(\"data-ptax\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/TMog=.[^;]*\/;return(matched=document.cookie.match(a))?(a=matched[0].split(\"\\x3d\"),a[1]):!1})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorTestName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"contentGroup"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",105],
      "vtp_name":"fullUrl"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",106]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"cr version loaded_cr cis pv inf chpg entryType\".split(\" \"),a=",["escape",["macro",107],8,16],";a=a.split(\"\\x26\");for(var d=[],e,b=0;b\u003Ca.length;b++)e=a[b].split(\"\\x3d\")[0],-1==c.indexOf(e)\u0026\u0026d.push(a[b]);return c=d.join(\"\\x26\")})();"]
    },{
      "function":"__u",
      "vtp_defaultPages":["list"],
      "vtp_component":"PATH",
      "vtp_customUrlSource":["macro",106]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",108],8,16],"?",["escape",["macro",109],8,16],"+\"?\"+",["escape",["macro",108],8,16],":",["escape",["macro",109],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"euTrafficFlag"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"characterCount"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"gs"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"ch"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"authorId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"templateId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"googleAdClient"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"googleAdChannel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBsT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBTr"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat0"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat1"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat2"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat3"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat4"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"socialTitle"
    },{
      "function":"__j",
      "vtp_name":"document.body.scrollHeight"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"am"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"q"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"an"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketDesc"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.application"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.dataCenter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.serverName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.vendor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.loadStartTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.loadTimeTaken"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.client.serverUA"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"experienceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",53],8,16],";return a?a:\"Direct\"})();"]
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",53]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",150],8,16],";return a?a:\"Direct\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"experienceTypeName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfImages"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfPages"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"recircDocIdsFooter"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"xDomainUserId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==",["escape",["macro",5],8,16],"?1:",["escape",["macro",5],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isCommerceDocument"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",27],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",27],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",28],8,16],"?",["escape",["macro",22],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"templateVariation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"numOfMapLabels"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventOther"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\/.+(specials\\.about\\.com|\\\/sp\\\/[^\\\/\\.]+\\.html?)\/.test(",["escape",["macro",106],8,16],")\u0026\u0026-1==\"0 9 16 37 38 44 50 53 55 56 59 64\".split(\" \").indexOf(",["escape",["macro",116],8,16],")){if(-1\u003C",["escape",["macro",106],8,16],".indexOf(\".htm\")){var a=",["escape",["macro",106],8,16],".match(\/[^\/\\\\\u0026\\?]+\\.\\w{3,4}(?=([\\?\u0026].*$|$))\/i)[0];return a=a.split(\".\")[0]}return(a=",["escape",["macro",106],8,16],".match(\/[^\/]+(?=\\.specials)\/)[0])?a:\"\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",166],
      "vtp_name":"specialsAdCampaignID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"documentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdAdvertiser"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdIndustry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdTargetedChannel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/specials\\.about\\.com|\\\/sp\\\/\/.test(",["escape",["macro",106],8,16],")?-1\u003C",["escape",["macro",35],8,16],".indexOf(\" - \")?",["escape",["macro",35],8,16],".match(\/.+(?= - )\/)[0]:0\u003C",["escape",["macro",35],8,16],".length?",["escape",["macro",35],8,16],":\"Unknown\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",173],
      "vtp_name":"specialsAdTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adventureNavOrdinal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalSessionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalRequestId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"breakpointName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adventureNavDocIds"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"lastEditingAuthorId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"lastEditingUserId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"instartLogicDelivered"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"ptax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"envData.client.deviceType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"envData.client.usStateCode"
    },{
      "function":"__c",
      "vtp_value":"UA-40872762-23"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",103]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",104]],["map","fieldName","page","value",["macro",110]],["map","fieldName","\u0026qt","value",["macro",90]],["map","fieldName","transport","value",["macro",67]],["map","fieldName","title","value",["macro",35]],["map","fieldName","forceSSL","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","\u0026dr","value",["macro",53]],["map","fieldName","anonymizeIp","value",["macro",111]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",112]],["map","index","2","metric"," "],["map","index","3","metric"," "],["map","index","4","metric",["macro",81]],["map","index","5","metric",["macro",32]],["map","index","6","metric",["macro",45]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",113]],["map","index","2","dimension",["macro",114]],["map","index","3","dimension",["macro",115]],["map","index","4","dimension",["macro",116]],["map","index","5","dimension",["macro",117]],["map","index","6","dimension",["macro",118]],["map","index","7","dimension",["macro",119]],["map","index","8","dimension",["macro",120]],["map","index","9","dimension",["macro",121]],["map","index","10","dimension",["macro",122]],["map","index","11","dimension",["macro",123]],["map","index","12","dimension",["macro",124]],["map","index","13","dimension",["macro",125]],["map","index","14","dimension",["macro",126]],["map","index","15","dimension",["macro",127]],["map","index","16","dimension",["macro",128]],["map","index","17","dimension"," "],["map","index","18","dimension",["macro",112]],["map","index","19","dimension",["macro",8]],["map","index","20","dimension",["macro",6]],["map","index","21","dimension",["macro",129]],["map","index","22","dimension",["macro",130]],["map","index","23","dimension",["macro",131]],["map","index","24","dimension",["macro",16]],["map","index","25","dimension",["macro",15]],["map","index","26","dimension",["macro",65]],["map","index","27","dimension",["macro",132]],["map","index","28","dimension",["macro",133]],["map","index","29","dimension",["macro",134]],["map","index","30","dimension",["macro",135]],["map","index","31","dimension",["macro",102]],["map","index","32","dimension",["macro",136]],["map","index","33","dimension",["macro",137]],["map","index","34","dimension",["macro",138]],["map","index","35","dimension",["macro",139]],["map","index","36","dimension",["macro",140]],["map","index","37","dimension",["macro",141]],["map","index","38","dimension",["macro",142]],["map","index","39","dimension",["macro",143]],["map","index","40","dimension",["macro",144]],["map","index","41","dimension",["macro",145]],["map","index","42","dimension",["macro",146]],["map","index","43","dimension",["macro",147]],["map","index","44","dimension",["macro",148]],["map","index","45","dimension",["macro",47]],["map","index","46","dimension",["macro",46]],["map","index","47","dimension"," "],["map","index","48","dimension",["macro",149]],["map","index","49","dimension",["macro",151]],["map","index","50","dimension",["macro",52]],["map","index","51","dimension",["macro",152]],["map","index","52","dimension",["macro",61]],["map","index","53","dimension",["macro",62]],["map","index","54","dimension",["macro",72]],["map","index","55","dimension",["macro",73]],["map","index","56","dimension",["macro",153]],["map","index","57","dimension",["macro",154]],["map","index","58","dimension",["macro",155]],["map","index","59","dimension",["macro",156]],["map","index","60","dimension",["macro",157]],["map","index","61","dimension",["macro",48]],["map","index","62","dimension",["macro",158]],["map","index","63","dimension",["macro",55]],["map","index","64","dimension",["macro",111]],["map","index","65","dimension",["macro",51]],["map","index","66","dimension",["macro",86]],["map","index","67","dimension",["macro",63]],["map","index","68","dimension",["macro",159]],["map","index","69","dimension",["macro",43]],["map","index","70","dimension",["macro",59]],["map","index","71","dimension",["macro",38]],["map","index","72","dimension",["macro",76]],["map","index","73","dimension",["macro",78]],["map","index","74","dimension",["macro",57]],["map","index","75","dimension",["macro",71]],["map","index","76","dimension",["macro",30]],["map","index","77","dimension",["macro",92]],["map","index","78","dimension",["macro",69]],["map","index","79","dimension",["macro",40]],["map","index","80","dimension",["macro",88]],["map","index","81","dimension",["macro",84]],["map","index","82","dimension",["macro",160]],["map","index","83","dimension",["macro",161]],["map","index","84","dimension",["macro",162]],["map","index","85","dimension",["macro",163]],["map","index","86","dimension",["macro",164]],["map","index","87","dimension",["macro",165]],["map","index","88","dimension"," "],["map","index","89","dimension",["macro",167]],["map","index","90","dimension",["macro",168]],["map","index","91","dimension",["macro",169]],["map","index","92","dimension",["macro",170]],["map","index","93","dimension",["macro",171]],["map","index","94","dimension",["macro",172]],["map","index","95","dimension",["macro",174]],["map","index","96","dimension",["macro",41]],["map","index","97","dimension",["macro",49]],["map","index","98","dimension",["macro",79]],["map","index","99","dimension",["macro",74]],["map","index","100","dimension",["macro",60]],["map","index","101","dimension",["macro",26]],["map","index","102","dimension",["macro",175]],["map","index","103","dimension",["macro",176]],["map","index","104","dimension",["macro",177]],["map","index","105","dimension",["macro",178]],["map","index","106","dimension",["macro",179]],["map","index","107","dimension",["macro",180]],["map","index","108","dimension",["macro",181]],["map","index","112","dimension",["macro",182]],["map","index","109","dimension",["macro",183]],["map","index","110","dimension",["macro",184]],["map","index","113","dimension",["macro",185]],["map","index","114","dimension",["macro",36]],["map","index","115","dimension",["macro",186]],["map","index","116","dimension",["macro",187]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",188],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.elements.q.value"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",0],
      "vtp_name":"excludeFromComscore"
    },{
      "function":"__c",
      "vtp_value":"aboutespanol.com, dotdash.com, lifewire.com, liveabout.com, thebalance.com, thebalancecareers.com, thebalanceeveryday.com, thebalancesmb.com, thespruce.com, thesprucecrafts.com, thespruceeats.com, thesprucepets.com, thoughtco.com, tripsavvy.com, verywell.com, verywellfamily.com, verywellfit.com, verywellhealth.com"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"abTests"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageWidth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageHeight"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataOrdinal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataDocId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkContainerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"domAncestorIds"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromTopOfPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromLeftOfPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromTopOfMainContainer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromLeftOfMainContainer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"dataHref"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataPinUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"alreadyTrackedImpressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdCampaignID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdAdvertiser"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdIndustry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTargetedChannel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataNetwork"
    },{
      "function":"__c",
      "vtp_value":"UA-XXXXXXXX-X"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"entryType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfArticleWords"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfInlineLinks"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\" src=\"https:\/\/tags.crwdcntrl.net\/c\/12522\/cc.js?ns=_cc12522\" id=\"LOTCC_12522\"\u003E\u003C\/script\u003E\n \u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003E_cc12522.bcp();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":["template","Proctor | ",["macro",102]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":["template",["macro",133]," | ",["macro",134]],
      "vtp_eventLabel":["template",["macro",132]," | ",["macro",135]],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: GA - Proctor Event - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",192],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",193],
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":["macro",66],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: General Event - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",192],
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"JavaScript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["template","Line ",["macro",2]," ",["macro",4]],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: JavaScript Error - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",192],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",193],
      "vtp_eventCategory":"Email",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":"Newsletter Signup",
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: Newsletter Event - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",192],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",193],
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":"Internal Search",
      "vtp_eventLabel":["macro",195],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: Search Form - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__csm",
      "once_per_event":true,
      "vtp_clientId":"6036459",
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",197],
      "vtp_gaSettings":["macro",189],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: Unified Pageview - Channel"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",192],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",193],
      "vtp_eventCategory":["macro",28],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",189],
      "vtp_eventAction":["macro",66],
      "vtp_eventLabel":["macro",194],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: eCommerce Enabled Event - Channel"]],
      "vtp_enableEcommerce":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8045862_11",
      "tag_id":29
    },{
      "function":"__jel",
      "tag_id":30
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8045862_17",
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=window.dataLayer||[];dataLayer.push({event:\"unifiedPageview\",fullUrl:",["escape",["macro",106],8,16],",title:",["escape",["macro",35],8,16],",pageviewType:\"standard\",excludeFromComscore:!1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){for(var c=window.dataLayer=window.dataLayer||[],a=0;a\u003Cb.length;a++)\"99\"!==b[a].bucketTrackingId\u0026\u0026c.push({event:\"proctorBucket\",proctorTestName:b[a].testName||\"none\",proctorBucketID:b[a].bucketTrackingId||\"none\",proctorBucketName:b[a].bucketName||\"none\",proctorBucketDesc:b[a].bucketDescription||\"none\",proctorBucketValue:b[a].bucketValue||\"none\"})})(",["escape",["macro",198],8,16],"||[]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(dataLayer){var cleanVarName=",["escape",["macro",20],8,16],";var cleanJoin=",["escape",["macro",19],8,16],";var linkId=",["escape",["macro",199],8,16],";var linkText=",["escape",["macro",200],8,16],";var pageWidth=",["escape",["macro",201],8,16],";var pageHeight=",["escape",["macro",202],8,16],";var linkTargetType=",["escape",["macro",203],8,16],";var dataOrdinal=",["escape",["macro",204],8,16],";var dataDocId=",["escape",["macro",205],8,16],";var linkContainerId=",["escape",["macro",206],8,16],";var domAncestorIds=",["escape",["macro",207],8,16],";var pixelsFromTopOfPage=",["escape",["macro",208],8,16],";var pixelsFromLeftOfPage=\n",["escape",["macro",209],8,16],";var pixelsFromTopOfMainContainer=",["escape",["macro",210],8,16],";var pixelsFromLeftOfMainContainer=",["escape",["macro",211],8,16],";var linkTargetUrl=",["escape",["macro",212],8,16],"?",["escape",["macro",212],8,16],":",["escape",["macro",213],8,16],";if((!linkTargetUrl||linkTargetUrl==\"#\")\u0026\u0026",["escape",["macro",214],8,16],")linkTargetUrl=",["escape",["macro",214],8,16],";var alreadyTrackedImpressions=[];if(",["escape",["macro",215],8,16],"!==undefined)for(i=0;i\u003C",["escape",["macro",215],8,16],".length;i++)alreadyTrackedImpressions.push(",["escape",["macro",215],8,16],"[i]);var linkContainerQuadrant;\nfor(i=0;i\u003CalreadyTrackedImpressions.length;i++)if(alreadyTrackedImpressions[i].id==linkContainerId)linkContainerQuadrant=alreadyTrackedImpressions[i].quadrant;var cleanedLinkContainerId;if(linkContainerId.indexOf(\"_\")!==-1)cleanedLinkContainerId=linkContainerId.substr(0,linkContainerId.indexOf(\"_\"));else cleanedLinkContainerId=linkContainerId;var typeOfTarget;var urlNoParams;if(linkTargetType==\"onpage\")typeOfTarget=\"Intrapage\";else if(linkTargetType==\"offpage\"){if(linkTargetUrl.indexOf(\"?\")!==-1)urlNoParams=\nlinkTargetUrl.substr(0,linkTargetUrl.indexOf(\"?\"));else urlNoParams=linkTargetUrl;if(urlNoParams.toLowerCase().indexOf(\"about.com\")!==-1||urlNoParams.toLowerCase().indexOf(\"verywellmind.com\")!==-1||urlNoParams.toLowerCase().indexOf(\"dotdash.com\")!==-1)typeOfTarget=\"Internal\";else typeOfTarget=\"External\"}var clickArray=[];clickArray.push({\"name\":cleanedLinkContainerId,\"list\":",["escape",["macro",116],8,16],",\"category\":linkContainerQuadrant});var unwantedButtonClick=false;if(unwantedButtonClick)dataLayer.push({\"event\":\"Non-Click Tracking Button Press\",\n\"eventCallback\":function(){var eventClick=document.createEvent(\"Event\");eventClick.initEvent(\"click-sent\",true,true);document.body.dispatchEvent(eventClick)}});else{var craftedEvent=\"linkClickGAEvent\";var eventCategory;var eventAction;var eventLabel;var nonInteraction=linkTargetUrl==\"\"?false:true;var eventOtherObject;if(cleanedLinkContainerId==\"native-ad\"){eventCategory=\"Advertisement\";var identifier;if(",["escape",["macro",216],8,16],")if(",["escape",["macro",217],8,16],")identifier=",["escape",["macro",216],8,16],"+\" (Native Ad Campaign ID: \"+\n",["escape",["macro",217],8,16],"+\")\";else identifier=",["escape",["macro",216],8,16],"+\" (Native Ad Campaign ID: Unknown)\";else if(",["escape",["macro",217],8,16],")identifier=\"Unknown (Native Ad Campaign ID: \"+",["escape",["macro",217],8,16],"+\")\";else identifier=\"Unidentified Campaign\";eventAction=identifier;eventLabel=linkId?linkId:linkText?linkText:\"No Text or ID\";eventOtherObject={\"Ad Type\":\"Native Ad\",\"Ad Title\":",["escape",["macro",216],8,16],",\"Ad Campaign ID\":",["escape",["macro",217],8,16],",\"Ad Advertiser\":",["escape",["macro",218],8,16],",\"Ad Template\":",["escape",["macro",219],8,16],",\n\"Ad Industry\":",["escape",["macro",220],8,16],",\"Ad Targeted Channel\":",["escape",["macro",221],8,16],",\"Text\":linkText,\"Target Type\":typeOfTarget,\"Ordinal\":dataOrdinal,\"Document ID\":dataDocId,\"Social Network\":cleanVarName(",["escape",["macro",222],8,16],"),\"ID\":linkId,\"Container ID\":linkContainerId,\"Pixels from Top of Page\":parseInt(pixelsFromTopOfPage),\"Pixels from Left of Page\":parseInt(pixelsFromLeftOfPage),\"Pixels from Top of Main Container\":parseInt(pixelsFromTopOfMainContainer),\"Pixels from Left of Main Container\":parseInt(pixelsFromLeftOfMainContainer),\n\"DOM Ancestor IDs\":domAncestorIds.join(\",\"),\"User Trigger\":\"Link Click\",\"Technical Trigger\":\"GTM Data Layer Push\",\"Interactive\":cleanVarName((!nonInteraction).toString())}}else{eventCategory=cleanedLinkContainerId?cleanedLinkContainerId+\" Click\":\"Link Click (No Tracked Container)\";eventAction=linkText?linkText:linkId?linkId:\"No Text or ID\";eventLabel=linkTargetUrl?linkTargetUrl:\"No Target URL\";eventOtherObject={\"Text\":linkText,\"Target Type\":typeOfTarget,\"Ordinal\":dataOrdinal,\"Document ID\":dataDocId,\n\"Social Network\":cleanVarName(",["escape",["macro",222],8,16],"),\"ID\":linkId,\"Container ID\":linkContainerId,\"Pixels from Top of Page\":parseInt(pixelsFromTopOfPage),\"Pixels from Left of Page\":parseInt(pixelsFromLeftOfPage),\"Pixels from Top of Main Container\":parseInt(pixelsFromTopOfMainContainer),\"Pixels from Left of Main Container\":parseInt(pixelsFromLeftOfMainContainer),\"DOM Ancestor IDs\":domAncestorIds.join(\",\"),\"User Trigger\":\"Link Click\",\"Technical Trigger\":\"GTM Data Layer Push\",\"Interactive\":cleanVarName((!nonInteraction).toString())}}var eventOther=\ncleanJoin(eventOtherObject);var eventValue=\"\";dataLayer.push({\"event\":craftedEvent,\"eventCategory\":eventCategory,\"eventAction\":eventAction,\"eventLabel\":eventLabel,\"eventValue\":eventValue,\"eventOther\":eventOther,\"nonInteraction\":nonInteraction,\"ecommerce\":{\"click\":{\"products\":clickArray}},\"eventCallback\":function(){var eventClick=document.createEvent(\"Event\");eventClick.initEvent(\"click-sent\",true,true);document.body.dispatchEvent(eventClick)}})}})(window.dataLayer||[]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cleanVarName=",["escape",["macro",20],8,16],",cleanJoin=",["escape",["macro",19],8,16],",craftedEvent=\"nativeAdImpressionGAEvent\",eventCategory=\"Advertisement\",identifier,eventAction=identifier=",["escape",["macro",216],8,16],"?",["escape",["macro",217],8,16],"?",["escape",["macro",216],8,16],"+\" (Native Ad Campaign ID: \"+",["escape",["macro",217],8,16],"+\")\":",["escape",["macro",216],8,16],"+\" (Native Ad Campaign ID: Unknown)\":",["escape",["macro",217],8,16],"?\"Unknown (Native Ad Campaign ID: \"+",["escape",["macro",217],8,16],"+\")\":\"Unidentified Campaign\",eventLabel=\"Impression\",nonInteraction=!0,\neventOtherObject={\"Ad Type\":\"Native Ad\",\"Ad Title\":",["escape",["macro",216],8,16],",\"Ad Campaign ID\":",["escape",["macro",217],8,16],",\"Ad Advertiser\":",["escape",["macro",218],8,16],",\"Ad Template\":",["escape",["macro",219],8,16],",\"Ad Industry\":",["escape",["macro",220],8,16],",\"Targeted Channel\":",["escape",["macro",221],8,16],",\"Technical Trigger\":\"Development Data Layer Push\",Interactive:cleanVarName((!nonInteraction).toString())},eventOther=cleanJoin(eventOtherObject),eventValue=\"\";\ndataLayer.push({event:craftedEvent,eventCategory:eventCategory,eventAction:eventAction,eventLabel:eventLabel,eventValue:eventValue,eventOther:eventOther,nonInteraction:nonInteraction});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.location.hostname.split(\".\").slice(-2).join(\".\");_UnifiedApiParams={appId:\"About_DS\",appVersion:document.documentElement.getAttribute(\"data-resource-version\").replace(\/\\.\/g,\"z\"),appDate:\"2017-01-01\",logPageView:!1,updateSession:!0,domain:\".\"+a,url:\"https:\/\/anx.ask.com\/log\/browser\/event\",backFillRequired:!0,suppressCookies:!1,cookieExpirationMinutes:129600,newSessionOnDomainChange:!1,cookieName:\"uc\"};Mntl.utilities.loadExternalJS({src:\"https:\/\/anx.ask.com\/static\/js\/unified-api.min.js\",\ncallback:function(){_UnifiedApi.logEvent(\"PageView\",{anuaapp:JSON.stringify({queryOrigination:\"semQuery\",metaInfo:{}}),anuaaf:\"AboutFramework\",anxp:a,anuaad:\"semD\",anuaptp:\"contentPage\",anualcl:\"us\",anuachl:\"web\",anuaadid:",["escape",["macro",8],8,16],",returnmsg:\"false\"},function(){})}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"786108458181251\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{content_type:",["escape",["macro",116],8,16],",content_name:",["escape",["macro",35],8,16],",content_category:",["escape",["macro",74],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=786108458181251\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dc8xl0ndzn2cb.cloudfront.net\/js\/about\/v0\/keywee.min.js\" type=\"text\/gtmscript\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar AP={getRawCookieValue:function(a){var b=null,c=\"; \"+document.cookie;a=c.split(\"; \"+a+\"\\x3d\");2==a.length\u0026\u0026(b=a.pop().split(\";\").shift());return b},updateCookie:function(a,b){var c=new Date;c.setTime(c.getTime()+18E5);document.cookie=a+\"\\x3d\"+b+\"; path\\x3d\/; expires\\x3d\"+c.toUTCString()}};(function(){var a=\"utm_medium\",b=",["escape",["macro",10],8,16],";b?AP.updateCookie(a,b):(b=AP.getRawCookieValue(a))\u0026\u0026AP.updateCookie(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.snowplowKW(\"trackPageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"8ae929af5ef7a9d7fee584d8f47d5bf1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];\n(function(e,a){function t(b){for(var c=0;c\u003Cb.length;c++)e.addEventListener?e.addEventListener(b[c],f):e.attachEvent\u0026\u0026e.attachEvent(\"on\"+b[c],f);window.onbeforeunload=function(){a.events.push(\"pageunload\");n()}}function f(b){b=b.type;var c=Date.now();a.start\u0026\u0026(a.firstTime=c,a.start=!1);a.events[a.events.length-1]!==b\u0026\u0026a.events.push(b);a.lastTime=c}function h(){return{start:!0,firstTime:0,lastTime:0,events:[]}}function n(){if(0\u003Ca.events.length)if(gapMilliseconds=a.firstTime-k.lastTime,engagedTime=gapMilliseconds\u003C\ng?a.lastTime-k.lastTime:a.lastTime-a.firstTime,events=a.events.join(\", \"),0\u003CengagedTime\u0026\u0026engagedTime\u003C=2*g){var b=events,c=engagedTime;var d=Date.now();d-=a.lastTime;l(\"timeEngaged\",b,c,m+\" Second Interval\",d)}else 1\u003EengagedTime||(b=events,c=engagedTime,d=Date.now(),d-=a.lastTime,l(\"timeEngagedError\",b,c,m+\" Second Interval\",d));k=a;a=h()}function u(){a=h();t(v);f({type:\"pageload\"});setInterval(function(){n()},g)}function l(a,c,d,e,g){var b=window.dataLayer||[],f=",["escape",["macro",20],8,16],",k=",["escape",["macro",19],8,16],",\nn=\"timeEngagedGAEvent\",p=!0;if(\"timeEngaged\"==a){var h=\"Time\";var l=\"Time Engaged\";var m=e;var q=\"\";var r={\"Actions Taken\":c,\"Technical Trigger\":\"GTM Data Layer Push\",Interactive:f((!p).toString())}}else\"timeEngagedError\"==a\u0026\u0026(h=\"Error\",l=\"Time Engaged\",m=e,d=q=\"\",r={\"Actions Taken\":c,\"Error Milliseconds Engaged\":d,\"Technical Trigger\":\"GTM Data Layer Push\",Interactive:f((!p).toString())});b.push({event:n,eventCategory:h,eventAction:l,eventLabel:m,eventValue:q,eventOther:k(r),nonInteraction:p,millisecondsEngaged:d,\nhitTimeOffset:g})}var g=3E4,m=Math.round(g\/1E3),v=[\"mouseover\",\"touchstart\",\"keydown\"],k={lastTime:0};u()})(window.document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];\n(function(){function a(){var c=0,b=0;window.RProfiler.addInfo(\"tracepoint\",\"ptax\",",["escape",["macro",100],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"rid\",",["escape",["macro",177],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"sid\",",["escape",["macro",176],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"uid\",",["escape",["macro",101],8,16],");window.RProfiler.addInfo(\"pageGroup\",",["escape",["macro",99],8,16],");googletag.cmd.push(function(){googletag.pubads().addEventListener(\"slotRenderEnded\",function(b){c++;window.debug.log(\"ad: slot rendered \"+\nb.slot.getSlotElementId())});googletag.pubads().addEventListener(\"impressionViewable\",function(c){b++;window.debug.log(\"ad: slot viewable \"+c.slot.getSlotElementId())})});window.addEventListener(\"beforeunload\",function(a){window.RProfiler.addInfo(\"indicator\",\"adsrendered\",c);window.RProfiler.addInfo(\"indicator\",\"adsviewable\",b);window.RProfiler.addInfo(\"conversion\",b,c);window.debug.log(\"slots rendered: \"+c);window.debug.log(\"slots viewable: \"+b)})}window.RProfiler?a():window.addEventListener(\"GlimpseLoaded\",\na)})();var WindowEvent;(function(a){a.Load=\"load\";a.BeforeUnload=\"beforeunload\";a.Abort=\"abort\";a.Error=\"error\";a.Unload=\"unload\"})(WindowEvent||(WindowEvent={}));\nvar AjaxTiming=function(){function a(c,b,a,h){var d=this;this.getPerformanceTimings=function(b){d.connect=b.connectEnd-b.connectStart;d.dns=b.domainLookupEnd-b.domainLookupStart;d.duration=b.duration;d.load=b.responseEnd-b.responseStart;d.wait=b.responseStart-b.requestStart;d.start=b.startTime;d.redirect=b.redirectEnd-b.redirectStart;b.secureConnectionStart\u0026\u0026(d.ssl=b.connectEnd-b.secureConnectionStart)};this.url=c;this.method=b;this.isAsync=a;this.open=h}return a}(),ProfilerJsError=function(){function a(c,\nb,a){this.count=0;this.message=c;this.url=b;this.lineNumber=a}return a.createText=function(c,b,a){return[c,b,a].join(\":\")},a.prototype.getText=function(){return a.createText(this.message,this.url,this.lineNumber)},a}(),ProfilerEventManager=function(){function a(){this.events=[];this.hasAttachEvent=!!window.attachEvent}return a.prototype.add=function(c,b,a){this.events.push({type:c,target:b,func:a});this.hasAttachEvent?b.attachEvent(\"on\"+c,a):b.addEventListener(c,a,!1)},a.prototype.clear=function(){for(var c,\nb=0,a=this.events;b\u003Ca.length;b++)c=a[b],this.hasAttachEvent?c.target.detachEvent(c.type,c.func):c.target.removeEventListener(c.type,c.func,!1);this.events=[]},a}(),RProfiler=function(){function a(){function a(b){b=b.target||b.srcElement;return 3==b.nodeType\u0026\u0026(b=b.parentNode),h(\"N\/A\",b.src||b.URL,-1),!1}var b=this,g;this.restUrl=\"g.3gl.net\/jp\/566\/v3.1.4\/M\";this.startTime=(new Date).getTime();this.version=\"v3.1.4\";this.info={};this.hasInsight=!1;this.data={start:this.startTime,jsCount:0,jsErrors:[],\nloadTime:-1,loadFired:\"complete\"==window.document.readyState,ajax:[]};this.eventManager=new ProfilerEventManager;this.startAjaxCapture=function(){var a=XMLHttpRequest.prototype,c=a.open,d=a.send,f=[],m={},g=b.data.ajax,h=25,p=\"object\"==typeof performance\u0026\u0026\"function\"==typeof window.performance.now\u0026\u0026\"function\"==typeof window.performance.getEntriesByType;p\u0026\u0026\"function\"==typeof window.performance.setResourceTimingBufferSize\u0026\u0026window.performance.setResourceTimingBufferSize(300);var k=function(){return p?\nwindow.performance.now():(new Date).getTime()};a.open=function(b,a,d,e,g){void 0===d\u0026\u0026(d=!0);this.rpIndex=f.length;f.push(new AjaxTiming(a,b,d,k()));c.call(this,b,a,d,e,g)};a.send=function(b){var a=this,c=this.onreadystatechange,e;(this.onreadystatechange=function(b){var d=f[a.rpIndex];if(d){var e=a.readyState;switch(e){case 1:d.connectionEstablished=k();break;case 2:d.requestReceived=k();break;case 3:d.processingTime=k();break;case 4:d.complete=k();e=!(!a.response||null==a.response||void 0==a.response);\nswitch(a.responseType){case \"text\":case \"\":\"string\"==typeof a.responseText\u0026\u0026(d.responseSize=a.responseText.length);break;case \"json\":e\u0026\u0026\"function\"==typeof a.response.toString\u0026\u0026(d.responseSize=a.response.toString().length);break;case \"arraybuffer\":e\u0026\u0026\"number\"==typeof a.response.byteLength\u0026\u0026(d.responseSize=a.response.byteLength);break;case \"blob\":e\u0026\u0026\"number\"==typeof a.response.size\u0026\u0026(d.responseSize=a.response.size)}(function(b){setTimeout(function(){var a,d;if(p){var c=b.url,e=[];var f=performance.getEntriesByType(\"resource\");\nfor(a=0;a\u003Cf.length;a++){var l=f[a];l.name==c\u0026\u0026e.push(l)}if(g.push(b),0!=e.length)if(m[c]||(m[c]=[]),1==e.length)b.getPerformanceTimings(e[0]),m[c].push(0);else{a=m[c];for(d in e)if(-1==a.indexOf(d)){b.getPerformanceTimings(e[d]);a.push(d);return}b.getPerformanceTimings(e[0])}}},h)})(d,g)}\"function\"==typeof c\u0026\u0026c.call(a,b)}},e=f[this.rpIndex],e)\u0026\u0026(b\u0026\u0026!isNaN(b.length)\u0026\u0026(e.sendSize=b.length),e.send=k(),d.call(this,b))}};this.recordPageLoad=function(){b.data.loadTime=(new Date).getTime();b.data.loadFired=\n!0};this.addError=function(a,c,d){var e,f;b.data.jsCount++;var g=ProfilerJsError.createText(a,c,d);var l=b.data.jsErrors;var h=0;for(e=l;h\u003Ce.length;h++)if(f=e[h],f.getText()==g){f.count++;return}l.push(new ProfilerJsError(a,c,d))};this.addInfo=function(a,c,d){if(!b.isNullOrEmpty(a)){if(b.isNullOrEmpty(d))b.info[a]=c;else{if(b.isNullOrEmpty(c))return;b.isNullOrEmpty(b.info[a])\u0026\u0026(b.info[a]={});b.info[a][c]=d}b.hasInsight=!0}};this.clearInfo=function(){b.info={};b.hasInsight=!1};this.clearErrors=function(){b.data.jsCount=\n0;b.data.jsErrors=[]};this.clearAjax=function(){b.data.ajax=[]};this.getInfo=function(){return b.hasInsight?b.info:null};this.eventManager.add(WindowEvent.Load,window,this.recordPageLoad);var h=this.addError;this.startAjaxCapture();window.opera?this.eventManager.add(WindowEvent.Error,document,a):\"onerror\"in window\u0026\u0026(g=window.onerror,window.onerror=function(b,a,c){return(h(b,a,c),g)?g(b,a,c):!1});!window.__cpCdnPath||(this.restUrl=window.__cpCdnPath.trim());var d=document.createElement(\"iframe\");var f=\nd.style;f.position=\"absolute\";f.top=\"-10000px\";f.left=\"-1000px\";f=document.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(d,f);d=d.contentWindow.document.open(\"text\/html\",\"replace\");f=window.location.protocol+\"\/\/\";var n='\\x3cbody onload\\x3d\"';n+=\"function s(u){var d\\x3ddocument,s\\x3dd.createElement('script');s.type\\x3d'text\/javascript';s.src\\x3du;d.body.appendChild(s);}\";n+=\"s('\"+f+this.restUrl+\"');\";n+='\"\\x3e\\x3c\/body\\x3e';d.write(n);d.close()}return a.prototype.isNullOrEmpty=function(a){return void 0===\na||null===a?!0:\"string\"==typeof a?0==a.trim().length:!1},a.prototype.dispatchCustomEvent=function(a){(function(a){function b(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent(\"CustomEvent\");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if(\"function\"==typeof a.CustomEvent)return!1;b.prototype=Event.prototype;a.CustomEvent=b})(window);a=new CustomEvent(a);window.dispatchEvent(a)},a}(),profiler=new RProfiler;window.RProfiler=profiler;window.WindowEvent=WindowEvent;\nprofiler.dispatchCustomEvent(\"GlimpseLoaded\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"proctorBucket"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"About.*Crawler|KTXN|KTHE|Keynote|GomezAgent|AlertSite|Pingdom|YottaMonitor|google_partner_monitoring"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":".+"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":".+"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"nativeAdImpressionGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"timeEngagedGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"videoEvent"
    },{
      "function":"_ew",
      "arg0":["macro",190],
      "arg1":"\/newsletter\/signup"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",191],
      "arg1":"(^$|((^|,)8045862_17($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Unknown Line"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"Unknown Error URL"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.pageError"
    },{
      "function":"_ew",
      "arg0":["macro",190],
      "arg1":"\/search"
    },{
      "function":"_re",
      "arg0":["macro",191],
      "arg1":"(^$|((^|,)8045862_11($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.dom"
    },{
      "function":"_ge",
      "arg0":["macro",5],
      "arg1":"2"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"unifiedPageview"
    },{
      "function":"_eq",
      "arg0":["macro",196],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",111],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"impressionEvent"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"linkClickGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"linkClick"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"nativeAdImpression"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"con"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"gtm.dom|unifiedPageview"
    }],
  "rules":[
    [["if",0],["add",1]],
    [["if",3,4,5],["add",2]],
    [["if",6],["add",2]],
    [["if",7],["add",2]],
    [["if",8],["add",2]],
    [["if",14],["unless",12,13],["add",3]],
    [["if",9,10,11],["add",4],["block",2]],
    [["if",10,15,16],["add",5]],
    [["if",17],["add",6,16,18,0,21]],
    [["if",18,19],["add",6,16,19,0]],
    [["if",19],["add",7,13]],
    [["if",22],["add",8]],
    [["if",23],["add",8]],
    [["if",24],["add",9,10,11]],
    [["if",24,25],["add",12]],
    [["if",26],["add",14]],
    [["if",27],["add",15]],
    [["if",29],["add",17,20,22]],
    [["if",1,2],["block",1,2,3,4,5,6,7,8,13,17,18,19,0,20,22]],
    [["if",2,20],["block",6]],
    [["if",2,21],["block",6,16,17,18,19,0,20]],
    [["if",2,28],["block",16]],
    [["if",31],["unless",30],["block",18,19]]]
},
"runtime":[
[],[]
]};

var ba=this,ea=function(){if(null===ca){var a;a:{var b=ba.document.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");if(c&&da.test(c)){a=c;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.Ge=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oe=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Wc=b};g.prototype.jd=function(){return this.s};g.prototype.getType=g.prototype.jd;g.prototype.getData=function(){return this.Wc};g.prototype.getData=g.prototype.getData;var ha=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ia=function(){this.fa={};this.sa=!1};ia.prototype.get=function(a){return this.fa["dust."+a]};ia.prototype.set=function(a,b){!this.sa&&(this.fa["dust."+a]=b)};ia.prototype.has=function(a){return this.fa.hasOwnProperty("dust."+a)};var ja=function(a){var b=[],c;for(c in a.fa)a.fa.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ia.prototype.remove=function(a){!this.sa&&delete this.fa["dust."+a]};ia.prototype.F=function(){this.sa=!0};var u=function(a){this.ia=new ia;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ha(b)?this.h[Number(b)]=a[Number(b)]:this.ia.set(b,a[b]))};u.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};u.prototype.set=function(a,b){if("length"==a){if(!ha(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ha(a)?this.h[Number(a)]=b:this.ia.set(a,b)};
u.prototype.set=u.prototype.set;u.prototype.get=function(a){return"length"==a?this.length():ha(a)?this.h[Number(a)]:this.ia.get(a)};u.prototype.get=u.prototype.get;u.prototype.length=function(){return this.h.length};u.prototype.N=function(){for(var a=ja(this.ia),b=0;b<this.h.length;b++)a.push(b+"");return new u(a)};u.prototype.getKeys=u.prototype.N;u.prototype.remove=function(a){ha(a)?delete this.h[Number(a)]:this.ia.remove(a)};u.prototype.remove=u.prototype.remove;u.prototype.pop=function(){return this.h.pop()};
u.prototype.pop=u.prototype.pop;u.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};u.prototype.push=u.prototype.push;u.prototype.shift=function(){return this.h.shift()};u.prototype.shift=u.prototype.shift;u.prototype.splice=function(a,b,c){return new u(this.h.splice.apply(this.h,arguments))};u.prototype.splice=u.prototype.splice;u.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
u.prototype.unshift=u.prototype.unshift;u.prototype.has=function(a){return ha(a)&&this.h.hasOwnProperty(a)||this.ia.has(a)};var ka=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var la=function(){function a(a,c){if(b[a]){if(b[a].Ha+c>b[a].max)throw Error("Quota exceeded");b[a].Ha+=c}}var b={},c=void 0,d=void 0,e={Ed:function(a){c=a},Jb:function(){c&&a(c,1)},Fd:function(a){d=a},P:function(b){d&&a(d,b)},Xd:function(a,c){b[a]=b[a]||{Ha:0};b[a].max=c},hd:function(a){return b[a]&&b[a].Ha||0},reset:function(){b={}},Qc:a};e.onFnConsume=e.Ed;e.consumeFn=e.Jb;e.onStorageConsume=e.Fd;e.consumeStorage=e.P;e.setMax=e.Xd;e.getConsumed=e.hd;e.reset=e.reset;e.consume=e.Qc;return e};var ma=function(a,b,c){this.G=a;this.V=b;this.U=c;this.h=new ia};ma.prototype.add=function(a,b){this.h.sa||(this.G.P(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ma.prototype.add=ma.prototype.add;ma.prototype.set=function(a,b){this.h.sa||(this.U&&this.U.has(a)?this.U.set(a,b):(this.G.P(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ma.prototype.set=ma.prototype.set;
ma.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.U?this.U.get(a):void 0};ma.prototype.get=ma.prototype.get;ma.prototype.has=function(a){return!!this.h.has(a)||!(!this.U||!this.U.has(a))};ma.prototype.has=ma.prototype.has;ma.prototype.C=function(){return this.G};ma.prototype.F=function(){this.h.F()};var na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ia.call(this);this.Vb=a;this.fd=b};fa(v,ia);var qa=function(a,b){for(var c,d=0;d<b.length&&!(c=pa(a,b[d]),c instanceof g);d++);return c},pa=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Vb};v.prototype.getName=function(){return this.Vb};v.prototype.getName=v.prototype.getName;v.prototype.N=function(){return new u(ja(this))};
v.prototype.getKeys=v.prototype.N;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return na(b)?pa(c,b):b},oa:function(b){return qa(a,b)},C:function(){return a.C()},ve:function(){c||(c=a.V.create(d));return c}};a.C().Jb();return this.fd.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ia.call(this)};fa(x,ia);x.prototype.N=function(){return new u(ja(this))};x.prototype.getKeys=x.prototype.N;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ra=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,sa=function(a){if(null==a)return String(a);var b=ra.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ta=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ua=function(a){if(!a||"object"!=sa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ta(a,"constructor")&&!ta(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ta(a,b)},y=function(a,b){var c=b||("array"==sa(a)?[]:{}),d;for(d in a)if(ta(a,d)){var e=a[d];"array"==sa(e)?("array"!=sa(c[d])&&(c[d]=[]),c[d]=y(e,c[d])):ua(e)?(ua(c[d])||(c[d]={}),c[d]=y(e,c[d])):c[d]=e}return c};var va=function(a){if(a instanceof u){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=va(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.N(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=va(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=wa(b[c]);var d=new ma(la(),ka());return va(a.i.apply(a,[d].concat(b)))}:a},wa=function(a){if(na(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=wa(a[c]));return new u(b)}if(ua(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,wa(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=va(this.evaluate(c[d]));return wa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var xa={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof u))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().P(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ma(d.G,d.V,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new u(c));var q=qa(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.P(arguments.length);for(var c=new u,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.P(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.P(h);c.set(e,f)}return c},undefined:function(){}};var z=function(){this.G=la();this.V=ka();this.qa=new ma(this.G,this.V)};z.prototype.O=function(a,b){var c=new v(a,b);c.F();this.qa.set(a,c)};z.prototype.addInstruction=z.prototype.O;z.prototype.Ib=function(a,b){xa.hasOwnProperty(a)&&this.O(b||a,xa[a])};z.prototype.addNativeInstruction=z.prototype.Ib;z.prototype.C=function(){return this.G};z.prototype.getQuota=z.prototype.C;z.prototype.Na=function(){this.G=la();this.qa.G=this.G};z.prototype.resetQuota=z.prototype.Na;
z.prototype.Td=function(){this.V=ka();this.qa.V=this.V};z.prototype.resetPermissions=z.prototype.Td;z.prototype.L=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.nb(c)};z.prototype.execute=z.prototype.L;z.prototype.nb=function(a){for(var b,c=0;c<arguments.length;c++){var d=pa(this.qa,arguments[c]);b=d instanceof g||d instanceof v||d instanceof u||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
z.prototype.run=z.prototype.nb;z.prototype.F=function(){this.qa.F()};z.prototype.makeImmutable=z.prototype.F;var Ba=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ca={$d:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof u)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new u(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new u(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new u(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ba(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new u(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ba(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var B={Tb:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Da="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ea=new g("break"),Fa=new g("continue");B.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};B.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
B.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof u))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=oa(Da,b))return wa(a[b].apply(a,Ba(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof u){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=Ba(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=oa(Ca.$d,b))return e=Ba(c),e.unshift(this.A()),Ca[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=Ba(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ba(c))}throw"TypeError: Object has no '"+
b+"' property.";};B.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};B["break"]=function(){return Ea};B["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};B["continue"]=function(){return Fa};
B.Xc=function(a,b,c){var d=new u;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[B.Tb.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};B.$c=function(a,b){return this.evaluate(a)/this.evaluate(b)};B.cd=function(a,b){return this.evaluate(a)==this.evaluate(b)};B.dd=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
B.gd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.oa(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof u||b instanceof v){var h=b.N(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.oa(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};B.get=function(a){return this.A().get(this.evaluate(a))};
B.Rb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof u||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ha(b)&&(c=a[b]));return c};B.kd=function(a,b){return this.evaluate(a)>this.evaluate(b)};B.ld=function(a,b){return this.evaluate(a)>=this.evaluate(b)};B.pd=function(a,b){return this.evaluate(a)===this.evaluate(b)};B.qd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
B["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.oa(d);if(e instanceof g)return e};B.xd=function(a,b){return this.evaluate(a)<this.evaluate(b)};B.yd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};B.zd=function(a,b){return this.evaluate(a)%this.evaluate(b)};B.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};B.Ad=function(a){return-this.evaluate(a)};B.Bd=function(a){return!this.evaluate(a)};
B.Cd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};B["null"]=function(){return null};B.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};B.ac=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};B.bc=function(a){return this.evaluate(a)};B.quote=function(a){return Array.prototype.slice.apply(arguments)};B["return"]=function(a){return new g("return",this.evaluate(a))};
B.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof u||a instanceof x)&&a.set(b,c);return c};B.Zd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
B["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!na(b)||!na(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
B.ae=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};B["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};B.undefined=function(){};B["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
B["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.oa(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.oa(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ha=function(){this.Sb=!1;this.R=new z;Ga(this);this.Sb=!0};Ha.prototype.vd=function(){return this.Sb};Ha.prototype.isInitialized=Ha.prototype.vd;Ha.prototype.L=function(a){return this.R.nb(a)};Ha.prototype.execute=Ha.prototype.L;Ha.prototype.F=function(){this.R.F()};Ha.prototype.makeImmutable=Ha.prototype.F;
var Ga=function(a){function b(a,b){e.R.Ib(a,String(b))}function c(a,b){e.R.O(String(d[a]),b)}var d=B.Tb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",B.add);c("AND",B.and);c("APPLY",B.apply);c("ASSIGN",B.assign);c("BREAK",B["break"]);c("CASE",B["case"]);c("CONTINUE",B["continue"]);c("DEFAULT",B["case"]);c("DEFN",B.Xc);c("DIVIDE",B.$c);c("EQUALS",B.cd);c("EXPRESSION_LIST",B.dd);c("FOR_IN",B.gd);c("GET",B.get);c("GET_INDEX",
B.Rb);c("GET_PROPERTY",B.Rb);c("GREATER_THAN",B.kd);c("GREATER_THAN_EQUALS",B.ld);c("IDENTITY_EQUALS",B.pd);c("IDENTITY_NOT_EQUALS",B.qd);c("IF",B["if"]);c("LESS_THAN",B.xd);c("LESS_THAN_EQUALS",B.yd);c("MODULUS",B.zd);c("MULTIPLY",B.multiply);c("NEGATE",B.Ad);c("NOT",B.Bd);c("NOT_EQUALS",B.Cd);c("NULL",B["null"]);c("OR",B.or);c("POST_DECREMENT",B.ac);c("POST_INCREMENT",B.ac);c("PRE_DECREMENT",B.bc);c("PRE_INCREMENT",B.bc);c("QUOTE",B.quote);c("RETURN",B["return"]);c("SET_PROPERTY",B.setProperty);
c("SUBTRACT",B.Zd);c("SWITCH",B["switch"]);c("TERNARY",B.ae);c("TYPEOF",B["typeof"]);c("VAR",B["var"]);c("WHILE",B["while"])};Ha.prototype.O=function(a,b){this.R.O(a,b)};Ha.prototype.addInstruction=Ha.prototype.O;Ha.prototype.C=function(){return this.R.C()};Ha.prototype.getQuota=Ha.prototype.C;Ha.prototype.Na=function(){this.R.Na()};Ha.prototype.resetQuota=Ha.prototype.Na;var Ia=function(){this.Ka={}};Ia.prototype.get=function(a){return this.Ka.hasOwnProperty(a)?this.Ka[a]:void 0};Ia.prototype.add=function(a,b){if(this.Ka.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.F();this.Ka[a]=c};Ia.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,G=document,Ja=navigator,Ka=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},I=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);ea()&&d.setAttribute("nonce",ea());var e=G.getElementsByTagName("script")[0]||G.body||G.head;e.parentNode.insertBefore(d,e);return d},
Ma=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||G.body||G.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},K=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Na=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Oa=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},P=function(a){C.setTimeout(a,0)},Ra=function(a){var b=G.getElementById(a);if(b&&Pa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Pa(document.all[a][c],"id")==a)return document.all[a][c];return b},Pa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Ta=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Ua=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},Q=function(a,b,c,d,e){var f,h=a.protocol||C.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ua(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Va=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},S=function(a){var b=
G.createElement("a");a&&(b.href=a);return b};var Ya=function(){this.$b=new Ha;var a=new Ia;a.addAll(Wa());Xa(this,function(b){return a.get(b)})},Wa=function(){return{callInWindow:Za,getCurrentUrl:$a,getInWindow:ab,getReferrer:bb,getUrlComponent:db,getUrlFragment:eb,isPlainObject:fb,loadIframe:gb,loadJavaScript:hb,removeUrlFragment:ib,replaceAll:jb,sendTrackingBeacon:mb,setInWindow:nb}};Ya.prototype.L=function(a){return this.$b.L(a)};Ya.prototype.execute=Ya.prototype.L;var Xa=function(a,b){a.$b.O("require",b)};
function Za(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==sa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(va(arguments[f]));e.apply(d,h)}}function $a(){return C.location.href}function ab(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=va(b));return wa(e[d[f]])}function bb(){return G.referrer}
function db(a,b,c,d,e){var f;if(d&&d instanceof u){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return Q(S(a),b,c,f,e)}function eb(a){return Q(S(a),"fragment")}function fb(a){return a instanceof x}function gb(a,b){var c=this.A();Ma(a,function(){b instanceof v&&b.i(c)})}var ob={};
function hb(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?ob[d]?(ob[d].onSuccess.push(f),ob[d].onFailure.push(h)):(ob[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=ob[d].onSuccess,b=0;b<a.length;b++)P(a[b]);a.push=function(a){P(a);return 0}},h=function(){for(var a=ob[d].onFailure,b=0;b<a.length;b++)P(a[b]);ob[d]=null},I(a,f,h)):I(a,f,h)}function ib(a){return Va(S(a))}function jb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function mb(a,b,c){var d=this.A();K(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function nb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=va(b),!0):!1};
var pb=[],qb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},rb=function(a){return qb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var wb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};
pb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(wb,zb)+"'"}};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};pb[16]=function(a){return a};var Lb,Mb=[],Nb=[],Ob=[],Pb=[],Qb=[],Rb={},Sb,Wb,Xb,Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Rb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Rb[b](d):Lb(b,d)},$b=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Zb(a[e],b,c));return d},Zb=function(a,b,c){if(na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Zb(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Mb[f];if(!h||b(h))return;c[f]=!0;try{var k=$b(h,b,c);d=Yb(k);Xb&&(d=Xb.Sc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Zb(a[l],b,c)]=Zb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Zb(a[n],b,c);Wb&&(m=m||p===Wb.Aa);d.push(p)}return Wb&&m?Wb.Tc(d):d.join("");case "escape":d=Zb(a[1],b,c);if(Wb&&na(a[1])&&"macro"===a[1][0]&&Wb.wd(a))return Wb.Jd(d);d=String(d);for(var q=
2;q<a.length;q++)pb[a[q]]&&(d=pb[a[q]](d));return d;case "tag":var t=a[1];if(!Pb[t])throw Error("Unable to resolve tag reference "+t+".");return d={Ob:a[2],index:t};case "zb":var r=ac({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ac=function(a,b,c){try{return Sb($b(a,b,c))}catch(d){JSON.stringify(a)}return null};var bc=null,ec=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];bc=cc(a);for(var e=0;e<Nb.length;e++){var f=Nb[e],h=dc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Pb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},dc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=bc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=bc(e[c]);if(null===d)return null;if(d)return!1}return!0};
var cc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ac(Ob[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var fc,gc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Bc&&(h["fix_"+k]=!0),h.Pb=h.Pb||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,w:b.w,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],w:d,ya:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.Pb&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Ub=function(){return this[this.length-1]};d.fb=function(a){var b=this.Ub();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Rc=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.ya=b.test(a.tagName)||a.ya);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.fb("TABLE")?(a="<TBODY>"+a,m()):h.ue&&c.test(e)&&d.Rc(e)?d.fb(e)?k():(a="</"+b.tagName+">"+a,m()):b.ya||d.push(b)},endTag:function(a){d.Ub()?h.ed&&!d.fb(a.tagName)?k():d.pop():h.ed&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},Od:q,Ce:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},De:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.He="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Fe=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ie=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.w){var d=a.w[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.ya?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.te=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Gc=a.Gc||!b[h]&&h;fc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(t){var b=[];c(a,function(a){b.push(a)});return b}}var k={vc:a,wc:a,xc:a,yc:a,Cc:a,Dc:function(a){return a},done:a,error:function(a){throw a;},Rd:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,za:d.defaultView||d.parentWindow,ca:d,Ma:fc("",{Bc:!0}),Va:[b],lb:"",mb:d.createElement(b.nodeName),wa:[],Z:[]});a(this.mb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.Z,arguments);for(var a;!this.Ia&&this.Z.length;)a=this.Z.shift(),"function"===typeof a?this.Lc(a):this.ub(a)};f.prototype.Lc=function(a){var b={type:"function",value:a.name||a.toString()};this.ib(b);a.call(this.za,this.ca);this.Xb(b)};
f.prototype.ub=function(a){this.Ma.append(a);for(var b,c=[],d,e;(b=this.Ma.Od())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.fe(c);d&&this.md(b);e&&this.nd(b)};f.prototype.fe=function(a){var b=this.Hc(a);b.Hb&&(b.cb=this.lb+b.Hb,this.lb+=b.Nd,this.mb.innerHTML=b.cb,this.de())};f.prototype.Hc=function(a){var b=this.Va.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.w){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.w.id&&"ps-style"!==a.w.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.ya?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{Je:a,raw:d.join(""),Hb:e.join(""),Nd:f.join("")}};f.prototype.de=function(){for(var c,d=[this.mb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.Va[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.Va[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.md=function(a){var b=this.Ma.clear();b&&this.Z.unshift(b);a.src=a.w.src||a.w.je;a.src&&this.wa.length?this.Ia=a:this.ib(a);var c=this;this.ee(a,function(){c.Xb(a)})};f.prototype.nd=function(a){var b=this.Ma.clear();b&&this.Z.unshift(b);a.type=a.w.type||a.w.ke||"text/css";this.he(a);b&&this.write()};f.prototype.he=function(a){var b=this.Kc(a);this.ud(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.ca.createTextNode(a.content)))};
f.prototype.Kc=function(a){var b=this.ca.createElement(a.tagName);b.setAttribute("type",a.type);d(a.w,function(a,c){b.setAttribute(a,c)});return b};f.prototype.ud=function(a){this.ub('<span id="ps-style"/>');var b=this.ca.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.ib=function(a){a.Gd=this.Z;this.Z=[];this.wa.unshift(a)};f.prototype.Xb=function(a){a!==this.wa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.wa.shift(),this.write.apply(this,
a.Gd),!this.wa.length&&this.Ia&&(this.ib(this.Ia),this.Ia=null))};f.prototype.ee=function(a,b){var c=this.Jc(a),d=this.Yd(c),e=this.options.vc;a.src&&(c.src=a.src,this.Wd(c,d?e:function(){b();e()}));try{this.td(c),a.src&&!d||b()}catch(A){this.options.error(A),b()}};f.prototype.Jc=function(a){var b=this.ca.createElement(a.tagName);d(a.w,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.td=function(a){this.ub('<span id="ps-script"/>');var b=this.ca.getElementById("ps-script");
b.parentNode.replaceChild(a,b)};f.prototype.Wd=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.Yd=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Rd&&a.src&&a.hasAttribute("async"))};return f}();l.postscribe=function(){function b(){var a=
m.shift(),b;a&&(b=a[a.length-1],b.wc(),a.stream=c.apply(null,a),b.xc())}function c(c,f,k){function l(a){a=k.Dc(a);w.write(a);k.yc(a)}w=new n(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var t=w.za.onerror||a;w.za.onerror=function(a,b,c){k.error({ze:a+" - "+b+":"+c});t.apply(w.za,arguments)};w.write(f,
function(){e(m,p);w.za.onerror=t;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.we?c[0]:c;var h=[c,d,e];c.Id={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Cc(h);m.push(h);w||b();return c.Id},{streams:{},Be:m,me:n})}();gc=l.postscribe}})();var hc={},ic=null;hc.m="GTM-W8MJ3PD";var jc=null,kc="//www.googletagmanager.com/a?id="+hc.m+"&cv=20",lc={},mc={};var nc=function(){},oc=function(a){return"function"==typeof a},pc=function(a){return"string"==sa(a)},qc=function(a){return"number"==sa(a)&&!isNaN(a)},rc=function(a){return Math.round(Number(a))||0},sc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},tc=function(a){var b=[];if(na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},uc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},vc=function(a,b){if(!qc(a)||!qc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},wc=function(){this.prefix="gtm.";this.values={}};wc.prototype.set=function(a,b){this.values[this.prefix+a]=b};wc.prototype.get=function(a){return this.values[this.prefix+a]};wc.prototype.contains=function(a){return void 0!==this.get(a)};var xc=function(){var a=ic.sequence||0;ic.sequence=a+1;return a},yc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},zc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{xb:a("convert_case_to"),yb:a("convert_false_to"),zb:a("convert_null_to"),Ab:a("convert_true_to"),Bb:a("convert_undefined_to"),J:a("function"),jc:a("instance_name"),kc:a("live_only"),mc:a("malware_disabled"),nc:a("once_per_event"),Db:a("once_per_load"),Eb:a("setup_tags"),oc:a("tag_id"),Fb:a("teardown_tags")}}();var Ac=new wc,Bc={},Ec={set:function(a,b){y(Cc(a,b),Bc)},get:function(a){return Dc(a,2)},reset:function(){Ac=new wc;Bc={}}},Dc=function(a,b){return 2!=b?Ac.get(a):Fc(a)},Fc=function(a,b,c){var d=a.split(".");return Hc(d)},Hc=function(a){for(var b=Bc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Lc=function(a,b){Ac.set(a,b);y(Cc(a,b),Bc)},Cc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Mc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Nc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Oc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Pc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Qc=function(a){var b=Dc("gtm.whitelist");var c=b&&Pc(tc(b),Nc),d=Dc("gtm.blacklist")||Dc("tagTypeBlacklist")||[];
Mc.test(C.location&&C.location.hostname)&&(d=tc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Pc(tc(d),Oc),f={};return function(h){var k=h&&h[T.J];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=mc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>oa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var t;if(!(t=0<=
oa(e,k)))a:{for(var r=l||[],w=new wc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){t=!0;break a}t=!1}q=t}return f[k]=!m||q}};var Rc={Sc:function(a,b){b[T.xb]&&"string"===typeof a&&(a=1==b[T.xb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.zb)&&null===a&&(a=b[T.zb]);b.hasOwnProperty(T.Bb)&&void 0===a&&(a=b[T.Bb]);b.hasOwnProperty(T.Ab)&&!0===a&&(a=b[T.Ab]);b.hasOwnProperty(T.yb)&&!1===a&&(a=b[T.yb]);return a}};var Sc=function(a){var b=ic.zones;!b&&a&&(b=ic.zones=a());return b},Tc={active:!0,isWhitelisted:function(){return!0}};var Uc=!1,Vc=0,Wc=[];function Xc(a){if(!Uc){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Uc=!0;for(var e=0;e<Wc.length;e++)P(Wc[e])}Wc.push=function(){for(var a=0;a<arguments.length;a++)P(arguments[a]);return 0}}}function Yc(){if(!Uc&&140>Vc){Vc++;try{G.documentElement.doScroll("left"),Xc()}catch(a){C.setTimeout(Yc,50)}}}var Zc=function(a){Uc?a():Wc.push(a)};var $c=!1,ad=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};var bd=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(!C[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}return C[b]},cd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ad();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var gd=function(){return"&tc="+Pb.filter(function(a){return a}).length},hd="0.005000">Math.random(),id="",jd=function(){id=[kc,"&v=3&t=t","&pid="+vc(),"&rv=6c"].join("")},kd={},ld="",md=void 0,nd={},od={},pd=void 0,qd=2,rd=1E3,sd=function(){qd=2},td=function(){var a=md;return void 0===a?"":[id,kd[a]?"":"&es=1",nd[a],gd(),ld,"&z=0"].join("")},ud=function(){pd&&(C.clearTimeout(pd),pd=void 0);void 0===md||kd[md]&&!ld||(od[md]||0>=qd--||0>=rd--?od[md]=!0:(K(td()),kd[md]=
!0,ld=""))},vd=function(a,b,c){if(hd&&!od[a]&&b){a!==md&&(ud(),md=a);var d=c+String(b[T.J]||"").replace(/_/g,"");ld=ld?ld+"."+d:"&tr="+d;pd||(pd=C.setTimeout(ud,500));2022<=td().length&&ud()}};function wd(a,b,c,d,e,f){var h=Pb[a],k=xd(a,b,c,d,e,f);if(!k)return null;var l=Zb(h[T.Eb],f.S,[]);if(l&&l.length){var m=l[0];k=wd(m.index,b,k,1===m.Ob?e:k,e,f)}return k}
function xd(a,b,c,d,e,f){function h(){var b=$b(k,f.S);b.vtp_gtmOnSuccess=function(){vd(f.id,Pb[a],"5");c()};b.vtp_gtmOnFailure=function(){vd(f.id,Pb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.mc])d();else{vd(f.id,k,"1");try{Yb(b)}catch(E){vd(f.id,
k,"7");e()}}}var k=Pb[a];if(f.S(k))return null;var l=Zb(k[T.Fb],f.S,[]);if(l&&l.length){var m=l[0],n=wd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Ob?e:n}if(k[T.Db]||k[T.nc]){var p=k[T.Db]?Qb:b,q=c,t=d;if(!p[a]){h=zc(h);var r=yd(a,p,h);c=r.I;d=r.T}return function(){p[a](q,t)}}return h}function yd(a,b,c){var d=[],e=[];b[a]=zd(d,e,c);return{I:function(){b[a]=Ad;for(var c=0;c<d.length;c++)d[c]()},T:function(){b[a]=Bd;for(var c=0;c<e.length;c++)e[c]()}}}
function zd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ad(a){a()}function Bd(a,b){b()};function Cd(a){var b=0,c=0,d=!1;return{add:function(){c++;return zc(function(){b++;d&&b>=c&&a()})},zc:function(){d=!0;b>=c&&a()}}}function Dd(a,b){if(!hd)return;var c=function(a){var d=b.S(Pb[a])?"3":"4",f=Zb(Pb[a][T.Eb],b.S,[]);f&&f.length&&c(f[0].index);vd(b.id,Pb[a],d);var h=Zb(Pb[a][T.Fb],b.S,[]);h&&h.length&&c(h[0].index)};c(a);}var Ed=!1;var Fd=function(a,b){var c={};c[T.J]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Pb.push(c);return Pb.length-1};var Gd=/[A-Z]+/,Hd=/\s/,Id=function(a){if(pc(a)&&(a=a.trim(),!Hd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Gd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ea:d}}}}};var Jd=null,Kd={},Ld={},Md;function Nd(){Jd=Jd||!ic.gtagRegistered;ic.gtagRegistered=!0;return Jd}var Od=function(a,b){var c={event:a};b&&(c.eventModel=y(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Pd(a){if(void 0===Ld[a.id]){var b;if("UA"==a.prefix)b=Fd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Fd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Fd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Fd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Fd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Md){var c={name:"send_to",dataLayerVersion:2},d={};d[T.J]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Mb.push(d);Md=["macro",Mb.length-1]}var f={arg0:Md,
arg1:a.id,ignore_case:!1};f[T.J]="_lc";Ob.push(f);var h={"if":[Ob.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Nb.push(h);Ld[a.id]=b}}
var Rd={event:function(a){var b=a[1];if(pc(b)&&!(3<a.length)){var c;if(2<a.length){if(!ua(a[2]))return;c=a[2]}var d=Od(b,c);return d}},set:function(a){var b;2==a.length&&ua(a[1])?
b=y(a[1],void 0):3==a.length&&pc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=y(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Qd=zc(function(){});var Sd=!1,Zd=[];function $d(){if(!Sd){Sd=!0;for(var a=0;a<Zd.length;a++)P(Zd[a])}};var ae=[],be=!1,ce=function(a){var b=a.eventCallback,c=zc(function(){oc(b)&&P(function(){b(hc.m)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},de=function(){for(var a=!1;!be&&0<ae.length;){be=!0;delete Bc.eventModel;var b=ae.shift();if(oc(b))try{b.call(Ec)}catch(Td){}else if(na(b)){var c=b;if(pc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Dc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Td){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&pc(l[0])){var m=Rd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){be=!1;continue}}var n;var p=void 0,q=b,t=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(t&&Lc(p,void 0),Lc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=xc(),q["gtm.uniqueEventId"]=w,Lc("gtm.uniqueEventId",w));jc=r;var E;var M,A,R=q,D=R.event,O=R["gtm.uniqueEventId"],H=ic.zones;A=H?H.checkState(hc.m,O):Tc;if(A.active){var J=ce(R);c:{var L=
A.isWhitelisted;if("gtm.js"==D){if(Ed){M=!1;break c}Ed=!0}var W=O,F=D;if(hd&&!(0>=rd)&&md!==W){ud();md=W;ld="";var N=nd,aa=W,ya,za=F;ya=0===za.indexOf("gtm.")?encodeURIComponent(za):"*";N[aa]="&e="+ya+"&eid="+W;pd||(pd=C.setTimeout(ud,500))}var Aa=Qc(L),Qa={id:O,name:D,Mc:J||nc,S:Aa,Oa:ec(Aa)};for(var Ic,Tb=Qa,Vd=Cd(Tb.Mc),Jf=[],Ub=[],lb=0;lb<Pb.length;lb++)if(Tb.Oa[lb]){var Kf=Pb[lb];var xb=Vd.add();try{var Wd=wd(lb,Jf,xb,xb,xb,Tb);Wd?Ub.push(Wd):(Dd(lb,Tb),xb())}catch(Td){xb()}}Vd.zc();for(var Jc=0;Jc<Ub.length;Jc++)Ub[Jc]();Ic=0<Ub.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Ic){for(var Lf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Vb=0;Vb<Qa.Oa.length;Vb++)if(Qa.Oa[Vb]){var Yd=Pb[Vb];if(Yd&&!Lf[Yd[T.J]]){M=!0;break c}}M=!1}else M=Ic}E=M?!0:!1}else E=!1;jc=null;n=E}else n=!1;a=n||a}be=!1}return!a},ee=function(){var a=de();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[hc.m]&&b.end){b[hc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},fe=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Wc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Zd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(ae.push.apply(ae,b);300<this.length;)this.shift();return de()};ae.push.apply(ae,a.slice(0));
P(ee)};var ge={};ge.Aa=new String("undefined");ge.Ta={};var he=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ge.Aa?b:a[d]);return c.join("")}};he.prototype.toString=function(){return this.resolve("undefined")};he.prototype.valueOf=he.prototype.toString;ge.Tc=function(a){return new he(a)};var ie={};ge.Qd=function(a,b){var c=xc();ie[c]=[a,b];return c};ge.Kb=function(a){var b=a?0:1;return function(a){var c=ie[a];if(c&&"function"===typeof c[b])c[b]();ie[a]=void 0}};
ge.wd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ge.Jd=function(a){if(a===ge.Aa)return a;var b=xc();ge.Ta[b]=a;return'google_tag_manager["'+hc.m+'"].macro('+b+")"};ge.qc=he;var je=new wc,ke=function(a,b){function c(a){var b=S(a),c=Q(b,"protocol"),d=Q(b,"host",!0),e=Q(b,"port"),f=Q(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function le(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=oa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=je.get(q);t||(t=new RegExp(c,p),je.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ke(b,c)}return!1};function me(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function ne(a,b){for(var c=b||(a instanceof u?new u:new x),d=a.N(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof u?(c.get(f)instanceof u||c.set(f,new u),ne(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ne(h,c.get(f))):c.set(f,h)}}return c}function oe(){return hc.m}function pe(){return(new Date).getTime()}function qe(a,b){return wa(Dc(a,b||2))}function re(){return jc}
function se(a){return Ta('<a href="'+a+'"></a>')[0].href}function te(a){return rc(va(a))}function ue(a){return null===a?"null":void 0===a?"undefined":a.toString()}function ve(a,b){return vc(a,b)}function we(a,b,c){if(!(a instanceof u))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var xe=function(){var a=new Ia;a.addAll(Wa());a.addAll({buildSafeUrl:me,decodeHtmlUrl:se,copy:ne,generateUniqueNumber:xc,getContainerId:oe,getCurrentTime:pe,getDataLayerValue:qe,getEventName:re,makeInteger:te,makeString:ue,randomInteger:ve,tableToMap:we});return function(b){return a.get(b)}};var ye=new Ya,ze=function(){var a=data.runtime||[];Lb=function(a,b){var c=new x,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,wa(b[d]));var e=ye.L([a,c]);e instanceof g&&"return"===e.s&&(e=e.getData());return va(e)};Sb=le;Xa(ye,xe());for(var b=0;b<a.length;b++){var c=a[b];if(!na(c)||3>c.length){if(0==c.length)continue;break}ye.L(c)}};var Ae=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Be=function(a){return encodeURIComponent(a)},Ce=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=Q(S(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},De=function(a,b){y(a,b)},Ee=function(a){return rc(a)},Fe=function(a,b){return oa(a,b)};var Ge=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Pa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},He=function(a){ic.hasOwnProperty("autoEventsSettings")||(ic.autoEventsSettings={});var b=ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ie=function(a,b,c,d){var e=He(a),f=yc(e,b,d);e[b]=
c(f)},Je=function(a,b,c){var d=He(a);return yc(d,b,c)};var Ke=/(^|\.)doubleclick\.net$/i,Le=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Me=function(a,b,c){for(var d=String(b||G.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=uc(h[0]);if(k&&k==a){var l=uc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ne=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=Q(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=G.cookie,t=0;t<k.length;t++){var r=h,w=k[t],E=c;if(Ke.test(C.location.hostname)||"/"==E&&Le.test(w))break;"none"!=k[t]&&(r+="domain="+k[t]+";");G.cookie=r;if(q!=G.cookie||0<=oa(Me(a),b))break}};var Oe=!1;if(G.querySelectorAll)try{var Pe=G.querySelectorAll(":root");Pe&&1==Pe.length&&Pe[0]==G.documentElement&&(Oe=!0)}catch(a){}var Qe=Oe;var Re=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ue=function(a,b,c){var d=Se(a);if(1===d.length)return d[0].id;if(0!==d.length){d=Te(d,function(a){return a.ad},b);if(1===d.length)return d[0].id;d=Te(d,function(a){return a.Hd},c);return d[0]?d[0].id:void 0}},Xe=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Ve.test(document.location.hostname)||"/"===h&&
We.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var t=q[q.length-1];if(parseInt(t,10).toString()===t){n=["none"];break a}}for(var r=q.length-2;0<=r;r--)p.push(q.slice(r).join("."));p.push("none");n=p}for(var w=n,E=0;E<w.length&&!m;E++)m=Xe(a,b,c,w[E],e);return m}d&&"none"!==
d&&(l+="domain="+d+";");var M=document.cookie;document.cookie=l;return M!=document.cookie||0<=Re(a).indexOf(b)};function Te(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Se(a){for(var b=Ye,c=[],d=Re(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),ad:1*k[0]||1,Hd:1*k[1]||1}))}}return c}
var We=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ve=/(^|\.)doubleclick\.net$/i;var Ze=window,$e=document;function af(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function bf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Ye=["1"],cf={},df=function(a){return cf[(void 0===a?"_gcl":a)+"_dcu"]},ff=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d,e=void 0===a?"_gcl":a;d=(void 0===e?"_gcl":e)+"_dcu";if(!cf[d]&&!ef(d,b,c)){for(var f,h=Ze.navigator.userAgent+($e.cookie||"")+($e.referrer||""),k=h.length,l=Ze.history.length;0<l;)h+=l--^k++;var m=1,n,p,q;if(h)for(m=0,p=h.length-1;0<=p;p--)q=h.charCodeAt(p),m=(m<<6&268435455)+q+(q<<14),n=m&266338304,m=0!=n?m^n>>21:m;var t=[Math.round(2147483647*Math.random())^
m&2147483647,Math.round(Date.now()/1E3)].join("."),r=""+af(void 0),w=bf(void 0);1<w&&(r+="-"+w);f=["1",r,t].join(".");Xe(d,f,c,b,7776E6);ef(d,b,c)}};function ef(a,b,c){var d,e=af(b);(d=Ue(a,e,bf(c)))&&(cf[a]=d);return d};var gf=function(a){for(var b=[],c=G.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var hf=/^\w+$/,jf=/^[\w-]+$/,kf=/^\d+\.fls\.doubleclick\.net$/;function lf(a){return a&&"string"==typeof a&&a.match(hf)?a:"_gcl"}function mf(a){if(a){if("string"==typeof a){var b=lf(a);return{na:b,ma:b}}if(a&&"object"==typeof a)return{na:lf(a.dc),ma:lf(a.aw)}}return{na:"_gcl",ma:"_gcl"}}function nf(a){var b=S(C.location.href),c=Q(b,"host",!1);if(c&&c.match(kf)){var d=Q(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function of(a){return a.filter(function(a){return jf.test(a)})}var qf=function(a){var b=nf("gclaw");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.ma){var d=pf();if(d&&(null==d.H||"aw.ds"==d.H))return[d.da]}return of(gf(c.ma+"_aw"))},rf=function(a){var b=nf("gcldc");if(b)return b.split(".");var c=mf(a);if("_gcl"==c.na){var d=pf();if(d&&("ds"==d.H||"aw.ds"==d.H))return[d.da]}return of(gf(c.na+"_dc"))};
function pf(){var a=S(C.location.href),b=Q(a,"query",!1,void 0,"gclid"),c=Q(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=Q(a,"fragment");b=b||Ua(d,"gclid");c=c||Ua(d,"gclsrc")}return void 0!==b&&b.match(jf)?{da:b,H:c}:null}
var sf=function(a,b,c){var d=mf(a);c=c||"auto";b=b||"/";var e=pf();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.da].join(".");e.H&&"aw.ds"!=e.H||Ne(d.ma+"_aw",k,b,c,h,!0);"aw.ds"!=e.H&&"ds"!=e.H||Ne(d.na+"_dc",k,b,c,h,!0)}},tf=function(){var a=nf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=G.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({qb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].qb]||(h[b[k].qb]=[]),h[b[k].qb].push({timestamp:l[1],da:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],t=0;t<q.length;t++)p.push(q[t].da);p=of(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},uf=function(a,b,c){};var vf;a:{vf="G"}var wf={"":"n",UA:"u",AW:"a",DC:"d",GTM:vf},xf=function(a){var b=hc.m.split("-"),c=b[0].toUpperCase();return(wf[c]||"i")+"6c"+(a&&"GTM"===c?b[1]:"")};var Df=!!C.MutationObserver,Ef=void 0,Ff=function(a){if(!Ef){var b=function(){var a=G.body;if(a)if(Df)(new MutationObserver(function(){for(var a=0;a<Ef.length;a++)P(Ef[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Na(a,"DOMNodeInserted",function(){b||(b=!0,P(function(){b=!1;for(var a=0;a<Ef.length;a++)P(Ef[a])}))})}};Ef=[];G.body?b():P(b)}Ef.push(a)};var Tf="www.googletagmanager.com/gtm.js";
var Uf=Tf,Vf=function(a,b,c,d){Na(a,b,c,d)},Wf=function(a,b){return C.setTimeout(a,b)},Xf=function(a,b,c){I(a,b,c)},Yf={},Zf=function(a,b,c){var d=Yf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.hc:a.Nb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,hc:[],Nb:[],Vd:void 0};d.Ee=I(a,e(d,2),e(d,3));Yf[a]=d}0===d.status&&(d.Vd(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.hc.push(b),c&&d.Nb.push(c))},$f=function(){return C.location.href},
ag=function(a){return Q(S(a),"fragment")},V=function(a,b){return Dc(a,b||2)},bg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},cg=function(a,b){C[a]=b},X=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},dg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==
C.location.protocol;e&&(e=2!==eg());return(e?b:a)+c};
var fg=function(a){var b=0;return b},gg=function(a){},hg=function(a){var b=!1;return b},ig=function(a,b){var c;a:{if(a&&
na(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},jg=function(a,b,c,d){Ie(a,b,c,d)},kg=function(a,b,c){return Je(a,b,c)},lg=function(a){return!!Je(a,"init",!1)},mg=function(a){He(a).init=!0};
var eg=function(){var a=Uf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=G.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var pg=function(a,b){var c=Uf+"?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var d in b)b[d]&&b.hasOwnProperty(d)&&(c+="&"+d+"="+encodeURIComponent(b[d]));var e=Y("https://","http://",c);I(e,void 0,void 0)};
var rg=function(a,b,c){a instanceof ge.qc&&(a=a.resolve(ge.Qd(b,c)),b=nc);return{cb:a,I:b}};var sg=function(a,b){var c=(new Date).getTime();this.n=a;this.t=c;this.p=b},tg=function(){this.c=1;this.e=[];this.p=null};function ug(a){var b=ic,c=b.gss=b.gss||{};return c[a]=c[a]||new tg}var vg=function(a,b){ug(a).p=b},wg=function(a){};var Fg=function(a){if(1===ug(a).c){ug(a).c=2;var b=encodeURIComponent(a);I(("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Gg=function(a,b){};var Z={a:{}};Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0})(function(){return"20"})}();
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return jc})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return Me(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||$f();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=S(String(c));e=Q(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Va(S(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a;(function(a){Z.__ua=a;Z.__ua.b="ua";Z.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;De(U(k.vtp_fieldsToSet,"fieldName","value"),d);De(U(k.vtp_contentGroup,"index","group"),e);De(U(k.vtp_dimension,"index","dimension"),f);De(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=y(k,void 0);b=y(b,l)}De(U(b.vtp_fieldsToSet,
"fieldName","value"),d);De(U(b.vtp_contentGroup,"index","group"),e);De(U(b.vtp_dimension,"index","dimension"),f);De(U(b.vtp_metric,"index","metric"),h);var m=bd(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+xc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},t={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&
r("set",a+c,b[c])},M=function(){var a=function(a,b,c){if(!ua(b))return!1;var d;d=yc(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)r(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=V("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!ua(c))return;c=Object(c);var e=yc(d,"currencyCode",c.currencyCode);void 0!==e&&r("set","&cu",e);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",
c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){r("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");r("ec:setAction",f[h],k.actionField);break}}},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===
q[e])){var f=t[e]?sc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},R={name:p};A(d,R,!0);m("create",b.vtp_trackingId||c.trackingId,R);r("set","&gtm",xf(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var O;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;oc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),M());var H={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(Ee,b.vtp_eventValue||
c.value)};A(O,H,!1);r("send",H);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),M());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ya="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ya})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ya="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ya}));O?r("send","pageview",O):r("send","pageview");b.vtp_autoLinkDomains&&cd(n,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var za=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(za="internal/"+za);a=!0;Zf(Y("https:","http:","//www.google-analytics.com/"+za,d&&d.forceSSL),function(){var a=ad();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0})(function(a){if(!lg("jel")){var b=X("self"),c=b.onerror;b.onerror=function(a,b,d,k,l){c&&c(a,b,d,k,l);bg({event:"gtm.pageError","gtm.errorMessage":a,"gtm.errorUrl":b,"gtm.errorLineNumber":d});return!1};var d=Je("jel","legacyTeardown",void 0);d&&d();mg("jel")}P(a.vtp_gtmOnSuccess)})}();Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0})(function(){return hc.m})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Z.__aev=
a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=V("gtm.element",1),m=V("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?Sa(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=S(p);return e.vtp_component&&"URL"!=e.vtp_component?Q(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var t;if(void 0===e.vtp_attribute)t=f(e);else{var r=V("gtm.element",
1);t=Pa(r,e.vtp_attribute)||e.vtp_defaultValue||""}return t;default:return f(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=y(a,void 0),c=b;c[T.J]=null;c[T.jc]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.fsl=[],function(){function a(){var a=X("document"),f=c(),h=HTMLFormElement.prototype.submit;Vf(a,"click",function(a){var b=a.target;if(b&&(b=dg(b,["button","input"]))&&("submit"==b.type||"image"==b.type)&&b.name&&Pa(b,"value")){var c;(c=b.form?b.form.tagName?b.form:Ra(b.form):dg(b,["form"]))&&f.store(c,b)}},!1);Vf(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,n=!0;if(d(e,function(){if(n){var b=f.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))n=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return ig(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=Je("fsl",c?"nv.mwt":"mwt",0),f=Ge(a);f.event="gtm.formSubmit";var h=a.action;h&&h.tagName&&(h=a.cloneNode(!1).action);f["gtm.elementUrl"]=h;if(c){var k=kg("fsl","nv.ids",[]).join(",");if(k)f["gtm.triggers"]=k;else return!0}else{var q=kg("fsl","ids",[]).join(",");f["gtm.triggers"]=q}if(d&&e){if(!bg(f,b,e))return!1}else bg(f,function(){},e||2E3);return!0}(function(a){Z.__fsl=
a;Z.__fsl.b="fsl";Z.__fsl.g=!0})(function(b){var c=b.vtp_waitForTags,d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};Ie("fsl","mwt",m,0);d||Ie("fsl","nv.mwt",m,0)}var n=function(a){a.push(l);return a};jg("fsl","ids",n,[]);d||jg("fsl","nv.ids",n,[]);if(!lg("fsl")){a();mg("fsl");var p=Je("fsl","legacyTeardown",void 0);p&&p()}P(b.vtp_gtmOnSuccess)})}();



Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){P(h)}}};var b=function(a,b,c){Zc(function(){var d,e=ic;e.postscribe||(e.postscribe=gc);d=e.postscribe;var f={done:b},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{d(m,a,f)}catch(n){P(c)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=rg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.cb,k=f.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,Ta(h),k,e)()}else Wf(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();





Z.a.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.b="csm";Z.__csm.g=!0})(function(a){var b=X("document");K(function(a){if(2048<a.length){var b=a.substring(0,2040).lastIndexOf("&");a=a.substring(0,b)+"&ns_cut="+encodeURIComponent(a.substring(b+1));a=a.substring(0,2048)}return a}(function(a,c){var d=new Date,e=(c||"").split("&");c="";for(var k=0;k<e.length;k++)if(e[k]){var l=e[k].match(/([^=]*)=?(.*)/);c+="&"+encodeURIComponent(l[1])+"="+encodeURIComponent(l[2])}return Y("https://sb",
"http://b",".scorecardresearch.com/b?c1=2&c2="+encodeURIComponent(a)+"&ns__t="+d.valueOf()+"&ns_c="+(b.characterSet||b.defaultCharset||"")+"&c8="+encodeURIComponent(b.title||"")+c+"&c7="+encodeURIComponent(b.URL)+"&c9="+encodeURIComponent(b.referrer))}(a.vtp_clientId,function(){var a="",c=b.cookie;if(0<=c.indexOf("comScore"))for(var f=c.split(";"),h=0;h<f.length;h++){var k=f[h].indexOf("comScore");0<=k&&(a=unescape(f[h].substring(k+8)))}return a}())),void 0,void 0);var c=function(){var b=Y("https://sb",
"http://b",".scorecardresearch.com/c2/"+encodeURIComponent(a.vtp_clientId)+"/cs.js");I(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?c():Vf(X("self"),"load",c)})}();var Hg={macro:function(a){if(ge.Ta.hasOwnProperty(a))return ge.Ta[a]}};Hg.dataLayer=Ec;Hg.onHtmlSuccess=ge.Kb(!0);Hg.onHtmlFailure=ge.Kb(!1);Hg.callback=function(a){lc.hasOwnProperty(a)&&oc(lc[a])&&lc[a]();delete lc[a]};Hg.Ec=function(){ic[hc.m]=Hg;mc=Z.a;Wb=Wb||ge;Xb=Rc};
Hg.sd=function(){ic=C.google_tag_manager=C.google_tag_manager||{};if(ic[hc.m]){var a=ic.zones;a&&a.unregisterChild(hc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Mb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Pb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Ob.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Nb.push(p)}Rb=Z;ze();Hg.Ec();fe();Uc=!1;Vc=0;if("interactive"==
G.readyState&&!G.createEventObject||"complete"==G.readyState)Xc();else{Na(G,"DOMContentLoaded",Xc);Na(G,"readystatechange",Xc);if(G.createEventObject&&G.documentElement.doScroll){var t=!0;try{t=!C.frameElement}catch(w){}t&&Yc()}Na(C,"load",Xc)}Sd=!1;"complete"===G.readyState?$d():Na(C,"load",$d);a:{
if(!hd)break a;jd();qd=2;md=void 0;nd={};kd={};pd=void 0;od={};ld="";C.setInterval(jd,864E5);C.setInterval(sd,1E3);}}};Hg.sd();

})()
