/* eslint-disable camelcase */
'use strict';

var $ = jQuery.noConflict(),
	$w = $( window ),
	$b = $( 'body' ),
	$window = $( window ),
	$window_width = $( window ).width(),
	$fullScreenEl = $( '.full-screen' ),
	$body = $( 'body' ),
	$sticky_footer = $body.attr( 'sticky-footer' ),
	$mob_menu_landscape = $body.attr( 'data-show-landscape' ),
	$backToTop = $body.attr( 'data-backtop' ),
	sticky_mob_en = jQuery( '.header' ).attr( 'sticky-mobile-menu' ),
	mobile_header_version = jQuery( '.header' ).attr( 'mobile-design' ),
	$top_bar = $( '.top_nav_out' ),
	$header = $( '.header' ),
	top_bar_height = jQuery( '.top_nav_out' ).outerHeight(),
	$pageTitle = $( '.bellow_header' ),
	resolution = 'yes' === $mob_menu_landscape ? 1024 : 830,
	classRow = 'pi-section-w',
	сlassFixedRow = 'pi-header-row-fixed',
	сlassFixedRows = 'pi-header-rows-fixed',
	сlassFixed = '',
	classReducible = 'header_reduced',
	classReduced = 'pi-row-reduced',
	bodyLayout = $b.attr( 'data-layout' ),
	$stickyHeader = $( '.sticky_h' ),
	$stickyMenu = $( '.sticky_h_menu' ),
	original_logo = jQuery( '.logo .original_logo' ),
	scroll_logo = jQuery( '.scroll_logo' ),
	custom_logo = jQuery( '.logo .custom_logo' ),
	custom_logo_state = jQuery( '.logo' ).attr( 'data-custom-logo' ),
	$reducibleRow = $stickyHeader.find( '.' + classReducible ),
	rowsQuantity = $stickyHeader.find( '.' + classRow ).length,
	reduceTreshold = 400,
	stateFixed = 'default',
	stateReduce = 'default',
	headerTopOffset = 0,
	scrollTop = 0,
	img_logo = jQuery( '#branding .logo img' ).attr( 'src' ),
	header_transparent = jQuery( '.header' ).attr( 'data-transparent' ),
	stk_mob_menu = jQuery( '.header' ).attr( 'sticky-mobile-menu' ),
	header_resize = jQuery( '.header' ).attr( 'data-resize' ),
	resize_factor = jQuery( '.header' ).attr( 'resize-factor' ),
	header_version = jQuery( '.header' ).attr( 'header-version' ),
	header_centered = jQuery( '.header' ).attr( 'data-centered' ),
	logo_resize = jQuery( '.header' ).attr( 'logo-resize' ),
	logo_height = jQuery( '#branding .logo a img' ).attr( 'logo-height' ),
	logo_padTop = jQuery( '#branding .logo' ).css( 'padding-top' ),
	logo_padBot = jQuery( '#branding .logo' ).css( 'padding-bottom' ),
	new_logo_height = '',
	topSocialExpander = '',
	body_margin_top,
	body_padding_top,
	body_border,
	body_out,
	container_out,
	new_logo_padTop,
	min_height,
	new_logo_padBot,
	logo_container_height,
	start_resize,
	scrHeight,
	outerContainerWidth,
	outerContainerHeight,
	innerVideoHeight,
	innerVideoWidth;

/* sticky menu for mobile devices */

function sticky_mobile() {
	var responsive_menu_height = jQuery( '.responsive-menu-link' ).outerHeight(),
		responsive_header_height = jQuery( '.full_header' ).outerHeight(),
		top_bar_out = jQuery( '.top_nav_out' ).outerHeight(),
		classic_menu_height = responsive_header_height + top_bar_out;

	if ( 'yes' == sticky_mob_en ) {
		jQuery( window ).scroll( function() {
			if ( $window_width <= resolution ) {
				scrollTop = jQuery( window ).scrollTop();

				if ( 'modern' != mobile_header_version ) {
					if ( scrollTop >= classic_menu_height ) {
						requestAnimationFrame( function() {
							jQuery( '#responsive_navigation ' ).addClass( 'sticky_mobile' );
							jQuery( '#wrapper' ).css( 'padding-top', responsive_menu_height );
						});
					} else {
						requestAnimationFrame( function() {
							jQuery( '#responsive_navigation' ).removeClass( 'sticky_mobile' );
							jQuery( '#wrapper' ).css( 'padding-top', '' );
						});
					}
				} else {
					if ( scrollTop >= top_bar_out ) {
						jQuery( '.full_header' ).addClass( 'sticky_mobile' );
						jQuery( '#wrapper' ).css( 'padding-top', responsive_header_height );
					} else {
						jQuery( '.full_header' ).removeClass( 'sticky_mobile' );
						jQuery( '#wrapper' ).css( 'padding-top', '' );
					}
				}
			}
		});
	}
}

function sticky_header_desktop() {
	var $windowWidth = jQuery( window ).width(),
		header_height = jQuery( '.full_header' ).outerHeight(),
		header_nav_height = jQuery( '#navigation' ).outerHeight(),
		static_header_height = jQuery( '.header' ).outerHeight(),
		header_inside_left = jQuery( '.header_inside_left' ).outerHeight();

	if ( ! top_bar_height ) {
		top_bar_height = 1;
	}

	if ( ! header_inside_left ) {
		header_inside_left = 0;
	}

	if ( 'boxed' == bodyLayout ) {
		top_bar_height = 0;
		body_margin_top = parseInt( jQuery( '.container' ).css( 'margin-top' ).replace( 'px', '' ) );
		body_padding_top = parseInt( jQuery( '.container' ).css( 'padding-top' ).replace( 'px', '' ) );
		body_border = parseInt( jQuery( '.container' ).css( 'border-top' ).replace( 'px', '' ) );
		body_out = body_margin_top + body_padding_top + body_border;
		top_bar_height = jQuery( '.top_nav_out' ).outerHeight() + body_out;
		container_out = jQuery( '#container' ).outerHeight();
	} else {
		body_margin_top = 0;
	}

	/* Sticky header for non Modern header */


	if ( $stickyHeader.length && $windowWidth > resolution ) {
		scrollTop = $w.scrollTop();
		headerTopOffset += $stickyHeader.offset().top;
		$w.scroll( function() {
			scrollTop = $w.scrollTop();

			if ( $windowWidth > resolution ) {
				jQuery( '.full_header' ).css( 'height', header_height );
			}

			if ( scrollTop >= top_bar_height ) {
				if ( 'default' == stateFixed ) {
					requestAnimationFrame( function() {
						$b.addClass( 'pi-header-row-fixed' );

						if ( 'yes' === header_transparent ) {
							if ( scroll_logo.length ) {
								scroll_logo.removeClass( 'hide_logo' );
								original_logo.addClass( 'hide_logo' );
							}

							jQuery( '.header' ).removeClass( 'header_transparent' );
							jQuery( '#navigation' ).removeClass( 'custom_menu_color' );
						}
					});
					stateFixed = 'fixed';
				}

				/* let's test if we have graphic image so we can resize it, otherwise skip */


				if ( 'yes' == header_resize && null != img_logo ) {
					new_logo_height = logo_height - logo_height * resize_factor;

					if ( 0 < logo_padTop.length ) {
						new_logo_padTop = parseInt( logo_padTop.replace( 'px', '' ) ) * 0.6;
					}

					if ( 0 < logo_padBot.length ) {
						new_logo_padBot = parseInt( logo_padBot.replace( 'px', '' ) ) * 0.6;
					}

					logo_container_height = new_logo_height + new_logo_padTop + new_logo_padBot;
					start_resize = ( static_header_height + top_bar_height ) * 2;

					/* if scroll below 200px threshold, begin resizing */

					if ( 200 <= scrollTop ) {
						jQuery( '#branding .logo a img' ).css( 'height', new_logo_height + 'px' );
						jQuery( '#branding .logo' ).css( 'padding-top', new_logo_padTop ).css( 'padding-bottom', new_logo_padBot );

						if ( 'style2' != header_version && 'yes' != header_centered || 'business' === header_version ) {
							jQuery( '#navigation > ul, .additional_icons ul, .extra_header_button' ).css( 'height', logo_container_height + 'px' ).css( 'line-height', logo_container_height + 'px' );
							jQuery( '#navigation' ).css( 'margin-top', '0' );
						}
					} else {
						jQuery( '#branding .logo a img' ).css( 'height', logo_height + 'px' );
						jQuery( '#branding .logo' ).css( 'padding-top', logo_padTop ).css( 'padding-bottom', logo_padBot );

						if ( 'style2' != header_version && 'yes' != header_centered || 'business' === header_version ) {
							jQuery( '#navigation > ul, .additional_icons ul, .extra_header_button' ).css( 'height', '' ).css( 'line-height', '' );
							jQuery( '#navigation' ).css( 'margin-top', '' );
						}
					}
				}

				if ( 'true' == custom_logo_state ) {
					custom_logo.removeClass( 'show_logo' ).addClass( 'hide_logo' );
					original_logo.removeClass( 'hide_logo' ).addClass( 'show_logo' );
				}
			} else {
				if ( 'yes' === header_transparent ) {
					if ( scroll_logo.length ) {
						scroll_logo.addClass( 'hide_logo' );
						original_logo.removeClass( 'hide_logo' );
					}

					jQuery( '.header' ).addClass( 'header_transparent' );
					jQuery( '#navigation' ).addClass( 'custom_menu_color' );
				}

				if ( 'fixed' == stateFixed ) {
					requestAnimationFrame( function() {
						$b.removeClass( 'pi-header-row-fixed' );
					});
					stateFixed = 'default';
				}

				if ( 'true' == custom_logo_state ) {
					original_logo.removeClass( 'show_logo' ).addClass( 'hide_logo' );
					custom_logo.removeClass( 'hide_logo' ).addClass( 'show_logo' );
				}
			}
		});
	}
} // php strstr alternative for jquery
// discuss at: http://phpjs.org/functions/strstr/


function strstr( haystack, needle, bool ) {
	var pos = 0;
	haystack += '';
	pos = haystack.indexOf( needle );

	if ( -1 == pos ) {
		return false;
	} else {
		if ( bool ) {
			return haystack.substr( 0, pos );
		} else {
			return haystack.slice( pos );
		}
	}
}

function hide_menu_when_transparent() {
	setTimeout( function() {
		jQuery( '.header_transparent #navigation, .header #navigation' ).addClass( 'is_visible' );
	}, 300 );
}

jQuery( document ).ready( function( $ ) {
	hide_menu_when_transparent();
	var navigation_width = $( '#navigation' ).outerWidth();

	if ( window.innerWidth > resolution ) {

		//find the form and apply the width to it:
		$( '.header_search' ).css( 'width', navigation_width );
	}

	$( function() {
		function top_bar_nav() {
			if ( 1025 > window.innerWidth ) {
				jQuery( '#top-menu > li > ul.sub-menu, #top-menu > li > .woo_login_form' ).addClass( 'remove_css_animation' );
				jQuery( '#top-menu > li.menu-item-has-children > a, #top-menu > li.custom-login-box > a' ).click( function( e ) {
					var $this = $( this );
					e.preventDefault();

					if ( $this.hasClass( 'nav-sub-opened' ) ) {
						$this.parent().find( 'ul.sub-menu, .woo_login_form' ).slideUp( 400 ).end().end().removeClass( 'nav-sub-opened' ).addClass( 'nav-sub-closed' );
					} else {
						$this.parent().find( 'ul.sub-menu, .woo_login_form' ).slideDown( 400 ).end().end().removeClass( 'nav-sub-closed' ).addClass( 'nav-sub-opened' );
					}
				});
			}
		}

		top_bar_nav();

		/* define variables here */

		var win_height,
			win_width,
			container_height,
			admin_bar,
			tb_height,
			full_head_height,
			bellow_header_height,
			content_height,
			content_height_no_css,
			content_height_full_template,
			content_height_full_template_no_css,
			mobile_nav,
			footer_height,
			$root = $( 'html, body' ),
			header_height = jQuery( '.header' ).outerHeight(),
			header_height_admin = jQuery( '#wpadminbar' ).outerHeight(),
			header_resize_test = jQuery( '.header' ).attr( 'data-resize' );

		if ( header_height_admin ) {
			header_height = header_height_admin + header_height;
		}

		if ( null != header_resize_test && 'yes' == header_resize_test ) {
			header_height = header_height / 2;
		}

		function set_containers_values() {
			win_height = window.innerHeight;
			win_width = window.innerWidth;
			container_height = jQuery( '.container' ).outerHeight( true );
			admin_bar = jQuery( '#wpadminbar' ).height();
			tb_height = jQuery( '.top_nav_out' ).outerHeight( true );
			full_head_height = jQuery( '.full_header' ).outerHeight( true );
			bellow_header_height = jQuery( '.bellow_header' ).outerHeight( true );
			content_height = jQuery( '.row' ).outerHeight( true );
			content_height_no_css = jQuery( '.row' ).height();
			content_height_full_template = jQuery( '.row_full' ).outerHeight( true );
			content_height_full_template_no_css = jQuery( '.row_full' ).height();
			mobile_nav = jQuery( '#responsive_navigation' ).height();
			footer_height = jQuery( '.footer' ).height();
			jQuery( '.row_full,.row' ).css( 'min-height', '' );
		}

		/* if we are not on mobile and content is not big enough, than make header appear on footer */


		function bottom_footer() {
			set_containers_values();

			if ( container_height < win_height ) {
				if ( null == content_height ) {
					content_height = content_height_full_template;
					content_height_no_css = content_height_full_template_no_css;
				}

				content_height = null == content_height ? content_height_full_template : content_height;
				min_height = win_height - ( admin_bar + tb_height + full_head_height + mobile_nav + bellow_header_height + footer_height ) - ( content_height - content_height_no_css );
				jQuery( '#wrapper' ).css( 'min-height', min_height );
			}
		}

		function place_footer_on_bottom() {

			/* place footer on bottom of the page */
			bottom_footer();

			/* on screen resize, re-run the variables and the place footer on bottom function*/

			$( window ).resize( function() {
				set_containers_values();
				bottom_footer();
			});
		}

		function modern_title_top_padding() {
			var header_transparent = jQuery( '.header' ).attr( 'data-transparent' ),
				in_header_height = jQuery( '.header' ).outerHeight(),
				add_padding = '';

			if ( 'yes' === header_transparent ) {
				add_padding = in_header_height;
			}

			jQuery( '.design_modern .modern_heading_title_wrap' ).css( 'padding-top', add_padding );
		}

		modern_title_top_padding();

		function post_title_fullscreen() {
			var header_height = jQuery( '.header' ).outerHeight(),
				top_bar_height = jQuery( '.top_nav_out.display_top_bar' ).outerHeight(),
				row_height = jQuery( '.row_full_width' ).attr( 'data-height' ),
				actual_height = '';

			if ( 'fullscreen' === row_height ) {
				actual_height = 'calc(100vh - ' + ( header_height + top_bar_height ) + 'px)';
				jQuery( '.design_modern .modern_heading_title_wrap' ).css( 'min-height', actual_height );
			}
		}

		if ( $body.hasClass( 'single-post' ) ) {
			post_title_fullscreen();
		}

		if ( 'true' == $sticky_footer ) {
			setTimeout( function() {
				place_footer_on_bottom();
				jQuery( '.footer' ).fadeIn( 100 );
			}, 200 );
		}

		jQuery( 'a.jump_links, .jump_links_wrap a' ).on( 'click', function( e ) {
			var href = $.attr( this, 'href' );
			e.preventDefault();
			$root.animate({
				scrollTop: $( $.attr( this, 'href' ) ).offset().top - header_height
			}, 1000 );
			return false;
		});

		/* One Page Navigation Menu logic */

		jQuery( '#one_page_navigation li:first-child a' ).addClass( 'active_menu_item' );
		jQuery( '#one_page_navigation a' ).on( 'click', function() {
			jQuery( '#one_page_navigation a' ).removeClass( 'active_menu_item' );
			$( this ).addClass( 'active_menu_item' );

			if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
				var target = $( this.hash ),
					id = $( this ).attr( 'href' );

				if ( 830 > window.innerWidth ) {
					header_height = 0;
				}

				target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );

				if ( target.length && '#home' != id ) {
					$( 'html,body' ).animate({
						scrollTop: target.offset().top - header_height
					}, 1000 );
					return false;
				} else if ( target.length && '#home' == id ) {
					$( 'html,body' ).animate({
						scrollTop: 0
					}, 1000 );
					return false;
				}
			}
		});

		function responsive_nav() {
			var $body = $( 'body' ),
				$search_holder = $( '.mobile_menu_holder' );
			$( '.responsive-menu-link .hamburger_mobile_menu' ).click( function() {
				if ( $body.hasClass( 'opened-nav' ) ) {
					$body.removeClass( 'opened-nav' ).addClass( 'closed-nav' );
					$search_holder.slideUp( 300 );
				} else {
					$body.removeClass( 'closed-nav' ).addClass( 'opened-nav' );
					$search_holder.slideDown( 300 );
				}
			});
			$( window ).resize( function() {
				if ( window.innerWidth > resolution ) {
					$( '.mobile_menu_holder' ).slideUp( 300 );
					$( 'body' ).removeClass( 'opened-nav' ).addClass( 'closed-nav' );
				}
			});
			$( '#responsive_menu .sf-sub-indicator' ).addClass( 'nav-sub-closed' );

			/* One Page Responsive Menu Logic */

			$( '#responsive_menu.one_page_navigation_mobile li a' ).click( function() {
				var id = $( this ).attr( 'href' );

				if ( '#' !== id ) {
					if ( $body.hasClass( 'opened-nav' ) ) {
						$body.removeClass( 'opened-nav' ).addClass( 'closed-nav' );
						$search_holder.slideUp( 300 );
					}

					if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) && location.hostname == this.hostname ) {
						var target = $( this.hash );
						target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );
						var responsive_menu_height = $( '.responsive-menu-link' ).outerHeight();

						if ( target.length && '#home' != id ) {
							$( 'html,body' ).animate({
								scrollTop: target.offset().top - responsive_menu_height
							}, 1000 );
							return false;
						} else if ( target.length && '#home' == id ) {
							$( 'html,body' ).animate({
								scrollTop: 0
							}, 1000 );
							return false;
						}
					}
				}
			});
			$( '#responsive_menu .sf-sub-indicator' ).on( 'click', function( e ) {
				var $this = $( this );

				if ( $this.hasClass( 'nav-sub-closed' ) ) {
					$this.parent().siblings( 'ul' ).slideDown( 450 ).end().end().removeClass( 'nav-sub-closed' ).addClass( 'nav-sub-opened' );
				} else {
					$this.parent().siblings( 'ul' ).slideUp( 450 ).end().end().removeClass( 'nav-sub-opened' ).addClass( 'nav-sub-closed' );
				}

				e.preventDefault();
			});
		}

		responsive_nav();
		$fullScreenEl.each( function() {
			var element = $( this ),
				topbarHeight = $top_bar.height(),
				adminbarHeight = $( '#wpadminbar' ).height(),
				pagetitleHeight = $pageTitle.height(),
				innerwrap = $( this ).find( '.inner_wrap_margins' ),
				headerHeight = $header.height();

			if ( 'yes' == $header.attr( 'data-transparent' ) ) {
				headerHeight = 0;
			}

			if ( 'off' == $pageTitle.attr( 'data-ptb' ) ) {
				pagetitleHeight = 0;
			}

			scrHeight = $window.height() - ( topbarHeight + adminbarHeight + headerHeight + pagetitleHeight );

			if ( 959 > $( window ).width() ) {
				scrHeight = 'auto';
			} else {
				element.css({
					'height': scrHeight
				});
				innerwrap.css({
					top: ( scrHeight - innerwrap.outerHeight() ) / 2 + 'px',
					position: 'relative'
				});
			}
		});
	});

	if ( $().tipsy ) {
		var nTip = function nTip() {
			$( '.ntip' ).tipsy({
				gravity: 's',
				fade: true
			});
		};

		nTip();
	}

	if ( $().tipsy ) {
		var eTip = function eTip() {
			$( '.etip' ).tipsy({
				gravity: 'e',
				fade: true
			});
		};

		eTip();
	}

	if ( $().tipsy ) {
		var sTip = function sTip() {
			$( '.stip' ).tipsy({
				gravity: 'n',
				fade: true
			});
		};

		sTip();
	}

	function side_panels() {
		$( '.side-panel-trigger' ).click( function() {
			$body.toggleClass( 'side-panel-open' );

			if ( $body.hasClass( 'device-touch' ) ) {
				$body.toggleClass( 'ohidden' );
			}

			return false;
		});
		$( document ).on( 'click', function( event ) {
			if ( ! $( event.target ).closest( '#side-panel' ).length ) {
				$body.toggleClass( 'side-panel-open', false );
			}
		});
	}

	side_panels();

	function html_video() {
		var videoEl = $( '.video-bg:has(video)' );

		if ( 0 < videoEl.length ) {
			videoEl.each( function() {
				var element = $( this ),
					elementVideo = element.find( 'video' ),
					placeholderImg = element.attr( 'poster' );
				outerContainerWidth = element.outerWidth(), outerContainerHeight = element.outerHeight(), // inaltime .video-bg
				innerVideoWidth = elementVideo.outerWidth(), innerVideoHeight = elementVideo.outerHeight(); //inaltime video tag
				//var placeholderImg = elementVideo.attr( 'poster' );

				if ( '' != placeholderImg && 830 > window.innerWidth ) {
					element.append( '<div class="video-placeholder" style="background-image: url(' + placeholderImg + ');"></div>' );
				}
			});
		}
	}

	html_video();

	function header_search() {
		$( '#header-search' ).click( function( e ) {
			$body.toggleClass( 'hs-open' );

			if ( $body.hasClass( 'hs-open' ) ) {
				$( '#navigation form.header_search' ).find( 'input' ).focus();
			}

			e.stopPropagation();
			e.preventDefault();
		});
	}

	header_search(); // Scroll to Top

	if ( $( window ).width() > parseInt( $backToTop ) ) {
		$( window ).scroll( function() {
			if ( 450 < $( this ).scrollTop() ) {
				$( '#gotoTop' ).fadeIn();
			} else {
				$( '#gotoTop' ).fadeOut();
			}
		});
		$( '#gotoTop' ).click( function() {
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 400 );
			return false;
		});
	}

	if ( 'yes' === header_transparent ) {
		jQuery( '.header' ).addClass( 'header_transparent' );
		jQuery( '#navigation' ).addClass( 'custom_menu_color' );
	}

	$( window ).on( 'load resize', function( e ) {
		$window_width = $( window ).width();
		setTimeout( function() {
			sticky_header_desktop();

			if ( $window_width <= resolution ) {
				sticky_mobile();
			}
		}, 200 );
	});

	/* modern menu sticky header */

	if ( $stickyMenu.length && $window_width > resolution ) {
		if ( 'boxed' == bodyLayout ) {
			body_margin_top = jQuery( '.container' ).css( 'margin-top' );
			body_margin_top = body_margin_top.replace( 'px', '' );
			top_bar_height = top_bar_height + parseInt( body_margin_top );
		} else {
			body_margin_top = 0;
		}

		scrollTop = $w.scrollTop();
		headerTopOffset += $stickyMenu.offset().top;
		$w.scroll( function() {
			scrollTop = $w.scrollTop();
			var header_height = jQuery( '.full_header' ).outerHeight();

			if ( $window_width > resolution ) {
				jQuery( '.header_area' ).css( 'height', header_height );
			}

			var modern_menu_height = jQuery( '.second_navi' ).outerHeight(),
				header_wrap = jQuery( '.header_wrap ' ).outerHeight(),
				height_to_modern_header = header_wrap + top_bar_height + parseInt( body_margin_top );

			if ( scrollTop > height_to_modern_header ) {
				if ( 'default' == stateFixed ) {
					requestAnimationFrame( function() {
						$b.addClass( 'pi-header-row-fixed' );
					});
					stateFixed = 'fixed';
				}
			} else {
				if ( 'fixed' == stateFixed ) {
					requestAnimationFrame( function() {
						$b.removeClass( 'pi-header-row-fixed' );
					});
					stateFixed = 'default';
				}
			}
		});
	}
});

topSocialExpander = function topSocialExpander() {
	var windowWidth = jQuery( window ).width();

	if ( 767 < windowWidth ) {
		jQuery( '#style_selector' ).show();
	} else {
		jQuery( '#style_selector' ).hide();
	}
};

topSocialExpander();
jQuery( window ).resize( function() {
	topSocialExpander();
});
