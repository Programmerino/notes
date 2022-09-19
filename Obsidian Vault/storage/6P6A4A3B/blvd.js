jQuery(document).ready(function( $ ) {

});

/*
( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.parallax');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.parallax'));
	    
	}
		
} )( jQuery );
*/

jQuery(window).resize(function() {
	 jQuery('.image-grid li').each(function() {
		 var caption = jQuery(this).find('a:after');
		 var captionHeight = caption.outerHeight()/2;
		 caption.css("padding-top", "-"+captionHeight+"px");
	});
});
jQuery(window).resize(); //on page load


jQuery(document).ready(function( $ ) {
	
	sections = $(".fade-sections .fade").fadeTo(0, 0);
	
	$(window).scroll(function(d,h) {
	    sections.each(function(i) {
		    
	        a = $(this).offset().top + $(this).height();
	        b = $(window).scrollTop() + $(window).height();
	        
	        if ((a < b)) {
		        
		        if ($(this).hasClass('fade-left')) {
			        $(this).animate({ opacity: 1, marginLeft:"0" }, 'slow');
		        } else if ($(this).hasClass('fade-right')) {
			        $(this).animate({ opacity: 1, marginRight:"0" }, 'slow');
			    } else if ($(this).hasClass('fade-top')) {
				    $(this).animate({ opacity: 1, marginTop:"0" }, 'slow');
		        } else {
			        $(this).animate({ opacity: 1 }, 'slow');
		        }
	    	}
		});
	});
});

