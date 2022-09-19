/**
 *  Adds mailcheck to all inputs with type=email inside forms with class "js-form-email-validate".
 *
 *  This assumes mailcheck.min.js and jquery have been included.
 **/


/**
 * Call mailcheck and handle the response by clearing all previous mail check
 * message, and printing a new message if needed.
 *
 * @param {object} textfield the email input field we're processing
 * @returns {null} nothing
 */
function checkEmailAndRespond(textfield) {
  $(textfield).mailcheck({
    suggested: function(element, suggestion) {
      /**
       * suggestion is in the form
       *   {
       *     address: 'test',          // the address; part before the @ sign
       *     domain: 'gmail.com',    // the suggested domain
       *     full: 'test@gmail.com'  // the full suggested email
       *   }
       */

      // remove old instances of the warning - anywhere on the page
      $('.js-email-check').remove();

      var $emailfield = $(element);
      var htmlToAdd = '<p class="email-check js-email-check">Did you mean <b>' + suggestion.domain + '</b>?</p>';

      // we want to put the message outside any label or div the field is in
      if ($emailfield.parentsUntil('form').length) {
        $($emailfield.parent()).after(htmlToAdd);
      } else {
        $emailfield.after(htmlToAdd);
      }
    },
    empty: function(element) {
      $('.js-email-check').remove();
    },
  });
}

$(document).ready(function() {
  /**
   * Apply our handler to each relevant input field on the page.
   */
  $('.js-form-email-validate input[type=email]').each(function() {
    $(this).on('blur', function() {
      checkEmailAndRespond(this);
    });
  });
});


