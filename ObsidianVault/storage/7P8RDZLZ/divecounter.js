function divecounter() {
  var cookieName = '_divecounter';
  var cookieExpire = 365;
  var data = {
    hits: 0,
    is_subscriber: false,
    hide: false,
    last_bug: 0,
    first_hit: 0,
    is_staff: false,
  };

  this.testing = function() {
    if (location.search.indexOf('show_hit_ad') != -1) {
      return true;
    }
    return false;
  };

  this.resetCookie = function() {
    // Expiration in past deletes cookie.
    setCookie(cookieName, '', -100);
  };

  this.countHit = function() {
    if (data.hits == 0) {
      data.first_hit = (new Date()).getTime();
    }
    data.hits++;

    return data.hits;
  };

  this.canShow = function(page_count, min_days) {
    // Page count is show after X pages, no more than min_days from last
    // time and referrer indicates we were already on the site
    if (data.is_subscriber || data.hide) {
      return false;
    }

    if (this.getOption('showAlmostAlways')) {
      page_count = 1;
      min_days = 3;
    }

    if (data.hits > 0 && data.hits % page_count == 0) {
      var now = (new Date()).getTime();
      if (!data.last_bug || now - data.last_bug >= min_days * 24 * 60 * 60 * 1000) {
        return true;
      }
    }
    return false;
  };

  this.prestitialHoursAgo = function(hours_ago_limit) {
    // Returns true if prestitial ad was more than hours_ago_limit since
    // being shown (or was never shown).
    var prestitialViewed = getCookie('_prestitialViewed');
    if (!prestitialViewed) {
      return true; // Never viewed means it was long enough ago.
    }

    var hours_ago = ((new Date().getTime()) - prestitialViewed) / 60 / 60;
    return hours_ago > hours_ago_limit;
  };

  this.markShown = function() {
    data.last_bug = (new Date()).getTime();
  };

  this.markSubscriber = function(value) {
    // Typecast to bool with default value of true.
    value = (typeof value === 'undefined') ? true : !!value;
    data.is_subscriber = value;
  };

  this.markStaff = function(value) {
    // Typecast to bool with default value of true.
    value = (typeof value === 'undefined') ? true : !!value;
    data.is_staff = value;
  };

  this.save = function() {
    writeData();
  };

  this.getData = function() {
    return data;
  };

  this.getOption = function(key) {
    var defaults = {
      showSignupAd: false,
      showWhichAd: false, /** "original" or "choice" **/
      showAlmostAlways: false,
      markStaff: false,
    };
    if ( (typeof divecounter_settings !== 'undefined') && (key in divecounter_settings) ) {
      return divecounter_settings[key];
    }

    return defaults[key];
  };

  this.prettyPrint = function() {
    var s = '';
    for (var data_key in data) {
      // Check for keys to skip: not actually on this object or not
      // currently used.
      if (!data.hasOwnProperty(data_key) || (['hide'].indexOf(data_key) >= 0)) {
        continue;
      }
      data_value = data[data_key];
      // Check for keys to convert to date strings.
      if (['first_hit', 'last_bug'].indexOf(data_key) >= 0) {
        if (parseInt(data_value) > 0) {
          data_value = (new Date(parseInt(data_value))).toString(); // JS timestamp to string.
        } else {
          data_value = '';
        }
      }
      s += data_key + ': ' + data_value + '\n';
    }
    // Add in bonus stats not technically part of divecounter data.
    s += 'initial referrer: ' + getCookie('_referrer') + '\n';
    s += 'UTM strings: ' + getCookie('_utm_medium') + ' ' + getCookie('_utm_campaign') + ' ' + getCookie('_utm_source') + '\n';
    s += 'screen dimensions: ' + window.screen.availWidth.toString() + 'x' + window.screen.availHeight.toString() + '\n';

    return s.trim();
  };

  var setCookie = function(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + '=' + escape(value) +
            ((expiredays == null) ? '' : ';expires=' + exdate.toUTCString()) + '; path=/';
  };

  var getCookie = function(c_name) {
    var c_start; var c_end;
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + '=');
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(';', c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return '';
  };

  var readData = function() {
    var c = getCookie(cookieName);
    var arr;
    // data = new Array();
    if (c != '') {
      arr = c.split('\t');
      data.hits = arr[0];
      data.is_subscriber = !!parseInt(arr[1]);
      data.hide = !!parseInt(arr[2]);
      data.last_bug = arr[3];
      if (arr.length > 4) {
        data.first_hit = arr[4];
      }
      if (arr.length > 5) {
        data.is_staff = !!parseInt(arr[5]);
      }
    }
  };

  var buildCookie = function() {
    var arr = [
      data.hits,
      data.is_subscriber ? 1 : 0,
      data.hide ? 1 : 0,
      data.last_bug,
      data.first_hit,
      data.is_staff ? 1 : 0,
    ];
    return arr.join('\t');
  };

  var writeData = function() {
    setCookie(cookieName, buildCookie(), cookieExpire);
  };

  readData(); // auto load
}


function divecounter_close_ad() {
  $.modal.close();

  if (typeof mixpanel !== 'undefined') {
    mixpanel.track(
      'Signup - hit based form cancelled',
      {
        'url': window.location.href.replace(/[\?\#].*$/, ''),
      }
    );
  }
  var _gaq = window._gaq || (window._gaq = []);
  _gaq.push(['_trackEvent', 'EmailSignup', 'InterstitialClosed', undefined, undefined, true]);

  // adds back in scrolling to body
  $('body').removeClass('no-scroll');
}

function isAtLeastOneNewsletterSelected() {
  return $('#newsletter-list-section li input:checked').length > 0;
}

function isSignupWithMultiPub() {
  return $('#newsletter-list-section li input').length > 0;
}

function isNewsletterSelectionValid() {
  return isSignupWithMultiPub() ? isAtLeastOneNewsletterSelected() : true;
}

function isUserConsentChecked() {
  return $('#interstitial-consent-container input:checked').length > 0;
}


function divecounter_open_ad(popup_trigger) {
  // Figure out if window is wide/high enough to show a prestitial
  var window_wide = $(window).width() > 640;
  var window_high = $(window).height() > 640;
  var window_big_enough = window_wide && window_high;

  if (window_big_enough) {
    if (!popup_trigger) {
      popup_trigger = 'default';
    }
    $(function() {
      var which_ad = 'simple';
      var interstitial_path = '/subpage/signup-interstitial-simple/';
      var _gaq = _gaq || window._gaq || (window._gaq = []);
      _gaq.push(['_trackEvent', 'EmailSignup', 'InterstitialShown', which_ad, divecounter.getData().hits, true]);
      if (typeof mixpanel !== 'undefined') {
        mixpanel.track(
          'Signup - Show hit based advert',
          {
            'hits': divecounter.getData().hits,
            'which_interstitial': which_ad,
            'popup_trigger': popup_trigger,
            'url': window.location.href.replace(/[\?\#].*$/, ''),
          }
        );
      }

      $('body').append('<div id="signup-inter" class="modal_dialog" style="display:none;"></div>');
      $('#signup-inter').load(interstitial_path, function() {
        // inter content loaded, now set some values and display it
        var $form = $(this).find('form');
        $form.find('.newsletter-partner').hide(); // hide all partnership info, see #1029
        var current_dialog;
        $('#signup-inter').modal({
          minWidth: 400,
          maxWidth: 600,
          minHeight: 180,
          autoResize: true,
          autoPosition: true,
          overlayClose: false,
          focus: false,
          opacity: 80,
          closeHTML: '<a href="#" title="Close" class="modal-close">x</a>',
          onClose: divecounter_close_ad,
          // force resize of box. See http://stackoverflow.com/questions/1407059/jquery-simplemodal-dynamic-height
          onShow: function(dialog) {
            $('#interstitial-error').hide();
            current_dialog = dialog;
            // prevents scrolling on body when modal is open
            $('body').addClass('no-scroll');
          },
        });

        // add email checking -- see email_check_js.html
        $form.find('input.email').on('blur', function() {
          checkEmailAndRespond(this);
        });

        $form.find('input.email').focus();
        if (current_dialog !== undefined) {
          $(current_dialog.container).css('height', 'auto');
        }

        // set event for submit
        if (typeof mixpanel !== 'undefined') {
          mixpanel.track_forms(
            '#signup-inter form',
            'Signup - hit based form submitted',
            {
              'which_interstitial': which_ad,
              'popup_trigger': popup_trigger,
              'url': window.location.href.replace(/[\?\#].*$/, ''),
            }
          );
        }

        // Validation for submit.
        $('#signup-inter form').submit(function(event) {
          var email_regex =  new RegExp('[^@]+@[^@]+[\.][^@]+');
          var email_value = $(this.email).val();
          var match_test = email_regex.test(email_value);
          var $interstitialError = $('#interstitial-error');
          var error_msg = '';

          $interstitialError.hide();
          $(this).find('input[type=email]').removeClass('form-error__highlight');

          if (match_test && isNewsletterSelectionValid() && isUserConsentChecked()) {
            var _gaq = _gaq || window._gaq || (window._gaq = []);
            _gaq.push(['_trackEvent', 'EmailSignup', 'InterstitialSubmitted', which_ad, undefined, false]);
            return true;
          } else if (!match_test) {
            error_msg = 'That is not a valid email address. Please enter a valid email.';
            $(this).find('input[type=email]').addClass('form-error__highlight');
          } else if (!isNewsletterSelectionValid() && !isUserConsentChecked()) {
            error_msg = 'You must select at least one newsletter and agree to our Terms of Use and Privacy Policy.';
          } else if (!isUserConsentChecked()) {
            error_msg = 'You must agree to our Terms of Use and Privacy Policy.';
          } else if (!isNewsletterSelectionValid()) {
            error_msg = 'Please select at least one newsletter.';
          }

          $interstitialError.text(error_msg);
          $interstitialError.show();
          // force resize of box. See http://stackoverflow.com/questions/1407059/jquery-simplemodal-dynamic-height
          $('#simplemodal-container').css('height', 'auto');
          event.preventDefault();
          return false;
        });

        // wait a moment and then allow user to close by clicking on the background
        setTimeout(function() { $('.simplemodal-overlay').click($.modal.close); }, 750);
        // $('.simplemodal-overlay').click(function(){ $.modal.close(); });
      });
    });
  }
}


var divecounter = new divecounter();

divecounter.countHit();

if (window.location.search.indexOf('utm_source=Sailthru') !== -1) {
  // if they came from a newsletter, assume they are a subscriber
  divecounter.markSubscriber();
}

if (divecounter.getOption('markStaff')) {
  divecounter.markStaff();
}

// bypass these checks if we're testing
if (divecounter.getOption('showSignupAd') || divecounter.testing()) {
  // see https://github.com/industrydive/divesite/issues/908
  // or if we're testing
  if ((divecounter.canShow(3, 14) && divecounter.prestitialHoursAgo(24 * 3)) || divecounter.testing()) {
    // Use a 100 ms interval to detect whether prestitial.js has determined whether the
    // page is prestitial eligible or if the prestitial ad was empty
    var prestitial_sniffer = setInterval(function() {
      if (typeof prestitial_ad_is_empty === 'undefined' || prestitial_ad_is_empty == true) {
        clearInterval(prestitial_sniffer);
        divecounter_open_ad(divecounter.getOption('showWhichAd'));
        // don't set cookies if we're testing
        if (!divecounter.testing()) {
          divecounter.markShown();
        }
      } else if (typeof prestitial_ad_is_loaded !== 'undefined' && prestitial_ad_is_loaded == true) {
        // if the prestitial loads, we can stop sniffing
        clearInterval(prestitial_sniffer);
      }
      // make sure prestitial_ads exists
      // and we only set the timeout once
      if (typeof prestitial_ads !== 'undefined' && typeof prestitial_sniffer_clear === 'undefined') {
        // stop looking for the prestitial after the prescibed timeout + 1 second of flex
        var prestitial_sniffer_clear = setTimeout(function() {clearInterval(prestitial_sniffer);}, prestitial_ads.timeout_seconds() + 1000);
      }
    }, 50);
  }
}

divecounter.save();

//
// Following is not actually stored in divecounter cookier (yet)
//

// Save initial referrer
(function() {
  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = '; expires=' + date.toGMTString();
    } else var expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // save referrer if doesn't already exist
  // TODO: This is redundant. Should use the referer already being stored by Mixpanel instead
  if (!readCookie('_referrer')) {
    // get referring page unless it's unavailable, then grab current (i.e. first) page
    var referrer = document.referrer ? document.referrer : window.location;
    // limit length
    if (referrer.length > 150) {
      referrer = referrer.slice(0, 150);
    }
    createCookie('_referrer', referrer);
  }
})();
