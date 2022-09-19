



/* ControlTag Loader for Time Magazine c883c722-91ef-4698-bb15-479c5181e90d */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.42.1","schema_version":3},"confid":"txq8vt5yx","context_terms":[],"publisher":{"name":"Time Magazine","active":true,"uuid":"c883c722-91ef-4698-bb15-479c5181e90d","version_bucket":"stable","id":4071},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"timemagazine"},"prioritized_segments":[],"realtime_segments":[{"id":"uqep6cw13","test":["and",["and",["or",["intersects","$page_attr__kxref",["instagram.com"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/c883c722-91ef-4698-bb15-479c5181e90d","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/c883c722-91ef-4698-bb15-479c5181e90d","consent_set":"https://consumer.krxd.net/consent/set/c883c722-91ef-4698-bb15-479c5181e90d","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/c883c722-91ef-4698-bb15-479c5181e90d","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Time.com","cap":255,"id":1673710,"organization_id":4071,"uid":"txq8vt5yx"},"tags":[{"id":40081,"name":"Krux DTC - Standard","content":"<script>\n(function() {\n    /* Standard but configurable DTC */\n    var comDomain, domain, level, libUtil, pathLevel, prefix, toSet;\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    level = 1;\n    while (level <= Number('3')) {\n        pathLevel = Krux('scrape.url_path', level);\n        if (pathLevel) {\n            if ('false' === 'true') {\n                pathLevel = (\"\" + pathLevel).replace(\n                    /\\.(?:html?|php[0-9]?|aspx?|cfg|py)$/i, '');\n            }\n            toSet[\"page_attr_url_path_\" + level] = pathLevel;\n        }\n        level++;\n    }\n    toSet['page_attr_meta_keywords'] = Krux('scrape.meta_name', 'keywords');\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    domain = Krux('get', 'domain');\n    comDomain = domain.match(/\\.([^\\.]+\\.com)$/);\n    if (comDomain) {\n        domain = comDomain[1];\n    }\n    toSet['page_attr_domain'] = domain;\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":40168,"name":"Krux DTC - dataLayer Whitelist","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'dataLayer');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('affiliateLinkText,event,label,videoVolume,videoContentDuration,videoContentPosition,videoTags,videoPlayReason,category,channel,contentSubType,contentType,memberLoggedIn,contentCmsCategory,affiliateLinkCount,contentCmsSubCategory,contentCmsTags,contentCmsTerms,contentHeadline,contentShownOnPlatform,contentType,title,referrerDomain,gaSource,gaCampaign,gaMedium,gaContent,gaKeyword,gaBrowser,gaDevice,eventContentAction'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'false' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('undefined', 'undefined',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":44941,"name":"UTM DTC","content":"<script>\n(function(){\n\n\tvar params = Krux('require:util').urlParams();\n\t\n\tKrux ('set', { \n\t'page_attr_utm_source': params.utm_source,\n\t'page_attr_utm_medium': params.utm_medium,\n\t'page_attr_utm_campaign': params.utm_campaign,\n\t'page_attr_utm_content': params.utm_content,\n\t'page_attr_utm_term': params.utm_term \n\t});\n\t\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\r\n(function() {\r\n\r\nvar kuid = Krux('get', 'user');\r\n  if(kuid){\r\n  // original google user match tag. will be deprecated june 1, 2020\r\n  new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n\r\n  // new google user match where they host the match table. The KUID needs to be base64 encoded, but the ids sent will be regular kuids\r\n  var baseEncodedKuid = btoa(kuid).replace(/=$/, '');\r\n  new Image().src = 'https://cm.g.doubleclick.net/pixel?google_nid=krux_digital&google_hm='+baseEncodedKuid;\r\n  }\r\n\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S (Oracle)","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":34,"name":"Comscore Data Tag","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  var cbust = Math.round(new Date().getTime() / 1000);\r\n  var prefix = location.protocol == 'https:' ? \"https:\" :\"http:\";\r\n  var url = prefix == 'https:' ? '//sb.scorecardresearch.com/p' : '//b.scorecardresearch.com/p';\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: url,\r\n      data: {\r\n          c1: '9',\r\n          c2: '8188709',\r\n          cs_xi: kuid,\r\n          rn: cbust\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":81,"name":"Bombora","content":"<script>\r\n\r\n(function () {\r\n_ml = window._ml || {};\r\n_ml.pub = '748';\r\n_ml.redirect = '//beacon.krxd.net/usermatch.gif?partner=madisonlogic&partner_uid=[PersonID]';\r\nvar s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');\r\nmltag.type = 'text/javascript'; mltag.async = true;\r\nmltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();\r\ns.parentNode.insertBefore(mltag, s);\r\n})();\r\n\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":86,"name":"Neustar AdAdvisor S2S","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\nif (kuid) {\r\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\r\n     }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":152,"name":"Semasio Usermatch","content":"<script>\r\n(function() {\r\n    var kuid = Krux('get', 'user'),\r\n        consentParams = Krux('iab:urlParams'),\r\n        urlconsent = '';\r\n\r\n    if (kuid) {\r\n        // Semasio has differently named parameters than we do\r\n        if (consentParams) {\r\n            urlconsent = consentParams.replace(/consent=[0-1]&/, '');\r\n            urlconsent = consentParams.replace('consent_string','gdpr_consent');\r\n            urlconsent = consentParams.match(\"&gdpr=true\") ? consentParams.replace(/&gdpr=true/, '&gdpr=1') : consentParams.replace(/&gdpr=false/, '&gdpr=0');\r\n        }\r\n        var p = location.protocol == 'https:' ? 'https:' : 'http:';\r\n\r\n        var purl = '//uipglob.semasio.net/salesforce/1/get?sType=sync&sExtCookieId='+kuid+urlconsent+'&sInitiator=external&_url='+p+'//beacon.krxd.net/usermatch.gif?partner=semasio&partner_uid=${UIPID()}';\r\n        (new Image()).src = p + purl;\r\n    }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":153,"name":"Datonics User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var datonics_url = 'https://fei.pro-market.net/engine?mimetype=img&du=88&csync=' + kuid;\r\n      var i = new Image();\r\n      i.src = datonics_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.e4cdf7ad64ebac73f207c1ce55cc1727', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
