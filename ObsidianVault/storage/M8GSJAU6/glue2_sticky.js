/* [CRITEO] David Krief - Glue2 Loader */
(function()
{
    function CriteoGlue2_Sticky(optionsSticky, debug)
    {
        var options = optionsSticky.sticky;

        // ************************************************************************ 
        // PRIVATE VARIABLES AND FUNCTIONS 
        // ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
        // *********************************************************************** 
        var version = "1.1 (15/02/2015)";
        var tempObj = {};
        console.ctoLog = function() {};
        if (debug)
        {
            console.ctoLog = console.log;
        };
        console.ctoLog(options);
        var adServerMapping = {
            none: 'adserverCode = "&publisherurl=" + escape(e.location.hostname);',
            AdMarvel: 'var publisherurl = "{pageurl}";var macro = "{pag" + "eurl}";if (publisherurl !== macro){ adserverCode = "&publisherurl="+publisherurl; };',
            AdZerk: 'var publisherurl = "{{request.url.href}}";var macro = "{{request." + "url.href}}";if (publisherurl !== macro){ adserverCode = "&publisherurl="+publisherurl; };',
            AppNexus: 'var publisherurl = "${REFERER_URL_ENC}";var macro = "${REFERER" + "_URL_ENC}";if (publisherurl !== macro){ adserverCode = "&publisherurl="+publisherurl; };',
            DFP: 'var publisherurl = "%SITE%";var macro = "%SI" + "TE%";if (publisherurl !== macro){ adserverCode = "&publisherurl="+publisherurl; };',
            OpenX: 'var publisherurl = "{techno.domain}";var macro = "{techno" + ".domain}";if (publisherurl !== macro){ adserverCode = "&publisherurl="+publisherurl; };'
        };
        var macroStr = '';
        if (options.macro)
        {
            macroStr = (options.macro).replace(/["']/g, "");
        }

        var tag = 'var cto_closeForOneDayOption = ' + 'true' + '; \n\
var zid_SF_limit_width  = 700; \n\
var zid_SF_limit_height = 200; \n\
var MAX_ct0_w = "' + macroStr + '"; \n\
!function(){var t={bounce:function(t){return 1-(1-t)*Math.abs(Math.cos(7*Math.pow(t,1.5)))},hermite:function(t){return.5>t?.5*Math.pow(2*t,4):1-Math.pow(2-2*t,4)/2},smooth:function(t){return.5-.5*Math.atan(2*Math.cos(t*Math.PI))/Math.atan(2)},linear:function(t){return t},spring:function(t){return 1-Math.cos(t*Math.PI*5)*Math.exp(8*-t)}};CriteoSlideIn=function(){this.config={".animation":"linear",".duration":"500",".from":"0",".to":"0",".property":"bottom",".rate":"20",".unit":"px","bclose.pos":"absolute","frame.pos":"fixed"}},CriteoSlideIn.prototype={animate:function(t){var e=this.current,o=this;void 0!==e&&(e.start=this.getTime(),e.way=t,e.handle=setInterval(function(){o.callback()},this.getConfig(".rate",10)))},callback:function(){var t,e=this.current,o=(this.getTime()-e.start)/e.duration;o>=1?(clearInterval(e.handle),t=1):t=e.effect(o),e.frame.style[e.property]=Math.round(e.from+(e.to-e.from)*e.way(t))+e.unit},close:function(){ \
    var cto_days = 1,cto_value = "true",cto_name = "cto_sticky_closed",cto_expires,cto_date = new Date(); \n\
    cto_date.setTime(cto_date.getTime() + (cto_days * 24 * 60 * 60 * 1000)); \n\
    cto_expires = "; expires=" + cto_date.toGMTString(); \n\
    document.cookie = cto_name + "=" + cto_value + cto_expires + "; path=/"; \n\
    var t=this.current;void 0!==t&&(t.frame.removeChild(t.buttonClose),parent.document.body.removeChild(t.frame),this.current=void 0)},createElement:function(t,e){var o;return o=document.createElement(e),this.setConfig(o.style,"background",t+".background"),this.setConfig(o.style,"borderBottom",t+".border.b"),this.setConfig(o.style,"borderLeft",t+".border.l"),this.setConfig(o.style,"borderRight",t+".border.r"),this.setConfig(o.style,"borderTop",t+".border.t"),this.setConfig(o.style,"position",t+".pos","relative"),this.setConfig(o.style,"bottom",t+".pos.b"),this.setConfig(o.style,"left",t+".pos.l"),this.setConfig(o.style,"right",t+".pos.r"),this.setConfig(o.style,"top",t+".pos.t"),this.setConfig(o.style,"width",t+".size.w"),this.setConfig(o.style,"height",t+".size.h"),this.setConfig(o.style,"zIndex",t+".zindex"),this.setConfig(o,"innerHTML",t+".inner"),"ie.quirk"==this.getMode()&&"fixed"==o.style.position&&(o.style.position="absolute"),o},getConfig:function(t,e){return void 0!==this.config[t]?this.config[t]:e},getMode:function(){return"Microsoft Internet Explorer"==navigator.appName&&("BackCompat"==document.compatMode||!new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").test(navigator.userAgent)||parseFloat(RegExp.$1)<7)?"ie.quirk":"default"},getTime:function(){return(new Date).getTime()},setConfig:function(t,e,o,n){void 0!==this.config[o]?t[e]=this.config[o]:void 0!==n&&(t[e]=n)},show:function(){function e(){r++;var t=o.frame.childNodes[1].childNodes;if(r>=s&&(console.log("no passback"),o.frame.style.display="none"),t.length>0){var n=t[0].contentDocument||t[0].contentWindow.document;if(n.body.clientHeight>40){var n=t[0].contentDocument||t[0].contentWindow.document;o.frame.style.opacity=1}else s>r&&setTimeout(function(){e()},30)}else s>r&&setTimeout(function(){e()},30)}var o=this.current,n=this;void 0===o&&(o={buttonClose:this.createElement("bclose","a"),duration:parseInt(this.getConfig(".duration","1000")),effect:t[this.getConfig(".animation","linear")],frame:this.createElement("frame","div"),from:parseInt(this.getConfig(".from","0")),property:this.getConfig(".property","middle"),to:parseInt(this.getConfig(".to","0")),unit:this.getConfig(".unit","px")},o.buttonClose.href="#",o.frame.appendChild(o.buttonClose),parent.document.body.appendChild(o.frame),this.current=o);var i=document.createElement("script");i.type="text/javascript",i.className="cto_async",i.text=\'var zoneid_desktop="' + options.desktopZId + '",zoneid_mobile="' + options.mobileZId + '",zoneid_selected=zoneid_desktop;(window.innerWidth<\'+zid_SF_limit_width+\'||window.innerHeight<\'+zid_SF_limit_height+\')&&(zoneid_selected=zoneid_mobile);\';if(cto_closeForOneDayOption){var cto_start = document.cookie.indexOf("cto_sticky_closed" + "=");if (cto_start != -1){i.text += \'zoneid_selected = "";\';}}i.text+=\'var crt_curl="http://r.criteo.com/?";!function(e,t,r,o,n,c){';

        // Macro & adserver part 1
        tag += 'var MAX_ct0 = "\'+MAX_ct0_w+\'";';

        // Rest of inner tag
        tag += 'var a=t.getElementsByClassName("cto_async"),i=a.length,o=o+"_"+i,s=t.createElement("div");s.id=o,s.style.paddingTop = "4px",s.style.textAlign = "center",s.style.width = "100%",s.style.margin="0px";var d=t.getElementsByTagName(r),l=a[i-1];l.parentNode.insertBefore(s,l);var p=d[0],m=t.createElement(r),h="&loc="+encodeURIComponent(e.location),f=t.referrer?"&referer="+encodeURIComponent(t.referrer):"",g="http"==c.substring(0,4)?"&ct0="+encodeURIComponent(c):"",u="&cb="+Math.floor(99999999999*Math.random());';

        // Macro part 2
        tag += 'var y = "";if(typeof MAX_ct0!="undefined"&&MAX_ct0.substring(0,4)=="http"){y="&ct0="+escape(MAX_ct0)};';

        // Ad server
        tag += 'var adserverCode = "";';
        tag += adServerMapping[options.adServer];
        tag += 'm.async="true",m.src=(("https:"==location.protocol?"https:":"http:")+"//cas.criteo.com/delivery/ajs.php?zoneid="+n+"&containerid="+o+g+h+f+u+y+adserverCode).substring(0,2e3),p.parentNode.insertBefore(m,p);}(window,document,"script","placeholderId",zoneid_selected,crt_curl);\',o.frame.appendChild(i),o.frame.style.opacity=0;var r=0,s=80;e(),o.buttonClose.onclick=function(){return n.close(),!1},this.animate(function(t){return t})}};var e=new CriteoSlideIn;e.config[".animation"]="smooth",e.config[".duration"]="1200",e.config[".from"]="-200px",e.config[".to"]="0",e.config["bclose.inner"]=\'<img alt="close" src="//static.criteo.com/images/slidein/button_close.png" style="border: none" />\',e.config["bclose.pos.t"]="-13px",e.config["bclose.size.w"]="27px",e.config["bclose.size.h"]="27px",e.config["frame.background"]="rgba(240,240,240,0.5)",e.config["frame.pos.l"]="0px",e.config["frame.border.t"]="1px solid grey",e.config["frame.size.w"]="100%",e.config["frame.size.h"]="auto",e.config["frame.zindex"]="346",e.show()}();';

        eval(tag);
    }

    // Get interstitial units from the invokation code
    if (window.cto_glue2)
    {
        for (var i = 0; i < window.cto_glue2.length; i++)
        {
            CriteoGlue2_Sticky(window.cto_glue2[i].options, window.cto_glue2[i].debug);
        }
    }
})();
