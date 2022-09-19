
/*FastClick @codingstandard ftlabs-jsv2 * @copyright The Financial Times Limited [All Rights Reserved]	 * @license MIT License (see LICENSE.txt)*/
(function(){function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;this.tapTimeout=options.tapTimeout||700;if(FastClick.notNeeded(layer)){return}function bind(method,context){return function(){return method.apply(context,arguments)}}var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context)}if(deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0&&!deviceIsWindowsPhone;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS [6-7]_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if((deviceIsIOS&&target.type==="file")||target.disabled){return true}break;case"label":case"iframe":case"video":return true}return(/\bneedsclick\b/).test(target.className)};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return !deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return !target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"&&targetElement.type!=="month"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true
}if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true}if((event.timeStamp-this.trackingClickStart)>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false}targetElement=forElement}}else{if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==="input")){this.targetElement=null;return false}this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}}if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;var firefoxVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true
}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(layer.style.msTouchAction==="none"||layer.style.touchAction==="manipulation"){return true}firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(firefoxVersion>=27){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport&&(metaViewport.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true}}if(layer.style.touchAction==="none"||layer.style.touchAction==="manipulation"){return true}return false};FastClick.attach=function(layer,options){return new FastClick(layer,options)};if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return FastClick})}else{if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}}}());

/**https://github.com/pinceladasdaweb/isMobile*Copyright 2013 Pedro Rogerio*Licensed under the MIT license**/
var isMobile = (function (userAgent) {
  'use strict';
  return !!userAgent.match(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i);
}(navigator.userAgent));


/**
 * 响应页面窗口调整
 * @constructor
 */
function HandleResponsiveOnResize(){
    HandleSidebarAndContentHeight();
    $(window).resize(function(){
        HandleSidebarAndContentHeight();
        
        //绑定移动端 Ajax 翻页事件
        BingLoadNextPageEvent($('#loadNextPageBtn'));
        

    });

    $(window).scroll(function(){

        if($(document).scrollTop()>50)
        {
            $('#back-to-top').css({'display':'block'});
        }
        else
        {
            $('#back-to-top').css({'display':'none'});
        }
    });
}

/**
 * 调整返回顶部按钮的位置
 * @constructor
 */
function HandleSidebarAndContentHeight(){
    var cWidth = $('.container').width();
    var wWidth = $(window).width();
    var right = (wWidth-cWidth)/2-58;
    $('#side-fixed-button').css({right:right>10?right:10});
}

/**
 * 专题列表
 * @param id
 */
function cm_selected(id){
    var obj = $(id).find('li');
    obj.hover(function(){obj.removeClass('selected');$(this).addClass('selected')},function(){});
}

/**
 * 平滑滚动至顶部
 */
function backToTop(){
    $("html,body").animate({scrollTop: 0}, 200);
}

/**
 * 获取滚动条距底部的距离
 * @returns {{toTop: (*|jQuery), toBottom: number}}
 */
function getScrollPositionOfBottom()
{
    var documentHeight = $(document).height();
    var scrollHeight = $(document).scrollTop();
    var widowHeight = document.documentElement.clientHeight;
    return {toTop:scrollHeight,toBottom:documentHeight-scrollHeight-widowHeight};
}

/**
 * 获取分页信息
 * @returns {{totalpagenumber: string, baselink: string}}
 * @constructor
 */
function GetPageInfo(){
    var _return={totalpagenumber:0,baselink:"#",extend:'',index:1}
    var pagelink = $('#displaypagenum').find('a');
    if(pagelink.length)
    {
        var TotalPageNum,extend,lastHref,temp;
        lastHref = pagelink.last().attr('href');
        extend = lastHref.match(/\.[a-zA-Z]+$/ig);
		temp = lastHref.substr(0,lastHref.length-extend[0].length);
		temp = temp.split("_");
		TotalPageNum = temp[2] ? temp[2] : 2;
		_return.totalpagenumber=parseInt(TotalPageNum);
		_return.baselink= temp[0]+"_"+temp[1]
		_return.extend = extend[0];
        _return.index = parseInt($('#displaypagenum').find('span.page').first().text());
		
        //TotalPageNum = lastHref.match(/\d+\.[a-zA-Z]+$/ig);
        //TotalPageNum = TotalPageNum[0].substr(0,TotalPageNum[0].length-extend[0].length);
		//_return.baselink=pagelink.last().attr('href').substr(0,pagelink.last().attr('href').length-extend[0].length-TotalPageNum.length-1);
    }else{
        //预览状态的页码通过分页符获取
        var hrNum = $('#sourceHTML').find('hr').length;
        _return.totalpagenumber= hrNum ? hrNum : 1;
        _return.baselink = 'localhost';
    }
    return _return;
}

/**
 * Ajax 加载下一页数据
 * @param pageInfo
 * @param loadNextPageBtn
 * @constructor
 */
function LoadPage(pageInfo,loadNextPageBtn){
    var baseLink = pageInfo.baselink;
    var totalPageNum = pageInfo.totalpagenumber;
    var currentPage = parseInt(loadNextPageBtn.attr('data-CurrentPage'));
    var nextPage =  currentPage+1;
    var extend = pageInfo.extend;

    if(nextPage <= totalPageNum)
    {
        var pageUrl = totalPageNum == 1 ? baseLink + extend : baseLink + "_" + nextPage + extend;
        var ajaxResult = '';
		$('#VProgress').html('<div class="loader"></div>');

        $.ajax({
            url:pageUrl,
            type:'GET',
            success:function(data){
                //取出页面中的正文部分
                ContentHtml_Reg = new RegExp("<!--HTMLBOX-->([\\s\\S]+)<!--HTMLBOX-->","i");
                ajaxResult = data.match(ContentHtml_Reg);
                ajaxResult = ajaxResult[1].replace(/<!--[\w\W\r\n]*?-->/gmi,"");
                ajaxResult = ajaxResult.replace(/<([^\s>]+)[^>]*>(\s*)<\/\1>/gmi,"");

//              $('#article-content').append('<hr/><small class="pageNum">第'+nextPage+'页</small>'+ajaxResult);
				$('#article-content').append('<hr/>'+ajaxResult);
				$('#article-content').find('div,p,center,font,img').removeAttr('size').removeAttr('style');
				
				loadNextPageBtn.attr({'data-CurrentPage':nextPage});
                if(nextPage == totalPageNum)
                {
                    loadNextPageBtn.remove();
                    showArticleEnd()
                }
                else
                {                    
                    $('#VProgress').text(nextPage+'/'+pageInfo.totalpagenumber);
                }
            },
			complete:function(){window.isLoadingNewPage = false;}
        });
    }
    else
    {
        loadNextPageBtn.remove();
        return;
    }

}

/**
 * 显示页脚和评论
 */
window.disqusInit = true;
function showArticleEnd() {
    $('#ArticleRelation').show();
    $('#pageFooter').show();
    if(window.disqusInit){
        initDisqus();
    }
}

function initDisqus(){
    var d = document, s = d.createElement('script');

    s.src = '//chianmil.disqus.com/embed.js';

    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    window.disqusInit = false;
}

/**
 * 隐藏页脚和相关稿件
 */
function hiddenArticleEnd()
{
    $('#ArticleRelation').hide();
    $('#pageFooter').hide();
}

/**
 * 绑定分页按钮事件
 * @param loadNextPageBtn
 * @constructor
 */
function BingLoadNextPageEvent(loadNextPageBtn)
{
    if($(window).width()>992)
    {
        showArticleEnd();
        return;
    }

    if(loadNextPageBtn.length>0)
    {
        hiddenArticleEnd()
    }


    if(window.NextPageBtnHasEvent)
    {
        return ;
    }

    //if(isIE5 || isIE6 || isIE7 || isIE8) return;

    var pageInfo = GetPageInfo();

	loadNextPageBtn.attr({'data-CurrentPage':pageInfo.index});    // 修复始终从第一页加载的问题
    if(pageInfo.totalpagenumber>1 && (pageInfo.index+1 <= pageInfo.totalpagenumber)){
        hiddenArticleEnd();
        loadNextPageBtn.click(function () {
			if(window.isLoadingNewPage)	return;
			window.isLoadingNewPage = true;
            LoadPage(pageInfo,loadNextPageBtn);
        });
		
		$(window).scroll(function(){
			if(getBottomToView()<30){
				if(window.isLoadingNewPage)	return;
				window.isLoadingNewPage = true;
				LoadPage(pageInfo,loadNextPageBtn);
			}
		})
		
        $('#VProgress').text(pageInfo.index+'/'+pageInfo.totalpagenumber);
        window.NextPageBtnHasEvent = 1;
    }else
    {
        showArticleEnd();
        loadNextPageBtn.remove();
    }
}

function getBottomToView(){
	var height = $(document).height();
	var scrollTop = $(document).scrollTop();
	var windowHeith = $(window).height();
	
	return height - scrollTop - windowHeith;
}
/**
 * 字符串替换函数
 * @param s1
 * @param s2
 * @returns {string}
 */
String.prototype.replaceAll = function(s1,s2) {
    return this.replace(new RegExp(s1,"gm"),s2);
}

/**
 * 在整个当前文档中找出正文图片
 * action = list 		返回数组，内容为正文图片
 * action = default	返回img对象，内容为第一张正文图片
 */
function getContentImage(action){		
	var ImgObjArr = $('img[id]');
	var imglist = new Array();
	if(ImgObjArr.length>1)
	{
		var CurImgID = "";
		var reg = /^\d+$/;		//判断图片ID属性的正则
		for(var i =0;i<ImgObjArr.length;i++)
		{
			CurImgID=ImgObjArr.eq(i).attr('id');
			if(reg.test(CurImgID)){
				imglist.push(ImgObjArr.eq(i));
			}
		}
		return action=="list" ? imglist : imglist[0];
	}
	else
	{
		return ImgObjArr;
	}
}

/**
 * 设置鼠标样式
 * img      要处理的图片信息
 * e        鼠标的事件信息
 */
function bindImageLink(img,e) {
    var imgWidth = img.width();
    var imgBox = img.parent();
    if(imgWidth/2-e.offsetX>0)
    {
        if(imgBox.hasClass('cursor-left'))
            return;        
        imgBox.removeClass('cursor-right'); 
        imgBox.addClass('cursor-left');  
        
    }
    else
    {
        if(imgBox.hasClass('cursor-right'))
            return;  
        imgBox.removeClass('cursor-left');
        imgBox.addClass('cursor-right');
    }
}

/**
 * 绑定翻页链接
 * pageinfo 分页信息
 * img      要处理的图片信息
 * e        鼠标在的事件信息
 */
function bindImageClick(LinkInfo,img,e) {
    var imgWidth = img.width();
    if(imgWidth/2-e.offsetX>0)
    {
        if(LinkInfo.pre != null)
            window.location=LinkInfo.pre;
    }
    else
    {
        if(LinkInfo.next != null)
            window.location=LinkInfo.next;
    }
}

/**
 * 计算当前页面的上下页链接
 * pageinfo     当前页面的上下文信息  getPageInfo()
 */
function getLinkOfNextAndPrePage(pageinfo)
{
    var preLink = "",nextLink="";
    var preNumber = pageinfo.index-1>0?pageinfo.index-1:null;
    var nextnumber = pageinfo.index+1>pageinfo.totalpagenumber?null:pageinfo.index+1;
    
    preLink = preNumber==null?null:(preNumber==1?pageinfo.baselink+pageinfo.extend:pageinfo.baselink+'_'+preNumber+pageinfo.extend);    
    nextLink = nextnumber==null?null:pageinfo.baselink+'_'+nextnumber+pageinfo.extend;

    return {next:nextLink,pre:preLink}
}


/*CMVIDEO*/
function createHTML5video(videoUrl,ext){

	var html5video = '<video class="cm-video" controls preload="none" width="100%" height="auto" src="'+videoUrl+'">';
	html5video += '<source src="'+ videoUrl +'" type=\'video/'+ext+'\' /></video>';
		
	return html5video;
}

function createHTML5audio(audioUrl){
	return '<audio class="cm-audio" controls preload="none" src="'+audioUrl+'"></audio>'
}

function createEmbedAudio(mediaUrl){
	return '<embed type="audio/mp3" src="'+mediaUrl+'"  height="45" width="280" autostart=true loop=false></embed>'
}



function audioPause(){
	var audioPlayers = $('audio');
	for (var i = 0; i < audioPlayers.length; i++) {
		audioPlayers[i].pause();
	}
}

function createFlash(flashvar,height){		
	var FlashPlayer = '<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ';
	FlashPlayer += 'width="100%" height="'+height+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">';
	FlashPlayer += '<param name="movie" value="26091.files/player.swf">';
	FlashPlayer += '<param name="quality" value="high">';
	FlashPlayer += '<param name="allowFullScreen" value="true">';
	FlashPlayer += '<param name="FlashVars" value="'+ flashvar +'">';
	FlashPlayer += '<embed id="cmplayer_video" pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="'+height+'" quality="high" ';
	FlashPlayer += 'src="26091.files/player.swf" flashvars="'+ flashvar +'" allowfullscreen="true" type="application/x-shockwave-flash">';
	FlashPlayer += '</object>';
	return FlashPlayer;
}

function makeFlashVars(videoUrl){
	var flashvars = [
		'name=中国军网',
		'link=http://www.81.cn',
		'link_target=_blank',
		'share_cmp=0',
		'context_menu=false',
		'skin_info=0',
		'api=cmp_loaded',
		'src='+videoUrl,
		'mixer_filter=1',
		'mixer_id=5',
		'label=name',
		'skin=http://www.81.cn/res/34820.files/vplayer.swf',
		'auto_play=1',
		'config=0',
		'fullscreen_scale=1',
		'video_scalemode=1',
		'sound_sample=true'
	];
	return flashvars.join('&');
}
/*
function createFlash(flashvar){		
	var FlashPlayer = '<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" ';
	FlashPlayer += 'width="100%" height="460" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">';
	FlashPlayer += '<param name="movie" value="http://www.81.cn:80/res/static/flvplayer.swf">';
	FlashPlayer += '<param name="quality" value="high">';
	FlashPlayer += '<param name="allowFullScreen" value="true">';
	FlashPlayer += '<param name="FlashVars" value="'+ flashvar +'">';
	FlashPlayer += '<embed pluginspage="http://www.macromedia.com/go/getflashplayer" width="100%" height="460" quality="high" ';
	FlashPlayer += 'src="http://www.81.cn:80/res/static/flvplayer.swf" flashvars="'+ flashvar +'" allowfullscreen="true" type="application/x-shockwave-flash">';
	FlashPlayer += '</object>';
	
	return FlashPlayer;
}

function makeFlashVars(videoUrl){
	var FlashVarsStr = 'vcastr_file= '+videoUrl+'&amp;';
	FlashVarsStr += 'IsAutoPlay=1&amp;IsShowBar=3&amp;BarColor=0xCCCCCC&amp;LogoText=TV.81.CN&amp;';
	FlashVarsStr +='BarPosition=0&amp;IsContinue=1&amp;DefaultVolume=85';
	
	return FlashVarsStr;
}
*/

function IsSupportHTML5(){
	
	if(!!document.createElement('video').canPlayType)
	{
		return true;
	}else{
		return false;
	}
}

function getFileExt(filePath){
	var re = /(\\+)/g;
	var filename=filePath.replace(re,"#");
	var one=filename.split("#");
	var two=one[one.length-1];
	var three=two.split(".");
	var ext=three[three.length-1];
	return ext.toLowerCase();
}

/**
 * 是否为微场景
 * 
 * @param mediaUrl 媒体链接地址
 * @returns 如果是微场景则返回微场景名称，如果不是则返回 false
 */
function MSSupport(mediaUrl) {
	var list = {
		"isEqx"		: new RegExp('e' + 'q' + 'x' + 'i' + 'u' + '.' + 'c'),
		"isMaka"	: new RegExp('m' + 'a' + 'k' + 'a' + '.' + 'i' + 'm'),
		"isSevenc"	: new RegExp('7' + '0' + 'c' + '.' + 'c' + 'o' + 'm'),
		"isVxplo"	: new RegExp('v' + 'x' + 'p' + 'l' + 'o' + '.' + 'c' + 'n'),
		"isIH5"		: new RegExp('i' + 'h' + '5' + '.' + 'c' + 'n'),
		"isIAMH5"	: new RegExp('i' + 'a' + 'm' + 'h' + '5' + '.' + 'c' + 'n'),
		"isEpub"	: new RegExp('e' + 'p' + 'u' + 'b' + '3' + '6' + '0' + '.' + 'c' + 'o' + 'm'),
		"isEpub-w"	: new RegExp('m' + '.' + 'c' + 'r' + 'e' + 'a' + 't' + 'b' + 'y' + '.' + 'c' + 'o' + 'm'),
		"isRabbitPre": new RegExp('r' + 'a' + 'b' + 'b' + 'i' + 't' + 'p' + 'r' + 'e' + '.' + 'c' + 'o' + 'm'),
		"isJSApp"	: new RegExp('j' + 'i' + 's' + 'u' + 'a' + 'p' + 'p' + '.' + 'c' + 'n'),
		"isRRXiu"	: new RegExp('r' + 'r' + 'x' + 'i' + 'u' + '.' + 'n' + 'e' + 't'),
		"isJs7tv"	: new RegExp('j' + 's' + '7' + 't' + 'v' + '.' + 'c' + 'n'),
		"isRenhe"	: new RegExp('r' + 'e' + 'n' + 'h' + 'e' + '.' + 'o' + 'r' + 'g'),
		"isWPS"		: new RegExp('w' + 'p' + 's' + '.' + 'c' + 'n'),
		"isMyzaker"	: new RegExp('m' + 'y' + 'z' + 'a' + 'k' + 'e' + 'r' + '.' + 'c' + 'o' + 'm'),
		"isWcd"		: new RegExp('w' + 'c' + 'd' + '.' + 'i' + 'm'),
		"isGooH5"	: new RegExp('g' + 'o' + 'o' + 'h' + '5' + '.' + 'c' + 'n'),
	}

	for (var reg in list) {
		if (list.hasOwnProperty(reg)) {
			if (list[reg].test(mediaUrl)) {
				return reg.substr(2);
			}
		}
	}

	return false;
}


/**
 * 创建一个 DIV 通过 iframe 模拟手机访问
 */
function createMobileBox(mediainfo, scenename) {

	var html = '<div class="MobileDiv ' + scenename + '"><iframe id="wcj" src="' + mediainfo.mediaUrl + '" scrolling="no" frameborder="0"></iframe></div>';
	var qrcodeImg = getContentImage('default')[0];
	var qrcodeid = 'qrcode' + window.qrcode++;

	$(qrcodeImg).hide();

	if ((typeof (isltIE10) != "undefined" && isltIE10) || mediainfo.linkto) {
		html = '<div class="MobileDiv ltie10"><div  class="qrCode" id="' + qrcodeid + '"></div><p>请使用手机扫描二维码浏览</p></div>';
		$(mediainfo.script).replaceWith('<div class="cm-player">' + html + '</div>');
		$('#' + qrcodeid).html('<img src="' + $(qrcodeImg).attr('src') + '" width="200" height="200"/>');
		return null;
	}
	else
	{
		html += '<div class="MobileDivCode ' + scenename + '-code"><div class="qrCode" id="' + qrcodeid + '"></div><p>请使用手机扫描二维码浏览</p></div>';
		$(mediainfo.script).replaceWith('<div class="cm-player">' + html + '</div>');
		$('#' + qrcodeid).qrcode({ width: 200, height: 200, text: mediainfo.mediaUrl });
		return null;
	}
}




/**
 * 读取页面中所有的媒体链接信息
 * 
 * @returns 媒体信息清单
 */
function getMediaInfo() {
	
	
	
	var scripts = $('script[title]');
	var list = [];
	var linkto = ['Myzaker'];
	var url = null;
	var _str = null;
	
	var mediaurl = $('#mediaurl').text().trim();	
	
	if(mediaurl.length>10){
		list.push({
			script:'#mediaurl',
			type: mediaurl.split('.mp')[1]=='4'?'Video':"Audio",
			ext :  'mp'+mediaurl.split('.mp')[1],
			mediaUrl : mediaurl
		})
		return list;
	}
	
	
	
	for (var i = 0; i < scripts.length; i++) {

		_str = scripts[i].text.trim();
		_str = _str.replaceAll('\n','');
		_str = _str.replaceAll('<!--','');
		_str = _str.replaceAll('-->','');
		_str = _str.trim();
		
		if(/wxsimg/.test(_str)){
			continue;
		}


		url = _str.split(' ');
		url.length < 2 && (url = _str.split('|'));

		list.push({
			script: scripts[i],
			type: url[0].trim().substr(2),
			mediaUrl: url[1].trim(),
			ext:getFileExt(url[1].trim()),
			linkto:linkto.indexOf(url[0].trim().substr(2))>=0
		})

	}

	return list;
}

function init_cm_player(){

	var medias = getMediaInfo();
	var issupporthtml5 = IsSupportHTML5();
	var _media = null;
	var _scenename = null;
	var articleContent = $('#article-content');

	for (var i = 0; i < medias.length; i++) {

		_media = medias[i];
		switch (_media.type){

			//如果是微场景
			case 'Scene':
				_scenename = MSSupport(_media.mediaUrl);
				if (_scenename) {
					if (_media.mediaUrl.length < 10) {						
						break;
					}

					if (isMobile) {
						window.location = _scenename == "Wcd" ? _media.mediaUrl : _media.mediaUrl.split('?')[0];
					}					
					else 
					{
						$('#qrCode').remove();
						createMobileBox(_media,_scenename);
						return;
					}    
				}
			break;

			case 'Video':
				if (issupporthtml5) {
					$(_media.script).replaceWith('<div class="cm-player">'+createHTML5video(_media.mediaUrl, _media.ext)+"</div>");
				}else{
					$(_media.script).replaceWith('<div class="cm-player">'+createFlash(makeFlashVars(_media.mediaUrl),articleContent.width()*0.5625)+"</div>");
				}
			break;

			case 'Audio':
				
				// 暂停所有已经存在的音乐播放器
				audioPause();
				
				var audioid = 'audio';
				if (issupporthtml5) {
					$(_media.script).replaceWith('<div id="'+audioid+'" class="cm-player">'+createHTML5audio(_media.mediaUrl)+"</div>");
				}else{
					$(_media.script).replaceWith('<div id="'+audioid+'" class="cm-player">'+createEmbedAudio(_media.mediaUrl)+"</div>");
				}
				$('#'+audioid).css({'margin-left':'0'})
			break;

		}

	}
	// for end
    	
}
/*多媒体播放器结束*/

//绑定窗口变化事件
HandleResponsiveOnResize();

//初始化 Ajax 翻页
BingLoadNextPageEvent($('#loadNextPageBtn'));

//300毫秒延迟
$(function() {
	FastClick.attach(document.body);
});

/* 移动设备上显示隐藏主菜单 */
+function(){
	var showCover = function(){
		window.BodyScrollTop = document.body.scrollTop;
		$('body').css({'overflow':'hidden','position':'fixed','width':'100%',top:-window.BodyScrollTop});
		$('.menu-cover').show();
	}
	
	var hideCover = function(){
		$('.menu-cover').hide();
		$('body').css({'overflow-y':'auto','position':'relative',top:0});
		$('body').scrollTop(window.BodyScrollTop);
	}
	
	$('.btn-menu-toggle').click(function(){
		$('.btn-menu-toggle').toggleClass('close');
		$('.nav-main').toggleClass('active');
		if($(this).hasClass('close'))
		{
			showCover();
			return;
		}
		hideCover();
	})
}();

/* 移动设备导航条子菜单切换 */
+function(){
	$('.nav-bar li.dropdown').click(function () {
		var obj = $(this);
		var hasClass = obj.hasClass('open');
		obj.parent().find('li.open').removeClass('open');
		if(!hasClass)
			obj.addClass('open');
	});
}();

+function(){
	var tool = $('#font-size');	
	var plus = tool.find('.plus');
	var _reset = tool.find('.reset');
	var minus = tool.find('.minus');
	var content = $('.article-content .content');
	var images = null;	
	var fontSize = function(){return parseInt(content.css('font-size').substr(0,content.css('font-size').length-2));}

	init_cm_player()
	
	+function(){
		content.find('div,p,center,font,img').removeAttr('size').removeAttr('style');

		plus.click(function(){content.css({'font-size':fontSize()+4});});
		minus.click(function(){content.css({'font-size':fontSize()-4});});
		_reset.click(function(){content.css({'font-size':16});});
		
		images = $('img', content);
		images.click(function(){window.open($(this).attr('src'))});
		for(var i=0;i<images.length;i++){
			description = images.eq(i).attr('title');
			description && description.length > 0 && images.eq(i).after("<p class='description'>"+ description +"</p>");
		}
		
	}()		
	
}();