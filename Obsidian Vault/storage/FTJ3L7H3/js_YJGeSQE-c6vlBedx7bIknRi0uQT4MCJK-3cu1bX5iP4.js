
(function ($) {

Drupal.behaviors.shorten = {
  attach: function (context) {
    // Make sure we can run context.find().
    var ctxt = $(context);
    var shortenedURL = ctxt.find('.shorten-shortened-url');
    var shorten = shortenedURL[0];
    if (shorten) {
      shorten.select();
      shorten.focus();
    }
    shortenedURL.click(function() {
      this.select();
      this.focus();
    });
  }
};

})(jQuery);
;
/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.1.6
 */
!function(a,b){"use strict";var c,d,e=a,f=e.document,g=e.navigator,h=e.setTimeout,i=e.encodeURIComponent,j=e.ActiveXObject,k=e.Error,l=e.Number.parseInt||e.parseInt,m=e.Number.parseFloat||e.parseFloat,n=e.Number.isNaN||e.isNaN,o=e.Math.round,p=e.Date.now,q=e.Object.keys,r=e.Object.defineProperty,s=e.Object.prototype.hasOwnProperty,t=e.Array.prototype.slice,u=function(){var a=function(a){return a};if("function"==typeof e.wrap&&"function"==typeof e.unwrap)try{var b=f.createElement("div"),c=e.unwrap(b);1===b.nodeType&&c&&1===c.nodeType&&(a=e.unwrap)}catch(d){}return a}(),v=function(a){return t.call(a,0)},w=function(){var a,c,d,e,f,g,h=v(arguments),i=h[0]||{};for(a=1,c=h.length;c>a;a++)if(null!=(d=h[a]))for(e in d)s.call(d,e)&&(f=i[e],g=d[e],i!==g&&g!==b&&(i[e]=g));return i},x=function(a){var b,c,d,e;if("object"!=typeof a||null==a)b=a;else if("number"==typeof a.length)for(b=[],c=0,d=a.length;d>c;c++)s.call(a,c)&&(b[c]=x(a[c]));else{b={};for(e in a)s.call(a,e)&&(b[e]=x(a[e]))}return b},y=function(a,b){for(var c={},d=0,e=b.length;e>d;d++)b[d]in a&&(c[b[d]]=a[b[d]]);return c},z=function(a,b){var c={};for(var d in a)-1===b.indexOf(d)&&(c[d]=a[d]);return c},A=function(a){if(a)for(var b in a)s.call(a,b)&&delete a[b];return a},B=function(a,b){if(a&&1===a.nodeType&&a.ownerDocument&&b&&(1===b.nodeType&&b.ownerDocument&&b.ownerDocument===a.ownerDocument||9===b.nodeType&&!b.ownerDocument&&b===a.ownerDocument))do{if(a===b)return!0;a=a.parentNode}while(a);return!1},C=function(a){var b;return"string"==typeof a&&a&&(b=a.split("#")[0].split("?")[0],b=a.slice(0,a.lastIndexOf("/")+1)),b},D=function(a){var b,c;return"string"==typeof a&&a&&(c=a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]?b=c[1]:(c=a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),c&&c[1]&&(b=c[1]))),b},E=function(){var a,b;try{throw new k}catch(c){b=c}return b&&(a=b.sourceURL||b.fileName||D(b.stack)),a},F=function(){var a,c,d;if(f.currentScript&&(a=f.currentScript.src))return a;if(c=f.getElementsByTagName("script"),1===c.length)return c[0].src||b;if("readyState"in c[0])for(d=c.length;d--;)if("interactive"===c[d].readyState&&(a=c[d].src))return a;return"loading"===f.readyState&&(a=c[c.length-1].src)?a:(a=E())?a:b},G=function(){var a,c,d,e=f.getElementsByTagName("script");for(a=e.length;a--;){if(!(d=e[a].src)){c=null;break}if(d=C(d),null==c)c=d;else if(c!==d){c=null;break}}return c||b},H=function(){var a=C(F())||G()||"";return a+"ZeroClipboard.swf"},I={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},J="11.0.0",K={},L={},M=null,N={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},O={swfPath:H(),trustedDomains:a.location.host?[a.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},P=function(a){if("object"==typeof a&&null!==a)for(var b in a)if(s.call(a,b))if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b))O[b]=a[b];else if(null==I.bridge)if("containerId"===b||"swfObjectId"===b){if(!cb(a[b]))throw new Error("The specified `"+b+"` value is not valid as an HTML4 Element ID");O[b]=a[b]}else O[b]=a[b];{if("string"!=typeof a||!a)return x(O);if(s.call(O,a))return O[a]}},Q=function(){return{browser:y(g,["userAgent","platform","appName"]),flash:z(I,["bridge"]),zeroclipboard:{version:Fb.version,config:Fb.config()}}},R=function(){return!!(I.disabled||I.outdated||I.unavailable||I.deactivated)},S=function(a,b){var c,d,e,f={};if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)s.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Fb.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,K[a]||(K[a]=[]),K[a].push(b);if(f.ready&&I.ready&&Fb.emit({type:"ready"}),f.error){var g=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=g.length;d>c;c++)if(I[g[c]]===!0){Fb.emit({type:"error",name:"flash-"+g[c]});break}}}return Fb},T=function(a,b){var c,d,e,f,g;if(0===arguments.length)f=q(K);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)s.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&Fb.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=K[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return Fb},U=function(a){var b;return b="string"==typeof a&&a?x(K[a])||null:x(K)},V=function(a){var b,c,d;return a=db(a),a&&!jb(a)?"ready"===a.type&&I.overdue===!0?Fb.emit({type:"error",name:"flash-overdue"}):(b=w({},a),ib.call(this,b),"copy"===a.type&&(d=pb(L),c=d.data,M=d.formatMap),c):void 0},W=function(){if("boolean"!=typeof I.ready&&(I.ready=!1),!Fb.isFlashUnusable()&&null===I.bridge){var a=O.flashLoadTimeout;"number"==typeof a&&a>=0&&h(function(){"boolean"!=typeof I.deactivated&&(I.deactivated=!0),I.deactivated===!0&&Fb.emit({type:"error",name:"flash-deactivated"})},a),I.overdue=!1,nb()}},X=function(){Fb.clearData(),Fb.blur(),Fb.emit("destroy"),ob(),Fb.off()},Y=function(a,b){var c;if("object"==typeof a&&a&&"undefined"==typeof b)c=a,Fb.clearData();else{if("string"!=typeof a||!a)return;c={},c[a]=b}for(var d in c)"string"==typeof d&&d&&s.call(c,d)&&"string"==typeof c[d]&&c[d]&&(L[d]=c[d])},Z=function(a){"undefined"==typeof a?(A(L),M=null):"string"==typeof a&&s.call(L,a)&&delete L[a]},$=function(a){return"undefined"==typeof a?x(L):"string"==typeof a&&s.call(L,a)?L[a]:void 0},_=function(a){if(a&&1===a.nodeType){c&&(xb(c,O.activeClass),c!==a&&xb(c,O.hoverClass)),c=a,wb(a,O.hoverClass);var b=a.getAttribute("title")||O.title;if("string"==typeof b&&b){var d=mb(I.bridge);d&&d.setAttribute("title",b)}var e=O.forceHandCursor===!0||"pointer"===yb(a,"cursor");Cb(e),Bb()}},ab=function(){var a=mb(I.bridge);a&&(a.removeAttribute("title"),a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.top="1px"),c&&(xb(c,O.hoverClass),xb(c,O.activeClass),c=null)},bb=function(){return c||null},cb=function(a){return"string"==typeof a&&a&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a)},db=function(a){var b;if("string"==typeof a&&a?(b=a,a={}):"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(b=a.type),b){!a.target&&/^(copy|aftercopy|_click)$/.test(b.toLowerCase())&&(a.target=d),w(a,{type:b.toLowerCase(),target:a.target||c||null,relatedTarget:a.relatedTarget||null,currentTarget:I&&I.bridge||null,timeStamp:a.timeStamp||p()||null});var e=N[a.type];return"error"===a.type&&a.name&&e&&(e=e[a.name]),e&&(a.message=e),"ready"===a.type&&w(a,{target:null,version:I.version}),"error"===a.type&&(/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(a.name)&&w(a,{target:null,minimumVersion:J}),/^flash-(outdated|unavailable|deactivated|overdue)$/.test(a.name)&&w(a,{version:I.version})),"copy"===a.type&&(a.clipboardData={setData:Fb.setData,clearData:Fb.clearData}),"aftercopy"===a.type&&(a=qb(a,M)),a.target&&!a.relatedTarget&&(a.relatedTarget=eb(a.target)),a=fb(a)}},eb=function(a){var b=a&&a.getAttribute&&a.getAttribute("data-clipboard-target");return b?f.getElementById(b):null},fb=function(a){if(a&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)){var c=a.target,d="_mouseover"===a.type&&a.relatedTarget?a.relatedTarget:b,g="_mouseout"===a.type&&a.relatedTarget?a.relatedTarget:b,h=Ab(c),i=e.screenLeft||e.screenX||0,j=e.screenTop||e.screenY||0,k=f.body.scrollLeft+f.documentElement.scrollLeft,l=f.body.scrollTop+f.documentElement.scrollTop,m=h.left+("number"==typeof a._stageX?a._stageX:0),n=h.top+("number"==typeof a._stageY?a._stageY:0),o=m-k,p=n-l,q=i+o,r=j+p,s="number"==typeof a.movementX?a.movementX:0,t="number"==typeof a.movementY?a.movementY:0;delete a._stageX,delete a._stageY,w(a,{srcElement:c,fromElement:d,toElement:g,screenX:q,screenY:r,pageX:m,pageY:n,clientX:o,clientY:p,x:o,y:p,movementX:s,movementY:t,offsetX:0,offsetY:0,layerX:0,layerY:0})}return a},gb=function(a){var b=a&&"string"==typeof a.type&&a.type||"";return!/^(?:(?:before)?copy|destroy)$/.test(b)},hb=function(a,b,c,d){d?h(function(){a.apply(b,c)},0):a.apply(b,c)},ib=function(a){if("object"==typeof a&&a&&a.type){var b=gb(a),c=K["*"]||[],d=K[a.type]||[],f=c.concat(d);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof e[i]&&(i=e[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=w({},a),hb(i,j,[k],b))}return this}},jb=function(a){var b=a.target||c||null,e="swf"===a._source;delete a._source;var f=["flash-disabled","flash-outdated","flash-unavailable","flash-deactivated","flash-overdue"];switch(a.type){case"error":-1!==f.indexOf(a.name)&&w(I,{disabled:"flash-disabled"===a.name,outdated:"flash-outdated"===a.name,unavailable:"flash-unavailable"===a.name,deactivated:"flash-deactivated"===a.name,overdue:"flash-overdue"===a.name,ready:!1});break;case"ready":var g=I.deactivated===!0;w(I,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:g,ready:!g});break;case"beforecopy":d=b;break;case"copy":var h,i,j=a.relatedTarget;!L["text/html"]&&!L["text/plain"]&&j&&(i=j.value||j.outerHTML||j.innerHTML)&&(h=j.value||j.textContent||j.innerText)?(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",h),i!==h&&a.clipboardData.setData("text/html",i)):!L["text/plain"]&&a.target&&(h=a.target.getAttribute("data-clipboard-text"))&&(a.clipboardData.clearData(),a.clipboardData.setData("text/plain",h));break;case"aftercopy":Fb.clearData(),b&&b!==vb()&&b.focus&&b.focus();break;case"_mouseover":Fb.focus(b),O.bubbleEvents===!0&&e&&(b&&b!==a.relatedTarget&&!B(a.relatedTarget,b)&&kb(w({},a,{type:"mouseenter",bubbles:!1,cancelable:!1})),kb(w({},a,{type:"mouseover"})));break;case"_mouseout":Fb.blur(),O.bubbleEvents===!0&&e&&(b&&b!==a.relatedTarget&&!B(a.relatedTarget,b)&&kb(w({},a,{type:"mouseleave",bubbles:!1,cancelable:!1})),kb(w({},a,{type:"mouseout"})));break;case"_mousedown":wb(b,O.activeClass),O.bubbleEvents===!0&&e&&kb(w({},a,{type:a.type.slice(1)}));break;case"_mouseup":xb(b,O.activeClass),O.bubbleEvents===!0&&e&&kb(w({},a,{type:a.type.slice(1)}));break;case"_click":d=null,O.bubbleEvents===!0&&e&&kb(w({},a,{type:a.type.slice(1)}));break;case"_mousemove":O.bubbleEvents===!0&&e&&kb(w({},a,{type:a.type.slice(1)}))}return/^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)?!0:void 0},kb=function(a){if(a&&"string"==typeof a.type&&a){var b,c=a.target||null,d=c&&c.ownerDocument||f,g={view:d.defaultView||e,canBubble:!0,cancelable:!0,detail:"click"===a.type?1:0,button:"number"==typeof a.which?a.which-1:"number"==typeof a.button?a.button:d.createEvent?0:1},h=w(g,a);c&&d.createEvent&&c.dispatchEvent&&(h=[h.type,h.canBubble,h.cancelable,h.view,h.detail,h.screenX,h.screenY,h.clientX,h.clientY,h.ctrlKey,h.altKey,h.shiftKey,h.metaKey,h.button,h.relatedTarget],b=d.createEvent("MouseEvents"),b.initMouseEvent&&(b.initMouseEvent.apply(b,h),b._source="js",c.dispatchEvent(b)))}},lb=function(){var a=f.createElement("div");return a.id=O.containerId,a.className=O.containerClass,a.style.position="absolute",a.style.left="0px",a.style.top="-9999px",a.style.width="1px",a.style.height="1px",a.style.zIndex=""+Db(O.zIndex),a},mb=function(a){for(var b=a&&a.parentNode;b&&"OBJECT"===b.nodeName&&b.parentNode;)b=b.parentNode;return b||null},nb=function(){var a,b=I.bridge,c=mb(b);if(!b){var d=ub(e.location.host,O),g="never"===d?"none":"all",h=sb(O),i=O.swfPath+rb(O.swfPath,O);c=lb();var j=f.createElement("div");c.appendChild(j),f.body.appendChild(c);var k=f.createElement("div"),l="activex"===I.pluginType;k.innerHTML='<object id="'+O.swfObjectId+'" name="'+O.swfObjectId+'" width="100%" height="100%" '+(l?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+i+'"')+">"+(l?'<param name="movie" value="'+i+'"/>':"")+'<param name="allowScriptAccess" value="'+d+'"/><param name="allowNetworking" value="'+g+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+h+'"/></object>',b=k.firstChild,k=null,u(b).ZeroClipboard=Fb,c.replaceChild(b,j)}return b||(b=f[O.swfObjectId],b&&(a=b.length)&&(b=b[a-1]),!b&&c&&(b=c.firstChild)),I.bridge=b||null,b},ob=function(){var a=I.bridge;if(a){var b=mb(a);b&&("activex"===I.pluginType&&"readyState"in a?(a.style.display="none",function c(){if(4===a.readyState){for(var d in a)"function"==typeof a[d]&&(a[d]=null);a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b)}else h(c,10)}()):(a.parentNode&&a.parentNode.removeChild(a),b.parentNode&&b.parentNode.removeChild(b))),I.ready=null,I.bridge=null,I.deactivated=null}},pb=function(a){var b={},c={};if("object"==typeof a&&a){for(var d in a)if(d&&s.call(a,d)&&"string"==typeof a[d]&&a[d])switch(d.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":b.text=a[d],c.text=d;break;case"text/html":case"html":case"air:html":case"flash:html":b.html=a[d],c.html=d;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":b.rtf=a[d],c.rtf=d}return{data:b,formatMap:c}}},qb=function(a,b){if("object"!=typeof a||!a||"object"!=typeof b||!b)return a;var c={};for(var d in a)if(s.call(a,d)){if("success"!==d&&"data"!==d){c[d]=a[d];continue}c[d]={};var e=a[d];for(var f in e)f&&s.call(e,f)&&s.call(b,f)&&(c[d][b[f]]=e[f])}return c},rb=function(a,b){var c=null==b||b&&b.cacheBust===!0;return c?(-1===a.indexOf("?")?"?":"&")+"noCache="+p():""},sb=function(a){var b,c,d,f,g="",h=[];if(a.trustedDomains&&("string"==typeof a.trustedDomains?f=[a.trustedDomains]:"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(f=a.trustedDomains)),f&&f.length)for(b=0,c=f.length;c>b;b++)if(s.call(f,b)&&f[b]&&"string"==typeof f[b]){if(d=tb(f[b]),!d)continue;if("*"===d){h.length=0,h.push(d);break}h.push.apply(h,[d,"//"+d,e.location.protocol+"//"+d])}return h.length&&(g+="trustedOrigins="+i(h.join(","))),a.forceEnhancedClipboard===!0&&(g+=(g?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof a.swfObjectId&&a.swfObjectId&&(g+=(g?"&":"")+"swfObjectId="+i(a.swfObjectId)),g},tb=function(a){if(null==a||""===a)return null;if(a=a.replace(/^\s+|\s+$/g,""),""===a)return null;var b=a.indexOf("//");a=-1===b?a:a.slice(b+2);var c=a.indexOf("/");return a=-1===c?a:-1===b||0===c?null:a.slice(0,c),a&&".swf"===a.slice(-4).toLowerCase()?null:a||null},ub=function(){var a=function(a){var b,c,d,e=[];if("string"==typeof a&&(a=[a]),"object"!=typeof a||!a||"number"!=typeof a.length)return e;for(b=0,c=a.length;c>b;b++)if(s.call(a,b)&&(d=tb(a[b]))){if("*"===d){e.length=0,e.push("*");break}-1===e.indexOf(d)&&e.push(d)}return e};return function(b,c){var d=tb(c.swfPath);null===d&&(d=b);var e=a(c.trustedDomains),f=e.length;if(f>0){if(1===f&&"*"===e[0])return"always";if(-1!==e.indexOf(b))return 1===f&&b===d?"sameDomain":"always"}return"never"}}(),vb=function(){try{return f.activeElement}catch(a){return null}},wb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)||a.classList.add(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},xb=function(a,b){if(!a||1!==a.nodeType)return a;if(a.classList)return a.classList.contains(b)&&a.classList.remove(b),a;if("string"==typeof b&&b){var c=b.split(/\s+/);if(1===a.nodeType&&a.className){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}}return a},yb=function(a,b){var c=e.getComputedStyle(a,null).getPropertyValue(b);return"cursor"!==b||c&&"auto"!==c||"A"!==a.nodeName?c:"pointer"},zb=function(){var a,b,c,d=1;return"function"==typeof f.body.getBoundingClientRect&&(a=f.body.getBoundingClientRect(),b=a.right-a.left,c=f.body.offsetWidth,d=o(b/c*100)/100),d},Ab=function(a){var b={left:0,top:0,width:0,height:0};if(a.getBoundingClientRect){var c,d,g,h=a.getBoundingClientRect();"pageXOffset"in e&&"pageYOffset"in e?(c=e.pageXOffset,d=e.pageYOffset):(g=zb(),c=o(f.documentElement.scrollLeft/g),d=o(f.documentElement.scrollTop/g));var i=f.documentElement.clientLeft||0,j=f.documentElement.clientTop||0;b.left=h.left+c-i,b.top=h.top+d-j,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},Bb=function(){var a;if(c&&(a=mb(I.bridge))){var b=Ab(c);w(a.style,{width:b.width+"px",height:b.height+"px",top:b.top+"px",left:b.left+"px",zIndex:""+Db(O.zIndex)})}},Cb=function(a){I.ready===!0&&(I.bridge&&"function"==typeof I.bridge.setHandCursor?I.bridge.setHandCursor(a):I.ready=!1)},Db=function(a){if(/^(?:auto|inherit)$/.test(a))return a;var b;return"number"!=typeof a||n(a)?"string"==typeof a&&(b=Db(l(a,10))):b=a,"number"==typeof b?b:"auto"},Eb=function(a){function b(a){var b=a.match(/[\d]+/g);return b.length=3,b.join(".")}function c(a){return!!a&&(a=a.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a)||"chrome.plugin"===a.slice(-13))}function d(a){a&&(i=!0,a.version&&(l=b(a.version)),!l&&a.description&&(l=b(a.description)),a.filename&&(k=c(a.filename)))}var e,f,h,i=!1,j=!1,k=!1,l="";if(g.plugins&&g.plugins.length)e=g.plugins["Shockwave Flash"],d(e),g.plugins["Shockwave Flash 2.0"]&&(i=!0,l="2.0.0.11");else if(g.mimeTypes&&g.mimeTypes.length)h=g.mimeTypes["application/x-shockwave-flash"],e=h&&h.enabledPlugin,d(e);else if("undefined"!=typeof a){j=!0;try{f=new a("ShockwaveFlash.ShockwaveFlash.7"),i=!0,l=b(f.GetVariable("$version"))}catch(n){try{f=new a("ShockwaveFlash.ShockwaveFlash.6"),i=!0,l="6.0.21"}catch(o){try{f=new a("ShockwaveFlash.ShockwaveFlash"),i=!0,l=b(f.GetVariable("$version"))}catch(p){j=!1}}}}I.disabled=i!==!0,I.outdated=l&&m(l)<m(J),I.version=l||"0.0.0",I.pluginType=k?"pepper":j?"activex":i?"netscape":"unknown"};Eb(j);var Fb=function(){return this instanceof Fb?void("function"==typeof Fb._createClient&&Fb._createClient.apply(this,v(arguments))):new Fb};r(Fb,"version",{value:"2.1.6",writable:!1,configurable:!0,enumerable:!0}),Fb.config=function(){return P.apply(this,v(arguments))},Fb.state=function(){return Q.apply(this,v(arguments))},Fb.isFlashUnusable=function(){return R.apply(this,v(arguments))},Fb.on=function(){return S.apply(this,v(arguments))},Fb.off=function(){return T.apply(this,v(arguments))},Fb.handlers=function(){return U.apply(this,v(arguments))},Fb.emit=function(){return V.apply(this,v(arguments))},Fb.create=function(){return W.apply(this,v(arguments))},Fb.destroy=function(){return X.apply(this,v(arguments))},Fb.setData=function(){return Y.apply(this,v(arguments))},Fb.clearData=function(){return Z.apply(this,v(arguments))},Fb.getData=function(){return $.apply(this,v(arguments))},Fb.focus=Fb.activate=function(){return _.apply(this,v(arguments))},Fb.blur=Fb.deactivate=function(){return ab.apply(this,v(arguments))},Fb.activeElement=function(){return bb.apply(this,v(arguments))};var Gb=0,Hb={},Ib=0,Jb={},Kb={};w(O,{autoActivate:!0});var Lb=function(a){var b=this;b.id=""+Gb++,Hb[b.id]={instance:b,elements:[],handlers:{}},a&&b.clip(a),Fb.on("*",function(a){return b.emit(a)}),Fb.on("destroy",function(){b.destroy()}),Fb.create()},Mb=function(a,b){var c,d,e,f={},g=Hb[this.id]&&Hb[this.id].handlers;if("string"==typeof a&&a)e=a.toLowerCase().split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)s.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.on(c,a[c]);if(e&&e.length){for(c=0,d=e.length;d>c;c++)a=e[c].replace(/^on/,""),f[a]=!0,g[a]||(g[a]=[]),g[a].push(b);if(f.ready&&I.ready&&this.emit({type:"ready",client:this}),f.error){var h=["disabled","outdated","unavailable","deactivated","overdue"];for(c=0,d=h.length;d>c;c++)if(I[h[c]]){this.emit({type:"error",name:"flash-"+h[c],client:this});break}}}return this},Nb=function(a,b){var c,d,e,f,g,h=Hb[this.id]&&Hb[this.id].handlers;if(0===arguments.length)f=q(h);else if("string"==typeof a&&a)f=a.split(/\s+/);else if("object"==typeof a&&a&&"undefined"==typeof b)for(c in a)s.call(a,c)&&"string"==typeof c&&c&&"function"==typeof a[c]&&this.off(c,a[c]);if(f&&f.length)for(c=0,d=f.length;d>c;c++)if(a=f[c].toLowerCase().replace(/^on/,""),g=h[a],g&&g.length)if(b)for(e=g.indexOf(b);-1!==e;)g.splice(e,1),e=g.indexOf(b,e);else g.length=0;return this},Ob=function(a){var b=null,c=Hb[this.id]&&Hb[this.id].handlers;return c&&(b="string"==typeof a&&a?c[a]?c[a].slice(0):[]:x(c)),b},Pb=function(a){if(Ub.call(this,a)){"object"==typeof a&&a&&"string"==typeof a.type&&a.type&&(a=w({},a));var b=w({},db(a),{client:this});Vb.call(this,b)}return this},Qb=function(a){a=Wb(a);for(var b=0;b<a.length;b++)if(s.call(a,b)&&a[b]&&1===a[b].nodeType){a[b].zcClippingId?-1===Jb[a[b].zcClippingId].indexOf(this.id)&&Jb[a[b].zcClippingId].push(this.id):(a[b].zcClippingId="zcClippingId_"+Ib++,Jb[a[b].zcClippingId]=[this.id],O.autoActivate===!0&&Xb(a[b]));var c=Hb[this.id]&&Hb[this.id].elements;-1===c.indexOf(a[b])&&c.push(a[b])}return this},Rb=function(a){var b=Hb[this.id];if(!b)return this;var c,d=b.elements;a="undefined"==typeof a?d.slice(0):Wb(a);for(var e=a.length;e--;)if(s.call(a,e)&&a[e]&&1===a[e].nodeType){for(c=0;-1!==(c=d.indexOf(a[e],c));)d.splice(c,1);var f=Jb[a[e].zcClippingId];if(f){for(c=0;-1!==(c=f.indexOf(this.id,c));)f.splice(c,1);0===f.length&&(O.autoActivate===!0&&Yb(a[e]),delete a[e].zcClippingId)}}return this},Sb=function(){var a=Hb[this.id];return a&&a.elements?a.elements.slice(0):[]},Tb=function(){this.unclip(),this.off(),delete Hb[this.id]},Ub=function(a){if(!a||!a.type)return!1;if(a.client&&a.client!==this)return!1;var b=Hb[this.id]&&Hb[this.id].elements,c=!!b&&b.length>0,d=!a.target||c&&-1!==b.indexOf(a.target),e=a.relatedTarget&&c&&-1!==b.indexOf(a.relatedTarget),f=a.client&&a.client===this;return d||e||f?!0:!1},Vb=function(a){if("object"==typeof a&&a&&a.type){var b=gb(a),c=Hb[this.id]&&Hb[this.id].handlers["*"]||[],d=Hb[this.id]&&Hb[this.id].handlers[a.type]||[],f=c.concat(d);if(f&&f.length){var g,h,i,j,k,l=this;for(g=0,h=f.length;h>g;g++)i=f[g],j=l,"string"==typeof i&&"function"==typeof e[i]&&(i=e[i]),"object"==typeof i&&i&&"function"==typeof i.handleEvent&&(j=i,i=i.handleEvent),"function"==typeof i&&(k=w({},a),hb(i,j,[k],b))}return this}},Wb=function(a){return"string"==typeof a&&(a=[]),"number"!=typeof a.length?[a]:a},Xb=function(a){if(a&&1===a.nodeType){var b=function(a){(a||(a=e.event))&&("js"!==a._source&&(a.stopImmediatePropagation(),a.preventDefault()),delete a._source)},c=function(c){(c||(c=e.event))&&(b(c),Fb.focus(a))};a.addEventListener("mouseover",c,!1),a.addEventListener("mouseout",b,!1),a.addEventListener("mouseenter",b,!1),a.addEventListener("mouseleave",b,!1),a.addEventListener("mousemove",b,!1),Kb[a.zcClippingId]={mouseover:c,mouseout:b,mouseenter:b,mouseleave:b,mousemove:b}}},Yb=function(a){if(a&&1===a.nodeType){var b=Kb[a.zcClippingId];if("object"==typeof b&&b){for(var c,d,e=["move","leave","enter","out","over"],f=0,g=e.length;g>f;f++)c="mouse"+e[f],d=b[c],"function"==typeof d&&a.removeEventListener(c,d,!1);delete Kb[a.zcClippingId]}}};Fb._createClient=function(){Lb.apply(this,v(arguments))},Fb.prototype.on=function(){return Mb.apply(this,v(arguments))},Fb.prototype.off=function(){return Nb.apply(this,v(arguments))},Fb.prototype.handlers=function(){return Ob.apply(this,v(arguments))},Fb.prototype.emit=function(){return Pb.apply(this,v(arguments))},Fb.prototype.clip=function(){return Qb.apply(this,v(arguments))},Fb.prototype.unclip=function(){return Rb.apply(this,v(arguments))},Fb.prototype.elements=function(){return Sb.apply(this,v(arguments))},Fb.prototype.destroy=function(){return Tb.apply(this,v(arguments))},Fb.prototype.setText=function(a){return Fb.setData("text/plain",a),this},Fb.prototype.setHtml=function(a){return Fb.setData("text/html",a),this},Fb.prototype.setRichText=function(a){return Fb.setData("application/rtf",a),this},Fb.prototype.setData=function(){return Fb.setData.apply(this,v(arguments)),this},Fb.prototype.clearData=function(){return Fb.clearData.apply(this,v(arguments)),this},Fb.prototype.getData=function(){return Fb.getData.apply(this,v(arguments))},"function"==typeof define&&define.amd?define(function(){return Fb}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Fb:a.ZeroClipboard=Fb}(function(){return this||window}());
//# sourceMappingURL=ZeroClipboard.min.map;
(function ($) {

  var urban = window.urban = window.urban || {};

  urban.bitly = {

    // Adds the copy to clipboard function for the Short URL Block
    initializeShortUrlBlock: function() {
      try {
        var client = new ZeroClipboard($(".btn-short-url-quick-copy"), {
          moviePath: "zeroclipboard/ZeroClipboard.swf",
          debug: false
        });
      } catch (exception) {
        console.log(exception);
      }

      $('.election-blog-post input[name="this_shortened"]').each(function() {
        $(this).val($(this).parents('.pane-shorten-shorten-short').attr('data-short-link') );
      });
      // Add shortened url to urbanwire and features footer shares.
      // TODO: find out why they aren't picking up shorturl during render.
      $('.node-type-urban-wire-post .toolbox_nocounter, .section-features .toolbox_nocounter').each(function() {
        var shorturl = $('input[name="this_shortened"]').val();
        $(this).attr('addthis:url', shorturl);
      });

    },

    // Check if flash plugin is available
    hasFlash: function() {
      try {
        var obj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (obj) {
          return true;
        }
      } catch (e) {
        if (navigator.mimeTypes
              && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
              && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
          return true;
        }
      }
      return false;
    },

    // Handle background color change for the button
    initializeBackgroundChangeOnHover: function() {

      $('.btn-short-url-quick-copy')
      .off('mouseenter mouseleave')
      .on('mouseenter', function() {
        $(this).css({
          'background-color' : '#000000'
        });
      })
      .on('mouseleave', function() {
        $(this).css({
          'background-color' : '#1696d2'
        });
      });

    },

    // Bind onclick event to select all
    initializeSelectAllOnClick: function() {
      $('.btn-short-url-quick-copy')

      .off('click')
      .on('click', function() {

        // Select text only when flash is not available
        // @TODO: this is working when if you disabled the the if statement and will output this on firefox
        //if (!urban.bitly.hasFlash()) {
          $(this).prev().find('input[name="this_shortened"]').select();
          $(this).prev().find('.this-shortened-instruction').remove();
          $(this).prev().find('div.form-item').parent().append('<div class="this-shortened-instruction">Press Ctrl+C to copy</div>');
        //}
      });
    }
  };

  // $(window).ready(function() {

  // });

  Drupal.behaviors.addBitlySettings = {
    attach: function(context, settings) {
      urban.bitly.initializeShortUrlBlock();
      urban.bitly.initializeBackgroundChangeOnHover();
      urban.bitly.initializeSelectAllOnClick();
      //small hack for firefox so that share button will be clickable
      $("#global-zeroclipboard-html-bridge").css({"position":"relative"});
    }
  };


})(jQuery);
;
//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});;
(function ($) {

  Drupal.behaviors.Search = {

    // Attach to the objects on ajax reactions.
    attach: function() {

        // Create a count for the search results
        Drupal.behaviors.Search.count = 0;

        // Centralize our needed objects.
        Drupal.behaviors.Search.search_form = $('.search'),
        Drupal.behaviors.Search.search_wrapper = $('#search-wrapper'),
        Drupal.behaviors.Search.search_mobile_collapse = $('.search-trigger, .search-icon'),
        Drupal.behaviors.Search.search_button = $('.urbaninstitute-search-keyword-form .keyword-search-icon, .row-keywords .keyword-search-icon'),
        Drupal.behaviors.Search.power_search_tooltip = $('.tooltip'),
        Drupal.behaviors.Search.header = $('header.header'),
        Drupal.behaviors.Search.power_search_wrapper = $('.advanced_search-wrapper'),
        Drupal.behaviors.Search.header_power_search_wrapper = $('.navigation-header #search-block-form .advanced_search-wrapper, .navigation-header #search-block-form--2 .advanced_search-wrapper'),
        Drupal.behaviors.Search.power_search_form_wrapper = $('#search-block-form .advanced_search-wrapper, #search-block-form--2 .advanced_search-wrapper'),
        Drupal.behaviors.Search.results_power_search_wrapper = $('.main .advanced_search-wrapper'),
        Drupal.behaviors.Search.power_search_toggle = $('#edit-advanced-search, #edit-advanced-search--2'),
        Drupal.behaviors.Search.page_header = Drupal.behaviors.Search.header.find('div.page-header'),
        Drupal.behaviors.Search.power_search_clear_btn = $('.clear-search-params'),
        Drupal.behaviors.Search.power_search_results_btn = $('.main-wrapper .action-row #power-search-btn, .advanced_search-wrapper .action-row input'),
        Drupal.behaviors.Search.search_form_facet_contents = Drupal.behaviors.Search.header_power_search_wrapper.find('div.contents:not(.persist)'),
        Drupal.behaviors.Search.search_form_facet_toggle = Drupal.behaviors.Search.header_power_search_wrapper.find('div.expand'),
        Drupal.behaviors.Search.search_form_facet_label = Drupal.behaviors.Search.power_search_form_wrapper.find('.inner > label'),
        Drupal.behaviors.Search.power_search_form_facet_toggle = Drupal.behaviors.Search.results_power_search_wrapper.find('div.expand'),
        Drupal.behaviors.Search.power_search_form_facet_label = Drupal.behaviors.Search.results_power_search_wrapper.find('.row > label'),
        Drupal.behaviors.Search.power_link = $('.power-link'),
        Drupal.behaviors.Search.simple_switch = $('.simple-switch a'),
        Drupal.behaviors.Search.mobile_search = $('#mobile-search'),
        Drupal.behaviors.Search.desktop_search = $('#desktop-search'),
        Drupal.behaviors.Search.power_search_result_total = $('.advanced_search-wrapper .action-row .results-count'),
        Drupal.behaviors.Search.power_search_results_header_counter = $('.results-header .count');

        // These Objects are related to the power search forms.
        Drupal.behaviors.Search.search_api_views_fulltext = $('.form-item-search-block-form .form-text, .form-item-keyword .form-text'),
        Drupal.behaviors.Search.field_research_area_checkboxes = $('.urbaninstitute-search-empty-research-area ul.form-checkboxes li, .row--research-areas .pane-block > ul li'),
        Drupal.behaviors.Search.field_author_glossary = $('.page-search .pane-urbaninstitute-search-search-author-glossary .glossary a, #block-search-form .row-authors .glossary a, .page-research .urbaninstitute-search-glossary .glossary a'),
        Drupal.behaviors.Search.field_author_checkboxes = $('.urbaninstitute-search-empty-authors ul.form-checkboxes .form-checkbox, .row--authors .form-checkbox'),
        Drupal.behaviors.Search.field_policy_center = $('#edit-policy-center-filter, #edit-policy-center-filter--2, .facetapi-urbaninstitute-search-select.facetapi-facet-field-policy-center'),

        Drupal.behaviors.Search.field_cross_center_initiatives = $('#edit-cci-filter, #edit-cci-filter--2, .facetapi-urbaninstitute-search-select.facetapi-facet-field-cross-center-initiative'),
        Drupal.behaviors.Search.created_oldest = $('.urbaninstitute-search-date-range .form-item-created-oldest .form-text'),
        Drupal.behaviors.Search.created_newest = $('.urbaninstitute-search-date-range .form-item-created-newest .form-text');

        // These are the two bx-sliders for field_authors
        Drupal.behaviors.Search.search_field_author_bx = $('.row-authors #urbaninstitute-search-empty-authors > div > div > .bx-wrapper'),
        Drupal.behaviors.Search.power_search_field_author_bx = $('.row--authors .pane-facetapi .bx-wrapper');

        // Author Glossary associated objects
        // Drupal.behaviors.Search.search_form_field_author_wrapper = $('.row-authors .urbaninstitute-search-empty-authors'),
        // Drupal.behaviors.Search.power_search_form_field_author_wrapper = $('.row--authors .pane-facetapi > ul'),
        // Drupal.behaviors.Search.second_search_form_field_author_wrapper = $('.row-authors .urbaninstitute-search-empty-authors--2'),
        // Drupal.behaviors.Search.search_form_field_author_clones = $('.row-authors .urbaninstitute-search-empty-authors ul li').clone(), //Search form at research page
        // Drupal.behaviors.Search.header_search_form_field_author_clones = $('.row-authors .urbaninstitute-search-empty-authors--2 ul li').clone(), //Search form in header
        // Drupal.behaviors.Search.power_search_form_field_author_clones = $('.row--authors .pane-facetapi > ul > li').clone(), //Power Search form in body
        // Drupal.behaviors.Search.search_form_field_author = $('.row-authors .form-checkboxes > ul > li'),
        // Drupal.behaviors.Search.power_search_form_field_author = $('.row--authors .pane-facetapi > ul > li');

        Drupal.behaviors.Search.author_slider_settings = {
          auto: false,
          infiniteLoop: false,
          hideControlOnEnd: true,
          responsive: true,
          pager: false,
          maxSlides: 3,
          slideWidth: 280
        };

        // Save authors list to main form tag dataset.
        // if ($('.row-authors .urbaninstitute-search-empty-authors').data("authors") != undefined) {
        //     Drupal.behaviors.Search.search_form_field_author_clones = $('.row-authors .urbaninstitute-search-empty-authors').data("authors");
        // }
        // else {
        //     $('.row-authors .urbaninstitute-search-empty-authors').data("authors", Drupal.behaviors.Search.search_form_field_author_clones);
        // }

        // Objects Related to the Search Page Header
        Drupal.behaviors.Search.results_header_left = $('#search-header-left-content'),
        Drupal.behaviors.Search.results_header_right = $('#search-header-right-content'),
        Drupal.behaviors.Search.research_header = $('.page-research .power-search-link'),
        Drupal.behaviors.Search.results_header_counter = $('.view-search .view-header'),
        Drupal.behaviors.Search.results_simple_counter = $('.simple-search-text'),
        Drupal.behaviors.Search.results_power_search_counter = $('.results-header .results .count'),
        Drupal.behaviors.Search.results_research_details_counter = $('.page-search-power-research-details .results-header .results .count');
        Drupal.behaviors.Search.results_engagement_details_counter = $('.page-search-power-engagement-details .results-header .results .count');

        // Specific toggles for various Facets
        Drupal.behaviors.Search.facet_toggle = {};
        Drupal.behaviors.Search.facet_toggle.keyword = $('.search-block-form .row-keywords .expand, .row--keywords .expand'),
        Drupal.behaviors.Search.facet_toggle.field_research_area = $('.row-research_areas .expand, .row--research-areas .expand'),
        Drupal.behaviors.Search.facet_toggle.field_author = $('.row-authors .expand, .row--authors .expand'),
        Drupal.behaviors.Search.facet_toggle.centers = $('.row-pc_cci .expand, .row--pci .expand'),
        Drupal.behaviors.Search.facet_toggle.created = $('.row-date_range .expand, .row--date-range .expand');

        // Related to AJAX responses
        Drupal.behaviors.Search.field_research_area_results_wrapper = $('.power-search-wrapper-results .views-limit-grouping');

        // Power search dropdown setup, onload and resize
        Drupal.behaviors.Search.power_search_init = false;
        $(window).on('resize', function() {
          Drupal.behaviors.Search.power_search_init = false;
        });

        // Initialize our Form in the header
        $(document).ready(Drupal.behaviors.Search.initialize_search_form);

        // Initialize our Form in the body.
        if (Drupal.behaviors.Search.power_search_wrapper.length > 0) {
          $(document).ready(Drupal.behaviors.Search.initialize_power_form);
        }
        // Handle Resize events
        $(window).resize(Drupal.behaviors.Search.search_window_resized);

        // Define the spinner
        Drupal.behaviors.Search.spinner = new Spinner().spin();

    },

    /****************************
    * Initialization Functions.
    ****************************/

    /*
    * Handling for Search Form Reactions
    */
    initialize_search_form: function() {

      if (Drupal.settings.search == undefined) {
        Drupal.settings.search = {};
        Drupal.settings.search.search_api_views_fulltext = '';
      }
      else if (Drupal.settings.search.search_api_views_fulltext == undefined) {
        Drupal.settings.search.search_api_views_fulltext = '';
      }

      Drupal.behaviors.Search.power_search_toggle.hover(
        // When hovering over the toggle button display the tooltip
        function() {
          if (!$(this).hasClass('on')) {
            Drupal.behaviors.Search.power_search_tooltip.addClass('on');
          }
        }, function() {
          Drupal.behaviors.Search.power_search_tooltip.removeClass('on');
        }
      );

      // Toggle Displaying and Hiding the Power Search Controls in the header
      Drupal.behaviors.Search.power_search_toggle.on('click', Drupal.behaviors.Search.header_power_search_toggle );

      // Redirect to simple search landing page
      Drupal.behaviors.Search.simple_switch.on('click', function() {
        var searched_keyword = '';
        if( $('.form-item-search-block-form .form-text').val().length > 0) {
          searched_keyword = '?search_api_views_fulltext=' + $('.form-item-search-block-form .form-text').attr('value');
        }
        $(this).attr('href', '/search' + searched_keyword);
      });

      // Toggle Facets when user clicks the Toggle button
      Drupal.behaviors.Search.search_form_facet_toggle.off('click').on('click', Drupal.behaviors.Search.header_power_search_facet_toggle);
      Drupal.behaviors.Search.search_form_facet_label.off('click').on('click', Drupal.behaviors.Search.header_power_search_facet_toggle);

      Drupal.behaviors.Search.power_search_form_facet_toggle.off('click').on('click', Drupal.behaviors.Search.results_power_search_facet_toggle);
      Drupal.behaviors.Search.power_search_form_facet_label.off('click').on('click', Drupal.behaviors.Search.results_power_search_facet_toggle);


      // React when the search icon buttom from mobile is clicked
      Drupal.behaviors.Search.search_mobile_collapse.on('click', Drupal.behaviors.Search.collapse_mobile_search);

      // React to when a user clicks the search icon button from power search
      Drupal.behaviors.Search.search_button.on('click', Drupal.behaviors.Search.react_see_results);

      // React when a user changes the keyword field
      Drupal.behaviors.Search.search_api_views_fulltext.on('keyup', Drupal.behaviors.Search.search_keyword_changed);

      // React when a user selects a Research Area Checkbox
      Drupal.behaviors.Search.field_research_area_checkboxes.on('click', function(event) {
        Drupal.behaviors.Search.field_research_area_changed(event);
        // We use preventDefault() here because clicking a label triggers a click on the input by default in JS
        event.preventDefault();
      });
      Drupal.behaviors.Search.field_research_area_checkboxes.find('input').on('click', function(event) {
        Drupal.behaviors.Search.field_research_area_changed_check(event);
        // We use stopImmediatePropagation() here because clicking the input will trigger a click on the label
        event.stopImmediatePropagation();
      });

      // Build the values in the form from the Drupal.settings.search object
      if (Drupal.settings.search !== undefined){
        if (Drupal.settings.search.search_api_views_fulltext !== undefined) {
          Drupal.behaviors.Search.search_api_views_fulltext.val(Drupal.settings.search.search_api_views_fulltext);
        }
      }
      else {
        Drupal.settings.search = {}; // In case we are not on a search page.
      }

      // Set the field_research_area checkboxes
      Drupal.behaviors.Search.set_field_research_area_checkboxes();

      // Initialize Author Glossary
      Drupal.behaviors.Search.initialize_field_author_glossary();

      // Handle filtering authors by their initials
      Drupal.behaviors.Search.field_author_glossary.off('click');
      Drupal.behaviors.Search.field_author_glossary.on('click', Drupal.behaviors.Search.react_field_author_glossary);
      $('.row-authors .glossary li a').each(function(){
        if ($(this).html() == 'A') {
          $(this).trigger('click');
        }
      });

      // Initialize the choosen plugin fro the CCI and PC facets.
      Drupal.behaviors.Search.initializeChosen();

      // Initialize the results header
      Drupal.behaviors.Search.initializeSearchResultHeader();

      // React to date fields
      Drupal.behaviors.Search.created_oldest.on('change', Drupal.behaviors.Search.react_created_oldest_range);
      if (typeof Drupal.settings.search.created_oldest == 'string') {
        if(Drupal.behaviors.Search.validateDate( Drupal.settings.search.created_oldest, true )) {
          Drupal.behaviors.Search.created_oldest.val(Drupal.settings.search.created_oldest);
        }
       }

      Drupal.behaviors.Search.created_newest.on('change', Drupal.behaviors.Search.react_created_newest_range);
      if (typeof Drupal.settings.search.created_newest == 'string') {
        if(Drupal.behaviors.Search.validateDate( Drupal.settings.search.created_newest, true )) {
          Drupal.behaviors.Search.created_newest.val(Drupal.settings.search.created_newest);
          Drupal.behaviors.Search.facet_toggle.created.trigger('click');
        }
       }

      // React to See Results clicked.
      Drupal.behaviors.Search.power_search_results_btn.on('click', Drupal.behaviors.Search.react_see_results);

      if (Drupal.behaviors.Search.results_simple_counter.length > 0 && typeof Drupal.settings.power == 'undefined') {
        var total_search_results = $(".view-id-search.view-display-id-block_1 .view-header").text();
        Drupal.behaviors.Search.results_simple_counter.html(total_search_results + " matches we've found for you...");
        //Commented out as usless additional query to server.
        //Drupal.behaviors.Search.initialize_simple_search_results();
      }

     if ( Drupal.settings.power == 1) {
       Drupal.behaviors.Search.initialize_power_search_results();
     }

     if ( Drupal.settings.power_search_details == 1) {
      Drupal.behaviors.Search.initialize_power_search_detail_results();
     }

    },

    collapse_mobile_search: function() {
      $('.search-icon').toggleClass('active');
      $('.search').toggleClass('on');
      $('.power-link').toggleClass('on');
    },

    /**
    * Initializes the display for the Power Search Details page
    */
    initialize_power_search_detail_results: function() {
      // Get the total and render it.

      Drupal.behaviors.Search.convert_facets_to_fields();
      // We are now grabbing the printed count from the views template.  This count has so far always shown 1 more than the actual
      // Results so we will subtract that here in order to get the correct count for the details page.
      var matches = 0;
      if ((document.URL.indexOf('engagement-details') > -1)) {
        matches = parseInt($('.view-display-id-power_search_detail .view-header').html());
        Drupal.behaviors.Search.results_engagement_details_counter.html(matches);
      }
      else if ((document.URL.indexOf('research-details') > -1)) {
        matches = parseInt($('.view-display-id-power_search_detail_research_areas .view-header').html());
        Drupal.behaviors.Search.results_research_details_counter.html(matches);
      }

      $('#search-header-left-details .simple-search-text').html( matches + " matches we've found for you...");
      // Render the header with the searched query.
      Drupal.behaviors.Search.power_search_results_header_display();
      // Set up the back link
      $('.search-power-details-back').on('click', function() {
        window.history.go(-1);
      });
    },

    /**
    * Initialize Power Search Results
    */
    initialize_power_search_results: function() {
      // Apply the spinner to the Power search results section
      $('.results-spinner').append(Drupal.behaviors.Search.spinner.el);

      // Render the header with the searched query.
      Drupal.behaviors.Search.power_search_results_header_display();

      // Start rendering results.
      Drupal.behaviors.Search.build_ajax_requests();
    },

    // Why was this here??
    //spinner: new Spinner().spin(),

    /**
    * Initialize Simple Search results
    */
    initialize_simple_search_results: function() {
      Drupal.behaviors.Search.simple_search_ajax_count();
    },

    /**
    * Handling for Power Search Form Reactions
    */
    initialize_power_form: function() {
      // The User wants to clear their search parameters.
      Drupal.behaviors.Search.power_search_clear_btn.on('click', Drupal.behaviors.Search.power_search_clear_parameters);
    },

    /**
    * Initialize the Author Glossary
    */
    initialize_field_author_glossary: function() {
      // Alphabetize the names
      // Drupal.behaviors.Search.field_author_sort();

      if (typeof Drupal.settings.search.field_author !== 'undefined') {
        Drupal.behaviors.Search.facet_toggle.field_author.trigger('click');
      }
    },

    /**
    * Initialize Chosen dropdowns on CCI and PC
    */
    initializeChosen: function () {
      if (typeof Drupal.settings.search.field_policy_center == 'string') {
        Drupal.behaviors.Search.field_policy_center.val('field_policy_center:' + Drupal.settings.search.field_policy_center);
      }

      Drupal.behaviors.Search.field_policy_center.chosen({
        width: "100%",
        no_results_text: "Oops, no Policy Center found!"
      });

      Drupal.behaviors.Search.field_policy_center.on('change', Drupal.behaviors.Search.react_field_policy_center);

      if (typeof Drupal.settings.search.field_cross_center_initiative == 'string') {
        Drupal.behaviors.Search.field_cross_center_initiatives.val('field_cross_center_initiative:' + Drupal.settings.search.field_cross_center_initiative);
      }

      Drupal.behaviors.Search.field_cross_center_initiatives.chosen({
        width: "100%",
        no_results_text: "Oops, no Cross Center Initiatives found!"
      });
      Drupal.behaviors.Search.field_cross_center_initiatives.on('change', Drupal.behaviors.Search.react_field_cross_center_initiative);

      // Expand the facet if either policy center or cci is selected
      if (typeof Drupal.settings.search.field_cross_center_initiative == 'string' || typeof Drupal.settings.search.field_policy_center == 'string') {
        Drupal.behaviors.Search.facet_toggle.centers.trigger('click');
      }

      $('#views-exposed-form-search-block-1 select').chosen({
        width: "200px",
        allow_single_deselect: true,
        no_results_text: "Nada",
        disable_search_threshold: 20,
      });


    },

    /**
    * Initialize the Search Result header
    */
    initializeSearchResultHeader: function() {

      // If this is a Power search, activate header and set up Simple Search redirect
      var searchURL = document.URL.split("?");
      var searchURLArray = searchURL[0].split("/");
      if (searchURLArray[(searchURLArray.length - 1)] == 'power') {
        Drupal.behaviors.Search.results_header_left.removeClass('active');
        Drupal.behaviors.Search.results_header_right.addClass('active');
        var searchParamArray = searchURL[1].split('&');
        var correspondingSimpleSearchURL = searchURL[0].substring(0, searchURL[0].indexOf("/power")) + '?' + searchParamArray[0];
        Drupal.behaviors.Search.results_header_left.on('click', function() {
          window.location.href = correspondingSimpleSearchURL;
        });
      }

      // Turn on Power Search
      Drupal.behaviors.Search.results_header_right.on('click', function(Event) {
          Drupal.behaviors.Search.results_header_left.removeClass('active');
          Drupal.behaviors.Search.results_header_right.addClass('active');
          Drupal.behaviors.Search.results_power_search_wrapper.slideDown(400, function() {
            Drupal.behaviors.Search.results_power_search_wrapper.addClass('open');
          });
      });

      // Turn off Power Search
        Drupal.behaviors.Search.results_header_left.on('click', function() {
          Drupal.behaviors.Search.results_header_left.addClass('active');
          Drupal.behaviors.Search.results_header_right.removeClass('active');
          Drupal.behaviors.Search.results_power_search_wrapper.removeClass('open').slideUp();
        });

      // Turn on/off Power Search at research page
      Drupal.behaviors.Search.research_header.on('click', function() {
        if (Drupal.behaviors.Search.research_header.hasClass('active')) {
          Drupal.behaviors.Search.research_header.removeClass('active');
          Drupal.behaviors.Search.results_power_search_wrapper.removeClass('open').slideUp();
        }
        else {
          Drupal.behaviors.Search.research_header.addClass('active');
          Drupal.behaviors.Search.results_power_search_wrapper.slideDown(400, function() {
            Drupal.behaviors.Search.results_power_search_wrapper.addClass('open');
          });
        }
      });

    },

    /***************************************
    * Event handlers for Search on the site.
    ****************************************/

    /**
    * Respond to a window resize event
    */
    search_window_resized: function(Event) {
      if ($(window).width() < 680 && Drupal.behaviors.Search.mobile_search.is(':empty')) {
        Drupal.behaviors.Search.mobile_search.append( Drupal.behaviors.Search.search_wrapper );
      }
      if ($(window).width() >= 680 && ! Drupal.behaviors.Search.mobile_search.is(':empty')) {
        Drupal.behaviors.Search.desktop_search.append( Drupal.behaviors.Search.search_wrapper );
      }
    },

    /**
    * Responds to user input on the Keyword fields
    */
    search_keyword_changed: function(Event) {
      if (Event.which == 13) {
        Event.preventDefault();
      }
      else if (!Event.ctrlKey && Event.keyCode !== 91) {
        var new_value = $(this).val();
        Drupal.behaviors.Search.search_api_views_fulltext.val(new_value);
        Drupal.settings.search.search_api_views_fulltext = new_value;
      }
    },

    /**
    * Responds to a user clicking on a Research Area checkbox
    */
    field_research_area_changed: function(Event) {
      var status = !($(Event.currentTarget).find('input').prop('checked'));
      $(Event.currentTarget).find('input').prop('checked', status);
      Drupal.behaviors.Search.field_research_area_checkboxes.each(function() {
        if ($(this).find('input').val() == $(Event.currentTarget).find('input').val()) {
          $(this).find('input').prop('checked', status );
        }
      });
      Drupal.behaviors.Search.update_field_research_area();
    },

    field_research_area_changed_check: function(Event) {
      var status = $(Event.currentTarget).prop('checked');
      var researchAreaChanged = $(Event.currentTarget).context.value;
      var thisResearchArea = '';
      Drupal.behaviors.Search.field_research_area_checkboxes.each(function() {
        thisResearchArea = $(this).context.firstChild.value;
        if (thisResearchArea == researchAreaChanged) {
          $(this).find('input').prop('checked', status);
        }
      });
      Drupal.behaviors.Search.update_field_research_area();
    },

    /**
    * Toggle the display of the Search Form Power Search controls
    */
    header_power_search_toggle: function(Event) {
      // When the user clicks the toggle button display the power search form.
      Event.preventDefault();
      if (Drupal.behaviors.Search.header_power_search_wrapper.is(':animated')) {
        return false;
      }

      // setup, onload & resize, set width of power search dropdown, get heights of expandable elements for animating
      if (!Drupal.behaviors.Search.power_search_init) {
        var page_width = $('body').width();
        Drupal.behaviors.Search.header_power_search_wrapper.removeAttr('style').css('width', page_width);

        var hdr_width = Drupal.behaviors.Search.header.find('div.navigation-header').width();
        if (page_width > hdr_width) {
          var offset = Math.floor((page_width - hdr_width) / 2) * -1;
          Drupal.behaviors.Search.header_power_search_wrapper.css('marginRight', offset);
        }

        Drupal.behaviors.Search.header_power_search_wrapper.addClass('on');

        Drupal.behaviors.Search.search_form_facet_contents.each(function() {
          var $this = $(this);
          $this.data('height', $(this).height());
          $this.hide();
        });

        Drupal.behaviors.Search.header_power_search_wrapper_height = Drupal.behaviors.Search.header_power_search_wrapper.height();

        Drupal.behaviors.Search.header_power_search_wrapper.removeClass('on');

        Drupal.behaviors.Search.power_search_init = true;
      }

      Drupal.behaviors.Search.power_search_toggle.toggleClass('on');
      Drupal.behaviors.Search.power_search_tooltip.removeClass('on');
      Drupal.behaviors.Search.header.toggleClass('SearchOn');

      if (Drupal.behaviors.Search.power_search_toggle.hasClass('on')) {
        Drupal.behaviors.Search.header_power_search_wrapper.css('height', 0).addClass('on').animate({'height' : Drupal.behaviors.Search.header_power_search_wrapper_height}, 400, function() {
          Drupal.behaviors.Search.header_power_search_wrapper.css('height', 'auto').addClass('open');
        });
        Drupal.behaviors.Search.page_header.animate({'paddingTop' : Drupal.behaviors.Search.header_power_search_wrapper_height}, 400);

        // close on resize
        $(window).one('resize.search_power', function() {
          Drupal.behaviors.Search.power_search_toggle.trigger('click');
        });
      } else {
        Drupal.behaviors.Search.header_power_search_wrapper.removeClass('open').animate({'height': 0}, 250, function() {
          Drupal.behaviors.Search.header_power_search_wrapper.removeClass('on');
          Drupal.behaviors.Search.search_form_facet_contents.hide().removeClass('open');
          Drupal.behaviors.Search.search_form_facet_toggle.removeClass('fa-toggle-on');
        });
        Drupal.behaviors.Search.page_header.animate({'paddingTop' : 0}, 250);
        $(window).unbind('resize.search_power');
      }
    },

    /**
    * Toggles the display of the facets in the search form power search controls
    */
    header_power_search_facet_toggle: function() {
      var $row = $(this).parent();
      var $contents = $row.find('div.contents:not(.persist)');
      var $expand = $row.find('div.expand i');
      $expand.toggleClass('fa-toggle-on');
      $contents.slideToggle();
      if ($expand.hasClass('fa-toggle-on')) {
        Drupal.behaviors.Search.page_header.animate({'paddingTop' : '+=' + $contents.data('height')}, 400, function() {
          $contents.addClass('open');
        });
      } else {
        $contents.removeClass('open');
        Drupal.behaviors.Search.page_header.animate({'paddingTop' : '-=' + $contents.data('height')});
      }
    },

    results_power_search_facet_toggle: function() {
      var $row = $(this).parent();
      var $contents = $row.find('div.contents:not(.persist)');
      var $expand = $row.find('div.expand i');
      $expand.toggleClass('fa-toggle-on');
      if ($expand.hasClass('fa-toggle-on')) {
        $contents.slideDown(400, function() {
          $contents.addClass('open');
        });
      } else {
        $contents.removeClass('open').slideUp();
      }
    },


    /**
    * Clear the Power Search Parameters from the Header and the body. Leave the Keywords
    */
    power_search_clear_parameters: function(Event) {
      Drupal.settings.search = {};
      Drupal.settings.search.search_api_views_fulltext = '';
      Drupal.behaviors.Search.search_api_views_fulltext.val('');

      // Clear the Research Area Checkboxes
      Drupal.behaviors.Search.field_research_area_checkboxes.find('input').prop('checked', false);

      // Clear the Author and click A to set the glossary back to the first page.
      // $('.row-authors .glossary li a').each(function() {
      //   // We find our link to the A glossary page and click it, this rebuilds and alphabetizes the list of
      //   // authors.  This is also done the first time we load a page.
      //   if ($(this).html() == 'A') {
      //     $(this).trigger('click');
      //   }
      // });

      // Reset the centers
      Drupal.behaviors.Search.field_cross_center_initiatives.val('').trigger("chosen:updated");
      Drupal.behaviors.Search.field_policy_center.val('').trigger("chosen:updated");

      // Reset the dates, we are setting these to empty strings.
      // We will validate and check these values in our Drupal.behaviors.Search.validateDate helper function
      // when a user clicks the See Results button.
      Drupal.behaviors.Search.created_oldest.val('');
      Drupal.behaviors.Search.created_newest.val('');

    },

    /**
    * Set the field_research_area checkboxes when the page initializes
    */
    set_field_research_area_checkboxes: function() {

        /*
        // Build a list of the selected values from the user.  Then use this array to check the correct research areas
        // on the form.
        */
        if (Drupal.settings.search.field_research_area !== undefined) {
          var expand_research_area = false;
          var selected_field_research_areas = [];
          for (var x = 0;  x < Drupal.settings.search.field_research_area.length; x++ ) {
            selected_field_research_areas.push('field_research_area:' + Drupal.settings.search.field_research_area[x]);
          }

          Drupal.behaviors.Search.field_research_area_checkboxes.each(function() {
            if (selected_field_research_areas.indexOf( $(this).find('input').val() ) > -1) {
                $(this).find('input').prop('checked', true);
                expand_research_area = true;
              }
          });
          if ( !$('.row-research_areas .expand').hasClass('fa-toggle-on') ) {
            $('.row-research_areas .expand').trigger('click');
          }
        }
    },

    /**
    * Updates the Drupal.settings.search.field_research_area array
    */
    update_field_research_area: function() {
      Drupal.settings.search.field_research_area = [];
      /*
      // We have two sets of checkboxes for the research area field depending on the
      // current page.  We will loop through the matching checkboxes here and check if it's value
      // matches any values stored in the Drupal.settings.search object.
      // If it does then we will add make sure that all instances of this checkbox are checked.
      // The desired effect is if you check a checkbox in one set of research area checkboxes it will also
      // cause the other checkbox on the page to be checked, keeping their states in sync.
      */
      Drupal.behaviors.Search.field_research_area_checkboxes.each(function() {
        var attr_val = $(this).find('input').val().split(':');
        if ( $(this).find('input').prop('checked') && Drupal.settings.search.field_research_area.indexOf(attr_val[1]) < 0) {
          // Only add this if the property is checked and we do not already have the value in the index.
          Drupal.settings.search.field_research_area.push(attr_val[1]);
        }
      });
    },

    /**
    * React when a user clicks a field_author_glossary link
    */
    react_field_author_glossary: function(Event) {
      Event.preventDefault();
      var columns = '';
      var rows = [];
      var choice = $(Event.currentTarget).html();
      var matchCount = 0;
      var name = '';
      var slideshow_column = $('<ul></ul>');

      if (Drupal.behaviors.Search.search_form_field_author_clones.length > 0) {
        // Handle filtering for the authors for the search form in the header
        for (var x = 0; x < Drupal.behaviors.Search.search_form_field_author_clones.length; x++) {
          target = $(Drupal.behaviors.Search.search_form_field_author_clones[x]);
          name = target.find('label').html().split(" ");
          if (name[name.length-1].charAt(0).toUpperCase() === choice) {
            // This author belongs in this glossary group page.
            rows.push('<div class="author-wrapper">' + target.html() + '</div>');
          }
        }
        // Build the dom to place the correct items into for displaying to the user.
        var container = $('<ul></ul>').addClass('glossary-author-container');
        Drupal.behaviors.Search.search_form_field_author_wrapper.html('');
        Drupal.behaviors.Search.search_form_field_author_wrapper.append(container);
        container = $('<ul></ul>').addClass('glossary-author-container');
        Drupal.behaviors.Search.power_search_form_field_author_wrapper.html('');
        Drupal.behaviors.Search.power_search_form_field_author_wrapper.append(container);
        container = $('<ul></ul>').addClass('glossary-author-container');
        Drupal.behaviors.Search.second_search_form_field_author_wrapper.html('');
        Drupal.behaviors.Search.second_search_form_field_author_wrapper.append(container);

        if (rows.length > 0) {
          // Loop through the rows and create our columns.
          for (var x = 0; x < (rows.length / 6); x++) {
            column_array = rows.slice(( x * 6), (x * 6)+6);
            slideshow_column = $('<ul></ul>');
            slideshow_column.append( column_array.join(" ") );
            Drupal.behaviors.Search.search_form_field_author_wrapper.children('ul.glossary-author-container').append( '<li>' + slideshow_column.html() + '</li>');
            Drupal.behaviors.Search.power_search_form_field_author_wrapper.children('ul.glossary-author-container').append( '<li>' + slideshow_column.html() + '</li>');
            Drupal.behaviors.Search.second_search_form_field_author_wrapper.children('ul.glossary-author-container').append( '<li>' + slideshow_column.html() + '</li>');
          }
          if (typeof bxSlider === 'function') {
            // Initialize the slider
            Drupal.behaviors.Search.search_form_field_author_wrapper.children('ul.glossary-author-container').delay(100).bxSlider(Drupal.behaviors.Search.author_slider_settings);
            Drupal.behaviors.Search.power_search_form_field_author_wrapper.children('ul.glossary-author-container').delay(100).bxSlider(Drupal.behaviors.Search.author_slider_settings);
            Drupal.behaviors.Search.second_search_form_field_author_wrapper.children('ul.glossary-author-container').delay(100).bxSlider(Drupal.behaviors.Search.author_slider_settings);
            Drupal.behaviors.Search.search_form_field_author = $('.urbaninstitute-search-empty-authors .author-wrapper, .row--authors .author-wrapper');
          }

          // When a user clicks on the Label or checkbox for an author, we need to update the state value
          // in the Drupal.settings.search.field_author array and also update the visual display
          // of this state in both the Power Search facet in the Header and in the content area.
          Drupal.behaviors.Search.search_form_field_author.on('click', Drupal.behaviors.Search.react_field_author_item_click);
          Drupal.behaviors.Search.search_form_field_author.find('input').on('click', Drupal.behaviors.Search.react_field_author_checkbox);
        }

      }
      // Check if this author is set in our facets.
      // We are just reading the state of the authors in the Drupal.settings.search object and displaying that state
      // When we navigate from one glossary section to the next.
      if (typeof Drupal.settings.search.field_author !== 'undefined') {
            Drupal.behaviors.Search.search_form_field_author.each(function(){
              var target_author = $(this).find('input');
              var target_author_value = target_author.val().split(':')[1];
              var check_author = ( Drupal.settings.search.field_author.indexOf(target_author_value) > -1);
              target_author.prop('checked', check_author);

            });
      }

      Drupal.behaviors.Search.field_author_glossary.removeClass('active');
      Drupal.behaviors.Search.field_author_glossary.each(function() {
        if ($(this).html() === choice) {
          $(this).addClass('active');
        }
      });

    },

    /**
    * Handle clicking on an author in the slider.
    */
    react_field_author_item_click: function(Event) {
      var status = !($(Event.currentTarget).find('.form-checkbox').prop('checked'));
      var value = $(Event.currentTarget).find('.form-checkbox').val();
      var value_split = value.split(':')[1];
      // Update all instances of this checkbox

      Drupal.behaviors.Search.search_form_field_author.each(function(){
        var target_author = $(this).find('input');
        if ( target_author.val() == value ) {
          target_author.prop('checked', status);
        }
      });

      // Now store it, because we are cloning/destroying we forget the values
      if (typeof Drupal.settings.search.field_author == 'undefined') {
        Drupal.settings.search.field_author = [];
        if (status) {
          Drupal.settings.search.field_author.push( value_split );
        }

      }
      else if (typeof Drupal.settings.search.field_author == 'string') {
        var author = Drupal.settings.search.field_author;
        // convert single value into multiple value
        Drupal.settings.search.field_author = [];
        Drupal.settings.search.field_author.push(author);
        Drupal.settings.search.field_author.push( value_split );

      }
      else {
        var index = Drupal.settings.search.field_author.indexOf( value_split );
        if (status && index < 0 ) {
          Drupal.settings.search.field_author.push( value_split );
        }
        else if (!status && index > -1) {
           Drupal.settings.search.field_author.splice(index, 1);
        }
      }
    },

    react_field_author_checkbox: function(Event) {
      $(Event.currentTarget).parent().trigger('click');
    },

    /**
    * React to a user selecting a field_policy_center
    */
    react_field_policy_center: function(Event) {
      // update our stored values.
      Drupal.settings.search.field_policy_center = $(Event.currentTarget).val().split(':')[1];
    },

    /**
    * React to a user selecting a field_policy_center
    */
    react_field_cross_center_initiative: function(Event) {
      // update our stored values.
      Drupal.settings.search.field_cross_center_initiative = $(Event.currentTarget).val().split(':')[1];
    },

    /**
    * React to the date range changing
    */
    react_created_oldest_range: function(Event) {
       Drupal.behaviors.Search.created_oldest.val($(Event.currentTarget).val());
       Drupal.settings.search.created_oldest = $(Event.currentTarget).val();
       var oldest_valid = Drupal.behaviors.Search.validateDate( Drupal.behaviors.Search.created_oldest.val(), true),
       newest_valid = Drupal.behaviors.Search.validateDate( Drupal.behaviors.Search.created_newest.val(), true);
    },

    react_created_newest_range: function(Event) {
      Drupal.behaviors.Search.created_newest.val($(Event.currentTarget).val());
      Drupal.settings.search.created_newest = $(Event.currentTarget).val();
      var oldest_valid = Drupal.behaviors.Search.validateDate( Drupal.behaviors.Search.created_oldest.val(), true),
      newest_valid = Drupal.behaviors.Search.validateDate( Drupal.behaviors.Search.created_newest.val(), true);
    },

    /**
    * React when the See Results button is clicked.
    */
    react_see_results: function(Event) {

      var destination = '/search/power';

      // Facets are sent to the site via the f[*] parameter
      // Each facet selected increments the f[*] count
      // Typically an argument will look like: field_author:37101

      // There are three Views filters that need to be considered to the first is
      // search_api_views_fulltext this is the Full text keyword term being searched
      // created_oldest = The first Date field in the range that is enterable for Power Search
      // created_newest = The second date field in the range for Power search
      // All of the views filters are being entered in via custom forms that are then should pass them
      // along with the rest of the query details
      //
      var adv_search = $(Event.currentTarget).closest('.advanced_search-wrapper');

      // Validate our dates
      var oldDateValid = true,
      newDateValid = true;

      if (Drupal.settings.search.created_oldest !== undefined) {
        oldDateValid = Drupal.behaviors.Search.validateDate( Drupal.settings.search.created_oldest, false );
      }
      if (Drupal.settings.search.created_newest !== undefined) {
        newDateValid = Drupal.behaviors.Search.validateDate( Drupal.settings.search.created_newest, false );
      }

      if (!oldDateValid || !newDateValid) {
        return false;
      }

      // Build the query string
      var query_string = '';
      var query_parts = [];

      for (property in Drupal.settings.search) {
        if (!(typeof Drupal.settings.search[property] == 'undefined') && !(typeof Drupal.settings.search[property] == 'string') && property !== 'created_oldest' && property !== 'created_newest') {
          for (var x = 0; x < Drupal.settings.search[property].length; x++) {
            query_parts.push( property + '[' + x + ']=' + Drupal.settings.search[property][x] );
          }
        }
        else {
          if (Drupal.settings.search[property] !== '') {
            query_parts.push( property + '=' + Drupal.settings.search[property] );
          }
        }
      }

      query_string = query_parts.join('&');

      window.location.href = destination + '?' + query_string;
    },

    /*****************************************************
    * Helper functions for sorting and other assorted things
    ******************************************************/

    /**
    * This function reads the f array and converts it to the respective fields
    */
    convert_facets_to_fields: function() {

      if (typeof Drupal.settings.search.f !== 'undefined') {
        for (var x = 0; x < Drupal.settings.search.f.length; x++ ) {
          var propval = Drupal.settings.search.f[x].split(':');
          if (typeof Drupal.settings.search[propval[0]] == 'undefined') {
            Drupal.settings.search[propval[0]] =[];
          }
          Drupal.settings.search[propval[0]].push(propval[1]);
        }
      }
    },

    /**
    * Power Search Search header format
    * This function formats and inserts the searched for values into the
    * Search result header.
    */
    power_search_results_header_display: function() {
      var resultsHeader = {};
      resultsHeader.counter = 0;
      resultsHeader.researchAreas = [];
      resultsHeader.author = [];

      // Format date for the result header.
      resultsHeader.formatDate = function(givenDate) {
        var months = {
          '01': 'Jan',
          '02': 'Feb',
          '03': 'Mar',
          '04': 'Apr',
          '05': 'May',
          '06': 'Jun',
          '07': 'Jul',
          '08': 'Aug',
          '09': 'Sept',
          '10': 'Oct',
          '11': 'Nov',
          '12': 'Dec'
        };
        var disect = givenDate.split('/');
        return months[disect[0]] + ' ' + disect[1] + ', ' + disect[2];
      };

      // handle the keyword
      if (typeof Drupal.settings.search.search_api_views_fulltext !== 'undefined' &&
        Drupal.settings.search.search_api_views_fulltext !== '') {
        // show the section
        Drupal.behaviors.Search.facet_toggle.keyword.trigger('click');

        resultsHeader.keywords = Drupal.settings.urbaninstitute_search.keywords;
        resultsHeader.counter++;
      }

      // handle the dates
      var date_available = false;
      if (typeof Drupal.settings.search.created_oldest !== 'undefined') {
          // Prepopulate the form item
          date_available = true;

          resultsHeader.dateCreated = resultsHeader.formatDate(Drupal.settings.search.created_oldest);
          resultsHeader.counter++;
        }


      if (typeof Drupal.settings.search.created_newest !== 'undefined') {
        // Prepopulate the form item
        date_available = true;

        resultsHeader.dateUpdated = resultsHeader.formatDate(Drupal.settings.search.created_newest);
        resultsHeader.counter++;
      }

      if (date_available) {
        Drupal.behaviors.Search.facet_toggle.created.trigger('click');
      }

      // Handle each facet
      if (typeof resultsHeader == 'object') {
        var resultsMarkup = "";
        var ResearchArea = "";
        if (typeof resultsHeader.keywords !== 'undefined' && resultsHeader.keywords !== '') {
          resultsMarkup += '<div><label>Keywords: </label> ' + resultsHeader.keywords + '</div>';
        }

        // Get the human readable name for the research area
        if (typeof Drupal.settings.search.field_research_area !== 'undefined') {
          // If we have a research area selected.
          var ourTerms = []; // This is the html labels for the research areas.
          var foundTerms = []; // Record when we find the label for the term so that we dont print the label twice in the header.
          if (typeof Drupal.settings.search.field_research_area !== 'string') {
            // When we get more than one research area as a filter.
              Drupal.behaviors.Search.field_research_area_checkboxes.each( function() {
                var target_research_area = $(this).find('input');
                var value = target_research_area.val()

                if (value !== undefined) {
                  value = value.split(':')[1];
                }
                else {
                  value = '';
                }

                if ( Drupal.settings.search.field_research_area.indexOf(value) > -1 && foundTerms.indexOf(value) < 0) {
                  ourTerms.push($(this).find('label').html());
                  foundTerms.push(value);
                }
              });
            resultsMarkup += '<div><label>Research Areas: </label> ' + ourTerms.join(', ') + '</div>';
            ResearchArea = '<h3>' + ourTerms.join(', ') + '</h3>';
          }
          else {
            // In cases where there is a single research area selected we get a String and not an array.
              Drupal.behaviors.Search.field_research_area_checkboxes.each( function() {
                var value = $(this).find('input').val().split(':')[1];
                if (value == Drupal.settings.search.field_research_area && !foundTerm) {
                  resultsMarkup += '<div><label>Research Areas: </label> ' + $(this).find('label').html() + '</div>';
                  ResearchArea = '<h3>' + $(this).find('label').html() + '</h3>';
                }
              });
          }

        }

        // Get human readable name of the author
        if (typeof Drupal.settings.search.field_author !== 'undefined') {
          var ourAuthors = [];
          if (typeof Drupal.settings.search.field_author !== 'string') {
            Drupal.behaviors.Search.search_form_field_author_clones.each( function(){
              if (Drupal.settings.search.field_author.indexOf($(this).find('input').val().split(':')[1]) > -1) {
                ourAuthors.push ($(this).find('label').html());
              }
            });
            resultsMarkup += '<div><label>Author</label>: ' + ourAuthors.join(', ') + '</div>';
          }
          else {
            Drupal.behaviors.Search.search_form_field_author_clones.each( function(){
              if (Drupal.settings.search.field_author.indexOf( $(this).find('input').val().split(':')[1] ) > -1) {
                ourAuthors.push ($(this).find('label').html());
              }
            });
            resultsMarkup += '<div><label>Author</label>: ' + ourAuthors.join(', ') + '</div>';
          }
        }

        // Get human readable name of policy center
        if (typeof Drupal.settings.search.field_policy_center !== 'undefined') {
          var ourCenters = [];
          var found = false;
                Drupal.behaviors.Search.field_policy_center.find('option').each( function(){
                  if( $(this).val().split(':')[1] == Drupal.settings.search.field_policy_center && !found) {
                    ourCenters.push ($(this).html());
                    found = true;
                  }
                });

           resultsMarkup += '<div><label>Policy Centers: </label>' + ourCenters.join(', ') + '</div>';
        }

        // Get human readable name of cci
        if (typeof Drupal.settings.search.field_cross_center_initiative !== 'undefined') {
          var ourCenters = [];
          var found = false;
                Drupal.behaviors.Search.field_cross_center_initiatives.find('option').each( function(){
                  if( $(this).val().split(':')[1] == Drupal.settings.search.field_cross_center_initiative && !found) {
                    ourCenters.push ($(this).html());
                    found = true;
                  }
                });

          resultsMarkup += '<div><label>Cross Center Initiatives: </label>' + ourCenters.join(', ') + '</div>';
        }


        // Get the properly formatted date
        if (typeof resultsHeader.dateCreated !== 'undefined') {
          resultsMarkup += '<div><label>Dates: </label> ' + resultsHeader.dateCreated;
          if (typeof resultsHeader.dateUpdated !== 'undefined') {
            resultsMarkup += ' - ' + resultsHeader.dateUpdated;
          }
          resultsMarkup += '</div>';
        }

        $('.results-header.with-params .param-values').html(resultsMarkup);
        $('.page-search-power-research-details .view-id-search.view-display-id-power_search_detail_research_areas .research-area-header').remove();
        $('.page-search-power-research-details .view-id-search.view-display-id-power_search_detail_research_areas').prepend('<div class="research-area-header">' + ResearchArea + '</div>');
      }
      $('.container > .advanced_search-wrapper').hide();

      //Set link to all results at research-details.
      var searchURL = document.URL.split("?");
      var searchParamArray = searchURL[1].split('&');
      for (var param in searchParamArray){
        if (searchParamArray[param].match(/field_research_area/) || searchParamArray[param].match(/type/)){
          searchParamArray.splice(param, 1);
        }
        else if (searchParamArray[param].match(/display_date/)){
          searchParamArray[param] = searchParamArray[param].replace("display_date", "created");
        }
      }
      var AllResultsQuery = searchParamArray.join("&");
      $('.page-search-power-research-details .search-power-details-back a').attr("href", "/search/power?" + AllResultsQuery);
      $('.page-search-power-engagement-details .search-power-details-back a').attr("href", "/search/power?" + AllResultsQuery);


      /**
      * Build out the links for the side bar items
      */
      Drupal.behaviors.Search.buildSidebarDetailLinks();

    },

    buildSidebarDetailLinks: function() {
      // Get all of our sidebar link targets
      var sidebarTargets = $('#serp_results_aside .sidebar-more-link');

      sidebarTargets.each( function(){
        // loop through each target.
        var data_type = $(this).attr('data-type');
        var query_string = Drupal.behaviors.Search.build_ajax_result_query(undefined, data_type);

        if ( data_type !== '' ) {
          if (data_type === 'urban_wire_post') {
            query_string = query_string.replace("created_oldest", "display_date_oldest");
            query_string = query_string.replace("created_newest", "display_date_newest");
          }
          var more_link = $('<a></a>').attr('href', '/search/power/engagement-details?' + query_string).html('More');
          $(this).append(more_link);
        }

      });

    },


    /**
    * Validate Dates
    */
    validateDate: function(input, silent) {
      var validformat=/^\d{2}\/\d{2}\/\d{4}$/;  //Basic check for format validity
      var returnval=false;
      if (input.length == 0) {
        return true;
      }
      else if (!validformat.test(input)) {
        var d = new Date();
        alert("Invalid Date Format. Please correct and submit again. Please use this format: 03/28/" + d.getFullYear() );
        return false;
      }
      else {
      //Detailed check for valid date ranges
        var monthfield = input.split("/")[0],
        dayfield = input.split("/")[1],
        yearfield = input.split("/")[2],
        dayobj = new Date(yearfield, monthfield-1, dayfield);
        if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(  dayobj.getFullYear()!=yearfield)) {
          if (!silent){
            alert("Invalid Day, Month, or Year range detected. Please correct and submit again.");
          }
          return false;
        }
        else {
          return true;
        }
      }
    },

    /**
    * Sort the field_author items
    */
    // field_author_sort: function() {
    //   Drupal.behaviors.Search.power_search_form_field_author_clones = $('.row--authors .pane-facetapi > ul > li').clone(); //Power Search form in body
    //   if (Drupal.behaviors.Search.search_form_field_author_clones.length > 0) {
    //     Drupal.behaviors.Search.search_form_field_author_clones.sort(Drupal.behaviors.Search.compareLastNames);
    //   }
    //
    //   if (Drupal.behaviors.Search.power_search_form_field_author_clones.length > 0) {
    //     Drupal.behaviors.Search.power_search_form_field_author_clones.sort(Drupal.behaviors.Search.compareLastNames);
    //   }
    // },

    compareLastNames: function (a, b) {

      var splitA = $(a).find('label').html().split(" ");
      var splitB = $(b).find('label').html().split(" ");
      var lastA = splitA[splitA.length - 1].toUpperCase();
      var lastB = splitB[splitB.length - 1].toUpperCase();

      if (lastA < lastB) return -1;
      if (lastA > lastB) return 1;
      return 0;
    },

    /**
     * Parse each node data, and map them accordingly
     *
     * @param data
     *   data returned from the ajax callback, including a list of node objects
     */
    mapToNodes: function(data, query) {

      if (typeof data.nodes === 'object' && typeof data.nodes[0] === 'undefined') {
        Drupal.behaviors.Search.spinner.stop();
      }

      var researchAreaContainer = $(".views-limit-grouping[data-term='" + query.term + "']");

      //Link Research Area title to main search page
      var researchAreaTitle = $(".views-limit-grouping[data-term='" + query.term + "'] h3");
      researchAreaTitle.html('<a href="/search/power/research-details?' + query.parameters + '">' + researchAreaTitle.html() + '</a>');

      // create a DOM element to wrap results for this research area, and stuff rendered results into it
      var inner = $('<span></span>');
      for (var nodeIndex in data.nodes) {
        var node = data.nodes[nodeIndex].node;
        inner.append('<div class="views-row"><div class="views-field views-field-rendered-entity"><span class="field-content">' + node.rendered_entity + '</span></div></div>');
      }

      // if we have results, stuff it into the document in the right place; otherwise remove that research area
      if (inner.children().length > 0) {
        // If we have children add them into the correct group.
        researchAreaContainer.children('.views-row').remove();
        researchAreaContainer.append(inner);

        $.ajax({
          type: 'GET',
          url: '/search/js/count?' + query.parameters,
          success: function(data) {

            // create the more link for groups with more than 5 results.
            var total = parseInt(data.total);
            if (total > 5) {
              researchAreaContainer.append('<a class="more_link" href="/search/power/research-details?' + query.parameters + '">More</a>' );
            }

            // Update the counter
            Drupal.behaviors.Search.update_ajax_count(total);

            // Stops the spinner
            Drupal.behaviors.Search.spinner.stop();

            // show facet area with results with delay
            researchAreaContainer.show(30, function() {
              // then removes the wrapper that contains it
              $('.results-spinner').remove();
            });
          }
        });
      }
    },

    /**
     * Helper function to cleansed up the field_author removes all unneccessary line breaks
     * including the Edit|Delete|Manage|display label
     *
     * @param dataAuthors
     *  the list of author names
     */
    parseData: function(data, type) {
      if (type == 'author') {
        data = data.split(',');
        var authors = [];
        for (var i = 0; i < data.length; i++) {
          authors.push(data[i].replace(/(\r\n|\n|\r|\t|Edit|Delete|Manage|display)/gm, "").trim());
        }
        // return the authors
        // @TODO authors should be a link to it's own page
        return authors.join(', ');
      }
      else {
        // for some reason the body_summary, doesn't contains anything
        // I obtained the summary content, by parsing out all the other
        // data, from within the rendered_entity field.
        var summary = data.rendered_entity
                         .replace(/(\r\n|\n|\r|\t)/gm, "")
                         .replace(data.title, "")
                         .replace(Search.parseData(data.field_author, "author"), "")
                         .replace(data.field_display_date, "")
                         .replace(data.field_publication_type, "")
                         .replace(data.field_research_area, "")
                         .trim();

        return summary;
      }
    },

    /**
    * Build Requests
    */
    build_ajax_requests: function( ) {
      var requests = [];

      if (typeof Drupal.settings.search.field_research_area !== 'undefined') {
        // build only those selected.
        for ( var x = 0; x < Drupal.settings.search.field_research_area.length; x++ ) {
          var q = Drupal.behaviors.Search.build_ajax_result_query(Drupal.settings.search.field_research_area[x]);
          requests.push({
            query: '/search/js/result?' + q,
            term: Drupal.settings.search.field_research_area[x],
            parameters: q
          });
        }
      }
      else {
        // build all on the page.

        for (var x = 0; x < Drupal.behaviors.Search.field_research_area_results_wrapper.length; x++) {
          var target = Drupal.behaviors.Search.field_research_area_results_wrapper[x];
          var term = $(target).attr('data-term');
          var q = Drupal.behaviors.Search.build_ajax_result_query(term, 0);
          requests.push( {
            query: '/search/js/result?' + q,
            term: term,
            parameters: q
          });
        }

      }

      Drupal.behaviors.Search.ajax_requests = requests;
      Drupal.behaviors.Search.searchDeferredReaction(requests);
    },

    /*********************************
    *  AJAX Related functions.
    *********************************/

    // Power Search: Send a batch of 5 queries to be processed
    searchDeferredReaction: function(Requests) {
      var defereds = [];
      // Build up a set of queries to run.
      for (var x = 0; x < 3; x++) {
        localQuery = Requests.shift();
        localDefer = Drupal.behaviors.Search.searchDeferredAction(localQuery);
        defereds.push( localDefer );
      }
      // When they are done call this function again to start the process over for the next set
      $.when.apply($, defereds).done(
        function() {
          // Success
          if (Requests.length > 0) {
            Drupal.behaviors.Search.searchDeferredReaction(Requests);
          }

      });
    },

    // Power Search: Create Deffered Object, That calls the searchAjaxCall X call Batches.
    searchDeferredAction: function(query) {
      var deferred = $.Deferred();
      if (query !== null && typeof query !== "undefined") {
        $.ajax({
          type: 'GET',
          url: query.query,
          success: function(data) {
            Drupal.behaviors.Search.mapToNodes(data, query);
            deferred.resolve();
          }
        });
      }
      else {
        deferred.resolve();
      }
      return deferred.promise();
    },

    /**
    * Build the query parameters
    *
    */
    build_ajax_result_query: function(field_research_area, content_type) {
      var sendString = [];
      var facet = [];
      var include_research_areas = false;

      // Add the research area into the query
      if (typeof field_research_area == 'string') {
        // this runs when we are doing a query on a single research area group
        facet.push('f[0]=field_research_area:'+field_research_area);
      }
      else {
        // this runs to include all research areas in the query.
        include_research_areas = true;
      }

      // Add in the created dates info the query
      if (typeof Drupal.settings.search.created_oldest !== 'undefined') {
        sendString.push('created_oldest=' + Drupal.settings.search.created_oldest );
      }
      if (typeof Drupal.settings.search.created_newest !== 'undefined') {
        sendString.push('created_newest=' + Drupal.settings.search.created_newest );
      }

      // Include our keyword
      if(typeof Drupal.settings.search.search_api_views_fulltext == 'string') {
        sendString.push('search_api_views_fulltext=' + Drupal.settings.search.search_api_views_fulltext);
      }

      for (property in Drupal.settings.search) {

        if (property !== 'search_api_views_fulltext' && property !== 'created_oldest' && property !== 'created_newest' && property !== 'field_research_area') {

          // Each property should be stored as a array
          if (typeof Drupal.settings.search[property] !== 'undefined') {

            if (typeof Drupal.settings.search[property] !== 'string') {
              for (var x = 0; x < Drupal.settings.search[property].length; x++) {
                // loop through the array and add the facet
                facet.push('f[' + facet.length + ']=' + property + ':' + Drupal.settings.search[property][x]);
              }
            }
            else {
              // this is a string, add it to the query
              facet.push('f[' + facet.length + ']=' + property + ':' + Drupal.settings.search[property]);
            }
          }
        }
      }

      if (typeof content_type !== 'undefined' && content_type !== 0 && content_type !== '') {
        facet.push('f[' + facet.length + ']=type:' + content_type);
      }

      if ( facet.length > 0 ) {
        return sendString.join('&') + '&' + facet.join('&');
      }
      else {
        return sendString.join('&');
      }

    },

    /**
    * Build the query paramters that will be used in the ajax functions.
    * This function will include all research areas or limit to a single
    * research area.
    */
    build_ajax_count_query: function(field_research_area) {
      var sendString = [];
      var facet = [];
      var research_area_facets = [];
      var include_research_areas = false;

      // Add passed research area into the query
      if (typeof field_research_area == 'string') {
        research_area_facets.push( 'field_research_area[0]=' + field_research_area);
      }
      else {
        include_research_areas = true;
      }

      // Add in the created dates info the query
      if (typeof Drupal.settings.search.created_oldest !== 'undefined') {
        sendString.push('created_oldest=' + Drupal.settings.search.created_oldest );
      }
      if (typeof Drupal.settings.search.created_newest !== 'undefined') {
        sendString.push('created_newest=' + Drupal.settings.search.created_newest );
      }

      // Include our keyword
      if (typeof Drupal.settings.search.search_api_views_fulltext == 'string') {
        sendString.push('search_api_views_fulltext=' + Drupal.settings.search.search_api_views_fulltext);
      }

      for (property in Drupal.settings.search) {

        if (property !== 'search_api_views_fulltext' && property !== 'f' && property !== 'created_oldest' && property !== 'created_newest' && property !== 'field_research_area') {
          // Each property should be stored as a array
          if (typeof Drupal.settings.search[property] !== 'undefined') {

            if (typeof Drupal.settings.search[property] !== 'string') {
              for (var x = 0; x < Drupal.settings.search[property].length; x++) {
                // loop through the array and add the facet
                facet.push('f[' + facet.length + ']=' + property + ':' + Drupal.settings.search[property][x]);
              }
            }
            else {
              // this is a string, add it to the query
              facet.push('f[' + facet.length + ']=' + property + ':' + Drupal.settings.search[property]);
            }
          }
        }

      }

      var queryString = '';

      if (facet.length > 0) {
        queryString += '&' + facet.join('&');
      }

      if (research_area_facets.length > 0) {
        queryString += '&' + research_area_facets.join('&');
      }

      var query = sendString.join('&') + queryString;

      return query;
    },

    /**
    * Update the count when mapToNodes adds results to the power search landing
    */
    update_ajax_count: function(additionalValue) {
      Drupal.behaviors.Search.count += additionalValue;
      Drupal.behaviors.Search.power_search_result_total.html(Drupal.behaviors.Search.count + " Results");
      Drupal.behaviors.Search.results_power_search_counter.html(Drupal.behaviors.Search.count);
      Drupal.behaviors.Search.results_simple_counter.html(Drupal.behaviors.Search.count + " matches we've found for you...");
    },

    /**
    * Performs the count query for simple search and returns the results
    */
    simple_search_ajax_count: function() {
      if (Drupal.settings.search.search_api_views_fulltext.length > 2 && typeof Drupal.settings.power_search_details == 'undefined') {
        var sendString = Drupal.behaviors.Search.build_ajax_count_query();
        $.ajax({
          type: 'GET',
          url: '/simple_search/js/count?' + sendString,
          success: function(data) {
            Drupal.behaviors.Search.results_simple_counter.html(data.total + " matches we've found for you...");
          }
        });
      }
    },



  };
}(jQuery));
;
/**
 * Attaches the calendar behavior to all required fields
 */
(function($) {
  function makeFocusHandler(e) {
    if (!$(this).hasClass('date-popup-init')) {
      var datePopup = e.data;
      // Explicitely filter the methods we accept.
      switch (datePopup.func) {
        case 'datepicker':
          $(this)
            .datepicker(datePopup.settings)
            .addClass('date-popup-init');
          $(this).click(function(){
            $(this).focus();
          });
          if (datePopup.settings.syncEndDate) {
            $('.start-date-wrapper').each(function(){
              var start_date_wrapper = this;
              $(this).find('input:eq(0)').change(function(){
                $(start_date_wrapper).next('.end-date-wrapper').find('input:eq(0)').val($(this).val());
              });
            });
          }
          break;

        case 'timeEntry':
          $(this)
            .timeEntry(datePopup.settings)
            .addClass('date-popup-init');
          $(this).click(function(){
            $(this).focus();
          });
          break;

        case 'timepicker':
          // Translate the PHP date format into the style the timepicker uses.
          datePopup.settings.timeFormat = datePopup.settings.timeFormat
            // 12-hour, leading zero,
            .replace('h', 'hh')
            // 12-hour, no leading zero.
            .replace('g', 'h')
            // 24-hour, leading zero.
            .replace('H', 'HH')
            // 24-hour, no leading zero.
            .replace('G', 'H')
            // AM/PM.
            .replace('A', 'p')
            // Minutes with leading zero.
            .replace('i', 'mm')
            // Seconds with leading zero.
            .replace('s', 'ss');

          datePopup.settings.startTime = new Date(datePopup.settings.startTime);
          $(this)
            .timepicker(datePopup.settings)
            .addClass('date-popup-init');
          $(this).click(function(){
            $(this).focus();
          });
          break;
      }
    }
  }

  Drupal.behaviors.date_popup = {
    attach: function (context) {
      for (var id in Drupal.settings.datePopup) {
        $('#'+ id).bind('focus', Drupal.settings.datePopup[id], makeFocusHandler);
      }
    }
  };
})(jQuery);
;
(function ($) {
  /**
   * Make an embedded video responsive
  */
  Drupal.behaviors.trackingAttributes = {
    attach: function(context, settings) {

      // Add HTML5 data attributes to each of these elements.
      var alterElements = [
        {
          'selector' : $('.just-released-bxslider li a[href*="/author/"]'),
          'eventText' : 'justReleased',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.just-released-bxslider li a[href*="/research-area/"]'),
          'eventText' : 'justReleased',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.block--term-major-publications a[href*="/author/"]'),
          'eventText' : 'majorResearcher',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.block--term-major-publications a[href*="/research-area"]'),
          'eventText' : 'majorReport',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.pane-node-field-research-area a'),
          'eventText' : 'pubResearch',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.pane-node-field-policy-center a'),
          'eventText' : 'pubCenter',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.home-right-region a[href*="/author/"]').not('.block--urbaninstitute-follow-us a'),
          'eventText' : 'homeTout',
          'infoCallback' : 'title'
        },
        {
          'selector' : $('.home-right-region a').not('.block--urbaninstitute-follow-us a'),
          'eventText' : 'homeTout',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.bean-feature-content-gallery .field--name-field-image a'),
          'eventText' : 'policyPub',
          'infoCallback' : 'three_parents_up'
        },
        {
          'selector' : $('.bean-feature-content-gallery .field--name-title a'),
          'eventText' : 'policyPub',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.bean-feature-content-gallery a[href*="/author/"]'),
          'eventText' : 'policyPub',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.bean-feature-content-gallery .field--name-field-research-area a'),
          'eventText' : 'policyPub',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.view-urban-wire-carousel .views-field-field-image a[href*="/urban-wire/"]'),
          'eventText' : 'urbanWire',
          'infoCallback' : 'two_parents_up'
        },
        {
          'selector' : $('.view-urban-wire-carousel .views-field-title a[href*="/urban-wire/"]'),
          'eventText' : 'urbanWire',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-publication .our-researchers-bxslider .views-field-field-portrait-image a[href*="author"]'),
          'eventText' : 'pubAuthor',
          'infoCallback' : 'two_parents_up'
        },
        {
          'selector' : $('.node-publication .our-researchers-bxslider .views-field-field-fullname a[href*="author"]'),
          'eventText' : 'pubAuthor',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.author-list-wrapper .views-field-field-portrait-image a[href*="/author/"]'),
          'eventText' : 'expertClick',
          'infoCallback' : 'two_parents_up'
        },
        {
          'selector' : $('.author-list-wrapper .views-field-title a[href*="/author/"]'),
          'eventText' : 'expertClick',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.field-collection-item-field-feature-story .field--name-field-feature-story-image a'),
          'eventText' : 'policySlide',
          'infoCallback' : 'one_parent_up'
        },
        {
          'selector' : $('.field-collection-item-field-feature-story .field--name-title a'),
          'eventText' : 'policySlide',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.page-about .horizontal-nav .wrap a'),
          'eventText' : 'aboutTab',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.view-research-areas-carousel a[href*="/experts/"]'),
          'eventText' : 'expertTab',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-author .centers a'),
          'eventText' : 'expertCenters',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-author .areas a'),
          'eventText' : 'expertAreas',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-author .view-related-research li a[href*="/author/"]'),
          'eventText' : 'expertReport',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.node-type-author .view-related-research li a[href*="/research-area/"]'),
          'eventText' : 'expertReport',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.support-urban-institute a'),
          'eventText' : 'supportCTA',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('.page-urban-wire .bean-meet-the-experts .field--name-field-portrait-image a[href*="/author/"]'),
          'eventText' : 'wireAuthor',
          'infoCallback' : 'three_parents_up_no_link'
        },
        {
          'selector' : $('.node-type-urban-wire-post .view-urban-wire-author .field--name-field-portrait-image a'),
          'eventText' : 'wireAuthor',
          'infoCallback' : 'three_parents_up_no_link'
        },
        {
          'selector' : $('.node-type-urban-wire-post .field--name-urban-wire-next-article a'),
          'eventText' : 'wireNext',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-cross-center-initiative .featured-intro-wrapper .featured-intro-body a'),
          'eventText' : 'initiativeArticle',
          'infoCallback' : 'cci'
        },
        {
          'selector' : $('.node-type-cross-center-initiative #panels-ipe-regionid-major_research .field--name-field-image a[href*="/research/"]'),
          'eventText' : 'initiativeResearch',
          'infoCallback' : 'three_parents_up'
        },
        {
          'selector' : $('.node-type-cross-center-initiative #panels-ipe-regionid-major_research .field--name-title a[href*="/research/"]'),
          'eventText' : 'initiativeResearch',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-cross-center-initiative #panels-ipe-regionid-major_research .field--name-field-research-area a'),
          'eventText' : 'initiativeResearch',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-cross-center-initiative #panels-ipe-regionid-major_research a[href*="/author/"]'),
          'eventText' : 'initiativeResearch',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.node-type-cross-center-initiative .view-our-researchers .views-field-field-portrait-image a[href*="/author/"]'),
          'eventText' : 'initiativeResearcher',
          'infoCallback' : 'two_parents_up'
        },
        {
          'selector' : $('.node-type-cross-center-initiative .view-our-researchers .views-field-field-fullname a[href*="/author/"]'),
          'eventText' : 'initiativeResearcher',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-cross-center-initiative .view-upcoming-events .views-field-field-event-start-date a'),
          'eventText' : 'initiativeEvents',
          'infoCallback' : 'cci_event'
        },
        {
          'selector' : $('.node-type-cross-center-initiative .view-upcoming-events .views-field-title a'),
          'eventText' : 'initiativeEvents',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.page-data-viz .data-card-back a').not('.data-card-add-this a'),
          'eventText' : 'dataCard',
          'infoCallback' : 'datacard'
        },
        {
          'selector' : $('.page-data-viz .pager-next a'),
          'eventText' : 'dataDiscover',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('#panels-ipe-regionid-featured_vizualizations .data-viz-title a'),
          'eventText' : 'dataVisual',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('#panels-ipe-regionid-featured_vizualizations .promotion-image a'),
          'eventText' : 'dataVisual',
          'infoCallback' : 'one_parent_up_prev'
        },
        {
          'selector' : $('.node-type-feature-collection .featured-collection-wrapper a').not('[href*="/author"]'),
          'eventText' : 'featureResearch',
          'infoCallback' : 'text'
        },
        {
          'selector' : $('.node-type-feature-collection .bean-generic_promotion-wrapper a'),
          'eventText' : 'featureResearch',
          'infoCallback' : 'title_or_text'
        },
        {
          'selector' : $('.page-features .pager-next a'),
          'eventText' : 'featureMore',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('#cities_metro .views-row a'),
          'eventText' : 'fieldCityMetro',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('#state_local .views-row a'),
          'eventText' : 'fieldStateLocal',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('#international .views-row a'),
          'eventText' : 'fieldIntl',
          'infoCallback' : 'none'
        },
        {
          'selector' : $('.node-type-event .register a'),
          'eventText' : 'eventsRegister',
          'infoCallback' : 'event_reg'
        },
        {
          'selector' : $('#urbaninstitute-icontact-form'),
          'eventText' : 'newsSignup',
          'infoCallback' : 'newsletter_signup'
        },
      ];



      // Loop through the items above and fire the function
      for (var n = 0, l = alterElements.length; n < l; n++) {
        el = alterElements[n];
        Drupal.behaviors.trackingAttributes.addTrackingAttributes(el.selector, el.eventText, el.infoCallback);
      }

      // Expert search form submit dataLayer
      $('#urbaninstitute-expert-search-form').submit(function(e){
        dataLayer.push({
          'event' : 'expertSearch',
          'expertSearched' : $(this).find('input[name="keyword"]').val()
        });
        return;
      });

      // Newsletter Signup Full Form
      $('form[name*="icpsignup"]').submit(function(e){
        // Map list names and get string for nice reporting output
        var listIDs = $('form[name*="' + this.name + '"] input:checkbox:checked').map(function() {
              return $(this).parents('td').next().find('p.large-paragraph').text();
            }).get().join(', ');

        dataLayer.push({
          'event' : 'newsSignup',
          'newslettersSelected' : listIDs
        });
        return;
      });

      // Urban Wire filters dataLayer fires on ajax complete
      $('form#views-exposed-form-urban-wire-post-block').once().ajaxComplete(function(e, xhr, settings) {
        dataLayer.push({
          'event' : 'wireDropdown',
          'wireAuthor' : $('select[name="urban_wire_author"] option:selected').text(),
          'wireTopic' : $('select[name="field_research_area_tid"] option:selected').text()
        });
      });

    }, //end attach


    addTrackingAttributes: function(selector, eventText, infoCallback) {
      for (var i = 0, len = selector.length; i < len; i++) {
        el = selector[i];
        //var attr = $(el).attr('data-gtm-info');
        //if (typeof attr == typeof undefined && attr !== false) {
          $(el).attr('data-gtm-event', eventText);
          switch (infoCallback) {
            case 'text':
              $(el).attr('data-gtm-info', $(el).text());
              break;
            case 'title_or_text':
              if (typeof $(el).attr('title') == typeof undefined && $(el).attr('title') !== false) {
                $(el).attr('data-gtm-info', $(el).text());
              } else {
                $(el).attr('data-gtm-info', $(el).attr('title'));
              }
              break;
            case 'title':
              $(el).attr('data-gtm-info', $(el).attr('title'));
              break;
            case 'four_parents_up':
              $(el).attr('data-gtm-info', $(el).parent().parent().parent().parent().next().find('a').text().trim());
              break;
            case 'three_parents_up':
              $(el).attr('data-gtm-info', $(el).parent().parent().parent().next().find('a').text().trim());
              break;
            case 'three_parents_up_no_link':
              $(el).attr('data-gtm-info', $(el).parent().parent().parent().next().find('div.field-item').text().trim());
              break;
            case 'two_parents_up':
              $(el).attr('data-gtm-info', $(el).parent().parent().next().find('a').text().trim());
              break;
            case 'one_parent_up':
              $(el).attr('data-gtm-info', $(el).parent().next().find('a').text().trim());
              break;
            case 'one_parent_up_prev':
              $(el).attr('data-gtm-info', $(el).parent().prev().find('a').text().trim());
              break;
            case 'event_reg':
              $(el).attr('data-gtm-info', $(el).parent().parent().prev().find('a').text().trim());
              break;
            case 'cci':
              $(el).attr('data-gtm-info', $(el).parents('.featured-intro-body').prev().text().trim());
              break;
            case 'cci_event':
              $(el).attr('data-gtm-info', $(el).parent().parent().next().next().find('a').text().trim());
              break;
            case 'datacard':
              $(el).attr('data-gtm-info', $(el).parent().prev().find('.field-content').first().text().trim());
              break;
            case 'newsletter_signup':
              $(el).attr('data-gtm-info', 'ListID: ' + $(el).find('input[name="listid"]').val());
              break;
            case 'none':
              break;
          }
        //}
      }
    }



  };
})(jQuery);












;
(function ($) {
  /**
   * Behavior functions intended for urban wire post landing pages
   */
  Drupal.behaviors.responsiveBodyImages = {
    attach: function(context, settings) {
      var responsiveBodyImages = {
        magicWrap: function() {
          // will contain the body field wrapper
          var $body;

          if (($('body').hasClass('node-type-urban-wire-post') ||
              $('body').hasClass('node-type-election-blog-post')) &&
              $('.field--name-body').length > 0) {

            $body = $('.field--name-body');
            // wrap the img tag with a div wrapper, having the said classname
            $body.find('img').closest('p .caption').wrap('<div class="responsive-image-wrapper"></div>');
          }

          // if the image caption wrapper is exist set it's width to auto
          // cause the image is adapting it's width
          if ($body.find('.caption').length > 0) {
            $body.find('.caption').attr('style', 'width: auto;');
          }

          var alignPhotosAndCaptions = function() {
            $('.responsive-image-wrapper .left-caption').each(function(index, el) {
              var wrapper = $(el);
              var photoHeight = wrapper.find('img').outerHeight();
              var captionHeight = wrapper.find('p').outerHeight();
              var newHeight = (photoHeight > captionHeight) ? photoHeight : captionHeight;
              newHeight = newHeight + "px";
              wrapper.css('height', newHeight)
                .find('.caption').css('height', newHeight);
            });
            $('.responsive-image-wrapper .right-caption').each(function(index, el) {
              var wrapper = $(el);
              var photoHeight = wrapper.find('img').outerHeight();
              var captionHeight = wrapper.find('p').outerHeight();
              var newHeight = (photoHeight > captionHeight) ? photoHeight : captionHeight;
              newHeight = newHeight + "px";
              wrapper.css('height', newHeight)
                .find('.caption').css('height', newHeight);
            });
          }

          $(window).resize(function(event) {
            alignPhotosAndCaptions();
          });
        }
      };

      // call the function here..
      $(document).ready(function() {
        responsiveBodyImages.magicWrap();
      });
    }
  };
})(jQuery);
;
/* Chosen v1.2.0 | (c) 2011-2014 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):"":""},AbstractChosen.prototype.result_add_group=function(a){var b;return a.search_match||a.group_match?a.active_options>0?(b=document.createElement("li"),b.className="group-result",b.innerHTML=a.search_text,this.outerHTML(b)):"":""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(this.no_results_clear(),d=0,f=this.get_search_text(),a=f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(a,"i"),c=this.get_search_regex(a),l=this.results_data,j=0,k=l.length;k>j;j++)b=l[j],b.search_match=!1,e=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(e=this.results_data[b.group_array_index],0===e.active_options&&e.search_match&&(d+=1),e.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.text,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(d+=1),b.search_match?(f.length&&(g=b.search_text.search(i),h=b.search_text.substr(0,g+f.length)+"</em>"+b.search_text.substr(g+f.length),b.search_text=h.substr(0,g)+"<em>"+h.substr(g)),null!=e&&(e.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>d&&f.length?(this.update_results_content(""),this.no_results(f)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.get_search_regex=function(a){var b;return b=this.search_contains?"":"^",new RegExp(b+a,"i")},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d instanceof Chosen?d.destroy():d instanceof Chosen||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this})},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("touchstart.chosen",function(b){a.container_mousedown(b)}),this.container.bind("touchend.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=a.originalEvent.deltaY||-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:this.results_showing&&a.preventDefault();break;case 32:this.disable_search&&a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}.call(this);;
(function ($) {

  // this takes care of horizontail menus.
  // the horizontal menu in publications is in urban.publications.js

  $(document).ready(function(){
    resizeHorizontalNav(true);

    var resizeDelay;
    $(window).bind('resize', function() {
      clearTimeout(resizeDelay);
      resizeDelay = setTimeout(function() {
        resizeHorizontalNav(false);
      }, 100)
    });
  });

  function resizeHorizontalNav(init){
    // ADD <wrapper-id> <ul.menu-class> HERE TO ADD RESPONSIVE MENU
    var menus_list = '.horizontal-nav .menu, #horizontal-nav-wrapper .menu, #publication-tabs .tabs, .block--urban-menus-urban-menu-horizontal .menu';

    var menus = $(menus_list);

    var $lis = menus.find('> li:not(.horizontal-nav-more)');

    if (init) {
      // add class referencing # of items for styling purposes
      var menu_l = $lis.length;
      menus.addClass('items-' + menu_l);

      if (Drupal.UrbanInstitute.touchSupport) {
        menus.addClass('touch');
      } else {
        menus.addClass('no-touch');
      }

      // wrap links in spans, used for display: table-cell layout
      if (!$('.pane-research-area-topic-menu .menu').length) {
        $lis.wrapInner('<span class="wrap" />');
      }

    } else {
      menus.removeClass('full-width');
      menus.find('li.overflow-menu-item').removeClass('overflow-menu-item');
      menus.find('li.horizontal-nav-more').remove();
    }

    if (menus.hasClass('items-1') || menus.hasClass('items-2')) {
      return false;
    }

    // Handle turning the extra items into a hamburger
    var total_available = menus.width();
    var menu_li_total = 0;
    var more_width = 0;
    var overflow = false;

    $lis.each(function() {
      menu_li_total += $(this).width();
    });
    if (menu_li_total > (total_available)) {
      overflow = true;
    } else {
      menus.addClass('full-width');
    }

    menu_li_total = 0;

    if (overflow) {
      var $more = $('<li class="horizontal-nav-more" />').html('<span class="more-text"><span class="more-text-text">More</span><span class="more-arrow">&nbsp;</span></span>');
      $more.on('click', function() {
        $(this).toggleClass('collapse');
      });
      $more.appendTo(menus);
      var more_width = $more.innerWidth();
      var $ul = $('<ul class="container" />');

      $lis.each(function() {
        $li = $(this);
        menu_li_total += $li.width();
        if (menu_li_total > (total_available - more_width)) {
          $ul.append($li.clone());
          $li.addClass('overflow-menu-item');
        }
      });
      $more.append($ul);
    }

  }

}(jQuery));
;
/**
 * @file Common data layer helper.
 */

(function ($) {
  Drupal.behaviors.dataLayer = {

    /**
     * The language prefix list (no blank).
     *
     * @return {array}
     */
    langPrefixes: function langPrefixes() {
      var languages = Drupal.settings.dataLayer.languages,
          langList = [];

      for (var lang in languages) {
        if (languages[lang].prefix !== '') {
          langList.push(languages[lang].prefix);
        }
      }
      return langList;

      // With Underscore.js dependency.
      //var list = _.pluck(Drupal.settings.datalayer.languages, 'prefix');
      //return _.filter(list, function(lang) { return lang });
    },

    /**
     * Drupal behavior.
     */
    attach: function() { return }

  };
})(jQuery);
;
