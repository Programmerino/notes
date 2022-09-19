// ======== utility functions ========

// Debounce function that waits until a rapidly triggering event is done firing
// See https://gist.github.com/mazell/289e13ccf01759fcb921
// Disable eslint as this is used as a global
// eslint-disable-next-line no-unused-vars
var waitForFinalEvent = (function() {
  var timers = {};
  return function(callback, ms, uniqueId) {
    var timerId = uniqueId ? uniqueId : "Don't call this twice without a uniqueId";

    if (timers[timerId]) {
      clearTimeout(timers[timerId]);
    }
    timers[timerId] = setTimeout(callback, ms);
  };
})();

$(document).ready(function() {
  // javascript canary for signup forms - SIGNUP FORMS DON'T VALIDATE WITHOUT THIS
  $("input[name='js_enabled'], input[name='javascript_enabled']").val('1'); // prove that javascript is enabled

  // ======== MOBILE MENU =======
  // mobile menu slide out
  $('.mobile-menu-toggle').on('touchstart, click', function( event ) {
    event.preventDefault();

    // menu variables
    var mobileMenu = $('.mobile-menu');

    // toggle open class
    mobileMenu.toggleClass('open');

    // functions
    function openMenu() {
      // brings menu out to 0px
      mobileMenu.animate({
        right: '0px',
      }, 150);

      // activates overlay and no scroll
      $('.overlay').fadeIn(150);
      $('body').addClass('no-scroll');
    }

    function closeMenu() {
      // makes sure menu is always off the page when closed
      mobileMenu.animate({
        right: '-1000px',
      }, 150);

      // removes overlay and no scroll
      $('.overlay').fadeOut(150);
      $('body').removeClass('no-scroll');

      // closes accordion on close
      $('.mm-accordion ul').slideUp();
      $('.mm-accordion button').removeClass('active');
    }

    // slide menu
    if (mobileMenu.hasClass('open')) {
      openMenu();
    } else {
      closeMenu();
    }

    // closes menu when you click on overlay
    $('.overlay').click(function() {
      closeMenu();
      mobileMenu.removeClass('open');
    });
  });

  // topics accordion in mobile menu
  $('.mm-accordion ul').hide();
  $('.mm-accordion button').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  // ===== RIGHT SIDEBAR - PRIORITIZE BOXES =====
  function compressSidebar() {
    // Keep trying to remove boxes for as long as the
    // sidebar is taller than the content well
    // Conveniently, height() will be undefined if either the
    // sidebar or the container don't exist
    // so the loop won't execute if the page is messed up or something.
    while ($('.sidebar').height() >= $('#main-content').height()) {
      var $boxes = $('.sidebar-box');
      // custom sort compare function to arrange boxes by priority attribute
      $boxes.sort(function(a, b) {
        var aPri = $(a).attr('data-box-priority');
        aPri = aPri ? aPri : 0; // priority assumed zero if not defined
        var bPri = $(b).attr('data-box-priority');
        bPri = bPri ? bPri : 0; // priority assumed zero if not defined
        if (aPri > bPri) {
          return 1;
        } else if (aPri < bPri) {
          return -1;
        }
        // if (aPri === bPri)
        return 0;
      });
      // grab the last box, the one with the worst/largest priority score
      var $removalCandidate = $boxes.last();
      if (!($removalCandidate) || !($removalCandidate.attr('data-box-priority') > 0)) {
        // Bail if there are no boxes or if the candidate box has
        // a priority of 0 (or less or undefined)
        // which means never remove it.
        // TODO: Refactor this so it doesn't use a break in a while loop
        break;
      }
      $removalCandidate.remove();
    }
  }

  // run once when site DOM finishes loading
  compressSidebar();
  // run again 1/2 second later to give stuff like ads more time to load
  setTimeout(compressSidebar, 500);

  // ======== DESKTOP DROPDOWN FUNCTIONALITY =======
  var menuBreakpoint = 816; // this is the pixel conversion of $menu-breakpoint (see _global_variables.scss)
  var mediumBreakpoint = 1024;

  /**
   * Create a dropdown object
   * @param { string }id - the class identifying the dropdown
   * @param { bool } topics - True if this is the topics dropdown
   * menuDropdownBar - the menu bar
   * navItemWrapper - the wrapper around the list item in the nav
   * navItemTrigger - the link for the list item in the nav
   * Associate functions
   * clickDropdown() - toggles the visibility of the menu bar, hides all other dropdowns when showing the clicked dropdown
   * showDropdown() - show the dropdown menu bar by positioning it above the nav
   * hideDropdown() - hide the dropdown menu bar
   * showNavItem() - adds class to show the link in the nav
   * hideNavItem() - removes class to hide the link in the nav
   * @returns { void }
   */
  var Dropdown = function(id, topics) {
    this.topics = topics;
    this.menuDropdownBar = $(id + '.menu-bar');
    this.navItemWrapper = $(id + '.top-nav-dropdown-item');
    this.navItemTrigger = $(id + '.top-nav-dropdown-item a');
  };

  var clickDropdown = function(val) {
    // nav slides down from menu on click
    var clicked = navArray[val];
    clicked.navItemTrigger.on('click', function(event) {
      event.preventDefault();
      if (search.hasClass('js-search-show')) { // if search is already shown, hide search
        hideSearch();
        if (window.innerWidth >= mediumBreakpoint) {
          // Check if user is scrolled up at or above where the site-menu normally appears
          if ($(window).scrollTop() <= $('header').offset().top) {
            showMenuBar(0); // topics
          }
        }
      }

      if (!clicked.menuDropdownBar.hasClass('js-menu-bar-hide')) { // if the clicked dropdown bar is already shown, hide it
        hideMenuBar(val);
      } else { // dropdown is not currently visible, hide all other visible dropdowns
        for (var i = 0; i < navArray.length; i++) {
          var item = navArray[i];
          // if a dropdown is showing (does not have class js-menu-bar-hide)
          if (!item.menuDropdownBar.hasClass('js-menu-bar-hide')) {
            // if the visible dropdown is  topics, only hide if on medium screen or scrolled down on large
            // this is only for topics because the topics bar should always be visible at the top of the page when on large screens
            if (item.topics) {
              if (
                (window.innerWidth < mediumBreakpoint) ||
                ($(window).scrollTop() > $('header').offset().top)
              ) { // don't allow more than one dropdown to be open
                hideMenuBar(i);
              }
            // if not the topics dropdown, hide it
            } else {
              hideMenuBar(i);
            }
          }
        }
        // show the clicked dropdown
        showMenuBar(val);
      }
    });
  };

  // create an array to hold all nav dropdown items
  var navArray = [];

  // always create the topics nav
  var topics = new Dropdown('.topics', true);
  navArray.push(topics);

  // initialize all clickDropdown functions
  for (var i = 0; i < navArray.length; i++) {
    clickDropdown(i);
  }

  // Show the menu bar for a specific dropdown
  var showMenuBar = function(index) {
    navArray[index].menuDropdownBar.removeClass('js-menu-bar-hide'); // displays menu w top:55px
    navArray[index].menuDropdownBar.addClass('js-menu-bar-transition');
    navArray[index].navItemWrapper.addClass('js-top-nav-item-active'); // toggles arrow
  };

  // Hide the menu bar for a specific dropdown
  var hideMenuBar = function(index) {
    navArray[index].menuDropdownBar.addClass('js-menu-bar-hide'); // displays menu w top:0px behind menu
    navArray[index].menuDropdownBar.removeClass('js-menu-bar-transition');
    navArray[index].navItemWrapper.removeClass('js-top-nav-item-active'); // toggles arrow
  };

  // Show the nav item for a specific dropdown
  var showNavItem = function(index) {
    navArray[index].navItemWrapper.addClass('js-top-nav-item-visible');
  };

  // Hide the nav item for a specific dropdown
  var hideNavItem = function(index) {
    navArray[index].navItemWrapper.removeClass('js-top-nav-item-visible');
  };

  // search
  var search = $('.menu-search');
  var siteMenu = $('.site-menu');
  function displaySearch() {
    search.removeClass('js-search-hide');
    search.addClass('js-search-show');
    $('#search').focus();
    $('.search-overlay').fadeIn(150);
    $('body').addClass('no-scroll');
  }
  function hideSearch() {
    search.addClass('js-search-hide');
    search.removeClass('js-search-show');
    $('.search-overlay').fadeOut(150);
    $('body').removeClass('no-scroll');
  }
  function searchFixed() {
    search.css('position', 'fixed');
  }
  function searchUnfixed() {
    search.css('position', 'absolute');
  }
  function menuFixed() {
    siteMenu.addClass('js-site-menu-fixed');
    for (i = 0; i < navArray.length; i++) {
      navArray[i].menuDropdownBar.css('position', 'fixed');
    }
  }
  function menuUnfixed() {
    siteMenu.removeClass('js-site-menu-fixed');
    for (i = 0; i < navArray.length; i++) {
      navArray[i].menuDropdownBar.css('position', 'absolute');
    }
  }

  function updateMenuAppearance() {
    // This function gets called *whenever* the page is resized or scrolled
    // The rule is that the .site-menu bar is always fixed at the top, except when
    //  you're way up at the top of a desktop page and there's a leaderboard ad
    //  above the bar. In the logic below we actually fudge a little and the bar is
    //  always unfixed at the very top of the page, but it doesn't matter then anyway.
    for (i = 0; i < navArray.length; i++) {
      var item = navArray[i];
      if (!item.topics) {
        // permanantly show all dropdowns that are not topics
        showNavItem(i);
      }
    }
    if ($('header').length) {
      if ($(window).scrollTop() <= $('header').offset().top) {
        menuUnfixed();
        searchUnfixed();
        if ((window.innerWidth < mediumBreakpoint) && (window.innerWidth >= menuBreakpoint)) {
          showNavItem(0); // topics link displayed
          // hide all dropdowns
          for (i = 0; i < navArray.length; i++) {
            hideMenuBar(i);
          }
        } else {
          hideNavItem(0); // topics link hidden
          showMenuBar(0); // topics
        }
      } else {
        menuFixed();
        searchFixed();
        showNavItem(0); // topics link displayed
        // hide all dropdowns
        for (i = 0; i < navArray.length; i++) {
          hideMenuBar(i);
        }
        if (window.innerWidth >= menuBreakpoint) {
          // makes it so topics don't flash when page is loading or resizing
          navArray[0].menuDropdownBar.show();
        }
      }
    }
    // this positions the dropdown bars relative to the trigger's position in the menu
    for (i = 0; i < navArray.length; i++) {
      if (navArray[i].menuDropdownBar.length !== 0) {
        if ((window.innerWidth < mediumBreakpoint) && (window.innerWidth >= menuBreakpoint)) {
          // position dropdown menus on medium
          navArray[i].menuDropdownBar.css('left', (parseInt(navArray[i].navItemWrapper.offset().left, 10) + 'px'));
        } else if (window.innerWidth >= mediumBreakpoint) {
          // dropdown bars positioned on the left if at large screen sizes
          navArray[i].menuDropdownBar.css('left', '0px');
        }
      }
    }
  }

  $(document).ready(updateMenuAppearance); // run once when page loads
  $(window).scroll(updateMenuAppearance);  // run every time user scrolls
  $(window).resize(updateMenuAppearance);  // run every time the browser is resized

  // controls search open and close behavior with dropdown bars
  $('.search-toggle, .menu-search .close, .search-overlay').on('click', function(event) {
    event.preventDefault();
    // if search is displayed, hide search
    if (search.hasClass('js-search-show')) {
      hideSearch();
    // else, display search and hide/show appropriate dropdowns
    } else {
      // checks if the fixed class is not added and if user is on a large screen
      // this class is added on scroll (ie. the user isn't at the top of the page)
      if ((!siteMenu.hasClass('js-site-menu-fixed')) && (window.innerWidth > mediumBreakpoint)) {
        showMenuBar(0); // show topics bar
        // hide other dropdowns besides topics
        for (i = 1; i < navArray.length; i++) {
          hideMenuBar(i); // hide all open dropdowns
        }
      } else {
        // hide all open dropdowns if not at the top
        for (i = 0; i < navArray.length; i++) {
          hideMenuBar(i); // hide all open dropdowns
        }
      }
      displaySearch();
    }
  });

  // close menu search when "x" is clicked
  $('.menu-search .close').on('click', function() {
    hideSearch();
  });

  if (window.location.pathname === '/dashboard/admin/') {
    $(document).ready(function() {
      menuUnfixed();
      showMenuBar(0); // topics
      hideNavItem(0); // topics
    });

    $(window).scroll(function() {
      menuUnfixed();
      showMenuBar(0); // topics
      hideNavItem(0); // topics
    });

    $(window).resize(function() {
      menuUnfixed();
      showMenuBar(0); // topics
      hideNavItem(0); // topics
    });
  }

  // SIGNUP INPUT CLICK DROPDOWN
  // when you click on the form input to type in your email,
  // the checkbox list of daily and weekly publications drops down
  $('.signup .js-email-input input, .inline-signup .js-email-input input').on('click, focus', function() {
    var thisCheckboxList = $(this).parents('form').find('.signup-list'); // only target this specific checkbox list
    var checkboxListChildren = thisCheckboxList.children(); // get children of this ul
    var numberOfCheckboxes = checkboxListChildren.length; // get number of checkboxes
    if (numberOfCheckboxes > 0) { // drop down list when clicking input
      thisCheckboxList.slideDown('500');
    }
  });

  // Error message on footer feedback and right sidebar signup form.
  // This is meant to keep people who enter invalid emails in Safari
  // (where HTML5 email validation doesn't work) from being sent to
  // /feedback or /signup from whatever page they *were* on because of
  // Django form validation on /feedback and /signup catching the bad email.
  $('.js-form-email-validate').submit(function(event) {
    var value = $(this).find('input[type=email]').val();
    if ( !value || value.indexOf('@') < 0 || value.indexOf('.') < 0 ) { // "if form is invalid"
      event.preventDefault();
      $(this).find('.form-error__message').remove();
      $(this).find('input[type=email]').addClass('form-error__highlight');
      $(this).find('.email-input').append( "<p class='form-error__message'>Please enter a valid email.</p>" );
      return false;
    }
    var isSignupForm = $(this).filter('[name="signup"]').length > 0;
    if (isSignupForm) {
      var $eventTarget = $(event.target);
      var errorMessage = validateSignupFormCheckboxes($eventTarget);

      if ( errorMessage ) {
        event.preventDefault();
        displaySignupError($eventTarget, errorMessage);
        return false;
      }
    }
    return true;
  });

  // inline signup
  // opens demographics page in another window
  $('.inline-signup form').attr('target', '_blank');
  // TODO: this variable is repeated, don't love it
  $('.inline-signup .js-form-email-validate').submit(function(event) {
    var value = $(this).find('input[type=email]').val();
    var $eventTarget = $(event.target);
    var errorMessage = validateSignupFormCheckboxes($eventTarget);
    var emailIsValid = value || value.indexOf('@') > 0 || value.indexOf('.') > 0;
    // if email is not valid
    if ( !(emailIsValid) ) {
      event.preventDefault();
      return false;
    }
    // if form checkboxes not properly filled out
    if (errorMessage) {
      event.preventDefault();
      displaySignupError($eventTarget, errorMessage);
      return false;
    }
    $('.inline-signup p, .inline-signup .email-input, .inline-signup .signup-list, .inline-signup .button').hide();
    $('.inline-signup form').append('<p>Thanks! Look out for an email from us soon.</p>');
    return true;
  });

  // show screen reader text for browswers that don't support placeholder text
  if (!('placeholder' in document.createElement('input'))) {
    $('span.screen-reader-text').removeClass('screen-reader-text').addClass('screen-reader-text-visible');
  }

  // close messages
  // uses .closest in case there are two messages on a page
  $('.message__close').click(function() {
    var thisMessage = $(this).closest('.message');
    $(thisMessage).fadeOut('fast');
  });

  // close site notification alert and set a cookie on this particular notification
  // note that we expect here for the notification close div to have attributes
  // data-notification-id and data-notification-expires
  // use these to construct the cookie definition here
  $('.site-alert__close').click(function() {
    var cookieString = '_id_site_notification=' + $(this).attr('data-notification-id') +
    ';expires=' + $(this).attr('data-notification-expires') + ';path=/';
    document.cookie = cookieString;
    $('.site-alert').hide();
  });

  // accordion for search after first page
  if ($('body').hasClass('not-first-page')) {
    $('.js-search-accordion .js-search-accordion-inner').hide();
    $('.js-search-accordion .js-search-accordion-toggle').click(function() {
      $('.js-search-accordion .js-search-accordion-inner').slideToggle();
      $(this).toggleClass('js-search-active'); // rotates arrow
    });
  } else {
    $('div.js-search-accordion').removeClass('js-search-accordion');
  }

  // Function to show clear icon when text typed into input
  function clearIcon(inputBox) {
    var inputWrapper = $(inputBox).closest('.search-input');
    var inputClear = $(inputWrapper).find('.search-input__clear');
    var inputValue = $(inputBox).val();
    if (inputValue !== null && inputValue !== '') {
      $(inputClear).show();
    } else {
      $(inputClear).hide();
    }
  }

  // clears text in input on click of x
  $('.search-input__clear').click( function() {
    $(this).parent().find('input').val('');
    $(this).hide();
  });

  // shows clear 'x' on page load if text in input
  clearIcon($('.search-input').find('input'));
  // shows clear 'x' only when input is not empty
  $('.search-input').find('input').keyup(function() {
    clearIcon($(this));
  });
});

// TECH-7835: display error on the page instead of only after the redirect
function validateSignupFormCheckboxes($eventTarget) {
  // remove any previous error messages
  $eventTarget.find('.form-error__message').remove();

  // verify if terms of use + privacy policy box is selected
  var $termsError = !($eventTarget.find('#id_user_consent').prop('checked'));

  // verify if multiple pubs exist and if any are checked
  var $isMultiPubSignUp = $eventTarget.find('.signup-list input').not('#id_user_consent').length > 0;
  var $isAtLeastOneNewsletterSelected = $eventTarget.find('input:checkbox:checked').not('#id_user_consent').length > 0;
  var isValidNewsletterSelection = $isMultiPubSignUp ? $isAtLeastOneNewsletterSelected : true;
  var signupError = !(isValidNewsletterSelection);

  // error logic
  var errorMessage;
  if ($termsError && signupError) {
    errorMessage = 'You must select at least one newsletter and agree to our Terms of Use and Privacy Policy.';
  } else if ($termsError) {
    errorMessage = 'You must agree to our Terms of Use and Privacy Policy.';
  } else if (signupError) {
    errorMessage = 'You must select at least one newsletter.';
  }
  return errorMessage;
}

// display error based on message provided
function displaySignupError($eventTarget, message) {
  $eventTarget.find('.email-input').prepend( '<p class="form-error__message">' + message + '</p>' );
}
