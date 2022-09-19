$( document ).ready(function() {

	svgeezy.init(false, 'png');

    // $('.banner, .img-caption-wrap').hover(function() {
    //     $(this).children('.caption').fadeToggle(250);
    // });

    // console.log( "ready!" );

    $('#3pls_sub').hover(function() {
        $('.black_submenu_submenu ul').fadeIn('250');
    }, function() {
        $('.black_submenu_submenu ul').fadeOut('250');
    });

    $('.submenu.black > ul > li').hover(function() {
        $(this).children('ul').fadeIn('250');
    }, function() {
        $(this).children('ul').fadeOut('250');
    });

    $('#expand_items li').click(function(event) {
        $(this).children('.sub_items').slideToggle(250);
        $(this).children('.fa-stack').children('.fa-angle-down').toggleClass('fa-flip-vertical');
    });

    $('nav li a').not('.submenu li a').click(function(event) {


        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('i').removeClass('fa-flip-vertical');
            $(this).next('.submenu').slideUp('slow');

            $('nav li a').not('.submenu li a').removeClass('active');
            $('nav li a').not('.submenu li a').removeClass('fa-flip-vertical');
            $('nav li .submenu').slideUp('slow');
        } else {

            $('nav li a').not('.submenu li a').removeClass('active');
            $('nav li a').not('.submenu li a').removeClass('fa-flip-vertical');
            $('nav li .submenu').slideUp('slow');
            
            $(this).toggleClass('active');
            $(this).children('i').toggleClass('fa-flip-vertical');
            $(this).next('.submenu').slideToggle('slow');
        }

    });

    $('#trending_toggle').click(function(event) {
    	$('.trending_more').slideToggle('250');
    	$(this).toggleClass('fa-flip-vertical');
    });

    $('.new').click(function(event) {
    	$('.new_articles').slideToggle('250');
    	$('.new i').toggleClass('fa-flip-vertical');
    });

    $('#search_toggle').click(function(event) {
    	$('.search_wrap').slideToggle('250');
    	$(this).removeClass('fa-flip-vertical');
    });

    $('#mobile_menu').click(function(event) {
    	$('nav ul').slideToggle('250');
    });
 
});