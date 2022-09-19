(function ($, Drupal, window, document, undefined) {
  var mobileClicked = false, searchBtn, menus, mobileMenuBtn;

  // Activate search button.
  var searchOn = function() {
    searchBtn.addClass('background-medium-blue');
  }

  // Deactivate search button.
  var searchOff = function() {
    if (mobileClicked) {
      // Make sure that search is closed.
      // $('#block-cbpp_search-cbpp_custom_search_block').slideUp(400, 'easeOutCirc').removeClass('dropdown-dropped');
    }
    searchBtn.removeClass('background-medium-blue').removeClass('clicked');
  }

  // Deactivate mobile menus, if they were clicked.
  var menusOff = function () {
    if (mobileClicked) {
      $('#header-region').slideUp(400, 'easeOutCirc');
      mobileMenuBtn.removeClass('background-medium-blue');
      mobileClicked = false;
    }
  }

  Drupal.behaviors.menuSlide = {
    attach: function (context) {
       
      // Init values.
      searchBtn = $('#search-button');
      menus = $("#block-system-main-menu").find('li.level-1');
      mobileMenuBtn = $('#mobile-menu-button');

      // Add an event to the top level menus, this will disable search.
      //$("#block-system-main-menu .nolink.level-1", context).once('menuSlide').menuToggle();
      $("#block-system-main-menu .nolink.level-1", context).click(function SearchOff() { searchOff(); });
      
      //toggle the mobile menu via the menu button
      $('#mobile-menu-button', context).click(function(){
        mobileClicked = true;
        $(this).toggleClass('background-medium-blue');
        $('#header-region').slideToggle(400, 'easeOutCirc');
        searchOff();
      });

      //toggle the mobile menu via the menu button
      $('#search-button', context).click(function(){
///        $(this).toggleClass('background-medium-blue');
        // If you click on the search button, deselect all the <li> tags.
        menusOff();
      });
      
      var previousWidth = jQuery(window).width();
      var breakpoint = 750;
      
      $( window ).resize(function() {
        var currentWidth = jQuery(window).width();
        //if the menu is closed and the browser enlarged the main menu will
        //be hidden due to the inline display:none from the slidedown, this fixes that
        //going from mobile to desktop
        if (previousWidth < breakpoint && currentWidth > breakpoint) {
          previousWidth = currentWidth;
          $('#header-region').show().removeClass('dropdown-dropped');
          //if broswer resized above 750 reomve the blue bg from the menu button
          //$('#mobile-menu-button').removeClass('background-medium-blue');
          // Reset mobile flag.
          mobileClicked = false;
        }
        //going from desktop to mobile
        if (previousWidth > breakpoint && currentWidth < breakpoint) {
          previousWidth = currentWidth;
          $('#header-region').hide();
          $('#mobile-menu-button').removeClass('background-medium-blue');
        }

      });
        
    }
  }
})(jQuery, Drupal, window, document);
;
(function ($, window, document) {
  Drupal.behaviors.recaptcha = {
    widgets: {},
    attach: function (context, settings) {
      // Check if the reCAPTCHA script is loaded yet. If not, don't worry: the
      // onload callback recaptchaOnLoad() will make sure that this function is
      // called again once grecaptcha is defined.
      if (typeof (grecaptcha) === 'undefined' || typeof (grecaptcha.render) === 'undefined') {
        return;
      }
      $('.g-recaptcha', context).once('drupal-recaptcha').each(function () {
        Drupal.behaviors.recaptcha.widgets[this.id] = grecaptcha.render(this, $(this).data());
      });
    }
  };
})(jQuery, window, document);
;
