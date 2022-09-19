(function ($) {
    $(window).load(function () {
        $('.search-toggle').click(function () {
            var $form = $('.search-toggle-container form');

            if ($form.is(':visible')) {
                $form.slideUp();
            }
            else {
                $form.slideDown();
                $form.find('input').focus();
            }
        });
    })
})(jQuery);