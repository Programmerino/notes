/* 

 * To change this license header, choose License Headers in Project Properties.

 * To change this template file, choose Tools | Templates

 * and open the template in the editor.

 */



jQuery( document ).ready( function($) {

        jQuery('.flexslider').flexslider({
            animation: "slide",
            customDirectionNav: jQuery(".custom-navigation a"),
            slideshow: false,

        });

        $( '.fancybox' ).fancybox();
               
        $(".close-chairmandiv").click(function(){
            $(".hide-chairmandiv").hide();
        });

	$( ".search-button-toggle" ).click(function() {
	  $( ".search-bar" ).slideToggle( "slow" );
          if( $( ".search-toggle" ).hasClass( "fa-caret-down" ) ){
              $( ".search-toggle" ).removeClass( "fa-caret-down" );
              $( ".search-toggle" ).addClass( "fa-caret-up" );
          }else{
              $( ".search-toggle" ).removeClass( "fa-caret-up" );
              $( ".search-toggle" ).addClass( "fa-caret-down" );
          }
	});


        $('.single-rightpubpost [style*="right"]').filter(function() {
//            alert('in');
            if( $(this).css("text-align") === 'right'){
               
                $(this).css("text-align" , "center" );
            }
        });

	

	equalheight();
	
	intequalheight();

	catequalheight();

	

	$( ".ginput_card_field select,.gfield_select" ).wrap( "<div class='styled-select slate'></div>" );

	

	$('.top-publi-img').each(function() {

        var imgSrc = $(this).find('.vc_single_image-wrapper img').attr('src');

        $(this).css('background-image', 'url(' + imgSrc + ')');

    });

	

	$('.right-pubimage').each(function() {

        var imgSrc = $(this).find('.latestpub-img img').attr('src');

        $(this).css('background-image', 'url(' + imgSrc + ')');

    });

	

	$('nav .nav-menu').before('<a class="toggle"><span></span><i></i></a>');

	$('nav .menu-item-has-children > a').after('<a class="child-trigger"><span></span></a>');

	

	$('a.toggle').click(function() {

		$(this).next('nav .nav-menu').slideToggle(250);

		$('body').toggleClass('mobile-open');

		$('a.child-trigger').removeClass('child-open');

		$('.sub-menu').slideUp(250);

		return false;

	 });



	$('a.child-trigger').click(function() {

		$(this).parent().siblings('.sub-menu').find('a.child-trigger').removeClass('child-open');

		$(this).parent().siblings('.sub-menu').find('.hs-menu-children-wrapper').slideUp(250);

		$(this).next('.sub-menu').slideToggle(250);

		$(this).next('.sub-menu').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);

		$(this).next('.sub-menu').children('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');

		$(this).toggleClass('child-open');

		return false;

	});



        $( 'span.gfield_required' ).html( '' );

        

       
        
    

});





jQuery(window).load(function ($) {

	equalheight();
	
	intequalheight();

	catequalheight();

});



/*jQuery(window).resize(function ($) {

	equalheight();

	catequalheight();
	intequalheight();

});*/



function equalheight(){

	var divHeight = jQuery('.middletop-section').height(); 

    jQuery('.top-publi-img').css('height', divHeight+'px');

}

function intequalheight(){

	var divHeight = jQuery('.interview-section').height(); 

    jQuery('.interview-imgwrap img').css('height', divHeight+'px');

}



function catequalheight(){

	var divHeight = jQuery('.pubcat-topsection').height(); 

    jQuery('.right-pubimage').css('height', divHeight+'px');

}
