try{
String.prototype.className=function(){return"string"!=typeof this&&!this instanceof String||"function"!=typeof this.replace?this:this.replace(".","")},String.prototype.varName=function(){return"string"!=typeof this&&!this instanceof String||"function"!=typeof this.replace?this:this.replace("-","_")};var tribe=tribe||{};

}
catch(e){console.error("An error has occurred: "+e.message);}
try{
var tribe=tribe||{};tribe.tooltip=tribe.tooltip||{},function(t,e){"use strict";var o=t(document);e.selectors={tooltip:".tribe-tooltip",active:"active"},e.setup=function(){o.on("click",e.selectors.tooltip,e.onClick)},e.onClick=function(){var o=t(this).closest(e.selectors.tooltip),i=!o.hasClass(e.selectors.active);t(e.selectors.tooltip).each(function(){t(this).removeClass(e.selectors.active).attr("aria-expanded",!1)}),i&&t(o).addClass(e.selectors.active).attr("aria-expanded",!0)},o.ready(e.setup)}(jQuery,tribe.tooltip);

}
catch(e){console.error("An error has occurred: "+e.message);}
