// page init
jQuery(function(){
    initSlick();
    initDropDownClasses();
    initTabs();
    initMobileNav();
    initCustomForms();
    initCheckedClasses();
    //initAddClasses();
    initAccordion();
    initAddClass();
    initDisableDates();
    initDatepicker();
    initPopups();
});

// disable date init
function initDisableDates() {
    var array = ["2016-12-25","2016-12-26","2016-12-27","2016-12-28","2016-12-29"]

    jQuery('.date').datepicker({
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ array.indexOf(string) == -1 ]
        }
    });
}

// date picker init
function initDatepicker() {
    jQuery('[data-datepicker]').uiDatepicker();
}


//  add class init
function initAddClass() {
    jQuery('.date-picker').each(function(){
        var holder = jQuery(this);
        var input = holder.find('input.date');

        input.on('change', function(e) {
            if (input.val() !== '') {
                holder.addClass('date-filled');
            }
            else {
                holder.removeClass('date-filled');
            }
        });

        jQuery(window).on('load', function() {
            if (input.val() !== '') {
                holder.addClass('date-filled');
            }
            else {
                holder.removeClass('date-filled');
            }
        });
    });
}

// popups init
function initPopups() {
    jQuery('.popup-block').contentPopup({
        mode: 'click',
        btnOpen: '.popup-opener',
        hideOnClickLink: false
    });
}


// accordion menu init
function initAccordion() {
    jQuery('.account-list-accordion').slideAccordion({
        opener: 'a.slide-opener',
        slider: 'div.slide',
        animSpeed: 300
    });
}

// add or remove items
function checkItemsForSelection(frameHolder) {
    jQuery('.slide-close').on('click', function( e ) {
        e.preventDefault();
        jQuery('body').removeClass('selection-made');
    });

    //if (!frameHolder.hasClass('active')) {
    //    alert("returning false");
    //    return false;
    //}

    var items = frameHolder.find('.sel-content');

    //var addedItems = items.filter(function (index) {
    //    return jQuery(items[index]).hasClass('added');
    //});
    //numbers = addedItems.length;
    numbers = ("" + localStorage.getItem("StorageFrames")).split(',').filter(function(v){return v!==''}).length;


    //var itemIds = "";
    //for (i = 0; i < addedItems.length; i++)
    //{
    //    itemIds += (jQuery(addedItems[i]).find('.product-id').text());
    //    if (i != addedItems.length - 1)
    //        itemIds += ",";
    //}
    //alert(itemIds);
    //var SelectedFrames = 'productIds=' + itemIds;
    var itemIds = "";
    $(".sel-content").each(function () {
        id = $(this).data("id");
        if ($(this).hasClass("added"))
            itemIds += id + ",";
    });
    itemIds = "," + itemIds;
    //localStorage.setItem("StorageFrames", itemIds);

    var body = jQuery('body');
    body.removeClass('selection-made');

    if(numbers == 0) {
        frameHolder.find('span.selection-num').text('0');
    } else if (numbers > 0) {

        var frameId = frameHolder.prop('id');
        body.addClass('selection-made').addClass(frameId);
        frameHolder.find('span.selection-num').text(numbers);
    }
}

// add class on click
function initAddClasses() {
    var frameHolder = jQuery('body');
    var items = frameHolder.find('.sel-content');
    var numbers = 0;

    $('.tryOn').on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        jQuery(this).toggleClass('added');
        if (jQuery(this).hasClass('added'))
        {
            var itemIds = "" + localStorage.getItem("StorageFrames");
            itemIds += jQuery(this).data('id') + ",";
            localStorage.setItem("StorageFrames", itemIds);
        }
        else
        {
            var itemIds = "" + localStorage.getItem("StorageFrames");
            itemIds = itemIds.replace(jQuery(this).data('id') + ",", "");
            localStorage.setItem("StorageFrames", itemIds);
        }
        checkItemsForSelection(frameHolder);
    });
}

// get cookie values
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// initialize custom form elements
function initCustomForms() {
    jcf.setOptions('Select', {
        wrapNative: false,
        wrapNativeOnMobile: false
    });
    jcf.replaceAll();
}

// mobile menu init
function initMobileNav() {
    jQuery('body').mobileNav({
        menuActiveClass: 'search-active',
        menuOpener: '.search-opener'
    });

    jQuery('body').mobileNav({
        menuActiveClass: 'confirm-active',
        menuOpener: '.confirm-opener'
    });

    jQuery('body').mobileNav({
        menuActiveClass: 'nav-active',
        menuOpener: '.nav-opener'
    });
}


// add classes if item has dropdown
function initDropDownClasses() {
    jQuery('#nav>ul>li').each(function() {
        var item = jQuery(this);
        var drop = item.find('.drop');
        var link = item.find('a').eq(0);
        if(drop.length) {
            item.addClass('has-drop-down');
            if(link.length) link.addClass('has-drop-down-a');
        }
    });
}

// content tabs init
$(function() {
    //if (window.location.hash == "#w") {
    //    $(".tabset a").filter("[data-id='w']").trigger('click');
    //}
    //if (window.location.hash == "#m") {
    //    $(".tabset a").filter("[data-id='m']").trigger('click');
    //}
    if (window.location.hash == "#password") {
        $(".account-list a").filter("[href='#password']").trigger('click');
    }
    if (window.location.hash == "#profile") {
        $(".account-list a").filter("[href='#profile']").trigger('click');
    }
});

//$(".eyewear-nav a").click(function () {
//    if ($(this).data("id") == "w") {
//        $(".tabset a").filter("[data-id='w']").trigger('click');
//    }
//    else {
//        $(".tabset a").filter("[data-id='m']").trigger('click');
//    }
//    //return false;
//});

function initTabs() {
    jQuery('ul.tabset').tabset({
        tabLinks: 'a',
        defaultTab: false,
        selectionBlock: true
    });

    jQuery('ul.account-list').tabset({
        tabLinks: 'a',
        defaultTab: false
    });
}

// checked classes when element active
function initCheckedClasses() {
    var checkedClass = 'input-checked', parentCheckedClass = 'input-checked-parent';
    var pairs = [];
    jQuery('label[for]').each(function(index, label) {
        var input = jQuery('#'+label.htmlFor);
        label = jQuery(label);

        // click handler
        if(input.length) {
            pairs.push({input:input,label:label});
            input.bind('click change', function() {
                if(input.is(':radio')) {
                    jQuery.each(pairs, function(index, pair) {
                        refreshState(pair.input, pair.label);
                    });
                } else {
                    refreshState(input, label);
                }
            });
            refreshState(input, label);
        }
    });

    // refresh classes
    function refreshState(input, label) {
        if(input.is(':checked')) {
            input.parent().addClass(parentCheckedClass);
            label.addClass(checkedClass);
        } else {
            input.parent().removeClass(parentCheckedClass);
            label.removeClass(checkedClass);
        }
    }
}


// Slick Slider
function initSlick() {
    jQuery('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: true,
        draggable: false,
        focusOnSelect: true,
        dots: false,
        prevArrow: "<span class='a-left control-c prev slick-prev'><</span>",
        nextArrow: "<span class='a-right control-c next slick-next'>></span>"
    });
}

jQuery(document).on('ready', function() {
    jQuery('.collection-carousel').each(function() {
        var gallery = jQuery(this);

        function slickDesktop() {
            gallery.slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                centerMode: true,
                variableWidth: true,
                draggable: false,
            });
        }

        function slickMobile() {
            gallery.slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 5000,
                speed: 500,
                adaptiveHeight: false,
                slidesPerRow: 1,
            });
        }

        ResponsiveHelper.addRange({
            '768..': {
                on: function() {
                    if (gallery.hasClass('slick-initialized')) {
                        gallery.slick('unslick');
                        slickDesktop();
                    } else {
                        slickDesktop();
                    }
                }
            },
            '..767': {
                on: function() {
                    if (gallery.hasClass('slick-initialized')) {
                        gallery.slick('unslick');
                        slickMobile();
                    } else {
                        slickMobile();
                    }
                }
            }
        });
    });
});


/*
 * Responsive Layout helper
 */
ResponsiveHelper = (function($){
    // init variables
    var handlers = [],
        prevWinWidth,
        win = $(window),
        nativeMatchMedia = false;

    // detect match media support
    if(window.matchMedia) {
        if(window.Window && window.matchMedia === Window.prototype.matchMedia) {
            nativeMatchMedia = true;
        } else if(window.matchMedia.toString().indexOf('native') > -1) {
            nativeMatchMedia = true;
        }
    }

    // prepare resize handler
    function resizeHandler() {
        var winWidth = win.width();
        if(winWidth !== prevWinWidth) {
            prevWinWidth = winWidth;

            // loop through range groups
            $.each(handlers, function(index, rangeObject){
                // disable current active area if needed
                $.each(rangeObject.data, function(property, item) {
                    if(item.currentActive && !matchRange(item.range[0], item.range[1])) {
                        item.currentActive = false;
                        if(typeof item.disableCallback === 'function') {
                            item.disableCallback();
                        }
                    }
                });

                // enable areas that match current width
                $.each(rangeObject.data, function(property, item) {
                    if(!item.currentActive && matchRange(item.range[0], item.range[1])) {
                        // make callback
                        item.currentActive = true;
                        if(typeof item.enableCallback === 'function') {
                            item.enableCallback();
                        }
                    }
                });
            });
        }
    }
    win.bind('load resize orientationchange', resizeHandler);

    // test range
    function matchRange(r1, r2) {
        var mediaQueryString = '';
        if(r1 > 0) {
            mediaQueryString += '(min-width: ' + r1 + 'px)';
        }
        if(r2 < Infinity) {
            mediaQueryString += (mediaQueryString ? ' and ' : '') + '(max-width: ' + r2 + 'px)';
        }
        return matchQuery(mediaQueryString, r1, r2);
    }

    // media query function
    function matchQuery(query, r1, r2) {
        if(window.matchMedia && nativeMatchMedia) {
            return matchMedia(query).matches;
        } else if(window.styleMedia) {
            return styleMedia.matchMedium(query);
        } else if(window.media) {
            return media.matchMedium(query);
        } else {
            return prevWinWidth >= r1 && prevWinWidth <= r2;
        }
    }

    // range parser
    function parseRange(rangeStr) {
        var rangeData = rangeStr.split('..');
        var x1 = parseInt(rangeData[0], 10) || -Infinity;
        var x2 = parseInt(rangeData[1], 10) || Infinity;
        return [x1, x2].sort(function(a, b){
            return a - b;
        });
    }

    // export public functions
    return {
        addRange: function(ranges) {
            // parse data and add items to collection
            var result = {data:{}};
            $.each(ranges, function(property, data){
                result.data[property] = {
                    range: parseRange(property),
                    enableCallback: data.on,
                    disableCallback: data.off
                };
            });
            handlers.push(result);

            // call resizeHandler to recalculate all events
            prevWinWidth = null;
            resizeHandler();

        }
    };
}(jQuery));


/*
 * Popups plugin
 */
;(function($) {
    function ContentPopup(opt) {
        this.options = $.extend({
            holder: null,
            popup: '.popup',
            btnOpen: '.open',
            btnClose: '.close',
            openClass: 'popup-active',
            clickEvent: 'click',
            mode: 'click',
            hideOnClickLink: true,
            hideOnClickOutside: true,
            delay: 50
        }, opt);
        if(this.options.holder) {
            this.holder = $(this.options.holder);
            this.init();
        }
    }
    ContentPopup.prototype = {
        init: function() {
            this.findElements();
            this.attachEvents();
        },
        findElements: function() {
            this.popup = this.holder.find(this.options.popup);
            this.btnOpen = this.holder.find(this.options.btnOpen);
            this.btnClose = this.holder.find(this.options.btnClose);
        },
        attachEvents: function() {
            // handle popup openers
            var self = this;
            this.clickMode = isTouchDevice || (self.options.mode === self.options.clickEvent);

            if(this.clickMode) {
                // handle click mode
                this.btnOpen.bind(self.options.clickEvent, function(e) {
                    if(self.holder.hasClass(self.options.openClass)) {
                        if(self.options.hideOnClickLink) {
                            self.hidePopup();
                        }
                    } else {
                        self.showPopup();
                    }
                    e.preventDefault();
                });

                // prepare outside click handler
                this.outsideClickHandler = this.bind(this.outsideClickHandler, this);
            } else {
                // handle hover mode
                var timer, delayedFunc = function(func) {
                    clearTimeout(timer);
                    timer = setTimeout(function() {
                        func.call(self);
                    }, self.options.delay);
                };
                this.btnOpen.bind('mouseover', function() {
                    delayedFunc(self.showPopup);
                }).bind('mouseout', function() {
                    delayedFunc(self.hidePopup);
                });
                this.popup.bind('mouseover', function() {
                    delayedFunc(self.showPopup);
                }).bind('mouseout', function() {
                    delayedFunc(self.hidePopup);
                });
            }

            // handle close buttons
            this.btnClose.bind(self.options.clickEvent, function(e) {
                self.hidePopup();
                e.preventDefault();
            });
        },
        outsideClickHandler: function(e) {
            // hide popup if clicked outside
            var targetNode = $((e.changedTouches ? e.changedTouches[0] : e).target);
            if(!targetNode.closest(this.popup).length && !targetNode.closest(this.btnOpen).length) {
                this.hidePopup();
            }
        },
        showPopup: function() {
            // reveal popup
            this.holder.addClass(this.options.openClass);
            this.popup.css({display:'block'});

            // outside click handler
            if(this.clickMode && this.options.hideOnClickOutside && !this.outsideHandlerActive) {
                this.outsideHandlerActive = true;
                $(document).bind('click touchstart', this.outsideClickHandler);
            }
        },
        hidePopup: function() {
            // hide popup
            this.holder.removeClass(this.options.openClass);
            this.popup.css({display:'none'});

            // outside click handler
            if(this.clickMode && this.options.hideOnClickOutside && this.outsideHandlerActive) {
                this.outsideHandlerActive = false;
                $(document).unbind('click touchstart', this.outsideClickHandler);
            }
        },
        bind: function(f, scope, forceArgs){
            return function() {return f.apply(scope, forceArgs ? [forceArgs] : arguments);};
        }
    };

    // detect touch devices
    var isTouchDevice = /Windows Phone/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

    // jQuery plugin interface
    $.fn.contentPopup = function(opt) {
        return this.each(function() {
            new ContentPopup($.extend(opt, {holder: this}));
        });
    };
}(jQuery));

/*
 * jQuery Accordion plugin
 */
;(function($){
    $.fn.slideAccordion = function(opt){
        // default options
        var options = $.extend({
            addClassBeforeAnimation: false,
            allowClickWhenExpanded: false,
            activeClass:'active',
            opener:'.opener',
            slider:'.slide',
            animSpeed: 300,
            collapsible:true,
            event:'click'
        },opt);

        return this.each(function(){
            // options
            var accordion = $(this);
            var items = accordion.find(':has('+options.slider+')');

            items.each(function(){
                var item = $(this);
                var opener = item.find(options.opener);
                var slider = item.find(options.slider);
                opener.bind(options.event, function(e){
                    if(!slider.is(':animated')) {
                        if(item.hasClass(options.activeClass)) {
                            if(options.allowClickWhenExpanded) {
                                return;
                            } else if(options.collapsible) {
                                slider.slideUp(options.animSpeed, function(){
                                    hideSlide(slider);
                                    item.removeClass(options.activeClass);
                                });
                            }
                        } else {
                            // show active
                            var levelItems = item.siblings('.'+options.activeClass);
                            var sliderElements = levelItems.find(options.slider);
                            item.addClass(options.activeClass);
                            showSlide(slider).hide().slideDown(options.animSpeed);

                            // collapse others
                            sliderElements.slideUp(options.animSpeed, function(){
                                levelItems.removeClass(options.activeClass);
                                hideSlide(sliderElements);
                            });
                        }
                    }
                    e.preventDefault();
                });
                if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
            });
        });
    };

    // accordion slide visibility
    var showSlide = function(slide) {
        return slide.css({position:'', top: '', left: '', width: '' });
    };
    var hideSlide = function(slide) {
        return slide.show().css({position:'absolute', top: -9999, left: -9999, width: slide.width() });
    };
}(jQuery));

/*
 * jQuery Tabs plugin
 */

;(function($, $win) {
    'use strict';

    function Tabset($holder, options) {
        this.$holder = $holder;
        this.options = options;

        this.init();
    }

    Tabset.prototype = {
        init: function() {
            this.$tabLinks = this.$holder.find(this.options.tabLinks);

            this.setStartActiveIndex();
            this.setActiveTab();

            if (this.options.autoHeight) {
                this.$tabHolder = $(this.$tabLinks.eq(0).attr(this.options.attrib)).parent();
            }
        },

        setStartActiveIndex: function() {
            var $classTargets = this.getClassTarget(this.$tabLinks);
            var $activeLink = $classTargets.filter('.' + this.options.activeClass);
            var $hashLink = this.$tabLinks.filter('[' + this.options.attrib + '="' + location.hash + '"]');
            var activeIndex;

            if (this.options.checkHash && $hashLink.length) {
                $activeLink = $hashLink;
            }

            activeIndex = $classTargets.index($activeLink);

            this.activeTabIndex = this.prevTabIndex = (activeIndex === -1 ? (this.options.defaultTab ? 0 : null) : activeIndex);
        },

        setActiveTab: function() {
            var self = this;

            this.$tabLinks.each(function(i, link) {
                var $link = $(link);
                var $classTarget = self.getClassTarget($link);
                var $tab = $($link.attr(self.options.attrib));

                if (i !== self.activeTabIndex) {
                    $classTarget.removeClass(self.options.activeClass);
                    $tab.addClass(self.options.tabHiddenClass).removeClass(self.options.activeClass);
                } else {
                    $classTarget.addClass(self.options.activeClass);
                    $tab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass);

                    if(self.options.selectionBlock) checkItemsForSelection($tab);
                }

                self.attachTabLink($link, i);
            });
        },

        attachTabLink: function($link, i) {
            var self = this;

            $link.on(this.options.event + '.tabset', function(e) {
                e.preventDefault();

                if (self.activeTabIndex === self.prevTabIndex && self.activeTabIndex !== i) {
                    self.activeTabIndex = i;
                    self.switchTabs();
                }
            });
        },

        resizeHolder: function(height) {
            var self = this;

            if (height) {
                this.$tabHolder.height(height);
                setTimeout(function() {
                    self.$tabHolder.addClass('transition');
                }, 10);
            } else {
                self.$tabHolder.removeClass('transition').height('');
            }
        },

        switchTabs: function() {
            var self = this;

            var $prevLink = this.$tabLinks.eq(this.prevTabIndex);
            var $nextLink = this.$tabLinks.eq(this.activeTabIndex);

            var $prevTab = this.getTab($prevLink);
            var $nextTab = this.getTab($nextLink);

            $prevTab.removeClass(this.options.activeClass);

            if (self.haveTabHolder()) {
                this.resizeHolder($prevTab.outerHeight());
            }

            setTimeout(function() {
                self.getClassTarget($prevLink).removeClass(self.options.activeClass);

                $prevTab.addClass(self.options.tabHiddenClass);
                $nextTab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass);
                if(self.options.selectionBlock) checkItemsForSelection($nextTab);

                self.getClassTarget($nextLink).addClass(self.options.activeClass);
                $(window).trigger('orientationchange');

                if (self.haveTabHolder()) {
                    self.resizeHolder($nextTab.outerHeight());

                    setTimeout(function() {
                        self.resizeHolder();
                        self.prevTabIndex = self.activeTabIndex;
                    }, self.options.animSpeed);
                } else {
                    self.prevTabIndex = self.activeTabIndex;
                }
            }, this.options.autoHeight ? this.options.animSpeed : 1);
        },

        getClassTarget: function($link) {
            return this.options.addToParent ? $link.parent() : $link;
        },

        getActiveTab: function() {
            return this.getTab(this.$tabLinks.eq(this.activeTabIndex));
        },

        getTab: function($link) {
            return $($link.attr(this.options.attrib));
        },

        haveTabHolder: function() {
            return this.$tabHolder && this.$tabHolder.length;
        },

        destroy: function() {
            var self = this;

            this.$tabLinks.off('.tabset').each(function() {
                var $link = $(this);

                self.getClassTarget($link).removeClass(self.options.activeClass);
                $($link.attr(self.options.attrib)).removeClass(self.options.activeClass + ' ' + self.options.tabHiddenClass);
            });

            this.$holder.removeData('Tabset');
        }
    };

    $.fn.tabset = function(options) {
        options = $.extend({
            activeClass: 'active',
            addToParent: false,
            autoHeight: false,
            checkHash: false,
            defaultTab: true,
            animSpeed: 500,
            tabLinks: 'a',
            attrib: 'href',
            event: 'click',
            selectionBlock: false,
            tabHiddenClass: 'js-tab-hidden'
        }, options);
        options.autoHeight = options.autoHeight && $.support.opacity;

        return this.each(function() {
            var $holder = $(this);

            if (!$holder.data('Tabset')) {
                $holder.data('Tabset', new Tabset($holder, options));
            }
        });
    };
}(jQuery, jQuery(window)));

/*
 * Simple Mobile Navigation
 */
;(function($) {
    function MobileNav(options) {
        this.options = $.extend({
            container: null,
            hideOnClickOutside: false,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-opener',
            menuDrop: '.nav-drop',
            toggleEvent: 'click',
            outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
        }, options);
        this.initStructure();
        this.attachEvents();
    }
    MobileNav.prototype = {
        initStructure: function() {
            this.page = $('html');
            this.container = $(this.options.container);
            this.opener = this.container.find(this.options.menuOpener);
            this.drop = this.container.find(this.options.menuDrop);
        },
        attachEvents: function() {
            var self = this;

            if(activateResizeHandler) {
                activateResizeHandler();
                activateResizeHandler = null;
            }

            this.outsideClickHandler = function(e) {
                if(self.isOpened()) {
                    var target = $(e.target);
                    if(!target.closest(self.opener).length && !target.closest(self.drop).length) {
                        self.hide();
                    }
                }
            };

            this.openerClickHandler = function(e) {
                e.preventDefault();
                self.toggle();
            };

            this.opener.on(this.options.toggleEvent, this.openerClickHandler);
        },
        isOpened: function() {
            return this.container.hasClass(this.options.menuActiveClass);
        },
        show: function() {
            this.container.addClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        hide: function() {
            this.container.removeClass(this.options.menuActiveClass);
            if(this.options.hideOnClickOutside) {
                this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        },
        toggle: function() {
            if(this.isOpened()) {
                this.hide();
            } else {
                this.show();
            }
        },
        destroy: function() {
            this.container.removeClass(this.options.menuActiveClass);
            this.opener.off(this.options.toggleEvent, this.clickHandler);
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
        }
    };

    var activateResizeHandler = function() {
        var win = $(window),
            doc = $('html'),
            resizeClass = 'resize-active',
            flag, timer;
        var removeClassHandler = function() {
            flag = false;
            doc.removeClass(resizeClass);
        };
        var resizeHandler = function() {
            if(!flag) {
                flag = true;
                doc.addClass(resizeClass);
            }
            clearTimeout(timer);
            timer = setTimeout(removeClassHandler, 500);
        };
        win.on('resize orientationchange', resizeHandler);
    };

    $.fn.mobileNav = function(options) {
        return this.each(function() {
            var params = $.extend({}, options, {container: this}),
                instance = new MobileNav(params);
            $.data(this, 'MobileNav', instance);
        });
    };
}(jQuery));

/*!
 * JavaScript Custom Forms
 */
;(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.jcf = factory(jQuery);
    }
}(this, function($) {
    'use strict';

    // define version
    var version = '1.1.3';

    // private variables
    var customInstances = [];

    // default global options
    var commonOptions = {
        optionsKey: 'jcf',
        dataKey: 'jcf-instance',
        rtlClass: 'jcf-rtl',
        focusClass: 'jcf-focus',
        pressedClass: 'jcf-pressed',
        disabledClass: 'jcf-disabled',
        hiddenClass: 'jcf-hidden',
        resetAppearanceClass: 'jcf-reset-appearance',
        unselectableClass: 'jcf-unselectable'
    };

    // detect device type
    var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
        isWinPhoneDevice = /Windows Phone/.test(navigator.userAgent);
    commonOptions.isMobileDevice = !!(isTouchDevice || isWinPhoneDevice);

    // create global stylesheet if custom forms are used
    var createStyleSheet = function() {
        var styleTag = $('<style>').appendTo('head'),
            styleSheet = styleTag.prop('sheet') || styleTag.prop('styleSheet');

        // crossbrowser style handling
        var addCSSRule = function(selector, rules, index) {
            if (styleSheet.insertRule) {
                styleSheet.insertRule(selector + '{' + rules + '}', index);
            } else {
                styleSheet.addRule(selector, rules, index);
            }
        };

        // add special rules
        addCSSRule('.' + commonOptions.hiddenClass, 'position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none');
        addCSSRule('.' + commonOptions.rtlClass + ' .' + commonOptions.hiddenClass, 'right:-9999px !important; left: auto !important');
        addCSSRule('.' + commonOptions.unselectableClass, '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);');
        addCSSRule('.' + commonOptions.resetAppearanceClass, 'background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);');

        // detect rtl pages
        var html = $('html'), body = $('body');
        if (html.css('direction') === 'rtl' || body.css('direction') === 'rtl') {
            html.addClass(commonOptions.rtlClass);
        }

        // handle form reset event
        html.on('reset', function() {
            setTimeout(function() {
                api.refreshAll();
            }, 0);
        });

        // mark stylesheet as created
        commonOptions.styleSheetCreated = true;
    };

    // simplified pointer events handler
    (function() {
        var pointerEventsSupported = navigator.pointerEnabled || navigator.msPointerEnabled,
            touchEventsSupported = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
            eventList, eventMap = {}, eventPrefix = 'jcf-';

        // detect events to attach
        if (pointerEventsSupported) {
            eventList = {
                pointerover: navigator.pointerEnabled ? 'pointerover' : 'MSPointerOver',
                pointerdown: navigator.pointerEnabled ? 'pointerdown' : 'MSPointerDown',
                pointermove: navigator.pointerEnabled ? 'pointermove' : 'MSPointerMove',
                pointerup: navigator.pointerEnabled ? 'pointerup' : 'MSPointerUp'
            };
        } else {
            eventList = {
                pointerover: 'mouseover',
                pointerdown: 'mousedown' + (touchEventsSupported ? ' touchstart' : ''),
                pointermove: 'mousemove' + (touchEventsSupported ? ' touchmove' : ''),
                pointerup: 'mouseup' + (touchEventsSupported ? ' touchend' : '')
            };
        }

        // create event map
        $.each(eventList, function(targetEventName, fakeEventList) {
            $.each(fakeEventList.split(' '), function(index, fakeEventName) {
                eventMap[fakeEventName] = targetEventName;
            });
        });

        // jQuery event hooks
        $.each(eventList, function(eventName, eventHandlers) {
            eventHandlers = eventHandlers.split(' ');
            $.event.special[eventPrefix + eventName] = {
                setup: function() {
                    var self = this;
                    $.each(eventHandlers, function(index, fallbackEvent) {
                        if (self.addEventListener) self.addEventListener(fallbackEvent, fixEvent, false);
                        else self['on' + fallbackEvent] = fixEvent;
                    });
                },
                teardown: function() {
                    var self = this;
                    $.each(eventHandlers, function(index, fallbackEvent) {
                        if (self.addEventListener) self.removeEventListener(fallbackEvent, fixEvent, false);
                        else self['on' + fallbackEvent] = null;
                    });
                }
            };
        });

        // check that mouse event are not simulated by mobile browsers
        var lastTouch = null;
        var mouseEventSimulated = function(e) {
            var dx = Math.abs(e.pageX - lastTouch.x),
                dy = Math.abs(e.pageY - lastTouch.y),
                rangeDistance = 25;

            if (dx <= rangeDistance && dy <= rangeDistance) {
                return true;
            }
        };

        // normalize event
        var fixEvent = function(e) {
            var origEvent = e || window.event,
                touchEventData = null,
                targetEventName = eventMap[origEvent.type];

            e = $.event.fix(origEvent);
            e.type = eventPrefix + targetEventName;

            if (origEvent.pointerType) {
                switch (origEvent.pointerType) {
                    case 2: e.pointerType = 'touch'; break;
                    case 3: e.pointerType = 'pen'; break;
                    case 4: e.pointerType = 'mouse'; break;
                    default: e.pointerType = origEvent.pointerType;
                }
            } else {
                e.pointerType = origEvent.type.substr(0, 5); // "mouse" or "touch" word length
            }

            if (!e.pageX && !e.pageY) {
                touchEventData = origEvent.changedTouches ? origEvent.changedTouches[0] : origEvent;
                e.pageX = touchEventData.pageX;
                e.pageY = touchEventData.pageY;
            }

            if (origEvent.type === 'touchend') {
                lastTouch = { x: e.pageX, y: e.pageY };
            }
            if (e.pointerType === 'mouse' && lastTouch && mouseEventSimulated(e)) {
                return;
            } else {
                return ($.event.dispatch || $.event.handle).call(this, e);
            }
        };
    }());

    // custom mousewheel/trackpad handler
    (function() {
        var wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll').split(' '),
            shimEventName = 'jcf-mousewheel';

        $.event.special[shimEventName] = {
            setup: function() {
                var self = this;
                $.each(wheelEvents, function(index, fallbackEvent) {
                    if (self.addEventListener) self.addEventListener(fallbackEvent, fixEvent, false);
                    else self['on' + fallbackEvent] = fixEvent;
                });
            },
            teardown: function() {
                var self = this;
                $.each(wheelEvents, function(index, fallbackEvent) {
                    if (self.addEventListener) self.removeEventListener(fallbackEvent, fixEvent, false);
                    else self['on' + fallbackEvent] = null;
                });
            }
        };

        var fixEvent = function(e) {
            var origEvent = e || window.event;
            e = $.event.fix(origEvent);
            e.type = shimEventName;

            // old wheel events handler
            if ('detail'      in origEvent) { e.deltaY = -origEvent.detail;      }
            if ('wheelDelta'  in origEvent) { e.deltaY = -origEvent.wheelDelta;  }
            if ('wheelDeltaY' in origEvent) { e.deltaY = -origEvent.wheelDeltaY; }
            if ('wheelDeltaX' in origEvent) { e.deltaX = -origEvent.wheelDeltaX; }

            // modern wheel event handler
            if ('deltaY' in origEvent) {
                e.deltaY = origEvent.deltaY;
            }
            if ('deltaX' in origEvent) {
                e.deltaX = origEvent.deltaX;
            }

            // handle deltaMode for mouse wheel
            e.delta = e.deltaY || e.deltaX;
            if (origEvent.deltaMode === 1) {
                var lineHeight = 16;
                e.delta *= lineHeight;
                e.deltaY *= lineHeight;
                e.deltaX *= lineHeight;
            }

            return ($.event.dispatch || $.event.handle).call(this, e);
        };
    }());

    // extra module methods
    var moduleMixin = {
        // provide function for firing native events
        fireNativeEvent: function(elements, eventName) {
            $(elements).each(function() {
                var element = this, eventObject;
                if (element.dispatchEvent) {
                    eventObject = document.createEvent('HTMLEvents');
                    eventObject.initEvent(eventName, true, true);
                    element.dispatchEvent(eventObject);
                } else if (document.createEventObject) {
                    eventObject = document.createEventObject();
                    eventObject.target = element;
                    element.fireEvent('on' + eventName, eventObject);
                }
            });
        },
        // bind event handlers for module instance (functions beggining with "on")
        bindHandlers: function() {
            var self = this;
            $.each(self, function(propName, propValue) {
                if (propName.indexOf('on') === 0 && $.isFunction(propValue)) {
                    // dont use $.proxy here because it doesn't create unique handler
                    self[propName] = function() {
                        return propValue.apply(self, arguments);
                    };
                }
            });
        }
    };

    // public API
    var api = {
        version: version,
        modules: {},
        getOptions: function() {
            return $.extend({}, commonOptions);
        },
        setOptions: function(moduleName, moduleOptions) {
            if (arguments.length > 1) {
                // set module options
                if (this.modules[moduleName]) {
                    $.extend(this.modules[moduleName].prototype.options, moduleOptions);
                }
            } else {
                // set common options
                $.extend(commonOptions, moduleName);
            }
        },
        addModule: function(proto) {
            // add module to list
            var Module = function(options) {
                // save instance to collection
                if (!options.element.data(commonOptions.dataKey)) {
                    options.element.data(commonOptions.dataKey, this);
                }
                customInstances.push(this);

                // save options
                this.options = $.extend({}, commonOptions, this.options, getInlineOptions(options.element), options);

                // bind event handlers to instance
                this.bindHandlers();

                // call constructor
                this.init.apply(this, arguments);
            };

            // parse options from HTML attribute
            var getInlineOptions = function(element) {
                var dataOptions = element.data(commonOptions.optionsKey),
                    attrOptions = element.attr(commonOptions.optionsKey);

                if (dataOptions) {
                    return dataOptions;
                } else if (attrOptions) {
                    try {
                        return $.parseJSON(attrOptions);
                    } catch (e) {
                        // ignore invalid attributes
                    }
                }
            };

            // set proto as prototype for new module
            Module.prototype = proto;

            // add mixin methods to module proto
            $.extend(proto, moduleMixin);
            if (proto.plugins) {
                $.each(proto.plugins, function(pluginName, plugin) {
                    $.extend(plugin.prototype, moduleMixin);
                });
            }

            // override destroy method
            var originalDestroy = Module.prototype.destroy;
            Module.prototype.destroy = function() {
                this.options.element.removeData(this.options.dataKey);

                for (var i = customInstances.length - 1; i >= 0; i--) {
                    if (customInstances[i] === this) {
                        customInstances.splice(i, 1);
                        break;
                    }
                }

                if (originalDestroy) {
                    originalDestroy.apply(this, arguments);
                }
            };

            // save module to list
            this.modules[proto.name] = Module;
        },
        getInstance: function(element) {
            return $(element).data(commonOptions.dataKey);
        },
        replace: function(elements, moduleName, customOptions) {
            var self = this,
                instance;

            if (!commonOptions.styleSheetCreated) {
                createStyleSheet();
            }

            $(elements).each(function() {
                var moduleOptions,
                    element = $(this);

                instance = element.data(commonOptions.dataKey);
                if (instance) {
                    instance.refresh();
                } else {
                    if (!moduleName) {
                        $.each(self.modules, function(currentModuleName, module) {
                            if (module.prototype.matchElement.call(module.prototype, element)) {
                                moduleName = currentModuleName;
                                return false;
                            }
                        });
                    }
                    if (moduleName) {
                        moduleOptions = $.extend({ element: element }, customOptions);
                        instance = new self.modules[moduleName](moduleOptions);
                    }
                }
            });
            return instance;
        },
        refresh: function(elements) {
            $(elements).each(function() {
                var instance = $(this).data(commonOptions.dataKey);
                if (instance) {
                    instance.refresh();
                }
            });
        },
        destroy: function(elements) {
            $(elements).each(function() {
                var instance = $(this).data(commonOptions.dataKey);
                if (instance) {
                    instance.destroy();
                }
            });
        },
        replaceAll: function(context) {
            var self = this;
            $.each(this.modules, function(moduleName, module) {
                $(module.prototype.selector, context).each(function() {
                    if (this.className.indexOf('jcf-ignore') < 0) {
                        self.replace(this, moduleName);
                    }
                });
            });
        },
        refreshAll: function(context) {
            if (context) {
                $.each(this.modules, function(moduleName, module) {
                    $(module.prototype.selector, context).each(function() {
                        var instance = $(this).data(commonOptions.dataKey);
                        if (instance) {
                            instance.refresh();
                        }
                    });
                });
            } else {
                for (var i = customInstances.length - 1; i >= 0; i--) {
                    customInstances[i].refresh();
                }
            }
        },
        destroyAll: function(context) {
            if (context) {
                $.each(this.modules, function(moduleName, module) {
                    $(module.prototype.selector, context).each(function(index, element) {
                        var instance = $(element).data(commonOptions.dataKey);
                        if (instance) {
                            instance.destroy();
                        }
                    });
                });
            } else {
                while (customInstances.length) {
                    customInstances[0].destroy();
                }
            }
        }
    };

    // always export API to the global window object
    window.jcf = api;

    return api;
}));

/*!
 * JavaScript Custom Forms : Select Module
 */
;(function($, window) {
    'use strict';

    jcf.addModule({
        name: 'Select',
        selector: 'select',
        options: {
            element: null,
            multipleCompactStyle: false
        },
        plugins: {
            ListBox: ListBox,
            ComboBox: ComboBox,
            SelectList: SelectList
        },
        matchElement: function(element) {
            return element.is('select');
        },
        init: function() {
            this.element = $(this.options.element);
            this.createInstance();
        },
        isListBox: function() {
            return this.element.is('[size]:not([jcf-size]), [multiple]');
        },
        createInstance: function() {
            if (this.instance) {
                this.instance.destroy();
            }
            if (this.isListBox() && !this.options.multipleCompactStyle) {
                this.instance = new ListBox(this.options);
            } else {
                this.instance = new ComboBox(this.options);
            }
        },
        refresh: function() {
            var typeMismatch = (this.isListBox() && this.instance instanceof ComboBox) ||
                (!this.isListBox() && this.instance instanceof ListBox);

            if (typeMismatch) {
                this.createInstance();
            } else {
                this.instance.refresh();
            }
        },
        destroy: function() {
            this.instance.destroy();
        }
    });

    // combobox module
    function ComboBox(options) {
        this.options = $.extend({
            wrapNative: true,
            wrapNativeOnMobile: true,
            fakeDropInBody: true,
            useCustomScroll: false,
            flipDropToFit: true,
            maxVisibleItems: 10,
            fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
            fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
            optionClassPrefix: 'jcf-option-',
            selectClassPrefix: 'jcf-select-',
            dropContentSelector: '.jcf-select-drop-content',
            selectTextSelector: '.jcf-select-text',
            dropActiveClass: 'jcf-drop-active',
            flipDropClass: 'jcf-drop-flipped'
        }, options);
        this.init();
    }
    $.extend(ComboBox.prototype, {
        init: function() {
            this.initStructure();
            this.bindHandlers();
            this.attachEvents();
            this.refresh();
        },
        initStructure: function() {
            // prepare structure
            this.win = $(window);
            this.doc = $(document);
            this.realElement = $(this.options.element);
            this.fakeElement = $(this.options.fakeAreaStructure).insertAfter(this.realElement);
            this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector);
            this.selectText = $('<span></span>').appendTo(this.selectTextContainer);
            makeUnselectable(this.fakeElement);

            // copy classes from original select
            this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));

            // handle compact multiple style
            if (this.realElement.prop('multiple')) {
                this.fakeElement.addClass('jcf-compact-multiple');
            }

            // detect device type and dropdown behavior
            if (this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative) {
                this.options.wrapNative = true;
            }

            if (this.options.wrapNative) {
                // wrap native select inside fake block
                this.realElement.prependTo(this.fakeElement).css({
                    position: 'absolute',
                    height: '100%',
                    width: '100%'
                }).addClass(this.options.resetAppearanceClass);
            } else {
                // just hide native select
                this.realElement.addClass(this.options.hiddenClass);
                this.fakeElement.attr('title', this.realElement.attr('title'));
                this.fakeDropTarget = this.options.fakeDropInBody ? $('body') : this.fakeElement;
            }
        },
        attachEvents: function() {
            // delayed refresh handler
            var self = this;
            this.delayedRefresh = function() {
                setTimeout(function() {
                    self.refresh();
                    if (self.list) {
                        self.list.refresh();
                        self.list.scrollToActiveOption();
                    }
                }, 1);
            };

            // native dropdown event handlers
            if (this.options.wrapNative) {
                this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    click: this.onChange,
                    keydown: this.onChange
                });
            } else {
                // custom dropdown event handlers
                this.realElement.on({
                    focus: this.onFocus,
                    change: this.onChange,
                    keydown: this.onKeyDown
                });
                this.fakeElement.on({
                    'jcf-pointerdown': this.onSelectAreaPress
                });
            }
        },
        onKeyDown: function(e) {
            if (e.which === 13) {
                this.toggleDropdown();
            } else if (this.dropActive) {
                this.delayedRefresh();
            }
        },
        onChange: function() {
            this.refresh();
        },
        onFocus: function() {
            if (!this.pressedFlag || !this.focusedFlag) {
                this.fakeElement.addClass(this.options.focusClass);
                this.realElement.on('blur', this.onBlur);
                this.toggleListMode(true);
                this.focusedFlag = true;
            }
        },
        onBlur: function() {
            if (!this.pressedFlag) {
                this.fakeElement.removeClass(this.options.focusClass);
                this.realElement.off('blur', this.onBlur);
                this.toggleListMode(false);
                this.focusedFlag = false;
            }
        },
        onResize: function() {
            if (this.dropActive) {
                this.hideDropdown();
            }
        },
        onSelectDropPress: function() {
            this.pressedFlag = true;
        },
        onSelectDropRelease: function(e, pointerEvent) {
            this.pressedFlag = false;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onSelectAreaPress: function(e) {
            // skip click if drop inside fake element or real select is disabled
            var dropClickedInsideFakeElement = !this.options.fakeDropInBody && $(e.target).closest(this.dropdown).length;
            if (dropClickedInsideFakeElement || e.button > 1 || this.realElement.is(':disabled')) {
                return;
            }

            // toggle dropdown visibility
            this.selectOpenedByEvent = e.pointerType;
            this.toggleDropdown();

            // misc handlers
            if (!this.focusedFlag) {
                if (e.pointerType === 'mouse') {
                    this.realElement.focus();
                } else {
                    this.onFocus(e);
                }
            }
            this.pressedFlag = true;
            this.fakeElement.addClass(this.options.pressedClass);
            this.doc.on('jcf-pointerup', this.onSelectAreaRelease);
        },
        onSelectAreaRelease: function(e) {
            if (this.focusedFlag && e.pointerType === 'mouse') {
                this.realElement.focus();
            }
            this.pressedFlag = false;
            this.fakeElement.removeClass(this.options.pressedClass);
            this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
        },
        onOutsideClick: function(e) {
            var target = $(e.target),
                clickedInsideSelect = target.closest(this.fakeElement).length || target.closest(this.dropdown).length;

            if (!clickedInsideSelect) {
                this.hideDropdown();
            }
        },
        onSelect: function() {
            this.refresh();

            if (this.realElement.prop('multiple')) {
                this.repositionDropdown();
            } else {
                this.hideDropdown();
            }

            this.fireNativeEvent(this.realElement, 'change');
        },
        toggleListMode: function(state) {
            if (!this.options.wrapNative) {
                if (state) {
                    // temporary change select to list to avoid appearing of native dropdown
                    this.realElement.attr({
                        size: 4,
                        'jcf-size': ''
                    });
                } else {
                    // restore select from list mode to dropdown select
                    if (!this.options.wrapNative) {
                        this.realElement.removeAttr('size jcf-size');
                    }
                }
            }
        },
        createDropdown: function() {
            // destroy previous dropdown if needed
            if (this.dropdown) {
                this.list.destroy();
                this.dropdown.remove();
            }

            // create new drop container
            this.dropdown = $(this.options.fakeDropStructure).appendTo(this.fakeDropTarget);
            this.dropdown.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
            makeUnselectable(this.dropdown);

            // handle compact multiple style
            if (this.realElement.prop('multiple')) {
                this.dropdown.addClass('jcf-compact-multiple');
            }

            // set initial styles for dropdown in body
            if (this.options.fakeDropInBody) {
                this.dropdown.css({
                    position: 'absolute',
                    top: -9999
                });
            }

            // create new select list instance
            this.list = new SelectList({
                useHoverClass: true,
                handleResize: false,
                alwaysPreventMouseWheel: true,
                maxVisibleItems: this.options.maxVisibleItems,
                useCustomScroll: this.options.useCustomScroll,
                holder: this.dropdown.find(this.options.dropContentSelector),
                multipleSelectWithoutKey: this.realElement.prop('multiple'),
                element: this.realElement
            });
            $(this.list).on({
                select: this.onSelect,
                press: this.onSelectDropPress,
                release: this.onSelectDropRelease
            });
        },
        repositionDropdown: function() {
            var selectOffset = this.fakeElement.offset(),
                selectWidth = this.fakeElement.outerWidth(),
                selectHeight = this.fakeElement.outerHeight(),
                dropHeight = this.dropdown.css('width', selectWidth).outerHeight(),
                winScrollTop = this.win.scrollTop(),
                winHeight = this.win.height(),
                calcTop, calcLeft, bodyOffset, needFlipDrop = false;

            // check flip drop position
            if (selectOffset.top + selectHeight + dropHeight > winScrollTop + winHeight && selectOffset.top - dropHeight > winScrollTop) {
                needFlipDrop = true;
            }

            if (this.options.fakeDropInBody) {
                bodyOffset = this.fakeDropTarget.css('position') !== 'static' ? this.fakeDropTarget.offset().top : 0;
                if (this.options.flipDropToFit && needFlipDrop) {
                    // calculate flipped dropdown position
                    calcLeft = selectOffset.left;
                    calcTop = selectOffset.top - dropHeight - bodyOffset;
                } else {
                    // calculate default drop position
                    calcLeft = selectOffset.left;
                    calcTop = selectOffset.top + selectHeight - bodyOffset;
                }

                // update drop styles
                this.dropdown.css({
                    width: selectWidth,
                    left: calcLeft,
                    top: calcTop
                });
            }

            // refresh flipped class
            this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && needFlipDrop);
        },
        showDropdown: function() {
            // do not show empty custom dropdown
            if (!this.realElement.prop('options').length) {
                return;
            }

            // create options list if not created
            if (!this.dropdown) {
                this.createDropdown();
            }

            // show dropdown
            this.dropActive = true;
            this.dropdown.appendTo(this.fakeDropTarget);
            this.fakeElement.addClass(this.options.dropActiveClass);
            this.refreshSelectedText();
            this.repositionDropdown();
            this.list.setScrollTop(this.savedScrollTop);
            this.list.refresh();

            // add temporary event handlers
            this.win.on('resize', this.onResize);
            this.doc.on('jcf-pointerdown', this.onOutsideClick);
        },
        hideDropdown: function() {
            if (this.dropdown) {
                this.savedScrollTop = this.list.getScrollTop();
                this.fakeElement.removeClass(this.options.dropActiveClass + ' ' + this.options.flipDropClass);
                this.dropdown.removeClass(this.options.flipDropClass).detach();
                this.doc.off('jcf-pointerdown', this.onOutsideClick);
                this.win.off('resize', this.onResize);
                this.dropActive = false;
                if (this.selectOpenedByEvent === 'touch') {
                    this.onBlur();
                }
            }
        },
        toggleDropdown: function() {
            if (this.dropActive) {
                this.hideDropdown();
            } else {
                this.showDropdown();
            }
        },
        refreshSelectedText: function() {
            // redraw selected area
            var selectedIndex = this.realElement.prop('selectedIndex'),
                selectedOption = this.realElement.prop('options')[selectedIndex],
                selectedOptionImage = selectedOption ? selectedOption.getAttribute('data-image') : null,
                selectedOptionText = '',
                selectedOptionClasses,
                self = this;

            if (this.realElement.prop('multiple')) {
                $.each(this.realElement.prop('options'), function(index, option) {
                    if (option.selected) {
                        selectedOptionText += (selectedOptionText ? ', ' : '') + option.innerHTML;
                    }
                });
                if (!selectedOptionText) {
                    selectedOptionText = self.realElement.attr('placeholder') || '';
                }
                this.selectText.removeAttr('class').html(selectedOptionText);
            } else if (!selectedOption) {
                if (this.selectImage) {
                    this.selectImage.hide();
                }
                this.selectText.removeAttr('class').empty();
            } else if (this.currentSelectedText !== selectedOption.innerHTML || this.currentSelectedImage !== selectedOptionImage) {
                selectedOptionClasses = getPrefixedClasses(selectedOption.className, this.options.optionClassPrefix);
                this.selectText.attr('class', selectedOptionClasses).html(selectedOption.innerHTML);

                if (selectedOptionImage) {
                    if (!this.selectImage) {
                        this.selectImage = $('<img>').prependTo(this.selectTextContainer).hide();
                    }
                    this.selectImage.attr('src', selectedOptionImage).show();
                } else if (this.selectImage) {
                    this.selectImage.hide();
                }

                this.currentSelectedText = selectedOption.innerHTML;
                this.currentSelectedImage = selectedOptionImage;
            }
        },
        refresh: function() {
            // refresh fake select visibility
            if (this.realElement.prop('style').display === 'none') {
                this.fakeElement.hide();
            } else {
                this.fakeElement.show();
            }

            // refresh selected text
            this.refreshSelectedText();

            // handle disabled state
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
        },
        destroy: function() {
            // restore structure
            if (this.options.wrapNative) {
                this.realElement.insertBefore(this.fakeElement).css({
                    position: '',
                    height: '',
                    width: ''
                }).removeClass(this.options.resetAppearanceClass);
            } else {
                this.realElement.removeClass(this.options.hiddenClass);
                if (this.realElement.is('[jcf-size]')) {
                    this.realElement.removeAttr('size jcf-size');
                }
            }

            // removing element will also remove its event handlers
            this.fakeElement.remove();

            // remove other event handlers
            this.doc.off('jcf-pointerup', this.onSelectAreaRelease);
            this.realElement.off({
                focus: this.onFocus
            });
        }
    });

    // listbox module
    function ListBox(options) {
        this.options = $.extend({
            wrapNative: true,
            useCustomScroll: true,
            fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
            selectClassPrefix: 'jcf-select-',
            listHolder: '.jcf-list-wrapper'
        }, options);
        this.init();
    }
    $.extend(ListBox.prototype, {
        init: function() {
            this.bindHandlers();
            this.initStructure();
            this.attachEvents();
        },
        initStructure: function() {
            this.realElement = $(this.options.element);
            this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
            this.listHolder = this.fakeElement.find(this.options.listHolder);
            makeUnselectable(this.fakeElement);

            // copy classes from original select
            this.fakeElement.addClass(getPrefixedClasses(this.realElement.prop('className'), this.options.selectClassPrefix));
            this.realElement.addClass(this.options.hiddenClass);

            this.list = new SelectList({
                useCustomScroll: this.options.useCustomScroll,
                holder: this.listHolder,
                selectOnClick: false,
                element: this.realElement
            });
        },
        attachEvents: function() {
            // delayed refresh handler
            var self = this;
            this.delayedRefresh = function(e) {
                if (e && e.which === 16) {
                    // ignore SHIFT key
                    return;
                } else {
                    clearTimeout(self.refreshTimer);
                    self.refreshTimer = setTimeout(function() {
                        self.refresh();
                        self.list.scrollToActiveOption();
                    }, 1);
                }
            };

            // other event handlers
            this.realElement.on({
                focus: this.onFocus,
                click: this.delayedRefresh,
                keydown: this.delayedRefresh
            });

            // select list event handlers
            $(this.list).on({
                select: this.onSelect,
                press: this.onFakeOptionsPress,
                release: this.onFakeOptionsRelease
            });
        },
        onFakeOptionsPress: function(e, pointerEvent) {
            this.pressedFlag = true;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onFakeOptionsRelease: function(e, pointerEvent) {
            this.pressedFlag = false;
            if (pointerEvent.pointerType === 'mouse') {
                this.realElement.focus();
            }
        },
        onSelect: function() {
            this.fireNativeEvent(this.realElement, 'change');
            this.fireNativeEvent(this.realElement, 'click');
        },
        onFocus: function() {
            if (!this.pressedFlag || !this.focusedFlag) {
                this.fakeElement.addClass(this.options.focusClass);
                this.realElement.on('blur', this.onBlur);
                this.focusedFlag = true;
            }
        },
        onBlur: function() {
            if (!this.pressedFlag) {
                this.fakeElement.removeClass(this.options.focusClass);
                this.realElement.off('blur', this.onBlur);
                this.focusedFlag = false;
            }
        },
        refresh: function() {
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
            this.list.refresh();
        },
        destroy: function() {
            this.list.destroy();
            this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass);
            this.fakeElement.remove();
        }
    });

    // options list module
    function SelectList(options) {
        this.options = $.extend({
            holder: null,
            maxVisibleItems: 10,
            selectOnClick: true,
            useHoverClass: false,
            useCustomScroll: false,
            handleResize: true,
            multipleSelectWithoutKey: false,
            alwaysPreventMouseWheel: false,
            indexAttribute: 'data-index',
            cloneClassPrefix: 'jcf-option-',
            containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
            containerSelector: '.jcf-list-content',
            captionClass: 'jcf-optgroup-caption',
            disabledClass: 'jcf-disabled',
            optionClass: 'jcf-option',
            groupClass: 'jcf-optgroup',
            hoverClass: 'jcf-hover',
            selectedClass: 'jcf-selected',
            scrollClass: 'jcf-scroll-active'
        }, options);
        this.init();
    }
    $.extend(SelectList.prototype, {
        init: function() {
            this.initStructure();
            this.refreshSelectedClass();
            this.attachEvents();
        },
        initStructure: function() {
            this.element = $(this.options.element);
            this.indexSelector = '[' + this.options.indexAttribute + ']';
            this.container = $(this.options.containerStructure).appendTo(this.options.holder);
            this.listHolder = this.container.find(this.options.containerSelector);
            this.lastClickedIndex = this.element.prop('selectedIndex');
            this.rebuildList();
        },
        attachEvents: function() {
            this.bindHandlers();
            this.listHolder.on('jcf-pointerdown', this.indexSelector, this.onItemPress);
            this.listHolder.on('jcf-pointerdown', this.onPress);

            if (this.options.useHoverClass) {
                this.listHolder.on('jcf-pointerover', this.indexSelector, this.onHoverItem);
            }
        },
        onPress: function(e) {
            $(this).trigger('press', e);
            this.listHolder.on('jcf-pointerup', this.onRelease);
        },
        onRelease: function(e) {
            $(this).trigger('release', e);
            this.listHolder.off('jcf-pointerup', this.onRelease);
        },
        onHoverItem: function(e) {
            var hoverIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));
            this.fakeOptions.removeClass(this.options.hoverClass).eq(hoverIndex).addClass(this.options.hoverClass);
        },
        onItemPress: function(e) {
            if (e.pointerType === 'touch' || this.options.selectOnClick) {
                // select option after "click"
                this.tmpListOffsetTop = this.list.offset().top;
                this.listHolder.on('jcf-pointerup', this.indexSelector, this.onItemRelease);
            } else {
                // select option immediately
                this.onSelectItem(e);
            }
        },
        onItemRelease: function(e) {
            // remove event handlers and temporary data
            this.listHolder.off('jcf-pointerup', this.indexSelector, this.onItemRelease);

            // simulate item selection
            if (this.tmpListOffsetTop === this.list.offset().top) {
                this.listHolder.on('click', this.indexSelector, { savedPointerType: e.pointerType }, this.onSelectItem);
            }
            delete this.tmpListOffsetTop;
        },
        onSelectItem: function(e) {
            var clickedIndex = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
                pointerType = e.data && e.data.savedPointerType || e.pointerType || 'mouse',
                range;

            // remove click event handler
            this.listHolder.off('click', this.indexSelector, this.onSelectItem);

            // ignore clicks on disabled options
            if (e.button > 1 || this.realOptions[clickedIndex].disabled) {
                return;
            }

            if (this.element.prop('multiple')) {
                if (e.metaKey || e.ctrlKey || pointerType === 'touch' || this.options.multipleSelectWithoutKey) {
                    // if CTRL/CMD pressed or touch devices - toggle selected option
                    this.realOptions[clickedIndex].selected = !this.realOptions[clickedIndex].selected;
                } else if (e.shiftKey) {
                    // if SHIFT pressed - update selection
                    range = [this.lastClickedIndex, clickedIndex].sort(function(a, b) {
                        return a - b;
                    });
                    this.realOptions.each(function(index, option) {
                        option.selected = (index >= range[0] && index <= range[1]);
                    });
                } else {
                    // set single selected index
                    this.element.prop('selectedIndex', clickedIndex);
                }
            } else {
                this.element.prop('selectedIndex', clickedIndex);
            }

            // save last clicked option
            if (!e.shiftKey) {
                this.lastClickedIndex = clickedIndex;
            }

            // refresh classes
            this.refreshSelectedClass();

            // scroll to active item in desktop browsers
            if (pointerType === 'mouse') {
                this.scrollToActiveOption();
            }

            // make callback when item selected
            $(this).trigger('select');
        },
        rebuildList: function() {
            // rebuild options
            var self = this,
                rootElement = this.element[0];

            // recursively create fake options
            this.storedSelectHTML = rootElement.innerHTML;
            this.optionIndex = 0;
            this.list = $(this.createOptionsList(rootElement));
            this.listHolder.empty().append(this.list);
            this.realOptions = this.element.find('option');
            this.fakeOptions = this.list.find(this.indexSelector);
            this.fakeListItems = this.list.find('.' + this.options.captionClass + ',' + this.indexSelector);
            delete this.optionIndex;

            // detect max visible items
            var maxCount = this.options.maxVisibleItems,
                sizeValue = this.element.prop('size');
            if (sizeValue > 1 && !this.element.is('[jcf-size]')) {
                maxCount = sizeValue;
            }

            // handle scrollbar
            var needScrollBar = this.fakeOptions.length > maxCount;
            this.container.toggleClass(this.options.scrollClass, needScrollBar);
            if (needScrollBar) {
                // change max-height
                this.listHolder.css({
                    maxHeight: this.getOverflowHeight(maxCount),
                    overflow: 'auto'
                });

                if (this.options.useCustomScroll && jcf.modules.Scrollable) {
                    // add custom scrollbar if specified in options
                    jcf.replace(this.listHolder, 'Scrollable', {
                        handleResize: this.options.handleResize,
                        alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
                    });
                    return;
                }
            }

            // disable edge wheel scrolling
            if (this.options.alwaysPreventMouseWheel) {
                this.preventWheelHandler = function(e) {
                    var currentScrollTop = self.listHolder.scrollTop(),
                        maxScrollTop = self.listHolder.prop('scrollHeight') - self.listHolder.innerHeight();

                    // check edge cases
                    if ((currentScrollTop <= 0 && e.deltaY < 0) || (currentScrollTop >= maxScrollTop && e.deltaY > 0)) {
                        e.preventDefault();
                    }
                };
                this.listHolder.on('jcf-mousewheel', this.preventWheelHandler);
            }
        },
        refreshSelectedClass: function() {
            var self = this,
                selectedItem,
                isMultiple = this.element.prop('multiple'),
                selectedIndex = this.element.prop('selectedIndex');

            if (isMultiple) {
                this.realOptions.each(function(index, option) {
                    self.fakeOptions.eq(index).toggleClass(self.options.selectedClass, !!option.selected);
                });
            } else {
                this.fakeOptions.removeClass(this.options.selectedClass + ' ' + this.options.hoverClass);
                selectedItem = this.fakeOptions.eq(selectedIndex).addClass(this.options.selectedClass);
                if (this.options.useHoverClass) {
                    selectedItem.addClass(this.options.hoverClass);
                }
            }
        },
        scrollToActiveOption: function() {
            // scroll to target option
            var targetOffset = this.getActiveOptionOffset();
            if (typeof targetOffset === 'number') {
                this.listHolder.prop('scrollTop', targetOffset);
            }
        },
        getSelectedIndexRange: function() {
            var firstSelected = -1, lastSelected = -1;
            this.realOptions.each(function(index, option) {
                if (option.selected) {
                    if (firstSelected < 0) {
                        firstSelected = index;
                    }
                    lastSelected = index;
                }
            });
            return [firstSelected, lastSelected];
        },
        getChangedSelectedIndex: function() {
            var selectedIndex = this.element.prop('selectedIndex'),
                targetIndex;

            if (this.element.prop('multiple')) {
                // multiple selects handling
                if (!this.previousRange) {
                    this.previousRange = [selectedIndex, selectedIndex];
                }
                this.currentRange = this.getSelectedIndexRange();
                targetIndex = this.currentRange[this.currentRange[0] !== this.previousRange[0] ? 0 : 1];
                this.previousRange = this.currentRange;
                return targetIndex;
            } else {
                // single choice selects handling
                return selectedIndex;
            }
        },
        getActiveOptionOffset: function() {
            // calc values
            var dropHeight = this.listHolder.height(),
                dropScrollTop = this.listHolder.prop('scrollTop'),
                currentIndex = this.getChangedSelectedIndex(),
                fakeOption = this.fakeOptions.eq(currentIndex),
                fakeOptionOffset = fakeOption.offset().top - this.list.offset().top,
                fakeOptionHeight = fakeOption.innerHeight();

            // scroll list
            if (fakeOptionOffset + fakeOptionHeight >= dropScrollTop + dropHeight) {
                // scroll down (always scroll to option)
                return fakeOptionOffset - dropHeight + fakeOptionHeight;
            } else if (fakeOptionOffset < dropScrollTop) {
                // scroll up to option
                return fakeOptionOffset;
            }
        },
        getOverflowHeight: function(sizeValue) {
            var item = this.fakeListItems.eq(sizeValue - 1),
                listOffset = this.list.offset().top,
                itemOffset = item.offset().top,
                itemHeight = item.innerHeight();

            return itemOffset + itemHeight - listOffset;
        },
        getScrollTop: function() {
            return this.listHolder.scrollTop();
        },
        setScrollTop: function(value) {
            this.listHolder.scrollTop(value);
        },
        createOption: function(option) {
            var newOption = document.createElement('span');
            newOption.className = this.options.optionClass;
            newOption.innerHTML = option.innerHTML;
            newOption.setAttribute(this.options.indexAttribute, this.optionIndex++);

            var optionImage, optionImageSrc = option.getAttribute('data-image');
            if (optionImageSrc) {
                optionImage = document.createElement('img');
                optionImage.src = optionImageSrc;
                newOption.insertBefore(optionImage, newOption.childNodes[0]);
            }
            if (option.disabled) {
                newOption.className += ' ' + this.options.disabledClass;
            }
            if (option.className) {
                newOption.className += ' ' + getPrefixedClasses(option.className, this.options.cloneClassPrefix);
            }
            return newOption;
        },
        createOptGroup: function(optgroup) {
            var optGroupContainer = document.createElement('span'),
                optGroupName = optgroup.getAttribute('label'),
                optGroupCaption, optGroupList;

            // create caption
            optGroupCaption = document.createElement('span');
            optGroupCaption.className = this.options.captionClass;
            optGroupCaption.innerHTML = optGroupName;
            optGroupContainer.appendChild(optGroupCaption);

            // create list of options
            if (optgroup.children.length) {
                optGroupList = this.createOptionsList(optgroup);
                optGroupContainer.appendChild(optGroupList);
            }

            optGroupContainer.className = this.options.groupClass;
            return optGroupContainer;
        },
        createOptionContainer: function() {
            var optionContainer = document.createElement('li');
            return optionContainer;
        },
        createOptionsList: function(container) {
            var self = this,
                list = document.createElement('ul');

            $.each(container.children, function(index, currentNode) {
                var item = self.createOptionContainer(currentNode),
                    newNode;

                switch (currentNode.tagName.toLowerCase()) {
                    case 'option': newNode = self.createOption(currentNode); break;
                    case 'optgroup': newNode = self.createOptGroup(currentNode); break;
                }
                list.appendChild(item).appendChild(newNode);
            });
            return list;
        },
        refresh: function() {
            // check for select innerHTML changes
            if (this.storedSelectHTML !== this.element.prop('innerHTML')) {
                this.rebuildList();
            }

            // refresh custom scrollbar
            var scrollInstance = jcf.getInstance(this.listHolder);
            if (scrollInstance) {
                scrollInstance.refresh();
            }

            // refresh selectes classes
            this.refreshSelectedClass();
        },
        destroy: function() {
            this.listHolder.off('jcf-mousewheel', this.preventWheelHandler);
            this.listHolder.off('jcf-pointerdown', this.indexSelector, this.onSelectItem);
            this.listHolder.off('jcf-pointerover', this.indexSelector, this.onHoverItem);
            this.listHolder.off('jcf-pointerdown', this.onPress);
        }
    });

    // helper functions
    var getPrefixedClasses = function(className, prefixToAdd) {
        return className ? className.replace(/[\s]*([\S]+)+[\s]*/gi, prefixToAdd + '$1 ') : '';
    };
    var makeUnselectable = (function() {
        var unselectableClass = jcf.getOptions().unselectableClass;
        function preventHandler(e) {
            e.preventDefault();
        }
        return function(node) {
            node.addClass(unselectableClass).on('selectstart', preventHandler);
        };
    }());

}(jQuery, this));

/*!
 * JavaScript Custom Forms : Scrollbar Module
 */
;(function($, window) {
    'use strict';

    jcf.addModule({
        name: 'Scrollable',
        selector: '.jcf-scrollable',
        plugins: {
            ScrollBar: ScrollBar
        },
        options: {
            mouseWheelStep: 150,
            handleResize: true,
            alwaysShowScrollbars: false,
            alwaysPreventMouseWheel: false,
            scrollAreaStructure: '<div class="jcf-scrollable-wrapper"></div>'
        },
        matchElement: function(element) {
            return element.is('.jcf-scrollable');
        },
        init: function() {
            this.initStructure();
            this.attachEvents();
            this.rebuildScrollbars();
        },
        initStructure: function() {
            // prepare structure
            this.doc = $(document);
            this.win = $(window);
            this.realElement = $(this.options.element);
            this.scrollWrapper = $(this.options.scrollAreaStructure).insertAfter(this.realElement);

            // set initial styles
            this.scrollWrapper.css('position', 'relative');
            this.realElement.css('overflow', this.options.ios && this.options.ios >= 10 ? 'auto' : 'hidden');
            this.vBarEdge = 0;
        },
        attachEvents: function() {
            // create scrollbars
            var self = this;
            this.vBar = new ScrollBar({
                holder: this.scrollWrapper,
                vertical: true,
                onScroll: function(scrollTop) {
                    self.realElement.scrollTop(scrollTop);
                }
            });
            this.hBar = new ScrollBar({
                holder: this.scrollWrapper,
                vertical: false,
                onScroll: function(scrollLeft) {
                    self.realElement.scrollLeft(scrollLeft);
                }
            });

            // add event handlers
            this.realElement.on('scroll', this.onScroll);
            if (this.options.handleResize) {
                this.win.on('resize orientationchange load', this.onResize);
            }

            // add pointer/wheel event handlers
            this.realElement.on('jcf-mousewheel', this.onMouseWheel);
            this.realElement.on('jcf-pointerdown', this.onTouchBody);
        },
        onScroll: function() {
            this.redrawScrollbars();
        },
        onResize: function() {
            // do not rebuild scrollbars if form field is in focus
            if (!$(document.activeElement).is(':input')) {
                this.rebuildScrollbars();
            }
        },
        onTouchBody: function(e) {
            if (e.pointerType === 'touch') {
                this.touchData = {
                    scrollTop: this.realElement.scrollTop(),
                    scrollLeft: this.realElement.scrollLeft(),
                    left: e.pageX,
                    top: e.pageY
                };
                this.doc.on({
                    'jcf-pointermove': this.onMoveBody,
                    'jcf-pointerup': this.onReleaseBody
                });
            }
        },
        onMoveBody: function(e) {
            var targetScrollTop,
                targetScrollLeft,
                verticalScrollAllowed = this.verticalScrollActive,
                horizontalScrollAllowed = this.horizontalScrollActive;

            if (e.pointerType === 'touch') {
                targetScrollTop = this.touchData.scrollTop - e.pageY + this.touchData.top;
                targetScrollLeft = this.touchData.scrollLeft - e.pageX + this.touchData.left;

                // check that scrolling is ended and release outer scrolling
                if (this.verticalScrollActive && (targetScrollTop < 0 || targetScrollTop > this.vBar.maxValue)) {
                    verticalScrollAllowed = false;
                }
                if (this.horizontalScrollActive && (targetScrollLeft < 0 || targetScrollLeft > this.hBar.maxValue)) {
                    horizontalScrollAllowed = false;
                }

                this.realElement.scrollTop(targetScrollTop);
                this.realElement.scrollLeft(targetScrollLeft);

                if (verticalScrollAllowed || horizontalScrollAllowed) {
                    e.preventDefault();
                } else {
                    this.onReleaseBody(e);
                }
            }
        },
        onReleaseBody: function(e) {
            if (e.pointerType === 'touch') {
                delete this.touchData;
                this.doc.off({
                    'jcf-pointermove': this.onMoveBody,
                    'jcf-pointerup': this.onReleaseBody
                });
            }
        },
        onMouseWheel: function(e) {
            var currentScrollTop = this.realElement.scrollTop(),
                currentScrollLeft = this.realElement.scrollLeft(),
                maxScrollTop = this.realElement.prop('scrollHeight') - this.embeddedDimensions.innerHeight,
                maxScrollLeft = this.realElement.prop('scrollWidth') - this.embeddedDimensions.innerWidth,
                extraLeft, extraTop, preventFlag;

            // check edge cases
            if (!this.options.alwaysPreventMouseWheel) {
                if (this.verticalScrollActive && e.deltaY) {
                    if (!(currentScrollTop <= 0 && e.deltaY < 0) && !(currentScrollTop >= maxScrollTop && e.deltaY > 0)) {
                        preventFlag = true;
                    }
                }
                if (this.horizontalScrollActive && e.deltaX) {
                    if (!(currentScrollLeft <= 0 && e.deltaX < 0) && !(currentScrollLeft >= maxScrollLeft && e.deltaX > 0)) {
                        preventFlag = true;
                    }
                }
                if (!this.verticalScrollActive && !this.horizontalScrollActive) {
                    return;
                }
            }

            // prevent default action and scroll item
            if (preventFlag || this.options.alwaysPreventMouseWheel) {
                e.preventDefault();
            } else {
                return;
            }

            extraLeft = e.deltaX / 100 * this.options.mouseWheelStep;
            extraTop = e.deltaY / 100 * this.options.mouseWheelStep;

            this.realElement.scrollTop(currentScrollTop + extraTop);
            this.realElement.scrollLeft(currentScrollLeft + extraLeft);
        },
        setScrollBarEdge: function(edgeSize) {
            this.vBarEdge = edgeSize || 0;
            this.redrawScrollbars();
        },
        saveElementDimensions: function() {
            this.savedDimensions = {
                top: this.realElement.width(),
                left: this.realElement.height()
            };
            return this;
        },
        restoreElementDimensions: function() {
            if (this.savedDimensions) {
                this.realElement.css({
                    width: this.savedDimensions.width,
                    height: this.savedDimensions.height
                });
            }
            return this;
        },
        saveScrollOffsets: function() {
            this.savedOffsets = {
                top: this.realElement.scrollTop(),
                left: this.realElement.scrollLeft()
            };
            return this;
        },
        restoreScrollOffsets: function() {
            if (this.savedOffsets) {
                this.realElement.scrollTop(this.savedOffsets.top);
                this.realElement.scrollLeft(this.savedOffsets.left);
            }
            return this;
        },
        getContainerDimensions: function() {
            // save current styles
            var desiredDimensions,
                currentStyles,
                currentHeight,
                currentWidth;

            if (this.isModifiedStyles) {
                desiredDimensions = {
                    width: this.realElement.innerWidth() + this.vBar.getThickness(),
                    height: this.realElement.innerHeight() + this.hBar.getThickness()
                };
            } else {
                // unwrap real element and measure it according to CSS
                this.saveElementDimensions().saveScrollOffsets();
                this.realElement.insertAfter(this.scrollWrapper);
                this.scrollWrapper.detach();

                // measure element
                currentStyles = this.realElement.prop('style');
                currentWidth = parseFloat(currentStyles.width);
                currentHeight = parseFloat(currentStyles.height);

                // reset styles if needed
                if (this.embeddedDimensions && currentWidth && currentHeight) {
                    this.isModifiedStyles |= (currentWidth !== this.embeddedDimensions.width || currentHeight !== this.embeddedDimensions.height);
                    this.realElement.css({
                        overflow: '',
                        width: '',
                        height: ''
                    });
                }

                // calculate desired dimensions for real element
                desiredDimensions = {
                    width: this.realElement.outerWidth(),
                    height: this.realElement.outerHeight()
                };

                // restore structure and original scroll offsets
                this.scrollWrapper.insertAfter(this.realElement);
                this.realElement.css('overflow', this.options.ios && this.options.ios >= 10 ? 'auto' : 'hidden').prependTo(this.scrollWrapper);
                this.restoreElementDimensions().restoreScrollOffsets();
            }

            return desiredDimensions;
        },
        getEmbeddedDimensions: function(dimensions) {
            // handle scrollbars cropping
            var fakeBarWidth = this.vBar.getThickness(),
                fakeBarHeight = this.hBar.getThickness(),
                paddingWidth = this.realElement.outerWidth() - this.realElement.width(),
                paddingHeight = this.realElement.outerHeight() - this.realElement.height(),
                resultDimensions;

            if (this.options.alwaysShowScrollbars) {
                // simply return dimensions without custom scrollbars
                this.verticalScrollActive = true;
                this.horizontalScrollActive = true;
                resultDimensions = {
                    innerWidth: dimensions.width - fakeBarWidth,
                    innerHeight: dimensions.height - fakeBarHeight
                };
            } else {
                // detect when to display each scrollbar
                this.saveElementDimensions();
                this.verticalScrollActive = false;
                this.horizontalScrollActive = false;

                // fill container with full size
                this.realElement.css({
                    width: dimensions.width - paddingWidth,
                    height: dimensions.height - paddingHeight
                });

                this.horizontalScrollActive = this.realElement.prop('scrollWidth') > this.containerDimensions.width;
                this.verticalScrollActive = this.realElement.prop('scrollHeight') > this.containerDimensions.height;

                this.restoreElementDimensions();
                resultDimensions = {
                    innerWidth: dimensions.width - (this.verticalScrollActive ? fakeBarWidth : 0),
                    innerHeight: dimensions.height - (this.horizontalScrollActive ? fakeBarHeight : 0)
                };
            }
            $.extend(resultDimensions, {
                width: resultDimensions.innerWidth - paddingWidth,
                height: resultDimensions.innerHeight - paddingHeight
            });
            return resultDimensions;
        },
        rebuildScrollbars: function() {
            // resize wrapper according to real element styles
            this.containerDimensions = this.getContainerDimensions();
            this.embeddedDimensions = this.getEmbeddedDimensions(this.containerDimensions);

            // resize wrapper to desired dimensions
            this.scrollWrapper.css({
                width: this.containerDimensions.width,
                height: this.containerDimensions.height
            });

            // resize element inside wrapper excluding scrollbar size
            this.realElement.css({
                overflow: this.options.ios && this.options.ios >= 10 ? 'auto' : 'hidden',
                width: this.embeddedDimensions.width,
                height: this.embeddedDimensions.height
            });

            // redraw scrollbar offset
            this.redrawScrollbars();
        },
        redrawScrollbars: function() {
            var viewSize, maxScrollValue;

            // redraw vertical scrollbar
            if (this.verticalScrollActive) {
                viewSize = this.vBarEdge ? this.containerDimensions.height - this.vBarEdge : this.embeddedDimensions.innerHeight;
                maxScrollValue = Math.max(this.realElement.prop('offsetHeight'), this.realElement.prop('scrollHeight')) - this.vBarEdge;

                this.vBar.show().setMaxValue(maxScrollValue - viewSize).setRatio(viewSize / maxScrollValue).setSize(viewSize);
                this.vBar.setValue(this.realElement.scrollTop());
            } else {
                this.vBar.hide();
            }

            // redraw horizontal scrollbar
            if (this.horizontalScrollActive) {
                viewSize = this.embeddedDimensions.innerWidth;
                maxScrollValue = this.realElement.prop('scrollWidth');

                if (maxScrollValue === viewSize) {
                    this.horizontalScrollActive = false;
                }
                this.hBar.show().setMaxValue(maxScrollValue - viewSize).setRatio(viewSize / maxScrollValue).setSize(viewSize);
                this.hBar.setValue(this.realElement.scrollLeft());
            } else {
                this.hBar.hide();
            }

            // set "touch-action" style rule
            var touchAction = '';
            if (this.verticalScrollActive && this.horizontalScrollActive) {
                touchAction = 'none';
            } else if (this.verticalScrollActive) {
                touchAction = 'pan-x';
            } else if (this.horizontalScrollActive) {
                touchAction = 'pan-y';
            }
            this.realElement.css('touchAction', touchAction);
        },
        refresh: function() {
            this.rebuildScrollbars();
        },
        destroy: function() {
            // remove event listeners
            this.win.off('resize orientationchange load', this.onResize);
            this.realElement.off({
                'jcf-mousewheel': this.onMouseWheel,
                'jcf-pointerdown': this.onTouchBody
            });
            this.doc.off({
                'jcf-pointermove': this.onMoveBody,
                'jcf-pointerup': this.onReleaseBody
            });

            // restore structure
            this.saveScrollOffsets();
            this.vBar.destroy();
            this.hBar.destroy();
            this.realElement.insertAfter(this.scrollWrapper).css({
                touchAction: '',
                overflow: '',
                width: '',
                height: ''
            });
            this.scrollWrapper.remove();
            this.restoreScrollOffsets();
        }
    });

    // custom scrollbar
    function ScrollBar(options) {
        this.options = $.extend({
            holder: null,
            vertical: true,
            inactiveClass: 'jcf-inactive',
            verticalClass: 'jcf-scrollbar-vertical',
            horizontalClass: 'jcf-scrollbar-horizontal',
            scrollbarStructure: '<div class="jcf-scrollbar"><div class="jcf-scrollbar-dec"></div><div class="jcf-scrollbar-slider"><div class="jcf-scrollbar-handle"></div></div><div class="jcf-scrollbar-inc"></div></div>',
            btnDecSelector: '.jcf-scrollbar-dec',
            btnIncSelector: '.jcf-scrollbar-inc',
            sliderSelector: '.jcf-scrollbar-slider',
            handleSelector: '.jcf-scrollbar-handle',
            scrollInterval: 300,
            scrollStep: 400 // px/sec
        }, options);
        this.init();
    }
    $.extend(ScrollBar.prototype, {
        init: function() {
            this.initStructure();
            this.attachEvents();
        },
        initStructure: function() {
            // define proporties
            this.doc = $(document);
            this.isVertical = !!this.options.vertical;
            this.sizeProperty = this.isVertical ? 'height' : 'width';
            this.fullSizeProperty = this.isVertical ? 'outerHeight' : 'outerWidth';
            this.invertedSizeProperty = this.isVertical ? 'width' : 'height';
            this.thicknessMeasureMethod = 'outer' + this.invertedSizeProperty.charAt(0).toUpperCase() + this.invertedSizeProperty.substr(1);
            this.offsetProperty = this.isVertical ? 'top' : 'left';
            this.offsetEventProperty = this.isVertical ? 'pageY' : 'pageX';

            // initialize variables
            this.value = this.options.value || 0;
            this.maxValue = this.options.maxValue || 0;
            this.currentSliderSize = 0;
            this.handleSize = 0;

            // find elements
            this.holder = $(this.options.holder);
            this.scrollbar = $(this.options.scrollbarStructure).appendTo(this.holder);
            this.btnDec = this.scrollbar.find(this.options.btnDecSelector);
            this.btnInc = this.scrollbar.find(this.options.btnIncSelector);
            this.slider = this.scrollbar.find(this.options.sliderSelector);
            this.handle = this.slider.find(this.options.handleSelector);

            // set initial styles
            this.scrollbar.addClass(this.isVertical ? this.options.verticalClass : this.options.horizontalClass).css({
                touchAction: this.isVertical ? 'pan-x' : 'pan-y',
                position: 'absolute'
            });
            this.slider.css({
                position: 'relative'
            });
            this.handle.css({
                touchAction: 'none',
                position: 'absolute'
            });
        },
        attachEvents: function() {
            this.bindHandlers();
            this.handle.on('jcf-pointerdown', this.onHandlePress);
            this.slider.add(this.btnDec).add(this.btnInc).on('jcf-pointerdown', this.onButtonPress);
        },
        onHandlePress: function(e) {
            if (e.pointerType === 'mouse' && e.button > 1) {
                return;
            } else {
                e.preventDefault();
                this.handleDragActive = true;
                this.sliderOffset = this.slider.offset()[this.offsetProperty];
                this.innerHandleOffset = e[this.offsetEventProperty] - this.handle.offset()[this.offsetProperty];

                this.doc.on('jcf-pointermove', this.onHandleDrag);
                this.doc.on('jcf-pointerup', this.onHandleRelease);
            }
        },
        onHandleDrag: function(e) {
            e.preventDefault();
            this.calcOffset = e[this.offsetEventProperty] - this.sliderOffset - this.innerHandleOffset;
            this.setValue(this.calcOffset / (this.currentSliderSize - this.handleSize) * this.maxValue);
            this.triggerScrollEvent(this.value);
        },
        onHandleRelease: function() {
            this.handleDragActive = false;
            this.doc.off('jcf-pointermove', this.onHandleDrag);
            this.doc.off('jcf-pointerup', this.onHandleRelease);
        },
        onButtonPress: function(e) {
            var direction, clickOffset;
            if (e.pointerType === 'mouse' && e.button > 1) {
                return;
            } else {
                e.preventDefault();
                if (!this.handleDragActive) {
                    if (this.slider.is(e.currentTarget)) {
                        // slider pressed
                        direction = this.handle.offset()[this.offsetProperty] > e[this.offsetEventProperty] ? -1 : 1;
                        clickOffset = e[this.offsetEventProperty] - this.slider.offset()[this.offsetProperty];
                        this.startPageScrolling(direction, clickOffset);
                    } else {
                        // scrollbar buttons pressed
                        direction = this.btnDec.is(e.currentTarget) ? -1 : 1;
                        this.startSmoothScrolling(direction);
                    }
                    this.doc.on('jcf-pointerup', this.onButtonRelease);
                }
            }
        },
        onButtonRelease: function() {
            this.stopPageScrolling();
            this.stopSmoothScrolling();
            this.doc.off('jcf-pointerup', this.onButtonRelease);
        },
        startPageScrolling: function(direction, clickOffset) {
            var self = this,
                stepValue = direction * self.currentSize;

            // limit checker
            var isFinishedScrolling = function() {
                var handleTop = (self.value / self.maxValue) * (self.currentSliderSize - self.handleSize);

                if (direction > 0) {
                    return handleTop + self.handleSize >= clickOffset;
                } else {
                    return handleTop <= clickOffset;
                }
            };

            // scroll by page when track is pressed
            var doPageScroll = function() {
                self.value += stepValue;
                self.setValue(self.value);
                self.triggerScrollEvent(self.value);

                if (isFinishedScrolling()) {
                    clearInterval(self.pageScrollTimer);
                }
            };

            // start scrolling
            this.pageScrollTimer = setInterval(doPageScroll, this.options.scrollInterval);
            doPageScroll();
        },
        stopPageScrolling: function() {
            clearInterval(this.pageScrollTimer);
        },
        startSmoothScrolling: function(direction) {
            var self = this, dt;
            this.stopSmoothScrolling();

            // simple animation functions
            var raf = window.requestAnimationFrame || function(func) {
                setTimeout(func, 16);
            };
            var getTimestamp = function() {
                return Date.now ? Date.now() : new Date().getTime();
            };

            // set animation limit
            var isFinishedScrolling = function() {
                if (direction > 0) {
                    return self.value >= self.maxValue;
                } else {
                    return self.value <= 0;
                }
            };

            // animation step
            var doScrollAnimation = function() {
                var stepValue = (getTimestamp() - dt) / 1000 * self.options.scrollStep;

                if (self.smoothScrollActive) {
                    self.value += stepValue * direction;
                    self.setValue(self.value);
                    self.triggerScrollEvent(self.value);

                    if (!isFinishedScrolling()) {
                        dt = getTimestamp();
                        raf(doScrollAnimation);
                    }
                }
            };

            // start animation
            self.smoothScrollActive = true;
            dt = getTimestamp();
            raf(doScrollAnimation);
        },
        stopSmoothScrolling: function() {
            this.smoothScrollActive = false;
        },
        triggerScrollEvent: function(scrollValue) {
            if (this.options.onScroll) {
                this.options.onScroll(scrollValue);
            }
        },
        getThickness: function() {
            return this.scrollbar[this.thicknessMeasureMethod]();
        },
        setSize: function(size) {
            // resize scrollbar
            var btnDecSize = this.btnDec[this.fullSizeProperty](),
                btnIncSize = this.btnInc[this.fullSizeProperty]();

            // resize slider
            this.currentSize = size;
            this.currentSliderSize = size - btnDecSize - btnIncSize;
            this.scrollbar.css(this.sizeProperty, size);
            this.slider.css(this.sizeProperty, this.currentSliderSize);
            this.currentSliderSize = this.slider[this.sizeProperty]();

            // resize handle
            this.handleSize = Math.round(this.currentSliderSize * this.ratio);
            this.handle.css(this.sizeProperty, this.handleSize);
            this.handleSize = this.handle[this.fullSizeProperty]();

            return this;
        },
        setRatio: function(ratio) {
            this.ratio = ratio;
            return this;
        },
        setMaxValue: function(maxValue) {
            this.maxValue = maxValue;
            this.setValue(Math.min(this.value, this.maxValue));
            return this;
        },
        setValue: function(value) {
            this.value = value;
            if (this.value < 0) {
                this.value = 0;
            } else if (this.value > this.maxValue) {
                this.value = this.maxValue;
            }
            this.refresh();
        },
        setPosition: function(styles) {
            this.scrollbar.css(styles);
            return this;
        },
        hide: function() {
            this.scrollbar.detach();
            return this;
        },
        show: function() {
            this.scrollbar.appendTo(this.holder);
            return this;
        },
        refresh: function() {
            // recalculate handle position
            if (this.value === 0 || this.maxValue === 0) {
                this.calcOffset = 0;
            } else {
                this.calcOffset = (this.value / this.maxValue) * (this.currentSliderSize - this.handleSize);
            }
            this.handle.css(this.offsetProperty, this.calcOffset);

            // toggle inactive classes
            this.btnDec.toggleClass(this.options.inactiveClass, this.value === 0);
            this.btnInc.toggleClass(this.options.inactiveClass, this.value === this.maxValue);
            this.scrollbar.toggleClass(this.options.inactiveClass, this.maxValue === 0);
        },
        destroy: function() {
            // remove event handlers and scrollbar block itself
            this.btnDec.add(this.btnInc).off('jcf-pointerdown', this.onButtonPress);
            this.handle.off('jcf-pointerdown', this.onHandlePress);
            this.doc.off('jcf-pointermove', this.onHandleDrag);
            this.doc.off('jcf-pointerup', this.onHandleRelease);
            this.doc.off('jcf-pointerup', this.onButtonRelease);
            this.stopSmoothScrolling();
            this.stopPageScrolling();
            this.scrollbar.remove();
        }
    });

}(jQuery, this));


/*
 * jQuery Datepicker plugin
 */
;(function($, $win) {
    'use strict';

    var DateMatcher = {
        getMatch: function(source, date) {
            var result = [true, ''];
            var self = this;

            $.each(source, function(key, value) {
                var parsedDate = self.parseDate(key);

                if (parsedDate.valueOf() === date.valueOf()) {
                    result = [!value.disabled, value.class || 'active'];
                }
            });

            return result;
        },

        parseDate: function(dateStr) {
            var dateArr = dateStr.split('/');
            return new Date(parseInt(dateArr[2], 10), parseInt(dateArr[1], 10)-1, parseInt(dateArr[0], 10));
        },
    };

    var Datepicker = {
        initSimple: function($el, options) {
            $.Deferred(function(defer) {
                if (options.source) {
                    $.getJSON(options.source)
                        .done(defer.resolve)
                        .fail(defer.reject);
                } else defer.resolve();
            }).then(function(source) {
                if (source) {
                    options.beforeShowDay = function(date) {
                        return DateMatcher.getMatch(source, date);
                    };
                }

                $el.datepicker($.extend({
                    dateFormat: 'd/mm/yy'
                }, options));
            });
        },
        initRange: function($el, options) {
            var $inputFrom = $el.find('[data-datepicker-from]');
            var $inputTo = $el.find('[data-datepicker-to]');

            this.initSimple($inputFrom, $.extend({}, options, $inputFrom.data('datepickerFrom'), {
                defaultDate: 0,
                onClose: function(selectedDate) {
                    $inputTo.datepicker('option', 'minDate', selectedDate);
                }
            }));

            this.initSimple($inputTo, $.extend({}, options, $inputTo.data('datepickerTo'), {
                defaultDate: 1,
                onClose: function(selectedDate) {
                    $inputFrom.datepicker('option', 'maxDate', selectedDate);
                }
            }));
        }
    };

    $.fn.uiDatepicker = function() {
        return this.each(function() {
            var $el = $(this);
            var data = $el.data('datepicker') || {};
            var method = 'init' + (data.rangepicker ? 'Range' : 'Simple');

            Datepicker[method]($el, data);
        });
    };
}(jQuery, jQuery(window)));

/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){var s,o,u,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,o=s.name,t.href&&o&&"map"===s.nodeName.toLowerCase()?(u=e("img[usemap='#"+o+"']")[0],!!u&&i(u)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||n:n)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),n="absolute"===i,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var t=e(this);return n&&"static"===t.css("position")?!1:s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var n=e.attr(i,"tabindex"),s=isNaN(n);return(s||n>=0)&&t(i,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function n(t,i,n,o){return e.each(s,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),o&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),u={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?u["inner"+i].call(this):this.each(function(){e(this).css(o,n(this,t)+"px")})},e.fn["outer"+i]=function(t,s){return"number"!=typeof t?u["outer"+i].call(this,t):this.each(function(){e(this).css(o,n(this,t,!0,s)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,n,s=e(this[0]);s.length&&s[0]!==document;){if(i=s.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(s.css("zIndex"),10),!isNaN(n)&&0!==n))return n;s=s.parent()}return 0}}),e.ui.plugin={add:function(t,i,n){var s,o=e.ui[t].prototype;for(s in n)o.plugins[s]=o.plugins[s]||[],o.plugins[s].push([i,n[s]])},call:function(e,t,i,n){var s,o=e.plugins[t];if(o&&(n||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(s=0;s<o.length;s++)e.options[o[s][0]]&&o[s][1].apply(e.element,i)}}});

/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=s(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",n)}function n(){e.datepicker._isDisabledDatepicker(o.inline?o.dpDiv.parent()[0]:o.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function a(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.extend(e.ui,{datepicker:{version:"1.11.4"}});var o;e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return a(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var n=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;n<e.length;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,o){var r,u,l,h,c,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},e.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(u=document.documentElement.clientWidth,l=document.documentElement.clientHeight,h=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[u/2-100+h,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),o===n&&(o=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,o,r,u,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),void(l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(t,!0),r=this._getMinMaxDate(l,"min"),u=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==u&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,u)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))))},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=e("input",i.parentNode)[0]),!e.datepicker._isDisabledDatepicker(i)&&e.datepicker._lastInput!==i){var s,n,o,r,u,l,h;s=e.datepicker._getInst(i),e.datepicker._curInst&&e.datepicker._curInst!==s&&(e.datepicker._curInst.dpDiv.stop(!0,!0),s&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(s,"beforeShow"),o=n?n.apply(i,[i,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,e.datepicker._lastInput=i,e.datepicker._setDateFromField(s),e.datepicker._inDialog&&(i.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(i),e.datepicker._pos[1]+=i.offsetHeight),r=!1,e(i).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),u={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(s),u=e.datepicker._checkOffset(s,u,r),s.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:u.left+"px",top:u.top+"px"}),s.inline||(l=e.datepicker._get(s,"showAnim"),h=e.datepicker._get(s,"duration"),s.dpDiv.css("z-index",t(e(i))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?s.dpDiv.show(l,e.datepicker._get(s,"showOptions"),h):s.dpDiv[l||"show"](l?h:null),e.datepicker._shouldFocusInput(s)&&s.input.focus(),e.datepicker._curInst=s))}},_updateDatepicker:function(t){this.maxRows=4,o=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),a=s[1],r=17,u=t.dpDiv.find("."+this._dayOverClass+" a");u.length>0&&n.apply(u.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),a>1&&t.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",r*a+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>u&&u>n?Math.abs(i.left+n-u):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,u=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,h="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),c=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,v=-1,g=-1,f=-1,_=-1,y=!1,k=function(e){var i=n+1<t.length&&t.charAt(n+1)===e;return i&&n++,i},b=function(e){var t=k(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(u).match(a);if(!o)throw"Missing number at position "+u;return u+=o[0].length,parseInt(o[0],10)},D=function(t,s,n){var a=-1,o=e.map(k(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(u,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],u+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+u},x=function(){if(i.charAt(u)!==t.charAt(n))throw"Unexpected literal at position "+u;u++};for(n=0;n<t.length;n++)if(y)"'"!==t.charAt(n)||k("'")?x():y=!1;else switch(t.charAt(n)){case"d":f=b("d");break;case"D":D("D",c,d);break;case"o":_=b("o");break;case"m":g=b("m");break;case"M":g=D("M",p,m);break;case"y":v=b("y");break;case"@":r=new Date(b("@")),v=r.getFullYear(),g=r.getMonth()+1,f=r.getDate();break;case"!":r=new Date((b("!")-this._ticksTo1970)/1e4),v=r.getFullYear(),g=r.getMonth()+1,f=r.getDate();break;case"'":k("'")?x():y=!0;break;default:x()}if(u<i.length&&(o=i.substr(u),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===v?v=(new Date).getFullYear():100>v&&(v+=(new Date).getFullYear()-(new Date).getFullYear()%100+(v>h?-100:0)),_>-1)for(g=1,f=_;;){if(a=this._getDaysInMonth(v,g-1),a>=f)break;g++,f-=a}if(r=this._daylightSavingAdjust(new Date(v,g-1,f)),r.getFullYear()!==v||r.getMonth()+1!==g||r.getDate()!==f)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=s+1<e.length&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(u(e))for(;s.length<i;)s="0"+s;return s},h=function(e,t,i,s){return u(e)?s[t]:i[t]},c="",d=!1;if(t)for(s=0;s<e.length;s++)if(d)"'"!==e.charAt(s)||u("'")?c+=e.charAt(s):d=!1;else switch(e.charAt(s)){case"d":c+=l("d",t.getDate(),2);break;case"D":c+=h("D",t.getDay(),n,a);break;case"o":c+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=l("m",t.getMonth()+1,2);break;case"M":c+=h("M",t.getMonth(),o,r);break;case"y":c+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?c+="'":d=!0;break;default:c+=e.charAt(s)}return c},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=t+1<e.length&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;t<e.length;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=u.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=u.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&""+o=="Invalid Date"?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,u,l,h,c,d,p,m,v,g,f,_,y,k,b,D,x,w,M,T,I,C,E,N,A,S,P,R,L,F,O,j,W,Y=new Date,K=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth(),Y.getDate())),q=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),U=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),G=this._getNumberOfMonths(e),H=this._get(e,"showCurrentAtPos"),$=this._get(e,"stepMonths"),Q=1!==G[0]||1!==G[1],J=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),V=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-H,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-G[0]*G[1]+1,X.getDate())),t=V&&V>t?V:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-$,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"e":"w")+"'>"+i+"</span></a>":U?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=z?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+$,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"w":"e")+"'>"+n+"</span></a>":U?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?J:K,o=z?this.formatDate(o,r,this._getFormatConfig(e)):o,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(q?u:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(q?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,c=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),m=this._get(e,"monthNames"),v=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),f=this._get(e,"showOtherMonths"),_=this._get(e,"selectOtherMonths"),y=this._getDefaultDate(e),k="",D=0;D<G[0];D++){for(x="",this.maxRows=4,w=0;w<G[1];w++){if(M=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),T=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",G[1]>1)switch(w){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(q?"right":"left");break;case G[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(q?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===D?q?a:s:"")+(/all|right/.test(T)&&0===D?q?s:a:"")+this._generateMonthYearHeader(e,Z,et,V,X,D>0||w>0,m,v)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)E=(b+h)%7,C+="<th scope='col'"+(5>(b+h+6)%7?"":" class='ui-datepicker-week-end'")+"><span title='"+d[E]+"'>"+p[E]+"</span></th>";for(I+=C+"</tr></thead><tbody>",N=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,N)),A=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((A+N)/7),P=Q&&this.maxRows>S?this.maxRows:S,this.maxRows=P,R=this._daylightSavingAdjust(new Date(et,Z,1-A)),L=0;P>L;L++){for(I+="<tr>",F=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(R)+"</td>":"",b=0;7>b;b++)O=g?g.apply(e.input?e.input[0]:null,[R]):[!0,""],j=R.getMonth()!==Z,W=j&&!_||!O[0]||V&&V>R||X&&R>X,F+="<td class='"+(5>(b+h+6)%7?"":" ui-datepicker-week-end")+(j?" ui-datepicker-other-month":"")+(R.getTime()===M.getTime()&&Z===e.selectedMonth&&e._keyEvent||y.getTime()===R.getTime()&&y.getTime()===M.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!f?"":" "+O[1]+(R.getTime()===J.getTime()?" "+this._currentClass:"")+(R.getTime()===K.getTime()?" ui-datepicker-today":""))+"'"+(j&&!f||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+R.getMonth()+"' data-year='"+R.getFullYear()+"'")+">"+(j&&!f?"&#xa0;":W?"<span class='ui-state-default'>"+R.getDate()+"</span>":"<a class='ui-state-default"+(R.getTime()===K.getTime()?" ui-state-highlight":"")+(R.getTime()===J.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+R.getDate()+"</a>")+"</td>",R.setDate(R.getDate()+1),R=this._daylightSavingAdjust(R);I+=F+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(G[0]>0&&w===G[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}k+=x}return k+=l,e._keyEvent=!1,k},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var u,l,h,c,d,p,m,v,g=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),_=this._get(e,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",k="";if(a||!g)k+="<span class='ui-datepicker-month'>"+o[t]+"</span>";
else{for(u=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,k+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)u&&h<s.getMonth()||l&&h>n.getMonth()||(k+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+r[h]+"</option>");k+="</select>"}if(_||(y+=k+(!a&&g&&f?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!f)y+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(c=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);return isNaN(t)?d:t},m=p(c[0]),v=Math.max(m,p(c[1]||"")),m=s?Math.max(m,s.getFullYear()):m,v=n?Math.min(v,n.getFullYear()):v,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";v>=m;m++)e.yearshtml+="<option value='"+m+"'"+(m===i?" selected='selected'":"")+">"+m+"</option>";e.yearshtml+="</select>",y+=e.yearshtml,e.yearshtml=null}return y+=this._get(e,"yearSuffix"),_&&(y+=(!a&&g&&f?"":"&#xa0;")+k),y+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),!(n&&t.getTime()<n.getTime()||a&&t.getTime()>a.getTime()||o&&t.getFullYear()<o||r&&t.getFullYear()>r)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4";e.datepicker});



/* =========================================================
 * bootstrap-modal.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

    "use strict"; // jshint ;_;


    /* MODAL CLASS DEFINITION
    * ====================== */

    var Modal = function (content, options) {
        this.options = options
        this.$element = $(content)
            .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    }

    Modal.prototype = {

        constructor: Modal

        , toggle: function () {
            return this[!this.isShown ? 'show' : 'hide']()
        }

        , show: function () {
            var that = this
                , e = $.Event('show')

            this.$element.trigger(e)

            if (this.isShown || e.isDefaultPrevented()) return

            $('body').addClass('modal-open')

            this.isShown = true

            escape.call(this)
            backdrop.call(this, function () {
                var transition = $.support.transition && that.$element.hasClass('fade')

                if (!that.$element.parent().length) {
                    that.$element.appendTo(document.body) //don't move modals dom position
                }

                that.$element
                    .show()

                if (transition) {
                    that.$element[0].offsetWidth // force reflow
                }

                that.$element.addClass('in')

                transition ?
                    that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
                    that.$element.trigger('shown')

            })
        }

        , hide: function (e) {
            e && e.preventDefault()

            var that = this

            e = $.Event('hide')

            this.$element.trigger(e)

            if (!this.isShown || e.isDefaultPrevented()) return

            this.isShown = false

            $('body').removeClass('modal-open')

            escape.call(this)

            this.$element.removeClass('in')

            $.support.transition && this.$element.hasClass('fade') ?
                hideWithTransition.call(this) :
                hideModal.call(this)
        }

    }


    /* MODAL PRIVATE METHODS
    * ===================== */

    function hideWithTransition() {
        var that = this
            , timeout = setTimeout(function () {
            that.$element.off($.support.transition.end)
            hideModal.call(that)
        }, 500)

        this.$element.one($.support.transition.end, function () {
            clearTimeout(timeout)
            hideModal.call(that)
        })
    }

    function hideModal(that) {
        this.$element
            .hide()
            .trigger('hidden')

        backdrop.call(this)
    }

    function backdrop(callback) {
        var that = this
            , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                .appendTo(document.body)

            if (this.options.backdrop != 'static') {
                this.$backdrop.click($.proxy(this.hide, this))
            }

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            doAnimate ?
                this.$backdrop.one($.support.transition.end, callback) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            $.support.transition && this.$element.hasClass('fade')?
                this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
                removeBackdrop.call(this)

        } else if (callback) {
            callback()
        }
    }

    function removeBackdrop() {
        this.$backdrop.remove()
        this.$backdrop = null
    }

    function escape() {
        var that = this
        if (this.isShown && this.options.keyboard) {
            $(document).on('keyup.dismiss.modal', function ( e ) {
                e.which == 27 && that.hide()
            })
        } else if (!this.isShown) {
            $(document).off('keyup.dismiss.modal')
        }
    }


    /* MODAL PLUGIN DEFINITION
    * ======================= */

    $.fn.modal = function (option) {
        return this.each(function () {
            var $this = $(this)
                , data = $this.data('modal')
                , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option]()
            else if (options.show) data.show()
        })
    }

    $.fn.modal.defaults = {
        backdrop: true
        , keyboard: true
        , show: true
    }

    $.fn.modal.Constructor = Modal


    /* MODAL DATA-API
    * ============== */

    $(function () {
        $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
            var $this = $(this), href
                , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
                , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

            e.preventDefault()
            $target.modal(option)
        })

        /* =========================================================
         * bootstrap-modal.js v2.0.4
         * http://twitter.github.com/bootstrap/javascript.html#modals
         * =========================================================
         * Copyright 2012 Twitter, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         * ========================================================= */


        !function ($) {

            "use strict"; // jshint ;_;


            /* MODAL CLASS DEFINITION
            * ====================== */

            var Modal = function (content, options) {
                this.options = options
                this.$element = $(content)
                    .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
            }

            Modal.prototype = {

                constructor: Modal

                , toggle: function () {
                    return this[!this.isShown ? 'show' : 'hide']()
                }

                , show: function () {
                    var that = this
                        , e = $.Event('show')

                    this.$element.trigger(e)

                    if (this.isShown || e.isDefaultPrevented()) return

                    $('body').addClass('modal-open')

                    this.isShown = true

                    escape.call(this)
                    backdrop.call(this, function () {
                        var transition = $.support.transition && that.$element.hasClass('fade')

                        if (!that.$element.parent().length) {
                            that.$element.appendTo(document.body) //don't move modals dom position
                        }

                        that.$element
                            .show()

                        if (transition) {
                            that.$element[0].offsetWidth // force reflow
                        }

                        that.$element.addClass('in')

                        transition ?
                            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
                            that.$element.trigger('shown')

                    })
                }

                , hide: function (e) {
                    e && e.preventDefault()

                    var that = this

                    e = $.Event('hide')

                    this.$element.trigger(e)

                    if (!this.isShown || e.isDefaultPrevented()) return

                    this.isShown = false

                    $('body').removeClass('modal-open')

                    escape.call(this)

                    this.$element.removeClass('in')

                    $.support.transition && this.$element.hasClass('fade') ?
                        hideWithTransition.call(this) :
                        hideModal.call(this)
                }

            }


            /* MODAL PRIVATE METHODS
            * ===================== */

            function hideWithTransition() {
                var that = this
                    , timeout = setTimeout(function () {
                    that.$element.off($.support.transition.end)
                    hideModal.call(that)
                }, 500)

                this.$element.one($.support.transition.end, function () {
                    clearTimeout(timeout)
                    hideModal.call(that)
                })
            }

            function hideModal(that) {
                this.$element
                    .hide()
                    .trigger('hidden')

                backdrop.call(this)
            }

            function backdrop(callback) {
                var that = this
                    , animate = this.$element.hasClass('fade') ? 'fade' : ''

                if (this.isShown && this.options.backdrop) {
                    var doAnimate = $.support.transition && animate

                    this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
                        .appendTo(document.body)

                    if (this.options.backdrop != 'static') {
                        this.$backdrop.click($.proxy(this.hide, this))
                    }

                    if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

                    this.$backdrop.addClass('in')

                    doAnimate ?
                        this.$backdrop.one($.support.transition.end, callback) :
                        callback()

                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass('in')

                    $.support.transition && this.$element.hasClass('fade')?
                        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
                        removeBackdrop.call(this)

                } else if (callback) {
                    callback()
                }
            }

            function removeBackdrop() {
                this.$backdrop.remove()
                this.$backdrop = null
            }

            function escape() {
                var that = this
                if (this.isShown && this.options.keyboard) {
                    $(document).on('keyup.dismiss.modal', function ( e ) {
                        e.which == 27 && that.hide()
                    })
                } else if (!this.isShown) {
                    $(document).off('keyup.dismiss.modal')
                }
            }


            /* MODAL PLUGIN DEFINITION
            * ======================= */

            $.fn.modal = function (option) {
                return this.each(function () {
                    var $this = $(this)
                        , data = $this.data('modal')
                        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
                    if (!data) $this.data('modal', (data = new Modal(this, options)))
                    if (typeof option == 'string') data[option]()
                    else if (options.show) data.show()
                })
            }

            $.fn.modal.defaults = {
                backdrop: true
                , keyboard: true
                , show: true
            }

            $.fn.modal.Constructor = Modal


            /* MODAL DATA-API
            * ============== */

            $(function () {
                $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
                    var $this = $(this), href
                        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
                        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

                    e.preventDefault()
                    $target.modal(option)
                })
            })

        }(window.jQuery);

        /*
             _ _      _       _
         ___| (_) ___| | __  (_)___
        / __| | |/ __| |/ /  | / __|
        \__ \ | | (__|   < _ | \__ \
        |___/_|_|\___|_|\_(_)/ |___/
                           |__/

         Version: 1.5.9
          Author: Ken Wheeler
         Website: http://kenwheeler.github.io
            Docs: http://kenwheeler.github.io/slick
            Repo: http://github.com/kenwheeler/slick
          Issues: http://github.com/kenwheeler/slick/issues

         */
        !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
        }):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
    })

}(window.jQuery);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});