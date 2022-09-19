(function ($) {
  Drupal.behaviors.ajax_menu = {
    attach: function (context, setting) {
      var $ajax_menu_items = $('a.ajax-menu-item', context);

      if ($ajax_menu_items.length) {
        $ajax_menu_items.each(function () {
          var $link = $(this);
          var $li = $link.parent('li');

          ProcessMenuItem($li, setting.ajax_menu.base_url); //fire ajax menu builder
          plusHighlight(); //fire hover function
        });
      }
    }
  };

  function ProcessMenuItem($li, baseUrl) {
    if ($li.hasClass('ajax-menu-has-children')) {
      var expand = $('<a>', {'class': 'ajax-menu-toggle'}).text('');
      expand.click(function () {
        ToggleMenu($(this), baseUrl);
      });

      $li.prepend(expand);
    }

    $li.addClass('ajax-menu-processed');
  }

  function plusHighlight() {
    // MS -- ajax menu hover color.
    $('li.ajax-menu-has-children a').hover(
      function () {
        $(this).prev(".ajax-menu-toggle").addClass("hover-active");
      },
      function () {
        $(this).prev(".ajax-menu-toggle").removeClass("hover-active");
      }
    );
  }

  function ToggleMenu($this, baseUrl) {
    var $li = $this.parent('li');
    var $toggle = $li.children('a.ajax-menu-toggle');
    var mlid = $li.attr('class').match(/menu\-mlid\-([0-9]+)/);

    if ($li.hasClass('ajax-menu-loaded') && $li.hasClass('ajax-menu-open')) {
      $li.children('ul').hide();
      $li.removeClass('ajax-menu-open');
    } else if ($li.hasClass('ajax-menu-loaded') && !$li.hasClass('ajax-menu-open')) {
      $li.children('ul').show();
      $li.addClass('ajax-menu-open');
    } else {
      if (mlid && mlid.length == 2 && !$li.hasClass('ajax-menu-loading')) {
        $li.addClass('ajax-menu-loading');

        $.ajax(baseUrl + '/ajax_menu/menu/' + mlid[1], {
          success: function (data) {
            if (data && data.length) {
              $li.find('ul').remove();
              $li.append(data);

              // bind newly created menu to hover listener
              $li.find('ul li').each(function () {
                var $li = $(this);
                var $link = $li.children('a');

                ProcessMenuItem($li, baseUrl);
              });

              $li.addClass('ajax-menu-loaded').addClass('ajax-menu-open');

            }
          },
          complete: function () {
            $li.removeClass('ajax-menu-loading');
            plusHighlight(); //refire hover function            
          }
        });
      }
    }
  }

  function HoverOut() {
    var $this = $(this);
    var $li = $this.parent('li');

    $li.removeClass('ajax-menu-loading');
  }
})(jQuery);;
