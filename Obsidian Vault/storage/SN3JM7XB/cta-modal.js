var cta = (function($) {
  'use strict';

  var ctaModal = $("#cta-modal"),
      modal = kcModal;

  var openModal = function() {
    modal.openModal(ctaModal.attr("id"));
  };

  var timeRelease =  function(time) {
    var seconds = Number(time),
        milliseconds = seconds * 1000;

    setTimeout(function(){
      openModal();
    }, milliseconds);
  };

  var ready = function() {
    var modalDismissed = Cookies.get('cta-modal-dismiss');

    if(ctaModal && !modalDismissed) {
      var time = $("#cta-modal").data("timer");
      if (time) {
        return timeRelease(time);
      }
    }
  };

  return {
    ready: ready
  };
})( jQuery );

jQuery( cta.ready );