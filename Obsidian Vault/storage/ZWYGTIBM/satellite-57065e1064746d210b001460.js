_satellite.pushAsyncScript(function(event, target, $variables){
  (function() {
	
	var authors = _satellite.getDataElement('Page - Content Author List');
	var authorsConverted = [];
	var authorsWorking;
	var authorLastName;
	var authorString;
	
	if(!window._cbq) {
		window._cbq = [];
	}
	
		if(authors !== ''){
			authors = authors.split('|');
		
			for(var i = 0; i < authors.length; i++){
				authorsWorking = authors[i].split(',');
				authorLastName = authorsWorking.shift();
				authorString = authorsWorking.join(' ') + ' ' + authorLastName;
				authorString = authorString.replace(/\s\s+/g, ' ');
				authorsConverted.push(authorString);
			}
		
			if(authorsConverted.length > 0){
				window._sf_async_config.authors = authorsConverted.join(',').replace(/,\s/g, ',');
			}
		}

		window._sf_async_config.type = window._sf_async_config.sections = pageDataTracker.getPageType();
		
		/** LOGIN STATUS START **/
		if(pageDataTracker.getMetatag('rand-visitor-type')){
			window._cbq.push(['_acct','paid']);
			window._sf_async_config.domain = 'staff.rand.org';
		} else {
			window._cbq.push(['_acct','anon']);
			window._sf_async_config.domain = 'rand.org';
		}
		/** LOGIN STATUS END **/
	
	function loadChartbeat() {
		window._sf_endpt = (new Date()).getTime();
		var e = document.createElement('script');
		e.setAttribute('language', 'javascript');
		e.setAttribute('type', 'text/javascript');
		e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
		document.body.appendChild(e);
	}
	
	loadChartbeat();

})();
});
