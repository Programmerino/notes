window.SA.define('SA.AdsConf', [], function() {
  return {
    isUSA: true,
    allowMarketVolKv: true,
    stickyConf: {"sticky_duration":"1200","ads_limit":"17"},
    disabledAds: [["/etfs-and-funds/","1x1"],["/investing-strategy/","1x1"],["/market-outlook/","1x1"],["/dividends/","1x1"],["/news/","640x40"],["/article/","640x40"],["/stock-ideas/","1x1"],["/default/","640x40"],["/account/people/","970x250,970x66,970x90"],["/account/portfolio/","970x250,970x66,970x90"],["/account/portfolio/latest/","970x250,970x66,970x90"],["/etfs-and-funds/etf-screener/","160x600"]],
    adTrafficDrivers: {},
    nonAdTrafficDrivers: {"/news":[{"target_kvs":[{"usa":[true]}],"exclude_kvs":[{"inc":["on-the-move-news-fidelity"],"t":["ipos-news"]}],"html":"<p class=\"now_read bullets_li hide\" id=\"bottom_news_tf_1\">Now read: <b><a href=\"https://seekingalpha.com/market-news/on-the-move?source=td_fidelityotm_nr_topnews\">See all stocks on the move »</a></b></p><style type=\"text/css\">.now_read.bullets_li {  font-size: 16px;  line-height: 24px;  margin-bottom: 12px;  width: 582px;  background: url('/images/bullets/mc_bullet.png') no-repeat 2px 8px;  padding: 0 12px 0 14px;  float: left;}.now_read.bullets_li.hide {  display: none;}</style><script>var random = 1 + Math.floor(Math.random() * 1);document.getElementById('bottom_news_tf_' + random).className = 'now_read bullets_li';</script>","container_id":"bullets_ul_now_read","id":85779,"frequency_cap":3},{"target_kvs":[{"usa":[true],"t":["portfolio-strategy"]}],"exclude_kvs":[{"inc":["on-the-move-news-fidelity"]},{"t":["top-news"]},{"inc":["investing-strategy"]}],"html":"<p class=\"now_read bullets_li hide\" id=\"bottom_news_tf_1\">Now read: <b><a href=\"https://seekingalpha.com/investing-strategy?source=br_investing_nowread\">Visit our Investing Strategy Center</a></b></p><style type=\"text/css\">.now_read.bullets_li {  font-size: 16px;  line-height: 24px;  margin-bottom: 12px;  width: 582px;  background: url('/images/bullets/mc_bullet.png') no-repeat 2px 8px;  padding: 0 12px 0 14px;  float: left;}.now_read.bullets_li.hide {  display: none;}</style><script>var random = 1 + Math.floor(Math.random() * 1);document.getElementById('bottom_news_tf_' + random).className = 'now_read bullets_li';</script>","container_id":"bullets_ul_now_read","id":85787,"frequency_cap":5}]},
    activeMpAds: [1060,1057,1127,316,76,1182,1026,1098,735,1156],
    allowMarketVolPercentageKv: true
  }
});
SA.require([], function() {

  'use strict';

  if (typeof Object.assign !== 'function') {

    Object.defineProperty(Object, 'assign', {
      value: function assign(target, varArgs) {

        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource !== null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }

}, 'Object.assign');

if (!Array.prototype.filter)
  Array.prototype.filter = function(func, thisArg) {
    'use strict';

    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) ) {
      throw new TypeError();
    }

    var len = this.length >>> 0, res = new Array(len), t = this, c = 0, i = -1;
    if (thisArg === undefined) {
      while (++i !== len) {
        if (i in this) {
          if (func(t[i], i, t)) {
            res[c++] = t[i];
          } else {
            while (++i !== len) {
              if(i in this) {
                if(func.call(thisArg, t[i], i, t)) {
                  res[c++] = t[i];
                }
              }
            }
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),f=b.length>>>0;if("function"!==typeof c)throw new TypeError("predicate must be a function");for(var a=0;a<f;){var d=b[a];if(c.call(e,d,a,b))return d;a++}},configurable:!0,writable:!0});
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(b,f){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),c=e.length>>>0;if(0===c)return!1;var a=f|0;for(a=Math.max(0<=a?a:c-Math.abs(a),0);a<c;){var d=e[a];if(d===b||"number"===typeof d&&"number"===typeof b&&isNaN(d)&&isNaN(b))return!0;a++}return!1}});
(function(w, d) {

  'use strict';

  var cb = null;

  // for testing purposes we need to know whether the iframed website needs to access dev, staging or prodction
  function loc(){
    var script = d.getElementById('sa_crossdomain_js');
    if (script){
      var matches = script.src.match(/https?:\/\/([^\/]*)?\//);
      if (matches.length > 1) {
        return matches[1];
      }
    }
    return 'seekingalpha.com';
  }

  w.CrossdomainSA = {
    send: function(data){
      var hiddenDiv = d.getElementById('hiddenDiv');
      if (!hiddenDiv){
        hiddenDiv = d.createElement('DIV');
        hiddenDiv.id = 'hiddenDiv';
        d.body.appendChild(hiddenDiv);
        hiddenDiv.style.cssText = 'width:100%;height:50px;display:none';
      }
      hiddenDiv.innerHTML = '<iframe width="100%" name="SAPort" src="https://' + loc() + '/crossdomain_helper.html#' + data + '" height="50"></iframe>';
    },

    receive: function(data){
      if (cb){
        cb(data);
      }
    },

    setCallback: function(f){
      cb = f;
    }
  };

}(window, document));
// Implementation of localStorage using general store adapter
// https://developer.mozilla.org/en/docs/Web/API/Window/localStorage

// Usage:
//   SA.Data.Cache.set('key', 'val') - set value with key provided. No expiration
//   SA.Data.Cache.set('key', 'val', 20 * 1000) - set value with key provided. Expires in 20 sec.
//   SA.Data.Cache.get('key', true) - get value with given key. Item was set with expiration param
//   SA.Data.Cache.del('key') - remove item with given key from localStorage.

SA.define('SA.Data.Cache', [], function() {

  'use strict';

  var w = window, full = false, enabled, ls, st = {},
      deletedKeys = ['articles_read','news_read'];

  function getKeysSizes() {
    var h = {total: 0}, v;
    Object.keys(ls).forEach(function(k) {
      h.total += 1;
      v = ls.getItem(k) || '';
      h[k] = v.length;
    });
    return h;
  }

  function isQuotaExceeded(e) {
    if ((
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        // old IE
        e.number === -2147024882
      ) &&
      // acknowledge QuotaExceededError only if there's something already stored
      ls.length !== 0) {
      full = true;
      SA.exceptions.push(['localStorage Quote Data Exceeded', e, {items: getKeysSizes()}]);
    }
  }

  function storageAvailable() {
    var res = false, k = 'SA';
    try {
      // even direct call to window.localStorage can coz security exception
      ls = w.localStorage;
      ls.setItem(k, k);
      res = k === ls.getItem(k);
      ls.removeItem(k);
    }
    catch(e) {
      res = false;
      isQuotaExceeded(e);
    }
    return res;
  }


  function expired(v) {
    return v !== null && typeof v === 'object' && v.expires && new Date() > new Date(v.expires);
  }

  function del(k) {
    if(enabled) {
      ls.removeItem(k);
    }
  }

  function getVal(key, canExpire) {
    var obj = ls.getItem(key);
    canExpire = canExpire || false;
    if (obj && canExpire) {
      SA.exec(function () {
        obj = JSON.parse(obj);
        if (expired(obj)) {
          // expired
          ls.removeItem(key);
          obj = {value: null};
        }
        obj = obj.value;
      });
    }
    return obj;
  }

  function expireOld() {
    var v;
    Object.keys(ls).forEach(function(k) {
      try {
        v = JSON.parse(ls[k]);
      } catch (ignore) {}
      if (expired(v)) {
        del(k);
      }
    });

    deletedKeys.forEach(function(k) {
      del(k);
    });
  }

  function setup() {
    enabled = storageAvailable();
    if(enabled) {
      w.setTimeout(expireOld, 20000);
    }
  }

  setup();

  // Public methods

  st.enabled = enabled && !full;

  // method of the localStorage interface, when passed a key name, will return that key's value.
  // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
  // @param {string} key - string containing the name of the key you want to retrieve the value of.
  // @param {bool} key - bool indicator that function was set with expire param.
  st.get = function(key, canExpire) {
    return enabled ? getVal(key, canExpire) : null;
  };

  st.getJson = function(key) {
    return SA.exec(function() {
      return JSON.parse(st.get(key));
    }) || {};
  };

  // method of the localStorage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
  // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
  // @param {string} key - string containing the name of the key you want to create/update.
  // @param {string} value - string containing the value you want to give the key you are creating/updating.
  // @param {number} expires - time after which item in localStorage will be considered expired. (optional)
  // If @param expires was not provided - item will stay in localStorage unless removed manually
  // If item was set with expires param - it must be retrieved with canExpire set to true
  st.set = function(key, val, expires) {
    if (enabled && !full) {
      try {
        val = expires ? JSON.stringify({value: val, expires: Date.now() + (parseInt(expires, 10) || 0)}) : val;
        ls.setItem(key, val);
      } catch (e) {
        isQuotaExceeded(e);
      }
    }
  };

  st.setJson = function(key, obj) {
    SA.exec(function() {
      st.set(key, JSON.stringify(obj));
    });
  };

  // method of the Storage interface, when passed a key name, will remove that key from the storage.
  // @param {string} key - string containing the name of the key you want to remove.
  st.del = function (k) {
    del(k);
  };

  // get direct reference to browsers localStorage object if it is enabled
  st.getStore = function () {
    return enabled ? ls : null;
  };

  return st;

});
// Implementation of Cookies Adapter
// On initialization module parses document.cookie and caches it in cookieCache object
// After updating/removing the item, cookieCache object transformed back to string and document.cookie replaced
// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies/Cookie

// Usage
//   SA.Data.Cookies.set('key', 'val') - create/update cookie with provided value
//   SA.Data.Cookies.get('key') - get cookie value by key

SA.define('SA.Data.Cookies', [], function() {

  'use strict';

  var d = window.document, cookieCache, cachedDocCookie, cs = {};

  function extendOpt(opt) {
    opt = opt || {};
    return {
      path: opt.path || '/',
      expires: opt.expires || Infinity,
      secure: opt.secure || false
    };
  }

  function getExpiresDate(exp) {
    var now = new Date();
    return exp === Infinity ? new Date(now.getTime() + 3600 * 1000 * 24 * 365 * 10) : new Date(now.getTime() + exp * 1000);
  }

  function generateCookieString(k, v, opt) {
    var c;
    k = encodeURIComponent(k);
    v = encodeURIComponent(v);
    opt = opt || {};
    c = k + '=' + v;
    c += opt.path ? ';path=' + opt.path : '';
    c += opt.expires ? ';expires=' + opt.expires.toUTCString() : '';
    c += ';secure';

    return c;
  }

  function safeDecode(val) {
    return SA.exec(function() {
      return decodeURIComponent(val);
    });
  }

  function getKVPair(str) {
    // Server encodes space as '+', so I'm replacing it to '%20' so that decodeURIComponent will decode it
    var ar = str.replace(/\+/g, '%20').split('=');
    return {
      key: safeDecode(ar.shift()),
      value: safeDecode(ar.join('='))
    };
  }

  function getCacheFromString(str) {
    var temp = {}, cookiesArray = str ? str.split(/;\s*/) : [], cookieKvp;

    cookiesArray.forEach(function(i) {
      cookieKvp = getKVPair(i);
      if (temp[cookieKvp.key] === undefined) {
        temp[cookieKvp.key] = cookieKvp.value;
      }
    });

    return temp;
  }

  function renewCache() {
    cookieCache = getCacheFromString(d.cookie);
    cachedDocCookie = d.cookie;
    return cookieCache;
  }

  // PUBLIC FUNCTIONS


  // method of the cookie interface, when passed a key name, will return that key's cookie value.
  // @param {string} key - string containing the name of the key you want to retrieve the value of.
  cs.get = function(key) {
    if (cachedDocCookie !== d.cookie) {
      renewCache();
    }
    return cookieCache[key] || null;
  };

  // method of the cookie interface, when passed a key name and value, will generate new cookie string, or update that key's value if it already exists.
  // @param {string} k - string containing the name of the cookie key you want to create/update.
  // @param {string} v - string containing the value you want to give the key you are creating/updating.
  // @param {object} opt - options object (optional)
  // opt.path - indicates a URL path that must exist in the requested resource before sending the Cookie header. Default - '/'
  // opt.expires - indicates when the cookie should no longer be sent to the server and therefore may be deleted by the browser. Default - 'Infinity'
  // opt.secure - secure cookie will only be sent to the server when a request is made using SSL and the HTTPS protocol. Default - false
  cs.set = function(k, v, opt) {
    opt = extendOpt(opt);
    opt.expires = getExpiresDate(v === undefined ? -1 : opt.expires);
    d.cookie = generateCookieString(k, v, opt);
    return cs;
  };

  // method of the cookie interface, when passed a key name, will remove cookie string with given key.
  // @param {string} k - string containing the name of the key you want to remove.
  cs.expire = function(k, opt) {
    return cs.set(k, undefined, opt);
  };

  // Legacy wrapper function
  cs.del = function(k, opt) {
    cs.expire(k, opt);
  };

  // method of the cookie interface, when passed a prefix will remove all keys with given prefix.
  // @param {string} pref - string containing the prefix of keys you want to remove.
  cs.expireByPrefix = function(pref) {
    var rx = new RegExp('^' + pref);
    Object.keys(cookieCache).forEach(function(k) {
      if(rx.test(k)) {
        cs.expire(k);
      }
    });
    return cs;
  };


  return cs;

});
SA.define('SA.dom.doc', [], function() {

  'use strict';

  var doc = document, body = doc.body, html = doc.documentElement;

  return {

    ref: doc,

    body: body,

    html: html,

    id: function(id) {
      return doc.getElementById(id);
    },

    height: function() {
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

  };

});
SA.define('SA.dom.win', ['SA.dom.doc'], function(doc) {

  'use strict';

  var w = window, animationFrame = w.requestAnimationFrame || function(fn) {fn();};

  return {

    ref: w,

    scrollTop: function() {
      return (w.pageYOffset || doc.html.scrollTop)  - (doc.html.clientTop || 0);
    },

    scrollLeft: function() {
      return (w.pageXOffset || doc.html.scrollLeft) - (doc.html.clientLeft || 0);
    },

    height: function() {
      return w.innerHeight;
    },

    requestAnimationFrame: function(fn) {
      return animationFrame(fn);
    }

  };

});
SA.define('SA.dom.env', ['SA.dom.win', 'SA.dom.doc', 'SA.Fn.param', 'SA.Data.Cookies'], function(win, doc, param, cs) {

  'use strict';

   var ua = navigator.userAgent, conf = SA.pageConfig;

   return {

     ua: ua,

     isIOS: /(iPad|iPhone|iPod)/i.test(ua),

     // jshint singleGroups: false
     isAndroid: (/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i).test(ua) || (/Android/i).test(ua),

     // jshint singleGroups: false
     touch: ('ontouchstart' in win.ref) || (win.ref.DocumentTouch && doc.ref instanceof win.ref.DocumentTouch),

     source: function() {
       return conf.saSource || cs.get('_sasource') || param('source') || '';
     }
   };


});
SA.define('SA.dom.el', [], function() {

  'use strict';

  function addC(el, c) {
    if(el) {
      if (el.classList) {
        el.classList.add(c);
      } else {
        el.className += ' ' + c;
      }
    }
  }

  function removeC(el, c) {
    if(el) {
      if (el.classList){
        el.classList.remove(c);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }

  function hasC(el, c) {
    if (el.classList) {
      return el.classList.contains(c);
    }
    return new RegExp('(^| )' + c + '( |$)', 'gi').test(el.className);
  }

  function wrap(el, wrapper) {
    if(wrapper) {
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    }
  }

  function setStyle(el, stl) {
    Object.keys(stl).forEach(function(k) {
      el.style[k] = stl[k];
    });
  }

  return {

    addClass: function(els, c) {
      if(c) {
        els.forEach(function(el) {
          addC(el, c);
        });
      }
    },

    removeClass: function(els, c) {
      if(c) {
        els.forEach(function(el) {
          removeC(el, c);
        });
      }
    },

    hasClass: function(el, c) {
      if(el && c) {
        return hasC(el, c);
      }
      return false;
    },

    wrap: function(els, wrapper) {
      els.forEach(function(el) {
        wrap(el, wrapper);
      });
    },

    remove: function(els) {
      els.forEach(function(el) {
        el.parentNode.removeChild(el);
      });
    },

    setStyles: function(els, stl) {
      els.forEach(function(el) {
        setStyle(el, stl);
      });
    },

    offsetTop: function(el) {
      return el.getBoundingClientRect().top;
    }

  };

});
SA.define('SA.dom.event', ['SA.dom.win', 'SA.dom.doc'], function(win, doc) {

  'use strict';

  var pass = false, opt;

  SA.exec(function() {
    opt = Object.defineProperty({}, 'passive', {
      get: function() {
        pass = true;
      }
    });

    win.ref.addEventListener('test', null, opt);
  });

  return {
    addEventListener: function(el, n, fn) {
      el.addEventListener(n, fn, pass ? {passive: true} : false);
      SA.log(['LISTENER-ADD: ', arguments]);

    },

    removeEventListener: function(el, n, fn) {
      el.removeEventListener(n, fn);
      SA.log(['LISTENER-REMOVE: ', arguments]);
    },

    trigger: function(el, n) {

      var e;
      if(doc.ref.createEvent) {
        e = doc.ref.createEvent('HTMLEvents');
        e.initEvent(n, true, false);
        el.dispatchEvent(e);
      } else {
        el.fireEvent('on' + n);
      }
    }

  };

});
SA.define('SA.dom.scroll', ['SA.dom.doc', 'SA.dom.win'], function(doc, win) {

  'use strict';

  return {

    closeToElement: function(e, top) {
      // jshint singleGroups: false
      var f = false, viewportHeight = win.height() || doc.html.clientHeight;
      if(e && viewportHeight) {
        f = (e.getBoundingClientRect().top - (top || 0)) < viewportHeight;
      }
      return f;
    },

    inVerticalView: function(e, offset) {
      // jshint singleGroups: false

      var f = false, viewportHeight = win.height() || doc.html.clientHeight, rect;
      offset = offset || 0;
      if(e && viewportHeight) {
        rect = e.getBoundingClientRect();
        f = (rect.top + offset) < viewportHeight && (rect.bottom - offset) > 0;
      }

      return f;
    }

  };

});

// jshint maxparams: 6

SA.define('SA.dom.sticky', ['SA.dom.win', 'SA.dom.doc', 'SA.dom.env', 'SA.dom.el', 'SA.dom.event', 'SA.Fn.throttle'], function(win, doc, env, el, ev, throttle) {

  'use strict';

  var footer, nav, secNav, defaults;

  var items = [], windowHeight;

  var scrollObserver, resizeObserver, allowed = !(env.touch && (env.isAndroid || env.isIOS));

  function vars() {
    windowHeight = win.height();
    footer = doc.id('sa-ft');
    nav = doc.id('main-nav-wrapper-row');
    secNav = doc.id('nav-sec');
    defaults = {
      // jshint singleGroups: false
      topSpacing: (nav ? (nav.offsetHeight + 5) : 5) + (secNav ? secNav.offsetHeight : 0),
      bottomSpacing: footer ? 175 : 5
    };
  }

  function defaultStyle(elem) {
    el.setStyles([elem], {
      width: '',
      position: '',
      top: '',
      marginLeft: ''
    });
  }

  function stop(item) {
    if (item.currentTop !== null) {
      el.removeClass([item.stickyWrapper], 'is-sticky');
      defaultStyle(item.stickyElement);
      item.currentTop = null;
    }
  }

  function absolute(item) {
    if(item.position !== 'absolute') {
      el.setStyles([item.stickyElement], {
        width: item.stickyWrapper.offsetWidth + 'px',
        position: 'absolute',
        bottom: '0px',
        top: '',
        marginLeft: ''
      });
      item.position = 'absolute';
    }
  }

  function fixed(item, newTop, leftScroll) {
    el.setStyles([item.stickyElement], {
      width: item.stickyWrapper.offsetWidth + 'px',
      position: 'fixed',
      top: newTop + 'px',
      bottom: '',
      marginLeft: -leftScroll + 'px'
    });
    item.position = 'fixed';
  }

  function adjustMargin(item, leftScroll) {
    if(item.position !== 'absolute') {
      item.stickyElement.style.marginLeft = -leftScroll + 'px';
    }
  }

  function adjustTop(item, newTop, leftScroll) {
    if(item.currentTop !== newTop) {

      if(newTop < item.topSpacing) {
        absolute(item);
      } else {
        fixed(item, newTop, leftScroll);
      }
      el.addClass([item.stickyWrapper], 'is-sticky');

      item.currentTop = newTop;
    }
  }

  function scroll() {
    // jshint singleGroups: false

    var scrollTop = win.scrollTop(), documentHeight = doc.height(),
      dwh = documentHeight - windowHeight,
      extra = (scrollTop > dwh) ? dwh - scrollTop : 0,
      leftScroll = win.scrollLeft(), elementTop, newTop;

    items.forEach(function(item) {

      elementTop = el.offsetTop(item.stickyWrapper) + scrollTop;

      if (scrollTop <= elementTop - item.topSpacing - extra) {
        stop(item);
      } else {
        newTop = documentHeight - item.stickyElement.offsetHeight - item.topSpacing - (typeof item.bottomSpacing === 'function' ? item.bottomSpacing() : item.bottomSpacing) - scrollTop - extra;
        newTop = newTop < 0 ? (newTop + item.topSpacing) : item.topSpacing;
        adjustMargin(item, leftScroll);
        adjustTop(item, newTop, leftScroll);
      }

    });
  }

  function scrollFrame() {
    win.requestAnimationFrame(scroll);
  }

  function resizeFrame() {
    win.requestAnimationFrame(resize);
  }

  function resize() {
    var newWidth;

    windowHeight = win.height();

    items.forEach(function(s) {
      newWidth = s.stickyWrapper.offsetWidth;
      if (newWidth !== null) {
        el.setStyles([s.stickyElement], {width: newWidth + 'px'});
      }
    });
  }

  function setEvents() {
    scrollObserver = throttle(scrollFrame, 50);
    resizeObserver = throttle(resizeFrame, 250);
    ev.addEventListener(win.ref, 'scroll', scrollObserver);
    ev.addEventListener(win.ref, 'resize', resizeObserver);
  }

  function removeEvents() {
    if(scrollObserver) {
      ev.removeEventListener(win.ref, 'scroll', scrollObserver);
      scrollObserver = null;
    }
    if(resizeObserver) {
      resizeObserver = null;
      ev.removeEventListener(win.ref, 'resize', resizeObserver);
    }
  }

  function initialize() {
    if(!scrollObserver || !resizeObserver) {
      vars();
      setEvents();
      scroll();
    }
  }

  function applySticky(elem, options) {
    var stickyHeight = elem.offsetHeight, parent = elem.parentNode, wrapped = el.hasClass(parent, 'sticky-wrapper'), elemWrapper = wrapped ? parent : document.createElement('DIV');

    if(!wrapped) {
      el.addClass([elemWrapper], 'sticky-wrapper');
      el.wrap([elem], elemWrapper);
    }

    elemWrapper.parentNode.style.position = 'relative';

    elemWrapper.style.minHeight = stickyHeight + 'px';

    if(elem.style.cssFloat === 'right') {
      elemWrapper.style.cssFloat = 'right';
      elem.style.cssFloat = 'none';
    }

    items.push(Object.assign({}, defaults, options, {
      stickyElement: elem,
      stickyWrapper: elemWrapper,
      currentTop: null
    }));

    scroll();
  }

  function remove(elem) {
    var i = items.length - 1;

    while (i >= 0) {
      if (items[i].stickyElement === elem) {
        el.remove([items[i].stickyWrapper]);
        Array.prototype.splice.call(items, i, 1);
      }
      i -= 1;
    }

    if(!items.length) {
      removeEvents();
    }
  }

  return {
    add: function(el, opt) {
      if(el && allowed) {
        initialize();
        applySticky(el, opt || {});
      }
    },

    destroy: function(els) {
      if(els) {
        els.forEach(function(elem) {
          remove(elem);
        });
      }
    }
  };

});
SA.define('SA.Rx.email', [], function() {

  'use strict';

  return /\w[\w#$\%^&*'\/=?_`{|}~+-]*(\.[\w#$\%^&*'\/=?_`{|}~+-]+)*@(\w[\w-]*\.)+[a-z]{2,63}/i;

});
SA.define('SA.Fn.unique', [], function() {

  'use strict';

  return function(arrArg) {

    return arrArg.filter(function(elem, pos, arr) {
      return arr.indexOf(elem) === pos;
    });

  };

});
SA.define('SA.Fn.diff', [], function() {

  'use strict';

  return function(arr1, arr2) {
    return arr1.filter(function(elem) {
      return arr2.indexOf(elem) === -1;
    });
  };

});
SA.define('SA.Fn.intersect', [], function() {

  'use strict';

  return function(arr1, arr2) {
    return arr1.filter(function(elem) {
      return arr2.indexOf(elem) !== -1;
    });
  };

});
SA.define('SA.Fn.throttle', [], function() {

  'use strict';

  return function(cb, interval) {
    var locker = 0, nextArgs = null;

    function wait() {
      locker = 0;
      // If during the period there're invocations queued up, fire once.
      if (nextArgs) {
        exec(nextArgs);
      }
    }

    function exec(args) {
      nextArgs = null;
      // Lock the fire for minInterval milliseconds
      locker = window.setTimeout(wait, interval);

      cb.apply(null, args);
    }

    return function() {
      if (locker) {
        nextArgs = arguments;
      } else {
        exec(arguments);
      }
    };

  };


});
SA.define('SA.Fn.daysBetween', [], function() {

  'use strict';

  return function(ts) {
    return Math.abs((Date.now() - ts) / (24 * 60 * 60 * 1000));
  };

});
SA.define('SA.Fn.hoursBetween', [], function() {

  'use strict';

  return function(ts) {
    var oneHour = 60 * 60 * 1000;
    return Math.round((Date.now() - ts) / oneHour);
  };

});
SA.define('SA.Ads.DfpCallbacks', ['SA.Data.Cookies'], function(cs) {

  'use strict';

  return {
    addMoneEvent: function(d){
      SA.Logger.Mone.event(d.saType || 'dfp_callback_type', d.saSource || 'dfp_callback_source', d.saAction || 'dfp_callback_action', d.saData ? {data: d.saData } : undefined);
    },

    addSASourceCookie: function(d){
      cs.set('_sasource', d.saSource, {expires: 60});
    },

    addAlerts: function(d){
      SA.Widgets.AddTickerByClick(d.ticker, d.saSource, d.moneType.length ? {mone_type: d.moneType} : {});
    }
  };

});

SA.define('SA.Ads.crossDomain', ['SA.dom.win', 'SA.Ads.DfpCallbacks'], function(win, cbList) {

  'use strict';

  return function() {
    var res;
    win.ref.CrossdomainSA.setCallback(function(data) {
      if (data !== undefined) {
        res = SA.exec(function() {
          return JSON.parse(data);
        });
        if(res && res.cb && cbList[res.cb]) {
          cbList[res.cb](res);
        }
      }
    });
  };

});
SA.define('SA.Ads.PostMessage', [], function(debug) {

  'use strict';

  function receiveMessage(element, eventName, eventHandler) {
    if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, eventHandler);
    }
  }

  var get_host = function () {
    if (debug === true) {
      return '*';
    } else {
      return 'https://tpc.googlesyndication.com';
    }
  };

  // Send a message to the requesting iframe
  var respond = function (iframe, msg) {
    iframe.postMessage(JSON.stringify({msg: msg, source: 'SA'}), get_host());
  };

  // Listen to incoming messages
  receiveMessage(window, 'message', function (e) {
    if (debug !== true && e.origin !== get_host()) { return }

    var data = {};
    try {
      data = JSON.parse(e.data);
    } catch (e) {
    }

    if (data.source == 'SAAd') {
      switch (data.message) {
        case 'get-page-config':
          respond(e.source, { pageConfig: SA.pageConfig, message: data.message });
          break;
        case 'get-primary-ticker':
          var primaryTicker = '';
          switch (SA.pageConfig.Data.pageType) {
            case "symbol_page":
              primaryTicker = SA.pageConfig.Data.slug;
              break;
            case "article":
              primaryTicker = SA.pageConfig.Data.article.prioritizedTicker;
              break;
            case "single_news":
              primaryTicker = SA.pageConfig.Data.primaryTicker;
              break;
          }
          respond(e.source, { primaryTicker: primaryTicker, message: data.message });
          break;
        case 'send-mone':
          SA.Logger.Mone.event(data.msg.type, data.msg.action, data.msg.source, { data: data.msg.data });
          break;
        case 'add-ticker':
          SA.Widgets.AddTickerByClick(data.msg.ticker, data.msg.source, data.msg.moneType.length ? {mone_type: data.msg.moneType} : {});
          break;
        case 'follow-author':
          $.post('/account/ajax_subscribe_to_author_rta', {
            author_slug: data.msg.author_slug
          }).done(function () {
            $.post('/account/ajax_subscribe_to_tags', {
              tags: data.msg.author_slug,
              modes: 'author_rta'
            });
            SA.Logger.Mone.event(data.msg.type, data.msg.action, data.msg.source);
          });
          break;
        case 'get-realtime-data':
          SA.Utils.PricesData.getRealTimePromise(data.msg.tickers).done(function (res) {
            res.message = data.message;
            respond(e.source, { data: res });
          });
          break;
      }
    }
  });

});
SA.define('SA.Ads.enabled', ['SA.dom.doc', 'SA.Fn.param', 'SA.Rx.email', 'SA.UserCookie'], function(doc, param, emailRx, uc) {

  'use strict';

  return !uc.ad_free_user && !SA.pageConfig.Ads.disabled && !(emailRx.test(SA.App.initHref + '' + doc.ref.referrer) || !!(/PTST/.test(navigator.userAgent) && param('perf_test')));

});
(function() { this.JST || (this.JST = {}); this.JST["jst/ads/mp_ad"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="/checkout?service_id=mp_',  marketplaceAd.author_research_id ,'&source=retargeting_',  marketplaceAd.author_research_id ,'"\n   target="_blank">\n  <div class="user-mp-ad">\n    <div class="ad-ar">\n      <div class="ad-ar-image">\n        <img alt="" height="40" src="',  marketplaceAd.author_research_image ,'" width="40">\n      </div>\n      <div class="ad-ar-text">\n        <div class="ad-ar-title">',  marketplaceAd.author_research_title ,'</div>\n        <div class="ad-ar-author-name">by ',  marketplaceAd.author_name ,'</div>\n      </div>\n    </div>\n    <div class="ad-features">\n      <div class="ad-feature">\n        <div class="ad-feature-image">\n          <img alt="" height="30" src="/images/superturtle/mp_landing/',  marketplaceAd.key_feature_image_1 ,'"\n               width="30">\n        </div>\n        <div class="ad-feature-title">',  marketplaceAd.key_feature_title_1 ,'</div>\n      </div>\n      <div class="ad-feature">\n        <div class="ad-feature-image">\n          <img alt="" height="30" src="/images/superturtle/mp_landing/',  marketplaceAd.key_feature_image_2 ,'"\n               width="30">\n        </div>\n        <div class="ad-feature-title">',  marketplaceAd.key_feature_title_2 ,'</div>\n      </div>\n      <div class="ad-feature">\n        <div class="ad-feature-image">\n          <img alt="" height="30" src="/images/superturtle/mp_landing/',  marketplaceAd.key_feature_image_3 ,'"\n               width="30">\n        </div>\n        <div class="ad-feature-title">',  marketplaceAd.key_feature_title_3 ,'</div>\n      </div>\n    </div>\n    <div class="ad-button">\n      ',  marketplaceAd.cta_button_text ,'\n    </div>\n\n    <style type="text/css">\n\n      * {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      .user-mp-ad {\n        font-family: Arial;\n        width: 266px;\n        height: 216px;\n        padding: 16px;\n        border: 1px solid #D3D3D3;\n        -webkit-touch-callout: none; /* iOS Safari */\n        -webkit-user-select: none; /* Safari */\n        -khtml-user-select: none; /* Konqueror HTML */\n        -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n        user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */\n      }\n\n      .user-mp-ad .ad-ar .ad-ar-image {\n        float: left;\n        margin-right: 8px;\n      }\n\n      .user-mp-ad .ad-ar .ad-ar-image img {\n        border-radius: 50%;\n      }\n\n      .user-mp-ad .ad-ar .ad-ar-text {\n        line-height: 20px;\n      }\n\n      .user-mp-ad .ad-ar .ad-ar-text .ad-ar-title {\n        font-weight: bold;\n        color: #555555;\n      }\n\n      .user-mp-ad .ad-ar .ad-ar-text .ad-ar-author-name {\n        font-size: 12px;\n        color: #757575;\n      }\n\n      .user-mp-ad .ad-features {\n        clear: both;\n        margin-top: 10px;\n      }\n\n      .user-mp-ad .ad-features .ad-feature {\n        height: 35px;\n        margin-bottom: 10px;\n      }\n\n      .user-mp-ad .ad-features .ad-feature .ad-feature-image {\n        float: left;\n        margin-right: 15px;\n        padding-top: 2px;\n      }\n\n      .user-mp-ad .ad-features .ad-feature .ad-feature-title {\n        font-size: 13px;\n        line-height: 18px;\n        color: #555555;\n      }\n\n      .user-mp-ad .ad-button {\n        width: 200px;\n        margin: 10px auto 0;\n        padding: 5px 0;\n        color: #FF7200;\n        border: 1px solid #FF7200;\n        border-radius: 4px;\n        text-align: center;\n      }\n\n    </style>\n  </div>\n</a>\n');}return __p.join('');};
}).call(this);

SA.define('SA.Ads.MpAdsTrack', ['SA.Fn.daysBetween', 'SA.Data.Cache', 'SA.AdsConf'], function(daysBetween, cache, adsConf) {

  'use strict';

  var cap = 8, k = 'mp_ads_track';

  function get() {
    var track = cache.getJson(k);
    return Array.isArray(track) ? track : [];
  }

  function set(track) {
    cache.setJson(k, track);
  }

  function cleanRedundantData() {
    var track = get(),
      now = Date.now();


    track = track.filter(function(obj) {
      return daysBetween(obj.visitedAt) < 7;
    });

    track.forEach(function(obj) {
      if (daysBetween(obj.visitedDaily) >= 1) {
        obj.visitedDaily = now;
        obj.requestsCount = 0;
      }
    });

    set(track);
  }

  function addMpAdTrack(id) {
    var track = get(), now = Date.now();

    track.push({
      researchId: id,
      visitedDaily: now,
      visitedAt: now,
      requestsCount: 0
    });

    set(track);
  }

  function updateMpAdTrack(i) {
    var track = get(), now = Date.now();
    track[i].visitedAt = now;
    set(track);
  }

  function getMpAdIndex(id) {
    var track = get(),
      index = -1;

    id = parseInt(id, 10);

    track.forEach(function(obj, i){
      if (obj.researchId === id) {
        index = i;
      }
    });

    return index;
  }

  return {

    getServiceIdForDisplay: function() {

      var mpAd = get().filter(function(obj) {
        return (obj.requestsCount < cap && adsConf.activeMpAds.indexOf(obj.researchId) !== -1);
      }).sort(function (a, b) {
        if (a.visitedAt < b.visitedAt) {
          return -1;
        }
        if (a.visitedAt > b.visitedAt) {
          return 1;
        }
        return 0;
      }).pop();

      return mpAd ? mpAd.researchId : '';
    },

    createAd: function(mpAd) {
      var i = getMpAdIndex(mpAd.author_research_id), track = get();

      track[i].requestsCount += 1;
      set(track);

      SA.Logger.Mone.event('retargeting_campaign', 'right_rail', 'shown', {
        data: {
          id: parseInt(mpAd.author_research_id, 10)
        }
      });

      return window.JST['jst/ads/mp_ad']({
        marketplaceAd: mpAd
      });
    },

    updateMpAdsTrackData: function (authorResearchId) {
      var i = getMpAdIndex(authorResearchId);
      return i === -1 ? addMpAdTrack(authorResearchId) : updateMpAdTrack(i);
    },

    allowMpAd: function () {
      cleanRedundantData();
      var track = get();

      return track.filter(function(obj) {
        return (obj.requestsCount < cap && adsConf.activeMpAds.indexOf(obj.researchId) !== -1);
      }).length > 0;
    }
  };

});

(function() { this.JST || (this.JST = {}); this.JST["jst/ads/mp_discount_ad_160_600"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a class=\'dfp_mp_discount_a\' href="/checkout?service_id=mp_',  marketplaceAd.author_research_id ,'&source=leftrail_price_retargeting_',  marketplaceAd.author_research_id ,'"\n   target="_blank">\n  <div class=\'dfp_mp_discount\'>\n    <span class=\'title\'>',  marketplaceAd.title ,'</span>\n    <span class=\'offer lto\'>LIMITED-TIME</span>\n    <span class=\'offer lto\'>OFFER:</span>\n    <span class=\'offer discount\'>',  marketplaceAd.discount,'% OFF</span>\n    <div class=\'actions-wrapper\'>\n      <div class=\'cta\'>SUBSCRIBE</div>\n      <div class=\'expiration_date\'>Expires ',  marketplaceAd.expiration_date ,'</div>\n    </div>\n  </div>\n</a>\n\n<style type="text/css">\n\n  .dfp_mp_discount {\n    background-image: url("/images/ads/user_discount_160x600.png");\n    background-repeat: no-repeat;\n    width: 160px;\n    height: 600px;\n    position: relative;\n  }\n\n  .dfp_mp_discount_a {\n    text-decoration: none !important;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .dfp_mp_discount .title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    font-weight: 100;\n    color: #333333;\n    margin-bottom: 20px;\n    letter-spacing: -0.34px;\n    padding: 17px 15px 0 15px;\n    display: inline-block;\n    text-align: center;\n    line-height: 22px;\n  }\n\n  .dfp_mp_discount .center {\n    text-align: center;\n  }\n\n  .dfp_mp_discount .offer {\n    text-shadow: 0 4px 8px rgba(71, 106, 145, 0.2);\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    padding: 0px 13px;\n    display: inline-block;\n    width: 134px;\n  }\n\n  .dfp_mp_discount .lto {\n    line-height: 29px;\n    font-size: 19px;\n    text-align: center;\n    font-weight: bold;\n  }\n\n  .dfp_mp_discount .discount {\n    font-size: 30px;\n    letter-spacing: -0.7px;\n    line-height: 37px;\n    font-weight: bold;\n  }\n\n  .dfp_mp_discount .cta {\n    width: 116px;\n    height: 40px;\n    border-radius: 5px;\n    background-color: #ff7200;\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-align: center;\n    margin-bottom: 15px;\n    vertical-align: middle;\n    line-height: 40px;\n  }\n\n  .dfp_mp_discount .expiration_date {\n    color: #333333;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 13px;\n    font-weight: 100;\n    text-align: center;\n    padding: 0px 27px;\n  }\n\n  .dfp_mp_discount .actions-wrapper {\n    position: absolute;\n    top: 490px;\n  }\n\n</style>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/ads/mp_discount_ad_300_250"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a class=\'dfp_mp_discount_a\' href="/checkout?service_id=mp_',  marketplaceAd.author_research_id ,'&source=rightrail_price_retargeting_',  marketplaceAd.author_research_id ,'"\n   target="_blank">\n   <div class=\'dfp_mp_discount\'>\n    <span class=\'title\'>',  marketplaceAd.title ,'</span>\n    <span class=\'offer\'>LIMITED TIME OFFER: ',  marketplaceAd.discount,'% OFF</span>\n    <div class=\'actions-wrapper\'>\n      <div class=\'cta\'>SUBSCRIBE NOW</div>\n      <div class=\'expiration_date\'>Expires ',  marketplaceAd.expiration_date ,'</div>\n    </div>\n  </div>\n</a>\n\n<style type="text/css">\n\n  .dfp_mp_discount {\n    background-image: url("/images/ads/user_discount_300x250.png");\n    background-repeat: no-repeat;\n    width: 300px;\n    height: 250px;\n    position: relative;\n  }\n\n  .dfp_mp_discount_a {\n    text-decoration: none !important;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .dfp_mp_discount .title {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 17px;\n    font-weight: 100;\n    color: #333333;\n    margin-bottom: 10px;\n    letter-spacing: -0.34px;\n    display: inline-block;\n    padding: 15px 15px 0 15px;\n  }\n\n  .dfp_mp_discount .offer {\n    text-shadow: 0 4px 8px rgba(71, 106, 145, 0.2);\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 25px;\n    font-weight: 400;\n    line-height: 33px;\n    letter-spacing: -0.5px;\n    display: inline-block;\n    padding: 0 15px;\n    font-weight: bold;\n  }\n\n  .dfp_mp_discount .cta {\n    width: 171px;\n    height: 48px;\n    border-radius: 5px;\n    background-color: #ff7200;\n    color: #ffffff;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    font-weight: 700;\n    margin: 0 auto;\n    text-align: center;\n    margin-bottom: 5px;\n    line-height: 48px;\n    vertical-align: middle;\n  }\n\n  .dfp_mp_discount .expiration_date {\n    color: #333333;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 13px;\n    font-weight: 100;\n    text-align: center;\n  }\n\n  .dfp_mp_discount .actions-wrapper {\n    position: absolute;\n    width: 100%;\n    top: 175px;\n  }\n\n</style>\n');}return __p.join('');};
}).call(this);



SA.define('SA.Ads.MpDiscountAdsTrack', ['SA.Fn.daysBetween', 'SA.Data.Cache', 'SA.Data.Cookies'], function(daysBetween, cache, cs) {

  'use strict';

  var cap = 8, k = 'mp_discount_ads_track';

  function get() {
    var track = cache.getJson(k);
    return Array.isArray(track) ? track : [];
  }

  function set(track) {
    cache.setJson(k, track);
  }

  function reBuildData() {
    var track = get(),
      newData = [],
      allActive = activeMpDiscounts(),
      i, obj;

    if (allActive.length) {
      allActive.forEach(function(a) {
        i = getIndex(a.author_research_id);
        if (i === -1) {
          newData.push({
            researchId: a.author_research_id,
            firstDisplay: null,
            requestsCount: 0,
            expirationDate: a.expiration_date,
            startDate: a.start_date
          });
        } else {
          obj = track[i];
          if (!obj.firstDisplay || daysBetween(obj.firstDisplay) < 1) {
            newData.push(obj);
          }
        }
      });
    }

    set(newData);
  }

  function getIndex(id) {
    var track = get(),
      index = -1;

    id = parseInt(id, 10);

    track.forEach(function(obj, i){
      if (obj.researchId === id) {
        index = i;
      }
    });

    return index;
  }

  function activeMpDiscounts() {
    var mpDiscouts = user_cookie && user_cookie.mp_discounts,
      now = Date.now(),
      active = [];

    if (mpDiscouts) {
      active = mpDiscouts.filter(function(d) {
        return d.start_date <= now && now < d.expiration_date;
      });
    }

    return active;
  }

  function formatExpirationDate(dateInt) {
    var date = new Date(dateInt),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      monthIndex = date.getMonth(),
      dayOfMonth = date.getDate(),
      monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      arrayHrs = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11],
      amPm;

    if (minute < 10) {
      minute = "0" + minute;
    }

    amPm = hour < 12 ? 'am' : 'pm';

    return arrayHrs[hour] + ":" + minute + " " + amPm + ", " + monthNames[monthIndex]+ " " + dayOfMonth + ", " + year;
  }

  return {

    getServiceIdForDisplay: function() {
      var mpAd = get().filter(function(obj) {
        return (obj.requestsCount < cap);
      }).sort(function (a, b) {
        if (a.expirationDate < b.expirationDate) {
          return -1;
        }
        if (a.expirationDate > b.expirationDate) {
          return 1;
        }
        return 0;
      }).shift();

      return mpAd ? mpAd.researchId : '';
    },

    createAd: function(mpAd, size) {
      var i = getIndex(mpAd.author_research_id), track = get(), template, adSource;

      track[i].requestsCount += 1;
      if (track[i].requestsCount === 1) {
        track[i].firstDisplay = Date.now();
      }
      set(track);

      if (size === '160x600') {
        adSource = '160x600_left_rail';
        template = 'mp_discount_ad_160_600';
      } else if (size === '300x250') {
        adSource = '300x250_right_rail';
        template = 'mp_discount_ad_300_250';
      }

      SA.Logger.Mone.event('price_retargeting_campaign', adSource, 'shown', {
        data: {
          service_id: parseInt(mpAd.author_research_id, 10)
        }
      });

      mpAd.expiration_date = formatExpirationDate(mpAd.expiration_date);

      return window.JST['jst/ads/'+template]({
        marketplaceAd: mpAd
      });

    },

    allow: function () {
      if (!cs.get('user_id')) {
        return false;
      }

      reBuildData();
      var track = get();

      return track.filter(function(obj) {
        return obj.requestsCount < cap;
      }).length > 0;
    }
  };

});

// jshint maxparams: 8

SA.define('SA.Ads.KVs', ['SA.dom.win', 'SA.Fn.daysBetween', 'SA.Data.Cache', 'SA.UserCookie', 'SA.dom.env', 'SA.AdsConf', 'SA.Ads.MpAdsTrack', 'SA.Data.Cookies', 'SA.Ads.MpDiscountAdsTrack'], function(win, dBetween, ls, uc, env, adsConf, mpAdsTrack, cs, mpDiscountAdsTrack) {

  'use strict';

  var kvs = Object.assign({}, uc.ads_kvs || {}, SA.pageConfig.Ads.kvs || {}), now = Date.now(), source = env.source(), loc = win.ref.location;
  var isBot;

  // Add key and value to kvs. If more than one value is added with the same key,
  // convert the values to array.
  function addVal(key, val) {
    if (!kvs[key]) {
      kvs[key] = val;
      return;
    }

    if (Array.isArray(kvs[key])) {
      if (kvs[key].indexOf(val) === -1) {
        kvs[key].push(val);
      }
    } else {
      kvs[key] = [kvs[key], val];
    }
  }

  function setVal(key, val){
    kvs[key] = val;
  }

  // If replacekeys=key1:value1,key2:value2 exists in URL, replace existing values in kvs with them.
  function replaceKeys() {
    var m = loc.search.match(/[?&]replacekeys=([^&]+)/), repKV;
    if(m) {
      m[1].split(',').forEach(function(r) {
        repKV = r.split(':');
        kvs[repKV[0]] = repKV[1];
      });
    }
  }

  function isFirstImpression() {
    var lsKey = 'first_impression_viewed';
    if (!SA.Data.Cache.get(lsKey, true)) {
      // set expiration to 20 hours from now
      SA.Data.Cache.set(lsKey, true, 20 * 60 * 60 * 1000);
      return true;
    }
    return false;
  }

  /**
   * Filters old timestamps by longer period between maxDays1 and maxDays2
   * @param obj
   * @param maxDays
   * @returns obj
   */
  function getFilteredItems(obj, maxDays) {
    Object.keys(obj).forEach(function (id) {
      obj[id] = Array.isArray(obj[id]) ? obj[id] : [obj[id]];
      obj[id] = obj[id].filter(function (ts) {
        return dBetween(ts) <= maxDays;
      });
      if (obj[id].length === 0) {
        delete obj[id];
      }
    });
    return obj;
  }

  /**
   * Goes over recorded page visits and sends kv according to visits in the last maxDays interval
   * First checks for longer period (maxDays2), then checks for shorter period (maxDays1)
   * @param lsKey
   * @param cookieKey
   * @param maxDays
   */
  function lsKVs(lsKey, cookieKey, maxDays) {
    var itemsRead = ls.getJson(lsKey),
      maxDays1, maxDays2;

    maxDays1 = maxDays[0];
    maxDays2 = maxDays[1];

    // fixing expiration bug
    if (itemsRead.expires) {
      delete itemsRead.expires;
    }

    itemsRead = getFilteredItems(itemsRead, maxDays2 || maxDays1);

    Object.keys(itemsRead).forEach(function (id) {
      var timestamps = itemsRead[id];
      if (timestamps.length > 1) {
        addVal(cookieKey, id + '_2');
      } else if (dBetween(timestamps[0]) <= maxDays1) {
        addVal(cookieKey, id);
      }
    });

    ls.setJson(lsKey, itemsRead);
  }

  function lpMpKV() {
    if (mpDiscountAdsTrack.allow()) {
      addVal('lp', 'mp_intro');
    } else if (adsConf.activeMpAds && adsConf.activeMpAds.length > 0 && mpAdsTrack.allowMpAd()) {
      addVal('lp', 'mp');
    }
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function premiumRetargetingKV() {
    var MIN_NUMBER = 1,
        MAX_NUMBER = 7,
        visitKey = 'premium_landing_visited',
        versionNum;

    function isVisitedPremiumLanding() {
      return SA.Data.Cache.get(visitKey, true);
    }

    if(isVisitedPremiumLanding()) {
      versionNum = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
      addVal('p', 'pro_lp_rt_' + versionNum.toString());
    }
  }

  function getEtfArticlesReadCount() {
    // Gets count of ETF articles from ls in the up to 30 days and clears the old ones
    var k = 'etf_articles_read', itemsRead = ls.getJson(k);

    // fixing expiration bug

    if(itemsRead.expires) {
      delete itemsRead.expires;
    }

    Object.keys(itemsRead).forEach(function(id) {
      if (dBetween(itemsRead[id]) > 30) {
        delete itemsRead[id];
      }
    });

    ls.setJson(k, itemsRead);

    return Object.keys(itemsRead).length;
  }

  function sourceVal() {
    if (/^instream/.test(source)) {
      kvs.source = 'instream';
    } else if (source === 'fundmatch_profile_new') {
      kvs.source = 'fundmatch_profile_new';
    } else if (source === 'fundmatch_chart_new') {
      kvs.source = 'fundmatch_chart_new';
    } else if (source.match(/^(ad|td)_databoard_/) || source === 'market_event_calendar' || source === 'market_event_calendar_mn') {
      kvs.source = source;
    } else if (source === 'related_etf_left_card_ticker') {
      kvs.re = SA.pageConfig.Data.slug;
    }
  }

  function dashboardVal() {
    if (/investing-strategy\/financial-advisors$/.test(window.location.pathname)) {
      addVal('d', 'financial-advisors');
    }
  }

  function faq() {
    isBot = !(cs.get('h_px') || ls.get('h_px'));
    if (isBot) addVal('p', 'bot');
  }

  function pVal() {

    if (SA.App.pro && !SA.App.proPlus) {
      addVal('p', 'essential');
    }

    // Set p=4
    if (getEtfArticlesReadCount() >= 5) {
      addVal('p', '4');
    }

    // Set p=15
    if (isFirstImpression()) {
      addVal('p', '15');
    }

    var adBlockerValue = ls.get('ab');
    if(adBlockerValue){
      addVal('ab', adBlockerValue);
      ls.del('ab');
    }

    if (SA.App.mp) {
      addVal('p', 'mp_subscriber');
    }

    faq();
  }

  function rtaVal() {
    if (/email_rt/.test(source) && (/\/article\//).test(loc.href)) {
      addVal('rta', 't');
    }
  }

  function incVal() {
    // Add inc= key
    if (source === 'on_the_move_news_fidelity') {
      addVal('inc', 'on-the-move-news-fidelity');
    }

    if (location.href.match(/\/etfs-and-funds\/etf-screener/) || (document.referrer.match(/\/etfs-and-funds\/etf-screener/) && location.pathname.match(/^\/(symbol|article|news)\//))) {
      addVal('inc', 'etf-hub');
    }

    if (location.href.match(/\/market-outlook\/gold-and-precious-metals/) || document.referrer.match(/\/market-outlook\/gold-and-precious-metals/)) {
      addVal('inc', 'gold-precious');
    }

    if (document.referrer.match(/\/etfs-and-funds\/closed-end-funds/) || source === 'fundmatch_chart_nuveen') {
      addVal('inc', 'cefs');
    }

    if (document.referrer.split('?')[0].match(/\/investing-strategy(\/editors-picks|\/portfolio-strategy)?$/) || document.referrer.match(/\/insight\/investing-strategy\/article/)) {
      addVal('inc', 'investing-strategy');
    }

    if (location.href.match(/\/event-impact/) || (document.referrer.match(/\/event-impact/) && /\/article|news|author|symbol\//.test(location.href))) {
      addVal('inc', 'eventimpact');
    }

    if (document.referrer.match(/\/market-outlook\/global-investing/)) {
      addVal('inc', 'a_global_markets');
    }
  }

  function init() {

    // Set special=
    if (/(staging|dev)\./.test(loc.host)) {
      setVal('special', 'stagingtech');
    }

    // Set reg=t & u=user-id keys

    var uid = cs.get('user_id');

    if (uid) {
      setVal('reg', 't');
      setVal('u', uid);
    } else {
      setVal('reg', 'f');
    }

    if (adsConf.allowMarketVolKv) {
      setVal('marketvol', 't');
    }

    if (adsConf.allowMarketVolPercentageKv) {
      setVal('mvoldow', 't');
    }

    incVal();

    rtaVal();

    pVal();

    sourceVal();

    dashboardVal();

    lsKVs('landing_page', 'lp', [3]);
    lsKVs('pro_landing_page', 'lp', [7, 14]);

    lpMpKV();

    premiumRetargetingKV();

    replaceKeys();

    SA.trackq.push(['event', 'ad', 'kvs_init', {is_bot: isBot}]);
  }

  init();

  // PUBLIC FUNCTIONS

  return {

    get: function() {
      return kvs;
    },

    add: addVal,

    set: setVal,

    isBot: function(){ return isBot; }
  };

});
SA.define('SA.Ads.Logger', [], function() {

  'use strict';

  var log_entries = [];

  return {
    log: function(m) {
      log_entries.push(m + '\n' + Date.now());
    },

    showLog: function() {
      console.log(log_entries);
    },

    WRU: function() {
      return "SA.Ads.Logger defined in ads_logger.js";
    },

    getLog: function() {
      return log_entries;
    }
  };

});
SA.define('SA.Ads.DataTracker', [], function() {

  'use strict';

  var adsData = {}, slowAd = 5000;

  function ts() {
    return Date.now();
  }

  function slow(ad) {
    var loadTime;
    if(ad.renderTs && ad.onLoadTs) {
      loadTime = ad.onLoadTs - ad.renderTs;
      if(loadTime >= slowAd) {
        SA.trackq.push(['event', 'ad', 'slow_ad', {
          creativeId: ad.creativeId || 0,
          campaignId: ad.campaignId || 0,
          containerId: ad.containerId || 0,
          time: loadTime
        }]);
      }
    }
  }

  function n(v) {
    return v || null;
  }

  function get(e) {
    return adsData[e.slot.getSlotElementId()] || {};
  }

  function sendMoneEvent(event, adTrackingData, ad){
    var size = [];
    (ad.size || []).forEach(function(s){
      size.push(Array.isArray(s) ? s.join('x') : s);
    });
    var moneEventData = Object.assign({}, adTrackingData, {
      kvs: JSON.parse(ad.targetingData),
      size: size.join(','),
      slot: ad.slotName || '-'
    });
    try {
      SA.Logger.Mone.event('data_lake', 'gpt', event, { data: moneEventData })
    } catch(e){
      console.error("Error sending event");
    }
  }

  // PUBLIC FUNCTIONS

  return {

    getData: function() {
      return adsData;
    },

    start: function(name, size, containerId, targetingDataHash) {
      adsData[containerId] = {
        requestEvent: true,
        renderEvent: false,
        visibilityEvent: false,
        impressionEvent: false,
        requestTs: ts(),
        containerId: containerId,
        slotName: name,
        size: size,
        targetingData: JSON.stringify(targetingDataHash)
      };
    },

    onRender: function(e) {
      var ad = get(e), i = e.slot.getResponseInformation() || {};

      Object.assign(ad, {
        renderEvent: true,
        renderTs: ts(),
        backFill: !e.isEmpty && !e.creativeId,
        isEmpty: e.isEmpty,
        seviceName: e.serviceName,
        creativeId: n(i.creativeId),
        lineItemId: n(i.lineItemId),
        advertiserId: n(i.advertiserId),
        campaignId: n(i.campaignId),
        labelIds: n(i.labelIds),
        contentUrl: n(e.slot.getContentUrl())
      });

      var adTrackingData = {
        isEmpty: e.isEmpty,
        creativeId: parseInt(ad.creativeId) || 0,
        lineItemId: ad.lineItemId || 0,
        advertiserId: ad.advertiserId || 0,
        campaignId: ad.campaignId || 0,
        containerId: ad.containerId || 0
      };

      sendMoneEvent('render', adTrackingData, ad);

      if(e.isEmpty) {
        SA.trackq.push(['event', 'ad', 'empty', adTrackingData]);
      }

      if (SA.Ads.KVs.isBot()){
        SA.trackq.push(['event', 'ad', 'bot_render', adTrackingData]);
      }
    },

    onLoad: function(e) {
      var ad = get(e);

      Object.assign(ad, {
        onLoadEvent: true,
        onLoadTs: ts()
      });

      slow(ad);
    },

    impression: function(e) {
      var ad = get(e);
      ad.impressionEvent = true;
      ad.impressionTs = ts();
    },

    visible: function(e) {
      var ad = get(e);
      Object.assign(ad, {
        visibilityEvent: true,
        visibilityTs: ts(),
        initialVisibility: e.inViewPercentage
      });

      var adTrackingData = {
        isEmpty: e.isEmpty,
        creativeId: parseInt(ad.creativeId) || 0,
        lineItemId: ad.lineItemId || 0,
        advertiserId: ad.advertiserId || 0,
        campaignId: ad.campaignId || 0,
        containerId: ad.containerId || 0,
        visibility: e.inViewPercentage || 0
      };

      sendMoneEvent('visible', adTrackingData, ad);
    }

  };

});
// jshint maxparams: 6

SA.define('SA.Ads.TrafficDrivers', ['SA.dom.doc', 'SA.Data.Cache', 'SA.Fn.hoursBetween', 'SA.Fn.intersect', 'SA.dom.el', 'SA.AdsConf', 'SA.Ads.KVs'], function(doc, cs, hBetween, intersect, el, adsConf, adsKvs) {

  'use strict';

  var renderedIds = [], overrides = {}, backFills = {}, renderedTfs = [];

  function pickRandom(td){
    return td[Math.floor(Math.random() * td.length)];
  }

  function getPageKvs() {
    return Object.assign({}, SA.pageConfig.Ads.kvs || {}, adsKvs.get(), {usa: adsConf.isUSA, marketvol: adsConf.allowMarketVolKv, mvoldow: adsConf.allowMarketVolPercentageKv});
  }

  function pathsMatch(pPath, url){
    if (pPath === '/hp_old') {
      pPath = '/'
    }
    return url === '/' ? pPath === '/' : (new RegExp('^' + url)).test(pPath);
  }

  var excludeKvs = function(kvs, pageKvs) {
    var match = false;
    if(kvs) {
      kvs.forEach(function(kvsSet) {
        Object.keys(kvsSet).forEach(function(k) {
          pageKvs[k] = pageKvs[k] === undefined ? [] : pageKvs[k];
          if(intersect(Array.isArray(pageKvs[k]) ? pageKvs[k] : [pageKvs[k]], kvsSet[k]).length) {
            match = true;
          }
        });
      });
    }
    return match;
  };

  function kvsMatchPage(kvs, pageKvs){
    return kvs === '*' ? true : excludeKvs(kvs, pageKvs);
  }

  function checkFreq(lsKey, id, max) {
    var ts = cs.getJson(lsKey)[id] || [];
    return ts.length < max;
  }

  function checkTDFreq(td) {
    return td.frequency_cap ? checkFreq('traffic_drivers_shown', td.id, td.frequency_cap) : true;
  }

  function isMatched(td) {
    var pageKvs = getPageKvs();
    return kvsMatchPage(td.target_kvs, pageKvs) && !excludeKvs(td.exclude_kvs, pageKvs) && renderedIds.indexOf(td.id) === -1 && checkTDFreq(td);
  }

  function getTfForKvs(tds) {
    var matched = [];
    tds.forEach(function(td) {
      if(isMatched(td)) {
        matched.push(td);
      }
    });
    return pickRandom(matched);
  }

  function addToFrequencyCap(lsKey, id) {
    var itemsShown = cs.getJson(lsKey);
    itemsShown[id] = itemsShown[id] ? itemsShown[id].concat([Date.now()]) : [Date.now()];
    cs.setJson(lsKey, itemsShown);
  }

  function addTrafficDriversShown(td) {
    renderedIds.push(td.id);
    if (td.frequency_cap) {
      addToFrequencyCap('traffic_drivers_shown', td.id);
    }
  }

  function cleanFreqCap(lsKey) {
    var itemsShown = cs.getJson(lsKey);
    Object.keys(itemsShown).forEach(function(id) {
      itemsShown[id] = itemsShown[id].filter(function(ts) {
        if(hBetween(ts) <= 24){
          return ts;
        }
      });
      if(!itemsShown[id].length) {
        delete itemsShown[id];
      }
    });
    cs.setJson(lsKey, itemsShown);
  }

  function show(c, td, id) {
    c.innerHTML = td.html;
    el.removeClass([c], 'hidden');
    addTrafficDriversShown(td);
    renderedTfs.push(id);
  }

  function showTd(c, cId, td) {
    c.style.display = '';
    show(c, td, cId);
  }

  // dirty hack ro exec scripts from innerHTML
  function exec(html) {
    var m = html.match(/<script>(.+?)<\/script>/);
    if(m && m[1]) {
      eval(m[1]);
    }
  }

  function renderNonAd(rel) {
    var c, td;
    Object.keys(rel).forEach(function(id) {
      c = doc.id(id);
      if(c) {
        td = pickRandom(rel[id]);
        show(c, td, td.id);
        exec(td.html);
      }
    });
  }

  function handleNonAd(tds) {
    var relevant = {};
    tds.forEach(function(td) {
      if (isMatched(td)){
        relevant[td.container_id] = relevant[td.container_id] || [];
        relevant[td.container_id].push(td);
      }
    });
    renderNonAd(relevant);
  }

  function nonAdDrivers(){
    Object.keys(adsConf.nonAdTrafficDrivers).forEach(function(url) {
      if (pathsMatch(location.pathname, url)){
        handleNonAd(adsConf.nonAdTrafficDrivers[url]);
      }
    });
  }

  function init() {
    cleanFreqCap('traffic_drivers_shown');
    cleanFreqCap('mp_recommendations_shown');
    cleanFreqCap('mp_recommendations_clicked');
    nonAdDrivers();
  }

  init();

  return {
    show: function(cId, td){
      var c = doc.id(cId);
      if(c) {
        showTd(c, cId, td);
      }
    },

    filter: function(){
      Object.keys(adsConf.adTrafficDrivers || {}).forEach(function(url) {
        if(pathsMatch(location.pathname, url)){
          Object.assign(overrides, adsConf.adTrafficDrivers[url].ad_override);
          Object.assign(backFills, adsConf.adTrafficDrivers[url].ad_backfill);
        }
      });
    },

    override: function(cid) {
      if(overrides[cid]){
        return getTfForKvs(overrides[cid]);
      }
    },

    backFill: function(cid) {
      if(backFills[cid]){
        return getTfForKvs(backFills[cid]);
      }
    },

    reset: function() {
      renderedIds = [];
    }
  };

});

SA.define('SA.Ads.Fallback', ['SA.Ads.Logger', 'SA.Ads.TrafficDrivers'], function(l, td) {

  'use strict';

  return {
    run: function(cid) {
      if (cid == 'partner_news_single_link_1' || cid == 'partner_news_single_link_2') {
        $('#partner-headlines').find('.symbol_articles_list li.hidden').first().removeClass('hidden');
      } else {
        var backFill = td.backFill(cid);
        if (backFill) {
          td.show(cid, backFill);
          l.log('Traffic Driver no override:: ' + cid);
        }
      }
    }
  };

});
// jshint maxparams: 10

SA.define('SA.Ads.Gpt', ['SA.Ads.enabled', 'SA.Ads.Fallback', 'SA.Ads.Logger', 'SA.Ads.DataTracker', 'SA.dom.el', 'SA.dom.doc', 'SA.Ads.KVs', 'SA.mark'], function(enabled, fallback, l, dt, el, doc, kvs, mark) {

  'use strict';

  var firstAdRequested = false, firstAdRendered = false, firstAdLoaded = false, firstAdVisible = false, firstAdImpression = false;

  var w = window,
    hpHeightReservedAd = {
      classToRemove: 'h600',
      containerId: 'DFP_1',
      isHP: window.location.pathname==='/' || window.location.pathname==='/hp_refactor'
    };

  function setPageTargeting(targeting) {
    SA.exec(function() {
      l.log('Page Targeting: '  + JSON.stringify(targeting));
    });
    Object.keys(targeting).forEach(function(k) {
      w.googletag.pubads().setTargeting(k, targeting[k]);
    });
  }

  function eId(e) {
    return e.slot.getSlotElementId();
  }

  function logRender(e) {
    var id = eId(e);
    l.log('Render:: ' + id + (e.isEmpty ? '  EMPTY' : ''));
    dt.onRender(e);
  }

  function slotLoad(e) {
    var id = eId(e);
    l.log('Loaded:: ' + id);
    if(!firstAdLoaded) {
      firstAdLoaded = true;
      mark('Ad Load');
    }
    dt.onLoad(e);
    removeHeightReserveClasses(id);
  }

  function removeHeightReserveClasses(cid){
    if(hpHeightReservedAd.isHP && cid===hpHeightReservedAd.containerId){
      el.removeClass([doc.id(cid)], hpHeightReservedAd.classToRemove);
    }
  }

  function slotRender(e) {
    var cid = eId(e);
    logRender(e);
    if(!firstAdRendered) {
      firstAdRendered = true;
      mark('Ad Render');
    }
    return e.isEmpty ? fallback.run(cid) : el.addClass([doc.id(cid)], 'ad_container_loaded');
  }

  function slotImpression(event) {
    dt.impression(event);
    if(!firstAdImpression) {
      firstAdImpression = true;
      mark('Ad Impression');
    }
  }

  function slotVisible(event) {
    dt.visible(event);
    if(!firstAdVisible) {
      firstAdVisible = true;
      mark('Ad Visible');
    }
  }

  function kruxTargeting() {
    if(w.Krux) {
      if(w.Krux.segments) {
        w.googletag.pubads().setTargeting('ksg', w.Krux.segments);
      }
      if(w.Krux.user) {
        w.googletag.pubads().setTargeting('kuid', w.Krux.user);
      }
    }
  }

  function slotRequested() {
    if(!firstAdRequested) {
      firstAdRequested = true;
      mark('Ad Requested');
    }
  }

  function init() {
    mark('GPT INIT');
    w.googletag = w.googletag || {};
    w.googletag.cmd = w.googletag.cmd || [];
    if(enabled) {
      w.googletag.cmd.push(function () {
        mark('GPT LOADED');
        w.googletag.pubads().disableInitialLoad();
        w.googletag.pubads().addEventListener('slotRequested', slotRequested);
        w.googletag.pubads().addEventListener('slotRenderEnded', slotRender);
        w.googletag.pubads().addEventListener('impressionViewable', slotImpression);
        w.googletag.pubads().addEventListener('slotVisibilityChanged', slotVisible);
        w.googletag.pubads().addEventListener('slotOnload', slotLoad);
        w.googletag.pubads().setSafeFrameConfig({
          allowOverlayExpansion: true,
          allowPushExpansion: true
        });
        kruxTargeting();
        setPageTargeting(kvs.get());
        SA.log('SRA ' + w.googletag.pubads().enableSingleRequest());
        w.googletag.enableServices();
      });
    } else {
      SA.log('ADS DISABLED');
    }
  }

  function setSlotTargeting(slot, targeting) {
    Object.keys(targeting).forEach(function(k) {
      slot.setTargeting(k, targeting[k]);
    });
  }

  function googletagPubads(ads) {
    mark('Ad googletagPubads start');
    var ref = [];
    w.googletag.pubads().getSlots().forEach(function(slot) {
      var slotElementId = slot.getSlotElementId();
      if(ads[slotElementId]) {
        ref.push(slot);
        SA.log('GPT display ' + slotElementId);
        w.googletag.display(slotElementId);
      }
    });
    w.googletag.pubads().refresh(ref);
    mark('Ad googletagPubads end');
  }

  function isMoatReady() {
    return window.moatPrebidApi && typeof window.moatPrebidApi.slotDataAvailable == "function" &&
           window.moatPrebidApi.slotDataAvailable();
  }

  init();

  return {

    init: init,

    setPageTargeting: function(kvs) {
      kvs = kvs || {};
      setPageTargeting(kvs);
    },

    define: function(ad, cid) {
      if(enabled) {
        w.googletag.cmd.push(function () {
          SA.exec(function() {
            l.log('Starting: '  + cid + ' ' + ad.name + ', size: ' + ad.size + ', containerId: ' + cid + ', targeting: ' + JSON.stringify(ad.targeting));
          });
          dt.start(ad.name, ad.size, cid, ad.targeting);
          SA.log('GPT define ' + cid);
          var collapseEmptyDivValue = ad.disable_collapse_empty_div ? false : true;
          setSlotTargeting(w.googletag.defineSlot(ad.name, ad.size, cid).addService(w.googletag.pubads()).setCollapseEmptyDiv(collapseEmptyDivValue, collapseEmptyDivValue), ad.targeting);
        });
        SA.gptInit = true; // recoverPOC
      }
    },

    display: function(ads) {
      if(enabled) {
        mark('Ad Display');
        w.googletag.cmd.push(function() {
          if (window.skipMoat) {
            if (SA.App.gptHeaderTest) {
              if (isMoatReady()) {
                window.moatPrebidApi.setMoatTargetingForAllSlots();
                SA.log("gptHeaderTest. MOAT READY");
              } else {
                SA.log("gptHeaderTest. MOAT NOT READY");
              }
            }
            googletagPubads(ads);
            SA.log("MOAT is not running. Run Ads");
            return;
          }
          mark('Ad Display CMD PUSH START');
          var moatInterval,
            moatIntervalCount = 0;
          if (isMoatReady()) {
            window.moatPrebidApi.setMoatTargetingForAllSlots();
            googletagPubads(ads);
            SA.log("Moat was ready setMoatTargetingForAllSlots()");
            mark('Ad Display CMD PUSH END 1');
          } else {
            moatInterval = setInterval(function() {
              moatIntervalCount++;
              if (isMoatReady()) {
                clearInterval(moatInterval);
                window.moatPrebidApi.setMoatTargetingForAllSlots();
                googletagPubads(ads);
                SA.log("Call when ready setMoatTargetingForAllSlots()");
                mark('Ad Display CMD PUSH END 2');
              } else if (moatIntervalCount > 20) {   // 50ms * 20times = 1 sec
                clearInterval(moatInterval);
                googletagPubads(ads);
                SA.log("Stop requesting MOAT on interval count too big");
                mark('Ad Display CMD PUSH END 3');
              }
            }, 50);
          }
        });
      }
    },

    destroy: function(cids) {
      if(enabled) {
        w.googletag.cmd.push(function() {
          var destroy = [], id;
          w.googletag.pubads().getSlots().forEach(function(slot) {
            id = slot.getSlotElementId();
            if(cids.indexOf(id) !== -1) {
              l.log('GPT destroy ' + id);
              destroy.push(slot);
            }
          });
          w.googletag.destroySlots(destroy);
        });
      }
    }

  };

});
// singleton
SA.define('SA.Ads.Bids.ApsLoader', ['SA.mark'], function (m) {

  'use strict';

  var SETTINGS = {
    pubID: 'cdbcf66d-dd07-47ac-aaca-2a2aafd25839',
    adServer: 'googletag'
  };

  var w = window,
    scope = {
      scriptLoadStarted: false,
      scriptLoaded: false,
      scriptError: false,
      loadVendorScripts: loadVendorScripts
    };

  return scope;

  function loadVendorScripts() {
    try {
      if (scope.scriptLoadStarted || SA.App.gptHeaderTest) {
        return false;
      }
      scope.scriptLoadStarted = true;
      m('BID_MANAGER ApsLoader init');
      /**
       * https://ams.amazon.com/webpublisher/uam/docs/get-started/integrating-alongside-prebid.html
       */
      !function (a9, a, p, s, t, A, g) {
        if (a[a9]) return;

        function q(c, r) {
          a[a9]._Q.push([c, r])
        }

        a[a9] = {
          init: function () {
            q("i", arguments)
          }, fetchBids: function () {
            q("f", arguments)
          }, setDisplayBids: function () {
          }, targetingKeys: function () {
            return []
          }, _Q: []
        };
        A = p.createElement(s);
        A.async = !0;
        A.src = t;
        g = p.getElementsByTagName(s)[0];
        g.parentNode.insertBefore(A, g)
      }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

      //set APS config
      w.apstag.init(SETTINGS, function () {
        scope.scriptLoaded = true;
        m('BID_MANAGER ApsLoader apstag.init finished.');
      });
    } catch (e) {
      scope.scriptError = true;
      console.log('SA.Ads.ApsLoader | Error occured in loadVendorScripts.', e);
    }
  }

});
SA.define('SA.Ads.Bids.Aps', ['SA.Fn.param', 'SA.mark', 'SA.Ads.Bids.ApsLoader'], function (param, m, apsLoader) {

  'use strict';

  var w = window;
  return ApsCtor;

  function ApsCtor(id, biddingUnits, reqManagerCallback) {
    this.isActive = isActive();

    // runs only once
    if(this.isActive){
      apsLoader.loadVendorScripts();
    }

    this.biddingUnits = biddingUnits;
    this.run = run.bind(this);
    this.id = id;

    function isActive(){
      return true;
    }

    function run() {
      if (this.isActive && biddingUnits.length && !apsLoader.scriptError) {
        SA.log(['BID_MANAGER APS - before fetchBids call', id, biddingUnits, apsLoader]);

        SA.exec(function () {
          w.apstag.fetchBids(
            {slots: biddingUnits},
            function (bidResponses) {
              SA.log(['BID_MANAGER APS - bidsBackHandler', id, biddingUnits, apsLoader, bidResponses]);
              SA.exec(function () {
                reqManagerCallback('aps', bidResponses);
              });
            }
          );
        });

        return true;
      } else {
        SA.log(['BID_MANAGER APS - run aborted', id, biddingUnits, apsLoader]);
        return false;
      }
    }

  }

});
SA.define('SA.Ads.Bids.BidManager', ['SA.mark', 'SA.AdsConf', 'SA.Ads.Gpt', 'SA.Ads.enabled', 'SA.Ads.Bids.Aps', 'SA.Fn.param'], function (m, adsConf, gpt, adsEnabled, Aps, param) {
  'use strict';

  var TIMEOUT = 2000/*ms*/,
    w = window,
    ALLOWED_TILES = [1, 3, 5, 7, 9, 160, 728];

  BidManagerCtor.isActive = isActive();
  return BidManagerCtor;

  function isActive() {
    // disable_prebid qs params is also used to disable aps bidding
    return adsEnabled && !(/disable_prebid/).test(w.location.href);
  }

  function BidManagerCtor(ads) {
    m('BID_MANAGER BidManager init');
    SA.log(['BID_MANAGER BidManager init', ads]);

    // to safely access gpt
    w.googletag = w.googletag || {};
    w.googletag.cmd = w.googletag.cmd || [];

    this.run = run.bind(this);
    this.ads = ads;
    this.biddingUnits = adsMapper(this.ads);

    // need an id for each call to run to diff in logs etc.
    this.id = simpleHash(this.biddingUnits.codes.join(':::'));
    SA.log(['BID_MANAGER BidManager generated id for ads', this.id]);
    /**
     * @type {{aps: boolean, adserverRequestSent: boolean, responses: Array}}
     */
    this.requestManager = {
      aps: false,  // aps response arrived
      adserverRequestSent: false,  // already sent adserver req
      responses: {} // for debugging
    };

    /**
     * Called when a bidder returns
     * @param bidder - "aps"
     * @param bidResponses - service response object
     * @returns {boolean}
     */
    function headerBidderBack(bidder, bidResponses) {
      SA.log(['BID_MANAGER bidder back is ', bidder]);
      SA.log(['BID_MANAGER BidManager headerBidderBack', this.id, this, bidder, bidResponses, this.requestManager.responses]);

      this.requestManager[bidder] = true;
      this.requestManager.responses[bidder] = bidResponses;
      if (!this.aps.isActive || this.requestManager.aps) {
        if (!this.requestManager.adserverRequestSent) {
          SA.log(['BID_MANAGER BidManager calling initAdServer', this.id, this]);
          return initAdServer.call(this);
        }
      }

      return false;

    }

    /**
     * Maps ads to structures needed for aps calls
     * @param ads
     * @returns {{codes: Array, apsUnits: Array}}
     */
    function adsMapper(ads) {
      var apsUnits = [],
        codes = [];

      Object.keys(ads).forEach(function (k) {
        var ad = ads[k];
        var targeting = !!ad && ad.targeting;
        var tile = !!targeting && targeting.tile;
        var allowed = !!tile && ALLOWED_TILES.indexOf(tile) > -1;


        if (allowed) {
          apsUnits.push({
            slotID: k,
            slotName: ad.name,
            sizes: ad.size
          });

          codes.push(k);
        }
      });

      return {
        codes: codes,
        apsUnits: apsUnits
      };
    }

    /**
     * Debug function - depends on qs params 'bidder_debug'
     * (for aps)
     */
    function tests() {
      if (param('bidder_debug')) {
        SA.log('this.requestManager.responses', this.requestManager.responses);
      }
    }

    /**
     * Ad call to gpt
     * @returns {boolean}
     */
    function initAdServer() {

      // return early if request already sent
      if (this.requestManager.adserverRequestSent === true) {
        return false;
      }
      this.requestManager.adserverRequestSent = true;

      m('BID_MANAGER BidManager.initAdServer');

      w.googletag.cmd.push(onDone.bind(this));

      function onDone() {
        w.apstag && w.apstag.setDisplayBids();

        gpt.display(this.ads);
        tests.call(this);
        m('BID_MANAGER initAdServer: onDone');
      }
    }

    function run() {
      SA.log(['BID_MANAGER BidManager run called', this.id, this]);

      // if no bidding units - pass directly to GPT
      if (!this.biddingUnits.codes.length) {
        SA.log(['BID_MANAGER Skipping Aps - no units for bidding', this.id, this]);
        return gpt.display(this.ads);
      }

      var cb = headerBidderBack.bind(this);

      window.setTimeout(SA.exec.bind(SA, initAdServer.bind(this)), TIMEOUT);

      this.aps = new Aps(this.id, this.biddingUnits.apsUnits, cb);
      SA.exec(this.aps.run.bind(this.aps));
    }
  }

  function simpleHash(d) {
    var e, b = 0x811c9dc5;
    var c = 0;
    for (e = d.length; c < e; c++) b ^= d.charCodeAt(c), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
    return ("0000000" + (b >>> 0).toString(16)).substr(-8)
  }

});
SA.define('SA.Ads.AdTargeting', ['SA.dom.env'], function(env) {

  'use strict';

  function refreshed(ad) {
    // jshint singleGroups: false
    var refKV;
    if(!ad.targeting.r) {
      ad.targeting.r = env.source() === 'refreshed' ? 't' : 'f';
    }
    refKV = [].concat(Array.isArray(ad.targeting.r) ? ad.targeting.r : [ad.targeting.r]);
    ad.name = (refKV.length && refKV.indexOf('t') !== -1) ? ad.name.replace('non-refresh', 'refresh') : ad.name.replace(/refresh/, 'non-refresh').replace(/non-non-/, 'non-');
  }

  function peers(ad) {
    var peersKv = user_cookie && 'nopr';
    if (peersKv && ad.targeting && ad.targeting.tile == 50 && document.location.pathname.match(/^\/(article|news)\//)) {
      ad.targeting.tv = peersKv;
    }
  }

  function updateKVs(ad) {
    refreshed(ad);
    peers(ad);
    return ad;
  }

  return {
    update: function(ad) {
      ad.targeting = ad.targeting || {};
      return updateKVs(ad);
    }
  };

});
SA.define('SA.Utils.Ads', ['SA.dom.doc', 'SA.dom.win', 'SA.dom.el', 'SA.Fn.ajax', 'SA.Ads.TrafficDrivers', 'SA.AdsConf', 'SA.Ads.Logger', 'SA.Ads.Gpt', 'SA.Ads.Fallback', 'SA.Ads.AdTargeting', 'SA.Ads.Bids.BidManager', 'SA.Ads.MpAdsTrack', 'SA.Ads.enabled', 'SA.Ads.MpDiscountAdsTrack', 'SA.mark'], function(doc, win, elem, ajax, tfs, adsConf, logger, gpt, fallback, adTargeting, BidManager, mpAdsTrack, adsEnabled, mpDiscountAdsTrack, m) {

  'use strict';

  var config = SA.pageConfig || {};

  adsConf.disabledAds = adsConf.disabledAds || [];

  function getPath(p) {
    p = p || win.ref.location.pathname;
    return p[p.length - 1] !== '/' ? (p + '/') : p;
  }

  function resizeHeight(h, el){
    if(h && el) {
      el.setAttribute('resized', 'true');
      el.style.height = h + 'px';
    }
  }

  function resizeWidth(w, el){
    if(w && el) {
      el.style.width = w + 'px';
    }
  }

  function disabled(adSize, path) {
    var dis = false, i = 0, len = adsConf.disabledAds.length;

    path = getPath(path);

    while(i < len) {
      if(adsConf.disabledAds[i][1] === adSize && (adsConf.disabledAds[i][0] === '/' ? path === '/' : new RegExp('^'+ adsConf.disabledAds[i][0]).test(path))) {
        dis = true;
        break;
      }
      i += 1;
    }

    return dis;
  }

  function defineAd(ads, k) {
    var over = tfs.override(k);
    if(over) {
      tfs.show(k, over);
      logger.log('Traffic Driver Dfp Override:: ' + k);
    } else if(!disabled(ads[k].str) && adsEnabled){
      gpt.define(ads[k], k);
    } else {
      fallback.run(k);
      logger.log('Disabled Ad:: ' + ads[k].str);
    }
  }

  function defineAds(ads) {
    tfs.filter();

    Object.keys(ads).forEach(function(k) {
      var currObj = ads[k];
      adTargeting.update(currObj);
      defineAd(ads, k);
    });
  }

  function requestAds(ads) {
    if(BidManager.isActive) {
      SA.log(['Passing To BidManager', ads]);
      var bidManager = new BidManager(ads);
      return bidManager.run();
    } else {
      SA.log(['Requesting GPT(BidManager not active)', ads]);
      return gpt.display(ads);
    }
  }

  return {
    resizeIframeHeightWidth: function(h, w, n) {
      var iframe = doc.ref.querySelector('[name="'+ n +'"]');
      resizeHeight(h, iframe);
      resizeWidth(w, iframe);
    },

    resizeIframe: function(h, n){
      resizeHeight(h, document.querySelector('[name="'+ n +'"]'));
    },

    setPageTargeting: function(kvs) {
      gpt.setPageTargeting(kvs);
    },

    define: function(ads) {
      m('ads utils, define() - start')
      SA.log(['defineAds', ads]);
      m('ads utils, defineAds() - start')
      defineAds(ads);
      m('ads utils, requestAds() - start')
      requestAds(ads);
      m('ads utils, define() - end')
    },

    destroy: function(ads) {
      var cids = [];
      ads.forEach(function(ad) {
        cids.push(ad.container);
      });
      gpt.destroy(cids);
    },

    impression: function(img, hrf) {
      var random = Date.now() + config.machineID, imgEl = doc.ref.createElement('IMG'), a = doc.ref.createElement('A');
      imgEl.setAttribute('src', img + '&' + random);
      imgEl.setAttribute('alt', 'Advertisement');
      elem.addClass([imgEl], 'sa_impress');

      a.setAttribute('href', hrf + '&' + random);
      a.appendChild(imgEl);
      doc.body.appendChild(a);

      logger.log('impression: ' + img + random);
    },

    getLatest: function(slug, callback) {

      var str = [];

      if(!slug || !$.isFunction(callback)) {
        return false;
      }

      ajax('/qp_latest_fund/' + slug, function(res) {
        res = res || [];

        if(res.length) {
          str.push('<ul>');
          res.forEach(function(r) {
            str.push('<li><div class="desh">-</div><div class="latest_link"><span onclick="top.location.href = SA.App.host + (r.url || \'#\') + \'?source=fundmatch_3\'">' + (r.title || '') + '</span><span class="created_on">' + ' ' + (r.created_on || ' ') + '</span></div></li>');
          });
          str.push('</ul>');
        }

        callback(str.join(''));

      });
    },

    avgImpHeight: function(sizes) {
      var h = 0;
      sizes = sizes || [];
      sizes.forEach(function(sz) {
        h += Array.isArray(sz) ? (sz[1] || 100) : 100;
      });
      return Math.round((h / sizes.length || 100) * 0.5);
    },

    getFundmatchAdData: function(symbol, success) {
      ajax('/ads_data/fundmatch_ad_data?symbol=' + symbol, function(data) {
        success(data);
      });
    },

    getMpAd: function(success) {
      var serviceId = mpAdsTrack.getServiceIdForDisplay();
      if (serviceId) {
        ajax('/ads_data/mp_ad_data?service_id=' + serviceId, function(data) {
          success(mpAdsTrack.createAd(data));
        });
      }
    },

    getMpDiscountAd: function(success, size) {
      var serviceId = mpDiscountAdsTrack.getServiceIdForDisplay();
      if (serviceId) {
        ajax('/ads_data/mp_discount_ad_data?service_id=' + serviceId, function(data) {
          success(mpDiscountAdsTrack.createAd(data, size));
        });
      }
    },

    getVideoAdData: function (success, playlistId) {
      ajax('/ads_data/video_ad_data?playlist_id=' + playlistId, function(data) {
        success(data);
      });
    },

    isDisabled: function (size) {
      return disabled(size);
    }

  };
});
// jshint maxparams: 10

SA.define('SA.Ads.Sticky', ['SA.dom.doc', 'SA.dom.win', 'SA.dom.scroll', 'SA.dom.event', 'SA.dom.el', 'SA.dom.sticky', 'SA.Fn.throttle', 'SA.AdsConf', 'SA.Utils.Ads', 'SA.Fn.diff', 'SA.Data.Cookies', 'SA.Data.Cache', 'SA.dom.env'], function(doc, win, scroll, ev, el, sticky, throttle, adsConf, adsUtil, diff, cookies, cache, env) {

  'use strict';

  var cont = doc.id('article-sticky-ads');
  var mainCont = doc.id('main_content') || doc.id('main-container') || doc.id('main_container');
  var tracking = false, initialized = false;
  var maxAds = (win.ref.location.href.match(/\/etfs-and-funds\/closed-end-funds/) ||
    win.ref.location.href.match(/\/market-outlook\/gold-and-precious-metals/) ||
    doc.ref.referrer.match(/\/etfs-and-funds\/etf-screener/) ||
    win.ref.location.href.match(/\/etfs-and-funds\/etf-screener/) ||
    env.source() === 'on_the_move_news_fidelity' ||
    (doc.ref.referrer.match(/\/market-outlook\/gold-and-precious-metals/) && location.pathname.match(/^\/article\//))) ? 1 : parseInt(adsConf.stickyConf.ads_limit, 10);
  var margin = 25, scrollDist = parseInt(adsConf.stickyConf.sticky_duration, 10) + margin, available, sum;

  var cRefs = [], expendedCRef = [], requestedCRef = [];
  var lastHeight = 0;

  function vars() {
    available = 0;
    sum = 0;
    cRefs = [];
    expendedCRef = [];
    requestedCRef = [];
  }

  function spaceLeft() {
    return available - scrollDist * (expendedCRef.length + requestedCRef.length);
  }

  function expandNode(node, left, last) {
    var height = left - scrollDist < scrollDist ? left : scrollDist;
    if(!last) {
      sum += height;
    }
    el.setStyles([node.wrapper], {
      height: height + 'px',
      margin: '25px 0 0 0'
    });
    expendedCRef.push(node);
  }

  function expandAll() {
    var left, length = cRefs.length, cp = [];
    cRefs.forEach(function(node, i) {
      if(scroll.closeToElement(node.wrapper, win.height())) {
        left = spaceLeft();
        return (left >= scrollDist) ? expandNode(node, left, length - 1 === i) : cp.push(node);
      }
      cp.push(node);
    });
    cRefs = cp;
  }

  function expandLast(force) {
    var len = expendedCRef.length + requestedCRef.length, newH;
    if(len === maxAds) {
      newH = available - margin - sum;
      if(newH !== lastHeight || force) {
        lastHeight = newH;
        cont.lastChild.style.height = lastHeight + 'px';
      }
    }
  }

  function expand(force) {
    if(cRefs.length) {
      expandAll();
    }
    expandLast(force);
  }

  function getSize(type, data, tile) {
    data.size = data.size || [];
    var outval = type === 'flex' ? diff(data.size, ['fluid']) : data.size;

    if (cookies.get('user_id') && tile >= 9 && type === 'flex') {

      // can not do
      // outval = diff(outval, [[300, 600]]);
      // because outval does shallow comparison
      outval = outval.filter(function (it) {
        return !Array.isArray(it) || !(it[0] == 300 && it[1] == 600);
      });

    }
    return outval;
  }

  function adWithTargeting(cid, type, tile) {
    var d = SA.pageConfig.Ads.slots.filter(function(ad){
      return ad[type];
    })[0], ad = {};
    if(!d) {
      return null;
    }

    ad[cid] = Object.assign({}, d ? d.data : {}, {size: getSize(type, d.data, tile)});
    ad[cid].targeting = Object.assign({}, ad[cid].targeting, {tile: tile});

    return {def: ad, size: ad[cid].size || []};
  }

  function requestAds(ads) {
    if(Object.keys(ads).length) {
      adsUtil.define(ads);
    }
  }

  function stick(node) {
    if(!node.sticky) {
      sticky.add(node.adCont, {
        bottomSpacing: function() {
          return doc.height() - (win.scrollTop() + node.wrapper.getBoundingClientRect().bottom);
        }
      });
      node.sticky = true;
    }
  }

  function requestVisible() {
    var ads = {}, cp = [];
    expendedCRef.forEach(function(node) {
      if(node.ad && scroll.inVerticalView(node.wrapper, node.avgImpHeight + margin)) {
        Object.assign(ads, node.ad);
        stick(node);
        requestedCRef.push(node);
      } else {
        cp.push(node);
      }
    });
    expendedCRef = cp;
    requestAds(ads);
  }

  function tracker(force) {
    var updated = mainCont.offsetHeight - (el.offsetTop(cont) + win.scrollTop());
    if(available !== updated) {
      available = updated;
    }
    expand(force);
    if(expendedCRef.length) {
      requestVisible();
    }
  }

  function frameTracker() {
    win.requestAnimationFrame(tracker);
  }

  function insertNode(id) {
    var n = doc.ref.createElement('DIV'), adCont = doc.ref.createElement('DIV'), cid = 'sticky-ad-' + (id + 1), ad = adWithTargeting(cid, id % 2 === 0 ? 'flex': 'native', 3 + id);
    n.id = 'sticky-ad-container-' + (id + 1);
    n.style.height = '0px';
    adCont.id = cid;
    n.appendChild(adCont);
    cRefs.push({
      wrapper: n,
      expended: false,
      requested: false,
      adCont: adCont,
      ad: ad.def,
      avgImpHeight: adsUtil.avgImpHeight(ad.size)
    });
    cont.appendChild(n);
  }

  function insertNodes() {
    var i = 0;
    while(i < maxAds) {
      insertNode(i);
      i += 1;
    }
  }

  function extenderEvent() {
    if(!tracking) {
      ev.addEventListener(win.ref, 'scroll', throttle(frameTracker, 100));
      tracking = true;
    }
  }

  function initialize(force) {
    extenderEvent();
    insertNodes();
    if(force) {
      tracker(force);
    }
  }

  function allowed() {
    return cont && (SA.pageConfig.Ads || {}).testScroll;
  }

  function init(force) {
    if(allowed()) {
      vars();
      initialize(force);
    }
  }

  function destroy() {
    var cids = [], els = [];
    requestedCRef.forEach(function(wrap) {
      cids.push({container: wrap.adCont.id});
      els.push(wrap.adCont);
    });
    adsUtil.destroy(cids);
    sticky.destroy(els);
    if(cont) {
      cont.innerHTML = '';
    }
  }

  return {
    init: function() {
      if(!initialized) {
        init(false);
        initialized = true;
      }
    },

    restart: function() {
      if(allowed()) {
        destroy();
        init(true);
      }
    },

    destroy: function() {
      destroy();
    }
  };

});
// jshint maxparams: 15

SA.define('SA.Ads.Initializer', ['SA.mark', 'SA.dom.win', 'SA.dom.el', 'SA.dom.scroll', 'SA.Fn.throttle', 'SA.Fn.unique', 'SA.Fn.diff', 'SA.readCookie', 'SA.dom.event', 'SA.dom.env', 'SA.dom.sticky', 'SA.Ads.TrafficDrivers', 'SA.Ads.Sticky', 'SA.Ads.crossDomain', 'SA.Utils.Ads'], function(m, win, el, scroll, throttle, unique, diff, rc, ev, env, sticky, tds, stickyAds, crossDomain, adsUtils) {

  'use strict';

  var conf = SA.pageConfig.Ads || {}, load = {}, delay = [], delayShown = [], observer, noRefresh = {};

  // get rid of this logic when possible
  function icSiteAndZone() {
    var ic = null;
    var s = env.source();
    if (s) {  // Set site&zone for market news when it came from ic pages
      switch(s) {
        case 'dividend_investing_ic_news':
          ic = '/6001/sek.insight/dividend-investing';
          break;
        case 'ps_ic_asset_class_news_click':
          ic = '/6001/sek.insight/portfolio-strategy';
          break;
      }
    }
    return ic;
  }

  function vars() {
    load = {};
    delay = [];
    delayShown = [];
  }

  function addVal(target, k, val) {
    // jshint singleGroups: false

    if(target[k] === val) {
      return false;
    }
    if(!target[k]) {
      target[k] = val;
      return true;
    }

    target[k] = unique([].concat((Array.isArray(target[k]) ? target[k] : [target[k]]), (Array.isArray(val) ? val : [val])));
  }

  function removeVal(target, k, val) {
    // jshint singleGroups: false

    if(target[k] === val) {
      delete target[k];
      return true;
    }

    target[k] = diff((Array.isArray(target[k]) ? target[k] : [target[k]]), (Array.isArray(val) ? val : [val]));
  }

  function addTargeting(slot, kvs) {
    Object.keys(kvs).forEach(function(k) {
      addVal(slot.data.targeting, k, kvs[k]);
    });
  }

  function removeTargeting(slot, kvs) {
    Object.keys(kvs).forEach(function(k) {
      if(slot.data.targeting[k]) {
        removeVal(slot.data.targeting, k, kvs[k]);
      }
    });
  }

  function updateSiteZone(siteZone) {
    conf.slots.forEach(function (slot) {
      var regex = new RegExp('^(\/6001\/sek\.).*(\/dashboard-refresh|\/dashboard-non-refresh)$', 'g');
      slot.data.name = slot.data.name.replace(regex, '$1' + siteZone + '$2');
    });
  }

  function updateKVs(addKVs, removeKVs, serverKVs) {
    if(removeKVs && Object.keys(removeKVs).length) {
      conf.slots.forEach(function(slot){
        removeTargeting(slot, removeKVs);
      });
    }
    if(addKVs && Object.keys(addKVs).length) {
      conf.slots.forEach(function(slot){
        addTargeting(slot, addKVs);
      });
    }
    adsUtils.setPageTargeting(serverKVs);
  }

  function clearEvents() {
    if(observer) {
      ev.removeEventListener(win.ref, 'scroll', observer);
      ev.removeEventListener(win.ref, 'resize', observer);
      observer = null;
    }
  }

  function cidsToDestroy() {
    var cIds = [];
    delay.concat(delayShown).forEach(function(ad) {
      if(!noRefresh[ad.container]) {
        cIds.push({container: ad.container});
      }
    });
    Object.keys(load).forEach(function(cid) {
      if(!noRefresh[cid]) {
        cIds.push({container: cid});
      }
    });
    return cIds;
  }

  function setPrimary() {
    // jshint singleGroups: false

    var data = SA.pageConfig && SA.pageConfig.Data;
    win.ref.primaryTickerSlug = (data && data.primaryTicker) || '';
  }

  function adjustAdSlot(slot) {
    if(slot.cls) {
      el.addClass([document.getElementById(slot.container)], slot.cls);
    }
  }

  function initSticky(ad) {
    if(ad.sticky) {
      sticky.add(document.getElementById(ad.container), typeof ad.sticky === 'object' ? {bottomSpacing: parseInt(ad.sticky.bottom, 10) || 0} : {});
    }
  }

  function notRefreshable(ad) {
    if(ad.nr && !noRefresh[ad.container]) {
      noRefresh[ad.container] = ad;
      return false;
    }
    return ad.nr && noRefresh[ad.container];
  }

  function setAvgHeight(ad) {
    ad.avgImpHeight = adsUtils.avgImpHeight(ad.data && ad.data.size);
  }

  function processAd(ad) {
    if(notRefreshable(ad)) {
      return false;
    }
    adjustAdSlot(ad);
    initSticky(ad);
    if(ad.delay) {
      setAvgHeight(ad);
      delay.push(ad);
    } else {
      load[ad.container] = ad.data;
    }
  }

  function renderDelayed() {
    var ads = {}, i = delay.length - 1;
    while(i >= 0) {
      var currDelayObj = delay[i];
      var currCont = currDelayObj.container;
      var avgImpHeightScrolled = currCont && scroll.closeToElement(document.getElementById(currCont), -currDelayObj.avgImpHeight);
      var isOtherElementInView = (avgImpHeightScrolled && currDelayObj.whenOutOfView) ? scroll.inVerticalView(document.getElementById(currDelayObj.whenOutOfView), 106) : false;

      if(avgImpHeightScrolled && !isOtherElementInView) {

        ads[currCont] = currDelayObj.data;
        delayShown.push(currDelayObj);
        delay.splice(i, 1);
      }
      i -= 1;
    }
    if(Object.keys(ads).length) {
      adsUtils.define(ads);
    }
    if(!delay.length) {
      clearEvents();
    }
  }

  function renderFrame() {
    win.requestAnimationFrame(renderDelayed);
  }

  function initDelayed() {
    if(delay.length) {
      observer = throttle(renderFrame, 500);
      ev.addEventListener(win.ref, 'scroll', observer);
      ev.addEventListener(win.ref, 'resize', observer);
    }
  }

  function disabledAd(ad) {
    // some ads may be skipped for loggedIn users
    return ad.noLogin ? rc('user_id') : false;
  }

  function skipAd(slot) {
    var ic = icSiteAndZone();
    if (ic) {
      if(slot.container === 'news-bottom-slot' || slot.container === 'news-right-slot-2') {
        return true; // skip slot - not allowed for IC content
      }
      slot.data.name = ic;
    }

    if (slot.container === 'article-left-slot-3' && document.referrer.match(/\/etfs-and-funds\/closed-end-funds/) && location.pathname.match(/^\/article\//)) {
      return true;
    }

    if (['article-right-slot-2', 'article-left-slot-3'].indexOf(slot.container) > -1 && document.referrer.match(/\/market-outlook\/gold-and-precious-metals/) && location.pathname.match(/^\/article\//)) {
      return true;
    }

    if ((slot.container === 'partner_news_single_link_1' || slot.container === 'partner_news_single_link_2') &&
    (!location.pathname.match(/^\/symbol\/\w+$/) || (SA.Fn.param('news_tab') != null && SA.Fn.param('news_tab') != 'latest-news'))) {
      return true;
    }

    return false;
  }

  function prepareAds() {
    m('initalizer.js - setPrimary start')
    conf.slots.forEach(function(slot) {
      if(!disabledAd(slot) && !skipAd(slot)) {
        processAd(slot);
      }
    });
    m('initalizer.js - prepareAds adsUtils.define')
    adsUtils.define(load);
    m('initalizer.js - prepareAds initDelayed')
    initDelayed();
    SA.gptInitDone = true;
    m('initalizer.js - prepareAds end')
  }

  function initialize() {
    m('initalizer.js - initialize start')
    crossDomain();
    m('initalizer.js - crossDomain end')
    setPrimary();
    m('initalizer.js - setPrimary end')
    prepareAds();
  }

  function init() {
    if(conf.slots && conf.slots.length) {
      m('initializer start');
      vars();
      initialize();
      stickyAds.init();
      m('initializer end');
    }
  }

  function reset() {
    tds.reset();
    clearEvents();
    adsUtils.destroy(cidsToDestroy());
    init();
  }

  init();

  return {
    init: init,

    redefine: function(s, addKVs, removeKVs, opt) {
      // jshint singleGroups: false

      opt = opt || {};
      conf.slots = (s && s.length) ? s : conf.slots;
      if (opt.siteZone) {
        updateSiteZone(opt.siteZone);
      }

      updateKVs(addKVs, removeKVs, opt.kvs);
      reset(s);

      if (opt.skipSticky) {
        stickyAds.destroy();
      } else {
        stickyAds.restart();
      }
    },

    renderDelayed: function() {
      renderDelayed();
    }
  };

});









































