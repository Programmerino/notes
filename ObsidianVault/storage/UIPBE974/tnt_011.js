window.__tnt || (window.__tnt = {});
window.__tnt.subscription || (__tnt.subscription = {});
window.__tnt.subscription.d || (__tnt.subscription.d = []);

/**
 * Access Denied - Display Access Methods Modal
 */
window.__tnt.subscription.d.push(function(oResp){
    var subscriptionTypeMethods = 0,
        accessWallSubscription = document.getElementById('access-wall-subscription'),
        aServiceIds = [],
        content = document.getElementById('asset-content');

    if(oResp && oResp.access_methods && oResp.access_methods.length){
        for(i=0;i<oResp.access_methods.length;i++){
            var method = oResp.access_methods[i];
            
            // Display registration button
            if (method.id == 'tncms-user-registration' && document.getElementById('access-registration')) {
                document.getElementById('access-registration').classList.remove('hidden');
            }
            
            if(oResp.access_methods[i].type=="subscription"){
                subscriptionTypeMethods++;
            }

            if(method && method.metadata){
                aServiceIds.push(method.metadata.service_id);
            }
        }
    }

    if(accessWallSubscription){
        // in page message to open the modal
        __tnt.template(
            document.getElementById('access-wall-subscription'),
            wallOutput,
            true,
            [],
            function(element){
                var loggedIn = __tnt.user.loggedIn,
                    liEl = element.querySelectorAll('.logged-in'),
                    nlEl = element.querySelectorAll('.not-logged-in'),
                    elShow = nlEl,
                    elRemove = liEl,
                    classRemove = 'not-logged-in';

                if(loggedIn){ elShow = liEl; elRemove = nlEl; classRemove = 'logged-in' }
                for(i=0; i< elShow.length; i++){
                    elShow[i].classList.remove(classRemove);
                }
                for(j=0; j< elRemove.length; j++){
                    elRemove[j].remove();
                }
            }
        );
    }

    var serviceModal = document.getElementById('service-promo-modal'),
        toHide = null,
        toRemove = null;
        
    if(content){
        toHide = content.querySelectorAll('.subscriber-hide');
        toRemove = content.querySelectorAll('.subscriber-remove,.subscriber-only');
    }

    if(serviceModal){
        let modalTitle = document.getElementById('access-modal-title'),
            modalDesc = document.getElementById('access-modal-description');
        
        if(oResp.access_rule.message != null) {
            // Populate modal title and description
            modalTitle.innerHTML = oResp.access_rule.message.title;
            modalDesc.innerHTML = oResp.access_rule.message.description;
        } else {
            modalTitle.parentNode.removeChild(modalTitle);
            modalDesc.parentNode.removeChild(modalDesc);
        }
        
        serviceModal.setAttribute('data-access-services',aServiceIds);
        serviceModal.setAttribute('data-access-rule',oResp.access_rule.id);
        
        /** open modal */
        $('#service-promo-modal .modal').modal('show');
    }

    if(toHide && toHide.length){
        for( var elh = 0; elh < toHide.length; elh++ ){
            toHide[elh].hidden = true;
        }
    }
    if(toRemove && toRemove.length){
        for( var elr = 0; elr < toRemove.length; elr++ ){
            toRemove[elr].remove();
        }
    }

    if(content){
        content.hidden = false;
    }

});

/**
 * Access Denied - Log display of wall, and set displayed rule data
 */
window.__tnt.subscription.d.push(function(oResp){
    var accessRuleId = null;

    if(oResp.access_rule){
        __tnt.trackEvent({'category':'subscription','action':'wall','label':oResp.access_rule.name,'value':0});

        try{
            if(window.localStorage){
                accessRuleId = window.localStorage.getItem('tnt:access:rule');
                
                if(oResp.access_rule.id != accessRuleId){
                    localStorage.setItem('tnt:access:rule', oResp.access_rule.id);
                    localStorage.setItem('tnt:access:rule:name', oResp.access_rule.name);
                    __tnt.trackEvent({'category':'Access Control','action':'Access Rule Change','label':oResp.access_rule.name,'value':''});
                }

            }
        }catch(e){}
    }
});

/**
 * Access Denied - Populate modal from endpoint
 */
window.__tnt.subscription.d.push(function(oResp){
    var modalEl = document.getElementById('service-promo-modal'),
        methodsEl = null,
        accessSubscription = false;

        if(modalEl){ methodsEl = modalEl.querySelector('.access-methods-list') }

    if(oResp.access_methods && oResp.access_methods.length){
        for(var am = 0; am < oResp.access_methods.length; am++){
            if(oResp.access_methods[am].type == "subscription"){
                accessSubscription = true;
                break;
            }
        }
    }

    if(methodsEl && accessSubscription){
        if(!methodsEl.querySelector('.output').classList.contains('populated')){
            __tnt.subscription.access.fetch(methodsEl);
            methodsEl.querySelector('.output').classList.add('populated');
        }
    } else if(modalEl){
        modalEl.classList.add('modal-small');
    }

});
