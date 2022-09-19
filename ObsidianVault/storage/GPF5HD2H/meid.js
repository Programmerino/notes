"use strict";
(function () {
  var UIDKey = 'UID';
  var SSOIDKey = 'sso_id';
  var SSOIDBackupKey = 'sso_idback';
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  var getCookie = function (name) {
    var cookieValue = '';
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length >= 2) {
      cookieValue = parts.pop().split(";").shift();
    }
    if (isSafari && name === UIDKey && window.localStorage) {
      var localStorageCookie = window.localStorage.getItem(name);
      if (localStorageCookie && localStorageCookie !== cookieValue) {
        cookieValue = localStorageCookie;
        createCookie(name, localStorageCookie);
      }
    }
    return cookieValue;
  };

  var createCookie = function (key, value) {
    var d = new Date();
    var domain = '.' + location.host.split('.').slice(-2).join('.');
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + "; " + expires + "; domain=" + domain + "; path=/";
    if (isSafari && key === UIDKey && window.localStorage) {
      var localStorageCookie = window.localStorage.getItem(key);
      if (localStorageCookie !== value) {
        window.localStorage.setItem(key, value);
        window.localStorage.setItem(key + '-created-time', new Date().getTime());
      }
    }
    if (key === UIDKey) {
      window.meID = value;
      //the segment thumbnail doesn't match the meid, we need to refresh the segment list again.
      if (!window.meid_seg || !window.meid_seg.indexOf(value) < 0) {
        syncMeIDSeg(value);
      }
    }
  }

  var isValidUID = function (str) {
    return str && str.length >= 15 && !/[\\s()'\\[\\]\\<\\>]/.test(str);
  }

  var firstPartyCookie = getCookie(UIDKey);
  var ssoid = getCookie(SSOIDKey) || getCookie(SSOIDBackupKey);
  var thirdPartyCookie = '';
  var thirdPartyCookieNew = '';
  var newUUID = 'dc4044c6-d2bd-4c8d-a1c3-06da1978cc23';
  var network = 'mediacorp';
  var inBlacklist = 'NO' === 'YES';

  function syncThirdPartyMeID(meID) {
    var callbackMethod = 'SuccessUID_callback_' + (new Date().getTime());
    window[callbackMethod] = function (retMeID) {
      if (meID !== retMeID) {
        createCookie(UIDKey, retMeID);
      }
      delete window[callbackMethod];
    }
    var meID = meID || window.meID || firstPartyCookie;
    var script = document.createElement('script');
    var endpoint = 'https://uid.mediacorp.sg/api/scripts/meid_sync.js?SSOID=' + encodeURIComponent(ssoid) + '&MeID=' + encodeURIComponent(meID);
    endpoint = endpoint + '&meid_callback=' + callbackMethod;
    script.src = endpoint;
    document.head.appendChild(script); //or something of the likes
  }

  function syncMeIDSeg(meID) {
    var callbackMethod = 'SuccessMeIDSeg_callback_' + (new Date().getTime());
    window[callbackMethod] = function (segments) {
      window.meid_seg = (segments || []).join(',');
      createCookie('MeID_Seg', (segments || []).join(','));
      createCookie('adtechTargetingKeys', (segments || []).join('--')); //for backward compatibility
      delete window[callbackMethod];
    }
    var script = document.createElement('script');
    var endpoint = 'https://uid.mediacorp.sg/api/scripts/meid_seg.js?MeID=' + encodeURIComponent(meID);
    endpoint = endpoint + '&meid_callback=' + callbackMethod;
    script.src = endpoint;
    document.head.appendChild(script); //or something of the likes
  }

  if (isValidUID(ssoid)) { // has ssoid
    if (firstPartyCookie !== ssoid) {
      createCookie(UIDKey, ssoid); //save SSOID cookie as 1p cookie
    }
    if (thirdPartyCookie !== ssoid) {
      syncThirdPartyMeID(ssoid);
    }
  }
  else if (!firstPartyCookie) { //no first party cookie
    if (thirdPartyCookie) { //but has 3rd party cookie
      createCookie(UIDKey, thirdPartyCookie); //save 3p cookie as 1p cookie
    }
    else {  //also no 3rd party cookie
      createCookie(UIDKey, newUUID); //generate new 1p cookie and then sync with 3p
      syncThirdPartyMeID(newUUID);
    }
  }
  else if (thirdPartyCookie && firstPartyCookie !== thirdPartyCookie) {
    createCookie(UIDKey, thirdPartyCookie);
  }
  else if (!thirdPartyCookie) {
    syncThirdPartyMeID(firstPartyCookie);
  } else if (inBlacklist || !thirdPartyCookieNew) {
    syncThirdPartyMeID();
  }

  window.meID = window.meID || firstPartyCookie;
  window.meid_seg = window.meid_seg || getCookie('MeID_Seg');

  syncMeIDSeg(window.meID);
})();