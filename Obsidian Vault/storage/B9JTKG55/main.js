$(document).ready(function() {
	if ($('.snp_slick_slider_home').length) {
		$('.snp_slick_slider_home').slick({
			slidesToScroll: 1,
			slidesToShow: 1,
			adaptiveHeight: false,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			prevArrow: '<button class="arrow prev">Previous</button>',
			nextArrow: '<button class="arrow next">Next</button>'
		});
	}

	if ($('.snp_slick_slider_home_media').length) {
		$('.snp_slick_slider_home_media').slick({
			slidesToScroll: 3,
			slidesToShow: 3,
			adaptiveHeight: false,
			autoplay: false,
			dots: false,
			prevArrow: '<button class="arrow prev">Previous</button>',
			nextArrow: '<button class="arrow next">Next</button>',
			responsive: [{
					breakpoint: 992,
					settings: {
						slidesToScroll: 2,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 1
					}
				}
			]
		});
	}

	if ($('.tag_related_slick_slider').length) {
		$('.tag_related_slick_slider').slick({
			slidesToScroll: 4,
			slidesToShow: 4,
			adaptiveHeight: false,
			dots: false,
			prevArrow: '<button class="arrow prev">Previous</button>',
			nextArrow: '<button class="arrow next">Next</button>',
			responsive: [{
					breakpoint: 992,
					settings: {
						slidesToScroll: 3,
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToScroll: 2,
						slidesToShow: 2
					}
				}
			]
		});
	}

	/**
	 * @Description A custom infinite ajax scroller based on slickSlider.js used on all the landing pages
	 * @author: Martijn
	 * TODO: Herschrijf dit naar een functie.
	 */
	if ($('.more_slick_slider').length) {
		$('.more_slick_slider').on('init reInit afterChange', function(event, slick, currentSlide) {
			var firstSlide = (currentSlide ? currentSlide : 0);
			// console.log(slick.slideCount, currentSlide);
			if (currentSlide + 3 >= slick.slideCount) {
				$('.arrow.down').addClass('disabled');
			} else {
				$('.arrow.down').removeClass('disabled');
			}

			if (firstSlide === 0) {
				$('.arrow.up').addClass('disabled');
			} else {
				$('.arrow.up').removeClass('disabled');
			}
		});

		$('.more_slick_slider').slick({
			slidesToShow: 3,
			slidesToScroll: 2,
			infinite: false,
			dots: false,
			vertical: true,
			verticalSwiping: true,
			arrows: false
		});

		$('.arrow.up').click(function() {
			$('.more_slick_slider').slick('slickPrev');
		});

		$('.arrow.down').click(function() {
			$('.more_slick_slider').slick('slickNext');
		});
		// grab n set url for next page [pagination] P10
		var next = $('.pagination-infinite-scroll .next a').attr("href");
		var i = 0;
		$('.more_slick_slider').on('afterChange', function(event, slick, currentSlide) {
			if (currentSlide + i + 4 == slick.slideCount) {

				if (next) {
					$('.more_slick_slider').slick('slickAdd', '<div class="col-xs-12 col-sm-7 col-md-6 col-md-offset-6 col-md-offset-5"><div class="loading-slides fadeIn">Loading more...</div></div');
					i++;
					$.get(next, function(data) {
						var content = $(data).find('.more_slick_slider > div');
            // get number of loaded slides
						var n = $(content).length;
            // load x more.
						slick.slideIndex + n;
						$('.more_slick_slider').slick('slickAdd', $(data).find('.more_slick_slider > div')).slick('reinit');
						$('.loading-slides').text('');
						// grab n set url for next page [pagination] P20, P30 ....
						next = $(data).find('.pagination-infinite-scroll .next a').attr("href");
						// reset observer for lazy loading the next image (added 01-08-19)
						var observer = lozad();
						observer.observe();
					});
				}
			}
		});
	}

	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		$(".slick-active .animated").each(function() {
			$(this).addClass($(this).data("animation"));
			// see window load at bottom for trigger first slide
		});
	});

	$(function() {
		$(".dropdown-large .nav-pills").off('click.bs.tab.data-api', '[data-hover="tab"]');
		$(".dropdown-large .nav-pills").on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() {
			// $(".dropdown-large .nav-pills").tab('show'); // nav-pills-nav //
			$(this).tab('show'); // nav-pills-nav //
		});
	});

	// check and make human readable date if updated under a day
	var now = moment();
	$('.last_edit_js').each(function(i, e) {
		var time = moment($(e).attr('datetime'));
		if (now.diff(time, 'days') <= 1) {
			$(e).html('updated ' + time.from(now));
		} else {
			$(e).css("display", "none");
		}
	});


	if (!('ontouchstart' in window)) {
		$('[data-toggle="tooltip"]').tooltip();
	}

	// Enable smooth scrolling on all links with anchors
	$('a[href^="#"].in-this-article, a[href^="#"].back-to-top').on('click', function(e) {
		// prevent default anchor click behavior
		e.preventDefault();
		// store hash
		var hash = this.hash;
		// animate
		if (hash) {
			$('html, body').animate({
				scrollTop: $('a[name="' + this.hash.replace('#', '') + '"]').offset().top
			}, 600, function() {
				// when done, add hash to url
				// (default click behaviour)
				window.location.hash = hash;
			});
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('#back-to-top').fadeIn(300);
		} else {
			$('#back-to-top').fadeOut(300);
		}
	});

	// make tables responsive and add styling
	$(".content table").each(function() {
		$(this).wrap("<div class='table-responsive'></div>");
		$(this).addClass('table');
	});

	// Infinite scroll
	// TODO: ruim dit op en zoek uit of dit nog ergens voor gebruikt wordt?

	if ($('.container-infinite-scroll').length) {
		var ias = $.ias({
			container: '.container-infinite-scroll',
			item: '.item-infinite-scroll',
			pagination: 'ul.pagination-infinite-scroll',
			next: '.next a',
			delay: '250'
		});
		ias.extension(new IASTriggerExtension({
			html: '<div class="container"><div class="row no-gutters up-next"><div class="col-sm-10 col-sm-offset-2 heading"><a class="btn btn-primary" style="cursor: pointer;"><i class="fa fa-plus"></i> Load next snap</a></div><div class="col-sm-12 border"></div></div></div>',
			offset: '10'
		}));
		ias.extension(new IASSpinnerExtension({
			html: '<div class="container"><div class="row no-gutters up-next"><div class="col-sm-10 col-sm-offset-2 heading"><i class="fa fa-refresh fa-spin fa-fw"></i></div><div class="col-sm-12 border"></div></div>'
		}));

		ias.on('rendered', function(items) {
			var $items = $(items);
			SocialShareKit.init();
		});
	}

	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
});

SocialShareKit.init();

// lazy load observer, lozad.js
const observer = lozad('.lozad', {
	rootMargin: '250px 50px', // syntax similar to that of CSS Margin
	threshold: 0.1 // ratio of element convergence
});

observer.observe();
