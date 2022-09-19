(function($) {
  var prestitialAds = {

    daysBetweenPrestitial: 7,
    defaultTimeoutSeconds: 15,

    testing: function() {
      if (document.location.search.indexOf('prestitial_test') !== -1) {
        return true;
      }
      return false;
    },

    testingNoAd: function() {
      if (
        this.testing() === true
        && document.location.search.indexOf('no_ad') !== -1
      ) {
        return true;
      }
      return false;
    },

    overrideTimeout: function() {
      if (
        this.testing() === true
        && document.location.search.match('no_timeout') !== null
      ) {
        return true;
      }
      return false;
    },

    timeoutSeconds: function() {
      return this.defaultTimeoutSeconds * 1000;
    },

    setPrestitialPossibleCookie: function() {
      // "possible" prestitial tracking for ad inventory reporting. _prestitialViewed is used
      //  for deciding whether or not it's time to show the ad
      if (document.cookie.indexOf('_prestitialPossible') === -1) {
        if (typeof mixpanel !== 'undefined') {
          var sampleSize = 10; // only one out of every `sampleSize` events is recorded
          // we do this to save bandwidth/overhead
          if (Math.floor(Math.random() * sampleSize) + 1 === 1) {
            mixpanel.track(
              'prestitial possible',
              {
                'sample_size': sampleSize,
                'url': window.location.href.replace(/[\?\#].*$/, ''),
              }
            );
          }
        }
        this.setCookie(
          '_prestitialPossible',
          Date.now(),
          this.daysBetweenPrestitial
        );
      }
    },

    setCookie: function(cName, value, expireDays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expireDays);
      document.cookie =
        cName + '=' + encodeURIComponent(value)
        + ((expireDays == null) ? '' : ';expires=' + exdate.toUTCString())
        + '; path=/';
    },

    screenMeetsSizeReqs: function() {
      // Figure out if window is wide/high enough to show a prestitial
      var windowWide = $(window).innerWidth() > 640;
      var windowHigh = $(window).innerHeight() > 640;

      return (windowWide && windowHigh);
    },

    userIsPrestitialEligible: function() {
      return (
        (document.cookie.indexOf('_prestitialViewed') === -1)
        && (window.location.href.indexOf('?prestitial_skip') === -1)
      );
    },

    pageIsPrestitialEligible: function() {
      // override if we are forcing a test
      if (this.testing() === true) {
        return true;
      }

      // Check 2 conditions:
      // 1. The screen size meets minimum requirements
      // 2. User is eligible (via cookies).
      if (
        this.screenMeetsSizeReqs() === true
        && this.userIsPrestitialEligible() === true
      ) {
        return true;
      }

      return false;
    },

    logClosePrestitialAdBy: function(closedBy) {
      if ((typeof mixpanel !== 'undefined')) {
        mixpanel.track(
          'prestitial closed',
          {
            'closed_by': closedBy,
            'url': window.location.href.replace(/[\?\#].*$/, ''),
          }
        );
      }
    },

    initialize: function(daysBetweenPrestitial) {
      // if the user and browser parameters are eligible for a prestitial ad
      // set the prestitial layers to visible
      $('body').css('overflow', 'hidden');
      $('div#prestitial-init').show();


      if (typeof daysBetweenPrestitial === 'undefined') {
        // Not sure if we still need the variable being set at the top of this file via daysBetweenPrestitial = 7
        this.daysBetweenPrestitial = 7;
      } else {
        this.daysBetweenPrestitial = daysBetweenPrestitial;
      }

      // Alias because "this" is a different namespace in the next chunk.
      var closeFunc = this.logClosePrestitialAdBy;
      var hideFunc = this.closePrestitial;

      // Make the prestitial visible behind the overlay.
      // Add the click handler to close the prestitial and log the event.
      $('#prestitial-outer')
        .show()
        .click(function(e) {
          closeFunc('user');
          hideFunc();
        });
    },

    closePrestitial: function() {
      // close all prestitial things and set the body overflow back to default
      $('body').css('overflow', '');
      $('div#prestitial-init').hide();
      $('#prestitial-outer').hide();
    },

    prestitialAdIsClosed: function() {
      return (
        $('#prestitial-outer').is(':hidden') === true
        && $('div#prestitial-init').is(':hidden') === true
      );
    },
  };

  window.prestitialAds = prestitialAds;
})(jQuery);
