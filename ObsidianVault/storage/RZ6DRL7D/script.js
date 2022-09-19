jQuery(document).ready(function($){
    $('.toggle-search').on('click', function(){
        $('#search-popup').removeClass('hidden').addClass('animated zoomIn');
    });

    $('.close-search').on('click', function(){
        $('#search-popup').addClass('hidden').removeClass('animated zoomIn');
    });
	
    /* $(window).on('scroll', function(){
        window_position = parseInt($(this).scrollTop());
        subscribe_bar_position = parseInt($('.subscribe-bar').offset().top);
        related_post_position = parseInt($('.related-posts').offset().top);

        
        media_image_position = parseInt($('#media_image-2 .image').offset().top);
        media_image_height = parseInt($('#media_image-2 .image').height());
        media_image_bottom = parseInt(media_image_position + media_image_height);

        if (window_position > media_image_position) {
            $('#media_image-2 .image').addClass('sticky');
        } else {
            $('#media_image-2 .image').removeClass('sticky');
        }

        console.log('Media Image Position:' + media_image_position);
        console.log('Media Image Height:' + media_image_height);
        console.log('Media Image Bottom:' + media_image_bottom);

        console.log(media_image_bottom + ':' + related_post_position);

        if (media_image_bottom > related_post_position) {
            $('#media_image-2 .image').removeClass('sticky');
        }
    }); */

    /* sidebar_image = $('#media_image-2 .image');
    related_post  = $('.related-posts');
    sidebar_image_height = sidebar_image.height();

    $(window).scroll(function(e){
        if($(this).scrollTop() >= sidebar_image.offset().top) {
            console.log('Sticky');
            sidebar_image.addClass('sticky');
        } else {
            console.log('Unsticky');
            sidebar_image.removeClass('sticky');
        }

        if ((sidebar_image.offset().top + sidebar_image_height) >= related_post.offset().top) {
            sidebar_image.removeClass('sticky');
        } else {
            
        }
    }); */
});