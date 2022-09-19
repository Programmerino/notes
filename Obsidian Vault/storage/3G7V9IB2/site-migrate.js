$ = jQuery;
$(document).ready(function () {

    //Geolocation based on IP for California Link in header.php
    var access_key = 'ff656b520383048dbdd4de581c873c18';

    //Only calling if window is less than 768 because the button hides on larger screens anyway.
    if($(window).width() < 768) {
    // only show link if region code is CA
        $.ajax({
            url: 'https://api.ipstack.com/check?access_key=' + access_key,
            dataType: 'jsonp',
            success: function(json) {
                var region_code = json.region_code;
                console.log(json.region_code);
                if(region_code === 'CA'){
                    $('#california-link').css('display', 'block');
                }
            }
        });
    }
    //Add a dropdown indicator to each menu item that has a submenu
    $('#menu-main .menu-item.menu-item-has-children').each(function () {
        $(this).append('<div class="dropdown"></div>');
    });

    //Control dropdown menu
    $('#menu-main .menu-item.menu-item-has-children, #menu-main .menu-item.menu-item-has-children .dropdown').on('click', function (event) {
        event.stopPropagation();
        var subMenu;
        if($(this).hasClass('dropdown')) {
            //on click of dropdown +/- button
            subMenu = $(this).prev('.sub-menu');
        } else {
            //on click of menu item name
            subMenu = $(this).find('> .sub-menu');
        }

        if ($(subMenu).hasClass('active')) {
            $(subMenu).removeClass('active');
            $(this).parents('.menu-item').removeClass('active');
        }
        else {
            $('#menu-main .menu-item.menu-item-has-children, #menu-main .menu-item.menu-item-has-children .sub-menu').each(function () {
                $(this).removeClass('active');
            });
            $(subMenu).parents('.sub-menu, .menu-item').addClass('active');
            $(subMenu).addClass('active');
        }
    });

    //Close all open items on click outside of menu
    $(window).click(function () {
        $('#menu-main .menu-item.menu-item-has-children, #menu-main .menu-item.menu-item-has-children .sub-menu').each(function () {
            $(this).removeClass('active');
        });
    });

    //Hide Alert Banner on click of X button
    $('.alert-banner .x-button').on('click', function () {
        $('.alert-banner').hide();
    });

    //Toggle Search Dropdown on Click
    $('.search-glass').on('click', function () {
        $(this).toggleClass('active');
        $('.search-form').toggleClass('active');
    });

    //Toggle Conditions visibility on Offers modules
    $(document).on('click', '.condition-trigger', function () {
        $(this).next('.condition').slideToggle();
    });

    //Open all pdfs in a new tab
    $('a[href$=".pdf"]').prop('target', '_blank');

    //Open all appt.foreyes.com links in a new tab
    $('a[href*="appt.foreyes"]').prop('target', '_blank');

    //Add in tel: protocol after browser has loaded & remove all special chars
    $('.tel').each(function(){
        $(this).attr('href', 'tel:' + $(this).text().replace(/[\-. ,:-]/g, ''));
    });


    /*
     * Event Tracking
     */

    //Add a class to each <a> in the aux nav so we can distinguish it with GTM tracking later
    $('#menu-auxiliary a').each(function(){
        $(this).addClass('aux-link');
    });

    //Add a class to each <a> in the main nav so we can distinguish it with GTM tracking later
    $('#menu-main a').each(function(){
        $(this).addClass('main-nav-link');
    });

    //Add a class to each <a> in the footer nav so we can distinguish it with GTM tracking later
    $('#menu-footer-1 a, #menu-footer-2 a').each(function(){
        $(this).addClass('footer-nav-link');
    });

    //Find all <a> elements that point to /locations/ and don't have a class and add a class
    //This is used in our GTM tracking, do not adjust the class name bc it changes our tracking in GTM
    $('a[href$=".com/locations/"]:not([class]),a[href$=".com/locations"]:not([class])').each(function(){
        // if($(this).not('[class]')) {
            $(this).addClass('general-content-cta');
        // }
    });

    //Open all external links in a new tab
    //breaks menu opening desktop
    // $('a').each(function() {
    //     var a = new RegExp('/' + window.location.host + '/');
    //     if(!a.test(this.href)) {
    //         $(this).click(function(event) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             window.open(this.href, '_blank');
    //         });
    //     }
    // });

});