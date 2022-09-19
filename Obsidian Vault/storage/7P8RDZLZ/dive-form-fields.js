(function ($) {
  var StrictMode;
  $.fn.diveformify = function (publication_name, options) {
    var settings = $.extend({
      'company_type_field': $(this).find('[id^="dive_company_type"]'),
      'job_function_field': $(this).find('[id^="dive_job_function"]'),
      'job_level_field': $(this).find('[id^="dive_job_level"]'),
      //TODO remove dive_ prefix from these values
      'initial_values': {
        'dive_company_type': '',
        'dive_job_function': '',
        'dive_job_level': ''
      },
      'strict_mode': false, // Tells diveformify whether or not to accept invalid drop-down fields
      'placeholder_text': {
        'company_type': '',
        'job_function': '',
        'job_level': ''
      },
      //------------Legacy fields
      //TODO think about reorienting the settings on the fields
      //You generally access properties based on each field, not the property at large
      'compnay_type':{
        "selector": '[id^="dive_company_type"]',
        'initial': '',
        'placeholder': ''
       },
      /// ETC
      'missing_company_type_text': 'Please select a company type first',
      'auto_unhide': true
    }, options);
    StrictMode = settings.strict_mode;
    var pub_demographics = get_publication_demographics.call(dive_demographics_job_graph, publication_name);
    // TODO: work on each form that has company Type
    $(this).find(settings.company_type_field).parents('form').each(function(index, element) {
      var $this = $(this);
      var $company_type = $this.find(settings.company_type_field);
      var $job_function = $this.find(settings.job_function_field);
      var $job_level = $this.find(settings.job_level_field);

      $company_type.change(function changeHandler(event) {
        var company_type_demographic = find_in_array(pub_demographics, 'company_type', $company_type.val());
        if (company_type_demographic) {
          // TODO: preserve values
          update_select_options($job_function, company_type_demographic.job_functions, settings.placeholder_text.job_function);
          update_select_options($job_level, company_type_demographic.job_levels, settings.placeholder_text.job_level);
          removePlaceholder($company_type, settings.placeholder_text.company_type);
        }
      });

      $job_function.change(function (event) {
        removePlaceholder($job_function, settings.placeholder_text.job_function);
      });

      $job_level.change(function (event) {
        removePlaceholder($job_level, settings.placeholder_text.job_level);
      });
      set_initial_form_values($company_type, $job_function, $job_level);
      if (settings.auto_unhide) {
        // TODO: this assumes fields start hidden and that we want to unhide everything
        //  above them.
        $company_type.show().parents(":hidden").show();
        $job_function.show().parents(":hidden").show();
        $job_level.show().parents(":hidden").show();
      }

    });
    return this;  // to allow for jQuery chaining

    function removePlaceholder($selector){
      if ($selector.val() !== '') {
          $selector.find("option[value='']").remove();
        }
    }
    function get_publication_demographics(publication_name) {
      var matched_publication;
      if (!publication_name) {
        throw "diveformify was called without a publication_name";
      }

      matched_publication = find_in_array(this, 'publication_name', publication_name);
      if ((!matched_publication) && (publication_name.indexOf(':') > 0)) {
        // Coudn't find an exact match; try again after stripping everything after the first ':'
        matched_publication = find_in_array(this, 'publication_name', publication_name.split(':')[0]);
      }
      if (!matched_publication) {
        throw "Publication named '" + publication_name + "' couldn't be found in job graph";
      }
      return matched_publication.demographics;
    }

    // utility functions
    function find_in_array(arr, key, val) {
      // Find array element which has a key value of val -- case insensitive!
      for (var ai, i = arr.length; i--;)
        if ((ai = arr[i]) && ai[key].toLowerCase() == val.toLowerCase())
          return ai;
      return null;
    }

    function set_select_value(select, value_being_set) {
      // creates the option if it doesn't exist and includes special logic about where to order
      // the new element.
      var $sel = $(select);
      var select_options = optionsFromSelect($sel);
      // If we're in "strict" mode, don't append a non-existing value to the drop-down list
      // Otherwise, append the value if it doesn't exist
      // The above comment means mismatched values (see test comments) not non-existing
      // code currently accpets garbage in non-Strict mode
      if (!StrictMode && !(select_options.includes(value_being_set))) {
        // If the option doesn't already exist, we need to add it.
        var $other_option = $sel.find("option[value='Other']:last");
        var $new_option = $("<option/>").attr("value", value_being_set).text(value_being_set);
        if ($other_option.length === 1) {
          // Put it before "Other" option if there is one
          $other_option.before($new_option);
        } else {
          // Otherwise put it at end of the list
          $sel.append($new_option);
        }
      }
      // now we know the option exists so we can just select it
      if(strictlyAvailable(value_being_set, select_options)){
        $sel.val(value_being_set);
        $sel.change();
      }
      return $sel
    }

    function set_initial_form_values($company_type, $job_function, $job_level) {
      update_select_options(
        $company_type,
        $.map(pub_demographics, function(demographic){ return demographic.company_type}),
        settings.placeholder_text.company_type);

        set_select_value($company_type, settings.initial_values.dive_company_type);
        set_select_value($job_function, settings.initial_values.dive_job_function);
        set_select_value($job_level, settings.initial_values.dive_job_level);

      if ($company_type.val() === '') {
        if (StrictMode) {
          $job_function.append($("<option disabled selected value=''>").text(settings.missing_company_type_text));
          $job_level.append($("<option disabled selected value=''>").text(settings.missing_company_type_text));
        }
        $job_function.prop("disabled", true);
        $job_level.prop("disabled", true);
      }
    }

    function valueIfNull(val, target){
     return  target === undefined ? val : target;
    }
    function update_select_options(select, values, placeholder) {
      var $select = $(select);

      // save currently selected value (if any)
      var original_value = $select.val();

      // remove all options
      $select.find("option").remove();

      if (!original_value || !strictlyAvailable(original_value, values)) {
        $select.append($("<option selected value=''>"+placeholder+"</option>"));
        $select.addClass('default');
      }

      // add in new options from values array
      for (var i = 0; i < values.length; i++) {
        $select.append($("<option>").attr("value", values[i]).text(values[i]));
      }

      // Add 'original_value' back to the select field if it's not there after update
      if (original_value) {
        set_select_value($select, original_value);
      }

      $select.prop("disabled", false);  // enable field in case it was previously disabled
    }
    function optionsFromSelect($select_object){
      return $.map($select_object.find('option'), function(x){ return x.value});
    }
    function strictlyAvailable(target, values){
      return StrictMode && values.includes(target) || !StrictMode;
    }
  };
}(jQuery));
