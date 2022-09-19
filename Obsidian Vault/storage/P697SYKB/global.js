$(document).ready(function() {

    $( function() {
          // init Isotope
          var $container = $('.isotope').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
              name: '.name',
              symbol: '.symbol',
              number: '.number parseInt',
              category: '[data-category]',
              weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
              }
            }
          });

          // filter functions
          var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
              var number = $(this).find('.number').text();
              return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
              var name = $(this).find('.name').text();
              return name.match( /ium$/ );
            }
          };

          // bind filter button click
          $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $container.isotope({ filter: filterValue });
          });

          // bind sort button click
          $('#sorts').on( 'click', 'button', function() {
            var sortByValue = $(this).attr('data-sort-by');
            $container.isotope({ sortBy: sortByValue });
          });
          
          // change is-checked class on buttons
          $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
            });
          });
          
        });

	/*** ACCORDION ARROW ***/
	function toggleChevron(e) {
	    $(e.target)
	        .prev('.panel-heading')
	        .find("i.fa")
	        .toggleClass('fa-chevron-down fa-chevron-up');
	}
	$('.panel').on('hidden.bs.collapse', toggleChevron);
	$('.panel').on('shown.bs.collapse', toggleChevron);


	/*** MENU ***/
    $(".submenu").hide();

    $(".submenu-title").hover(
        function() { $('.submenu', this).fadeIn("fast");
        },
        function() { $('.submenu', this).fadeOut("fast");
    });

    /*** SCROLL ***/
    $('.scroll-pane').jScrollPane({showArrows: true});

    /*** HIDE/SHOW ***/
    $('.comments-content').hide();
    
    $('.view-tab').click(function () {
        $('.comments-content').hide();
        $('.view-content').show();
        $('.comments-tab').removeClass('active');
        $('.view-tab').addClass('active');
      });

    $('.comments-tab').click(function () {
        $('.view-content').hide();
        $('.comments-content').show();
        $('.view-tab').removeClass('active');
        $('.comments-tab').addClass('active');
    });

    /*** CUSTOMIZE RADIO ***/
    $('.first > input[type="radio"]').click( function() {     
	    $('.second > .checked').removeClass('active');
	    $('.first > .checked').addClass('active');
	});

	$('.second > input[type="radio"]').click( function() {     
	    $('.first > .checked').removeClass('active');
	    $('.second > .checked').addClass('active');
	});

    /*** MOBILE MORE SITES ***/
    $('.main-menu-mobile.navbar').hide();
        $('.menu-mobile').click( function() {     
        $('.main-menu-mobile.navbar').toggle('slow');
    });

    /*** MOBILE MORE SITES ***/
    $('.menu-bottom .navbar').hide();
        $('.more-sites').click( function() {     
        $('.menu-bottom .navbar').toggle('slow');
    });
	
	

});
