jQuery(document).ready(function(){

	// ----- loader ----
	
	jQuery(window).load(function() {
	    jQuery(".loader").fadeOut("slow");
	});


	// -------- back to top ----------
	
	var body = jQuery("body");//cache 
	jQuery(".back-to-top").click(function(){
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	// ------------ modal close --------------

	jQuery(".modal .close").click(function(){
		jQuery(".modal").css('display', 'none');
		jQuery('#videoModal').find('iframe').attr('src', '');
		body.css('overflow', 'auto');
	});

	jQuery(window).on('click',function(event){
		if(event.target.id == 'votdModal'){
	        jQuery('#votdModal').css({display: "none"});
	    }	

	    if (event.target.id == 'videoModal'){
	        jQuery('#videoModal').css('display', 'none').find('iframe').attr('src', '');
	        body.css('overflow', 'auto');
	    }
	});

	// ------- bible verse -----------

	jQuery(".bible-verse img").click(function(){
		jQuery("#votdModal").css('display', 'block');
	});


	function showBibleVerse(json) {
		var votd = jQuery(".votd");
		jQuery.each(json, function(key, value){
			votd.find(".content").html(value.content);
			votd.find(".reference").html(value.reference);
			votd.find(".version").html(value.version + "("+ value.version_id +")");
		});
	}


	jQuery.ajax({
		url: '//www.biblegateway.com/votd/get/?format=json&version=KJV' , 
	    dataType: 'jsonp',
	    async: false,
	    success: function(json) { 
	     	if (json != null) {
				showBibleVerse(json);
			}
	     }
	});

	// ------ comment on single page ----------

	jQuery(".show-comments").click(function(){
		jQuery(".comments-section").css('display', 'block');
	});

	// ----- changing of hash while scrolling ----------

	jQuery(function () {
	    var currentHash = "";
	    jQuery(document).scroll(function () {
	        jQuery('.hash').each(function () {
	            var top = window.pageYOffset,
	            distance = top - jQuery(this).offset().top,
	            hash = jQuery(this).attr('rel');
	          
	            if (distance < 30 && distance > -30 && currentHash != hash) {
	           
	                currentHash = hash;
	                window.history.pushState("", "", hash);
	            }
	        });
	    });
	});

	// -------- video overlay -----

	jQuery(".play-button").live('click', function(){
		youtubeID = jQuery(this).data('youtubeid');
		videoSrc = "https://www.youtube.com/embed/"+youtubeID;
		jQuery("#videoModal iframe").attr('src', videoSrc);

		jQuery("#videoModal").css('display', 'block');
		body.css('overflow', 'hidden');
	});

	// ------- responsive menu ------------

	jQuery('#responsive-menu-button').sidr({
      	name: 'sidr-main',
      	source: '#navigation'
    });

	jQuery('#more-menu-button').sidr({
      	name: 'sidr-main-explore',
      	source: '#explore-untv'
    });


	// ------- sticky header menu -------

	function sticktothetop() {
	    var window_top = jQuery(window).scrollTop(),
	    	top = jQuery('#stick-here').offset().top;
	    if (window_top > top) {
	        jQuery('#sticky-menu').addClass('stick');
	        jQuery('#stick-here').height(jQuery('#sticky-menu').outerHeight());
	    } else {
	        jQuery('#sticky-menu').removeClass('stick');
	        jQuery('#stick-here').height(0);
	    }
	}
	jQuery(function() {
	    jQuery(window).scroll(sticktothetop);
	    sticktothetop();
	});


	// --------- flexslider homepage ------------

	jQuery(window).load(function() {
	  	jQuery('#carousel').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    itemWidth: 175,
		    itemMargin: 5,
		   // asNavFor: '#slider',
		    slideshow: false
		  });
		 
		jQuery('#slider').flexslider({
		    animation: "fade",
		    controlNav: false,
		    animationLoop: false,
		    //sync: "#carousel",
		    slideshow: false
		});
	});

	// --------- slider for photos ----------

	jQuery('.flexslider.photos').flexslider({
	    animation: "fade",
	    slideshow: false
	});

	// --------- video homepage flexslider -------

	(function() {
 
	  // store the slider in a local variable
	  var $window = jQuery(window),
	      flexslider = { vars:{} };
	 
	  // tiny helper function to add breakpoints
	  function getGridSize() {
	    return (window.innerWidth < 600) ? 2 :
	           (window.innerWidth < 900) ? 3 : 4;
	  }
	
	 
	  $window.load(function() {
	    jQuery('#videoSlider').flexslider({
	      animation: "slide",
	      animationLoop: false,
	      itemWidth: 210,
	      itemMargin: 30,
	      slideshow: false,
	      minItems: getGridSize(), // use function to pull in initial value
	      maxItems: getGridSize() // use function to pull in initial value
	    });
	  });
	 
	  // check grid size on resize event
	  $window.resize(function() {
	    var gridSize = getGridSize();
	 
	    flexslider.vars.minItems = gridSize;
	    flexslider.vars.maxItems = gridSize;
	  });

	}());

	// -------- add video wrapper on embedded iframes -----------

	jQuery(".entry").find("iframe").wrap("<div class='videoWrapper'></div>");

	// -------- get video feed ----------

	function YTDurationToSeconds(duration) {
	  	var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/),
	  		hours = (parseInt(match[1]) || 0),
	  		minutes = (parseInt(match[2]) || 0),
	  		seconds = (parseInt(match[3]) || 0);

	  	if (hours == 0) {
	  		hours = "";
	  	} else {
	  		if (hours < 10) {hours   = "0"+hours+":";}
	  	}
	   
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}

	  	return hours + minutes + ":" + seconds;
	}

	function showNewsVideos(json) {
		var count = 1, html ="";

		if (json == null) {
			return false;
	    }

		jQuery.each(json, function(key, value) {
			var title = value.title,
				link = value.post_link,
				videoID = value.video_id,
				thumb = "//img.youtube.com/vi/"+videoID+"/hqdefault.jpg";

				if (count <= 10) {

					html += '<li><div class="image-flex">';
					html += '<div class="relative">';
					html += '<img src="'+thumb+'">';
					html += '<img src="wp-content/themes/news-2019/images/play.png" class="play-button" data-youtubeID="'+videoID+'">';
					html += '</div>';
					html += '<a href="'+link+'" target="_blank"> <h3 class="mtop2 title white medium">'+title+'</h3></a>';
					html += '<p class="meta gray"> UNTV News </p>';
					html += '</div></li>';

					// with video time duration

					// var duration = "";
					// var api = "https://www.googleapis.com/youtube/v3/videos?id="+videoID+"&part=contentDetails&key=AIzaSyCXVnoXHTmCtOBx4HEdaX1KErFlyNc2MII"; // UNTV acct used for getting API Key

					// jQuery.ajax({
					// 	url: api , 
					//     dataType: 'jsonp',
					//     async: false,
					//     success: function(json) { 
					//      	if (json != null) {
					// 			jQuery.each(json.items, function(key, value) {
					// 				duration = YTDurationToSeconds(value.contentDetails.duration);

					// 				html += '<li><div class="image-flex">';
					// 				html += '<div class="relative">';
					// 				html += '<img src="'+thumb+'">';
					// 				html += '<img src="wp-content/themes/news-2019/images/play.png" class="play-button" data-youtubeID="'+videoID+'">';
					// 				html += '</div>';
					// 				html += '<a href="'+link+'" target="_blank"> <h3 class="mtop2 title white medium">'+title+'</h3></a>';
					// 				html += '<p class="meta gray">'+duration+' mins &nbsp; &bull; &nbsp; UNTV News </p>';
					// 				html += '</div></li>';
					// 			});
					// 		} jQuery("#videoSlider .slides").html(html);
					//     }
					// });

				count++;

			}
		});

			jQuery("#videoSlider .slides").html(html);
	}
			
	jQuery.ajax({
		url: "//www.untvweb.com/api/programs/get_video/" , 
	    dataType: 'jsonp',
	    async: false,
	    success: function(json) { 
	     	if (json != null) {
				showNewsVideos(json.programs[0]);
			}
	     }
	});

	// ------- breaking news ticker ------------

	(function(jQuery) {
		jQuery.fn.dropdown = function(opts) {
			var config = jQuery.extend({}, { 
	            fadeInTime: 800,
	            fadeOutTime: 800,
	            interval: 5600
	        }, opts);

			function init(obj) {
	            var dNewsticker = obj,
	            	dFrame = dNewsticker.find('.js-frame'),
	            	dItem = dFrame.find('.js-item'),
	            	dCurrent,
	            	stop = false;

	            dItem.eq(0).addClass('current').show();
	            
	            var move = setInterval(function(){
	                if(!stop){
	                    dCurrent = dFrame.find('.current');
	                    dCurrent.fadeOut(config.fadeOutTime, function(){
	                        if(dCurrent.next().length !== 0){
	                            dCurrent.removeClass('current').next().addClass('current').fadeIn(config.fadeInTime);
	                        }
	                        else{
	                            dCurrent.removeClass('current');
	                            dItem.eq(0).addClass('current').fadeIn(config.fadeInTime);
	                        }
	                    });
	                }
	            }, config.interval);
	            
	            dNewsticker.on('mouseover mouseout', function(e){
	                if(e.type == 'mouseover'){
	                    stop = true;
	                }
	                else{
	                    stop = false;
	                }
	            });
	        }

			this.each(function() {
				init(jQuery(this));
			});
			return this;
		};

		jQuery(function() {
			jQuery('.js-newsticker').dropdown();
		});
	})(jQuery);
});