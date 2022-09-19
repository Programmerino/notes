(function ($) {

  Drupal.UrbanInstitute = Drupal.UrbanInstitute || {};
  Drupal.UrbanInstitute.Menu = Drupal.UrbanInstitute.Menu || {};

  /**
   * Menu
   */
  Drupal.UrbanInstitute.Menu.isHovered = false;
  Drupal.UrbanInstitute.Menu.timeoutActionId = false;
  Drupal.UrbanInstitute.touchSupport = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? true : false;
  Drupal.UrbanInstitute.Menu.updateMenu = function ($menu, $trigger) {
    // remove attributes added by animation
    $('.page-header a.site-logo').removeAttr('style');
    $('.l-region--navigation').removeAttr('style');
    if (Drupal.UrbanInstitute.windowSize < 680) {
      // mobile/touch behavior
      if ($trigger.hasClass('active')) {
        $menu.show();
      } else {
        $menu.hide();
      }
      $menu.find('.menu-attach-block-wrapper').css({
        'height' : 'auto',
        'width' : 'auto',
        'margin-left' : '0'
      });
      $menu.find('li').off('mouseenter mouseleave');
      $menu.find('li a.parent')
      .next('.expand')
      .off('click').removeClass('active')
      .on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').next('.menu-attach-block-wrapper').toggleClass('expanded');
        $(this).next('.menu-attach-block-wrapper').slideToggle();
      });
    } else {
      // desktop behavior
      $menu.show();
      $menu.find('.menu .expand').off('click');
      // init all submenu to hold height data
      var height = 0;
      $menu.find('.menu-attach-block-wrapper').each(function (index, item) {
        $(item).css({'width' : Drupal.UrbanInstitute.windowSize});
        if ($(item).innerHeight() > height) {
          height = $(item).innerHeight();
        }
        $(item).attr('data-expanded', 'false');
        $(item).css({'width' : 'auto'});
      });
      $menu.find('.menu-attach-block-wrapper').each(function (index, item) {
        if ($(item).data('data-height') === undefined) {
          $(item).data('data-height', height);
        }
      });
      var $submenus = $menu.find('.menu-attach-block-wrapper');
      var $activeSubmenu;
      if (Drupal.UrbanInstitute.touchSupport) {
        // when menu is opened, an event to close is attached to the document
        // stop propagation from menu itself
        $menu.find('.utility-menu').on('touchstart', function (e) {
          e.stopPropagation();
        });
        $menu.find('.utility-menu .menu > li> a').on('touchstart', function (e) {
          if (!$(this).parent().hasClass('hover')) {
            e.preventDefault();
            var $expanded = $('.menu-attach-block-wrapper[data-expanded=true]');
            $expanded.css('z-index', '1');
            $(this).parent().siblings().removeClass('hover');
            $activeSubmenu = $(this).siblings('.menu-attach-block-wrapper'),
            left = $menu.offset().left - $(this).offset().left;
            Drupal.UrbanInstitute.Menu.showSubMenu($submenus, $activeSubmenu, left);
          } else {
            $(this).parent().removeClass('hover');
            Drupal.UrbanInstitute.Menu.hideSubMenu($submenus, $activeSubmenu);
          }
        });
      } else {
        // non-touch devices
        $menu.find('.menu-name-main-menu > ul.menu > li')
        .off('mouseenter mouseleave')
        .on('mouseenter', function () {
          if ($editAdvSearch.hasClass('on')) {
            $(this).addClass('hover');
            return false;
          }
          var $expanded = $('.menu-attach-block-wrapper[data-expanded=true]');
          $expanded.css('z-index', '1');
          $activeSubmenu = $(this).find('.menu-attach-block-wrapper'),
          left = $menu.offset().left - $(this).offset().left;
          if (Drupal.UrbanInstitute.Menu.timeoutActionId !== null) {
            clearTimeout(Drupal.UrbanInstitute.Menu.timeoutActionId);
            Drupal.UrbanInstitute.Menu.timeoutActionId = null;
          }
          // New timeout for showing menu
          if (Drupal.UrbanInstitute.Menu.isHovered === false) {
            Drupal.UrbanInstitute.Menu.timeoutActionId = setTimeout(function () {
              Drupal.UrbanInstitute.Menu.showSubMenu($submenus, $activeSubmenu, left);
            }, 300);
          } else {
            Drupal.UrbanInstitute.Menu.showSubMenu($submenus, $activeSubmenu, left);
          }
        })
        .on('mouseleave', function () {
          if ($editAdvSearch.hasClass('on')) {
            $(this).removeClass('hover');
            return false;
          }
          $activeSubmenu = $(this).find('.menu-attach-block-wrapper');
          $activeSubmenu.parent().removeClass('hover');
          // Remove current timeout
          if (Drupal.UrbanInstitute.Menu.timeoutActionId !== null) {
            clearTimeout(Drupal.UrbanInstitute.Menu.timeoutActionId);
            Drupal.UrbanInstitute.Menu.timeoutActionId = null;
          }
          // New timeout for hiding menu
          Drupal.UrbanInstitute.Menu.timeoutActionId = setTimeout(function () {
            Drupal.UrbanInstitute.Menu.hideSubMenu($submenus, $activeSubmenu);
          }, 500);
        });

      }
    }
  };

  Drupal.behaviors.UrbanInstituteMenu = {
    attach: function (context) {
      Drupal.UrbanInstitute.windowSize = $('body').width();
      // caching selectors
      $menu = $('.navigation-header', context);
      $trigger = $('a.menu-icon', context);
      $mobileHeader = $('.mobile-header');
      $main = $('.main');
      $editAdvSearch = $('#edit-advanced-search');
      // add buttons to expand submenu on mobile
      $menu.find('li a').each(function () {
        if ($(this).next('.menu-attach-block-wrapper').length) {
          $(this).addClass('parent').after('<a class="expand" />');
        }
      });
      // behavior for trigger button
      $trigger.once().click(function (e) {
        e.preventDefault();
        // initialize again for pages with ajax content (data-viz)
        $menu = $('.navigation-header', context);
        $trigger.toggleClass('active');
        $menu.slideToggle();
        $menu.toggleClass('menu-expanded');
        $mobileHeader.toggleClass('menu-expanded');
        $main.toggleClass('menu-expanded');
      });
      // call submenus function
      Drupal.UrbanInstitute.Menu.updateMenu($menu, $trigger);
      // refresh menu on windows resize
      // TODO: use Drupal.behaviors.resizeHacks
      $(window).on('resize orientationchange', function () {
        // resize event firing on scroll in iOS
        // check that the window width has changed
        if (Drupal.UrbanInstitute.windowSize === $('body').width()) {
          return false;
        }
        if ($mobileHeader.hasClass('menu-expanded')) {
          $trigger.trigger('click');
        }
        Drupal.UrbanInstitute.windowSize = $('body').width();
        Drupal.UrbanInstitute.Menu.updateMenu($menu, $trigger);
        if (Drupal.UrbanInstitute.windowSize >= 680) {
          $menu.find('.menu-attach-block-wrapper').css({ 'height': 0});
        } else {
          $menu.find('.menu-attach-block-wrapper').hide();
        }
      });
    }
  };

  /**
   * Helper functions to simulate pushing the page down when menu expands.
   */
  Drupal.UrbanInstitute.Menu.showSubMenu = function ($submenus, $activeSubmenu, left) {
    // Set all submenu width, margin-left and index.
    $activeSubmenu.css({
      marginLeft: left,
      width: Drupal.UrbanInstitute.windowSize,
      display: 'block',
      zIndex: 10
    })
    .parent().addClass('hover');
    $expanded = $('.menu-attach-block-wrapper[data-expanded=true]');
    if (Drupal.UrbanInstitute.Menu.isHovered !== true) {
      // Animate on first hover
      $activeSubmenu.css({ height: 0 });
      var height = $activeSubmenu.data('data-height');
      $expanded.animate({'height' : 0});
      $activeSubmenu.animate({'height' : height});
      $('.page-header a.site-logo').animate({'margin-top': height});
      if (Drupal.UrbanInstitute.windowSize > 875) {
        $('.l-region--navigation').animate({'margin-top': height + 25});
      }
      if (Drupal.UrbanInstitute.touchSupport) {
        // on touch devices, click outside of menu to close
        $(document).bind('touchstart.utility-menu', function () {
          $menu.find('li.hover').removeClass('hover');
          Drupal.UrbanInstitute.Menu.hideSubMenu($submenus, $activeSubmenu);
        });
      }
    } else {
      $activeSubmenu.css({ height: $expanded.data('data-height') });
    }
    // Set flags
    $expanded.attr('data-expanded', 'false');
    $activeSubmenu.attr('data-expanded', 'true');
    Drupal.UrbanInstitute.Menu.isHovered = true;
  };

  Drupal.UrbanInstitute.Menu.hideSubMenu = function ($submenus, $activeSubmenu) {
    $submenus.animate({'height': 0}, 250);
    if (Drupal.UrbanInstitute.windowSize > 875) {
      $('.l-region--navigation').animate({'margin-top': 75}, 250);
      $('.page-header a.site-logo').animate({'margin-top': 50}, 250);
    } else {
      $('.page-header a.site-logo').animate({'margin-top': 26}, 250);
    }
    // Set flags
    $('.menu-attach-block-wrapper[data-expanded=true]').attr('data-expanded', 'false');
    Drupal.UrbanInstitute.Menu.isHovered = false;
    // on touch devices, unbind event to close menu
    if (Drupal.UrbanInstitute.touchSupport) {
      $(document).unbind('touchstart.utility-menu');
    }
  };

  /**
   * Square Teaser hover & touch functionality
   */
  Drupal.behaviors.collectionTeaserHover = {
    attach: function (context) {
      if (!Drupal.UrbanInstitute.touchSupport) {
        $('.view-collection-view', context).once()
        .find('.views-row')
        .hover(function () {
          if ($('.field--name-title', this).is(':animated')) {
            return false;
          }
          $('.field--name-title', this).fadeOut('fast');
          $('.group-hover', this).fadeIn('fast');
        }, function () {
          $('.field--name-title', this).fadeIn('fast');
          $('.group-hover', this).fadeOut('fast');
        });
      } else {
        $('.view-collection-view', context).once()
        .find('.view-mode-square_teaser > a')
        .click(function (e) {
          if (!$(this).hasClass('is-active')) {
            e.preventDefault();
            $(this).addClass('is-active');
            $('.field--name-title', this).fadeOut('fast');
            $('.group-hover', this).fadeIn('fast');
          } else {
            $('.view-collection-view .view-mode-square_teaser > a').removeClass('is-active');
            $('.view-collection-view .field--name-title').removeAttr('style');
            $('.view-collection-view .group-hover').removeAttr('style');
          }
        });
      }
    }
  };


  /**
   * bxSlider hacks for Featured Stories Slideshow
   * Used with feature_bean_featured_story_carousel
   * Hides controls if carousel has only 1 item
   */
  Drupal.behaviors.beanFeaturedStorySlideshow = {
    attach: function (context) {
      $(document).ready(function () {
        var $slider = $('.bean-featured-story-carousel', context);
        $slider.each(function () {
          var $this = $(this);
          var $controls_items = $this.find('.bx-pager-item');
          if ($controls_items.length <= 1) {
            $this.addClass('single-item');
          }
        });
      });
    }
  };

  /**
   * bxSlider for Our Researchers (single-head format).
   * Used with feature_view_our_researchers
   */
  Drupal.behaviors.viewOurResearchersSlideshow = {
    attach: function (context) {
      var $slider = $('.pane-our-researchers', context).find('.our-researchers-bxslider > ul');
      if ($slider.length) {
        $slider.once().bxSlider({
          maxSlides: 1,
          auto: false
        });
      }
    }
  };

  /**
   * bxSlider for Publication Authors (single-head format).
   * Used with feature_view_publication_author
   */
  Drupal.behaviors.viewPublicationAuthors = {
    attach: function (context) {
      var $slider = $('.pane-publication-authors', context).find('.our-researchers-bxslider > ul');
      if ($slider.length) {
        $slider.once().bxSlider({
          maxSlides: 1,
          auto: false
        });
      }
    }
  };

  /**
   * bxSlider for Research Landing Page
   */
  Drupal.behaviors.researchLandingPage = {
    attach: function (context) {
      var $slider = $('.view-id-cci_carousel > .view-content > .item-list > ul', context);
      if ($slider.length) {
        var $bxslider = $slider.once().bxSlider({
          minslides: 3,
          maxSlides: 3,
          slideWidth: 290,
          slideMargin: 36,
          auto: false
        });
      }
    }
  };

  /**
   * bxSlider for Experts Landing Page
   */
  Drupal.behaviors.expertsLandingPage = {
    attach: function (context) {
      var expertsLandingPage = {
        fixLinks: function () {
          $items = $('.pane-research-areas-carousel .research-areas-bxslider > ul li');
          $items.each(function () {
            $link = $(this).find('a');
            $link.attr('href', $link.attr('href').replace('%2C', ''));
            split = $link.attr('href').split('/');

            if (split.length > 0) {
              $link.attr('href', 'http://' + window.location.host + '/experts/' + split[split.length - 1]);
            }
          });
        },
        rebuildReseareasCarousel: function () {
          $items = $('.pane-research-areas-carousel .research-areas-bxslider > ul li');
          if ($items.length > 0) {
            var isOdd = ($items.length % 2 !== 0);
            var len = $items.length;
            var half = len / 2;
            // Make even
            if (isOdd) {
              $cloned = $($items[0]).clone();
              $items.push($cloned);
            }
            // Attach next li's link and remove next li
            for (var ctr = 0; ctr < len; ctr += 2) {
              $cloned = $($items[ctr + 1]).find('.views-field').clone();
              // modify the last item that was added
              if (isOdd && ctr === len - 1) {
                $cloned.addClass('carousel-orphan');
                $cloned.find('a').attr('href', '').text('');
              }
              $($items[ctr]).append($cloned);
              $($items[ctr + 1]).remove();
            }
          }
        },
        buildResearchAreasComboBox: function () {
          $container = $('.pane-research-areas-carousel');
          $items = $('.pane-research-areas-carousel .research-areas-bxslider > ul li');
          if ($container.length > 0) {
            var html = '<option value=""></option>';
            $items.each(function () {
              html += '<option value="' + $('a', this).attr('href') + '">' + $('a', this).html() + '</option>';
            });
            $container.append('<select id="chosen-combo-box">' + html + '</select>');
            var combo_box = $('#chosen-combo-box');
            if (combo_box.length) {
              combo_box.chosen().change(function () {
                window.location = $(this).val();
              });
            }
          }
        },
        highlightMenu: function () {
          $researchArea = $('.header-research-areas');
          var tid = $researchArea.attr('data-term');
          if ($researchArea.length > 0) {
            $items = $('.pane-research-areas-carousel .research-areas-bxslider > ul li');
            $items.each(function () {
              $anchor = $(this).find('a');
              $anchor.each(function () {
                $item = $(this);
                if ($item.attr('href').indexOf(tid) > -1) {
                  $item.addClass('active');
                }
              });
            });
          }
        }
      };
      var $slider = $('.pane-view-featured-expert-carousel .bxslider', context);
      if ($slider.length) {
        var $bxslider = $slider.once().bxSlider({
          auto: false,
          infiniteLoop: true,
          responsive: true,
          pager: false,
          maxSlides: 1,
          adaptiveHeight: true
        });
      }
      expertsLandingPage.fixLinks();
      expertsLandingPage.buildResearchAreasComboBox();
      expertsLandingPage.rebuildReseareasCarousel();
      expertsLandingPage.highlightMenu();
      $slider = $('.pane-research-areas-carousel .research-areas-bxslider > ul', context);
      if ($slider.length) {
        var $bxslider = $slider.once().bxSlider({
          auto: false,
          infiniteLoop: true,
          responsive: true,
          pager: false,
          maxSlides: 4,
          slideWidth: 217
        });
        var active_row = $slider.find('.active').closest('li').attr('class');
        if (active_row) {
          active_row = active_row.split(' ');
          var slide_number = active_row[1].substring(10);
          $bxslider.goToSlide(Math.ceil(slide_number / 8) - 1);
          $('.page-experts .pane-research-areas-carousel .chosen-container .chosen-default > span').html($slider.find('.active')[0].text);
        }
      }
    }
  };

  /**
   * Creates the slider for the glossary in the find an author page.
   * /experts/directory
   */
  Drupal.behaviors.glossarySlider = {
    attach: function () {
      if ($('.bx-slider.glossary').length > 0 && typeof bxSlider === 'function') {
        var glossaryBxSlider = $('.bx-slider.glossary').bxSlider({
          auto: false,
          infiniteLoop: false,
          responsive: true,
          pager: false,
          moveSlides: 5,
          maxSlides: 27,
          minSlides: 5,
          slideWidth: 35
        });
      }
      var resizeEnd;
      $(window).on('resize orientationchange', function () {
        clearTimeout(resizeEnd);
        // delay the  resize ecexution for better performance
        resizeEnd = setTimeout(function () {
          $(window).trigger('resizeEnd');
        }, 200);
      });
      // this is triggered after the delay
      $(window).on('resizeEnd', function () {
        // Reset the slider when full width is reached
        if (typeof glossaryBxSlider !== 'undefined') {// && glossaryBxSlider.getCurrentSlide() != 0 && $(window).width() >= 960) {
          if (typeof glossaryBxSlider.goToSlide !== 'undefined') {
            glossaryBxSlider.goToSlide(0);
          }
        }
      });

    }
  };

  /**
   * Add classes to body when there is a left navigation or blocks in the right.
   * @todo Find a good way to do it in Drupal.
   */
  Drupal.behaviors.leftNavigation = {
    attach: function () {
      if ($('#block-menu-block-3').length) {
        $('body').addClass('has-left-navigation');
      }
      if ($('.node--full .field--name-field-block').length || $('.node--full .field--name-field-right-nodes').length) {
        $('body').addClass('has-right-blocks');
      }
    }
  };

  /**
   * Hacks to adjust some element properties on different screens when css
   * media queries fall short.
   */
  Drupal.behaviors.resizeHacks = {
    attach: function () {
      // Add your cached selectors below - save performance
      var $wireImgContainer = $(':not(.view-mode-blog_teaser).node--urban-wire-post .field--name-field-image');
      $(window).on('resize orientationchange', function () {
        // Adjust height of Urban Wire Featured Image container
        if ($wireImgContainer.length) {
          var $imgHeight = $wireImgContainer.find('img').height();
          if ($imgHeight < 400) {
            $wireImgContainer.height($imgHeight);
          }
        }
      }).load(function () {
        $(this).trigger('resize');
      });
    }
  };

  /**
   * Urban Institute Feature Content Listing filter
   */
  Drupal.behaviors.featured_content_listing = {
    attach: function (context) {
      //Setting All as default open tab.
      $('.featured-collection-wrapper .featured-content', context).show();
      $('.filter-featured-collection a[data-target="all"]', context).parent().addClass('active');
      // Change tab on click.
      $('.filter-featured-collection a', context).on('click', function () {
        $('.filter-featured-collection li', context).removeClass('active');
        $(this).parent().addClass('active');
        var target = $(this).attr('data-target');
        if (target === 'all') {
          $('.featured-collection-wrapper .featured-content', context).show();
        } else {
          $('.featured-collection-wrapper .featured-content', context).hide();
          switch (target) {
            case 'event':
              $('.featured-collection-wrapper .featured-content.event', context).show();
            break;
            case 'media':
              $('.featured-collection-wrapper .featured-content.media', context).show();
            break;
            case 'research':
              $('.featured-collection-wrapper .featured-content.research', context).show();
            break;
            case 'urban-wire':
              $('.featured-collection-wrapper .featured-content.urban-wire', context).show();
            break;
          }
        }
      });
    }
  };

  /**
   * Behavior for Share This Icons
   */
  Drupal.behaviors.shareThisIcons = {
    attach: function (context) {
      // this behavior is currently attached to feature long form pages
      if ( $('body').hasClass('node-type-feature-long-form') ||
        $('body').hasClass('node-type-feature2') ||
        $('body').hasClass('node-type-urban-wire-post') ||
        $('body').hasClass('node-type-election-blog-post') ||
        $('body').hasClass('section-data-viz') ||
        $('body').hasClass('node-type-discussion') ||
        $('body').hasClass('node-type-debates') ||
        $('body').hasClass('page-debates') ||
        $('body').hasClass('node-type-data') ) {
        if (Drupal.UrbanInstitute.touchSupport) {
          $('.share-icons').on('click', function (e) {
            e.stopPropagation();
            var $this = $(this)
            var $shareP = $this.find('.shareThisP');
            if ($shareP.hasClass('hover')) {
              $this.find('.shareThisW').hide();
              $shareP.removeClass('hover');
            } else {
              $this.find('.shareThisW').show();
              $shareP.addClass('hover');
            }
          });
        } else {
          $('.share-icons').hover(function () {
            $(this).find('.shareThisW').show();
            $(this).find('.shareThisP').addClass('hover');
          }, function () {
            $(this).find('.shareThisW').hide();
            $(this).find('.shareThisP').removeClass('hover');
          });
        }
      }
      $('.addthis_button_facebook').click(function (e) {
        e.preventDefault();
      });
    }
  };

  /*
  hide/show publication share buttons
  */
  Drupal.behaviors.publicationShare = {
    attach: function (context, settings) {
      var $pubShare = $('.node-type-publication .publication-buttonset div.share');
      if ($pubShare.length) {
        $pubShare.find('div.button').on('click', function () {
          $pubShare.toggleClass('is-visible');
        })
      }
    }
  };


  /**
   * Scroll to top functionality
   *
   * In order to resuse this code, add your page classname at line 508 for checking.
   * Once that is confirm, the following should just work automatically.
   */
  Drupal.behaviors.scrollToTop = {
    attach: function (context, settings) {
      /**
       * function to scroll to specific part of the page
       *
       * @param where
       *  the place where you wanted to scroll to/back
       * @param scrollSpeed
       *  the scrolling animation speed
       */
      var scrollMeThere = function (where, scrollSpeed) {
        var scrollPosition = $(where).offset();
        $('html, body').animate({
          scrollTop: (scrollPosition.top)
        }, scrollSpeed);
      };
      if ( $('body').hasClass('node-type-publication') ||
        $('body').hasClass('node-type-urban-wire-post') ||
        $('body').hasClass('node-type-election-blog-post') ||
        $('body').hasClass('page-2016-analysis') ||
        $('body').hasClass('page-urban-wire') ) {
        if ( $('#scrolltotop').length <= 0 ) {
          $('body').append('<div id="scrolltotop" style="position: fixed;"></div>');
        }
        $('#scrolltotop').click(function () {
          scrollMeThere('.page-top', 400);
        });
        //hide it initially
        $('#scrolltotop').hide();
      }
      // show the scroll to top button if the user is scrolling more
      // 25% of the page height, and hides it again when it goes lesser
      $(window).on('scroll', function (e) {
        var height = $('body').height();
        var footerOffset = height - $(window).height() - 50;
        var windowWidth = $(window).width();
        var scrollToTop = $(window).scrollTop();
        var $target = $('#scrolltotop');

        if ( $(window).scrollTop() > (height * 0.25) ) {
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

  /**
   * This behavior function is for Urban Wire landing page
   * For consolidation purposes of all the functionalities
   * of the said page, please add your functions below.
   */
  Drupal.behaviors.urbanWireLandingPage = {
    attach: function (context, settings) {
      var urbanWireLandingPage = {

        pageShareIcons: function () {
          $('.share-icons').toggle(function () {
            $(this).find('.shareThisP').addClass('is-open');
            $(this).css('background', '#fff');
          }, function () {
            $(this).find('.shareThisP').removeClass('is-open');
            $(this).removeAttr('style');
          })
          .hover(function (e) {
            $(this).find('.shareThisP').addClass('is-open');
            $(this).css('background', '#fff');
          }, function () {
            $(this).find('.shareThisP').removeClass('is-open');
            $(this).removeAttr('style');
          });
        },
        pageRss: function () {
          // remove '::' after the urban wire
          $('.filter-display').append('<span id="showRss"></span>');

          if ( $('.filter-display a').html() === '' ) {
            $('.filter-display a').hide();
            $('.rss-link').hide();
            $('#showRss').html( $('.rss-link').html() );
          } else {
            $('.icon-rss').hide();
            $('.rss-link').hide();
            $('#showRss').html( $('.rss-link').html() );
          }

          if ( $('.filter-display').length <= 0) {
            $('.rss-link').show();
          }
        },
        pageFilter: function () {
          var $facetPanes = $('.pane-facetapi');
          // apply chosen to urban wire facet selects
          var $facetSelects = $('.pane-facetapi select');
          $facetSelects.chosen({
              width: '100%',
              no_results_text: 'Oops, Items not found!'
          });
          $facetPanes.each(function () {
            $(this).toggle(function () {
              $(this).find('.chosen-single > div').addClass('click');
            }, function () {
              $(this).find('.chosen-single > div').removeClass('click');
            });
            $('body').click(function () {
              $(this).find('.chosen-single > div').removeClass('click');
            });
          });
          // Hidden with css to handle FOUSC. TODO: make this degrade more gracefully
          $facetPanes.show();
        },
        ebPageFilter: function () {
          var $topicFilter = $('#edit-field-research-area-tid-selective-wrapper'),
          $candidateFilter = $('#edit-field-election-candidate-tid-selective-wrapper'),
          $topicFilterSelect = $topicFilter.find('select'),
          $candidateFilterSelect = $candidateFilter.find('select');

          $topicFilter.toggle(function () {
            $topicFilter.find('.chosen-single > div').addClass('click');
          }, function () {
            $topicFilter.find('.chosen-single > div').removeClass('click');
          });

          $candidateFilter.toggle(function () {
            $candidateFilter.find('.chosen-single > div').addClass('click');
          }, function () {
            $candidateFilter.find('.chosen-single > div').removeClass('click');
          });

          $('body').click(function () {
            $topicFilter.find('.chosen-single > div').removeClass('click');
            $candidateFilter.find('.chosen-single > div').removeClass('click');
          });

          // implements chosen plugin
          $topicFilterSelect.chosen({
            width: '150px',
            no_results_text: 'Oops, Topic not found!'
          });
          $candidateFilterSelect.chosen({
            width: '150px',
            no_results_text: 'Oops, Candidate not found!'
          });
        }
      };

      // urban wire landing page
      if ($('body').hasClass('page-urban-wire')) {
        urbanWireLandingPage.pageShareIcons();
        //urbanWireLandingPage.pageRss();
        urbanWireLandingPage.pageFilter();
      }

      if ($('body').hasClass('page-2016-analysis')) {
        urbanWireLandingPage.pageShareIcons();
        urbanWireLandingPage.pageRss();
        urbanWireLandingPage.ebPageFilter();
      }

      if ( $('body').hasClass('page-node-urban-wire') || $('body').hasClass('node-type-election-blog-post')) {
        urbanWireLandingPage.pageShareIcons();
      }
    }
  };

   /**
  * addthis behavoirs
  */
  Drupal.behaviors.addThis = {
    attach: function () {
      $('.addthis_toolbox').each(function () {
        if ($(this).attr('addthis:title') !== undefined) {
          $(this).attr('addthis:title', $(this).attr('addthis:title').replace(' - Urban Institute',''));
        }
      });
    }
  };

  /**
   * Add placeholder div for layout fix when only 1 item appears in related content block of UWP.
   */
  Drupal.behaviors.UrbanWireRelatedPlaceholder = {
    attach: function () {
      var n = $('.pane-urbaninstitute-blocks-urban-wire-related-content .related-content .view .views-row').length;
      if (n < 2) {
        $('.pane-urbaninstitute-blocks-urban-wire-related-content .related-content .view-content').append('<div class="views-row views-row-last"></div>');
      }
    }
  };

  /**
  * Disable ajax form submission on urban-wire landing page so it refreshes and works with facets.
  */
  Drupal.behaviors.unBindBlogAjaxSubmit = {
    attach: function () {
      $('.views-exposed-form-blog-post-results-panel-pane-1 .form-submit').unbind();
    }
  };

  /**
   * Hack in a dev wrapper for a bespoke CSS styling element in New About Us.
   */
  Drupal.behaviors.newAboutUsVennWrap = {
    attach: function () {
      $('#venntastic .paragraphs-item-simple-body-text .field--name-field-graph-headline > h2').wrap('<div class="venn"></div>');
    }
  };

  /**
   * Hack a fragment on anchor link paragraph link items. This is pretty shameful.
   */
  Drupal.behaviors.hackLinkFragment = {
    attach: function (context, settings) {
      $('.field--name-field-graph-anchorlink .field-item').each(function () {
        var encodedFrag = $(this).find('a').attr('href');
        var correctedFrag = encodedFrag.replace('/%23', '#');
        $(this).find('a').attr('href', correctedFrag);
      });

      $(function () {

        if ($('body').hasClass('node-type-aboutus')) {


          $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });

        }

      });

    }
  };

  /**
   * convert inline image to background image
   * applies inline image to a specified element as a background image
   * removes inline image form the dom
   */

  Drupal.behaviors.inlineToBGImg = {
    attach: function (context, settings) {

      var convertToBGImg = function ($img, $el) {
        var img_src = $img.attr('src');
        $el.css('backgroundImage', 'url(' + img_src + ')');
        $img.remove();
      };

      // about landing page
      var $wisb = $('div.wide-image-skinny-body');
      if ($wisb.length) {
        var $wisb_img = $wisb.find('.field--type-image img').eq(0);
        var $wisb_el = $wisb.find('div.group-about-heading');
        if ($wisb_img.length && $wisb_el.length) {
          convertToBGImg($wisb_img, $wisb_el);
        }
      }

       // research in the field
      var $masonry = $('#masonry-results');
      if ($masonry.length) {
        $masonry.find('div.views-row').each(function () {
          var $el = $(this).find('div.promotion-image');
          var $img = $el.find('img').eq(0);
          if ($img.length && $el.length) {
            convertToBGImg($img, $el);
          }
        });
      }
    }
  };


  /**
   * Text box watermarking
   */
   Drupal.behaviors.inputBehaviors = {
    attach: function (context, settings) {
      var inputBehaviors = {
        watermarkTextBox: function ($element, $text) {
          $element.addClass('watermark-text').val($text);
          $element.focus(function () {
            if ($(this).val() == $text) {
              $(this).removeClass('watermark-text').val("");
            }
          });
          $element.blur(function () {
            if ($(this).val() == "") {
              $(this).val($text).addClass('watermark-text');
            }
          });
        }
      }

      // Set up watermarks
      $(document).ready(function () {
        // Watermark for About Us: For the Media "Find an Expert" search box
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == 'search_api_views_fulltext' && pair[1] != '') {
            $('#urbaninstitute-expert-search-form .form-text').val( decodeURIComponent( pair[1]) );
          }
          else {
            //Replaced by placeholder attributes
            //inputBehaviors.watermarkTextBox($("#urbaninstitute-expert-search-form .form-text"), "Search Authors");
          }
        }
      });
    }
   };

  /**
  * Debate latest discussion reveal
  */
  Drupal.behaviors.debateCommentReveal = {
    attach: function (context, settings) {
      if (Drupal.UrbanInstitute.touchSupport) {
        return false;
      }
      var $debates = $('div.debate-content');
      $debates.each(function () {
        var $this = $(this);
        var $comment = $this.find('div.last_comment');
        var $count = $this.find('div.debate-comment-count');
        if (!$comment.length || $count.find('span').text() == '0') {
          return false;
        }
        var hoverDelay;
        $count.on('mouseenter', function () {
          hoverDelay = setTimeout(function () {
            $comment.fadeIn();
            $count.addClass('is-active');
          }, 200);
        });
        $count.on('mouseleave', function () {
          clearTimeout(hoverDelay);
        });
        $this.on('mouseleave', function () {
          $comment.fadeOut('fast');
          $count.removeClass('is-active');
        });
        $this.find('div.debate-details').on('mouseenter', function () {
          $comment.fadeOut('fast');
          $count.removeClass('is-active');
        });
      });
    }
  }

  /**
  * Pinned Header
  */
  Drupal.behaviors.pinnedHeader = {
    attach: function () {
      if ($('body').hasClass('node-type-urban-wire-post') || $('body').hasClass('node-type-feature-long-form')) {
        var $win = $(window);
        var $header = $('<div id="header-pinned" />');
        var $content = $('<div class="content" />');
        var $home_lnk = $('.page-header a.site-logo').clone().empty();
        var $share = $('div.share-icons').clone();
        var $section_title = $('a.title-linkback').clone();
        var $page_title = $('.pane-node-title h1');
        var title_text = $page_title.text();
        var title_bottom = $page_title.offset().top + $page_title.height();
        var $title_el = $('<div class="title" />').html(' <span>: :</span> ' + title_text);
        $title_el.prepend($section_title);
        $share.find('div.shareThisB').on('click', function () {
          $header.toggleClass('share-visible');
        });
        $home_lnk.appendTo($content);
        $title_el.appendTo($content);
        $share.appendTo($content);
        if (!Drupal.UrbanInstitute.touchSupport) {
          $header.addClass('no-touch');
        }
        $content.appendTo($header);
        $header.appendTo('div.page');

        var resizeDelay;
        $win.bind('resize', function () {
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function () {
            title_bottom = $page_title.offset().top + $page_title.height();
          }, 100)
        });

        var displayHdr = function () {
          var win_top = $win.scrollTop();
          if (win_top > title_bottom) {
            $header.addClass('is-visible');
          } else {
            $header.removeClass('is-visible share-visible');
          }
        }

        displayHdr();
        $win.scroll(displayHdr);
      }
    }
  }


  $(document).ready(function () {
    /**
    * Handle on click events for the Find an Expert hover menu search form
    * will redirect users to : experts/directory?search_api_views_fulltext={search_term}
    */

    $('.fpo-text').on('click', function (){
      if($('.fpo-text').val() == "Find an Expert"){
        $('.fpo-text').val("");
      }
    });

    $('#find_an_expert_hover_submit').on('click', function (){
      window.location.href = '/experts/directory?search_api_views_fulltext=' +  sanitizeString($('.fpo-text').val());
    });

    function sanitizeString(str){
        str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
        return str.trim();
    }

  });
})(jQuery);
;
/**
 * Bxslider behaviors.
 */

(function($) {
  Drupal.behaviors.BXSliderCarousel = {
    attach: function (context, settings) {

      var settings = {
        auto: false,
        minSlides: 1,
        maxSlides: 20,
        moveSlides: 1,
        slideWidth: 275,
        slideMargin: 42,
        infiniteLoop: true
      },

      resetStyles = function(instance) {
        // remove some inline styling inserted by the plugin
        instance.parent().css({width: '', overflow: ''});
      },

      slider = [],
      resizeEnd,
      i;

      /*
      Touch functionality for all bxslider carousels
      bxslider's touch support disabled
      Using jQuery Mobile touch events instead for better experience when scrolling over carousels on touch devices
      */
      if (Drupal.UrbanInstitute.touchSupport) {
        $(document).off('swiperight', 'div.bx-viewport').on('swiperight', 'div.bx-viewport', function() {
          $(this).parent().find('a.bx-prev').trigger('click');
        });
        $(document).off('swipeleft', 'div.bx-viewport').on('swipeleft', 'div.bx-viewport', function() {
          $(this).parent().find('a.bx-next').trigger('click');
        });
      }

      var loadSliders = function($el) {
        if ($el.find('li.views-row').length >=3) {
          slider.push($el);
        } else {
          $el.addClass('static');
        }
      };

      // INCLUDE YOUR SELECTOR HERE
      loadSliders($('ul.urban-wire-bxslider', context));
      loadSliders($('ul.homepage-events-bxslider', context));
      loadSliders($('ul.just-released-bxslider', context));
      loadSliders($('ul.experts-publication-bxslider', context));
      if (!slider.length) { return false; }
      /* YOU DO NOT NEED TO DO ANYTHING BELOW THIS LINE IF ALL YOU NEED IS
       * TO ADD BXSLIDER BEHAVIOR TO YOUR VIEW BLOCK
       */
      for (i = 0; i < slider.length; i++) {
        slider[i].once().bxSlider(settings);
        //resetStyles(slider[i]);
      }
      // trigger on load just in case.
      $(window).trigger('resizeEnd');
      // create a function to delay execution of slider reload by 1/5 second.
      // this saves processing power.
      $(window).on('resize', function() {
        clearTimeout(resizeEnd);
        resizeEnd = setTimeout(function() {
          $(window).trigger('resizeEnd');
        }, 200);
      });
      // on window resize reinitialize sliders, so clones are duplicated.
      $(window).on('resizeEnd', function() {
        for (i = 0; i < slider.length; i++) {
          if (typeof slider[i].getCurrentSlide === 'function') {
            settings.startSlide = slider[i].getCurrentSlide();
            slider[i].reloadSlider(settings);
            resetStyles(slider[i]);
          }
        }
      });
    }
  };
})(jQuery);
;
(function ($) {
    Drupal.behaviors.Video = {
        attach: function(context, settings) {
            var button = null;
            var video_data = null;

            if (typeof Drupal.settings.urban_featured != "undefined" && typeof Drupal.settings.urban_featured.content_type != "undefined" && typeof Drupal.settings.urban_featured.urban_featured_video_url != "undefined") {
                video_data = parseVideo(Drupal.settings.urban_featured.urban_featured_video_url);
                if(video_data.type != null || video_data.id != "") {
                  var content_type = Drupal.settings.urban_featured.content_type;
                  $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-5').addClass('video');
                  $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-node-title').addClass('video');

                  $('.urban-featured-video .content img')
                      .addClass('header-video--media')
                      .attr('data-provider', video_data.type)
                      .attr('data-video-src', video_data.id)
                      .attr('data-video-height', "450")
                      .attr('data-video-width', "253");

                  HeaderVideo.init({
                      container: $('.urban-featured-video'),
                      header: $('.header-video--media'),
                      videoTrigger: $("#video-trigger"),
                      autoPlayVideo: false,
                      content_type: content_type
                  });
                }
                else {
                  video_data = null;
                }
            }
            //remove play button if url is malformed
            if(video_data == null) {
              $('.field--type-image').removeClass('urban-featured-video')
            }

        } // end attach

    }; // end drupal behavior video

})(jQuery);

var HeaderVideo = (function ($) {

    var video_settings = {
        container: $('.header-media'),
        video: '#video',
        header: $('.header-video--media'),
        videoTrigger: $('#video-trigger'),
        autoPlayVideo: false,
        provider: "",
        content_type: ""
    };

    var init = function(options){
        video_settings = $.extend(video_settings, options);
        getVideoDetails();
        setFluidContainer();
        bindClickActions();
        $('#video-close-trigger').hide();

        if(video_settings.autoPlayVideo) {
            appendFrame();
        }
    };

    var bindClickActions = function() {
        video_settings.videoTrigger.on('click', function(e) {
            e.preventDefault();
            appendFrame();
            $('#video-close-trigger').fadeIn();
            setFluidContainer();
        });

        $('#video-close-trigger').on('click', function(e){
            e.preventDefault();
            removeFrame();
        });
    };

    var getVideoDetails = function() {
        //Get all the data attributes from the HTML container and return them as an object for easy data retrieval
        videoDetails = {
            id: video_settings.header.attr('data-video-src'),
            provider: video_settings.header.attr('data-provider'),
            videoHeight: video_settings.header.attr('data-video-height'),
            videoWidth: video_settings.header.attr('data-video-width')
        };
        return videoDetails;
    };

    var setFluidContainer = function () {
        video_settings.container.data('aspectRatio', videoDetails.videoHeight / videoDetails.videoWidth);

        $(window).resize(function() {
            var winWidth = $(window).width(),
                winHeight = $(window).height();

            video_settings.container
                .width(Math.ceil(winWidth)) //Round up to the nearest pixel value to prevent breaking of layout
                .height(Math.ceil(winWidth * video_settings.container.data('aspectRatio'))); //Set the videos aspect ratio, see https://css-tricks.com/fluid-width-youtube-videos/

            if(winHeight < video_settings.container.height()) {
                video_settings.container
                    .width(Math.ceil(winWidth))
                    .height(Math.ceil(winHeight));
            }

        }).trigger('resize'); //Trigger resize to force it to run on page load as well

    };

    var createFrame = function() {
        //Added an ID attribute to be able to remove the video element when the user clicks on the remove button
        if(videoDetails.provider === 'youtube') {
            var html = '<iframe id="video" src="http://www.youtube.com/embed/'+videoDetails.id+'?rel=0&amp;hd=1&autohide=1&showinfo=0&autoplay=1&enablejsapi=1&origin=*" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        else if(videoDetails.provider === 'vimeo') {
            var html = '<iframe id="video" src="http://player.vimeo.com/video/'+videoDetails.id+'?title=0&amp;byline=0&amp;portrait=0&amp;color=3d96d2&autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        else if(videoDetails.provider === 'html5') {
            var html = '<video autoplay="true" loop="loop" id="video"><source src="'+videoDetails.id+'.mp4" type="video/mp4"><source src="'+videoDetails.id+'.ogv" type="video/ogg"></video>';
        }
        return html;
    };

    var appendFrame = function() {
        video_settings.header.hide();
        video_settings.container.append(createFrame());
        removePlayButton();
    };

    var removePlayButton = function () {
        if(video_settings.videoTrigger) {
            video_settings.videoTrigger.hide();
            if (video_settings.content_type == "feature_collection") {
              $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-5').hide();
              $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-node-title').hide();
            }
        }
    };

    var displayPlayButton = function() {
        if(video_settings.videoTrigger) {
            video_settings.videoTrigger.fadeIn('slow');
            if (video_settings.content_type == "feature_collection") {
              $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-5').fadeIn('slow');
              $('.node-type-feature-collection .panels-flexible-row-feature_collection_responsive_layout-1 .pane-node-title').fadeIn('slow');
            }
        }
    };

    var removeRemoveButton = function() {
        $('#video-close-trigger').hide();
        video_settings.header.show();
    };

    var removeFrame = function() {
        $(video_settings.video).remove();
        displayPlayButton();
        removeRemoveButton();
    };

    return {
        init: init
    };

})(jQuery);

function parseVideo(url) {
  // - Supported YouTube URL formats:
  //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
  //   - http://youtu.be/My2FRPA3Gf8
  //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
  // - Supported Vimeo URL formats:
  //   - http://vimeo.com/25451551
  //   - http://player.vimeo.com/video/25451551
  // - Also supports relative URLs:
  //   - //player.vimeo.com/video/25451551

  url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
  var type = null;
  var id = null;

  if (RegExp.$3.indexOf('youtu') > -1) {
    var type = 'youtube';
  }
  else if (RegExp.$3.indexOf('vimeo') > -1) {
    var type = 'vimeo';
  }

  return {
    type: type,
    id: RegExp.$6
  };
}
;
