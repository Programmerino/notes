(function ($) {

  'use strict';

  // The styling for this mobile menu is located in sass/components/mobile-menu/_mobile-menu.scss.

  Drupal.behaviors.mobileMenu = {
    attach: function (context) {

      // Create mobile menu container, create mobile bar, and clone the main
      // menu in the navigation region.
      var $mobileNav = $('<nav class="mobile-menu" role="navigation"></nav>'),
          $mobileBar = $('<div class="mobile-menu__bar"><div class="mobile-menu__logo"><a href="/">Tax Policy Center</a></div><button class="mobile-menu__button js-mobile-menu-button mobile-menu__button--menu"><span class="mobile-menu__icon mobile-menu__icon--menu">Menu</span></button></div>'),
          $mobileLinks = $('<div class="mobile-menu__links element-hidden"></div>'),
          $mainMenu = $('.region-navigation', context).find('.nav--main-menu, .block--system-main-menu .nav, .block--superfish .sf-menu').not('.contextual-links').first().clone(),
          $isSuperfish = ($mainMenu.hasClass('sf-menu')) ? true : false;

      // Only create mobile menu if there is a main menu.
      if ($mainMenu.length > 0) {

        // Append utility nav items to mainMenu and add class
        $('.nav--menu-utility li').clone().addClass('visible-at-tablet').appendTo($mainMenu);

        // Set classes on superfish items.
        if ($isSuperfish) {
          $mainMenu.find('li').each(function(){
            $(this).attr('class', 'nav__item').find('a').attr('class', 'nav__link');
          });
        }

        // Remove menu id, add class, and format subnav menus.
        $mainMenu.removeAttr('id').attr('class', 'nav nav--mobile-menu').find('ul').each(function () {
          var $parentLink = $(this).siblings('a');
          $parentLink.addClass('nav__link--parent').parent('li').addClass('nav__item--parent');
          if ($parentLink.siblings('.nav__subnav-arrow').length < 1) {
            $parentLink.after('<button class="nav__subnav-arrow">Show</button>');
          }

          // Remove inline styles from Superfish.
          if ($isSuperfish) {
            $(this).removeAttr('style').addClass('nav--subnav').find('ul, li, a').removeAttr('style');
          }
        });

        // Remove third level menu items.
        $mainMenu.find('ul ul').remove();

        // Insert the cloned menus into the mobile menu container.
        $mainMenu.appendTo($mobileLinks);

        // insert search button and clone/append search bar, if it exists.
        if (!($('.mobile-menu .mobile-menu__search').length > 0)) {
          if ($('#block-exp-tpc-search-panel-pane-1').length > 0) {
            $('#block-exp-tpc-search-panel-pane-1').clone().addClass('mobile-menu__search').appendTo($mobileNav);
            $mobileBar.append('<button class="mobile-menu__button js-mobile-search-button mobile-menu__button--search"><span class="mobile-menu__icon mobile-menu__icon--search">Search</span></button>');
          }
        }

        // Insert the top bar into mobile menu container.
        $mobileBar.prependTo($mobileNav);

        // Insert the mobile links into mobile menu container.
        $mobileLinks.appendTo($mobileNav);

        // Add mobile menu to the page.
        $('.skiplinks', context).after($mobileNav);

        var $mobileMenuWrapper = $('.mobile-menu__links', context),
            $mobileMenuLinks = $mobileMenuWrapper.find('a');

        // Initially take mobile menu links out of tab flow.
        $mobileMenuLinks.attr('tabindex', -1);

        // Open/close mobile menu when menu button is clicked.
        $('.js-mobile-menu-button', context).click(function (e) {
          $(this).toggleClass('is-active');
          $mobileMenuWrapper.toggleClass('element-hidden');

          // Close search bar if open.
          if ($('.js-mobile-search-button').hasClass('is-active')) {
            $('.js-mobile-search-button').removeClass('is-active');
            $('.mobile-menu .mobile-menu__search').hide();
          }

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          // Take mobile menu links out of tab flow if hidden.
          if ($mobileMenuWrapper.hasClass('element-hidden')) {
            $mobileMenuLinks.attr('tabindex', -1);
          }
          else {
            $mobileMenuLinks.removeAttr('tabindex');
          }

          e.preventDefault();
        });

        // Open/close submenus.
        $('.nav__subnav-arrow', context).click(function (e) {
          $(this).toggleClass('is-active').parent().toggleClass('is-open');
          $(this).siblings('.nav--subnav').slideToggle();

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          e.preventDefault();
        });

        // Open/close search bar.
        $('.js-mobile-search-button', context).click(function (e) {
          $(this).toggleClass('is-active');

          // Close menu if open.
          if ($('.js-mobile-menu-button').hasClass('is-active')) {
            $('.js-mobile-menu-button').removeClass('is-active');
            $mobileMenuWrapper.addClass('element-hidden');
            $mobileMenuLinks.attr('tabindex', -1);
          }

          // Remove focus for mouse clicks after closing the menu.
          $(this).not('.is-active').mouseleave(function () {
            $(this).blur();
          });

          // Slide search bar.
          $('.mobile-menu .mobile-menu__search').slideToggle(200);

          e.preventDefault();
        });

        // Set the height of the menu.
        $mobileMenuWrapper.height($(document).height());
      }
    }
  };
})(jQuery);
;
/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window).bind('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});
;
// Custom scripts file
// to load, uncomment the call to this file in tpc_theme.info

(function ($, Drupal) {
  'use strict';

  // Fonts.com self-hosted
  Drupal.behaviors.loadFonts = {
    attach: function (context, settings) {
      var MTIProjectId='42baf963-f465-4c7a-8681-0da65887adaa';
     (function() {
        var mtiTracking = document.createElement('script');
        mtiTracking.type='text/javascript';
        mtiTracking.async='true';
        mtiTracking.src='/sites/all/themes/tpc_theme/js/mtiFontTrackingCode.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
      })();
    }
  };

  // Drupal.behaviors.selectability = {
  //   attach: function (context, settings) {
  //     //$('select:not(#edit-field-simulation-id-tid)', context).selectability();
  //   }
  // };

  Drupal.behaviors.tpcZeroClipboard = {
    attach: function (context, settings) {
      var clipboard = new Clipboard('.bitly-share-button');
      clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
      });
    }
  };

  Drupal.behaviors.tpcMenuToggle = {
    attach: function (context, settings) {
      $(".pane--browse .pane__title").click(function () {
        $(".pane--browse .pane__content").toggle("fast", function () {
        });
      });
    }
  };

  Drupal.behaviors.tpcCloseShare = {
    attach: function (context, settings) {
      $(document).click(function(event) {
        if(!$(event.target).closest('.field--addthis').length) {
          // Check CSS 'display' value of the AddThis div to determine if it's currently visible.
          var addThisToolbox = $('.addthis_toolbox').css('display');
          // If AddThis is visible, clicking anywhere outside the '.field--addthis' div will hide it.
          if ( addThisToolbox == 'block' ) {
            $('.share-button .field--addthis .addthis_toolbox').hide();
          }
        }
      });
    }
  };

  /**
   * Makes the entire area of a card take the user to the target url on click.
   * Add and remove a class on hover.
   */
  Drupal.behaviors.tpcCardClick = {
    attach: function(context) {
      var $cardDiv = $('.js-click-to-open-target', context);

      if ($cardDiv.length) {
        $cardDiv.click(function() {
          var url = $(this).attr('data-click-to-open-target');
          if (url) {
            window.location = url;
          }
        }).hover(function() {
          $(this).toggleClass('js-click-to-open-target--hover');
        }, function() {
          $(this).toggleClass('js-click-to-open-target--hover');
        });
      }
    }
  };

  Drupal.behaviors.tpcBrowseToggle = {
    attach: function (context) {

      var $browseMenu = $('.pane--browse', context).find('.pane__content > .nav').not('.contextual-links');

      // Format subnav menus.
      $browseMenu.removeAttr('id').attr('class', 'nav nav--browse').find('ul').each(function () {
        var $parentLink = $(this).siblings('a');
        $parentLink.addClass('nav__link--parent').parent('li').addClass('nav__item--parent');
        if ($parentLink.siblings('.nav__subnav-arrow').length < 1) {
          $parentLink.after('<button class="nav__subnav-arrow">Show</button>');
        }
      });

      $browseMenu.find('.nav__item--parent').each(function () {
        $(this).find('> ul').wrapAll('<div class="nav__toggler"></div>');
      });

      // Open/close submenus.
      $('.nav__subnav-arrow', context).click(function (e) {
        $(this).toggleClass('is-active').parent().toggleClass('is-open');
        $(this).siblings('.nav__toggler').slideToggle();

        // Remove focus for mouse clicks after closing the menu.
        $(this).not('.is-active').mouseleave(function () {
          $(this).blur();
        });

        e.preventDefault();
      });
    }
  };

  Drupal.behaviors.tpcPrintPublication = {
    attach: function (context, settings) {
      $('.publication-print-page', context).click(function (e) {
        window.print();
        return false;
      });
    }
  };

  // TODO: combine all the AddThis functions.
  Drupal.behaviors.tpcAddThisToggle = {
    attach: function (context, settings) {
      $(".share-button span").click(function () {
        $(".share-button .field--addthis").toggle("fast", function () {
        });
      });
    }
  };

  Drupal.behaviors.tpcAddThisToggle2 = {
    attach: function (context, settings) {
      $(".view-mode-full .field--addthis, .view-mode-teaser .field--addthis").click(function () {
        $(this).find(".addthis_toolbox").slideToggle("fast", function () {
        });
      });
    }
  };

  Drupal.behaviors.tpcBookDownloadToggle = {
    attach: function (context, settings) {
      // slideToggle the bb download menu.
      $(".briefing-book__download").click(function (e) {
        $(".briefing-book__download-menu .list-wrapper").toggleClass('is-open');
        $(".briefing-book__download-menu .list-wrapper .nav").slideToggle("fast");
        e.stopPropagation();
      });
      // if open, slideToggle up on any click.
      $(document).click(function () {
        $(".briefing-book__download-menu .list-wrapper.is-open .nav").slideToggle("fast", function () {
          $(".briefing-book__download-menu .list-wrapper").toggleClass('is-open');
        });
      });
    }
  };

  // Drupal.behaviors.tpcAddThisText = {
  //   attach: function (context, settings) {
  //     $(".share__toggle").click(function () {
  //       $(".addthis_toolbox").slideToggle("fast", function () {
  //       });
  //     });
  //   }
  // };

  Drupal.behaviors.tpcHomepageExpertFilterToggle = {
    attach: function (context) {
      // Open/close submenus.
      $('.view--homepage-expert-filers p', context).click(function (e) {
        $(this).toggleClass('is-active').parent().toggleClass('is-open');
        $(this).parent().siblings('.view__content').children('.item-list').slideToggle();

        // Remove focus for mouse clicks after closing the menu.
        $(this).not('.is-active').mouseleave(function () {
          $(this).blur();
        });

        e.preventDefault();
      });
    }
  };
  Drupal.behaviors.tpcHomepageTopicFilterToggle = {
    attach: function (context) {
      // Open/close submenus.
      $('.view--homepage-topic-filter p', context).click(function (e) {
        $(this).toggleClass('is-active').parent().toggleClass('is-open');
        $(this).parent().siblings('.view__content').children('.item-list').slideToggle();

        // Remove focus for mouse clicks after closing the menu.
        $(this).not('.is-active').mouseleave(function () {
          $(this).blur();
        });

        e.preventDefault();
      });
    }
  };

  /**
   * Scroll to top functionality
   *
   * In order to resuse this code, add your page classname at line 508 for checking.
   * Once that is confirm, the following should just work automatically.
   */
  Drupal.behaviors.scrollToTop = {
    attach: function(context, settings) {
      /**
       * function to scroll to specific part of the page
       *
       * @param where
       *  the place where you wanted to scroll to/back
       * @param scrollSpeed
       *  the scrolling animation speed
       */
      var scrollMeThere = function(where, scrollSpeed) {
        var scrollPosition = $(where).offset();
        $('html, body').animate({
          scrollTop: (scrollPosition.top)
        }, scrollSpeed);
      };

      if ( $('body').hasClass('node-type-laws-proposals') ||
        $('body').hasClass('section-taxvox') ||
        $('body').hasClass('section-resource') ) {
        if ( $('#scrolltotop').length <= 0 ) {
          $('body').append('<div id="scrolltotop" style="position: fixed;"></div>');
        }

        $('#scrolltotop').click(function() {
          scrollMeThere('.skiplinks', 400);
        });

        //hide it initially
        $('#scrolltotop').hide();
      }

      // show the scroll to top button if the user is scrolling more
      // 25% of the page height, and hides it again when it goes lesser
      $(window).on('scroll', function(e) {
        var height = $('body').height();
        var footerOffset = height - $(window).height() - 50;
        var windowWidth = $(window).width();
        var scrollToTop = $(window).scrollTop();
        var $target = $('#scrolltotop');

        if ( $(window).scrollTop() > (height * 0.1) ) {
          $target.show();
        }
        else {
          $target.hide();
        }

        if (scrollToTop > footerOffset && windowWidth <= 500) {
          $target.addClass('offset');
        } else {
          $target.removeClass('offset');
        }
      });
    }
  };

  Drupal.behaviors.tpcBriefingBookMenu = {
    attach: function (context) {

      var briefingBookMenu = $('.briefing-book__menu', context);
      var chaptersNavItem = $('.briefing-book__menu', context).find('.nav .nav__item').first().not('.contextual-links');
      var chaptersNavLink = $('.briefing-book__menu', context).find('.nav .nav__item a').first().not('.contextual-links').addClass('chapters');
      var chapterNavItem = $('.briefing-book__menu', context).find('.nav').first().find('.nav').first().children('.nav__item').not('.contextual-links').addClass('chapter');
      var subchapterNavItem = $('.briefing-book__menu', context).find('.chapter').children('.nav').children('.nav__item').not('.contextual-links').addClass('subchapter');

      chaptersNavLink.text('Table of Contents');

      // Make sure multiple close instances are not added.
      $('.menu__close').remove();

      // Add menu__close.
      chaptersNavItem.prepend('<a href="#" class="menu__close">Close</a>');

      // Add class if active items.
      if (briefingBookMenu.find('a.is-active').length != 0) {
        briefingBookMenu.toggleClass('has-active-children');
        briefingBookMenu.find('a.is-active').parent('.nav').addClass('has-active-children');
      };

      // Add class to nav__link.
      chaptersNavLink.addClass('menu__toggle');

      // Add class to subnav.
      chaptersNavLink.children('nav--subnav').toggleClass('is-active');

      // Find active nav__item.
      var activeItem = $('li.nav__item').find('a.is-active');

      // Find active chapter.
      var activeChapter = activeItem.parents('li.chapter');

      // Find active subchapter.
      var activeSubchapter = activeItem.parents('li.subchapter');

      // Add class to active chapter.
      activeChapter.toggleClass('is-active-chapter');

      // Add class to active subchapter.
      activeSubchapter.toggleClass('is-active-subchapter');

      // Click on menu__toggle link.
      $('.briefing-book__menu .menu__toggle', context).click(function (e) {

        // If not already open.
        if (!briefingBookMenu.hasClass('is-open')) {
          briefingBookMenu.addClass('is-open');
          e.preventDefault();
        }

        // Remove focus for mouse clicks after closing the menu.
        $(this).not('.is-open').mouseleave(function () {
          $(this).blur();
        });

      });

      // Click on menu__close link.
      $('.briefing-book__menu .menu__close', context).click(function (e) {

        // Remove 'is-open' class from menu container.
        briefingBookMenu.removeClass('is-open');

        e.preventDefault();

      });

      // Click on Chapter level nav__item.
      $('.briefing-book__menu .chapter .nolink', context).click(function (e) {
        $(this).parent().toggleClass('is-open-chapter');
      });

      // Click on Subchapter level nav__item.
      $('.briefing-book__menu .subchapter .nolink', context).click(function (e) {
        $(this).parent().toggleClass('is-open-subchapter');
      });

    }
  };

  Drupal.behaviors.tpcBriefingBookLanding = {
    attach: function (context) {

      var briefingBookLanding = $('.briefing-book__landing', context);
      var landingChaptersNavItem = $('.briefing-book__landing', context).find('.nav .nav__item').first().not('.contextual-links');
      var landingChaptersNavLink = $('.briefing-book__landing', context).find('.nav .nav__item a').first().not('.contextual-links').addClass('chapters');
      var landingChapterNavItem = $('.briefing-book__landing', context).find('.nav').first().find('.nav').first().children('.nav__item').not('.contextual-links').addClass('chapter');
      var landingSubchapterNavItem = $('.briefing-book__landing', context).find('.chapter').children('.nav').children('.nav__item').not('.contextual-links').addClass('subchapter');


      $(briefingBookLanding).addClass('is-open');

      // Add class if active items.
      if (briefingBookLanding.find('a.is-active').length != 0) {
        briefingBookLanding.toggleClass('has-active-children');
        briefingBookLanding.find('a.is-active').parent('.nav').addClass('has-active-children');
      };

      // Add class to nav__link.
      landingChapterNavItem.addClass('menu__toggle');

      // Add class to subnav.
      landingChapterNavItem.children('nav--subnav').toggleClass('is-active');

      // Find active nav__item.
      var activeItemLanding = $('li.nav__item').find('a.is-active');

      // Find active chapter.
      var activeChapterLanding = activeItemLanding.parents('li.chapter');

      // Find active subchapter.
      var activeSubchapterLanding = activeItemLanding.parents('li.subchapter');

      // Add class to active chapter.
      activeChapterLanding.toggleClass('is-active-chapter');

      // Add class to active subchapter.
      activeSubchapterLanding.toggleClass('is-active-subchapter');

      // Click on menu__toggle link.
      $('.briefing-book__landing .menu__toggle', context).click(function (e) {

        // If not already open.
        if (!briefingBookLanding.hasClass('is-open')) {
          briefingBookLanding.addClass('is-open');
          e.preventDefault();
        }

        // Remove focus for mouse clicks after closing the menu.
        $(this).not('.is-open').mouseleave(function () {
          $(this).blur();
        });

      });

      // Click on Chapter level nav__item.
      $('.briefing-book__landing .chapter > .nolink', context).click(function (e) {
        // checks if it is already active
        var isOpenChapter = ($(this).parent().hasClass('is-open-chapter')) ? true : false;
        $('.chapter').removeClass('is-open-chapter');
        // set active only if it was active
        // since we removed all active classes
        if(isOpenChapter) $(this).parent().addClass('is-open-chapter');
        $(this).parent().toggleClass('is-open-chapter');
      });

      // Click on Subchapter level nav__item.
      $('.briefing-book__landing .subchapter .nolink', context).click(function (e) {
        // checks if it is already active
        var isOpenSubchapter = ($(this).parent().hasClass('is-open-subchapter')) ? true : false;
        $('.subchapter').removeClass('is-open-subchapter');
        // set active only if it was active
        // since we removed all active classes
        if(isOpenSubchapter) $(this).parent().addClass('is-open-subchapter');
        $(this).parent().toggleClass('is-open-subchapter');
      });

    }
  };


  Drupal.behaviors.inlineGridPromo = {
    attach: function (context) {
      $('.page-interactive-tools #grid-promo, .page-interactive-tools #grid-promo-old').appendTo('.view--interactive-tools').addClass('views-row').show();
    }
  };

  Drupal.behaviors.inlineParagraphPosition = {
        attach: function (context) {
            $('.paragraphs-item--body-with-feature-box.v-bottom .body-feature-inner').each(function() {
                // Add spacer div for bottom-wrapping inline feature.
                $(this).prepend('<div id="spacer"></div>');
            });
        }
    };

    Drupal.behaviors.featureAddThisAttach = {
        attach: function (context) {
            $('.node--feature.node--full > .field--addthis').appendTo('.node--feature.node--full > .field--title .field-item h1');
        }
    };

  // Hack to replace h1 tags in promo blocks.
  // TODO: don't reuse publication promo display for pub header and promo block.
  Drupal.behaviors.pubPromoHack = {
    attach: function (context) {
      $('.pane--research-publication-promo h1, .pane--html-publication-promotion h1').replaceWith(function(){
          return $("<h3 />", {html: $(this).html()});
      });
    }
  };

  // Fix pub promo slider with equal heights so it's not insanely bad.
  Drupal.behaviors.flexsliderEqualHeight = {
    attach: function (context) {
      // Wrap the pub type and topic with a div.
      $("#flexslider-1 .slides li > div .field--publication-type").each(function(index) {
        $(this).next(".field--primary-topic").andSelf().wrapAll("<div class='slider-topic-wrap' />");
      });
      // Do the same on blog post slider teasers
      $("#flexslider-1 .slides li > div .field--blog-type").each(function(index) {
        $(this).next(".field--primary-topic").andSelf().wrapAll("<div class='slider-topic-wrap' />");
      });

      // Set that div to use equal height.
      $('#flexslider-1 .slides li > div .slider-topic-wrap').matchHeight();
    }
  };

  // Manually add autosubmit to search results block so it does not autosubmit on text changes.
  // TODO: optimize this jQuery a bit.
  Drupal.behaviors.searchDropdownAutosubmit = {
    attach: function (context) {
      if ($('.pane-views-exp-tpc-search-panel-pane-1 .views-widget--sort-by').length) {
        $('.pane-views-exp-tpc-search-panel-pane-1 .views-widget--sort-by').change(function() {
          $(this).parents('form').submit();
        });
        // the second drop down only exists when the first one does, so only look for it in that case.
        if ($('.pane-views-exp-tpc-search-panel-pane-1 .views-widget--items-per-page').length) {
          $('.pane-views-exp-tpc-search-panel-pane-1 .views-widget--items-per-page').change(function() {
            $(this).parents('form').submit();
          });
        }
      }
    }
  };

  // Trigger stacktable
  // Drupal.behaviors.stackableTables = {
  //   attach: function (context) {
  //     $('.field--body .responsive').stacktable();
  //   }
  // };

  // Trigger stacktable
  // Drupal.behaviors.flexsliderOverrides = {
  //   attach: function (context) {
  //
  //     var slider = Drupal.behaviors.flexslider;
  //
  //     console.log(slider);
  //
  //   }
  // };

    Drupal.behaviors.flexsliderOverrides = {
        attach: function (context, settings) {
            $('.flexslider').bind('added', function(e, slider) {
                // hide the nav arrows when they aren't necessary.
                if (slider.count < 3) {
                    slider.vars.directionNav = false;
                }
            });
        }
    };

  function tpcReorderViewsSearchInput() {
    // Reorder Views search input pane in responsive views.
    var viewsSearchInputPane = $('.layout-panels-sidebar-left__main .pane--views--exp-site-search-panel-pane-1');

    // Check if pane exists.
    if( viewsSearchInputPane.length ) {
      // Check if *only* the mobile menu is active by reading .region-navigation CSS class value (avoids setting hard breakpoints).
      var mobileMenuStatus = $('.region-navigation').css('display');
      if ( mobileMenuStatus == 'none' ) {
        // Move it to the top of the sidebar region.
        viewsSearchInputPane.prependTo('.layout-panels-sidebar-left__sidebar');
      }
      else {
        // Keep it in its original region.
        viewsSearchInputPane.prependTo('.layout-panels-sidebar-left__main .offset');
      }
    }
  }





  // Runs function once on window resize.
  var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();

  // Generic function that runs on window resize.
  function resizeStuff() {
    tpcReorderViewsSearchInput();
  }

  function sizeSpacer(spacer) {
    if (spacer) {
      spacer.style.height = 0;
      var container = spacer.parentNode;
      var img = spacer.nextElementSibling || spacer.nextSibling;
      var lastContentNode = container.children[container.children.length - 1];
      var h = Math.max(0, container.clientHeight - img.clientHeight);
      spacer.style.height = h + "px";
      while (h > 0 && img.getBoundingClientRect().bottom > lastContentNode.getBoundingClientRect().bottom) {
          spacer.style.height = --h + "px";
      }
    }

  }

  onload = onresize = function() {
      sizeSpacer(document.getElementById("spacer"));
  };

})(jQuery, Drupal);
;
