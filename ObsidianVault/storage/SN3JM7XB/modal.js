var kcModal = (function($) {
  var bindCloseModal = function() {
    $(".close-modal").on("click", function(event) {
      event.preventDefault();
      var modal = $(event.target).closest(".modal"),
          modalId = modal.attr("id");

      closeModal(modalId);
    });
  };

  var closeModal = function(modalId) {
    var modal = $("#" + modalId);

    $(modal).removeClass("active");
    $("#modal-container").removeClass("active");

    var hideCookie = modal.attr("data-hide-cookie"), 
        hideDuration = modal.attr("data-hide-duration");

    if(hideCookie && hideDuration) {
      Cookies.set(hideCookie, true, { expires: Number(hideDuration) })
    }
  };

  var openModal = function(modalId) {
    var modal = $("#" + modalId);

    $(modal).addClass("active");
    $("#modal-container").addClass("active");
  };

  return {
    bindCloseModal: bindCloseModal,
    closeModal: closeModal,
    openModal: openModal
  };

})( jQuery );

jQuery( kcModal.bindCloseModal );