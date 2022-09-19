$(document).ready(function(){

    $('.td-share__btn--facebook').sharrre({
        share: {
            facebook: true,
        },
        enableCounter: false,
        enableHover: false,
        enableTracking: false,
        urlCurl: '',
        template: '<span class="socialIcon">&nbsp;</span><span class="socialLabel">Facebook</span>',
        click: function(api){
            api.simulateClick();
            api.openPopup('facebook');
        }
    });
    $('.td-share__btn--twitter').sharrre({
        share: {
            twitter: true,
        },
        enableCounter: false,
        enableHover: false,
        enableTracking: false,
        urlCurl: '',
        template: '<span class="socialIcon">&nbsp;</span><span class="socialLabel">Twitter</span>',
        click: function(api){
            api.simulateClick();
            api.openPopup('twitter');
        }
    });
    $('.td-share__btn--google').sharrre({
        share: {
            googlePlus: true,
        },
        enableCounter: false,
        enableHover: false,
        enableTracking: false,
        urlCurl: '',
        template: '<span class="socialIcon">&nbsp;</span><span class="socialLabel">Google+</span>',
        click: function(api){
            api.simulateClick();
            api.openPopup('googlePlus');
        }
    });
    $('.td-share__btn--linkedin').sharrre({
        share: {
            linkedin: true,
        },
        enableCounter: false,
        enableHover: false,
        enableTracking: false,
        urlCurl: '',
        template: '<span class="socialIcon">&nbsp;</span><span class="socialLabel">LinkedIn</span>',
        click: function(api){
            api.simulateClick();
            api.openPopup('linkedin');
        }
    });
});