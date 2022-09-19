/**
 * @file
 * Set up modal display for ads on cc pages.
 */

(function ($) {
  Drupal.behaviors.cc_ads_modal_config = {
    attach: function (context, settings) {
      var debug_without_cookie = true;
      var modal_limit = Number(settings.cc_ads.modalLimit);
      var bidPrefix = settings.cc_ads.bidPrefix;

      // Check to see if we have hit our modal limit, if so return.
      if (!debug_without_cookie && cc_ads_modal_cookie_is_above_limit()) {
        return;
      }

      // Find the single ad to turn into modal.
      var modal_candidates = [];
      var is_content_paywalled = $('body').hasClass('content-paywall-truncated');
      var paywalled_message = $('aside.cc-paywall').html();
      var bean_paywall_id = bidPrefix + 'paywall-pop-up';
      if (!is_content_paywalled) {
        $('#' + bean_paywall_id).remove();
      }
      else {
        $('#' + bean_paywall_id + ' .cc-sign-up-text__info').html(paywalled_message);
      }
      $(".dialog__css-ads-modal").each(function() {
        if (is_content_paywalled && this.id != bean_paywall_id) {
          $(this).remove();
        }
        else {
          modal_candidates.push(this);
        }
      });
      if (modal_candidates.length > 0) {
        var chosen_modal = modal_candidates[Math.floor(Math.random() * modal_candidates.length)];
        var delay_in_ms = Number($(chosen_modal).attr('cc_delay')) * 1000;
        timed_modal(chosen_modal.id, delay_in_ms);
      }


      /**
       * Get the value of the cookie tracking how many modals have been set.
       */
      function cc_ads_get_modal_cookie() {
        return Number($.cookie('modalServed'));
      }

      /**
       * Increment the cookie tracking how many modals have been displayed.
       */
      function cc_ads_inc_modal_cookie() {
        var modal_cookie_val = cc_ads_get_modal_cookie();
        var new_modal_count = parseInt(modal_cookie_val) + 1;
        $.cookie('modalServed', new_modal_count, {path: '/'});
      }

      /**
       * Check to see if modal count cookie is set.
       */
      function cc_ads_modal_cookie_is_above_limit() {
        var modal_count = cc_ads_get_modal_cookie();
        return modal_count >= modal_limit;
      }

      /**
       * Set up JS callback for timed modal display.
       */
      function timed_modal(id, delay) {
        var modalContentCssSelector = '#' + id;
        var d = $(modalContentCssSelector).dialog({
          autoOpen: false,
          show: {
            effect: "fade",
            duration: 200
          },
          modal: true,
          resizable: false,
          draggable: false,
          // TODO change this class name to something more semantic.
          dialogClass: "cc_ads"
        });
        setTimeout(function () {
          cc_ads_inc_modal_cookie();
          d.dialog('open');
        }, delay);
      }

      // function scroll_to_modal( config ) {
      //   $( "div.field-name-body > p:nth-child(" + ( config * 2 ) + ")" ).waypoint(function() {
      //     var d = $( '#dialog' ).dialog({
      //       autoOpen: false,
      //       show: {
      //         effect: "fade",
      //         duration: 200
      //       },
      //       modal: true,
      //       resizable: false,
      //       draggable: false,
      //       dialogClass: "cc_ads"
      //     });
      //     d.dialog('open');
      //     this.destroy();
      //   });
      // }
    }
  };
})(jQuery);
;
