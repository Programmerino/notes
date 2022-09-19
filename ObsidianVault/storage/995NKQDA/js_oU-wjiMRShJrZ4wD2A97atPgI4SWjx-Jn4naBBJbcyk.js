;
(function($) {
  Drupal.behaviors.scrollToEl = {
    attach: function() {
      var header_height = 228;
      $('.myth_buttons li a[href*="#"]').once().click(function (event) {
        id = $(this).attr('href').substring(1);
        var url = window.location.href;
        if (url.split("/").length <= 3) {
          event.preventDefault();
        }
        $('html, body').animate({
          scrollTop: $('.fact-fiction-row-' + id).offset().top - header_height
        }, 800);
        return false;
      });
      $('.uani_victims_headerbar a[href*="#"]').once().click(function (event) {
        id = $(this).attr('href').substring(1);
        var url = window.location.href;
        if (url.split("/").length <= 3) {
          event.preventDefault();
        }
        $('html, body').animate({
          scrollTop: $('#mapanchor').offset().top - header_height
        }, 800);
        return false;
      });
      $('#map-legend .actionViewMap').once().click(function (event) {
        $('html, body').animate({
          scrollTop: $('#mapanchor').offset().top - header_height
        }, 400);
        return false;
      });
      $('.fortop').once().click(function(event){
        $('html, body').animate({
          scrollTop: $('#Top').offset().top - header_height
        }, 800);
        event.preventDefault();
        return false;
      });
    }
  };

  Drupal.behaviors.accountabilityTracking = {
    attach: function() {
      $('.theme').each(function() {
        var themeText = $(this).text();
        themeText = themeText.toLowerCase();
        themeText = themeText.replace(' ', '-');
        var grandParent = $(this).parent().parent();
        $(grandParent).addClass(themeText);
      });
      function resetZebras() {
        $('table.accountability-tracker tbody tr').removeClass('even').removeClass('odd');
        $('table.accountability-tracker tbody tr:visible:odd').addClass('odd');

        $('table.accountability-tracker tbody tr:visible:even').addClass('even');
      }

      function hideAllEvents() {
        $('table.accountability-tracker tbody tr').hide();
      }

      function showTheme(theme) {
        if(theme == 'all') {
          $('table.accountability-tracker tbody tr').show();
        } else {
          $('tr.'+theme).show();
        }
        resetZebras();
      }

      function setActiveTheme(elem) {
        $('.theme-selector li a').removeClass('active');
        $(elem).addClass('active');
      }

      $('.theme-selector li a').click(function(e) {
        e.preventDefault();
        hideAllEvents();
        showTheme($(this).attr('href').substring(1));
        setActiveTheme(this);
      })

      $('.detail').hide();

      $('table.accountability-tracker tbody tr td').once('toggle-detail').each(function(){
        $(this).bind('click',function(){
          $(this).parents('tr').find('div.detail').toggle();
        })
      });
    }
  };

  Drupal.behaviors.IranBusiness = {
    attach: function () {
      var name = 'views-exposed-form-iran-business-registry-block-1';
      $('.form-type-select').each(function () {
        if ($(this).parent().parent().attr('id') === name) {
          var label = $(this).find('label');
          var select = $(this).find('select option');
          select.each(function () {
            if ($(this).text() === '- Any -') {
              $(this).text(label.text());
            }
          });
        }
      });
    }
  }
})(jQuery);
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');
;
