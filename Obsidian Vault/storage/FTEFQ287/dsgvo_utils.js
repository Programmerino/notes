/**
 * @Author: Milan Burgmann
 * @Description: DSGVO utility class
 * Usage: Every Javascript that sets cookies or localstorage values MUST use DWDE.dsgvo.isStoringCookiesOkay() to see if storing cookies is okay. If it returns false it is not allowed to store cookies.
 * If your script needs to be reinitialized after cookies have been allowed put the call to your init() method in the DWDE.dsgvo.reInitializeScripts() method
 */

var DWDE;
DWDE = window.DWDE || {};
DWDE.dsgvo = {

    //true if it is okay to store cookies
    privacyFlagStoreCookies: null,

    privacyFlagLocalStorageKey: 'de.dw.settings.privacy',

    overlaySelector: '.cookie',

    overlayButtonOkaySelector: '.cookie__btn--ok',

    overlayButtonNopeSelector: '.cookie__btn--more',

    overlayVisibleClass: 'cookie--visible',

    init: function () {
        this.getPrivacyFlag();
        if (this.privacyFlagStoreCookies !== 'true') {
            this.initializeListeners();
            this.showOverlay();
        }
    },

    initializeListeners: function () {
        $(this.overlaySelector).find(this.overlayButtonOkaySelector).on('click', function (event) {
            DWDE.dsgvo.setPrivacyFlag(event, true);
            DWDE.dsgvo.reInitializeScripts();
        });

        // Nope Button is unused until we have an opt-out option
        // $(this.overlaySelector).find(this.overlayButtonNopeSelector).on("click", function (event) {
        //     DWDE.dsgvo.setPrivacyFlag(event, false)
        // });
    },

    /**
     * Reinitializes all stopped scripts when the user accepts the privacy settings
     */
    reInitializeScripts: function () {
        googleTracking();
        facebookTracking();
    },

    /**
     * Checks if the browser has localstorage available
     * @returns {boolean} true or false, depending on the browsers localstorage capabilities
     */
    getIsStorageAvailable: function () {
        return typeof (Storage) !== 'undefined';
    },

    setPrivacyFlag: function (event, userPreference) {
        event.preventDefault();
        if (this.getIsStorageAvailable()) {
            try {
                localStorage.setItem(this.privacyFlagLocalStorageKey, userPreference);
            } catch (err) {
                // localStorage or cookies may be disabled, just skip this
            }
        }
        this.hideOverlay();
    },

    getPrivacyFlag: function () {
        if (this.getIsStorageAvailable()) {
            try {
                this.privacyFlagStoreCookies = localStorage.getItem(this.privacyFlagLocalStorageKey);
            } catch (err) {
                // localStorage or cookies may be disabled, just skip this
            }
        }
    },

    showOverlay: function () {
        setTimeout(function () {
            $(DWDE.dsgvo.overlaySelector).addClass(DWDE.dsgvo.overlayVisibleClass);
        });
        $(this.overlaySelector).css('display', 'block');
    },

    hideOverlay: function () {
        $(this.overlaySelector).removeClass(this.overlayVisibleClass);
        $(this.overlaySelector).fadeOut();
    },

    isStoringCookiesOkay: function () {
        this.getPrivacyFlag();
        return this.privacyFlagStoreCookies;
    }
};

jQuery(document).ready(function () {
    DWDE.dsgvo.init();
});