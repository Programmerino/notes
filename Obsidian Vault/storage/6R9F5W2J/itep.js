/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

    /**
     * Open all external links in a new window
     */
    $('a').not('[href*="mailto:"],[href*="https://www.z2systems.com"]').each(function () {
      var isInternalLink = new RegExp('/' + window.location.host + '/');
      if ( ! isInternalLink.test(this.href) ) {
        $(this).attr('target', '_blank');
        $(this).attr('rel', 'noopener');
      }
    });

    // toggle display of search input; when display have button submit form
    $('body').on('click','.search-btn',function(){
        if($('#search-input:hidden')){
            $('#search-input').show(200,function(){
                $('.search-btn').attr('type','submit');
            });
        }
    });

} )( jQuery );

function slugify(text){
    // https://gist.github.com/mathewbyrne/1280286
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

// *****************************
// WHOPAYS INTERACTIVE MAP
// *****************************

// for map with a shortcode mapID attribute = mapwhopays6
// to use with another map, update the var reference at the start of the following
mapwhopays6.addListener("clickMapObject", function(event) {
  // Data Source: https://docs.google.com/spreadsheets/d/1HLwcEnaRfjNedg7u0gOvzheKJ_WEleqV306O-CIEg4w/edit#gid=0
  // https://www.amcharts.com/kbase/using-map-events-catch-clicked-object-information/
  // https://www.amcharts.com/kbase/displaying-information-clicked-map-object-outside-map/
  // https://codepen.io/team/amcharts/pen/b592969886da04813676872e595b9dd7

  // console.log(event.mapObject);

  $('#modalWhoPays').modal('toggle');

  var stateName = event.mapObject.title;
  var rankRaw = document.getElementById("map-area-info-state-rank").innerHTML = event.mapObject.rank;
  var rankText = document.getElementById("map-area-info-state-text-rank").innerHTML = event.mapObject.rankText;
  var stateImage = event.mapObject.stateImage;
  var stateGraph = event.mapObject.stateGraph;

  document.getElementById("map-area-info-state-name").innerHTML = stateName;
  document.getElementById("map-area-info-state-rank").innerHTML = rankRaw;

  document.getElementById("map-area-info-state-image").innerHTML = '<img src="'+stateImage+'" class="img-responsive">';
  if(event.mapObject.stateGraph){
    document.getElementById("map-area-info-state-graph").innerHTML = '<img src="'+stateGraph+'" class="img-responsive">';
  }else{
    document.getElementById("map-area-info-state-graph").innerHTML = '';
  }

  document.getElementById("map-area-info-state-text-rank").innerHTML = rankText;

  document.getElementById("map-area-info-family-low-20").innerHTML = event.mapObject.familyLow20;
  document.getElementById("map-area-info-family-second-20").innerHTML = event.mapObject.familySecond20;
  document.getElementById("map-area-info-family-middle-20").innerHTML = event.mapObject.familyMiddle20;
  document.getElementById("map-area-info-family-fourth-20").innerHTML = event.mapObject.familyFourth20;
  document.getElementById("map-area-info-family-next-15").innerHTML = event.mapObject.familyNext15;
  document.getElementById("map-area-info-family-next-4").innerHTML = event.mapObject.familyNext4;
  document.getElementById("map-area-info-family-top-1").innerHTML = event.mapObject.familyTop1;

  document.getElementById("map-area-info-button-link-name").innerHTML = stateName;

  document.getElementById("whopays-state-link").setAttribute("href", "/whopays/"+slugify(stateName))

  document.getElementById('statePicker').value=event.mapObject.id;

});

// https://www.amcharts.com/kbase/using-html-control-select-areas-map/
// selecting an option is interpreted as a click on the map, which in turn displays the modal
function selectState(selection) {
    var id = statePicker.options[statePicker.selectedIndex].value;
    if ( '' == id ) {
        mapwhopays6.clickMapObject(mapwhopays6.dataProvider);
    }
    else {
        mapwhopays6.clickMapObject(mapwhopays6.getObjectById(id));
    }
}

// reset selectState value when modal is closed
$('#modalWhoPays').on('hidden.bs.modal', function (e) {
  statePicker.selectedIndex = 0;// do something...
})