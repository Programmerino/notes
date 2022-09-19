var kcPrint = (function($) {
  var bindPrint = function() {
    $(".print").on("click", function(event) {
      event.preventDefault();
      window.print();
    });
  };

  return {
    bindPrint: bindPrint
  };
})( jQuery );

jQuery( kcPrint.bindPrint );