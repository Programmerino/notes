		function Geturl() {
			var thisurl = this.window.location.href;
			var newurl = thisurl.replace(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?/,'https://$3/nlpost.ashx');
			return newurl;
		}
	
		function Validate() {
			var errorList = '';
			var validatedControls = [];	   
	
			$('#dvForm input:visible, #dvForm select:visible').each(function () {
				
				var isValidatable = ($(this).data("val") === true) ? true : false;
	
				if (isValidatable) {
	
					var type = $(this).attr("type");
					var value = $(this).val();
					var controlId = $(this).attr("id");
	
					var idx = $.inArray(controlId, validatedControls);
					if (idx == -1) {
						validatedControls.push(controlId);
	
						if (type == "checkbox" || type == "radio") {
	
							var checkedValue = $('input[name="' + $(this).attr("name") + '"]:checked').val();
							if (checkedValue === undefined) {
								errorList = errorList + '<li>' + $(this).data("val-required") + '</li>';
							}
	
						}
						else if ((type != "button" || type != "submit") && type != "radio") {
							if (value === '') {
								errorList = errorList + '<li>' + $(this).data("val-required") + '</li>';
							}
							else if ($(this).data("val-regex-pattern") != undefined) {
								var regEx = new RegExp($(this).data("val-regex-pattern"));
	
								if (!regEx.test(value)) {
									errorList = errorList + '<li>' + $(this).data("val-regex") + '</li>';
								}
							}
						}
					}
				}
			})
			
			if (errorList != '') {
				$("#error").html("<ul>" + errorList + "</ul>");
				$("#error").removeClass().addClass("error");
				return false;
			}
			else {
				$("#error").html("");
				$("#error").addClass("hide");
				return true;
			}
		}
	
		function OnSuccess(){
			$("#dvForm").removeClass().addClass("hide");
			$("#FormSent").removeClass().addClass("show");
			$("#error").removeClass().addClass("hide");
			$("#FormSent").html("Thank you. We have received your request.");
	
		}
	
		function getAllValues(){
			var inputValues = [];
			$('#dvForm input').each(function() {
				var type = $(this).attr("type");
				var IsHidden = ($(this).data("state") == "hidden")? true : false; 
				if ((type == "checkbox" || type == "radio") && $(this).is(":checked")) {
					if (!IsHidden) inputValues.push('"' + this.id + '":"' + $(this).val()+'"');
				}
				else if ((type != "button" || type != "submit") && type != "radio") {
					if (!IsHidden) inputValues.push('"' + this.id + '":"' + $(this).val()+'"');
				}
			})
			$('#dvForm select').each(function() {
				var type = $(this).attr("type");
				var IsHidden = ($(this).data("state") == "hidden")? true : false;
				if (!IsHidden){
					inputValues.push('"' + this.id + '":"' + $(this).val()+'"');
				}
			})
			return '{' + inputValues.join(',') + '}';
		}

		function SubmitForm()
		{
			$("#button").attr("disabled", "disabled");
			var isValid = Validate();
			if (isValid){
				var strdata = getAllValues();
				$.ajax({
						url: Geturl(),
						type: "POST",
						data: strdata,
						contentType: "application/json",
						dataType: "json",
						success: function (data, textStatus, jqXHR) {
							OnSuccess()
						},
						error: function (jqXHR, textStatus, errorThrown) {
							OnSuccess();
						}
					});
			}
			$("#button").removeAttr("disabled");
		}
	
		$("#button").click(function () {
			SubmitForm();
		});

		$("#txtEMAILADR").keypress(function(event){
  			if (event.which == 13) {
    			event.preventDefault();
    			SubmitForm();
  			}
  		})
  		
  		$(function() { 
		    var euCountries = ["AUT", "BEL", "BGR", "HRV", "CYP", "CZE", "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HUN", "IRL", "ITA", "LVA", "LTU", "LUX", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "SVN", "ESP", "SWE", "GBR"]; 
		 
		    $('.selectCountry select').change(function() {
		         var euCountry = $(this).val();
		         var gdprNL = $('.gdprNL');
		 
		            if (jQuery.inArray(euCountry, euCountries)!='-1') {
		                gdprNL.show();
		            } else {
		                gdprNL.hide();
		            }
		 
		    }); 
		})
