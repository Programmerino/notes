(function($){
	$(document).ready(function(){
		if($('.dp-img-slider').length){
			$('.dp-img-slider').slick({
				arrows:false,
				dots: true,
				infinite: true,
				speed: 500,
				fade: true,
				cssEase: 'linear'
			});
		}
	});
	
	 $(window).scroll(function(){
if($('.dp-exams-listing').length >0) {		 
        if($(window).scrollTop() > $('.dp-exams-listing').offset().top - $('#header').height()){
            $('.target2.img-wrap').addClass('dp-scrolled');
			//$('.target2.img-wrap').css('top', $(window).scrollTop() - $('.dp-exams-listing').offset().top + 100);
        }else{
            $('.target2.img-wrap').removeClass('dp-scrolled');			
        }
	if($(window).scrollTop() > $('.dp-exams-listing').offset().top + $('.dp-exams-listing').height() - $('.target2.img-wrap').height() - 96){
		$('.target2.img-wrap').addClass('dp-scrolled-b');	
		console.log($(window).scrollTop());
		console.log($('#footer').offset().top);
		console.log('---');
	}else{
            $('.target2.img-wrap').removeClass('dp-scrolled-b');			
    }
}
    }); 
	
})(jQuery);