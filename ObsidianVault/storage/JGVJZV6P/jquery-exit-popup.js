// var last_position = {};
// $(document).on('mousemove', function (event) {
//     if (typeof(last_position.x) != 'undefined') {
//         var deltaX = last_position.x - event.offsetX,
//             deltaY = last_position.y - event.offsetY;
//         if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
//             //upward movement		
// 			if(event.pageY <= 5){
// 				if ($.cookie('leaving-popup') != '1') {
//                   $('#leaving-popup, #leaving-tint').fadeIn('200ms');
//                   $.cookie('leaving-popup', '1');
//                 }
// 			}
//         }
//     }
//     last_position = {
//         x : event.offsetX,
//         y : event.offsetY
//     };
// });

$(document).ready(function() {
  if ($.cookie('app-popup-no-download') != '1' && $.cookie('app-popup-download') != '1') {
    $('#leaving-popup, #leaving-tint').delay('5000ms').fadeIn('200ms');
  }
  $('#leaving-tint, #close-leaving-popup').click(function(event) {
    $('#leaving-popup, #leaving-tint').fadeOut('200ms');
    $.cookie('app-popup-no-download', '1', { expires: 2 });
  });

  $('#get-app-1, #get-app-2').click(function(event) {
    $('#leaving-popup, #leaving-tint').fadeOut('200ms');
    $.cookie('app-popup-download', '1', { expires: 999 });
  });

});