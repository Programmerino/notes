(function(){
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    var UPDATED_HEIGHT = false;

    eventer(messageEvent, function(e) {
        var key = e.message ? "message" : "data";
        var data = e[key];

        if(!data || typeof data !== 'string'){
            return;
        }
        var heightVar = parseInt(data.indexOf("height="));
        var scrollVar = parseInt(data.indexOf("scrollto="));

        if (heightVar === 0) {
            var dataArr = data.split("=");
            if (dataArr.length > 1) {
                var theHeight = parseInt(dataArr[1]);
                document.getElementById("affiliated-widget-iframe").style.height = theHeight + "px";
                UPDATED_HEIGHT = true;
            }

        } 
            
    }, false);

   (function() {
        setTimeout(function() {
            if (!UPDATED_HEIGHT) {
                document.getElementById("affiliated-widget-iframe").style.height = "1000";
            }
        }, 500);
    });
})();