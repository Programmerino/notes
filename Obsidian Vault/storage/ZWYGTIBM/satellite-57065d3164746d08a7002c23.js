_satellite.pushBlockingScript(function(event, target, $variables){
  var _sf_async_config = window._sf_async_config = {};
/** CONFIGURATION START **/
_sf_async_config.uid = 62958; // ACCOUNT NUMBER
_sf_async_config.flickerControl = false;
_sf_async_config.useCanonical = true;
/** CONFIGURATION END **/
var _sf_startpt = (new Date()).getTime();

//Load Chartbeat SDK asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "//static.chartbeat.com/js/chartbeat_mab.js";
	js.defer = true;
	js.async = true;
	fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'chartbeat-sdk'));
});
