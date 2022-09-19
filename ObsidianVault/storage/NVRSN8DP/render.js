;(function() {

  /////////////////////////////////////////////////////////////////////
  // User ID. See:
  // https://arcpublishing.atlassian.net/wiki/display/CD/Read+First
  /////////////////////////////////////////////////////////////////////

  function getUUID() {
    var uuid = localStorage.getItem("uuid");
    if (!uuid) {
      uuid = generateUUID();
      localStorage.setItem("uuid", uuid)
    }
    return uuid;
  }

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  /////////////////////////////////////////////////////////////////////
  // Send the pageview to Targeting
  /////////////////////////////////////////////////////////////////////

  // We use DOM ready to make sure theat this gets called after all the inline
  // scripts have been executed. Otherwise, if this code is at the top of the
  // HTML (say head), then `clavis` might be empty. This is IE9+ compatible.
  function domready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  domready(function() {
    var clavis = window.clavis;

    if (clavis &&
        clavis.contentId &&
        clavis.contentId.length > 0 &&
        clavis.siteId &&
        clavis.siteId.length > 0 &&
        clavis.targetingUrl &&
        clavis.targetingUrl.length > 0
    ) {
      // Old school AJAX , no jQuery. IE9+.
      var request = new XMLHttpRequest();
      request.open('POST', clavis.targetingUrl, true);
      request.setRequestHeader('Content-Type', 'application/json');

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          localStorage.setItem("clavis.targeting", request.responseText);
        } else {
          // Log / Ignore
        }
      };

      request.send(JSON.stringify({
        "auxiliaries": clavis.auxiliaries,
        "articleid": "contentapi://" + clavis.contentId,
        "referrer": document.referrer,
        "site": clavis.siteId,
        "userid": getUUID()
      }));
    }
  });
})();

$(function() {
  var $stickyChain = $(".sticky-chain-nav");
  var $stickyWrapper = $(".sticky-nav-wrapper");
  var chainPosition = $stickyWrapper.offset();
  var chainHeight;
  var stickyHeight;

  function checkScroll() {
    chainPosition = $stickyWrapper.offset();

    if ($(window).scrollTop() >= chainPosition.top) {
      $stickyChain.addClass("attach").css("top", "0");
    } else {
      $stickyChain.removeClass("attach").css("top", "initial");
    }
  }

  function adjustContent(height) {
    $stickyWrapper.css({
      "height": $stickyChain.height() + 'px'
    });
  }

  function init() {
    adjustContent();
    $(window).smartresize(adjustContent);
    $(window).scroll();
  }

  $(window).scroll(function () {
    checkScroll();
  });

  init();

  new ResizeSensor($stickyChain, function() {
    adjustContent();
  });

});

(function($) {

  // Element Variables
  var $body = $("body");
  var $sections = $("section:not('#top')");
  var $sharebar = $(".sharebar-wrapper");
  var $headernav = $(".headernav");
  var $alert = $("#alert");
  var $navlist = $("#slider-menu-nav-list");
  var $burgerIcon = $(".icon-burger");
  var $scrollLogo = $(".scroll-logo");
  var $logolink = $headernav.find(".nav-hp-link");
  var $row2 = $headernav.find(".row-two");
  var $burger = $headernav.find(".burger");
  var $drawer = $headernav.find("#drawer");
  var $slidermenu = $headernav.find("#slider-menu");
  var $navitem = $headernav.find(".main-nav");
  var $navitemLink = $headernav.find(".main-nav-item");
  var $subnavitem = $headernav.find(".sub-nav");
  var $subnavitemLink = $headernav.find(".sub-nav-item-link");

  var $sub;
  var $arrow;
  var $hoverActive = $navitem;

  // Search Variables
  var $searchcontainer = $headernav.find(".search-container");
  var $form = $searchcontainer.find(".search");
  var $searchIcon = $searchcontainer.find(".search-icon");
  var $textField = $searchcontainer.find(".text-field");

  var navActive = null;
  var subActive = null;

  function navPosition() {
    $headernav = $headernav || $(".headernav")
    return $headernav.offset()
  }

  // Size Variables
  var wH;
  var wW;
  var row1H;
  var row2H;
  var navH;
  var subId;
  var arrowId;
  var MOBILE_TRIGGER_POINT = 768;
  var ROLLUP_TRIGGER_POINT = 300;

  $("#top").css("padding-bottom", "0px");

  /* Scroll Attach: If the "Scroll Attach" option is true it will run
    an initial scroll check and then bind the event handler to fire
    checkScroll() on window scroll. */
    $(window).bind('scroll', function(e) {
      checkScroll();
    });

  /* Checks to see if the feature has reached the top of the window for the
    user, if so it uses a CSS class to attach the header. */
  var checkScroll = function() {
    if ($(window).scrollTop() > navPosition().top) {
      if (!$scrollLogo.hasClass("ignore-fade")) {
        $scrollLogo.css("width", "auto").fadeIn("fast");
				$(".top-nav-list").addClass("logo-active");
      }
    } else if ($(window).scrollTop() <= navPosition().top) {
      if(!$headernav.hasClass("skinny") && !$scrollLogo.hasClass("ignore-fade")) {
        $scrollLogo.fadeOut("fast");
				$(".top-nav-list").removeClass("logo-active");
      }
    }
  }

  $(window).resize(function() {
    $(window).scroll();
    wW = $(window).width();
    if (wW < MOBILE_TRIGGER_POINT && $(".mobile-burger")[0]) {
      $("span.fa.fa-bars.burger").hide()
      $(".mobile-burger").show()
    } else {
      $("span.fa.fa-bars.burger").show()
      $(".mobile-burger").hide()
    }
    checkScroll();
    init();
  });

  /* Resets values and classes. */
  var init = function() {
    if ($drawer.hasClass("active")) {
      initDrawer();
    }

    wW = $(window).width();
    row2H = $row2.outerHeight();

    var shareClass = $sharebar.attr("class");
    var mobileinline = false;
    var desktopinline = false;

    if (shareClass !== undefined) {
      if (shareClass.match(/inline-mobile/)) {
        mobileinline = true;
      }
      if (shareClass.match(/inline-desktop/)) {
        desktopinline = true;
      }
    }

    var sbH = 0;

    if (wW < MOBILE_TRIGGER_POINT) {
      if ($(".mobile-burger")[0]) {
        $("span.fa.fa-bars.burger").hide()
        $(".mobile-burger").show()
      }
      $headernav.addClass("skinny");
      $scrollLogo.fadeIn("fast");
      $sections.addClass("left-menu-skinny");
      $sharebar.addClass("left-menu-skinny");
    } else {
      $headernav.removeClass("skinny");
      $sections.removeClass("left-menu-skinny");
      $sharebar.removeClass("left-menu-skinny");
    }

    if ($scrollLogo.hasClass("ignore-fade")) {
			$scrollLogo.show();
      $scrollLogo.css("width", "auto").fadeIn("fast");
    }
  };

  init();

  /* Initializes the drawer */
  var initDrawer = function() {
    wW = $(window).width();
    var shareClass = $sharebar.attr("class");
    if (shareClass === undefined) {
      shareClass = "";
    }

    $body.toggleClass("left-menu-active");
    $burger.toggleClass("hover");
    $drawer.toggleClass("active");

    if ($headernav.hasClass("fixed") || $headernav.hasClass("scroll")) {
      if ($(window).scrollTop() > ROLLUP_TRIGGER_POINT) {
        var navHeight = $(".row-two").height();
        $("#drawer").css("top", navHeight + "px")
      } else {
        var navHeight = $("#siteheader").height();
        $("#drawer").css("top", navHeight + "px")
      }
    }

    wH = $(window).height();
		
		//allows drawer to display in pb admin
+    $body.css("min-height", wH + "px")

    navH = $headernav.outerHeight();
    row2H = $row2.outerHeight();

    // Determines what the height value of the drawer menu should be.
    var scrollH;

    if ($navlist.outerHeight() < (wH - navH)) {
      $navlist.css("height", "auto");
    }
    if ($headernav.hasClass("fixed")) {
      scrollH = "auto";
    } else {
      scrollH = wH - row2H + 10 + "px";
    }
    $slidermenu.css("height", scrollH);
    $("#slider-menu-scroll").css("height", scrollH);
  };

 /* Event handler which opens the drawer when the icon is clicked. */
 $burger.click(function(event) {
    event.stopPropagation();
    initDrawer();
  });

  /* Event handler which closes the drawer if it's already open. */
  $(window).click(function() {
    if ($drawer.hasClass("active")) {
      initDrawer();
    };
  });

  // Prevents the drawer from closing when the drawer is selected when it's open. */
  $drawer.on('click', function(event) {
    event.stopPropagation();
  });

  /* Event handler which opens the search bar when the icon is clicked. */
  $searchIcon.on('click', function(e) {
    $searchcontainer.toggleClass("expand");
    $form.toggleClass("expand");
    $textField.val("");
    if ($form.hasClass("expand")) {
      $textField.focus();
    } else {
      $textField.blur();
    }
    e.preventDefault();
  });

  /* Resets the hover state. */
  var resetHover = function() {
    $hoverActive.removeClass("hover-label-sub");
    $headernav.find(".sub-nav").hide();
    $headernav.find(".sub-nav-arrow").hide();
    $headernav.find(".sub-nav-arrow").removeClass("active");
  };

  /* Sets up hover effects for single links on the nav bar. */
  $navitemLink.on('mouseover', function() {
    $(this).addClass("hover-name");
    $(this).closest('li').addClass("unhover-label");
  });

  /* Removes hover effects for single links on the nav bar. */
  $navitemLink.on('mouseout', function() {
    $(this).removeClass("hover-name");
    $(this).closest('li').removeClass("unhover-label");
  });

  /* Sets up hover effects for single links on the nav bar sub-menu. */
  $subnavitemLink.on('mouseover', function() {
    $(this).addClass("hover-name-sub");
  });

  /* Removes hover effects for single links on the nav bar sub-menu. */
  $subnavitemLink.on('mouseout', function() {
    $(this).removeClass("hover-name-sub");
  });

  /* Opens the navigation sub-menu. */
  $navitem.on('mouseover', function(e) {
    $hoverActive.removeClass("hover-label-sub");
    $hoverActive = $(this);
    $hoverActive.addClass("hover-label");
    wH = $(window).height();

    var navT = $(this).position().top;
    subId = "subnav-" + $(this).attr("data-subnav");
    arrowId = "arrow-" + $(this).attr("data-subnav");
    navActive = $(this).attr("id");
    $sub = $("#" + subId);
    $subItem = $("#" + subId + " > li");

    wH = $(window).height();
    navH = $headernav.outerHeight();
    row2H = $row2.outerHeight();
    var subH = $sub.outerHeight();

    var vertH = wH - navH;
    var remain = vertH - navT - subH;
    var offT = navT;
    if (remain < 0) {
      offT = navT - (subH / 2);
    }

    var subOffset = 10;

    $arrow = $("#" + arrowId);
    if ($sub.css("display", "none")) {
      resetHover();

      // Checks if the sub menu has a <li> object within it. If so it will display the sub menu.
      if ($subItem.length) {
        $sub.css("top", (offT + "px"));
        $sub.show();
        $hoverActive.addClass("hover-label-sub");
        $arrow.addClass("active");
        $arrow.css("top", ((navT + subOffset) + "px"));
        $arrow.show();
      }
    }
  });

  /* Closes the sub-menu if the user mouses away from it for a certain period of time. */
  $navitem.on('mouseout', function(e) {
    $(this).removeClass("hover-label");
    navActive = null;
    setTimeout(function() {
      if ((navActive === null) && (subActive === null)) {
        resetHover();
      }
    }, 500);

  });

  $subnavitem.on('mouseover', function(e) {
    subActive = $(this).attr("id");
  });

  $subnavitem.on('mouseout', function(e) {
    subActive = null;
    setTimeout(function() {
      if ((navActive === null) && (subActive === null)) {
        resetHover();
      }
    }, 500);
  });

})(jQuery);


// INLINE ADS FUNCTION
(function($){
  "use strict";
  //NEWSLETTER SIGNUP FUNCTION
  $('.newsletter-subscribe-signup').click(function(){
    $('.newsletter-subscribe-signup').addClass('hide');
    $('.newsletter-subscribe-submit').removeClass('hide');
  });

  /*$("#newsletterForm").submit(function(event){
    grecaptcha.execute();
    $.ajax({
      data: $(this).serialize(),
      type: 'POST',
      url: listURL,
      success: function(response) {
        $('.newsletter-subscribe-submit').addClass('hide');
        $('.newsletter-confirmation').removeClass('hide');
      }
    });
  });*/

  $("#newsletterForm").submit(function(event){
    var dlEvent = 'nl-signup-complete'
    dataLayer.push({event: dlEvent});
    $('.newsletter-subscribe-submit').addClass('hide');
    $('.newsletter-confirmation').removeClass('hide');
  });

// SELECTION SHARING BELOW
  var runSelectionSharing = $("#selectionSharerPopover").data('selection');
  if (runSelectionSharing){
    var savedText = null; // Variable to save the text

    function saveSelection() {
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          return sel.getRangeAt(0);
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
      }
      return null;
    }

    function restoreSelection(range) {
      if (range) {
        if (window.getSelection) {
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (document.selection && range.select) {
          range.select();
        }
      }
    }

    var btnWrap = document.getElementById('selectionSharerPopover'),
        twShare = document.getElementById('popoverTwitter');
    var mouseStartX, mouseStartY;
    document.onmousedown = function(e){
      mouseStartX = e.clientX ;
      mouseStartY = e.pageY;
    }
    document.onmouseup = function(e) {
      if (savedText && savedText.toString() == saveSelection().toString() && (e.target.id !="twIcon") ){
        savedText = ""; // Save selection on mouse-up
      }else {
        savedText = saveSelection();
      }
      var articleX = $("#article-content").offset().left;
      var articleY = $("#article-content").offset().top;
      var mouseX = e.clientX;
      var mouseY = e.pageY;
      var isEmpty = savedText.toString().length === 0; // Check selection text length
      setTimeout(function() {

        // set sharing button position
        if (isEmpty){
          $(btnWrap).hide()
        } else {
          $(btnWrap).show()
          // position the tooltip using articleX as starting point, accounting for all of the possible ways the user could highlight
          if (mouseX>mouseStartX && mouseY>mouseStartY){
            var buttonX = (mouseStartX - articleX) + ((mouseX - mouseStartX)/2);
            var buttonY = (mouseStartY - articleY) - 50;
          } else if (mouseX>mouseStartX && (mouseY-mouseStartY)<10){
            var buttonX = ((mouseStartX - articleX) + 50);
            var buttonY = (mouseY - articleY) - 50;
          }else if (mouseX<mouseStartX && (mouseY-mouseStartY)<10){
            var buttonX = (mouseX - articleX) + 50;
            var buttonY = (mouseY - articleY) - 50;
          } else if (mouseX<mouseStartX && mouseY>mouseStartY){
            var buttonX = (mouseStartX - articleX) + 50;
            var buttonY = (mouseStartY - articleY) - 50;
          } else {
            var buttonX = (mouseX - articleX);
            var buttonY = (mouseY - articleY) - 50;
          }
          btnWrap.style.left = buttonX + 'px';
          btnWrap.style.top = buttonY + 'px';
        }
      }, 10);

    };

    twShare.onclick = function(e) {
      e.preventDefault()
      if (!savedText) return;
      var url = window.location.href;
      window.open('https://twitter.com/intent/tweet?text=' + savedText + ' '+ url, 'shareWindow', 'width=500,height=350'); // Insert the selected text into sharing URL
      restoreSelection(savedText); // select back the old selected text

      // hide if we are done
      setTimeout(function() {
        $(btnWrap).hide()
      }, 10);

      return false;

    };
  }

})(jQuery);

(function($) {

    var SUBMIT_TIMEOUT = 5e3
    var DATALAYER_EVENT_PREFIX = 'nl-signup-' 
    var TOGGLE_SELECTORS = ['.signup', '.confirm' ]
    var TOGGLE_CLASS = 'hide'
    var _registry = {}

    function MCOModal(element) {

        var $_ = $(element)

        $_.find('.close').click($.proxy(this.close, this))

        var form = $_.find('form')
        form.submit($.proxy(this.submit, this))
        $_.find('#' + form.prop('target'))
                .load($.proxy(this.complete, this))

        this.element = element
        return this
    }
    MCOModal.prototype.show = function() {

        var dlEvent = DATALAYER_EVENT_PREFIX + 'shown'
        this.element.showModal()
        $(this.element).find('.emailInput').focus()
        dataLayer.push({event: dlEvent});
    }

    MCOModal.prototype.close = function() {

        var dlEvent = DATALAYER_EVENT_PREFIX + 'closed'
        this.element.close();
        dataLayer.push({event: dlEvent});
    }

    MCOModal.prototype.complete = function (event) {

        var dlEvent = DATALAYER_EVENT_PREFIX + 'complete'
        this.toggle()
        dataLayer.push({event: dlEvent});

        setTimeout($.proxy(this.close, this), SUBMIT_TIMEOUT)
    }

    MCOModal.prototype.toggle = function () {

        var $_ = $(this.element)
        TOGGLE_SELECTORS.forEach(function(selector) {
            $_.find(selector).toggleClass(TOGGLE_CLASS)
        })
    }

    MCOModal.prototype.submit = function (event) {

        var $_ = $(this.element)
        event.currentTarget.submit()
        dataLayer.push({event: "nl-signup-submit"});
    }

    $.fn.newsLetterModal = function() {
        return this.map(function() {
            if(typeof dialogPolyfill == 'object')
                dialogPolyfill.registerDialog(this)
            return new MCOModal(this)
        })[0]
    }
   
})(jQuery);





/**
 * Clavis Recommendation Module
 *
 *
 * Structure of this file
 * ======================
 *
 * `smartPreload`: takes care of loading the recommendations before the user
 * reaches the bottom of the page. It keeps track of scrolling, where the
 * recommendations are located, and will try to be smart about pre-loading.
 *
 * `ajaxCall`: is just a small wrapper.
 *
 * `Recommend`: is a tiny JS client for the recommendations API. It provides
 * convenience methods to call the different endpoints with the right parameters.
 *
 * `loadSuccess`: takes care of rendering recommendations in the page.
 *
 * `window/scope.recommend` is the function that gets exported to the global
 * scope so it can be called from the JSP/HTML. It wraps all the above in a
 * single call that takes an option object.
 *
 */
;(function(scope) {
  "use strict";
  const UTM_SOURCE = 'clavis'

  /////////////////////////////////////////////////////////////////////////////
  // Keeps track of scrolling position, and:
  // - Runs a function when we get 'close' to the div
  // - Runs a function when the div becomes visible
  //
  // Parameters:
  // - `elem`: DOM element or CSS selector
  // - `options`: {
  //    `screens`: how many screens in advance to start the loader
  //    `preload`: the function to call when we get `close`
  //    `visible`: the function to call when the div becomes visible
  // }
  /////////////////////////////////////////////////////////////////////////////

  function smartPreload(elem, options) {

    // Keep track of when we ran
    var preloadCalled = false;
    var visibleCalled = false;

    // Number of screens
    var screens = (options && options.screens) || 2;

    // Define the callback
    var callback = function() {

      // Calculate position
      var diff = elem.getBoundingClientRect().top - window.innerHeight;
      var size = window.innerHeight * screens;

      // If we are on a small device, double that
      if (window.innerWidth < 768) {
        size = size * 2;
      }

      // If we are 1 (or 2) screens away, load
      if (diff < size) {
        if (options.preload && !preloadCalled) {
          preloadCalled = true;
          options.preload();
        }
      }

      // If the element is visible, notify and stop watching
      if (diff < 0) {
        if (options.visible && !visibleCalled) {
          visibleCalled = true;
          options.visible();
        }
        window.removeEventListener('scroll', callback);
      }
    };

    // Setup the listener
    window.addEventListener('scroll', callback);

    // Run the callback once
    callback();

  };

  /////////////////////////////////////////////////////////////////////
  // Makes an AJAX call to the API
  /////////////////////////////////////////////////////////////////////

  function ajaxCall(url, payload, success) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        if (success) {
          success(JSON.parse(request.responseText));
        }
      }
    };

    request.send(JSON.stringify(payload));
  }

  /////////////////////////////////////////////////////////////////////
  // Define the constructor
  /////////////////////////////////////////////////////////////////////

  function Recommend(options) {
    this.count = options.count;
    this.content = options.content;
    this.clientName = options.clientName;
    this.imageMaxWidth = options.imageMaxWidth;
    this.imageMaxHeight = options.imageMaxHeight;
		this.layout = options.layout;

    this.element = document.querySelector(options.element);

    this.endpoint = options.endpoint;
    this.clickedEndpoint = options.endpoint + "/clicked";
    this.renderedEndpoint = options.endpoint + "/rendered";
    this.recommendEndpoint = options.endpoint + "/recommend"
  }

  /////////////////////////////////////////////////////////////////////
  // Define the API
  /////////////////////////////////////////////////////////////////////

  Recommend.prototype = {

    valid: function() {
      return (
        this.count &&
        this.count > 0 &&
        this.clientName &&
        this.clientName.trim().length > 0 &&
        this.endpoint &&
        this.endpoint.trim().length > 0 &&
        this.element
      );
    },

    baseParams: function() {
      var params = {};
      params.url = 'contentapi://' + this.content;
      params.referrer = document.referrer;
      params.count = this.count
      params.client = this.clientName;
      params.imageMaxWidth = this.imageMaxWidth;
      params.imageMaxHeight = this.imageMaxHeight;

      // User ID. See `global/clavis`
      try {
        params.uid = localStorage.getItem('uuid');
      } catch(e) {
        params.uid = null;
      }

      return params;
    },

    recommend: function(success) {
      var self = this;
      return ajaxCall(
        this.recommendEndpoint,
        this.baseParams(),
        function(response) {
          // We only care about URLs  and response type for follow up calls.
          // So only keep that for slimmer ajax calls.
          var slim = { results: [] };
          if (response) {
            if (response.results) {
              for (var i = 0; i < response.results.length; i++) {
                slim.results.push({
                  url: response.results[i].url,
                  responsetype: response.results[i].responsetype
                });
              }
            }
          }
          self.response = slim;

          // Now execute callback
          if (success && response && response.results) {
            success(response);
          }
        }
      );
    },

    rendered: function() {
      var params = this.baseParams()
      params.response = this.response;
      return ajaxCall(this.renderedEndpoint, params);
    },

    clicked: function(url) {
      var params = this.baseParams()
      params.response = this.response;
      params.clickUrl = url;
      return ajaxCall(this.clickedEndpoint, params);
    },

    setVisible: function() {
      this._visible = true;
      if (this._rendered) {
        this.rendered();
      }
    },

    setRendered: function() {
      this._rendered = true;
      if (this._visible) {
        this.rendered();
      }
    }

  };

  /////////////////////////////////////////////////////////////////////////////
  // Render data and track clicks
  /////////////////////////////////////////////////////////////////////////////

  function loadSuccess(client, data, options) {

    var tpl = client.element.querySelectorAll('[data-template-id="recommendation"]');
    if (!data || !data.results || !tpl || tpl.length != 1)
      return;
    const html = tpl[0].innerHTML;

    const splits = [
      { size: 'xs', columns: 2 },
      { size: 'md', columns: 4 }
    ].map(buildSplit)



    if (options.layout == 'in-story') {
      var baseClasses = ['recommendation col-md-6 col-xs-12']
    } else {
      var baseClasses = ['recommendation'].concat(splits.map(getClass)).join(' ')
    }


    var result = data.results.reduce(buildResult.bind(null, splits, baseClasses, html), '')

    tpl[0].outerHTML = result;
    client.element.style.display = 'block';
    client.setRendered();

    // Set click logging
    client.element.querySelectorAll('a').forEach(function(el) {
      el.addEventListener('click', function(event) {
        if (event && event.currentTarget && event.currentTarget.href) {
          var clickUrl = event.currentTarget.href;
          client.clicked(event.currentTarget.href);
          if (event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey) {
            // Open in a new tab, so do nothing
          } else {
            // Delay the click event to finish the AJAX call
            event.preventDefault();
            setTimeout(function() {
              document.location = clickUrl;
            }, 250);
          }
        }
      });
    });
  }

  function getClass(item) {
    return item.class
  }

  function buildSplit(split) {

    split.class = ['col', split.size, 12 / split.columns].join('-')
    split.clear_class = 'visible-' + split.size + '-block'
    return split
  }

  function buildResult(splits, classes, html, accumulator, reco, i) {

    var picture = reco.photo.path;
    var result = ''
    var destUrl = getLink(reco.url)
    var clearClasses = splits.filter(function(split) {
      return (i + 1) % split.columns === 0
    }).map(function (item) {return item.clear_class})


    result += '<div class="' + classes + '">' + html
      .replace(/{{url}}/g, destUrl)
      .replace('{{picture}}', picture)
      .replace('{{headline}}', reco.headline)
      + '</div>'

    if(clearClasses.length > 0)
      result += '<div class="clearfix ' + clearClasses.join(' ') + '"></div>'

    return accumulator + result
  }

  function getLink(url) {
    url += url.indexOf('?') >= 0 ? '&' : '?'
    url += 'utm_source=' + UTM_SOURCE
    return url
  }

  /////////////////////////////////////////////////////////////////////////////
  // This is the main function we export to the global scope
  //
  // Options: {
  //    count: N,
  //    content: 'Content API ID',
  //    element: '#recommendations',
  //    endpoint: 'https://recommendations...',
  //    whenToRun: 'always/smart',
  //    clientName: 'recommend-arc'
  // }
  /////////////////////////////////////////////////////////////////////////////

  scope.recommend = function(options) {
    // Create the Recommend client
    var client = new Recommend(options);
    if (!client.valid()) {
      return;
    }

    // Create closures for callbacks
    function _preload() {
      client.recommend(function(data) {
        loadSuccess(client, data, options);
      });
    }
    function _visible() {
      client.setVisible();
    }

    // And initialize
    var marker = document.querySelectorAll(options.scrollMarker);
    if (marker && marker.length == 1) {
      if (options && options.whenToRun && options.whenToRun == 'always') {
        _preload();
        smartPreload(marker[0], {
          visible: _visible
        });
      } else {
        smartPreload(marker[0], {
          preload: _preload,
          visible: _visible
        });
      }
    }
  };

})(window);



(function ($) {


})(jQuery);

(function($) {
    var $related = $(".list-related");
    var $trending = $(".list-trending");
    var $rtmenu = $(".related-trending-menu");
    var $tabs = $("li", $rtmenu);

    $tabs.on('click', function(e) {
        var $tab = $(this).text().toLowerCase();
        $tabs.toggleClass("active");
        switch($tab) {
            case "related":
                // $related.show();
                // $trending.hide();
                // $related.fadeIn();
                $trending.fadeOut({
                    "duration" : 200,
                    "easing" : "swing",
                    "complete" : function() {
                        $related.fadeIn({
                            "duration" : 200,
                            "easing" : "swing"
                        });
                    }
                });
                break;
            case "trending":
                // $related.hide();
                // $trending.show();
                $related.fadeOut({
                    "duration" : 200,
                    "easing" : "swing",
                    "complete" : function() {
                        $trending.fadeIn({
                            "duration" : 200,
                            "easing" : "swing"
                        });
                    }
                });
                break;
        }
    });
})(jQuery);
