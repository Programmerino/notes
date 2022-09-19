!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.quicklink=n()}(this,function(){var e={};function n(e){return new Promise(function(n,t){var r=new XMLHttpRequest;r.open("GET",e,r.withCredentials=!0),r.onload=function(){200===r.status?n():t()},r.send()})}var t,r,i=(t="prefetch",((r=document.createElement("link")).relList||{}).supports&&r.relList.supports(t)?function(e){return new Promise(function(n,t){var r=document.createElement("link");r.rel="prefetch",r.href=e,r.onload=n,r.onerror=t,document.head.appendChild(r)})}:n);function o(t,r,o){if(!(e[t]||(o=navigator.connection)&&((o.effectiveType||"").includes("2g")||o.saveData)))return(r?function(e){return null==self.fetch?n(e):fetch(e,{credentials:"include"})}:i)(t).then(function(){e[t]=!0})}var u=u||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},c=new Set,f=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target.href;c.has(n)&&a(n)}})});function a(e){c.delete(e),o(new URL(e,location.href).toString(),f.priority)}return function(e){e=Object.assign({timeout:2e3,priority:!1,timeoutFn:u,el:document},e),f.priority=e.priority;var n=e.origins||[location.hostname],t=e.ignores||[];e.timeoutFn(function(){e.urls?e.urls.forEach(a):Array.from(e.el.querySelectorAll("a"),function(e){f.observe(e),n.length&&!n.includes(e.hostname)||function e(n,t){return Array.isArray(t)?t.some(function(t){return e(n,t)}):(t.test||t).call(t,n.href,n)}(e,t)||c.add(e.href)})},{timeout:e.timeout})}});
;
(function () {

  'use strict';

  Drupal.behaviors.quicklink = {
    attach: function attachQuicklink(context, settings) {
      var debug = settings.quicklink.debug;

      function hydrateQuicklinkConfig() {
        settings.quicklink.quicklinkConfig = settings.quicklink.quicklinkConfig || {};
        settings.quicklink.ignoredSelectorsLog = settings.quicklink.ignoredSelectorsLog || [];

        var quicklinkConfig = settings.quicklink.quicklinkConfig;

        quicklinkConfig.ignores = [];

        // Loop through all the patters to ignore, and generate rules to ignore URL patterns.
        for (var i = 0; i < settings.quicklink.url_patterns_to_ignore.length; i++) {
          var pattern = settings.quicklink.url_patterns_to_ignore[i];

          (function (i, pattern) {
            if (pattern.length) {
              quicklinkConfig.ignores.push(function (uri, elem) {
                var ruleName = 'Pattern found in href. See ignored selectors log.';
                var ruleFunc = uri.includes(pattern);

                outputDebugInfo(ruleFunc, ruleName, uri, elem, pattern);

                return ruleFunc;
              });
            }
          })(i, pattern);
        }

        if (settings.quicklink.ignore_admin_paths) {
          var adminLinkContainerPatterns = settings.quicklink.admin_link_container_patterns.join();

          quicklinkConfig.ignores.push(function (uri, elem) {
            var ruleName = 'Exists in admin element container.';
            var ruleFunc = elem.matches(adminLinkContainerPatterns);

            outputDebugInfo(ruleFunc, ruleName, uri, elem);

            return ruleFunc;
          });
        }

        if (settings.quicklink.ignore_ajax_links) {
          quicklinkConfig.ignores.push(function (uri, elem) {
            var ruleName = 'Link has "use-ajax" CSS class.';
            var ruleFunc = elem.classList.contains('use-ajax');

            outputDebugInfo(ruleFunc, ruleName, uri, elem);

            return ruleFunc;
          });

          quicklinkConfig.ignores.push(function (uri, elem) {
            var ruleName = 'Link has "/ajax" in url.';
            var ruleFunc = uri.includes('/ajax');

            outputDebugInfo(ruleFunc, ruleName, uri, elem);

            return ruleFunc;
          });
        }

        if (settings.quicklink.ignore_file_ext) {
          quicklinkConfig.ignores.push(function (uri, elem) {
            var ruleName = 'Contains file extension at end of href.';
            var ruleFunc = uri.match(/(\.[^\/]{1,5}\?)|(\.[^\/]{1,5}$)/);

            outputDebugInfo(ruleFunc, ruleName, uri, elem);

            return ruleFunc;
          });
        }

        quicklinkConfig.ignores.push(function (uri, elem) {
          var ruleName = 'Contains noprefetch attribute.';
          var ruleFunc = elem.hasAttribute('noprefetch');

          outputDebugInfo(ruleFunc, ruleName, uri, elem);

          return ruleFunc;
        });

        quicklinkConfig.ignores.push(function (uri, elem) {
          var ruleName = 'Contains download attribute.';
          var ruleFunc = elem.hasAttribute('download');

          outputDebugInfo(ruleFunc, ruleName, uri, elem);

          return ruleFunc;
        });

        quicklinkConfig.origins = (settings.quicklink.allowed_domains) ? settings.quicklink.allowed_domains : false;
        quicklinkConfig.urls = (settings.quicklink.prefetch_only_paths) ? settings.quicklink.prefetch_only_paths : false;
      }

      function outputDebugInfo(ruleFunc, ruleName, uri, elem, pattern) {
        if (debug && ruleFunc) {
          var debugMessage = ruleName + ' Link ignored.';
          var thisLog = {};
          var urlPattern = pattern || false;

          elem.classList.add('quicklink-ignore');
          elem.textContent += '🚫';
          elem.dataset.quicklinkMatch = debugMessage;

          thisLog.ruleName = ruleName;
          thisLog.uri = uri;
          thisLog.elem = elem;
          thisLog.message = debugMessage;

          if (urlPattern) {
            thisLog.urlPattern = urlPattern;
          }

          (function (thisLog) {
            settings.quicklink.ignoredSelectorsLog.push(thisLog);
          })(thisLog);
        }
      }

      function loadQuicklink() {
        var urlParams = new URLSearchParams(window.location.search);
        var noprefetch = urlParams.get('noprefetch') !== null || window.location.hash === '#noprefetch' ;

        if (noprefetch && debug) {
          // eslint-disable-next-line no-console
          console.info('The "noprefetch" parameter or hash exists in the URL. Quicklink library not loaded.');
        }

        return window.quicklink && !noprefetch;
      }

      if (!settings.quicklink.quicklinkConfig) {
        hydrateQuicklinkConfig();
      }

      settings.quicklink.quicklinkConfig.el = (settings.quicklink.selector) ? context.querySelector(settings.quicklink.selector) : context;

      if (debug) {
        console.info('Quicklink config object', settings.quicklink.quicklinkConfig); // eslint-disable-line no-console
        console.info('Quicklink module debug log', settings.quicklink.debug_log); // eslint-disable-line no-console
        console.info('Quicklink ignored selectors', settings.quicklink.ignoredSelectorsLog); // eslint-disable-line no-console
      }

      if (loadQuicklink()) {
        quicklink(settings.quicklink.quicklinkConfig);
      }
    }
  };
})();
;
/*!
 * clipboard.js v1.4.3
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,i){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return o(n?n:t)},u,u.exports,t,e,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){var i=t("matches-selector");e.exports=function(t,e,n){for(var o=n?t:t.parentNode;o&&o!==document;){if(i(o,e))return o;o=o.parentNode}}},{"matches-selector":2}],2:[function(t,e,n){function i(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),i=0;i<n.length;++i)if(n[i]==t)return!0;return!1}var o=Element.prototype,r=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=i},{}],3:[function(t,e,n){var i=t("closest");n.bind=function(t,e,n,o,r){return t.addEventListener(n,function(n){var r=n.target||n.srcElement;n.delegateTarget=i(r,e,!0,t),n.delegateTarget&&o.call(t,n)},r)},n.unbind=function(t,e,n,i){t.removeEventListener(e,n,i)}},{closest:1}],4:[function(t,e,n){function i(t){var e=window.getSelection();if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.selectionStart=0,t.selectionEnd=t.value.length;else{var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}return e.toString()}e.exports=i},{}],5:[function(t,e,n){function i(){}i.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){o.off(t,i),e.apply(n,arguments)}var o=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;o>i;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;a>r;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},e.exports=i},{}],6:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=t("select"),c=i(a),s=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function t(){var e=this;this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=c.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=c.default(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},r(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function t(){return this._target}}]),t}();n.default=s,e.exports=n.default},{select:4}],7:[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var c=t("./clipboard-action"),s=i(c),l=t("delegate"),u=i(l),f=t("tiny-emitter"),d=i(f),h=function(t){function e(n,i){o(this,e),t.call(this),this.resolveOptions(i),this.delegateClick(n)}return r(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.delegateClick=function t(e){var n=this;this.binding=u.default.bind(document.body,e,"click",function(t){return n.onClick(t)})},e.prototype.undelegateClick=function t(){u.default.unbind(document.body,"click",this.binding)},e.prototype.onClick=function t(e){this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e.delegateTarget),target:this.target(e.delegateTarget),text:this.text(e.delegateTarget),trigger:e.delegateTarget,emitter:this})},e.prototype.defaultAction=function t(e){return a("action",e)},e.prototype.defaultTarget=function t(e){var n=a("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return a("text",e)},e.prototype.destroy=function t(){this.undelegateClick(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(d.default);n.default=h,e.exports=n.default},{"./clipboard-action":6,delegate:3,"tiny-emitter":5}]},{},[7])(7)});;
/**
 * @file
 * Attaches behaviors for the Chosen module.
 */

(function($) {
  Drupal.behaviors.chosen = {
    attach: function(context, settings) {
      settings.chosen = settings.chosen || Drupal.settings.chosen;

      // Prepare selector and add unwantend selectors.
      var selector = settings.chosen.selector;

      // Function to prepare all the options together for the chosen() call.
      var getElementOptions = function (element) {
        var options = $.extend({}, settings.chosen.options);

        // The width default option is considered the minimum width, so this
        // must be evaluated for every option.
        if (settings.chosen.minimum_width > 0) {
          if ($(element).width() < settings.chosen.minimum_width) {
            options.width = settings.chosen.minimum_width + 'px';
          }
          else {
            options.width = $(element).width() + 'px';
          }
        }

        // Some field widgets have cardinality, so we must respect that.
        // @see chosen_pre_render_select()
        if ($(element).attr('multiple') && $(element).data('cardinality')) {
          options.max_selected_options = $(element).data('cardinality');
        }

        return options;
      };

      // Process elements that have opted-in for Chosen.
      // @todo Remove support for the deprecated chosen-widget class.
      $('select.chosen-enable, select.chosen-widget', context).once('chosen', function() {
        options = getElementOptions(this);
        $(this).chosen(options);
      });

      $(selector, context)
        // Disabled on:
        // - Field UI
        // - WYSIWYG elements
        // - Tabledrag weights
        // - Elements that have opted-out of Chosen
        // - Elements already processed by Chosen.
        .not('#field-ui-field-overview-form select, #field-ui-display-overview-form select, .wysiwyg, .draggable select[name$="[weight]"], .draggable select[name$="[position]"], .chosen-disable, .chosen-processed')
        .filter(function() {
          // Filter out select widgets that do not meet the minimum number of
          // options.
          var minOptions = $(this).attr('multiple') ? settings.chosen.minimum_multiple : settings.chosen.minimum_single;
          if (!minOptions) {
            // Zero value means no minimum.
            return true;
          }
          else {
            return $(this).find('option').length >= minOptions;
          }
        })
        .once('chosen', function() {
          options = getElementOptions(this);
          $(this).chosen(options);
        });
    }
  };
})(jQuery);
;
