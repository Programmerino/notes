(function($) {
	$(document).ready(function(){
	   // Init Widgets
	   InitStockTicker();
	   // Featured Video Player
	   InitFeaturedVideoPlayer();
	   // Init Glossary
	   // InitGlossary();
	});

	// Build FW Stock Ticker
	function InitStockTicker(){
		$('.fw-ticker-inner').addClass('active');
		$('.fw-ticker-inner').width($('#first-ticker').width());

		var $activeTooltip;

		// setTimeout(function(){ $('.fw-ticker-inner').addClass('pause');}, 3000);


		// Pause ticker on hover events
		$(document).on('mouseenter', '.fw-ticker-inner', function(){
			$(this).addClass('pause');
		}).on('mouseleave', '.fw-ticker-inner', function(e){
			if(!$(e.toElement).hasClass('tooltip')){
	            $(this).removeClass('pause');
	        }

		// Enable pause/play controls for ticker
		}).on('click', '.fw-ticker-controls', function(){
			$('.fw-ticker-inner').toggleClass('hard-pause');
			if ($(this).find('.fa').hasClass('fa-pause')) {
				$(this).find('.fa').removeClass('fa-pause').addClass('fa-play');
			}
			else{
				$(this).find('.fa').removeClass('fa-play').addClass('fa-pause');
			}

		// Enable tooltip on hover of tickers
		}).on('mouseenter', '.fw-ticker', function(){
			// $activeTooltip = $('.fw-ticker-content .tooltip');

			// if($activeTooltip.length > 0){
			// 	$activeTooltip.html('<div class="content"><p>'+$(this).data('description')+'</p><a href="'+$(this).data('documentation_url')+'">Learn More</a></div>');
			// }
			// else{
			// 	$('.fw-ticker-content').append('<div class="tooltip"><div class="content"><p>'+$(this).data('description')+'</p><a href="'+$(this).data('documentation_url')+'">Learn More</a></div></div>')
			// 	$activeTooltip = $('.fw-ticker-content .tooltip');
			// }

			// $leftOffset = $(this).offset().left;
			// $tickerWidth = $(this).outerWidth();
			// $tooltipWidth = $('.fw-ticker-content .tooltip').outerWidth();
			// $finalOffset = (($leftOffset - ($tooltipWidth - $tickerWidth)) - 4);

			// $tickerWidgetWidth = $('.fw-ticker-widget').outerWidth();

			// if($finalOffset < 0){
			// 	$activeTooltip.css({'left': '0px'});
			// }
			// else if(($finalOffset + $tooltipWidth) > $tickerWidgetWidth){
			// 	$activeTooltip.css({'left':($tickerWidgetWidth - $tooltipWidth)+'px'});
			// }
			// else{
			// 	$activeTooltip.css({'left': $finalOffset+'px'});
			// }

			// console.log('Offset: '+$leftOffset);
			// console.log('Width: '+$tickerWidth);
			// console.log('Tooltip Width: '+$tooltipWidth);
			// console.log('Final: '+$finalOffset+'px');

			// // $tickerWidgetLeft = $('.fw-ticker-widget').offset().left;
			

			// // console.log('Ticker Left: '+$tickerWidgetLeft);
			// console.log('Ticker Width: '+$tickerWidgetWidth);

			


		}).on('mouseleave', '.fw-ticker-inner', function(e){
			if(!$(e.toElement).hasClass('tooltip')){
	            // $activeTooltip.remove();
	            // $('.fw-ticker-inner').removeClass('pause');
	        }
		}).on('mouseleave', '.fw-ticker-content .tooltip', function(e){
			// $activeTooltip.remove();
			// $('.fw-ticker-inner').removeClass('pause');
		});
	}

	// Load Featured Video Player
	function InitFeaturedVideoPlayer(){
		$.each($('.featured-videos-player'), function(index, item){
			var $firstVideoType = $(item).find('.video-list .video-listing:first-child').data('video-type');
			var $firstVideoURL = $(item).find('.video-list .video-listing:first-child').data('video-url');
			$('.featured-videos-player .video-player').html(GetVideoIFrame($firstVideoType, $firstVideoURL));
		});

		$(document).on('click', '.video-listing', function(){
			var $video_url = $(this).data('video-url');
			var $video_type = $(this).data('video-type');			

			$(this).closest('.featured-videos-player').find('.tie-fluid-width-video-wrapper').html(GetVideoIFrame($video_type, $video_url));
			$(this).closest('.featured-videos-player').find('.current-video-index').html($(this).find('.video-index').data('index'));
		});

		// Setup scrollbar
		var featVideoPlayers = $(".featured-videos-player .video-list").overlayScrollbars({
			scrollbars : {
				visibility       : "auto",
				autoHide		 : "leave",
				autoHideDelay    : 800,
				dragScrolling    : true,
				clickScrolling   : false,
				touchSupport     : true,
				snapHandle       : false
			},
		}).overlayScrollbars();
	}

	// Featured video player click event handler for list items
	function GetVideoIFrame($video_type, $video_url){
		switch($video_type){
			case 'youtube':
				var $iframe = '<iframe class="video-frame" id="featured-video-player" src="'+$video_url+'?enablejsapi=1&amp;rel=0&amp;showinfo=0" width="771" height="434" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" async="" style="visibility: visible;" data-video-ready=""></iframe>';
				break;
			case 'vimeo':
				var $iframe = '<iframe id="featured-video-player" title="vimeo-player" src="'+$video_url+'" width="640" height="360" frameborder="0" allowfullscreen></iframe>';
				break;
			default:
				break;
		}

		return $iframe;
	}

	// Glossary Ajax Loading 
	function InitGlossary(){
		// var filters = [
		// 	'glossaryIndex' => $('.glossary').data('scroll-index'),
		// 	'termFilter' => location.hash.substring(1,location.hash.length),
		// 	'loadCount' => 1
		// ];
		
		// if(filters['termFilter'] == null || filters['termFilter'] == ''){
		// 	filters['termFilter'] = 'ALL';
		// }

		// $(window).on('hashchange', function() {
		// 	filters['termFilter'] = location.hash.substring(1,location.hash.length);
		// 	UpdateGlossaryTerms(filters, true);
		// });

		// $(document).on('click', '.load-more', function(e){
		// 	e.preventDefault();
		// 	e.stopPropagation();

		// 	UpdateGlossaryTerms(filters);
		// });

		// Check scroll load more from data set

		// Check hash change, load new data set

	}

	function UpdateGlossaryTerms(filters, refresh = false){
		if(refresh){
			$('.glossary-list').html('<div class="loading-placeholder">LOADING...</div>');
		}
		else{
			$('.glossary-list').append('<div class="loading-placeholder">LOADING...</div>');
		}

		$.ajax({
			type : "POST",
     		dataType : "json",
     		url : "/wp-admin/admin-ajax.php",
     		data : {action: "get_glossary_terms", termFilter: termFilter, glossaryIndex: 0},
     		success: function(response) {
     			var data = JSON.parse(response);
				console.log(data);
				if(data != ''){
					$('.glossary-list .loading-placeholder').remove();
					if(refresh){
						$('.glossary').attr('data-scroll-index', loadCount - 1);
						glossaryIndex = loadCount - 1;
						$('.glossary-list').html(data['markup']);
					}
					else{
						$('.glossary').attr('data-scroll-index', glossaryIndex + loadCount);
						glossaryIndex = glossaryIndex + loadCount;
						$('.glossary-list').append(data['markup']);
					}

					if(data['list_complete']){
						$('.glossary + .load-more').hide();
					}
					else{
						$('.glossary + .load-more').show();
					}
				}
			}
		});
	}
})(jQuery);