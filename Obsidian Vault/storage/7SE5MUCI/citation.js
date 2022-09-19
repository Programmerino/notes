(function ($) {
  Drupal.behaviors.citation = {
    attach: function (context, setting) {
      var currentDate = new Date();
      var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var monthsabbr = new Array('Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.');
      var day = currentDate.getDate();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();
      var citationContent1 = $('div.citation .citation-content #selectme1 p', context).html();
      var citationContent2 = $('div.citation .citation-content #selectme2 p', context).html();
      var citationContent3 = $('div.citation .citation-content #selectme3 p', context).html();
      var pageTitle = $('#block-blockify-blockify-page-title h1', context).text() || '';
      var dateStr = '';
      var dateStrAbbr = '';
      var dateStrAPA = '';

      if (setting.pathPrefix == 'es/') {
        dateStr = ' Accedido ' + day + ' de ' + Drupal.t(months[month]) + ' del ' + year + '.';
      } else {
        dateStr = ' Accessed ' + months[month] + ' ' + day + ', ' + year + '.';
      }

      if (setting.pathPrefix == 'es/') {
        dateStrAbbr = ' Accedido ' + day + ' ' + monthsabbr[month] + ' ' + year + '.';
      } else {
        dateStrAbbr = ' Accessed ' + day + ' ' + monthsabbr[month] + ' ' + year + '.';
      }

      if (setting.pathPrefix == 'es/') {
        dateStrAPA = ' en ' + year + ', ' + months[month] + ' ' + day + '';
      } else {
        dateStrAPA = ' on ' + year + ', ' + months[month] + ' ' + day + '';
      }

      // set the date in citation
      $('div.citation .citation-content #selectme1 p', context).html(citationContent1 + dateStrAPA);
      $('div.citation .citation-content #selectme2 p', context).html(citationContent2 + dateStrAbbr);
      $('div.citation .citation-content #selectme3 p', context).html(citationContent3 + dateStr);

      // Enter to Close, for divs used as close buttons, this allows enter key to act as click
      $(document).on('keyup', '.citation-header',function(e){
        if(e.which===13 || e.which===32) {
          $(this).click();
        }
      });


      // show actual citation
      $('div.citation .citation-header', context).click(function () {
        $(this).next().slideToggle("fast");
        track('Citation', 'Show Citation', pageTitle);
      });

      //tab logic
      $('.tab-button', context).click(function () {
        $(this).addClass('active');
        $('.tab-button').not(this).removeClass('active');
        $(this).siblings('.copy-message').hide();
        var tabID = '#' + $(this).attr('data-click');
        $('.selectme').not(tabID).hide();
        $(tabID).show();
      });

      $("div.citation .citation-content .selectme", context).click(function () {
        // highlight citation and show copy message
        $(this).selectText();
        $(this).siblings('.copy-message').slideDown("fast");
        track('Citation', 'Show Copy and Paste', pageTitle);
      }).bind('copy', function () {
        // close citation after Ctrl + C
        var $this = $(this);
        setTimeout(function () {
          $this.slideUp("fast");
          track('Citation', 'Ctrl+C pressed', pageTitle);
        }, 500);
      });

      // close citation when click outside of it
      $(document).mouseup(function (e) {
        var $citation = $('div.citation');

        if (!$citation.is(e.target) && $citation.has(e.target).length === 0) {
          var $citationContent = $citation.find('.citation-content');
          if($citationContent.is(':visible')) {
            $citationContent.slideUp("fast",function(){
              track('Citation', 'Hide Citation', pageTitle);
            });
          }
        }
      });
    }
  };

  function track(category, action, label) {
    if (typeof ga !== 'undefined') {
      ga('send', 'event', category, action, label);
    }
  }
})(jQuery);
