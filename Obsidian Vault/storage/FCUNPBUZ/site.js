'use strict'

var linkFixes = function() {
  var internalLink = /taxfoundation\.org|localhost/;
  var links = document.getElementsByTagName('a');
  [].forEach.call(links, function(link) {
    // Mark long links with a special class to help them wrap
    // Needed for awful footnotes
    var words = link.text.split(' ');
    words.forEach(function (word) {
      if (word.length > 35) {
        link.classList.add('link--long');
      }
    });

    // Open external links in new tab
    if (!internalLink.test(link.host)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
};

// Find Tables and Set Data Titles
var responsiveTables = {
  initialize: function () {
    jQuery('table').each(function (index) {
      var headers = responsiveTables.findHeaders(jQuery(this));
      var rows = jQuery(this).find('tbody tr');
      if (
        Object.keys(headers).length
        && responsiveTables.checkHeaderAndCellLengths(rows, Object.keys(headers).length)
      ) {
        responsiveTables.setDataTitles(rows, headers);
      }
    });
  },

  findHeaders: function (table) {
    var headers = {};
    table.find('thead').find('th')
    .each(function (index) {
      headers[index] = jQuery(this).text();
    });

    return headers;
  },

  setDataTitles: function (rows, headers) {
    rows.each(function (index) {
      var cells = jQuery(this).find('td');
      cells.each(function (index) {
        jQuery(this).attr('data-title', headers[index]);
      });
    });
  },

  checkHeaderAndCellLengths: function (rows, headersLength) {
    var previousLength = 0;
    var matches = true;
    rows.each(function (index) {
      if (jQuery(this).find('td').length !== headersLength) {
        matches = false;
        return false;
      }
    });

    return matches;
  },
};

// Cookie functions
var cookies = {
  createCookie: function (name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = '; expires=' + date.toGMTString();
    } else {
      var expires = '';
    }

    document.cookie = name + '=' + value + expires + '; path=/';
  },

  readCookie: function (name) {
    var lookup = name + '=';
    var cookieList = document.cookie.split(';');
    for (var i = 0; i < cookieList.length; i++) {
      var c = cookieList[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(lookup) == 0) {
        return c.substring(lookup.length, c.length);
      }
    }

    return null;
  },

  eraseCookie: function (name) {
    createCookie(name, '', -1);
  },
};

var toggleMobileMenu = function () {
  document.querySelector('.mobile-menu').classList.toggle('mobile-menu--visible');
}

var formatCellText = function ($element, cellText, numericRegex) {
  $element.css('text-align', 'right');
  $element.html(cellText.replace(numericRegex, '$1$2$3$4'));
}

var toggleInsideMobileMenu = function (event) {
  jQuery(event.target).parent.siblings('.toggle-target').toggleClass('mobile-menu--show');
};

jQuery(document).ready(function ($) {
  // Hide bottom of header on scroll down, reveal on scroll up
  let scrollPosition = 0;
  const nav = document.querySelector('.navbar__bottom');
  window.addEventListener('scroll', function(event) {
    if (Math.abs(window.scrollY - scrollPosition) > 150) {
      if (window.scrollY > scrollPosition) {
        if (nav.classList.contains('navbar__bottom--active')) {
          nav.classList.replace('navbar__bottom--active', 'navbar__bottom--hidden');
        } else {
          nav.classList.add('navbar__bottom--hidden');
        }
        scrollPosition = window.scrollY;
      } else if (window.scrollY < scrollPosition) {
        nav.classList.replace('navbar__bottom--hidden', 'navbar__bottom--active');
        scrollPosition = window.scrollY;
      }
    }
  });
  // Make external links open in new tabs
  linkFixes();

  // Search icon listener
  var $searchIcon = jQuery('.search-icon');
  var $searchSection = jQuery('.navbar__search-section');
  $searchIcon.on('click', function() {$searchSection.toggleClass('navbar__search-section--active')});


  // Mobile menu toggle event listener
  var hamburger = document.querySelector('.navbar__menu-mobile-toggle');
  hamburger.addEventListener('click', toggleMobileMenu, false);

  // mobile menu toggles
  var $mobileMenus = jQuery('.mobile-menu__dropdown-icon');
  $mobileMenus.each(function(i) {
    var $dropdown = jQuery(this);
    $dropdown.on('click', function() {
      $dropdown.toggleClass('mobile-menu__dropdown-icon--active');
      $dropdown.parent().siblings('.toggle-target').toggleClass('mobile-menu--show')
    });
  });

  // Strip old tables of bad attributes
  var tableElements = ['table', 'thead', 'th', 'tbody', 'tr', 'td'];
  var paragraphRegex = /(<p>)(.*?)(<\/p>)/im;
  var numericRegex = /^\s*(<strong>|<em>)*\s*(\(?-?\$?)\s*([\d,\.%]+\)?)\s*(<\/strong>|<\/em>)*\s*$/im;
  for (var tE = 0, tA = tableElements.length; tE < tA; tE++) {
    var $tableElement = jQuery(tableElements[tE]);
    $tableElement.each(function () {
      var $element = jQuery(this);
      var attributes = ['style', 'border', 'width', 'align'];
      for (var a = 0, aL = attributes.length; a < aL; a++) {
        if (typeof $element.attr(attributes[a]) !== typeof undefined && $element.attr(attributes[a]) !== false) {
          $element.removeAttr(attributes[a]);
        }
      }

      // Add back styling for numeric data and remove extraneous <p> tags
      if (tableElements[tE] === 'td') {
        var cellText = $element.html();
        // if ($element.children().length === 0 && numericRegex.test($element.html())) {
        //   formatCellText($element, cellText, numericRegex);
        // } else if ($element.children().length === 1) {
          if (paragraphRegex.test($element.html())) {
            cellText = cellText.replace(paragraphRegex, '$2');
          }
        //   if (numericRegex.test(cellText)) {
        //     formatCellText($element, cellText, numericRegex);
        //   }
        // }
      }

    });
  }

  // Tables display block when too wide
  var $theArticleWidth = jQuery('article').width();
  jQuery('table').each(function(i, table) {
    var $theTable = jQuery(table);
    if ($theTable.width() > $theArticleWidth) {
      $theTable.attr('style', 'display:block;')
    }
  });

  responsiveTables.initialize();
  if (cookies.readCookie('tf-post-font-size')) {
    resizeText(cookies.readCookie('tf-post-font-size'));
  }

  // tooltips
  var tooltipAnchors = document.getElementsByClassName('tooltip__anchor');
  for (var i = 0; i < tooltipAnchors.length; i++) {
    setTooltipListener(tooltipAnchors[i].id.replace('anchor', ''));
  }
  function setTooltipListener(id) {
    var anchor = document.getElementById('anchor' + id);
    var tooltip = document.getElementById('tooltip' + id);
    if (tooltip) {
      var parent = anchor.parentElement;
      anchor.addEventListener('mouseenter', function () {
        var anchorBounds = anchor.getBoundingClientRect();
        var parentBounds = parent.getBoundingClientRect();
        var left = parentBounds.left, right = parentBounds.right;
        var maxWidth = (5 / 7) * (parentBounds.width);
        var anchorCenter = anchorBounds.left + anchorBounds.width / 2;
        tooltip.classList.replace('tooltip--inactive', 'tooltip--active');
        tooltip.style.bottom = window.innerHeight - anchorBounds.top + 5 + 'px';
        if (anchorCenter < parentBounds.width / 3) {
          tooltip.style.left = left + 15 + 'px';
          tooltip.style.right = window.innerWidth - right + (parentBounds.width - maxWidth) + 'px';
        } else if (anchorCenter > (parentBounds.width / 3) * 2) {
          tooltip.style.left = left + (parentBounds.width - maxWidth) + 'px';
          tooltip.style.right = window.innerWidth - right + 30 + 'px';
        } else {
          tooltip.style.left = left + (parentBounds.width - maxWidth) / 2 + 'px';
          tooltip.style.right = window.innerWidth - right + (parentBounds.width - maxWidth) / 2 + 'px';
        }
      });
      anchor.addEventListener('mouseleave', function () {
        tooltip.classList.replace('tooltip--active', 'tooltip--inactive');
        tooltip.style.left = 0;
        tooltip.style.right = 0;
        tooltip.style.bottom = 0;
      });
    }
  }
});
