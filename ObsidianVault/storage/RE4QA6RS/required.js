















 
 

















































































var PREBID_TIMEOUT=setPrebidTimeout(),curResolution=getResolution(),refreshTimeout,showLogs=!1,initialRightslot2Position=null,enableMobileStickySlot=!0;setDebugMode();var _prefix="ad_",_target_sri="sri";window.Adomik=window.Adomik||{};Adomik.hour=(new Date).getUTCHours().toString();Adomik.randomAdGroup=function(){var a=Math.random();switch(!1){case !(.09>a):return"ad_ex"+Math.floor(100*a);case !(.1>a):return"ad_bc";default:return"ad_opt"}};window.addEventListener("load",load);
function load(){adjustStickySkyscraper();var a=document.querySelector(".hfr-s.lt2s");a=null!=a?a.offsetTop:null;var b=document.querySelector("#ad_rightslot2");b=null!=b?b.offsetTop:null;initialRightslot2Position=null!=a&&null!=b?b-a:null;a=document.querySelector("#ad_topslot_b");null!=a&&(null==initialRightslot2Position&&(initialRightslot2Position=0),initialRightslot2Position+=a.offsetHeight);window.addEventListener("scroll",function(){adjustAllStickySkyscrapers();null!=dfpSlots.stickyslot&&0>getVisibleAdSlots(!0).indexOf("topslot_a")&&
displayMobileStickySlot()});window.addEventListener("resize",function(){var a=getResolution();a!=curResolution&&(curResolution=a,renderLayout(),clearTimeout(refreshTimeout),refreshTimeout=window.setTimeout(function(){refreshAllSlots()},50),iasLog("New resolution: "+curResolution))});a=document.querySelectorAll("span.pr a.hao.hbtn");a.length&&a.forEach(function(a){a.addEventListener("click",function(){setTimeout(adjustAllStickySkyscrapers,50)})})}
function displayMobileStickySlot(){if(1==enableMobileStickySlot){enableMobileStickySlot=!1;iasLog("displayMobileStickySlot()");var a=document.getElementById("stickyslot_container");isMobileMode()&&null!=a&&"inline-block"!=a.style.display&&(a.style.display="inline-block",googletag.display("ad_stickyslot"))}}function adjustAllStickySkyscrapers(){adjustStickySkyscraper();adjustStickySkyscraper("#ad_rightslot2",initialRightslot2Position)}
function refreshAllSlots(){removePrebidAdUnits();pbAdUnits=getPrebidSlots(curResolution);addPrebidAdUnits(pbAdUnits)}function renderLayout(){"mobile_hr"!=curResolution&&"mobile_lr"!=curResolution&&!isMobileDevice()&&"undefined"!=typeof dfpSlots&&dfpSlots.leftslot&&(dfpSlots.leftslot.renderCallback=function(){adjustStickySkyscraper()})}
function getResolution(){var a="desktop";try{window.matchMedia("(max-width: 762px)").matches?(a="mobile_lr",window.matchMedia("(min-height: 550px)").matches&&(a="mobile_hr")):window.matchMedia("(min-width: 763px) and (max-width: 979px)").matches?a="tablet":window.matchMedia("(min-width: 1080px)").matches&&(a="hd")}catch(b){}return a}function getCookie(a){if(a=document.cookie.match(new RegExp("(?:^|; )"+a+"\x3d([^;]*)(?:$|; )"))){a=a[1];try{return decodeURIComponent(a)}catch(b){}}return""}
function adjustStickySkyscraper(a,b){if(""==getCookie("seleniumtest")&&"mobile_hr"!=curResolution&&"mobile_lr"!=curResolution&&!isMobileDevice()&&"undefined"!=typeof dfpSlots){null==a&&(a="#ad_leftslot");var c=document.querySelector(a);if(null!=c){var d=c.offsetHeight,f=document.getElementById("header"),e=null!=f?f.offsetHeight:0;f=e+10;var k=document.body.scrollHeight,g=window.pageYOffset,l=document.querySelector(".boa.c_bnr");e=e+(null!=l?l.offsetHeight:0)+10;l=document.getElementById("footer").offsetHeight;
var h=document.querySelector(".lbt.cdo-promo").offsetHeight,n=null!=document.querySelector(".pf.py.pb0.pl0.pr0")?document.querySelector(".pf.py.pb0.pl0.pr0").offsetHeight:0;l=l+h+n;null!=b&&(e+=b);f<e-g&&(f=e-g);f>k-g-d-20-l&&(f=k-g-d-20-l);c.style.position="fixed";c.style.top=f+"px";c.style.bottom="auto";dfpSlots.leftslot&&(dfpSlots.leftslot.renderCallback=null)}}}function isMobileDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}
function isMobileMode(){return"mobile_hr"==curResolution||"mobile_lr"==curResolution||isMobileDevice()}function getPrebidSlots(a){return"hd"==a?pbHdSlots:"tablet"==a?pbTabletSlots:"mobile_hr"==a?pbMobileHrSlots:"mobile_lr"==a?pbMobileLrSlots:pbDesktopSlots}
function addPrebidAdUnits(a,b){window.__cmp&&googletag.cmd.push(function(){(function(a){window.__cmp("getGooglePersonalization",function(c,b){a&&(b?c.googlePersonalizationData.consentValue?a("1"):a("0"):a("2"))})})(function(a){googletag.pubads().setTargeting("ad_pers",a);a="0"==a?1:0;iasLog("Google personalized ads : ",0==a);googletag.pubads().setRequestNonPersonalizedAds(a);"undefined"!=typeof ga&&1==a&&(iasLog("Google analytics - anonymizeIp:true AND allowAdFeatures:false"),ga("set","anonymizeIp",
!0),ga("set","allowAdFeatures",!1))})});pbjs.que.push(function(){iasLog("addPrebidAdUnits() - Request PrebidSlots:",a);pbjs.requestBids({adUnits:a,timeout:PREBID_TIMEOUT,bidsBackHandler:function(a){sendPrebidServerRequest(b)}})})}function removePrebidAdUnits(){pbjs.que.push(function(){pbjs.adserverRequestSent=!1;for(var a=0;a<pbAdUnits.length;a++)pbjs.removeAdUnit(pbAdUnits[a].code)})}
function sendPrebidServerRequest(a){pbjs.adserverRequestSent||(pbjs.adserverRequestSent=!0,googletag.cmd.push(function(){pbjs.que.push(function(){pbjs.setTargetingForGPTAsync();void 0!==a?(iasLog("sendAdserverRequest() - Request DfpSlots: ",a),googletag.pubads().refresh(a)):(iasLog("sendAdserverRequest() - All DfpSlots"),googletag.pubads().refresh())})}))}
var refreshConfig={enabled:!0,inactivityThreshold:2,extendedVisibilityHeight:400,useAdSlotCenter:!0,defaultVisibility:20,defaultMaxImpressions:15},refreshStatus={slotsStats:{},inactivityDuration:0,userTabbedOut:!1,lastScrollPosition:window.pageYOffset||document.documentElement.scrollTop,scrollUp:!1,activityAndVisibilityInterval:void 0,refreshCandidateSlotsTimeout:void 0};
function getSlotConfigs(){return isMobileMode()?{stickyslot:{refreshEnabled:!0,minVisibility:20,sizeRestriction:!0},topslot_a:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},topslot_b:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},leftslot:{refreshEnabled:!0,minVisibility:20},rightslot:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},rightslot2:{refreshEnabled:!0,minVisibility:20},btmslot_a:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},btmslot_b:{refreshEnabled:!0,
minVisibility:15,sizeRestriction:!0},mpuslot:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_1:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},contentslot_2:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},contentslot_3:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},contentslot_4:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},contentslot_5:{refreshEnabled:!0,minVisibility:10,sizeRestriction:!0},contentslot_6:{refreshEnabled:!0,minVisibility:10,
sizeRestriction:!0}}:{stickyslot:{refreshEnabled:!0,minVisibility:20,sizeRestriction:!0},topslot_a:{refreshEnabled:!0,minVisibility:22,sizeRestriction:!0},topslot_b:{refreshEnabled:!0,minVisibility:22,sizeRestriction:!0},leftslot:{refreshEnabled:!0,minVisibility:20},rightslot:{refreshEnabled:!0,minVisibility:18,sizeRestriction:!0},rightslot2:{refreshEnabled:!0,minVisibility:20},btmslot_a:{refreshEnabled:!0,minVisibility:25,sizeRestriction:!0},btmslot_b:{refreshEnabled:!0,minVisibility:25,sizeRestriction:!0},
mpuslot:{refreshEnabled:!0,minVisibility:25,sizeRestriction:!0},contentslot_1:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_2:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_3:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_4:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_5:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0},contentslot_6:{refreshEnabled:!0,minVisibility:15,sizeRestriction:!0}}}
function getSlotName(a){return a.substr(_prefix.length)}function getSlotElementId(a){return _prefix+a}function getSlotStats(a){"undefined"===typeof refreshStatus.slotsStats[a]&&(refreshStatus.slotsStats[a]={visibility:0,impressions:1,viewable:!1});return refreshStatus.slotsStats[a]}
function isAdSlotVisible(a,b){b=b||"visible";var c=a.getBoundingClientRect();if(0==c.width&&0==c.height)return!1;var d=refreshConfig.useAdSlotCenter?(c.bottom+c.top)/2:c.bottom,f=refreshConfig.useAdSlotCenter?(c.bottom+c.top)/2:c.top,e=Math.max(document.documentElement.clientHeight,window.innerHeight);c=0>=d;var k=0<=f-e;if("visible"===b)return!c&&!k;if("above"===b)return d=0>=d+refreshConfig.extendedVisibilityHeight,c&&!d;d=0<=f-e-refreshConfig.extendedVisibilityHeight;return k&&!d}
function getAdFrame(a){a=document.getElementById(a);if(void 0==a.getElementsByTagName("iframe"))iasLog("Unable to find slot element or iframe:",slotName);else return a.getElementsByTagName("iframe")[0]}function getElementSize(a){var b=getComputedStyle(a),c=a.offsetWidth+parseInt(b.marginLeft)+parseInt(b.marginRight);a=a.offsetHeight+parseInt(b.marginTop)+parseInt(b.marginBottom);return[c,a]}
function setElementSize(a,b,c){null!=b&&(a.style.width=b+"px");null!=c&&(a.style.height=c+"px");iasLog(a.id+" - set size: ["+b+","+c+"]")}
function adjustSlotSize(a){var b=getAdFrame(a.slot.getSlotElementId());if(void 0!=b){var c=getElementSize(b);if(1>=c[0]||1>=c[1])if(c=pbjs.getAllWinningBids(),void 0!=c){var d=a.slot.getTargetingMap().hb_adid;a=c.filter(function(a){return d==a.adId})[0];void 0!=a&&1<a.width&&1<a.height&&(setElementSize(b,a.width,a.height),setElementSize(b.parentElement,a.width,a.height))}}}
function getVisibleAdSlots(a){var b=[];if("undefined"!=typeof dfpSlots)return Object.keys(dfpSlots).forEach(function(c){var d=document.getElementById(getSlotElementId(c));if(null!=d){var f=isAdSlotVisible(d);if(a){var e=isAdSlotVisible(d,"above"),k=isAdSlotVisible(d,"below");d=refreshStatus.scrollUp?k:e;e=refreshStatus.scrollUp?e:k;(f&&!d||e)&&b.push(c)}else f&&b.push(c)}}),b}
function applySlotSizeRestriction(a,b,c,d,f){if(1>=d[1])return!1;var e=b.mediaTypes.banner.sizes.filter(function(a){return a[1]==d[1]});b.mediaTypes.banner.sizes=e;if(0==e)return!1;googletag.cmd.push(function(){var b=googletag.sizeMapping().addSize([0,0],e).build();a.defineSizeMapping(b)});var k=document.getElementById(a.getSlotElementId());setElementSize(k,f?d[0]:null,d[1]);void 0!=c&&(c.sizes=c.sizes.filter(function(a){return a[1]==d[1]}));var g=[];b.bids.forEach(function(a){0<=["rubicon","appnexus",
"criteo","openx"].indexOf(a.bidder)?g.push(a):"ix"==a.bidder&&a.params.size[1]==d[1]&&g.push(a)});b.bids=g;return!0}
function refreshCandidateSlots(){var a=[],b=[],c=[],d=getVisibleAdSlots(!0);iasLog("refreshCandidateSlots triggered - Check candidate slots stats:",d);var f=getPrebidSlots(curResolution);d.forEach(function(e){var d=getSlotStats(e),g=getSlotConfigs()[e],l=getSlotElementId(e);if(void 0!==g)if(g.refreshEnabled){var h=g.minVisibility||refreshConfig.defaultVisibility;if(h>d.visibility)iasLog(e+" have not reached minimum visibility time: "+h+" ("+d.visibility+")");else if(h=g.maxImpressions||refreshConfig.defaultMaxImpressions,
d.impressions>=h)iasLog(e+" have reached maximum impressions: "+h);else{iasLog(e+" can be refreshed: ",d);h=dfpSlots[e];var n=f.filter(function(a){return l==a.code})[0],m=getAdFrame(l);m=getElementSize(m);if(g.sizeRestriction&&void 0!=m&&(iasLog(e+" size: ",m),!applySlotSizeRestriction(h,n,null,m,g.forceWidth))){iasLog(e+" refresh cancelled as format is not standard: ",m);return}h.setTargeting(_target_sri,d.impressions.toString());d.visibility=0;d.viewable=!1;d.impressions++;a.push(h);b.push(n);c.push(e)}}else iasLog(e+
" is not configured to be refreshed.")});0<a.length&&(iasLog("  Trigger refreshing on slots:",c),removePrebidAdUnits(),addPrebidAdUnits(b,a))}
function startActivityAndVisibilityMonitor(){clearInterval(refreshStatus.activityAndVisibilityInterval);refreshStatus.activityAndVisibilityInterval=setInterval(function(){refreshStatus.inactivityDuration++;refreshStatus.inactivityDuration===refreshConfig.inactivityThreshold&&iasLog("User is becoming inactive");refreshStatus.userTabbedOut||getVisibleAdSlots(!1).forEach(function(a){getSlotStats(a).viewable&&getSlotStats(a).visibility++})},1E3)}
function activityHandler(){refreshStatus.inactivityDuration>=refreshConfig.inactivityThreshold&&(clearTimeout(refreshStatus.refreshCandidateSlotsTimeout),refreshStatus.refreshCandidateSlotsTimeout=window.setTimeout(refreshCandidateSlots,50));refreshStatus.inactivityDuration=0;refreshStatus.userTabbedOut=!1}
function initAdSlotRefresher(){iasLog("initAdSlotRefresher");"keydown mousedown mousemove touchstart click focus".split(" ").forEach(function(a){document.addEventListener(a,activityHandler,!0)});document.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop;refreshStatus.scrollUp=a>refreshStatus.lastScrollPosition?!1:!0;refreshStatus.lastScrollPosition=0>=a?0:a;activityHandler()},!0);window.addEventListener("blur",function(){refreshStatus.userTabbedOut=
!0},!0);googletag.pubads().addEventListener("impressionViewable",function(a){var b=getSlotName(a.slot.getSlotElementId());getSlotStats(b).viewable=!0;adjustSlotSize(a)});startActivityAndVisibilityMonitor()}function resetAdSlotRefresher(){iasLog("resetAdSlotRefresher");refreshStatus.slotsStats={}}function setPrebidTimeout(){var a=Math.random();switch(!1){case !(.1>a):return 800;case !(.2>a):return 1400;case !(.3>a):return 1800;case !(.4>a):return 2200;default:return 1E3}}
function getAbtDeviceTimeout(){var a="desktop";curResolution.startsWith("mobile")?a="mobile":"tablet"==curResolution&&(a="tablet");return a+"_"+PREBID_TIMEOUT}function setDebugMode(){var a=getParameterByName("ias_debug");1<=a&&enableLogs();2<=a&&pbjs.que.push(function(){pbjs.setConfig({debug:!0})});3==a&&googletag.cmd.push(function(){googletag.openConsole()})}function enableLogs(){showLogs=!0}
function getParameterByName(a){a=(new RegExp("[\\?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}function iasLog(){showLogs&&console.log.apply(console,decorateLog(arguments))}function decorateLog(a){a=[].slice.call(a);a.unshift("display:inline-block; color:#fff; background:#82b533; padding:1px 4px; border-radius:3px;");a.unshift("%cIAS");return a};