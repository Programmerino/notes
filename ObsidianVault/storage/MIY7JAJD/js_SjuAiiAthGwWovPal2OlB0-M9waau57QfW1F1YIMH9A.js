(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cc_modernizr = {
    attach: function(context, settings) {
      var testing = false; // Set true to run all fallbacks. False for prod.
      // Replace svg imgs with PNGs.
      if (!Modernizr.svgasimg || testing) {
        $("img[src$='.svg']").each(function(index, el) {
          el.src = el.src.replace('.svg','.png');
        });
      }
      if (!Modernizr.flexbox || testing) {
        flexibility(document.documentElement);
      }
    }
  };

})(jQuery, Drupal, this, this.document);;
(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cc_megamenu = {
    attach: function(context, settings) {

      // Add an extra close bottom on bottom
      $('#block-menu-menu-main-menu-expanded').append('<a href="#" class="cc-header-logo-block__menu-link cc-header-logo-block__menu-link-last">');

      function toggleMegamenu (closeRequested) {
        var closeRequested = closeRequested || false;
        var megamenuStateEl = $('body');
        var isOpen = $(megamenuStateEl).hasClass('cc-megamenu__js-open');
        //this is hit for the click, ie on mobile
        if (isOpen || closeRequested) {
          $(megamenuStateEl).removeClass('cc-megamenu__js-open');
        }
        else {
          $(megamenuStateEl).addClass('cc-megamenu__js-open');
        }
      }

      $('.cc-megamenu__outer-wrapper .cc-header-logo-block__menu-link').unbind("click").click(function(e) {
        e.preventDefault();
        toggleMegamenu();
      });

      $('.cc-megamenu__overlay').unbind("click").click(function(e) {
        e.preventDefault();
        toggleMegamenu(true); //Request close if clicking on overlay
      });

      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // Close on escape key press.
          toggleMegamenu(true);
        }
      });

      // Make the little plus signs not clickable on suspected touchscreens.
      // $('html.touchevents .cc-megamenu-links__link--title').click(function(e) {
      //   // This var tests for the presence of the +/- symbol in the after element.
      //   var hasPlusMinus = (window.getComputedStyle(
      //     document.querySelector('.cc-megamenu-links__link--title'), ':after'
      //   ).getPropertyValue('background-image') !== 'none');
      //   if (hasPlusMinus) {
      //     e.preventDefault();
      //   }
      // });

    }
  };
})(jQuery, Drupal, this, this.document);;
/*!
 * LABELAUTY jQuery Plugin
 *
 * @file: jquery-labelauty.js
 * @author: Francisco Neves (@fntneves)
 * @site: www.francisconeves.com
 * @license: MIT License
 */

(function( $ ){

	$.fn.labelauty = function( options )
	{
		/*
		 * Our default settings
		 * Hope you don't need to change anything, with these settings
		 */
		var settings = $.extend(
		{
			// Development Mode
			// This will activate console debug messages
			development: false,

			// Trigger Class
			// This class will be used to apply styles
			class: "labelauty",

			// Use text label ?
			// If false, then only an icon represents the input
			label: true,

			// Separator between labels' messages
			// If you use this separator for anything, choose a new one
			separator: "|",

			// Default Checked Message
			// This message will be visible when input is checked
			checked_label: "Checked",

			// Default UnChecked Message
			// This message will be visible when input is unchecked
			unchecked_label: "Unchecked",

			// Force random ID's
			// Replace original ID's with random ID's,
			force_random_id: false,

			// Minimum Label Width
			// This value will be used to apply a minimum width to the text labels
			minimum_width: false,

			// Use the greatest width between two text labels ?
			// If this has a true value, then label width will be the greatest between labels
			same_width: true
		}, options);

		/*
		 * Let's create the core function
		 * It will try to cover all settings and mistakes of using
		 */
		return this.each(function()
		{
			var $object = $( this );
			var selected = $object.is(':checked');
			var type = $object.attr('type');
			var use_labels = true;
			var labels;
			var labels_object;
			var input_id;

			//Get the aria label from the input element
			var aria_label = $object.attr( "aria-label" );

			// Hide the object form screen readers
			$object.attr( "aria-hidden", true );

			// Test if object is a check input
			// Don't mess me up, come on
			if( $object.is( ":checkbox" ) === false && $object.is( ":radio" ) === false )
				return this;

			// Add "labelauty" class to all checkboxes
			// So you can apply some custom styles
			$object.addClass( settings.class );

			// Get the value of "data-labelauty" attribute
			// Then, we have the labels for each case (or not, as we will see)
			labels = $object.attr( "data-labelauty" );

			use_labels = settings.label;

			// It's time to check if it's going to the right way
			// Null values, more labels than expected or no labels will be handled here
			if( use_labels === true )
			{
				if( labels == null || labels.length === 0 )
				{
					// If attribute has no label and we want to use, then use the default labels
					labels_object = new Array();
					labels_object[0] = settings.unchecked_label;
					labels_object[1] = settings.checked_label;
				}
				else
				{
					// Ok, ok, it's time to split Checked and Unchecked labels
					// We split, by the "settings.separator" option
					labels_object = labels.split( settings.separator );

					// Now, let's check if exist _only_ two labels
					// If there's more than two, then we do not use labels :(
					// Else, do some additional tests
					if( labels_object.length > 2 )
					{
						use_labels = false;
						debug( settings.development, "There's more than two labels. LABELAUTY will not use labels." );
					}
					else
					{
						// If there's just one label (no split by "settings.separator"), it will be used for both cases
						// Here, we have the possibility of use the same label for both cases
						if( labels_object.length === 1 )
							debug( settings.development, "There's just one label. LABELAUTY will use this one for both cases." );
					}
				}
			}

			/*
			 * Let's begin the beauty
			 */

			// Start hiding ugly checkboxes
			// Obviously, we don't need native checkboxes :O
			$object.css({ display : "none" });

			// We don't need more data-labelauty attributes!
			// Ok, ok, it's just for beauty improvement
			$object.removeAttr( "data-labelauty" );

			// Now, grab checkbox ID Attribute for "label" tag use
			// If there's no ID Attribute, then generate a new one
			input_id = $object.attr( "id" );

			if( settings.force_random_id || input_id == null || input_id.trim() === "")
			{
				var input_id_number = 1 + Math.floor( Math.random() * 1024000 );
				input_id = "labelauty-" + input_id_number;

				// Is there any element with this random ID ?
				// If exists, then increment until get an unused ID
				while( $( input_id ).length !== 0 )
				{
					input_id_number++;
					input_id = "labelauty-" + input_id_number;
					debug( settings.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again." );
				}

				$object.attr( "id", input_id );
			}

			// Now, add necessary tags to make this work
			// Here, we're going to test some control variables and act properly

			var element = jQuery(create( input_id, aria_label, selected, type, labels_object, use_labels ))

			element.click(function(){
				if($object.is(':checked')){
					$(element).attr('aria-checked', false);
				}else{
					$(element).attr('aria-checked', true);
				}
			});

			element.keypress(function(event){
				event.preventDefault();
				if(event.keyCode === 32 || event.keyCode === 13){
					if($object.is(':checked')){
						$object.prop('checked', false);
						$(element).attr('aria-checked',false);
					}else{
						$object.prop('checked', true);
						$(element).attr('aria-checked', true);
					}
				}
			})

			$object.after(element);

			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if( settings.minimum_width !== false )
				$object.next( "label[for=" + input_id + "]" ).css({ "min-width": settings.minimum_width });

			// Now, add "min-width" to label
			// Let's say the truth, a fixed width is more beautiful than a variable width
			if( settings.same_width != false && settings.label == true )
			{
				var label_object = $object.next( "label[for=" + input_id + "]" );
				var unchecked_width = getRealWidth(label_object.find( "span.labelauty-unchecked" ));
				var checked_width = getRealWidth(label_object.find( "span.labelauty-checked" ));

				if( unchecked_width > checked_width )
					label_object.find( "span.labelauty-checked" ).width( unchecked_width );
				else
					label_object.find( "span.labelauty-unchecked" ).width( checked_width );
			}
		});
	};

	/*
	 * Tricky code to work with hidden elements, like tabs.
	 * Note: This code is based on jquery.actual plugin.
	 * https://github.com/dreamerslab/jquery.actual
	 */
	function getRealWidth( element )
	{
		var width = 0;
		var $target = element;
		var style = 'position: absolute !important; top: -1000 !important; ';

		$target = $target.clone().attr('style', style).appendTo('body');
		width = $target.width(true);
		$target.remove();

		return width;
	}

	function debug( debug, message )
	{
		if( debug && window.console && window.console.log )
			window.console.log( "jQuery-LABELAUTY: " + message );
	};

	function create( input_id, aria_label, selected, type, messages_object, label )
	{
		var block;
		var unchecked_message;
		var checked_message;
		var aria = "";

		if( messages_object == null )
			unchecked_message = checked_message = "";
		else
		{
			unchecked_message = messages_object[0];

			// If checked message is null, then put the same text of unchecked message
			if( messages_object[1] == null )
				checked_message = unchecked_message;
			else
				checked_message = messages_object[1];
		}

		if(aria_label == null)
			aria = "";
		else
			aria = 'tabindex="0" role="' + type + '" aria-checked="' + selected + '" aria-label="' + aria_label + '"';

		if( label == true )
		{
			block = '<label class="labelauty-label" for="' + input_id + '" ' + aria + '>' +
						'<span class="labelauty-unchecked-image"></span>' +
						'<span class="labelauty-unchecked">' + unchecked_message + '</span>' +
						'<span class="labelauty-checked-image"></span>' +
						'<span class="labelauty-checked">' + checked_message + '</span>' +
					'</label>';
		}
		else
		{
			block = '<label class="labelauty-label" for="' + input_id + '" ' + aria + '>' +
						'<span class="labelauty-unchecked-image"></span>' +
						'<span class="labelauty-checked-image"></span>' +
					'</label>';
		}

		return block;
	};

}( jQuery ));
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.cc_theme_script = {
    attach: function(context, settings) {

      // Place your code here.
      // Instantiate custom checkboxes and radios
      $(":checkbox").labelauty(({ label: false }));
      $(":radio").labelauty(({ label: false }));

      // Append social share bar shim to the bottom
      $('.cc-content-info-social-shim').appendTo('.cc-footer');
    }
  };

})(jQuery, Drupal, this, this.document);
;
(function($, Drupal, window, document) {

  'use strict';
  // On the theory you never need to see the same thing twice.
  // @TODO move to module.
  Drupal.behaviors.cc_duplicate_message_remover = {
    attach: function(context, settings) {
      // Check messages, remove if duplicate.
      var message_texts = [];
      $('.messages ul li').each(function() {
        var message_text = this.text;
        /*
        console.log('$.inArray(message_text, message_texts)');
        console.log($.inArray(message_text, message_texts));
        if ($.inArray(message_text, message_texts) !== -1) {
          //$(this).hide();
        }
        else {
          message_texts.push(message_text);
        }
        */
      });
    }
  };

})(jQuery, Drupal, this, this.document);
;
(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cc_ff_srcset_padding_polyfill = {
    attach: function(context, settings) {
      // FF retina display bug: @http://stackoverflow.com/questions/30873562/firefox-img-with-2x-srcset-specified-has-weird-spacing-when-inside-float/40872635
      $('html').imagesLoaded(function() {
        $('img').each(function() {
          if (this.src.split('.').pop().toLowerCase() !== 'svg') {
            var imgWidth = this.naturalWidth;
            $(this).css('max-width', imgWidth);
          }
        });
      });
    }
  };
})(jQuery, Drupal, this, this.document);;
/**
 * @file
 * Make custom views admin links be inline unless flexbox.
 */

(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cc_views_admin = {
    attach: function(context, settings) {
      $('.cc-theme__views-edit').each(function(){
        if ($(this).css('display') == 'flex' || $(this).parent().css('display') == 'flex') {
          $(this).css('display', 'block');
          $(this).css('position', 'absolute');
          $(this).css('left', '-5em');
          $(this).parent().css('position', 'relative');
        }
      });
    }
  };
})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * Set image width to 100% when image plus 250px media query is reached to make
 * wrapping look better.
 */

(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cc_dropcap_wrapping = {
    attach: function(context, settings) {
      $('html').imagesLoaded(function() {
        var imageBlockWidth = $('.cc-content--article-vertical .cc-content-image-block').outerWidth(true);
        var widthToSet = imageBlockWidth + 250;
        var styleTag = $('<style>@media screen and (max-width:' + widthToSet + 'px) { .field-type-image.cc-content-image-block { width: 100%; }}</style>');
        $('html > head').append(styleTag);
      });
    }
  };
})(jQuery, Drupal, this, this.document);
;
