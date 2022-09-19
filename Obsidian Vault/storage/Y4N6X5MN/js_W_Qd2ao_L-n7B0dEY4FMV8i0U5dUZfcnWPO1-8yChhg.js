(function($, Drupal, window, document) {
  Drupal.behaviors.print_link = {
    attach: function(context) {
      $('.print-link').click(function(e) {
        e.preventDefault();
        window.print();
        return false;
      });
    }
  }
})(jQuery, Drupal, window, document);
;
