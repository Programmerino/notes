(function(){'use strict';var checked=false;window.onload=function(){var $leaky_paywall_ajax=jQuery.noConflict();if(!checked){checked=true;lpa_check();var ua=window.navigator.userAgent;var msie=ua.indexOf('MSIE ');var trident=ua.indexOf('Trident/');if(msie>0||trident>0){document.body.classList.add('modal-open');var bm=document.getElementById('browserie');bm.classList.add('show');bm.style.display='block';document.body.innerHTML=document.body.innerHTML+
'<div class="modal-backdrop show"></div>';}
$leaky_paywall_ajax('#read_more_btn').click(function(){lpa_check(false);});}};window.addEventListener('DOMContentLoaded',function(){var $leaky_paywall_ajax=jQuery.noConflict();checkCookie();if(!checked){checked=true;lpa_check();$leaky_paywall_ajax('#read_more_btn').click(function(){lpa_check(false);});}});})();var d=new Date();function lpa_check(preview){if(typeof my_script_vars==='undefined')return;var post_id=my_script_vars.postID;var is_single=my_script_vars.is_single;var is_archive=my_script_vars.is_archive;var user_id=my_script_vars.user_id;var site=my_script_vars.site;var search=my_script_vars.search;var loggedin=my_script_vars.loggedin;var sub_site=my_script_vars.sub_site;var $leaky_paywall_ajax=jQuery.noConflict();var popupShowing=false;var ajaxurl='/wp-admin/admin-ajax.php';if(site=='kcna'){}
if(site!='news'){preview=false;}else if(site=='news'&&typeof preview==='undefined'){preview=true;}
$leaky_paywall_ajax.post(ajaxurl+
'?action=process_requests&post_id='+
post_id+
'&is_single='+
is_single+
'&is_archive='+
is_archive+
'&user_id='+
user_id+
'&site='+
site+
'&search='+
search+
'&loggedin='+
loggedin+
'&preview='+
preview+
'&ref='+
encodeURIComponent(document.referrer)+
'&fullref='+
encodeURIComponent(window.location)+
'&t='+
d.getTime(),function(data){data=$leaky_paywall_ajax.parseJSON(data);if(data.should_user_auto_login===false&&data.is_logged_in===true&&(typeof data.ip_check==='undefined'||(typeof data.ip_check==='undefined'&&data.ip_check==='logged_in'))){var pattern=/[?&]t=/;var URL=location.search;if(!pattern.test(URL)){var url=window.location.href+'?t='+d.getTime();}}
if(!is_single){if(site==='pro'&&data.is_logged_in!==true){if(post_id==199801||post_id==96022||post_id==208626||post_id==205204||post_id==121215||post_id==206328||post_id==206335||post_id==151479||post_id==151484||post_id==195717||post_id==192132||post_id==162913||post_id==192132||post_id==151524||post_id==151529||post_id==151528||post_id==161474||post_id==151526||post_id==151537||post_id==151491||post_id==161994||post_id==5642||post_id==2769||post_id==2777||post_id==3340||search){$leaky_paywall_ajax('#signin').modal('show');popupShowing=true;}}
if(site=='kcna'&&data.is_logged_in!==true){if(typeof data.message!=='undefined'&&data.message!==''&&window.location.pathname.indexOf('/profile')===-1&&window.location.pathname.indexOf('/contact')===-1){if(!popupShowing){$leaky_paywall_ajax('#user_popup_wrapper').html(data.message);$leaky_paywall_ajax('#popupMessage').modal('show');$leaky_paywall_ajax('#search_wrapper').hide();popupShowing=true;}}
if(search&&!popupShowing){$leaky_paywall_ajax('#signin').modal('show');popupShowing=true;}}
if(typeof data.is_logged_in!=='undefined'&&data.is_logged_in===true){if(typeof data.message!=='undefined'&&data.message!==''&&window.location.pathname.indexOf('/profile')===-1&&window.location.pathname.indexOf('/contact')===-1){if(!popupShowing){$leaky_paywall_ajax('#user_popup_wrapper').html(data.message);$leaky_paywall_ajax('#popupMessage').modal('show');popupShowing=true;}}}}
if(is_single||(window.location.pathname.indexOf('/profile')===-1&&window.location.pathname.indexOf('/contact')===-1)){$leaky_paywall_ajax('#excerptContent').show();$leaky_paywall_ajax('#single_advert').removeClass('d-none');if((typeof data.show!==undefined&&data.show==='1')||(typeof data.ip_check==='undefined'&&typeof data.checkReferer!==undefined)||(typeof data.ip_check!=='undefined'&&data.ip_check!=='logged_in')){setCookie('cachen','y',0);if(typeof data.checkReferer!==undefined&&data.checkReferer===true){var json_whitelisted=getCookie('whitelisted');var whitelisted=[];if(json_whitelisted){whitelisted=JSON.parse(json_whitelisted);}
var onWhitelist=false;for(var i=0;i<whitelisted.length;i++){if(whitelisted[i]==data.post_id){onWhitelist=true;}}
if(onWhitelist||whitelisted.length<=data.whitelisted_limit){$leaky_paywall_ajax('#fullContent').show();$leaky_paywall_ajax('#excerptContent').hide();}
if(!onWhitelist&&whitelisted.length<=data.whitelisted_limit){whitelisted.push(data.post_id);json_whitelisted=JSON.stringify(whitelisted);setCookie('whitelisted',json_whitelisted,30);}}else{}
if(typeof data.show!==undefined&&(data.show=='1'||data.show=='2')){if((preview!=true&&site=='news')||data.show=='2'){$leaky_paywall_ajax('#fullContent').show();$leaky_paywall_ajax('#excerptContent').hide();}else if(site=='pro'){$leaky_paywall_ajax('.read-more-article').hide();$leaky_paywall_ajax('#content-wrapper').html(data.content);$leaky_paywall_ajax('#content-wrapper').removeClass('limited');}}else{if(preview==false&&site=='news'){if(!popupShowing){$leaky_paywall_ajax('#signin').modal('show');popupShowing=true;}}}}
if(typeof data.ip_check!=='undefined'&&data.ip_check=='logged_in'&&typeof data.should_user_auto_login!=='undefined'&&data.should_user_auto_login!=false){if(window.location.pathname.indexOf('/profile')!==-1){window.location.href=window.location.hostname;}
var check_login=$leaky_paywall_ajax('.sign-in-wrapper button span').html();var check_login_pro=$leaky_paywall_ajax('.sign-in-wrapper a span').html();$leaky_paywall_ajax(function(){$leaky_paywall_ajax('a').attr('href',function(i,h){if(h&&(h.indexOf('nknews.org')>-1||h.indexOf('kcnawatch.org')>-1)&&h.indexOf('?t=')===-1&&h.indexOf('&t=')===-1&&h.indexOf('#')===-1&&h.indexOf('javascript:void')===-1){return(h+
(h.indexOf('?')!==-1?'&t='+d.getTime():'?t='+d.getTime()));}});});setCookie('cachen','y',90);if((typeof check_login!=='undefined'&&check_login.trim()=='Sign in')||(typeof check_login_pro!=='undefined'&&check_login_pro=='Sign in')){var pattern=/[?&]t=/;URL=location.search;if(!pattern.test(URL)){url=window.location.href+'?t='+d.getTime();window.location=url;}
if(typeof check_login_pro!=='undefined'&&check_login_pro=='Sign in'){$leaky_paywall_ajax('.sign-in-wrapper a span').html('Logged In');}else{$leaky_paywall_ajax('.sign-in-wrapper button span').html('Logged In');}}
if(typeof data.message!=='undefined'&&data.message!=''){if(!popupShowing){$leaky_paywall_ajax('#user_popup_wrapper').html(data.message);$leaky_paywall_ajax('#popupMessage').modal('show');popupShowing=true;}}else{$leaky_paywall_ajax('#fullContent').show();$leaky_paywall_ajax('#excerptContent').hide();}}
if(typeof data.is_logged_in!=='undefined'&&data.is_logged_in===true){var check_login=$leaky_paywall_ajax('.sign-in-wrapper button span').html();var check_login_pro=$leaky_paywall_ajax('.sign-in-wrapper a span').html();$leaky_paywall_ajax(function(){$leaky_paywall_ajax('a').attr('href',function(i,h){if(h&&(h.indexOf('nknews.org')>-1||h.indexOf('kcnawatch.org')>-1)&&h.indexOf('?t=')===-1&&h.indexOf('&t=')===-1&&h.indexOf('#')===-1&&h.indexOf('javascript:void')===-1){return(h+
(h.indexOf('?')!==-1?'&t='+d.getTime():'?t='+d.getTime()));}});});setCookie('cachen','y',90);if(((typeof check_login!=='undefined'&&check_login.trim()=='Sign in')||(typeof check_login_pro!=='undefined'&&check_login_pro=='Sign in'))&&typeof data.should_user_auto_login!=='undefined'&&data.should_user_auto_login!=false){var pattern=/[?&]t=/;var URL=location.search;if(!pattern.test(URL)){var url=window.location.href+'?t='+d.getTime();window.location=url;}
if(typeof check_login_pro!=='undefined'&&check_login_pro=='Sign in'){$leaky_paywall_ajax('.sign-in-wrapper a span').html('Logged In');}else{$leaky_paywall_ajax('.sign-in-wrapper button span').html('Logged In');}}
if(typeof data.message!=='undefined'&&data.message!=''){if(!popupShowing){$leaky_paywall_ajax('#user_popup_wrapper').html(data.message);$leaky_paywall_ajax('#popupMessage').modal('show');popupShowing=true;}}else{$leaky_paywall_ajax('#fullContent').show();$leaky_paywall_ajax('#excerptContent').hide();}}}
if(jQuery('.twenty20').length>0){jQuery('.twentytwenty-container > img').each(function(){jQuery(this).load(function(){var evt=window.document.createEvent('UIEvents');evt.initUIEvent('resize',true,false,window,0);window.dispatchEvent(evt);});});}
var onboarding_check=getCookie('onboarding');if(!onboarding_check&&typeof data.subscribtion!=='undefined'&&data.subscribtion=='pro'&&data.show_onboarding!='no'){$leaky_paywall_ajax('#onboarding').modal('show');setCookie('onboarding',true,1);}});}
function setCookie(cname,cvalue,exdays){d.setTime(d.getTime()+exdays*24*60*60*1000);var expires='expires='+d.toUTCString();document.cookie=cname+'='+cvalue+';'+expires+';path=/';}
function getCookie(cname){var name=cname+'=';var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1);}
if(c.indexOf(name)===0){return c.substring(name.length,c.length);}}
return false;}
function checkCookie(){var cookieEnabled=navigator.cookieEnabled;if(!cookieEnabled){document.cookie='testcookie';cookieEnabled=document.cookie.indexOf('testcookie')!==-1;}
return cookieEnabled||showCookieFail();}
function showCookieFail(){window.location.replace('https://signup.nknews.org/');}