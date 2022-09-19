(function() {
  var urlCleaner = {
    /**
     * Semaphore that tells us how many async processes have the URL "locked"
     * @type {Number}
     */
    pageUrlSemaphore: 0,

    /**
     * Removes UTM parameters from the current URL
     * @returns {void}
     */
    attemptCleanUrl: function() {
      // only clean the URL if nobody is still waiting on it.
      if (--this.pageUrlSemaphore <= 0) {
        // nuke the UTM strings from the browser url bar if the browser
        // supports it and if there was a utm in the url
        if (window.history
              && window.history.replaceState
              && window.location.search
              && (window.location.search.indexOf('utm_') !== -1)
        ) {
          var currUrl = window.location.href;
          // remove the utm_ params and then a question mark or ampersand
          var newUrl = currUrl.replace(/utm_[a-z]+=[^&]*&?/gi, '').replace(/[\?&]+$/, '');
          window.history.replaceState({}, document.title, newUrl);
        }
      }
    },
  };

  if (typeof window.urlCleaner === 'undefined') {
    window.urlCleaner = urlCleaner;
  }
})();
