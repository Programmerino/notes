// Make sure the CDC and CDC.Metrics namespaces are defined.
if (typeof CDC == "undefined") var CDC = new Object();
if (typeof CDC.Metrics == "undefined") CDC.Metrics = new Object();

// Declare an object for handling Google Analytics methods/actions.
CDC.Metrics.GoogleAnalytics = function () {
    return {
        SetAccountNumber: function (account, domain) {
        }
    };
}();

// Add the click handlers to track specific events in GA.
(function ($) {
    $(document).ready(function () {
        // Add the click handlers to track specific events in general
        if ($.fn.on !== undefined) {

            // Hamburger - Mobile Menu Clicked
            $('body').on('click', "#menu-nav", function (e) {
                window.setTimeout(function () {
                    var eventName = '';

                    if (!$('#navmenu').is(":hidden")) {
                        // Only trackig Open as close has multiple paths and it not easily tracked with a degree of accuracy
                        eventName = 'Mobile Navigation Menu Opened';
                        s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                        s.prop50 = s.pageName;
                        s.tl(true, 'o', eventName);
                    }
                }, 500);
            });

            // Mobile Nav - Back Button Used
            $('body').on('click', '.back-btn', function () {
                window.setTimeout(function () {
                    var eventName = '';

                    // Only trackig Open as close has multiple paths and it not easily tracked with a degree of accuracy
                    eventName = 'Mobile Navigation Back Used';
                    s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                    s.prop50 = s.pageName;
                    s.tl(true, 'o', eventName);
                }, 500);
            });

            // REMOVE ALL TEMPORARY INTERACTION TRACKING

            //Search VP1&2 Expand
            $('#menu-search').on('click', function () {

                var eventName = '';

                if (!$('#searchArea-two-column').is(":hidden")) {
                    eventName = 'Mobile Search Closed VP1-2';
                } else {
                    eventName = 'Mobile Search Opened VP1-2';
                }

                s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                s.prop50 = s.pageName;
                s.tl(true, 'o', eventName);
            });

            //A-Z VP1&2 Expand and Collapse
            $('#vp1-a2z-button').on('click', function () {

                var eventName = '';

                if (!$('.a2z-bar').is(":hidden")) {
                    eventName = 'A-Z Index Opened VP1-2';
                } else {
                    eventName = 'A-Z Index Closed VP1-2';
                }

                s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                s.prop50 = s.pageName;
                s.tl(true, 'o', eventName);
            });

            //A-Z VP3&4 Expand and Collapse
            $('.a2z-button').on('click', function () {

                var eventName = '';

                if (!$('.a2z-bar').is(":hidden")) {
                    eventName = 'A-Z Index Opened VP3-4';
                } else {
                    eventName = 'A-Z Index Closed VP3-4';
                }

                s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                s.prop50 = s.pageName;
                s.tl(true, 'o', eventName);
            });

            //Accordion Expand/Collaspe in new Template
            $('.ui-accordion-header').on('click', function () {

                //var interaction = s.pageName + ' | ' + $(this).clone().children().remove().end().text() + ' Accordion';
                var interaction = $(this).clone().children().remove().end().text() + ' Accordion';
                var eventName = "Accordion expanded";
                s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                s.prop50 = interaction;
                s.tl(true, 'o', eventName);

            });

            //Tabs
            $('.ui-tabs-nav li').on('click', function () { //Track opening and closing of accordions in old Template
                //var interaction = s.pageName + ' | ' + $(this).text() + ' Tab';
                var interaction = $(this).text() + ' Tab';
                var eventName = "Tab clicked";
                s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
                s.prop50 = interaction;
                s.tl(true, 'o', eventName);
            });

        } else if ($.fn.live !== undefined) {

            // //Accordion Expand/Collaspe in old Template
            // $('.accordion h4.ui-accordion-header').live('click', function() { //Track opening and closing of accordions in old Template

            // 	var pageName = s.pageName + ' | ' + $(this).clone().children().remove().end().text() + ' Accordion';
            // 	var eventName = "Accordion ";

            // 	if ($(this).children('.ui-accordion-textualIndicator').text().trim() === 'expanded') {
            // 		eventName += 'expanded';
            // 	} else {
            // 		eventName += 'collapsed';
            // 	}

            // 	s.linkTrackVars = 'prop50,prop49,prop46,prop2,prop31,channel';
            // 	s.prop50 = pageName;
            // 	s.tl(true, 'o', eventName);
            // });
        }
    });
})(jQuery);
