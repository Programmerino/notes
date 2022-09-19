(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
(function ($) {
  Drupal.behaviors.content_tabs = {
    attach: function (context, settings) {
      if (typeof settings.content_tabs !== 'undefined' && $().tabs) {
        var $contentRegion = $('#block-system-main div.content', context);
        var tabDefinition = settings.content_tabs;
        var $contentTabs = $('<div>', {'class': 'content_tabs'});
        var $tabUl = $('<ul>').appendTo($contentTabs);
        var accordions = [];
        var accordionSettings = {
          active: 0,
          collapsible: true,
          header: '.block-title',
          heightStyle: 'content'
        };

        // adds content tabs to main content
        // make sure it doesn't already exist
        if ($('div.content_tabs', $contentRegion).length) {
          $contentTabs = $('div.content_tabs', $contentRegion);
        } else {
          $contentRegion.prepend($contentTabs);
        }

        var hasContent = false;
        $.each(tabDefinition, function (url, tabs) {
          if (window.location.pathname.match(url) !== null) {
            var validTabs = 0;

            // create tabs for this matched URL
            for (var i = 0; i < tabs.length; i++) {
              var classes = tabs[i].classes || [];
              var $content = $(classes.join(','));

              // make sure tab doesn't exist
              if ($('#' + tabs[i].id).length)
                continue;

              // make sure there is content
              if (!$content.length)
                continue;

              hasContent = true;

              //Append class to system block there's tabs
              if (hasContent === true) {
                $('.block-system').addClass('df-content-tabs-active');
                $('#preface-second').addClass('df-content-tabs-head');
              }

              // make sure there isn't only chatday in a tab
              // we hide chatday if that the case
              if ($content.length == 1 && $content.find('div.content div.view').hasClass('chat-day-transcript')) {
                $content.hide();
                continue;
              }

              // build tab UL links
              $('<li>').html($('<a>', {href: '#' + tabs[i].id}).html(tabs[i].name)).appendTo($tabUl);

              // build tab content div
              var $contentWrapper = $('<div>', {id: tabs[i].id}, {'class': 'subtabs'}).appendTo($contentTabs);

              // move content into content div
              $content.detach().appendTo($contentWrapper);

              // tabs within content
              if ($contentWrapper.children().length > 1) {
                var viewsAccordion = Drupal.settings.views_accordion || {};
                var inViewsAccordion = false;

                // make sure it isn't already done by views accordion
                $.each(viewsAccordion, function () {
                  var viewname = this.viewname;
                  var display = this.display;
                  var displaySelector = '.view-id-' + viewname + '.view-display-id-' + display + ' > .view-content';

                  if ($contentWrapper.find(displaySelector).length) {
                    inViewsAccordion = true;
                  }
                });

                if (!inViewsAccordion) {
                  var $subTab = $('<div>', {'class': 'subtabs'}).prependTo($contentWrapper);
                  var $subTabUL = $('<ul>', {'class': 'visible-links'}).prependTo($subTab);
                  var $subTabULHidden = $('<ul>', {'class': 'hidden-links'}).appendTo($subTab);
                  $subTab.prepend('<button><div class="hamburger"></div></button>');

                  $contentWrapper.find('.block').each(function (i) {
                    var $block = $(this);
                    var title = $block.find('.block-title').html() || '';

                    if (title) {
                      $('<li>').html($('<a>', {href: '#subtab-' + i}).html(title))
                        .appendTo($subTabUL);

                      $block.find('.block-title').hide();
                      $block.wrap($('<div>', {id: 'subtab-' + i}));
                    }
                  });

                  $contentWrapper.tabs({
                    activate: function (event, ui) {
                      if (typeof ui.newTab !== 'undefined') {
                        if (typeof window.GaTrack === 'function') {
                          window.GaTrack('Related Content', 'Sub Tab Open', ui.newTab.text());
                        }
                      }

                      scrollToTab($('#block-system-main', context));
                    }
                  });
                }
              }

              validTabs++;
            }

            // initialize jquery tabs
            if (validTabs) {
              $contentTabs.tabs({
                activate: function (event, ui) {
                  if (typeof ui.newTab !== 'undefined') {
                    if (typeof window.GaTrack === 'function') {
                      window.GaTrack('Related Content', 'Tab Open', ui.newTab.text());
                    }
                  }

                  scrollToTab($('#block-system-main', context));

                  if (typeof ui.newPanel !== 'undefined' && ui.newPanel.find('.subtabs').length) {
                    fancyHamburger(ui.newPanel.find('div.subtabs'));
                  }
                }
              });

              // open tab containing hash
              var hash = window.location.hash;
              var $hashTarget = hash ? $(hash, $contentTabs) : '';

              if (hash && $hashTarget.length) {
                var $tabPanel = $hashTarget.parents('div.ui-tabs-panel');

                if ($tabPanel.length) {
                  var index = $tabPanel.prevAll('div.ui-tabs-panel').length;
                  $contentTabs.tabs('option', 'active', index);

                  if ($hashTarget.hasClass('ui-accordion-header')) {
                    $hashTarget.click();
                  }
                }
              }
            }

            return false;
          }

          return true;
        });

        if (!hasContent) {
          $(context).find('div.content_tabs').remove();
        }
      }
    }
  };

  function scrollToTab($element) {
    if (typeof $element !== 'undefined' && $element.length) {
      var windowTop = Math.abs($('html,body').offset().top);
      var elementTop = $element.offset().top;

      if (windowTop > elementTop) {
        $('html, body').stop().animate({
          scrollTop: elementTop - 20
        }, 750);
      }
    }
  }

  function fancyHamburger($subtab) {
    var $nav = $subtab;
    var $btn = $('button', $subtab);
    var $vlinks = $('.visible-links', $subtab);
    var $hlinks = $('.hidden-links', $subtab);

    var breaks = [];

    if (!$nav.hasClass('subtab-processed')) {
      // Window listeners
      $(window).resize(function () {
        if ($nav.is(':visible')) {
          breaks = updateNav($nav, $vlinks, $hlinks, breaks);
        }
      });

      $btn.on('click', function () {
        $hlinks.toggleClass('hidden');
      });

      breaks = updateNav($nav, $vlinks, $hlinks, breaks);

      $nav.addClass('subtab-processed');
    }
  }

  function updateNav($nav, $vlinks, $hlinks, breaks) {
    var $btn = $('button', $nav);
    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

    // The visible list is overflowing the nav
    if ($vlinks.width() >= availableSpace) {

      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children().last().prependTo($hlinks);

      // Show the dropdown btn
      if ($btn.hasClass('hidden')) {
        $btn.removeClass('hidden');
      }

      $hlinks.addClass('hidden');
    } else {

      // There is space for another item in the nav
      if (availableSpace > breaks[breaks.length - 1]) {

        // Move the item to the visible list
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();
      }

      // Hide the dropdown btn if hidden list is empty
      if (breaks.length < 1) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
      }
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);

    // Recur if the visible list is still overflowing the nav
    if ($vlinks.width() > availableSpace) {
      updateNav($nav, $vlinks, $hlinks, breaks);
    }

    return breaks;
  }
})(jQuery);;
"use strict";
(function($) {
//Pop up form on home page

  var feedbackFormVisibility = [
      'lessonplans',
      'videos',
      'infographics',
      'blog',
      'drug-facts',
      'games'
    ],
    excludePage = {
      'drug-facts': 'page-node-1343'
    },
    bodyClassFeedbackForm = $('body').attr("class"),
    blogDateContainer = $('.field-name-post-date').length?$('.field-name-post-date'):null,
    formVisibleCheck = false;

  if(bodyClassFeedbackForm !== undefined) {
    feedbackFormVisibility.forEach(function (bodyFormClass) {
      if (bodyClassFeedbackForm.indexOf(bodyFormClass.replace('!', '')) > -1 &&
        bodyClassFeedbackForm.indexOf('not-logged-in') > -1) {

        if (bodyFormClass === 'blog') {
          var today = new Date();
          var blogTextDate = blogDateContainer.text();
          var blogDate = new Date(blogTextDate);
          var oldDate = new Date().setDate(today.getDate() - 30);

          formVisibleCheck = oldDate < blogDate;
        }
        else if (bodyFormClass === 'drug-facts') {
          formVisibleCheck = bodyClassFeedbackForm.indexOf(excludePage[bodyFormClass]) === -1;
        }
        else {
          formVisibleCheck = true;
        }

      }

    });
  }

//formVisibleCheck = true;  //temporary override
  if(typeof PiiForm !== 'undefined') {
    if (formVisibleCheck === true) {
      var formBox = new PiiForm({
        parentTag: 'body',
        containerTag: 'div',
        attachStylesheet: true,
        path: '/sites/all/modules/nida_feedback_form',
        debug: false,
        delay: 40000
      });

      formBox.displayForm();
    }
  }

})(jQuery);
;
;
(function ($) {
  Drupal.behaviors.views_accordion_expand_all = {
    attach: function (context, settings) {
      var $buttons = $('a.views-accordion-expand-all:not(.views-accordion-processed)', context);

      if ($buttons.length) {
        $buttons.each(function (i, button) {
          var $btn = $(button);
          var $view_content = $btn.parents('.view-header').siblings('.view-content.ui-accordion');
          var view_accordion_settings = getViewAccordionSetting($btn.parents('div.view'));

          $btn.addClass('views-accordion-processed');
          $btn.text(local_t($btn.text(), settings));
          
          if ($view_content.length) {
            $btn.click(function () {
              var expanded = !!$btn.data('expanded');

              if (expanded) {
                $view_content.accordion(view_accordion_settings);
                $btn.text(local_t('Expand All', settings));
                $btn.data('expanded', false);
              }
              else {
                $view_content.accordion('destroy');
                $btn.text(local_t('Collapse All', settings));
                $btn.data('expanded', true);
              }

              return false;
            });
          }
          else {
            $btn.hide();
          }
        });
      }
    }
  };

  function local_t(str, settings) {
    if (window.location.pathname && window.location.pathname.indexOf('datos-sobre-las-drogas') !== -1) {
      if (settings.views_accordion_expand_all && settings.views_accordion_expand_all.lang && settings.views_accordion_expand_all.lang[str]) {
        return settings.views_accordion_expand_all.lang[str];
      }
    }

    return str;
  }

  function getViewAccordionSetting($view) {
    var view_accordion_setting_id = getViewAccordionSettingId($view);
    var settings = [];

    if (Drupal.settings.views_accordion) {
      if (view_accordion_setting_id && Drupal.settings.views_accordion.hasOwnProperty(view_accordion_setting_id)) {
        settings = Drupal.settings.views_accordion[view_accordion_setting_id];

        if (settings.rowstartopen !== false) {
          settings.active = settings.rowstartopen;
        }
        else {
          settings.active = false;
        }
        settings.heightStyle = 'content';
      }
    }

    return settings;
  }

  function getViewAccordionSettingId($view) {
    if ($view.length) {
      var classes = $view.attr('class');
      var view_id = classes.match(/view-id-([a-z0-9_-]+)/i);
      var display_id = classes.match(/view-display-id-([a-z0-9_-]+)/i);

      if (view_id && display_id) {
        return 'views-accordion-' + view_id[1] + '-' + display_id[1];
      }
    }

    return '';
  }
})(jQuery);;
/**
 * @file
 */

(function ($) {

  'use strict';

  Drupal.extlink = Drupal.extlink || {};

  Drupal.extlink.attach = function (context, settings) {
    if (!settings.hasOwnProperty('extlink')) {
      return;
    }

    // Strip the host name down, removing ports, subdomains, or www.
    var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
    var host = window.location.host.replace(pattern, '$2$3');
    var subdomain = window.location.host.replace(host, '');

    // Determine what subdomains are considered internal.
    var subdomains;
    if (settings.extlink.extSubdomains) {
      subdomains = '([^/]*\\.)?';
    }
    else if (subdomain === 'www.' || subdomain === '') {
      subdomains = '(www\\.)?';
    }
    else {
      subdomains = subdomain.replace('.', '\\.');
    }

    // Build regular expressions that define an internal link.
    var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');

    // Extra internal link matching.
    var extInclude = false;
    if (settings.extlink.extInclude) {
      extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link matching.
    var extExclude = false;
    if (settings.extlink.extExclude) {
      extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), 'i');
    }

    // Extra external link CSS selector exclusion.
    var extCssExclude = false;
    if (settings.extlink.extCssExclude) {
      extCssExclude = settings.extlink.extCssExclude;
    }

    // Extra external link CSS selector explicit.
    var extCssExplicit = false;
    if (settings.extlink.extCssExplicit) {
      extCssExplicit = settings.extlink.extCssExplicit;
    }

    // Define the jQuery method (either 'append' or 'prepend') of placing the icon, defaults to 'append'.
    var extIconPlacement = settings.extlink.extIconPlacement || 'append';

    // Find all links which are NOT internal and begin with http as opposed
    // to ftp://, javascript:, etc. other kinds of links.
    // When operating on the 'this' variable, the host has been appended to
    // all links by the browser, even local ones.
    // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
    // available in jQuery 1.0 (Drupal 5 default).
    var external_links = [];
    var mailto_links = [];
    $('a:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + '), area:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + ')', context).each(function (el) {
      try {
        var url = '';
        if (typeof this.href == 'string') {
          url = this.href.toLowerCase();
        }
        // Handle SVG links (xlink:href).
        else if (typeof this.href == 'object') {
          url = this.href.baseVal;
        }
        if (url.indexOf('http') === 0
          && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude)))
          && !(extCssExclude && $(this).is(extCssExclude))
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          external_links.push(this);
        }
        // Do not include area tags with begin with mailto: (this prohibits
        // icons from being added to image-maps).
        else if (this.tagName !== 'AREA'
          && url.indexOf('mailto:') === 0
          && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
          && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
          mailto_links.push(this);
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.
      catch (error) {
        return false;
      }
    });

    if (settings.extlink.extClass) {
      Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass, extIconPlacement);
    }

    if (settings.extlink.mailtoClass) {
      Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass, extIconPlacement);
    }

    if (settings.extlink.extTarget) {
      // Apply the target attribute to all links.
      $(external_links).attr('target', settings.extlink.extTarget);
      // Add rel attributes noopener and noreferrer.
      $(external_links).attr('rel', function (i, val) {
        // If no rel attribute is present, create one with the values noopener and noreferrer.
        if (val == null) {
          return 'noopener noreferrer';
        }
        // Check to see if rel contains noopener or noreferrer. Add what doesn't exist.
        if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
          if (val.indexOf('noopener') === -1) {
            return val + ' noopener';
          }
          if (val.indexOf('noreferrer') === -1) {
            return val + ' noreferrer';
          }
          // Both noopener and noreferrer exist. Nothing needs to be added.
          else {
            return val;
          }
        }
        // Else, append noopener and noreferrer to val.
        else {
          return val + ' noopener noreferrer';
        }
      });
    }

    Drupal.extlink = Drupal.extlink || {};

    // Set up default click function for the external links popup. This should be
    // overridden by modules wanting to alter the popup.
    Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function () {
      if (settings.extlink.extAlert) {
        return confirm(settings.extlink.extAlertText);
      }
    };

    $(external_links).click(function (e) {
      return Drupal.extlink.popupClickHandler(e, this);
    });
  };

  /**
   * Apply a class and a trailing <span> to all links not containing images.
   *
   * @param {object[]} links
   *   An array of DOM elements representing the links.
   * @param {string} class_name
   *   The class to apply to the links.
   * @param {string} icon_placement
   *   'append' or 'prepend' the icon to the link.
   */
  Drupal.extlink.applyClassAndSpan = function (links, class_name, icon_placement) {
    var $links_to_process;
    if (Drupal.settings.extlink.extImgClass) {
      $links_to_process = $(links);
    }
    else {
      var links_with_images = $(links).find('img').parents('a');
      $links_to_process = $(links).not(links_with_images);
    }
    $links_to_process.addClass(class_name);
    var i;
    var length = $links_to_process.length;
    for (i = 0; i < length; i++) {
      var $link = $($links_to_process[i]);
      if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block') {
        if (class_name === Drupal.settings.extlink.mailtoClass) {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.mailtoLabel + '"></span>');
        }
        else {
          $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.extLabel + '"></span>');
        }
      }
    }
  };

  Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
  Drupal.behaviors.extlink.attach = function (context, settings) {
    // Backwards compatibility, for the benefit of modules overriding extlink
    // functionality by defining an "extlinkAttach" global function.
    if (typeof extlinkAttach === 'function') {
      extlinkAttach(context);
    }
    else {
      Drupal.extlink.attach(context, settings);
    }
  };

})(jQuery);
;
