(function () {
  var reportingIframeHandle;

  var DIV_ID = 'ld-299-7511';
  var SLOT = 12719235805981286;
  reportGAEvent('CrenativeAGRTechnologyServed', SLOT);

  var hasRecordedCollapsed = false;
  var hasRecordedImpression = false;
  var startTime = Date.now();

  window.addEventListener('message', function (event) {
    try {
      var data = JSON.parse(event.data);
      var diff;
      if (!data) return;

      if (data.id !== DIV_ID) {
        return;
      }

      if (data.type === 'collapsed') {
	if (!hasRecordedCollapsed) {
	  hasRecordedCollapsed = true;
	  diff = (Date.now() - startTime) / 1000;
	  reportGAEvent('CrenativeAGRTechnologyCollapsedEvent', SLOT, (diff | 0) + '');
	}
      } else if (data.type === 'impression') {
	hasRecordedImpression = true;
	diff = (Date.now() - startTime) / 1000;
	reportGAEvent('CrenativeAGRTechnologyImpression', SLOT, (diff | 0) + '');
      }
    } catch (e) {
    }
  });

  (function(w,d,s,i){w.ldAdInit=w.ldAdInit||[];w.ldAdInit.push({slot:SLOT,size:[0, 0],id:DIV_ID});if(!d.getElementById(i)){var j=d.createElement(s),p=d.getElementsByTagName(s)[0];j.async=true;j.src="https://cdn2.lockerdomecdn.com/_js/ajs.js";j.id=i;p.parentNode.insertBefore(j,p);}})(window,document,"script","ld-ajs");

  function reportGAEvent(category, action, label) {
    if (!reportingIframeHandle) {
      reportingIframeHandle = document.createElement('iframe');
      reportingIframeHandle.style.display = 'none';
      reportingIframeHandle.id = 'lockerdomeReporting';
      document.head.appendChild(reportingIframeHandle);
      reportingIframeHandle.contentWindow.document.open();
      reportingIframeHandle.contentWindow.document.write("<html><head></head><body></body></html>");
      reportingIframeHandle.contentWindow.document.close();

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o); a.async=1;a.src=g;s.head.appendChild(a);
      })(reportingIframeHandle.contentWindow,reportingIframeHandle.contentWindow.document,'script','https://www.google-analytics.com/analytics.js','_ld_ad_ga');
      reportingIframeHandle.contentWindow._ld_ad_ga('create', 'UA-1933164-1', 'auto');
      reportingIframeHandle.contentWindow._ld_ad_ga('set', 'anonymizeIp', true);
    }

    reportingIframeHandle.contentWindow._ld_ad_ga('send', 'event', category,  action, label, {
      nonInteraction: true
    });
  }
})();
