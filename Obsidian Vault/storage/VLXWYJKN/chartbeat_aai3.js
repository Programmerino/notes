/**
 * Chartbeat tag for NPR Stations
 * Tag Version  : chartbeat_001
 * Publish ID   : 879
 * Publish Date : 2020-07-21 02:57:47
 *
 */

(function($j, undefined){
  window._sf_startpt=(new Date()).getTime();

  var confs = {
    'global_account' : 'UA-18188937-11',
    'station_name' : 'KDLG',
    'station_trackers': ['UA-37499552-1'],
    'site_nodes' : [
                        {
        'site_name': 'kdlg.org',
        'trackers': ['UA-28319001-81'],
        'domain_nodes': [
                                        {
            'domain_name': 'kdlg.org',
            'trackers': [],
                                                'website_framework' : '1',
            'patterns': [
                                                        {
                'page_type': 'Story',
                'regex_pattern': '/post/|/webclip/',
                'pattern_name': 'Core Publisher Story Page'
              },                            {
                'page_type': 'People',
                'regex_pattern': '/people/',
                'pattern_name': 'Core Publisher People Page'
              },                            {
                'page_type': 'Streaming',
                'regex_pattern': '/listen-live$|/listen$',
                'pattern_name': 'Core Publisher Listen Live Page'
              },                            {
                'page_type': 'Schedule',
                'regex_pattern': '/schedule$|/schedule/week',
                'pattern_name': 'Core Publisher Schedule Page'
              },                            {
                'page_type': 'Playlist',
                'regex_pattern': '/search_playlists$|playlist_date',
                'pattern_name': 'Core Publisher Playlist Page'
              },                            {
                'page_type': 'Program',
                'regex_pattern': '/programs$|^/programs/',
                'pattern_name': 'Core Publisher Program Page'
              },                            {
                'page_type': 'Search',
                'regex_pattern': '/search/google/',
                'pattern_name': 'Core Publisher Search GSA Page'
              }                                        ]
          },                    {
            'domain_name': 'www.kdlg.org',
            'trackers': [],
                                                'website_framework' : '1',
            'patterns': [
                                                        {
                'page_type': 'Story',
                'regex_pattern': '/post/|/webclip/',
                'pattern_name': 'Core Publisher Story Page'
              },                            {
                'page_type': 'People',
                'regex_pattern': '/people/',
                'pattern_name': 'Core Publisher People Page'
              },                            {
                'page_type': 'Streaming',
                'regex_pattern': '/listen-live$|/listen$',
                'pattern_name': 'Core Publisher Listen Live Page'
              },                            {
                'page_type': 'Schedule',
                'regex_pattern': '/schedule$|/schedule/week',
                'pattern_name': 'Core Publisher Schedule Page'
              },                            {
                'page_type': 'Playlist',
                'regex_pattern': '/search_playlists$|playlist_date',
                'pattern_name': 'Core Publisher Playlist Page'
              },                            {
                'page_type': 'Program',
                'regex_pattern': '/programs$|^/programs/',
                'pattern_name': 'Core Publisher Program Page'
              },                            {
                'page_type': 'Search',
                'regex_pattern': '/search/google/',
                'pattern_name': 'Core Publisher Search GSA Page'
              }                                        ]
          },                    {
            'domain_name': 'm.kdlg.org',
            'trackers': [],
                                                'website_framework' : '1',
            'patterns': [
                                                        {
                'page_type': 'Story',
                'regex_pattern': '/mobile/[0-9]*',
                'pattern_name': 'Core Publisher Story Page'
              },                            {
                'page_type': 'People',
                'regex_pattern': '/people/',
                'pattern_name': 'Core Publisher People Page'
              },                            {
                'page_type': 'Streaming',
                'regex_pattern': '/listen-live$|/listen$',
                'pattern_name': 'Core Publisher Listen Live Page'
              },                            {
                'page_type': 'Schedule',
                'regex_pattern': '/schedule$|/schedule/week',
                'pattern_name': 'Core Publisher Schedule Page'
              },                            {
                'page_type': 'Playlist',
                'regex_pattern': '/search_playlists$|playlist_date',
                'pattern_name': 'Core Publisher Playlist Page'
              },                            {
                'page_type': 'Program',
                'regex_pattern': '/programs$|^/programs/',
                'pattern_name': 'Core Publisher Program Page'
              },                            {
                'page_type': 'Search',
                'regex_pattern': '/search/google/',
                'pattern_name': 'Core Publisher Search GSA Page'
              }                                        ]
          }                            ]
      },            {
        'site_name': 'publicbroadcasting.net',
        'trackers': [],
        'domain_nodes': [
                                        {
            'domain_name': 'secure.publicbroadcasting.net/kdlg',
            'trackers': [],
                        'website_framework' : '',
            'patterns': [
                          ]
          }                            ]
      },            {
        'site_name': 'nprstations.org',
        'trackers': [],
        'domain_nodes': [
                                        {
            'domain_name': 'donate.nprstations.org/kdlg/',
            'trackers': [],
                        'website_framework' : '',
            'patterns': [
                          ]
          }                            ]
      }                ],
    'custom_vars' : {
                          'nid' : {
            'name' : 'nid',
            'slot' : 8,
            'scope_id' : 3          },                  'pop' : {
            'name' : 'pop',
            'slot' : 9,
            'scope_id' : 3          },                  'author' : {
            'name' : 'author',
            'slot' : 11,
            'scope_id' : 3          },                  'keywords' : {
            'name' : 'tags',
            'slot' : 12,
            'scope_id' : 3          },                  'org_id' : {
            'name' : 'org_id',
            'slot' : 13,
            'scope_id' : 3          },                  'brand' : {
            'name' : 'CP_Station',
            'slot' : 14,
            'scope_id' : 2          },                  'has_audio' : {
            'name' : 'Has_Inline_Audio',
            'slot' : 15,
            'scope_id' : 3          },                  'programs' : {
            'name' : 'Program',
            'slot' : 16,
            'scope_id' : 3          },                  'category' : {
            'name' : 'Category',
            'slot' : 10,
            'scope_id' : 3          },                  'datePublished' : {
            'name' : 'PublishedDate',
            'slot' : 17,
            'scope_id' : 3          },                  'wordCount' : {
            'name' : 'WordCount',
            'slot' : 18,
            'scope_id' : 3          },                  'story_id' : {
            'name' : 'API_Story_Id',
            'slot' : 19,
            'scope_id' : 3          },                  'pmp_guid' : {
            'name' : 'pmp_guid',
            'slot' : 20,
            'scope_id' : 3          }            }
  };

  function getPageTypeByURLPattern(nodes, document_location) {
    var i, j, pats;
    for (i=0; i<nodes.length; i++){
      if (
        !((nodes[i].site_name && document_location.toLowerCase().indexOf(nodes[i].site_name.toLowerCase()) > -1) ||
        (nodes[i].domain_name && document_location.toLowerCase().indexOf(nodes[i].domain_name.toLowerCase()) > -1))
      ) { continue; }
      if (typeof nodes[i].patterns !== 'undefined'){
        pats = nodes[i].patterns;
        for (j=0; j<pats.length; j++) {
          if(new RegExp(pats[j].regex_pattern).test(document_location)){
            return pats[j].page_type;
          }
        }
      }
      // Execute for child domain_nodes as well
      if (typeof nodes[i].domain_nodes !== 'undefined') {
        return getPageTypeByURLPattern(nodes[i].domain_nodes, document_location);
      }
    }
  }

  if (document.domain == 'kdlg.org')  { // node id:759, node type:4, domain mapping:no
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'kdlg.org'});
  } else if (document.domain == 'www.kdlg.org')  { // node id:760, node type:4, domain mapping:no
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'kdlg.org'});
  } else if (document.domain == 'm.kdlg.org')  { // node id:761, node type:4, domain mapping:no
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'kdlg.org'});
  } else if (document.domain == 'secure.publicbroadcasting.net/kdlg')  { // node id:1143, node type:4, domain mapping:no
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'publicbroadcasting.net'});
  } else if (document.domain.indexOf('kdlg.org') > -1)  { // node id:323, node type:3, domain mapping:yes
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'kdlg.org'});
  } else if (document.domain.indexOf('publicbroadcasting.net') > -1)  { // node id:1138, node type:3, domain mapping:yes
    window._sf_async_config = Object.assign(getMetaForChartbeat(confs.site_nodes, document.location.href), {uid: 33583, domain: 'publicbroadcasting.net'});
  }

  function getMetaForChartbeat(nodes, document_location) {
    var result = {};
    metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      meta = metas[i];
      meta_name = meta.getAttribute('name');
      meta_value = meta.getAttribute('content');
      if (meta_name == 'category') {
        // available for CorePublisher stations
        result.sections = meta_value;
      } else if (meta_name == 'author') {
        // available for CorePublisher stations and POSSIBLY non-CorePublisher pages
        result.authors = meta_value;
      }
    }
    if (result.sections === undefined) {
      // get section/category for non-CorePublisher pages
      result.sections = getPageTypeByURLPattern(nodes, document_location);
    }
    return result;
  }

  if(typeof( _sf_async_config) !== 'undefined') {
      (function() {
        function loadChartbeat() {
          window._sf_endpt = (new Date()).getTime();
          var e = document.createElement('script');
          e.setAttribute('language', 'javascript');
          e.setAttribute('type', 'text/javascript');
          e.async = true;
          e.src = '//static.chartbeat.com/js/chartbeat.js';
          document.body.appendChild(e);
        };
        loadChartbeat();
       })();
  }

  // for testing
  window.sas_unit_testing = {
    'getMetaForChartbeat': getMetaForChartbeat,
    'getPageTypeByURLPattern': getPageTypeByURLPattern
  }

})(window.jQuery);

/*
   Execute tag on url change
*/
var oldHref = document.location.href;
var bodyList = document.querySelector("body");
var observer = new MutationObserver(function(mutations) {
    if (mutations.length > 0 && oldHref != document.location.href) {
      oldHref = document.location.href;
      var result = {};
      metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        meta = metas[i];
        meta_name = meta.getAttribute('name');
        meta_value = meta.getAttribute('content');
        if (meta_name == 'category') {
          // available for CorePublisher stations
          result.sections = meta_value;
        } else if (meta_name == 'author') {
          // available for CorePublisher stations and POSSIBLY non-CorePublisher pages
          result.authors = meta_value;
        } else if (meta_name == 'title'){
          result.title = meta_value;
        }
      }
      result.path = window.location.pathname;
      pSUPERFLY.virtualPage(result);
    }
});

var config = {
    childList: true,
    subtree: true
};

/* Initialise observer */
observer.observe(bodyList, config);
