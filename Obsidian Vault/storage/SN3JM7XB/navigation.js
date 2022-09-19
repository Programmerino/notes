jQuery(document).ready(function($) {
  var kellerCreative = kellerCreative || {};

  kellerCreative.navigation = {

    addBodyListener: function() {
      $('body').click(function(evt){
         if($(evt.target).closest('#search-container').length) {
            return; 
         }

         if($(evt.target).closest('.menu-item-has-children').length) {
            return; 
         }

         kellerCreative.navigation.closeSearch();
         kellerCreative.navigation.closeSubnav();
      });
    },

    addCloseNavListener: function() {
      $("#overlay").on("click", function() {
        kellerCreative.navigation.closeNav();
      });
    },

    addNavMenuListener: function() {
      $("#mobile-menu").on("click", function() {
        kellerCreative.navigation.showMobileMenu();
        kellerCreative.navigation.showOverlay();
      });
    },

    addSubnavListener: function() {
      $(".menu-item-has-children > a").on("click", function(e) {

        if ($(window).width() < 768) {
          e.preventDefault();
          
          var subNav = $(this).next(".sub-menu-wrap");

          if( !$(subNav).hasClass("active") ) {
            kellerCreative.navigation.closeSubnav();
            kellerCreative.navigation.toggleNav($(subNav));
          } else {
            kellerCreative.navigation.closeSubnav();
          }
        }
      });
    },

    addSearchListener: function() {
      $("#search-button").on("click", function() {
        var field = $("#search-container .search-field");
        $("#search-container").toggleClass("active");
        $("#search-button i").toggleClass("fa-search fa-times");

        if( $(field).is(":focus") ) {
          $(field).blur();
        } else {
          $(field).focus();
        }
      });
    },

    addWindowListener: function() {
      $(window).resize(function() {
        if ($(window).width() > 768) {
          kellerCreative.navigation.closeNav();
        }
      });
    },

    closeNav: function() {
      $("html").removeClass("nav-active");
      $("#site-navigation").removeClass("active");
      kellerCreative.navigation.hideOverlay();
    },

    closeSearch: function() {
      $(".search").removeClass("active");
      $("#search-button i").removeClass("fa-times");
      $("#search-button i").addClass("fa-search");
    },

    closeSubnav: function() {
      $(".menu-item-has-children").removeClass("active");
      $(".sub-menu-wrap").removeClass("active");
    },

    hideOverlay: function() {
      $("#overlay").removeClass("active");
    },

    showMobileMenu: function() {
      $("#site-navigation").addClass("active");
      $("html").addClass("nav-active");
      kellerCreative.navigation.addCloseNavListener();
    },

    showOverlay: function() {
      $("#overlay").addClass("active");
    },

    toggleNav: function(navItem) {
      $(navItem).find(".sub-menu-wrap").toggleClass("active");
      $(navItem).addClass("active");
    }
  };

  kellerCreative.navigation.addBodyListener();
  kellerCreative.navigation.addNavMenuListener();
  kellerCreative.navigation.addSubnavListener();
  kellerCreative.navigation.addSearchListener();
  kellerCreative.navigation.addWindowListener();
});