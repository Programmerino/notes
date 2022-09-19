// Lytics Pathfora form
// https://lytics.github.io/pathforadocs/

function setupFormCallbackAndCreateFormIfSub(siteName, spot) { // eslint-disable-line  no-unused-vars
  var thisID = '#demographics-box-' + spot;
  // vars for demographics box
  var diveInsiderMainPageUrl = 'https://www.industrydive.com/insiders/';
  var headlineValue = 'We\'re covering the news relevant to you.';
  var messageValue = 'Help us get it right by telling us more about you.';
  var successusMessageValue = 'Love our content? Become a ' +
    '<a href="' + diveInsiderMainPageUrl + '">Dive Insider</a> by referring others and get rewarded.';
  var okMessageValue = 'Submit';
  var fieldsToDisplay = [];
  var initialValues = {
    'dive_company_type': '',
    'dive_job_function': '',
    'dive_job_level': '',
  };

  function pickAPublication() {
    return siteName.toLowerCase() === 'education dive' ? 'Education Dive: Higher Ed' : siteName;
  }

  function decideIfUserIsSubscribed(usersAudienceArray) {
    var siteNameLower = siteName.toLowerCase();
    // Almost all Lytics sub list follow this format, but there is one expectation with education dive and it maps to two Lytics list.
    // So, to make this more generic, the method loops through all the possible Lytics audience that map to a certain dive.
    var validSubscriberList = ['any_$_subs'.replace('$', siteNameLower.replace(' ', '_'))];
    var isSubscriber = false;

    if (siteNameLower === 'education dive') {
      validSubscriberList = ['any_higher_ed_dive_subs', 'any_k12_dive_subs'];
    }

    for (var i = 0; i < validSubscriberList.length; i++) {
      if (usersAudienceArray.indexOf(validSubscriberList[i]) > -1) {
        isSubscriber = true;
        break;
      }
    }

    return isSubscriber;
  }

  function firstElementUpper(element) {
    return element[0].toUpperCase() + element.slice(1);
  }

  function fieldSlugToLabel(fieldSlug) {
    return firstElementUpper(fieldSlug.replace('dive_', '').replace('_', ' '));
  }
  // FORM FIELDS
  function constructField(fieldSlug, boxLocation) {
    var field = {
      'type': fieldSlug.indexOf('dive_') > -1 ? 'select' : 'text',
      'label': fieldSlugToLabel(fieldSlug),
      'name': fieldSlug + '_' + boxLocation,
    };

    return field;
  }

  // default success and failure messages
  var messages = {
    success: {
      headline: 'Thank you!',
      msg: successusMessageValue,
      delay: 0,
    },
    error: {
      headline: 'Error',
      msg: 'There was an issue submitting your form.',
      delay: 0,
    },
  };

  // This is the recommended callback as specified by Lytics to get the window.lio.data, which
  // is how we'll get which list the user is subscribed to.
  // See https://learn.lytics.com/understanding/product-docs/lytics-javascript-tag/receiving-data-from-lytics#create-a-callback
  function sendGoogleAnalyticsDemographicsEvent(eventName, formConfiguration) {
    if ((typeof ga) !== 'undefined') {
      ga('orig.send', 'event', 'Subscriber Demographics', eventName, formConfiguration);
    }
  }

  function hasAtLeastOneValue(dataArray) {
    return dataArray.reduce(function(acc, cur) {
      return acc || cur.value !== '';
    }, false);
  }

  /* eslint-disable */
  var confirmActionValue = {
    waitForAsyncResponse: true,
    callback: function callbackFunction(event, payload, cb) {
      var $errorMessageElement = $('.demo-box-error');
      var payloadData = payload.data;

      // if either value is submitted, success
      if (hasAtLeastOneValue(payloadData)) {
        // remove error message
        $errorMessageElement.remove();

        var jsonRequest = {
          'lytics_id': lio._uid,
        };
        var varsToUpdateAsJson = {};
        var formConfiguration = '';
        for (var i = 0; i < payloadData.length; i++) {
          formConfiguration += (formConfiguration === '' ? '' : ', ') + payloadData[i].name;
          if (payloadData[i].value.length !== 0) {
            varsToUpdateAsJson[payloadData[i].name] = payloadData[i].value;
            formConfiguration += ' filled';
          } else {
            formConfiguration += ' blank';
          }
        }
        jsonRequest.fields_to_update = varsToUpdateAsJson;
        sendGoogleAnalyticsDemographicsEvent('Submit', formConfiguration);
        $.ajax({
          type: 'POST',
          url: '/push-to-sailthru/',
          dataType: 'json',
          data: {
            data: JSON.stringify(jsonRequest),
          },
          success: function() {
            addSuccessClassToAllForms();
          }
        });
        // if no values submitted, display an error if not already added
      } else if ($errorMessageElement.length === 0) {
        var errorMessage = '<span class="demo-box-error">Oops! The form is empty.</span>';
        $(thisID + ' .pf-widget-message').after(errorMessage);
      }
    },
  };

  // evaluate the data submitted
  function createFormOptions() {
    var defaultOptions = {
      id: spot + '-box',
      layout: 'inline',
      position: thisID,
      headline: headlineValue,
      msg: messageValue,
      okMessage: okMessageValue,
      formElements: fieldsToDisplay,
      formStates: messages,
      confirmAction: confirmActionValue,
      theme: 'custom',
    };

    if (spot.toLowerCase() === 'sidebar') {
      defaultOptions['className'] = 'demographic-form-sidebar';
      defaultOptions['image'] = '/media/img/demographic_form/demographics-collector-sidebar.png';

      // Custom JS properties to add styles, which do not affect the Lytics call
      defaultOptions['customButton'] = 'button button--full-width';
    }

    if (spot.toLowerCase() === 'inline') {
      defaultOptions['className'] = 'demographic-form-inline';
      defaultOptions['image'] = '/media/img/demographic_form/demographics-collector-sidebar.png';

      // Custom JS properties to add styles, which do not affect the Lytics call
      defaultOptions['customButton'] = 'button button--medium';
      defaultOptions['includePolygon'] = true;
      defaultOptions['isImageWrapped'] = true;
    }

    return defaultOptions;
  }

  function hideSignUpForm() {
    // hide sidebar and body inline instances
    $(thisID).prev().hide();
    // hide pre-footer instance
    $('.pre-footer .signup').hide();
  }

  function showLyticsForm() {
    var formOptions = createFormOptions();
    var pathforaForm = new pathfora.Form(formOptions);
    pathfora.initializeWidgets([pathforaForm]);
    $(thisID).diveformify(pickAPublication(),
      {
        'strict_mode': true,
        'initial_values' : initialValues
      });
    addCustomStyle(formOptions);
    hideSignUpForm();
    $(thisID).show();
  }

  function removeLyticsButtonStyleAndAddCustomClass(cssSelector, buttonType) {
    var button = $(cssSelector + ' .pf-widget-btn.pf-widget-ok');
    $(button).addClass(buttonType);
    $(button).removeClass('pf-widget-btn');
  }

  function addSuccessClassToAllForms() {
    $('[class*=demographic-form]').addClass('success').parent().addClass('success');
  }

  function addImageWrapper(cssSelector) {
    $(cssSelector + ' img').wrap('<div class="pf-img-wrapper"></div>');
  }

  function addPrivacyPolicy(cssSelector) {
    var privacyPolicy = '<p class="help-text help-text--small">' +
      '<a class="pf-privacy-policy" href="http://www.industrydive.com/privacy-policy/" target="_blank">Privacy policy</a></p>';
    $(cssSelector + ' .pf-widget-content').append(privacyPolicy);
  }

  function addCustomStyle(config) {
    // Add the privacy link to all Lytics forms
    var cssSelector = config.position;
    var buttonClass = config.customButton;
    var includePolygon = config.includePolygon;
    var isImageWrapped = config.isImageWrapped;

    addPrivacyPolicy(cssSelector);
    removeLyticsButtonStyleAndAddCustomClass(cssSelector, buttonClass);

    if (includePolygon) {
      // This is just a standard white polygon that appears on top of an image for an inline form.
      $(cssSelector).append('<div class="pf-polygon"></div>');
    }

    if (isImageWrapped) {
      addImageWrapper(cssSelector);
    }

    if (config.formElements.length === 1 && config.position === '#demographics-box-inline') {
      $(config.position + ' button').addClass('special-button');
    }
  }

  window.liosetup = window.liosetup || {}, window.liosetup.callback = window.liosetup.callback || [], window.liosetup.addEntityLoadedCallback = function (l, o) {
    if ('function' == typeof window.liosetup.callback) {
      var i = [];
      i.push(window.liosetup.callback), window.liosetup.callback = i;
    }
    window.lio && window.lio.loaded ? l(window.lio.data) : o ? window.liosetup.callback.unshift(l) : window.liosetup.callback.push(l);
  };
  /* eslint-enable */

  // The above sets up the callback so that we can ensure the window.lio.data is ready. But, some words of warning, window.lio.data isn't
  // consistent even if nothing was changed, window.lio.data may still return different results (Usually not a complete list). Ideally,
  // the window.lio.data.segments is supposed to return an array of audiences the user is in.
  window.liosetup.addEntityLoadedCallback(function displayFormIfUserIsSub(data) {
    var userInValidSubscriberList = decideIfUserIsSubscribed(data.segments);
    if (userInValidSubscriberList) {
      $.ajax({
        type: 'POST',
        url: '/decide-lytics-forms-to-display/',
        dataType: 'json',
        data: {
          lytics_token: lio._uid,
        },
        success: function setFieldsToDisplay(demographicData) {
          // populate the set of fields to display
          if (!$.isEmptyObject(demographicData)) {
            var formConfiguration = '';
            for (var formField in demographicData) {
              if (demographicData.hasOwnProperty(formField)) {
                var fieldName = demographicData[formField].name;
                // These names are tightly coupled to Lytic's User Web Pathfora LQL
                // statement. In short, if you change here, you'll need to update the LQL statement as well.
                fieldsToDisplay.push(constructField(fieldName, spot));
                initialValues[fieldName] = demographicData[formField].value;
                formConfiguration += (formConfiguration === '' ? '' : ', ') + fieldName + '_' + spot;
              }
            }
            sendGoogleAnalyticsDemographicsEvent('View', formConfiguration);
            // Create demographic form
            showLyticsForm();
            var $CompanyName = $('#company_name_' + spot);
            if (!$CompanyName.val()) {
              $CompanyName.val(initialValues.company_name);
            }
          }
        },
      });
    }
  });
}
