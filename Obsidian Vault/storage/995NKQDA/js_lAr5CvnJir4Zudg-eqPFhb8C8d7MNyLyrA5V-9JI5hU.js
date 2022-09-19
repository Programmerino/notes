!function(s){s.fn.tbfMobileMenu=function(a){var e=s.extend({overlay_class:"c-overlay",nav_class:"c-primary-nav",wrap_class:"o-wrap",trigger_class:"c-mobile-toggle"},a);s("."+e.trigger_class).on("click",function(){s(this).closest("."+e.wrap_class).toggleClass("is-shifted"),s("."+e.nav_class).toggleClass("is-active"),s("html").toggleClass("is-active"),s("."+e.overlay_class).toggleClass("is-active")}),s("."+e.overlay_class).on("click",function(){s("."+e.wrap_class).toggleClass("is-shifted"),s("."+e.nav_class).toggleClass("is-active"),s("html").toggleClass("is-active"),s("."+e.overlay_class).toggleClass("is-active")}),s("body").on("click",".is-shifted .has-dropdown .c-primary-nav__link",function(a){a.preventDefault();s(this).next();s(this).hasClass("is-up")?(s(this).next().removeClass("is-expanded"),s(this).removeClass("is-up")):(s(".c-drop-nav__wrap.is-expanded").removeClass("is-expanded"),s(".c-primary-nav__link").removeClass("is-up"),s(this).addClass("is-up"),s(this).next().addClass("is-expanded"))})}}(jQuery);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){function e(t,e){return t.parsleyAdaptedCallback||(t.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),t.apply(e||v,i)}),t.parsleyAdaptedCallback}function i(t){return 0===t.lastIndexOf(g,0)?t.substr(g.length):t}void 0===t&&void 0!==window.jQuery&&(t=window.jQuery);var n,s=1,r={},a={attr:function(t,e,i){var n,s,r=new RegExp("^"+e,"i");if(void 0===i)i={};else for(var a in i)i.hasOwnProperty(a)&&delete i[a];if(void 0===t||void 0===t[0])return i;for(a=(s=t[0].attributes).length;a--;)(n=s[a])&&n.specified&&r.test(n.name)&&(i[this.camelize(n.name.slice(e.length))]=this.deserializeValue(n.value));return i},checkAttr:function(t,e,i){return t.is("["+e+i+"]")},setAttr:function(t,e,i,n){t[0].setAttribute(this.dasherize(e+i),String(n))},generateID:function(){return""+s++},deserializeValue:function(e){var i;try{return e?"true"==e||"false"!=e&&("null"==e?null:isNaN(i=Number(e))?/^[\[\{]/.test(e)?t.parseJSON(e):e:i):e}catch(t){return e}},camelize:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},dasherize:function(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){window.console&&"function"==typeof window.console.warn&&window.console.warn.apply(window.console,arguments)},warnOnce:function(t){r[t]||(r[t]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){r={}},objectCreate:Object.create||(n=function(){},function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");n.prototype=t;var e=new n;return n.prototype=null,e})},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(){},errorsContainer:function(){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){};l.prototype={asyncSupport:!1,actualizeOptions:function(){return a.attr(this.$element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(t){for(var e in this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions),t)t.hasOwnProperty(e)&&(this.options[e]=t[e]);this.actualizeOptions()},validateThroughValidator:function(t,e,i){return window.ParsleyValidator.validate(t,e,i)},_listeners:null,on:function(t,e){return this._listeners=this._listeners||{},(this._listeners[t]=this._listeners[t]||[]).push(e),this},subscribe:function(e,i){t.listenTo(this,e.toLowerCase(),i)},off:function(t,e){var i=this._listeners&&this._listeners[t];if(i)if(e)for(var n=i.length;n--;)i[n]===e&&i.splice(n,1);else delete this._listeners[t];return this},unsubscribe:function(e){t.unsubscribeTo(this,e.toLowerCase())},trigger:function(t,e){e=e||this;var i,n=this._listeners&&this._listeners[t];if(n)for(var s=n.length;s--;)if(!1===(i=n[s].call(e,e)))return i;return!this.parent||this.parent.trigger(t,e)},reset:function(){if("ParsleyForm"!==this.__class__)return this._trigger("reset");for(var t=0;t<this.fields.length;t++)this.fields[t]._trigger("reset");this._trigger("reset")},destroy:function(){if("ParsleyForm"!==this.__class__)return this.$element.removeData("Parsley"),this.$element.removeData("ParsleyFieldMultiple"),void this._trigger("destroy");for(var t=0;t<this.fields.length;t++)this.fields[t].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_findRelatedMultiple:function(){return this.parent.$element.find("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')}};var u=function(){var t={},e=function(t){this.__class__="Validator",this.__version__="1.0.1",this.options=t||{},this.bindingKey=this.options.bindingKey||"_validatorjsConstraint"};e.prototype={constructor:e,validate:function(t,e,i){if("string"!=typeof t&&"object"!=typeof t)throw new Error("You must validate an object or a string");return"string"==typeof t||a(t)?this._validateString(t,e,i):this.isBinded(t)?this._validateBindedObject(t,e):this._validateObject(t,e,i)},bind:function(t,e){if("object"!=typeof t)throw new Error("Must bind a Constraint to an object");return t[this.bindingKey]=new i(e),this},unbind:function(t){return void 0===t._validatorjsConstraint?this:(delete t[this.bindingKey],this)},isBinded:function(t){return void 0!==t[this.bindingKey]},getBinded:function(t){return this.isBinded(t)?t[this.bindingKey]:null},_validateString:function(t,e,i){var r,o=[];a(e)||(e=[e]);for(var l=0;l<e.length;l++){if(!(e[l]instanceof s))throw new Error("You must give an Assert or an Asserts array to validate a string");(r=e[l].check(t,i))instanceof n&&o.push(r)}return!o.length||o},_validateObject:function(t,e,n){if("object"!=typeof e)throw new Error("You must give a constraint to validate an object");return e instanceof i?e.check(t,n):new i(e).check(t,n)},_validateBindedObject:function(t,e){return t[this.bindingKey].check(t,e)}},e.errorCode={must_be_a_string:"must_be_a_string",must_be_an_array:"must_be_an_array",must_be_a_number:"must_be_a_number",must_be_a_string_or_array:"must_be_a_string_or_array"};var i=function(t,e){if(this.__class__="Constraint",this.options=e||{},this.nodes={},t)try{this._bootstrap(t)}catch(e){throw new Error("Should give a valid mapping object to Constraint",e,t)}};i.prototype={constructor:i,check:function(t,e){var i,n={};for(var o in this.nodes){for(var l=!1,u=this.get(o),h=a(u)?u:[u],d=h.length-1;d>=0;d--)"Required"!==h[d].__class__||(l=h[d].requiresValidation(e));if(this.has(o,t)||this.options.strict||l)try{this.has(o,this.options.strict||l?t:void 0)||(new s).HaveProperty(o).validate(t),i=this._check(o,t[o],e),(a(i)&&i.length>0||!a(i)&&!r(i))&&(n[o]=i)}catch(t){n[o]=t}}return!!r(n)||n},add:function(t,e){if(e instanceof s||a(e)&&e[0]instanceof s)return this.nodes[t]=e,this;if("object"==typeof e&&!a(e))return this.nodes[t]=e instanceof i?e:new i(e),this;throw new Error("Should give an Assert, an Asserts array, a Constraint",e)},has:function(t,e){return void 0!==(e=void 0!==e?e:this.nodes)[t]},get:function(t,e){return this.has(t)?this.nodes[t]:e||null},remove:function(t){var e=[];for(var i in this.nodes)i!==t&&(e[i]=this.nodes[i]);return this.nodes=e,this},_bootstrap:function(t){if(t instanceof i)return this.nodes=t.nodes;for(var e in t)this.add(e,t[e])},_check:function(t,e,n){if(this.nodes[t]instanceof s)return this._checkAsserts(e,[this.nodes[t]],n);if(a(this.nodes[t]))return this._checkAsserts(e,this.nodes[t],n);if(this.nodes[t]instanceof i)return this.nodes[t].check(e,n);throw new Error("Invalid node",this.nodes[t])},_checkAsserts:function(t,e,i){for(var n,s=[],r=0;r<e.length;r++)void 0!==(n=e[r].check(t,i))&&!0!==n&&s.push(n);return s}};var n=function(t,e,i){if(this.__class__="Violation",!(t instanceof s))throw new Error("Should give an assertion implementing the Assert interface");this.assert=t,this.value=e,void 0!==i&&(this.violation=i)};n.prototype={show:function(){var t={assert:this.assert.__class__,value:this.value};return this.violation&&(t.violation=this.violation),t},__toString:function(){return void 0!==this.violation&&(this.violation='", '+this.getViolation().constraint+" expected was "+this.getViolation().expected),this.assert.__class__+' assert failed for "'+this.value+this.violation||""},getViolation:function(){var t,e;for(t in this.violation)e=this.violation[t];return{constraint:t,expected:e}}};var s=function(t){this.__class__="Assert",this.__parentClass__=this.__class__,this.groups=[],void 0!==t&&this.addGroup(t)};s.prototype={construct:s,requiresValidation:function(t){return!(t&&!this.hasGroup(t))&&!(!t&&this.hasGroups())},check:function(t,e){if(this.requiresValidation(e))try{return this.validate(t,e)}catch(t){return t}},hasGroup:function(t){return a(t)?this.hasOneOf(t):"Any"===t||(this.hasGroups()?-1!==this.groups.indexOf(t):"Default"===t)},hasOneOf:function(t){for(var e=0;e<t.length;e++)if(this.hasGroup(t[e]))return!0;return!1},hasGroups:function(){return this.groups.length>0},addGroup:function(t){return a(t)?this.addGroups(t):(this.hasGroup(t)||this.groups.push(t),this)},removeGroup:function(t){for(var e=[],i=0;i<this.groups.length;i++)t!==this.groups[i]&&e.push(this.groups[i]);return this.groups=e,this},addGroups:function(t){for(var e=0;e<t.length;e++)this.addGroup(t[e]);return this},HaveProperty:function(t){return this.__class__="HaveProperty",this.node=t,this.validate=function(t){if(void 0===t[this.node])throw new n(this,t,{value:this.node});return!0},this},Blank:function(){return this.__class__="Blank",this.validate=function(t){if("string"!=typeof t)throw new n(this,t,{value:e.errorCode.must_be_a_string});if(""!==t.replace(/^\s+/g,"").replace(/\s+$/g,""))throw new n(this,t);return!0},this},Callback:function(t){if(this.__class__="Callback",this.arguments=Array.prototype.slice.call(arguments),1===this.arguments.length?this.arguments=[]:this.arguments.splice(0,1),"function"!=typeof t)throw new Error("Callback must be instanciated with a function");return this.fn=t,this.validate=function(t){var e=this.fn.apply(this,[t].concat(this.arguments));if(!0!==e)throw new n(this,t,{result:e});return!0},this},Choice:function(t){if(this.__class__="Choice",!a(t)&&"function"!=typeof t)throw new Error("Choice must be instanciated with an array or a function");return this.list=t,this.validate=function(t){for(var e="function"==typeof this.list?this.list():this.list,i=0;i<e.length;i++)if(t===e[i])return!0;throw new n(this,t,{choices:e})},this},Collection:function(t){return this.__class__="Collection",this.constraint=void 0!==t&&(t instanceof s?t:new i(t)),this.validate=function(t,i){var s,o=new e,l=0,u={},h=this.groups.length?this.groups:i;if(!a(t))throw new n(this,t,{value:e.errorCode.must_be_an_array});for(var d=0;d<t.length;d++)s=this.constraint?o.validate(t[d],this.constraint,h):o.validate(t[d],h),r(s)||(u[l]=s),l++;return!!r(u)||u},this},Count:function(t){return this.__class__="Count",this.count=t,this.validate=function(t){if(!a(t))throw new n(this,t,{value:e.errorCode.must_be_an_array});var i="function"==typeof this.count?this.count(t):this.count;if(isNaN(Number(i)))throw new Error("Count must be a valid interger",i);if(i!==t.length)throw new n(this,t,{count:i});return!0},this},Email:function(){return this.__class__="Email",this.validate=function(t){if("string"!=typeof t)throw new n(this,t,{value:e.errorCode.must_be_a_string});if(!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t))throw new n(this,t);return!0},this},EqualTo:function(t){if(this.__class__="EqualTo",void 0===t)throw new Error("EqualTo must be instanciated with a value or a function");return this.reference=t,this.validate=function(t){var e="function"==typeof this.reference?this.reference(t):this.reference;if(e!==t)throw new n(this,t,{value:e});return!0},this},GreaterThan:function(t){if(this.__class__="GreaterThan",void 0===t)throw new Error("Should give a threshold value");return this.threshold=t,this.validate=function(t){if(""===t||isNaN(Number(t)))throw new n(this,t,{value:e.errorCode.must_be_a_number});if(this.threshold>=t)throw new n(this,t,{threshold:this.threshold});return!0},this},GreaterThanOrEqual:function(t){if(this.__class__="GreaterThanOrEqual",void 0===t)throw new Error("Should give a threshold value");return this.threshold=t,this.validate=function(t){if(""===t||isNaN(Number(t)))throw new n(this,t,{value:e.errorCode.must_be_a_number});if(this.threshold>t)throw new n(this,t,{threshold:this.threshold});return!0},this},InstanceOf:function(t){if(this.__class__="InstanceOf",void 0===t)throw new Error("InstanceOf must be instanciated with a value");return this.classRef=t,this.validate=function(t){if(1!=t instanceof this.classRef)throw new n(this,t,{classRef:this.classRef});return!0},this},Length:function(t){if(this.__class__="Length",!t.min&&!t.max)throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");return this.min=t.min,this.max=t.max,this.validate=function(t){if("string"!=typeof t&&!a(t))throw new n(this,t,{value:e.errorCode.must_be_a_string_or_array});if(void 0!==this.min&&this.min===this.max&&t.length!==this.min)throw new n(this,t,{min:this.min,max:this.max});if(void 0!==this.max&&t.length>this.max)throw new n(this,t,{max:this.max});if(void 0!==this.min&&t.length<this.min)throw new n(this,t,{min:this.min});return!0},this},LessThan:function(t){if(this.__class__="LessThan",void 0===t)throw new Error("Should give a threshold value");return this.threshold=t,this.validate=function(t){if(""===t||isNaN(Number(t)))throw new n(this,t,{value:e.errorCode.must_be_a_number});if(this.threshold<=t)throw new n(this,t,{threshold:this.threshold});return!0},this},LessThanOrEqual:function(t){if(this.__class__="LessThanOrEqual",void 0===t)throw new Error("Should give a threshold value");return this.threshold=t,this.validate=function(t){if(""===t||isNaN(Number(t)))throw new n(this,t,{value:e.errorCode.must_be_a_number});if(this.threshold<t)throw new n(this,t,{threshold:this.threshold});return!0},this},NotNull:function(){return this.__class__="NotNull",this.validate=function(t){if(null==t)throw new n(this,t);return!0},this},NotBlank:function(){return this.__class__="NotBlank",this.validate=function(t){if("string"!=typeof t)throw new n(this,t,{value:e.errorCode.must_be_a_string});if(""===t.replace(/^\s+/g,"").replace(/\s+$/g,""))throw new n(this,t);return!0},this},Null:function(){return this.__class__="Null",this.validate=function(t){if(null!==t)throw new n(this,t);return!0},this},Range:function(t,e){if(this.__class__="Range",void 0===t||void 0===e)throw new Error("Range assert expects min and max values");return this.min=t,this.max=e,this.validate=function(t){try{return"string"==typeof t&&isNaN(Number(t))||a(t)?(new s).Length({min:this.min,max:this.max}).validate(t):(new s).GreaterThanOrEqual(this.min).validate(t)&&(new s).LessThanOrEqual(this.max).validate(t),!0}catch(e){throw new n(this,t,e.violation)}return!0},this},Regexp:function(t,i){if(this.__class__="Regexp",void 0===t)throw new Error("You must give a regexp");return this.regexp=t,this.flag=i||"",this.validate=function(t){if("string"!=typeof t)throw new n(this,t,{value:e.errorCode.must_be_a_string});if(!new RegExp(this.regexp,this.flag).test(t))throw new n(this,t,{regexp:this.regexp,flag:this.flag});return!0},this},Required:function(){return this.__class__="Required",this.validate=function(t){if(void 0===t)throw new n(this,t);try{"string"==typeof t?(new s).NotNull().validate(t)&&(new s).NotBlank().validate(t):!0===a(t)&&(new s).Length({min:1}).validate(t)}catch(e){throw new n(this,t)}return!0},this},Unique:function(t){return this.__class__="Unique","object"==typeof t&&(this.key=t.key),this.validate=function(t){var i,s=[];if(!a(t))throw new n(this,t,{value:e.errorCode.must_be_an_array});for(var r=0;r<t.length;r++)if(void 0!==(i="object"==typeof t[r]?t[r][this.key]:t[r])){if(-1!==s.indexOf(i))throw new n(this,t,{value:i});s.push(i)}return!0},this}},t.Assert=s,t.Validator=e,t.Violation=n,t.Constraint=i,Array.prototype.indexOf||(Array.prototype.indexOf=function(t){"use strict";if(null===this)throw new TypeError;var e=Object(this),i=e.length>>>0;if(0===i)return-1;var n=0;if(arguments.length>1&&((n=Number(arguments[1]))!=n?n=0:0!==n&&n!=1/0&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=i)return-1;for(var s=n>=0?n:Math.max(i-Math.abs(n),0);i>s;s++)if(s in e&&e[s]===t)return s;return-1});var r=function(t){for(var e in t)return!1;return!0},a=function(t){return"[object Array]"===Object.prototype.toString.call(t)};return"function"==typeof define&&define.amd?define("vendors/validator.js/dist/validator",[],function(){return t}):"undefined"!=typeof module&&module.exports?module.exports=t:window["undefined"!=typeof validatorjs_ns?validatorjs_ns:"Validator"]=t,t}();u=void 0!==u?u:"undefined"!=typeof module?module.exports:null;var h=function(t,e){this.__class__="ParsleyValidator",this.Validator=u,this.locale="en",this.init(t||{},e||{})};h.prototype={init:function(e,i){for(var n in this.catalog=i,this.validators=t.extend({},this.validators),e)this.addValidator(n,e[n].fn,e[n].priority,e[n].requirementsTransformer);window.Parsley.trigger("parsley:validator:init")},setLocale:function(t){if(void 0===this.catalog[t])throw new Error(t+" is not available in the catalog");return this.locale=t,this},addCatalog:function(t,e,i){return"object"==typeof e&&(this.catalog[t]=e),!0===i?this.setLocale(t):this},addMessage:function(t,e,i){return void 0===this.catalog[t]&&(this.catalog[t]={}),this.catalog[t][e.toLowerCase()]=i,this},validate:function(){return(new this.Validator.Validator).validate.apply(new u.Validator,arguments)},addValidator:function(t,e,i,n){if(this.validators[t])a.warn('Validator "'+t+'" is already defined.');else if(o.hasOwnProperty(t))return void a.warn('"'+t+'" is a restricted keyword and is not a valid validator name.');return this._setValidator(t,e,i,n)},updateValidator:function(t,e,i,n){return this.validators[t]?this._setValidator(t,e,i,n):(a.warn('Validator "'+t+'" is not already defined.'),this.addValidator(t,e,i,n))},removeValidator:function(t){return this.validators[t]||a.warn('Validator "'+t+'" is not defined.'),delete this.validators[t],this},_setValidator:function(e,i,n,s){return this.validators[e]=function(e){return t.extend((new u.Assert).Callback(i,e),{priority:n,requirementsTransformer:s})},this},getErrorMessage:function(t){var e;"type"===t.name?e=(this.catalog[this.locale][t.name]||{})[t.requirements]:e=this.formatMessage(this.catalog[this.locale][t.name],t.requirements);return e||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(t,e){if("object"==typeof e){for(var i in e)t=this.formatMessage(t,e[i]);return t}return"string"==typeof t?t.replace(new RegExp("%s","i"),e):""},validators:{notblank:function(){return t.extend((new u.Assert).NotBlank(),{priority:2})},required:function(){return t.extend((new u.Assert).Required(),{priority:512})},type:function(e){var i;switch(e){case"email":i=(new u.Assert).Email();break;case"range":case"number":i=(new u.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");break;case"integer":i=(new u.Assert).Regexp("^-?\\d+$");break;case"digits":i=(new u.Assert).Regexp("^\\d+$");break;case"alphanum":i=(new u.Assert).Regexp("^\\w+$","i");break;case"url":i=(new u.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i");break;default:throw new Error("validator type `"+e+"` is not supported")}return t.extend(i,{priority:256})},pattern:function(e){var i="";return/^\/.*\/(?:[gimy]*)$/.test(e)&&(i=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+i+"$"),"$1")),t.extend((new u.Assert).Regexp(e,i),{priority:64})},minlength:function(e){return t.extend((new u.Assert).Length({min:e}),{priority:30,requirementsTransformer:function(){return"string"!=typeof e||isNaN(e)?e:parseInt(e,10)}})},maxlength:function(e){return t.extend((new u.Assert).Length({max:e}),{priority:30,requirementsTransformer:function(){return"string"!=typeof e||isNaN(e)?e:parseInt(e,10)}})},length:function(e){return t.extend((new u.Assert).Length({min:e[0],max:e[1]}),{priority:32})},mincheck:function(t){return this.minlength(t)},maxcheck:function(t){return this.maxlength(t)},check:function(t){return this.length(t)},min:function(e){return t.extend((new u.Assert).GreaterThanOrEqual(e),{priority:30,requirementsTransformer:function(){return"string"!=typeof e||isNaN(e)?e:parseInt(e,10)}})},max:function(e){return t.extend((new u.Assert).LessThanOrEqual(e),{priority:30,requirementsTransformer:function(){return"string"!=typeof e||isNaN(e)?e:parseInt(e,10)}})},range:function(e){return t.extend((new u.Assert).Range(e[0],e[1]),{priority:32,requirementsTransformer:function(){for(var t=0;t<e.length;t++)e[t]="string"!=typeof e[t]||isNaN(e[t])?e[t]:parseInt(e[t],10);return e}})},equalto:function(e){return t.extend((new u.Assert).EqualTo(e),{priority:256,requirementsTransformer:function(){return t(e).length?t(e).val():e}})}}};var d=function(){this.__class__="ParsleyUI"};d.prototype={listen:function(){var t=this;return window.Parsley.on("form:init",function(){t.setupForm(this)}).on("field:init",function(){t.setupField(this)}).on("field:validated",function(){t.reflow(this)}).on("form:validated",function(){t.focus(this)}).on("field:reset",function(){t.reset(this)}).on("form:destroy",function(){t.destroy(this)}).on("field:destroy",function(){t.destroy(this)}),this},reflow:function(t){if(void 0!==t._ui&&!1!==t._ui.active){var e=this._diff(t.validationResult,t._ui.lastValidationResult);t._ui.lastValidationResult=t.validationResult,t._ui.validatedOnce=!0,this.manageStatusClass(t),this.manageErrorsMessages(t,e),this.actualizeTriggers(t),(e.kept.length||e.added.length)&&!0!==t._ui.failedOnce&&this.manageFailingFieldTrigger(t)}},getErrorsMessages:function(t){if(!0===t.validationResult)return[];for(var e=[],i=0;i<t.validationResult.length;i++)e.push(this._getErrorMessage(t,t.validationResult[i].assert));return e},manageStatusClass:function(t){t.hasConstraints()&&t.needsValidation()&&!0===t.validationResult?this._successClass(t):t.validationResult.length>0?this._errorClass(t):this._resetClass(t)},manageErrorsMessages:function(e,i){if(void 0===e.options.errorsMessagesDisabled){if(void 0!==e.options.errorMessage)return i.added.length||i.kept.length?(this._insertErrorWrapper(e),0===e._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&e._ui.$errorsWrapper.append(t(e.options.errorTemplate).addClass("parsley-custom-error-message")),e._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(e.options.errorMessage)):e._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var n=0;n<i.removed.length;n++)this.removeError(e,i.removed[n].assert.name,!0);for(n=0;n<i.added.length;n++)this.addError(e,i.added[n].assert.name,void 0,i.added[n].assert,!0);for(n=0;n<i.kept.length;n++)this.updateError(e,i.kept[n].assert.name,void 0,i.kept[n].assert,!0)}},addError:function(e,i,n,s,r){this._insertErrorWrapper(e),e._ui.$errorsWrapper.addClass("filled").append(t(e.options.errorTemplate).addClass("parsley-"+i).html(n||this._getErrorMessage(e,s))),!0!==r&&this._errorClass(e)},updateError:function(t,e,i,n,s){t._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(t,n)),!0!==s&&this._errorClass(t)},removeError:function(t,e,i){t._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove(),!0!==i&&this.manageStatusClass(t)},focus:function(t){if(t._focusedField=null,!0===t.validationResult||"none"===t.options.focus)return null;for(var e=0;e<t.fields.length;e++){var i=t.fields[e];if(!0!==i.validationResult&&i.validationResult.length>0&&void 0===i.options.noFocus&&(t._focusedField=i.$element,"first"===t.options.focus))break}return null===t._focusedField?null:t._focusedField.focus()},_getErrorMessage:function(t,e){var i=e.name+"Message";return void 0!==t.options[i]?window.ParsleyValidator.formatMessage(t.options[i],e.requirements):window.ParsleyValidator.getErrorMessage(e)},_diff:function(t,e,i){for(var n=[],s=[],r=0;r<t.length;r++){for(var a=!1,o=0;o<e.length;o++)if(t[r].assert.name===e[o].assert.name){a=!0;break}a?s.push(t[r]):n.push(t[r])}return{kept:s,added:n,removed:i?[]:this._diff(e,t,!0).added}},setupForm:function(e){e.$element.on("submit.Parsley",!1,t.proxy(e.onSubmitValidate,e)),!1!==e.options.uiEnabled&&e.$element.attr("novalidate","")},setupField:function(e){var i={active:!1};!1!==e.options.uiEnabled&&(i.active=!0,e.$element.attr(e.options.namespace+"id",e.__id__),i.$errorClassHandler=this._manageClassHandler(e),i.errorsWrapperId="parsley-id-"+(e.options.multiple?"multiple-"+e.options.multiple:e.__id__),i.$errorsWrapper=t(e.options.errorsWrapper).attr("id",i.errorsWrapperId),i.lastValidationResult=[],i.validatedOnce=!1,i.validationInformationVisible=!1,e._ui=i,this.actualizeTriggers(e))},_manageClassHandler:function(e){if("string"==typeof e.options.classHandler&&t(e.options.classHandler).length)return t(e.options.classHandler);var i=e.options.classHandler(e);return void 0!==i&&i.length?i:!e.options.multiple||e.$element.is("select")?e.$element:e.$element.parent()},_insertErrorWrapper:function(e){var i;if(0!==e._ui.$errorsWrapper.parent().length)return e._ui.$errorsWrapper.parent();if("string"==typeof e.options.errorsContainer){if(t(e.options.errorsContainer).length)return t(e.options.errorsContainer).append(e._ui.$errorsWrapper);a.warn("The errors container `"+e.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof e.options.errorsContainer&&(i=e.options.errorsContainer(e));if(void 0!==i&&i.length)return i.append(e._ui.$errorsWrapper);var n=e.$element;return e.options.multiple&&(n=n.parent()),n.after(e._ui.$errorsWrapper)},actualizeTriggers:function(e){var i=e.$element;if(e.options.multiple&&(i=t("["+e.options.namespace+'multiple="'+e.options.multiple+'"]')),i.off(".Parsley"),!1!==e.options.trigger){var n=e.options.trigger.replace(/^\s+/g,"").replace(/\s+$/g,"");""!==n&&i.on(n.split(" ").join(".Parsley ")+".Parsley",t.proxy("function"==typeof e.eventValidate?e.eventValidate:this.eventValidate,e))}},eventValidate:function(t){new RegExp("key").test(t.type)&&!this._ui.validationInformationVisible&&this.getValue().length<=this.options.validationThreshold||(this._ui.validatedOnce=!0,this.validate())},manageFailingFieldTrigger:function(e){return e._ui.failedOnce=!0,e.options.multiple&&t("["+e.options.namespace+'multiple="'+e.options.multiple+'"]').each(function(){return new RegExp("change","i").test(t(this).parsley().options.trigger||"")?void 0:t(this).on("change.ParsleyFailedOnce",!1,t.proxy(e.validate,e))}),e.$element.is("select")&&!new RegExp("change","i").test(e.options.trigger||"")?e.$element.on("change.ParsleyFailedOnce",!1,t.proxy(e.validate,e)):new RegExp("keyup","i").test(e.options.trigger||"")?void 0:e.$element.on("keyup.ParsleyFailedOnce",!1,t.proxy(e.validate,e))},reset:function(t){this.actualizeTriggers(t),t.$element.off(".ParsleyFailedOnce"),void 0!==t._ui&&"ParsleyForm"!==t.__class__&&(t._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(t),t._ui.validatedOnce=!1,t._ui.lastValidationResult=[],t._ui.validationInformationVisible=!1,t._ui.failedOnce=!1)},destroy:function(t){this.reset(t),"ParsleyForm"!==t.__class__&&(void 0!==t._ui&&t._ui.$errorsWrapper.remove(),delete t._ui)},_successClass:function(t){t._ui.validationInformationVisible=!0,t._ui.$errorClassHandler.removeClass(t.options.errorClass).addClass(t.options.successClass)},_errorClass:function(t){t._ui.validationInformationVisible=!0,t._ui.$errorClassHandler.removeClass(t.options.successClass).addClass(t.options.errorClass)},_resetClass:function(t){t._ui.$errorClassHandler.removeClass(t.options.successClass).removeClass(t.options.errorClass)}};var c=function(e,i,n){this.__class__="ParsleyForm",this.__id__=a.generateID(),this.$element=t(e),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null};c.prototype={onSubmitValidate:function(e){return this.validate(void 0,void 0,e),(!1===this.validationResult||!this._trigger("submit"))&&e instanceof t.Event&&(e.stopImmediatePropagation(),e.preventDefault()),this},validate:function(t,e,i){this.submitEvent=i,this.validationResult=!0;var n=[];return this._trigger("validate"),this._refreshFields(),this._withoutReactualizingFormOptions(function(){for(var i=0;i<this.fields.length;i++)(!t||this._isFieldInGroup(this.fields[i],t))&&(!0!==(n=this.fields[i].validate(e))&&n.length>0&&this.validationResult&&(this.validationResult=!1))}),this._trigger(this.validationResult?"success":"error"),this._trigger("validated"),this.validationResult},isValid:function(t,e){return this._refreshFields(),this._withoutReactualizingFormOptions(function(){for(var i=0;i<this.fields.length;i++)if((!t||this._isFieldInGroup(this.fields[i],t))&&!1===this.fields[i].isValid(e))return!1;return!0})},_isFieldInGroup:function(e,i){return t.isArray(e.options.group)?-1!==t.inArray(i,e.options.group):e.options.group===i},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var e=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){this.$element.find(this.options.inputs).not(this.options.excluded).each(function(){var t=new y.Factory(this,{},e);"ParsleyField"!==t.__class__&&"ParsleyFieldMultiple"!==t.__class__||!0===t.options.excluded||void 0===e.fieldsMappedById[t.__class__+"-"+t.__id__]&&(e.fieldsMappedById[t.__class__+"-"+t.__id__]=t,e.fields.push(t))}),t(i).not(e.fields).each(function(){this._trigger("reset")})}),this},_withoutReactualizingFormOptions:function(t){var e=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=t.call(this);return this.actualizeOptions=e,i},_trigger:function(t){return t="form:"+t,this.trigger.apply(this,arguments)}};var f=function(e,i,n,s){this.__class__="ParsleyField",this.__id__=a.generateID(),this.$element=t(e),void 0!==s&&(this.parent=s),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=[],this._bindConstraints()};f.prototype={validate:function(t){return this.value=this.getValue(),this._trigger("validate"),this._trigger(this.isValid(t,this.value)?"success":"error"),this._trigger("validated"),this.validationResult},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(t){return void 0===t&&(t=this.getValue()),!(!t.length&&!this._isRequired()&&void 0===this.options.validateIfEmpty)},isValid:function(t,e){if(this.refreshConstraints(),this.validationResult=!0,!this.hasConstraints())return!0;if(null==e&&(e=this.getValue()),!this.needsValidation(e)&&!0!==t)return!0;var i=["Any"];!1!==this.options.priorityEnabled&&(i=this._getConstraintsSortedPriorities());for(var n=0;n<i.length;n++)if(!0!==(this.validationResult=this.validateThroughValidator(e,this.constraints,i[n])))return!1;return!0},getValue:function(){var t;return null==(t="function"==typeof this.options.value?this.options.value(this):void 0!==this.options.value?this.options.value:this.$element.val())?"":this._handleWhitespace(t)},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(e,i,n,s){if("function"==typeof window.ParsleyValidator.validators[e]){var r=new function(e,i,n,s,r){var o={};if(!new RegExp("ParsleyField").test(e.__class__))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");if("function"==typeof window.ParsleyValidator.validators[i]&&(o=window.ParsleyValidator.validators[i](n)),"Assert"!==o.__parentClass__)throw new Error("Valid validator expected");return s=s||(void 0!==e.options[i+"Priority"]?e.options[i+"Priority"]:o.priority||2),"function"==typeof o.requirementsTransformer&&(n=o.requirementsTransformer(),o=window.ParsleyValidator.validators[i](n)),t.extend(o,{name:i,requirements:n,priority:s,groups:[s],isDomConstraint:r||a.checkAttr(e.$element,e.options.namespace,i)})}(this,e,i,n,s);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(t){for(var e=0;e<this.constraints.length;e++)if(t===this.constraints[e].name){this.constraints.splice(e,1);break}return delete this.constraintsByName[t],this},updateConstraint:function(t,e,i){return this.removeConstraint(t).addConstraint(t,e,i)},_bindConstraints:function(){for(var t=[],e={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(t.push(this.constraints[i]),e[this.constraints[i].name]=this.constraints[i]);for(var n in this.constraints=t,this.constraintsByName=e,this.options)this.addConstraint(n,this.options[n]);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){(this.$element.hasClass("required")||this.$element.attr("required"))&&this.addConstraint("required",!0,void 0,!0),"string"==typeof this.$element.attr("pattern")&&this.addConstraint("pattern",this.$element.attr("pattern"),void 0,!0),void 0!==this.$element.attr("min")&&void 0!==this.$element.attr("max")?this.addConstraint("range",[this.$element.attr("min"),this.$element.attr("max")],void 0,!0):void 0!==this.$element.attr("min")?this.addConstraint("min",this.$element.attr("min"),void 0,!0):void 0!==this.$element.attr("max")&&this.addConstraint("max",this.$element.attr("max"),void 0,!0),void 0!==this.$element.attr("minlength")&&void 0!==this.$element.attr("maxlength")?this.addConstraint("length",[this.$element.attr("minlength"),this.$element.attr("maxlength")],void 0,!0):void 0!==this.$element.attr("minlength")?this.addConstraint("minlength",this.$element.attr("minlength"),void 0,!0):void 0!==this.$element.attr("maxlength")&&this.addConstraint("maxlength",this.$element.attr("maxlength"),void 0,!0);var t=this.$element.attr("type");return void 0===t?this:"number"===t?void 0===this.$element.attr("step")||0==parseFloat(this.$element.attr("step"))%1?this.addConstraint("type","integer",void 0,!0):this.addConstraint("type","number",void 0,!0):/^(email|url|range)$/i.test(t)?this.addConstraint("type",t,void 0,!0):this},_isRequired:function(){return void 0!==this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(t){return t="field:"+t,this.trigger.apply(this,arguments)},_handleWhitespace:function(t){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(t=t.replace(/\s{2,}/g," ")),("trim"===this.options.whitespace||"squish"===this.options.whitespace||!0===this.options.trimValue)&&(t=t.replace(/^\s+|\s+$/g,"")),t},_getConstraintsSortedPriorities:function(){for(var t=[],e=0;e<this.constraints.length;e++)-1===t.indexOf(this.constraints[e].priority)&&t.push(this.constraints[e].priority);return t.sort(function(t,e){return e-t}),t}};var p=function(){this.__class__="ParsleyFieldMultiple"};p.prototype={addElement:function(t){return this.$elements.push(t),this},refreshConstraints:function(){var e;if(this.constraints=[],this.$element.is("select"))return this.actualizeOptions()._bindConstraints(),this;for(var i=0;i<this.$elements.length;i++)if(t("html").has(this.$elements[i]).length){e=this.$elements[i].data("ParsleyFieldMultiple").refreshConstraints().constraints;for(var n=0;n<e.length;n++)this.addConstraint(e[n].name,e[n].requirements,e[n].priority,e[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if(void 0!==this.options.value)return this.options.value;if(this.$element.is("input[type=radio]"))return this._findRelatedMultiple().filter(":checked").val()||"";if(this.$element.is("input[type=checkbox]")){var e=[];return this._findRelatedMultiple().filter(":checked").each(function(){e.push(t(this).val())}),e}return this.$element.is("select")&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var m=function(e,i,n){this.$element=t(e);var s=this.$element.data("Parsley");if(s)return void 0!==n&&s.parent===window.Parsley&&(s.parent=n,s._resetOptions(s.options)),s;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if(void 0!==n&&"ParsleyForm"!==n.__class__)throw new Error("Parent instance must be a ParsleyForm instance");return this.parent=n||window.Parsley,this.init(i)};m.prototype={init:function(t){return this.__class__="Parsley",this.__version__="2.1.3",this.__id__=a.generateID(),this._resetOptions(t),this.$element.is("form")||a.checkAttr(this.$element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return this.$element.is("input[type=radio], input[type=checkbox]")||this.$element.is("select")&&void 0!==this.$element.attr("multiple")},handleMultiple:function(){var e,i,n=this;if(this.options.multiple||(void 0!==this.$element.attr("name")&&this.$element.attr("name").length?this.options.multiple=e=this.$element.attr("name"):void 0!==this.$element.attr("id")&&this.$element.attr("id").length&&(this.options.multiple=this.$element.attr("id"))),this.$element.is("select")&&void 0!==this.$element.attr("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),void 0!==e&&t('input[name="'+e+'"]').each(function(){t(this).is("input[type=radio], input[type=checkbox]")&&t(this).attr(n.options.namespace+"multiple",n.options.multiple)});for(var s=this._findRelatedMultiple(),r=0;r<s.length;r++)if(void 0!==(i=t(s.get(r)).data("Parsley"))){this.$element.data("ParsleyFieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(e,i){var n;switch(e){case"parsleyForm":n=t.extend(new c(this.$element,this.domOptions,this.options),window.ParsleyExtend)._bindFields();break;case"parsleyField":n=t.extend(new f(this.$element,this.domOptions,this.options,this.parent),window.ParsleyExtend);break;case"parsleyFieldMultiple":n=t.extend(new f(this.$element,this.domOptions,this.options,this.parent),new p,window.ParsleyExtend)._init();break;default:throw new Error(e+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.$element,this.options.namespace,"multiple",this.options.multiple),void 0!==i?(this.$element.data("ParsleyFieldMultiple",n),n):(this.$element.data("Parsley",n),n._trigger("init"),n)}};var v=t({}),_=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},g="parsley:";t.listen=function(t,n){var s;if(_(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(s=arguments[1],n=arguments[2]),"function"!=typeof arguments[1])throw new Error("Wrong parameters");window.Parsley.on(i(t),e(n,s))},t.listenTo=function(t,n,s){if(_(),!(t instanceof f||t instanceof c))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof s)throw new Error("Wrong parameters");t.on(i(n),e(s))},t.unsubscribe=function(t,e){if(_(),"string"!=typeof t||"function"!=typeof e)throw new Error("Wrong arguments");window.Parsley.off(i(t),e.parsleyAdaptedCallback)},t.unsubscribeTo=function(t,e){if(_(),!(t instanceof f||t instanceof c))throw new Error("Must give Parsley instance");t.off(i(e))},t.unsubscribeAll=function(e){_(),window.Parsley.off(i(e)),t("form,input,textarea,select").each(function(){var n=t(this).data("Parsley");n&&n.off(i(e))})},t.emit=function(t,e){_();var n=e instanceof f||e instanceof c,s=Array.prototype.slice.call(arguments,n?2:1);s.unshift(i(t)),n||(e=window.Parsley),e.trigger.apply(e,s)},window.ParsleyConfig=window.ParsleyConfig||{},window.ParsleyConfig.i18n=window.ParsleyConfig.i18n||{},window.ParsleyConfig.i18n.en=jQuery.extend(window.ParsleyConfig.i18n.en||{},{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),void 0!==window.ParsleyValidator&&window.ParsleyValidator.addCatalog("en",window.ParsleyConfig.i18n.en,!0);var y=t.extend(new l,{$element:t(document),actualizeOptions:null,_resetOptions:null,Factory:m,version:"2.1.3"});return t.extend(f.prototype,l.prototype),t.extend(c.prototype,l.prototype),t.extend(m.prototype,l.prototype),t.fn.parsley=t.fn.psly=function(e){if(this.length>1){var i=[];return this.each(function(){i.push(t(this).parsley(e))}),i}return t(this).length?new m(this,e):void a.warn("You must bind Parsley on an existing element.")},void 0===window.ParsleyExtend&&(window.ParsleyExtend={}),y.options=t.extend(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=y.options,window.Parsley=window.psly=y,window.ParsleyUtils=a,window.ParsleyValidator=new h(window.ParsleyConfig.validators,window.ParsleyConfig.i18n),window.ParsleyUI="function"==typeof window.ParsleyConfig.ParsleyUI?(new window.ParsleyConfig.ParsleyUI).listen():(new d).listen(),!1!==window.ParsleyConfig.autoBind&&t(function(){t("[data-parsley-validate]").length&&t("[data-parsley-validate]").parsley()}),window.Parsley});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(i,e){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(e+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.hidden="hidden",n.paused=!1,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,s,o),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0),n.checkResponsive(!0)}}()).prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(0>t||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.asNavFor=function(e){var t=this.options.asNavFor;t&&null!==t&&(t=i(t).not(this.$slider)),null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer),i.slideCount>i.options.slidesToShow&&!0!==i.paused&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this;!1===i.options.infinite?1===i.direction?(i.currentSlide+1===i.slideCount-1&&(i.direction=0),i.slideHandler(i.currentSlide+i.options.slidesToScroll)):(i.currentSlide-1==0&&(i.direction=1),i.slideHandler(i.currentSlide-i.options.slidesToScroll)):i.slideHandler(i.currentSlide+i.options.slidesToScroll)},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots&&o.slideCount>o.options.slidesToShow){for(t='<ul class="'+o.options.dotsClass+'">',e=0;e<=o.getDotCount();e+=1)t+="<li>"+o.options.customPaging.call(this,o,e)+"</li>";t+="</ul>",o.$dots=i(t).appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),(!0===e.options.centerMode||!0===e.options.swipeToSlide)&&(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,l,r=this;if(o=document.createDocumentFragment(),n=r.$slider.children(),r.options.rows>1){for(l=r.options.slidesPerRow*r.options.rows,s=Math.ceil(n.length/l),i=0;s>i;i++){var a=document.createElement("div");for(e=0;e<r.options.rows;e++){var d=document.createElement("div");for(t=0;t<r.options.slidesPerRow;t++){var c=i*l+(e*r.options.slidesPerRow+t);n.get(c)&&d.appendChild(n.get(c))}a.appendChild(d)}o.appendChild(a)}r.$slider.html(o),r.$slider.children().children().children().css({width:100/r.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,l=this,r=!1,a=l.$slider.width(),d=window.innerWidth||i(window).width();if("window"===l.respondTo?n=d:"slider"===l.respondTo?n=a:"min"===l.respondTo&&(n=Math.min(d,a)),l.options.responsive&&l.options.responsive.length&&null!==l.options.responsive){for(o in s=null,l.breakpoints)l.breakpoints.hasOwnProperty(o)&&(!1===l.originalSettings.mobileFirst?n<l.breakpoints[o]&&(s=l.breakpoints[o]):n>l.breakpoints[o]&&(s=l.breakpoints[o]));null!==s?null!==l.activeBreakpoint?(s!==l.activeBreakpoint||t)&&(l.activeBreakpoint=s,"unslick"===l.breakpointSettings[s]?l.unslick(s):(l.options=i.extend({},l.originalSettings,l.breakpointSettings[s]),!0===e&&(l.currentSlide=l.options.initialSlide),l.refresh(e)),r=s):(l.activeBreakpoint=s,"unslick"===l.breakpointSettings[s]?l.unslick(s):(l.options=i.extend({},l.originalSettings,l.breakpointSettings[s]),!0===e&&(l.currentSlide=l.options.initialSlide),l.refresh(e)),r=s):null!==l.activeBreakpoint&&(l.activeBreakpoint=null,l.options=l.originalSettings,!0===e&&(l.currentSlide=l.options.initialSlide),l.refresh(e),r=s),e||!1===r||l.$slider.trigger("breakpoint",[l,r])}},e.prototype.changeSlide=function(e,t){var o,s,n=this,l=i(e.target);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),o=n.slideCount%n.options.slidesToScroll!=0?0:(n.slideCount-n.currentSlide)%n.options.slidesToScroll,e.data.message){case"previous":s=0===o?n.options.slidesToScroll:n.options.slidesToShow-o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide-s,!1,t);break;case"next":s=0===o?n.options.slidesToScroll:o,n.slideCount>n.options.slidesToShow&&n.slideHandler(n.currentSlide+s,!1,t);break;case"index":var r=0===e.data.index?0:e.data.index||l.index()*n.options.slidesToScroll;n.slideHandler(n.checkNavigable(r),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(t=0,i>(e=this.getNavigableIndexes())[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide),!0===e.options.pauseOnDotsHover&&!0===e.options.autoplay&&i("li",e.$dots).off("mouseenter.slick",i.proxy(e.setPaused,e,!0)).off("mouseleave.slick",i.proxy(e.setPaused,e,!1))),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide)),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.$list.off("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.setPaused,e,!1)),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).off("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpRows=function(){var i;this.options.rows>1&&((i=this.$slides.children().children()).removeAttr("style"),this.$slider.html(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e={};e[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(e):this.$slides.eq(i).css(e)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;return o-1},e.prototype.getLeft=function(i){var e,t,o,s=this,n=0;return s.slideOffset=0,t=s.$slides.first().outerHeight(!0),!0===s.options.infinite?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,n=t*s.options.slidesToShow*-1),s.slideCount%s.options.slidesToScroll!=0&&i+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(i>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(i-s.slideCount))*s.slideWidth*-1,n=(s.options.slidesToShow-(i-s.slideCount))*t*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,n=s.slideCount%s.options.slidesToScroll*t*-1))):i+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(i+s.options.slidesToShow-s.slideCount)*s.slideWidth,n=(i+s.options.slidesToShow-s.slideCount)*t),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,n=0),!0===s.options.centerMode&&!0===s.options.infinite?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:!0===s.options.centerMode&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),e=!1===s.options.vertical?i*s.slideWidth*-1+s.slideOffset:i*t*-1+n,!0===s.options.variableWidth&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===s.options.centerMode&&(o=s.slideCount<=s.options.slidesToShow||!1===s.options.infinite?s.$slideTrack.children(".slick-slide").eq(i):s.$slideTrack.children(".slick-slide").eq(i+s.options.slidesToShow+1),e=!0===s.options.rtl?o[0]?-1*(s.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(s.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);i>t;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){return n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft?(e=n,!1):void 0}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.on("click.slick",{message:"next"},i.changeSlide))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&!0===e.options.autoplay&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.setPaused,e,!0)).on("mouseleave.slick",i.proxy(e.setPaused,e,!1))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.$list.on("mouseenter.slick",i.proxy(e.setPaused,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.setPaused,e,!1)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(document).on("ready.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show(),!0===i.options.autoplay&&i.autoPlay()},e.prototype.keyHandler=function(i){i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===this.options.accessibility?this.changeSlide({data:{message:"previous"}}):39===i.keyCode&&!0===this.options.accessibility&&this.changeSlide({data:{message:"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy").removeClass("slick-loading")})})},o.src=t})}var t,o,s=this;!0===s.options.centerMode?!0===s.options.infinite?o=(t=s.currentSlide+(s.options.slidesToShow/2+1))+s.options.slidesToShow+2:(t=Math.max(0,s.currentSlide-(s.options.slidesToShow/2+1)),o=s.options.slidesToShow/2+1+2+s.currentSlide):(o=(t=s.options.infinite?s.options.slidesToShow+s.currentSlide:s.currentSlide)+s.options.slidesToShow,!0===s.options.fade&&(t>0&&t--,o<=s.slideCount&&o++)),e(s.$slider.find(".slick-slide").slice(t,o)),s.slideCount<=s.options.slidesToShow?e(s.$slider.find(".slick-slide")):s.currentSlide>=s.slideCount-s.options.slidesToShow?e(s.$slider.find(".slick-cloned").slice(0,s.options.slidesToShow)):0===s.currentSlide&&e(s.$slider.find(".slick-cloned").slice(-1*s.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){this.paused=!1,this.autoPlay()},e.prototype.postSlide=function(i){var e=this;e.$slider.trigger("afterChange",[e,i]),e.animating=!1,e.setPosition(),e.swipeLeft=null,!0===e.options.autoplay&&!1===e.paused&&e.autoPlay(),!0===e.options.accessibility&&e.initADA()},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(){var e,t=this;i("img[data-lazy]",t.$slider).length>0&&((e=i("img[data-lazy]",t.$slider).first()).attr("src",null),e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy"),t.progressiveLazyLoad(),!0===t.options.adaptiveHeight&&t.setPosition()}).error(function(){e.removeAttr("data-lazy"),t.progressiveLazyLoad()}))},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,s.options.infinite||(s.slideCount<=s.options.slidesToShow?s.currentSlide=0:s.currentSlide>o&&(s.currentSlide=o)),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){for(e in s.respondTo=s.options.respondTo||"window",n)if(o=s.breakpoints.length-1,t=n[e].breakpoint,n.hasOwnProperty(e)){for(;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses(0),e.setPosition(),e.$slider.trigger("reInit",[e]),!0===e.options.autoplay&&e.focusHandler()},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?i=!0===(e=i)?0:o.slideCount-1:i=!0===e?--i:i,!(o.slideCount<1||0>i||i>o.slideCount-1)&&(o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(e,t,o){var s,n,l=this;if("responsive"===e&&"array"===i.type(t))for(n in t)if("array"!==i.type(l.options.responsive))l.options.responsive=[t[n]];else{for(s=l.options.responsive.length-1;s>=0;)l.options.responsive[s].breakpoint===t[n].breakpoint&&l.options.responsive.splice(s,1),s--;l.options.responsive.push(t[n])}else l.options[e]=t;!0===o&&(l.unload(),l.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode?(e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")):i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===n.options.lazyLoad&&n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;o>e;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.setPaused=function(i){var e=this;!0===e.options.autoplay&&!0===e.options.pauseOnHover&&(e.paused=i,i?e.autoPlayClear():e.autoPlay())},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?(t.setSlideClasses(s),void t.asNavFor(s)):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,l,r=null,a=this;return e=e||!1,!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i||a.slideCount<=a.options.slidesToShow?void 0:(!1===e&&a.asNavFor(i),o=i,r=a.getLeft(o),l=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?l:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(0>i||i>a.getDotCount()*a.options.slidesToScroll)?void(!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(l,function(){a.postSlide(o)}):a.postSlide(o))):!1===a.options.infinite&&!0===a.options.centerMode&&(0>i||i>a.slideCount-a.options.slidesToScroll)?void(!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(l,function(){a.postSlide(o)}):a.postSlide(o))):(!0===a.options.autoplay&&clearInterval(a.autoPlayTimer),s=0>o?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade?(!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(!0!==t?a.animateSlide(r,function(){a.postSlide(s)}):a.postSlide(s))))},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),0>(o=Math.round(180*t/Math.PI))&&(o=360-Math.abs(o)),45>=o&&o>=0?!1===s.options.rtl?"left":"right":360>=o&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&225>=o?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&135>=o?"left":"right":"vertical"},e.prototype.swipeEnd=function(i){var e,t=this;if(t.dragging=!1,t.shouldClick=!(t.touchObject.swipeLength>10),void 0===t.touchObject.curX)return!1;if(!0===t.touchObject.edgeHit&&t.$slider.trigger("edge",[t,t.swipeDirection()]),t.touchObject.swipeLength>=t.touchObject.minSwipe)switch(t.swipeDirection()){case"left":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide+t.getSlideCount()):t.currentSlide+t.getSlideCount(),t.slideHandler(e),t.currentDirection=0,t.touchObject={},t.$slider.trigger("swipe",[t,"left"]);break;case"right":e=t.options.swipeToSlide?t.checkNavigable(t.currentSlide-t.getSlideCount()):t.currentSlide-t.getSlideCount(),t.slideHandler(e),t.currentDirection=1,t.touchObject={},t.$slider.trigger("swipe",[t,"right"])}else t.touchObject.startX!==t.touchObject.curX&&(t.slideHandler(t.currentSlide),t.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2)))),"vertical"!==(t=l.swipeDirection())?(void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&i.preventDefault(),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))):void 0)},e.prototype.swipeStart=function(i){var e,t=this;return 1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){this.$slider.trigger("unslick",[this,i]),this.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},e.prototype.visibility=function(){var i=this;document[i.hidden]?(i.paused=!0,i.autoPlayClear()):!0===i.options.autoplay&&(i.paused=!1,i.autoPlay())},e.prototype.initADA=function(){var e=this;e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),e.$slideTrack.attr("role","listbox"),e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){i(this).attr({role:"option","aria-describedby":"slick-slide"+e.instanceUid+t})}),null!==e.$dots&&e.$dots.attr("role","tablist").find("li").each(function(t){i(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+e.instanceUid+t,id:"slick-slide"+e.instanceUid+t})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),e.activateADA()},e.prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.focusHandler=function(){var e=this;e.$slider.on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.isPlay&&(o.is(":focus")?(e.autoPlayClear(),e.paused=!0):(e.paused=!1,e.autoPlay()))},0)})},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),l=o.length;for(i=0;l>i;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,a=function(t){return parseFloat(t)||0},i=function(e){var o=t(e),i=null,n=[];return o.each(function(){var e=t(this),o=e.offset().top-a(e.css("margin-top")),r=n.length>0?n[n.length-1]:null;null===r?n.push(e):Math.floor(Math.abs(i-o))<=1?n[n.length-1]=r.add(e):n.push(e),i=o}),n},n=function(e){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var a=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(a)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=i,r._parse=a,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=i(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var i=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=t(this),o=e.attr("style"),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block");var i={display:a};i[s.property]="",e.css(i),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}i.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=a(e.css("border-top-width"))+a(e.css("border-bottom-width")),o+=a(e.css("padding-top"))+a(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),a=o.attr("data-mh")||o.attr("data-match-height");e[a]=a in e?e[a].add(o):o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(a,i){if(i&&"resize"===i.type){var n=t(window).width();if(n===e)return;e=n}a?-1===o&&(o=setTimeout(function(){s(i),o=-1},r._throttle)):s(i)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
function setIbrCharts(e,i){if(jQuery(".chart .column").each(function(e){jQuery(this).find(".iran").css("height",0)}),jQuery(".active_tab_content .chart .column").each(function(i){jQuery(this).outerHeight();var t=parseInt(jQuery(this).find(".percentage").text().replace("%",""));jQuery(this).find(".rank").outerHeight();5==t&&(t+="mobile"==e?4:1),4==t&&(t+="mobile"==e?5:2),3==t&&(t+="mobile"==e?6:3),2==t&&(t+="mobile"==e?7:4),1==t&&(t+="mobile"==e?8:5),0==t&&(t+="mobile"==e?9:6),95==t&&(t-="mobile"==e?4:1),96==t&&(t-="mobile"==e?5:2),97==t&&(t-="mobile"==e?6:3),98==t&&(t-="mobile"==e?7:4),99==t&&(t-="mobile"==e?8:5),100==t&&(t-="mobile"==e?9:6),jQuery(this).find(".iran").css("height",t+"%")}),"desktop"==e&&(jQuery(".lightbox-activator").unbind("click",!1),jQuery(".active_tab_content .lightbox-activator").on("click",function(e){var i=jQuery(this).attr("data-nid"),t=jQuery(".chart_lightbox[data-nid='"+i+"']");t.prepend('<div id="overlay"><div>'),t.show().addClass("activated"),t.find(".close").on("click.ibrrIndex",function(e){t.hide().removeClass("activated"),jQuery("#overlay").remove()}),jQuery("#overlay").on("click",function(e){t.find(".close").trigger("click.ibrrIndex")})})),"mobile"==e)0!==jQuery(".active_tab_content .view-business-risk").find(".views-row").length&&setTimeout(function(){var e=jQuery(".active_tab_content .view-business-risk .view-content .charts_container");e.hasClass("slick-initialized")?e.slick("setPosition"):(jQuery(".active_tab_content .view-content").prepend(jQuery("<div class='control-arrows'></div>")),jQuery(".active_tab_content .view-business-risk .views-row").first().find(".chart_lightbox").show(),e.slick({slidesToShow:1,slidesToScroll:1,draggable:!1,swipe:!1,prevArrow:"<div class='slide-prev'><span class='text'>"+Drupal.t("Prev")+"</span><span class='symbol'>◁</span></div>",nextArrow:"<div class='slide-next'><span class='text'>"+Drupal.t("Next")+"</span><span class='symbol'>▷</span></div>",appendArrows:jQuery(".active_tab_content .view-content .control-arrows"),infinite:!1}).on("beforeChange",function(e,t,s,a){jQuery(".active_tab_content .view-business-risk .views-row:eq("+a+")").find(".chart_lightbox").show(i)}).on("afterChange",function(e,t,s,a){jQuery(".active_tab_content .view-business-risk .views-row:not(:eq("+s+"))").find(".chart_lightbox").hide(i)}))},i);else if("desktop"==e){showSpinner(e);var t=calculate_graph_size(),s=jQuery(".active_tab_content .view-business-risk").find(".views-row").length;t<s&&setTimeout(function(){var e=jQuery(".active_tab_content .view-business-risk .view-content .charts_container");e.hasClass("slick-initialized")?e.slick("setPosition"):e.slick({slidesToShow:t,slidesToScroll:t,draggable:!0,swipe:!0,infinite:!1})},i);var a=0,o=jQuery(".active_tab_content .view-business-risk .chart .bottom .title");o.each(function(e){var i=jQuery(this).height();i>a&&(a=i)}),o.each(function(e){jQuery(this).css("height",a)})}}function calculate_graph_size(){var e=jQuery(".active_tab_content .charts_container").width(),i=jQuery(".active_tab_content .charts_container .views-row").width(),t=jQuery(".active_tab_content .charts_container .views-row").length,s=null;for(t>8&&(t=8);1!=s;)e-i*t<=96?t--:s=!0;return t}function showSpinner(e){if(!1===jQuery(".active_tab_content").hasClass("spiner-proccessed")&&(jQuery(".active_tab_content").addClass("spiner-proccessed"),"desktop"==e)){if(spinnerExecuted=!0,0==jQuery(".cube-wrapper").length){var i=jQuery("div[class*='block-views-blockbusiness-risk-block-']:first");i.before('<div class="cube-wrapper"><div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div></div>'),jQuery(".cube-wrapper").css({width:jQuery(i).width(),height:jQuery(i).height()})}jQuery("div[class*='block-views-blockbusiness-risk-block-'].active_tab_content").css({visibility:"hidden"}),jQuery(".cube-wrapper").css({display:"block"}),setTimeout(hideSpinner,500)}}function hideSpinner(){jQuery("div[class*='block-views-blockbusiness-risk-block-'].active_tab_content").css({visibility:"visible"}),jQuery(".cube-wrapper").css({display:"none"})}!function(e,i){"use strict";var t="stickyTableHeaders",s=0,a={fixedOffset:0,leftOffset:0,marginTop:0,objDocument:document,objHead:"head",objWindow:i,scrollableArea:i,cacheHeaderHeight:!1};e.fn[t]=function(o){return this.each(function(){var n=e.data(this,"plugin_"+t);n?"string"==typeof o?n[o].apply(n):n.updateOptions(o):"destroy"!==o&&e.data(this,"plugin_"+t,new function(o,n){var c=this;c.$el=e(o),c.el=o,c.id=s++,c.$el.bind("destroyed",e.proxy(c.teardown,c)),c.$clonedHeader=null,c.$originalHeader=null,c.cachedHeaderHeight=null,c.isSticky=!1,c.hasBeenSticky=!1,c.leftOffset=null,c.topOffset=null,c.init=function(){c.setOptions(n),c.$el.each(function(){var i=e(this);i.css("padding",0),c.$originalHeader=e("thead:first",this),c.$clonedHeader=c.$originalHeader.clone(),i.trigger("clonedHeader."+t,[c.$clonedHeader]),c.$clonedHeader.addClass("tableFloatingHeader"),c.$clonedHeader.css({display:"none",opacity:0}),c.$originalHeader.addClass("tableFloatingHeaderOriginal"),c.$originalHeader.after(c.$clonedHeader),c.$printStyle=e('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'),c.$head.append(c.$printStyle)}),c.updateWidth(),c.toggleHeaders(),c.bind()},c.destroy=function(){c.$el.unbind("destroyed",c.teardown),c.teardown()},c.teardown=function(){c.isSticky&&c.$originalHeader.css("position","static"),e.removeData(c.el,"plugin_"+t),c.unbind(),c.$clonedHeader.remove(),c.$originalHeader.removeClass("tableFloatingHeaderOriginal"),c.$originalHeader.css("visibility","visible"),c.$printStyle.remove(),c.el=null,c.$el=null},c.bind=function(){c.$scrollableArea.on("scroll."+t,c.toggleHeaders),c.isWindowScrolling||(c.$window.on("scroll."+t+c.id,c.setPositionValues),c.$window.on("resize."+t+c.id,c.toggleHeaders)),c.$scrollableArea.on("resize."+t,c.toggleHeaders),c.$scrollableArea.on("resize."+t,c.updateWidth)},c.unbind=function(){c.$scrollableArea.off("."+t,c.toggleHeaders),c.isWindowScrolling||(c.$window.off("."+t+c.id,c.setPositionValues),c.$window.off("."+t+c.id,c.toggleHeaders)),c.$scrollableArea.off("."+t,c.updateWidth)},c.debounce=function(e,i){var t=null;return function(){var s=this,a=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(s,a)},i)}},c.toggleHeaders=c.debounce(function(){c.$el&&c.$el.each(function(){var i,s=e(this),a=c.isWindowScrolling?isNaN(c.options.fixedOffset)?c.options.fixedOffset.outerHeight():c.options.fixedOffset:c.$scrollableArea.offset().top+(isNaN(c.options.fixedOffset)?0:c.options.fixedOffset),o=s.offset(),n=c.$scrollableArea.scrollTop()+a,r=c.$scrollableArea.scrollLeft(),l=c.options.cacheHeaderHeight?c.cachedHeaderHeight:c.$clonedHeader.height(),d=c.isWindowScrolling?n>o.top:a>o.top,p=(c.isWindowScrolling?n:0)<o.top+s.height()-l-(c.isWindowScrolling?0:a);d&&p?(i=o.left-r+c.options.leftOffset,c.$originalHeader.css({position:"fixed","margin-top":c.options.marginTop,left:i,"z-index":3}),c.leftOffset=i,c.topOffset=a,c.$clonedHeader.css("display",""),c.isSticky||(c.isSticky=!0,c.updateWidth(),s.trigger("enabledStickiness."+t)),c.setPositionValues()):c.isSticky&&(c.$originalHeader.css("position","static"),c.$clonedHeader.css("display","none"),c.isSticky=!1,c.resetWidth(e("td,th",c.$clonedHeader),e("td,th",c.$originalHeader)),s.trigger("disabledStickiness."+t))})},0),c.setPositionValues=c.debounce(function(){var e=c.$window.scrollTop(),i=c.$window.scrollLeft();!c.isSticky||0>e||e+c.$window.height()>c.$document.height()||0>i||i+c.$window.width()>c.$document.width()||c.$originalHeader.css({top:c.topOffset-(c.isWindowScrolling?0:e),left:c.leftOffset-(c.isWindowScrolling?0:i)})},0),c.updateWidth=c.debounce(function(){if(c.isSticky){c.$originalHeaderCells||(c.$originalHeaderCells=e("th,td",c.$originalHeader)),c.$clonedHeaderCells||(c.$clonedHeaderCells=e("th,td",c.$clonedHeader));var i=c.getWidth(c.$clonedHeaderCells);c.setWidth(i,c.$clonedHeaderCells,c.$originalHeaderCells),c.$originalHeader.css("width",c.$clonedHeader.width()),c.options.cacheHeaderHeight&&(c.cachedHeaderHeight=c.$clonedHeader.height())}},0),c.getWidth=function(t){var s=[];return t.each(function(t){var a,o=e(this);if("border-box"===o.css("box-sizing")){var n=o[0].getBoundingClientRect();a=n.width?n.width:n.right-n.left}else if("collapse"===e("th",c.$originalHeader).css("border-collapse"))if(i.getComputedStyle)a=parseFloat(i.getComputedStyle(this,null).width);else{var r=parseFloat(o.css("padding-left")),l=parseFloat(o.css("padding-right")),d=parseFloat(o.css("border-width"));a=o.outerWidth()-r-l-d}else a=o.width();s[t]=a}),s},c.setWidth=function(e,i,t){i.each(function(i){var s=e[i];t.eq(i).css({"min-width":s,"max-width":s})})},c.resetWidth=function(i,t){i.each(function(i){var s=e(this);t.eq(i).css({"min-width":s.css("min-width"),"max-width":s.css("max-width")})})},c.setOptions=function(i){c.options=e.extend({},a,i),c.$window=e(c.options.objWindow),c.$head=e(c.options.objHead),c.$document=e(c.options.objDocument),c.$scrollableArea=e(c.options.scrollableArea),c.isWindowScrolling=c.$scrollableArea[0]===c.$window[0]},c.updateOptions=function(e){c.setOptions(e),c.unbind(),c.bind(),c.updateWidth(),c.toggleHeaders()},c.init()}(this,o))})}}(jQuery,window),function(e,i,t){"use strict";i.behaviors.defaultTbf={attach:function(i,t){function s(){e(".c-mobile-toggle").is(":visible")?e("body").addClass("mobile-display").removeClass("desktop-display"):e("body").removeClass("mobile-display").addClass("desktop-display")}if(e("table").once("tbf-default").stickyTableHeaders({fixedOffset:e(".c-page-head")}),e('.smoothscroll[href^="#"]').once("tbf-default").on("click",function(i){i.preventDefault(),e(document).smoothscroll(this.hash,!1)}),setTimeout(e(".c-page-foot__menu--item:nth-child(3) a").once("tbf-default").click(function(e){return Optanon.ToggleInfoDisplay(),!1}),3e3),e(".c-page-head__form").once("tbf-default").addClass("is-collapsed"),e(document).once("tbf-default").on("click",".c-page-head__nav--inline input[type=submit]",function(i){i.preventDefault(),i.stopPropagation(),0!==e(".c-page-head__form .form-search").val().length?e(".c-page-head__form").submit():(e(".c-page-head__form").toggleClass("is-expanded").toggleClass("is-collapsed"),e(".c-page-head__form").hasClass("is-expanded")?e(".c-page-head__form .form-search").delay(500).focus():e(document).blur())}),e(document).on("click",".is-expanded input[type=text]",function(e){e.stopPropagation()}),e(document).on("click",function(i){e(".c-page-head__form").hasClass("is-expanded")&&(e(".c-page-head__form").removeClass("is-expanded").addClass("is-collapsed"),e(".c-page-head__form input[type=text]").val(""))}),e(".c-page-head__small-search-button").once("tbf-default").on("click",function(i){e(".c-mobile-search").toggleClass("is-expanded")}),e(".c-primary-nav").once("tbf-default").tbfMobileMenu(),e(".j-match").once("tbf-default").matchHeight({byRow:!0,property:"height",target:null,remove:!1}),e(window).scroll(function(){e("body").hasClass("splash-active")||(e(this).scrollTop()>55&&!e(".c-page-head").hasClass("is-fixed")?e(".c-page-head").addClass("is-fixed"):e(this).scrollTop()<=56&&e(".c-page-head").removeClass("is-fixed"))}),e(".c-form").once("tbf-default",function(){e(".c-form").length>0&&e(".c-form",i).parsley({errorsWrapper:'<ul class="c-form__field_errors"></ul>'})}),e(".alert-box .close").once("tbf-default").on("click",function(i){i.preventDefault(),e(this).closest(".alert-box").slideUp()}),e(".c-featured-pane img").once("tbf-default").each(function(){var i=e(this).prop("src");e(this).parent().css("background-image","url("+i+")")}),e(".c-featured-pane").once("tbf-default").each(function(){var i=e(this).find(".c-featured-pane__link-custom");""==i.attr("href")&&i.hide()}),e(".teaser-list li, .teaser-list--land li").once("tbf-default").each(function(){var i="",t="",s=e(this).find("img")[0].outerHTML,a=e(this).find("h5").html(),o=e(this).find(".home-featured__link").attr("href"),n=e(this).find(".home-featured__link-custom").attr("href");""==n?(i="<div class='c-image-wrap'><a href='"+o+"></a>"+s+"</div>",t="<h5><a href='"+o+"'>"+a+"</a></h5>"):(i="<div class='c-image-wrap'><a href='"+n+"'>"+s+"</a></div>",t="<h5><a href='"+n+"'>"+a+"</a></h5>"),e(this).prepend(i),e(this).find("h5").html(t)}),e(".view-mode-taxonomy_term_icon_list").once("tbf-default").each(function(){var i=e(this).find(".field--name-field-icon img").prop("src"),t=e(this).find(".field--name-field-icon-rollover img").prop("src"),s=e(this).find(".field--name-taxonomy-term-title h2").text(),a=e(this).find(".field--name-field-short-description").text(),o=e(this).find(".field--name-taxonomy-term-link a").prop("href"),n="<div class='c-risk-icon' data-img='"+i+"' data-imgroll='"+t+"' style='background-image: url("+i+")'><a class='c-risk-icon__link' href='"+o+"'><div class='c-tooltip'><h2>"+s+"</h2><p>"+a+"</p><a href='"+o+"'>Read More</a></div></a></div>";e(this).html(n).show()}),e(".c-risk-icon").once("tbf-default").hover(function(){var i="url("+e(this).data("imgroll")+")";e(this).css("backgroundImage",i)},function(){var i="url("+e(this).data("img")+")";e(this).css("backgroundImage",i)}),e(".c-media-widget__slider > div.c-slider-for").once("tbf-default").on("afterChange",function(i,t,s){e(".slick-slide .o-video > iframe").each(function(){e(this)[0].contentWindow.postMessage('{"event":"command", "func":"stopVideo", "args":""}',"*")})}).slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,asNavFor:".c-slider-nav"}),e(".c-media-widget__slider > nav.c-slider-nav").slick({slidesToShow:3,slidesToScroll:3,arrows:!0,asNavFor:".c-slider-for",dots:!1,centerMode:!0,focusOnSelect:!0,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".c-media-widget__slider > div.c-slider--nonav").once("tbf-default").on("afterChange",function(i,t,s){e(".slick-slide .o-video > iframe").each(function(){e(this)[0].contentWindow.postMessage('{"event":"command", "func":"stopVideo", "args":""}',"*")})}).slick({centerMode:!0,slidesToShow:1,slidesToScroll:1,centerPadding:"20%",arrows:!0,fade:!1,focusOnSelect:!0,infinite:!0,responsive:[{breakpoint:480,settings:{centerPadding:"10%",slidesToShow:1,slidesToScroll:1}}]}),e(".block-views-blocktwitter-block-block-1 .view-content ul").once("tbf-default").slick({adaptiveHeight:!0}),e(".c-cta-widget .view-content ul").once("tbf-default").slick({adaptiveHeight:!0}),e(".view-iran-matrix-view-main.view-display-id-block_2")[0]&&!e(".view-iran-matrix-view-main.view-display-id-block_2 .view-content")[0]&&e(".view-iran-matrix-view-main.view-display-id-block_2").once("tbf-default").parent().parent().parent().parent().hide(),e(".c-card__wrap").once("tbf-default").each(function(){e(this).prop("ontouchstart",'this.classList.toggle("hover")');var i=e(this).find(".c-card__link a").prop("href");e(this).find(".c-card__back").append('<a href="'+i+'" class="c-card__big-link"></a>')}),s(),e(window).resize(function(){s()}),e(".c-primary-nav__link").once("tbf-default").click(function(){e(".mobile-display").find(".c-drop_nav__mobile").removeClass("active"),setTimeout(function(){e("body").hasClass("mobile-display")&&e(document).smoothscroll(e(".c-primary-nav__link.is-up"),500)},40)}),e(document).on("mouseover",".c-drop-nav__link[data-show-block^=block]",function(){if(e("body").hasClass("desktop-display")){var i=e(this).attr("data-show-block");e(".c-drop-nav__block").removeClass("active opacity"),e(".c-drop-nav__link").removeClass("active"),e(this).addClass("active"),e(".c-drop-nav__block[data-show-block=t"+i+"]").addClass("active"),setTimeout(function(){e(".c-drop-nav__block[data-show-block=t"+i+"]").addClass("opacity")},1),e(".desktop-display .c-drop-nav__link").hasClass("active")&&e(".desktop-display .c-drop-nav__wrap").addClass("active"),e(".c-drop-nav__block[data-show-block=tblock05]").hasClass("active")&&e(".c-drop-nav__wrap--pass").addClass("active")}}),e(document).on("click",".c-drop-nav__link[data-show-block^=block]",function(){e("body").hasClass("desktop-display")||(e(".c-drop_nav__mobile").removeClass("active"),e(this).parent().find(".c-drop_nav__mobile").addClass("active"))}),e(".desktop-display .c-primary-nav__item").once("tbf-default").hover(function(){e(".desktop-display .c-drop-nav__wrap").removeClass("active"),e(".desktop-display .c-drop-nav__wrap--pass").removeClass("active"),e(".desktop-display .c-drop-nav__block").removeClass("active opacity"),e(".desktop-display .c-drop-nav__link").removeClass("active")},function(){}),e(".desktop-display .c-drop-nav--second .c-drop-nav__link:not(.active)").once("tbf-default").hover(function(){e(".desktop-display .c-drop-nav__wrap").removeClass("active"),e(".desktop-display .c-drop-nav__wrap--pass").removeClass("active"),e(".desktop-display .c-drop-nav__block").removeClass("active opacity"),e(".desktop-display .c-drop-nav__link").removeClass("active")},function(){}),e(".desktop-display .c-primary-nav__link + .c-drop-nav__wrap").once("tbf-default").hover(function(){},function(){e(".desktop-display .c-drop-nav__wrap").removeClass("active"),e(".desktop-display .c-drop-nav__block").removeClass("active opacity"),e(".desktop-display .c-drop-nav__wrap--pass").removeClass("active")}),"/iran-risk-snapshot"==window.location.pathname){var a,o;navigator.userAgent.match(/Trident.*rv\:11\./)&&e("body").addClass("ie-11"),e(document).width()<=640?(a="mobile",o=0):(a="desktop",o=0);var n=e(".block-views-blockbusiness-risk-categories-tabs-tabs").find("div.view-content div.views-row"),c=e("div.block-region-top div[class*='block-views-blockbusiness-risk-block-']");c.first().addClass("active_tab_content"),n.first().addClass("active"),n.on("click",function(i){var t=e(this).index();n.eq(t).hasClass("active")||(n.removeClass("active"),c.hide(o).removeClass("active_tab_content"),n.eq(t).addClass("active"),c.eq(t).show(o).addClass("active_tab_content"),setIbrCharts(a,o))}),setTimeout(setIbrCharts(a,o),1e3),"mobile"==a?e(".view-business-risk .view-content .views-row").each(function(i){var t=e(this).find(".chart .bottom .title");e(this).find(".chart .bottom .title").remove(),e(this).prepend(t)}):"desktop"==a&&e(".view-business-risk .view-content .views-row").each(function(i){var t=e(this).find(".chart_lightbox[data-nid]");e(this).find(".chart_lightbox[data-nid]").remove(),e(this).parent().parent().parent().prepend(t)})}}},e.fn.smoothscroll=function(i,s){var a=e(window),o=0;o=216,t.user.uid>0&&(o+=78),s||(s=1e3),a.width()<640&&(o=0),e("html,body").animate({scrollTop:e(i).offset().top-o},s)},e.fn.center=function(){var i=e(".view-business-risk-categories-tabs").offset(),t=e(".view-business-risk-categories-tabs").outerHeight(!0);return this.each(function(){var s=i.top+t+10,a=(e(window).width()-e(this).outerWidth())/2;e(this).offset({top:s,left:a})})};var s=e.fn.attr;e.fn.attr=function(){var e,i,t,a;if(this[0]&&0===arguments.length){for(a={},i=(t=this[0].attributes).length,e=0;e<i;e++)a[t[e].name.toLowerCase()]=t[e].value;return a}return s.apply(this,arguments)},e(".c-subnav__link").each(function(){e(this).attr("href")===window.location.pathname&&e(this).addClass("is-active")})}(jQuery,Drupal,drupalSettings);;
/* Chosen v1.8.2 | (c) 2011-2017 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */

(function(){var t,e,s,i,n=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function s(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype,t},o={}.hasOwnProperty;(i=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,n,r,o;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:t.label,title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),o=[],s=0,i=(r=t.childNodes).length;s<i;s++)n=r[s],o.push(this.add_option(n,e,t.disabled));return o},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t}()).select_to_array=function(t){var e,s,n,r,o;for(r=new i,s=0,n=(o=t.childNodes).length;s<n;s++)e=o[s],r.add_node(e);return r.parsed},e=function(){function t(e,s){this.form_field=e,this.options=null!=s?s:{},this.label_click_handler=n(this.label_click_handler,this),t.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return t.prototype.set_default_values=function(){return this.click_test_action=function(t){return function(e){return t.test_active_click(e)}}(this),this.activate_action=function(t){return function(e){return t.activate_field(e)}}(this),this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||Infinity,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},t.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||t.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||t.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||t.default_no_result_text},t.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+t.group_label+"</b>"+t.html:t.html},t.prototype.mouse_enter=function(){return this.mouse_on_container=!0},t.prototype.mouse_leave=function(){return this.mouse_on_container=!1},t.prototype.input_focus=function(t){if(this.is_multiple){if(!this.active_field)return setTimeout(function(t){return function(){return t.container_mousedown()}}(this),50)}else if(!this.active_field)return this.activate_field()},t.prototype.input_blur=function(t){if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(t){return function(){return t.blur_test()}}(this),100)},t.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},t.prototype.results_option_build=function(t){var e,s,i,n,r,o,h;for(e="",h=0,n=0,r=(o=this.results_data).length;n<r&&(s=o[n],i="",""!==(i=s.group?this.result_add_group(s):this.result_add_option(s))&&(h++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(h>=this.max_shown_results));n++);return e},t.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.style.cssText=t.style,s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.highlighted_html||t.html,t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&t.active_options>0?((e=[]).push("group-result"),t.classes&&e.push(t.classes),s=document.createElement("li"),s.className=e.join(" "),s.innerHTML=t.highlighted_html||this.escape_html(t.label),t.title&&(s.title=t.title),this.outerHTML(s)):""},t.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},t.prototype.reset_single_select_options=function(){var t,e,s,i,n;for(n=[],t=0,e=(s=this.results_data).length;t<e;t++)(i=s[t]).selected?n.push(i.selected=!1):n.push(void 0);return n},t.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},t.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},t.prototype.winnow_results=function(){var t,e,s,i,n,r,o,h,l,c,_,a,u,d,p;for(this.no_results_clear(),c=0,t=(o=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),l=this.get_search_regex(t),s=0,i=(h=this.results_data).length;s<i;s++)(n=h[s]).search_match=!1,_=null,a=null,n.highlighted_html="",this.include_option_in_results(n)&&(n.group&&(n.group_match=!1,n.active_options=0),null!=n.group_array_index&&this.results_data[n.group_array_index]&&(0===(_=this.results_data[n.group_array_index]).active_options&&_.search_match&&(c+=1),_.active_options+=1),p=n.group?n.label:n.text,n.group&&!this.group_search||(a=this.search_string_match(p,l),n.search_match=null!=a,n.search_match&&!n.group&&(c+=1),n.search_match?(o.length&&(u=a.index,r=p.slice(0,u),e=p.slice(u,u+o.length),d=p.slice(u+o.length),n.highlighted_html=this.escape_html(r)+"<em>"+this.escape_html(e)+"</em>"+this.escape_html(d)),null!=_&&(_.group_match=!0)):null!=n.group_array_index&&this.results_data[n.group_array_index].search_match&&(n.search_match=!0)));return this.result_clear_highlight(),c<1&&o.length?(this.update_results_content(""),this.no_results(o)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},t.prototype.get_search_regex=function(t){var e,s;return s=this.search_contains?t:"(^|\\s|\\b)"+t+"[^\\s]*",this.enable_split_word_search||this.search_contains||(s="^"+s),e=this.case_sensitive_search?"":"i",new RegExp(s,e)},t.prototype.search_string_match=function(t,e){var s;return s=e.exec(t),!this.search_contains&&(null!=s?s[1]:void 0)&&(s.index+=1),s},t.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,t=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},t.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},t.prototype.keydown_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),8!==s&&this.pending_backstroke&&this.clear_backstroke(),s){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},t.prototype.keyup_checker=function(t){var e,s;switch(s=null!=(e=t.which)?e:t.keyCode,this.search_field_scale(),s){case 8:this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},t.prototype.clipboard_event_checker=function(t){if(!this.is_disabled)return setTimeout(function(t){return function(){return t.results_search()}}(this),50)},t.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},t.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},t.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},t.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},t.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},t.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement("div")).appendChild(t),e.innerHTML)},t.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},t.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+this.escape_html(t)+"</span>\n</li>"},t.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},t.default_multiple_text="Select Some Options",t.default_single_text="Select an Option",t.default_no_result_text="No results match",t}(),(t=jQuery).fn.extend({chosen:function(i){return e.browser_is_supported()?this.each(function(e){var n,r;r=(n=t(this)).data("chosen"),"destroy"!==i?r instanceof s||n.data("chosen",new s(this,i)):r instanceof s&&r.destroy()}):this}}),s=function(s){function n(){return n.__super__.constructor.apply(this,arguments)}return r(n,e),n.prototype.setup=function(){return this.form_field_jq=t(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},n.prototype.set_up_html=function(){var e,s;return(e=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&e.push(this.form_field.className),this.is_rtl&&e.push("chosen-rtl"),s={"class":e.join(" "),title:this.form_field.title},this.form_field.id.length&&(s.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=t("<div />",s),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},n.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},n.prototype.register_observers=function(){return this.container.on("touchstart.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("touchend.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mousedown.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.container.on("mouseup.chosen",function(t){return function(e){t.container_mouseup(e)}}(this)),this.container.on("mouseenter.chosen",function(t){return function(e){t.mouse_enter(e)}}(this)),this.container.on("mouseleave.chosen",function(t){return function(e){t.mouse_leave(e)}}(this)),this.search_results.on("mouseup.chosen",function(t){return function(e){t.search_results_mouseup(e)}}(this)),this.search_results.on("mouseover.chosen",function(t){return function(e){t.search_results_mouseover(e)}}(this)),this.search_results.on("mouseout.chosen",function(t){return function(e){t.search_results_mouseout(e)}}(this)),this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen",function(t){return function(e){t.search_results_mousewheel(e)}}(this)),this.search_results.on("touchstart.chosen",function(t){return function(e){t.search_results_touchstart(e)}}(this)),this.search_results.on("touchmove.chosen",function(t){return function(e){t.search_results_touchmove(e)}}(this)),this.search_results.on("touchend.chosen",function(t){return function(e){t.search_results_touchend(e)}}(this)),this.form_field_jq.on("chosen:updated.chosen",function(t){return function(e){t.results_update_field(e)}}(this)),this.form_field_jq.on("chosen:activate.chosen",function(t){return function(e){t.activate_field(e)}}(this)),this.form_field_jq.on("chosen:open.chosen",function(t){return function(e){t.container_mousedown(e)}}(this)),this.form_field_jq.on("chosen:close.chosen",function(t){return function(e){t.close_field(e)}}(this)),this.search_field.on("blur.chosen",function(t){return function(e){t.input_blur(e)}}(this)),this.search_field.on("keyup.chosen",function(t){return function(e){t.keyup_checker(e)}}(this)),this.search_field.on("keydown.chosen",function(t){return function(e){t.keydown_checker(e)}}(this)),this.search_field.on("focus.chosen",function(t){return function(e){t.input_focus(e)}}(this)),this.search_field.on("cut.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.search_field.on("paste.chosen",function(t){return function(e){t.clipboard_event_checker(e)}}(this)),this.is_multiple?this.search_choices.on("click.chosen",function(t){return function(e){t.choices_click(e)}}(this)):this.container.on("click.chosen",function(t){t.preventDefault()})},n.prototype.destroy=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.form_field_label.length>0&&this.form_field_label.off("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},n.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.off("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.on("focus.chosen",this.activate_field)},n.prototype.container_mousedown=function(e){var s;if(!this.is_disabled)return!e||"mousedown"!==(s=e.type)&&"touchstart"!==s||this.results_showing||e.preventDefault(),null!=e&&t(e.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!e||t(e.target)[0]!==this.selected_item[0]&&!t(e.target).parents("a.chosen-single").length||(e.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),t(this.container[0].ownerDocument).on("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},n.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},n.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},n.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},n.prototype.close_field=function(){return t(this.container[0].ownerDocument).off("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},n.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},n.prototype.test_active_click=function(e){var s;return(s=t(e.target).closest(".chosen-container")).length&&this.container[0]===s[0]?this.active_field=!0:this.close_field()},n.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=i.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},n.prototype.result_do_highlight=function(t){var e,s,i,n,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),i=parseInt(this.search_results.css("maxHeight"),10),r=this.search_results.scrollTop(),n=i+r,s=this.result_highlight.position().top+this.search_results.scrollTop(),(e=s+this.result_highlight.outerHeight())>=n)return this.search_results.scrollTop(e-i>0?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},n.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},n.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},n.prototype.update_results_content=function(t){return this.search_results.html(t)},n.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},n.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},n.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=t("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0)return this.form_field_label.on("click.chosen",this.label_click_handler)},n.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},n.prototype.search_results_mouseup=function(e){var s;if((s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first()).length)return this.result_highlight=s,this.result_select(e),this.search_field.focus()},n.prototype.search_results_mouseover=function(e){var s;if(s=t(e.target).hasClass("active-result")?t(e.target):t(e.target).parents(".active-result").first())return this.result_do_highlight(s)},n.prototype.search_results_mouseout=function(e){if(t(e.target).hasClass("active-result")||t(e.target).parents(".active-result").first())return this.result_clear_highlight()},n.prototype.choice_build=function(e){var s,i;return s=t("<li />",{"class":"search-choice"}).html("<span>"+this.choice_label(e)+"</span>"),e.disabled?s.addClass("search-choice-disabled"):((i=t("<a />",{"class":"search-choice-close","data-option-array-index":e.array_index})).on("click.chosen",function(t){return function(e){return t.choice_destroy_link_click(e)}}(this)),s.append(i)),this.search_container.before(s)},n.prototype.choice_destroy_link_click=function(e){if(e.preventDefault(),e.stopPropagation(),!this.is_disabled)return this.choice_destroy(t(e.target))},n.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},n.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},n.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},n.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),s=this.results_data[e[0].getAttribute("data-option-array-index")],s.selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.search_field.val(""),this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)?this.winnow_results():(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},n.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},n.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},n.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},n.prototype.get_search_field_value=function(){return this.search_field.val()},n.prototype.get_search_text=function(){return t.trim(this.get_search_field_value())},n.prototype.escape_html=function(e){return t("<div/>").text(e).html()},n.prototype.winnow_results_set_highlight=function(){var t,e;if(e=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),null!=(t=e.length?e.first():this.search_results.find(".active-result").first()))return this.result_do_highlight(t)},n.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},n.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},n.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},n.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},n.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},n.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},n.prototype.search_field_scale=function(){var e,s,i,n,r,o,h;if(this.is_multiple){for(r={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},s=0,i=(o=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;s<i;s++)r[n=o[s]]=this.search_field.css(n);return(e=t("<div />").css(r)).text(this.get_search_field_value()),t("body").append(e),h=e.width()+25,e.remove(),this.container.is(":visible")&&(h=Math.min(this.container.outerWidth()-10,h)),this.search_field.width(h)}},n.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},n}()}).call(this);;
/**
 * @file
 * Attaches behaviors for the Chosen module.
 */

(function($, Drupal, drupalSettings) {
  'use strict';

  // Temporal workaround while  https://github.com/harvesthq/chosen/issues/515
  // is fixed. This fix was taken from:
  // https://github.com/harvesthq/chosen/issues/515#issuecomment-104602031
  $.fn.oldChosen = $.fn.chosen;
  $.fn.chosen = function(options) {
    var select = $(this)
      , is_creating_chosen = !!options;

    if (is_creating_chosen && select.css('position') === 'absolute') {
      // if we are creating a chosen and the select already has the appropriate styles added
      // we remove those (so that the select hasn't got a crazy width), then create the chosen
      // then we re-add them later
      select.removeAttr('style');
    }

    var ret = select.oldChosen(options);

    // only act if the select has display: none, otherwise chosen is unsupported (iPhone, etc)
    if (is_creating_chosen && select.css('display') === 'none') {
      // https://github.com/harvesthq/chosen/issues/515#issuecomment-33214050
      // only do this if we are initializing chosen (no params, or object params) not calling a method
      select.attr('style','display:visible; position:absolute; width:0px; height: 0px; clip:rect(0,0,0,0)');
      select.attr('tabindex', -1);
    }
    return ret;
  };

  // Update Chosen elements when state has changed.
  $(document).on('state:disabled', 'select', function (e) {
    $(e.target).trigger('chosen:updated');
  });

  Drupal.behaviors.chosen = {

    settings: {

      /**
       * Completely ignores elements that match one of these selectors.
       *
       * Disabled on:
       * - Field UI
       * - WYSIWYG elements
       * - Tabledrag weights
       * - Elements that have opted-out of Chosen
       * - Elements already processed by Chosen.
       *
       * @type {string}
       */
      ignoreSelector: '#field-ui-field-storage-add-form select, #entity-form-display-edit-form select, #entity-view-display-edit-form select, .wysiwyg, .draggable select[name$="[weight]"], .draggable select[name$="[position]"], .locale-translate-filter-form select, .chosen-disable, .chosen-processed',

      /**
       * Explicit "opt-in" selector.
       *
       * @type {string}
       */
      optedInSelector: 'select.chosen-enable',

      /**
       * The default selector, overridden by drupalSettings.
       *
       * @type {string}
       */
      selector: 'select:visible'
    },

    /**
     * Drupal attach behavior.
     */
    attach: function(context, settings) {
      this.settings = this.getSettings(settings);
      this.getElements(context).once('chosen').each(function (i, element) {
        this.createChosen(element);
      }.bind(this));
    },

    /**
     * Creates a Chosen instance for a specific element.
     *
     * @param {jQuery|HTMLElement} element
     *   The element.
     */
    createChosen: function(element) {
      var $element = $(element);
      $element.chosen(this.getElementOptions($element));
    },

    /**
     * Filter out elements that should not be converted into Chosen.
     *
     * @param {jQuery|HTMLElement} element
     *   The element.
     *
     * @return {boolean}
     *   TRUE if the element should stay, FALSE otherwise.
     */
    filterElements: function (element) {
      var $element = $(element);

      // Remove elements that should be ignored completely.
      if ($element.is(this.settings.ignoreSelector)) {
        return false;
      }

      // Zero value means no minimum.
      var minOptions = $element.attr('multiple') ? this.settings.minimum_multiple : this.settings.minimum_single;
      return !minOptions || $element.find('option').length >= minOptions;
    },

    /**
     * Retrieves the elements that should be converted into Chosen instances.
     *
     * @param {jQuery|Element} context
     *   A DOM Element, Document, or jQuery object to use as context.
     * @param {string} [selector]
     *   A selector to use, defaults to the default selector in the settings.
     */
    getElements: function (context, selector) {
      var $context = $(context || document);
      var $elements = $context.find(selector || this.settings.selector);

      // Remove elements that should not be converted into Chosen.
      $elements = $elements.filter(function(i, element) {
        return this.filterElements(element);
      }.bind(this));

      // Add elements that have explicitly opted in to Chosen.
      $elements = $elements.add($context.find(this.settings.optedInSelector));

      return $elements;
    },

    /**
     * Retrieves options used to create a Chosen instance based on an element.
     *
     * @param {jQuery|HTMLElement} element
     *   The element to process.
     *
     * @return {Object}
     *   The options object used to instantiate a Chosen instance with.
     */
    getElementOptions: function (element) {
      var $element = $(element);
      var options = $.extend({}, this.settings.options);

      // The width default option is considered the minimum width, so this
      // must be evaluated for every option.
      if (this.settings.minimum_width > 0) {
        var dimension = this.settings.use_relative_width ? '%' : 'px';

        if ($element.width() < this.settings.minimum_width) {
          options.width = this.settings.minimum_width + dimension;
        }
        else {
          options.width = $element.width() + dimension;
        }
      }

      // Some field widgets have cardinality, so we must respect that.
      // @see chosen_pre_render_select()
      var cardinality;
      if ($element.attr('multiple') && (cardinality = $element.data('cardinality'))) {
        options.max_selected_options = cardinality;
      }

      return options;
    },

    /**
     * Retrieves the settings passed from Drupal.
     *
     * @param {Object} [settings]
     *   Passed Drupal settings object, if any.
     */
    getSettings: function (settings) {
      return $.extend(true, {}, this.settings, settings && settings.chosen || drupalSettings.chosen);
    }

};

})(jQuery, Drupal, drupalSettings);
;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));;
(function ($) {
  "use strict";
  Drupal.behaviors.fancyboxTbf = {
    attach: function() {
      var selector = 'a.fancybox';
      $(selector).fancybox({
        width: 900,
        autoDimensions: false,
        autoSize: false
      });
    }
  }
}(jQuery));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  $(document).ready(function () {
    $.ajax({
      type: 'POST',
      cache: false,
      url: drupalSettings.statistics.url,
      data: drupalSettings.statistics.data
    });
  });
})(jQuery, Drupal, drupalSettings);;
