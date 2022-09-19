function floatPlayer(divId,video,ratio,gaOption){
	// initialize jwplayer
if(!divId || divId == ""){
    return;
}

var playerInstance = jwplayer(divId);

// player dom elements
// var playerContainerEl = document.querySelector('.player-container');
var playerContainerEl = document.querySelector('#'+divId).parentNode.parentNode

// returns video player position from top of document
function getElementOffsetTop(el) {
  var boundingClientRect = el.getBoundingClientRect();
  var bodyEl = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || bodyEl.scrollTop;
  var clientTop = docEl.clientTop || bodyEl.clientTop || 0;
  return Math.round(boundingClientRect.top + scrollTop - clientTop);
}

// returns the current y scroll position
function getScrollTop() {
  var docEl = document.documentElement;
  return (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
}

var played = false;
// configure jwplayer instance
playerInstance.setup({
  autostart: false,
  file: video,
  primary: 'html5',
  setFullscreen: true,
  width: '100%',
    androidhls:true,
  aspectratio: ratio,
  events: {
        onPlay: function(){
            $('.jwplayer').each(function(index, el) {
                var videoId = $(this).attr('id');
                if(divId != videoId) {
                    var thePlay = jwplayer(videoId);
                    thePlay.play(false);
                }
            });
            $('.audio-item').each(function (index, el) {
                var imgEl=$(this).find('.audio-play')[0];
                imgEl.src=imgEl.src.replace('icon2@x2','icon1@x2');
                $(this).children('audio')[0].pause()
            })
        // },
        // onReady: function(){
        //     var container_node = $(document.getElementById(container));
        //     $('.jw-display-icon-container', container_node).css({
        //         left: '0',
        //         top: '0',
        //         margin: '0',
        //         width: '2.75em',
        //         height: '2.75em'
        //     });
        }
    }
}).on('play', function(obj) {
    if(!played){
        played = true
        console.log('played', obj);
        if(gaOption.headline == "GLOBAL BUSINESS"){
            window.sendWebEvent && window.sendWebEvent('Global_Business_Europe_Introduction','video_play',video);
        }else if(gaOption.headline == "AGENDA"){
            window.sendWebEvent && window.sendWebEvent('Agenda_Introduction','video_play',video);
        }else if(gaOption.headline == "RAZOR"){
            window.sendWebEvent && window.sendWebEvent('Razor_Introduction','video_play',video);
        }else if(gaOption.headline == "THE WORLD TODAY"){
            window.sendWebEvent && window.sendWebEvent('The_World_Today_Introduction','video_play',video);
        }else{
            window.sendVideoPlayEvent(gaOption.sn, gaOption.headline, video, gaOption.origin);
        }
    }
}).on('fullscreen', function(obj) {
    console.log('fullscreen: ',obj);
    window.sendVideoOtherEvent('fullscreen',gaOption.sn, gaOption.headline, video, gaOption.origin);
}).on('complete', function(obj) {
    $('#'+divId).hide();
    $('#'+divId+"-myOverlay").show();
    console.log('complete : ',obj)
    if(gaOption.headline == "GLOBAL BUSINESS"){
        window.sendWebEvent && window.sendWebEvent('Global_Business_Europe_Introduction','complete',video);
    }else if(gaOption.headline == "AGENDA"){
        window.sendWebEvent && window.sendWebEvent('Agenda_Introduction','complete',video);
    }else if(gaOption.headline == "RAZOR"){
        window.sendWebEvent && window.sendWebEvent('Razor_Introduction','complete',video);
    }else if(gaOption.headline == "THE WORLD TODAY"){
        window.sendWebEvent && window.sendWebEvent('The_World_Today_Introduction','complete',video);
    }else{
        window.sendVideoOtherEvent('complete',gaOption.sn, gaOption.headline, video, gaOption.origin);
    }
}).on('pause', function(obj) {
    console.log('pause: ',obj)
    if(gaOption.headline == "GLOBAL BUSINESS"){
        window.sendWebEvent && window.sendWebEvent('Global_Business_Europe_Introduction','pause',video);
    }else if(gaOption.headline == "AGENDA"){
        window.sendWebEvent && window.sendWebEvent('Agenda_Introduction','pause',video);
    }else if(gaOption.headline == "RAZOR"){
        window.sendWebEvent && window.sendWebEvent('Razor_Introduction','pause',video);
    }else if(gaOption.headline == "THE WORLD TODAY"){
        window.sendWebEvent && window.sendWebEvent('The_World_Today_Introduction','pause',video);
    }else{
        window.sendVideoOtherEvent('pause',gaOption.sn, gaOption.headline, video, gaOption.origin);
    }
}).on('visualQuality', function(obj) {
    console.log('HD: ',obj)
    window.sendVideoOtherEvent('HD: '+obj.level.label,gaOption.sn, gaOption.headline, video, gaOption.origin);
});

// when jwplayer instance is ready
playerInstance.on('ready', function() {
        var config = playerInstance.getConfig();
        var utils = playerInstance.utils;
		
        // get height of player element
        var playerHeight = config.containerHeight;

        // get player element position from top of document
        var playerOffsetTop = getElementOffsetTop(playerContainerEl);

        // set player container to match height of actual video element
        // this prevents container from disappearing and changing element positions
        // on page when player becomes minimized. this also leaves a nice visual
        // placeholder space for minimized player to return to when appropriate
		
        playerContainerEl.style.height = playerHeight + 'px';

        // below we handle window scroll event without killing performance
        // this is a minimal approach. please consider implementing something more extensive:
        // i.e. http://joji.me/en-us/blog/how-to-develop-high-performance-onscroll-event

        // determine player display when scroll event is called
        // if inline player is no longer visible in viewport, add class
        // .player-minimize to minimize and float. otherwise, remove the class to put
        // player back to inline inline position
        function onScrollViewHandler() {
            //chen add ,after modify window size, need change offsetTop 解决窗口大小发生变化时，会导致视频滚动开始位置不正常的bug
            playerOffsetTop = getElementOffsetTop(playerContainerEl);

            var minimize = getScrollTop() >= playerOffsetTop;

            if(playerInstance.getState() == 'idle') {
                $('#'+divId).hide();
                return;
                // utils.toggleClass(playerContainerEl, 'cg-player-minimize', false);
            }
            else if(playerInstance.getState() != 'playing' && minimize) {
                utils.toggleClass(playerContainerEl, 'cg-player-minimize', false);
                return;
            }
            else{
                utils.toggleClass(playerContainerEl, 'cg-player-minimize', minimize);
            }
            // update the player's size so the controls are adjusted

			if((!!window.ActiveXObject || "ActiveXObject" in window)){
				return ;
			}

			if(minimize){
				playerInstance.resize('300','160');
			}
			else{
				playerInstance.resize( $('#'+divId).parent().width(),$('#'+divId).parent().height());
			}

        }

        // namespace for whether or not we are waiting for setTimeout() to finish
        var isScrollTimeout = false;

        // window onscroll event handler
        // window.onscroll = function() {
        //     console.log(divId)
        //     // skip if we're waiting on a scroll update timeout to finish
        //     if (isScrollTimeout) return;
        //     // flag that a new timeout will begin
        //     isScrollTimeout = true;
        //     // otherwise, call scroll event view handler
        //     onScrollViewHandler();
        //     // set new timeout
        //     setTimeout(function() {
        //         // reset timeout flag to false (no longer waiting)
        //         isScrollTimeout = false;
        //     }, 80);
        //
        // };

        // window onscroll event handler
        function addEvent(obj,type,fn){
        if(obj.attachEvent){ //ie
            obj.attachEvent('on'+type,function(){
                fn.call(obj);
            })
        }else{
            obj.addEventListener(type,fn,false);
        }
    }

        addEvent(window,'scroll',function(){

                // skip if we're waiting on a scroll update timeout to finish
                if (isScrollTimeout) return;
                // flag that a new timeout will begin
                isScrollTimeout = true;
                // otherwise, call scroll event view handler

                onScrollViewHandler();

                // set new timeout
                setTimeout(function() {
                    // reset timeout flag to false (no longer waiting)
                    isScrollTimeout = false;
                }, 80);

        });


        //解决视频暂停时窗口大小发生变化会导致视频大小不正常的bug
        $('#'+divId).parent().resize(function(){
            if(playerInstance.getState() != 'idle'){
                playerInstance.resize( $('#'+divId).parent().width(),$('#'+divId).parent().height());
            }
        })
    $('#'+divId).hide();
    });

return playerInstance;

}