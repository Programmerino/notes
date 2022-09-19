(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  Drupal.theme.prototype.claspExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  Drupal.behaviors.claspExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('#hamburger', context).once('toggle', function () {
        $(this).click(
          function(){
            $('#block-menu-block-2 .menu-block-wrapper').toggleClass('expand-megamenu');
          }
        );

      });
    }
  };

  Drupal.behaviors.frontSlider = {
    attach: function (context, settings) {
      enquire.register('screen and (max-width:767px)', {
          match : function() {
            $('.view-front-arts .view-content').append('<div class="cycle-pager"></div>').cycle({
              'slides': '> .views-row',
              'fx': 'scrollHorz',
              'swipe': true,
              'paused': true,
              'sync': true,
              'pagerTemplate': '<span class="pager-item"><i class="fa fa-circle-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i><span>'
             });
          },
          unmatch : function() {
            $('.cycle-pager').remove();
            $('.view-front-arts .view-content').cycle('destroy');
          },

      });
    }
  };
  Drupal.behaviors.issueNavigator = {
    attach: function (context, settings) {
      $('.parent').click(
        function() {
          $(this).parent('.term-navigator').toggleClass('closed');
        }

      );
    }
  };
    Drupal.behaviors.pagesNavigator = {
    attach: function (context, settings) {

      $('#block-menu-block-4 .block__title').append('<i class="fa fa-chevron-down" aria-hidden="true"></i><i class="fa fa-chevron-up" aria-hidden="true"></i>')
      .click(
        function() {
          $('#block-menu-block-4').toggleClass('open');
        }
      );
    }
  };
  Drupal.behaviors.megamenu = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.block--menu-block-2 .menu-block-wrapper > ul.menu > li', context).once('hover', function () {
        $(this).hoverIntent(
          function(){
            $(this).addClass('hover');
          },
          function(){
            $(this).removeClass('hover');
          },
        );

      });
      $('.menu-mlid-516 > .menu > li', context).once('hover', function () {
        $(this).hoverIntent({
          'over': function(){
            $(this).addClass('hover');
          },
          'out': function(){
            $(this).removeClass('hover');
          },
          'timeout': 200
        });

      });
    }
  };
  Drupal.behaviors.photoCredits = {
    attach: function(context, settings) {
      $('.credit .fa').tooltipster({theme: 'tooltipster-light',side: ['top', 'left', 'bottom', 'right'], arrow: false});
    }
  };
  Drupal.behaviors.trackDownloads = {
    attach: function(context, settings) {
      var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
      var baseHref = '';
      if ($('base').attr('href') != undefined) baseHref = $('base').attr('href');

      $('a').on('click', function(event) {
        var el = $(this);
        var track = true;
        var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') :"";
        var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
        if (!href.match(/^javascript:/i)) {
          var elEv = []; elEv.value=0, elEv.non_i=false;
          if (href.match(/^mailto\:/i)) {
            elEv.category = "email";
            elEv.action = "click";
            elEv.label = href.replace(/^mailto\:/i, '');
            elEv.loc = href;
          }
          else if (href.match(filetypes)) {
            var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
            elEv.category = "download";
            elEv.action = "click-" + extension[0];
            elEv.label = href.replace(/ /g,"-");
            elEv.loc = baseHref + href;
          }
          else if (href.match(/^https?\:/i) && !isThisDomain) {
            elEv.category = "external";
            elEv.action = "click";
            elEv.label = href.replace(/^https?\:\/\//i, '');
            elEv.non_i = true;
            elEv.loc = href;
          }
          else if (href.match(/^tel\:/i)) {
            elEv.category = "telephone";
            elEv.action = "click";
            elEv.label = href.replace(/^tel\:/i, '');
            elEv.loc = href;
          }
          else track = false;

          if (track) {
            ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, {nonInteraction: elEv.non_i});
            //_gaq.push(['_trackEvent', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, elEv.non_i]);
            if ( el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') {
              setTimeout(function() { location.href = elEv.loc; }, 400);
              return false;
            }
          }
        }
      });
    }
  }
})(jQuery);
