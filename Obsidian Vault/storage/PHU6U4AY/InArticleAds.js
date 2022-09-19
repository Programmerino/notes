

function getInsertionParagraph(pList, targetY) {
  var curY = null;
  var insertAt = null;
  pList.each(function (idx) {
    //console.log('get insertion ', curY, targetY);
    curY = $(this).offset().top;
    if (curY > targetY) {
      insertAt = idx;
      return false;
    }
  });
  //console.log('inserting at ', insertAt);
  return insertAt;
}

function insertAd(slotName, divID, insertAt, contentList) {
  var divIdent = 'div-gpt-ad-in-article-' + divID;
  $('<div id="' + divIdent + '" style="float: left; margin-right: 2em">').insertAfter(contentList[insertAt]);
  googletag.cmd.push(function() {
      googletag.defineSlot(slotName, [[1, 1], [300, 250]], divIdent).addService(googletag.pubads());
  });

  googletag.cmd.push(function() {
    console.log('__ADS display ' + divIdent);
    googletag.display(divIdent);
  });
}


window.$(document).on('expand-article', function (e) {
  console.log('EXPAND CLICK ADVIEW');
  var pgs = $('.storyareawrapper .bigtext > p')
  var totalStoryParagraphs = pgs.length;

  var dynamicAdsArea = pgs.slice(7);
  var adsAreaHeight = 0;
  dynamicAdsArea.each(function(idx) {adsAreaHeight += ($(this).outerHeight())});

  var additionalAds = [
    '/5856/Desktop_InFeed1_Articles_300x250_1',
    '/5856/Desktop_InFeed1_Articles_300x250_2',
    '/5856/Desktop_InFeed1_Articles_300x250_3',
    '/5856/Desktop_InFeed1_Articles_300x250_4',
    '/5856/Desktop_InFeed1_Articles_300x250_5',
  ];

  var adMinimumBlockHeight = 750;
  var firstOffset = dynamicAdsArea.eq(0).offset().top;
  var adsAdded = false;

  if (totalStoryParagraphs > 7) {
    //
    // is there enough room for each ad to get its own zone?
    //
    if (adsAreaHeight > adMinimumBlockHeight * additionalAds.length) {

      //use all ads
      var numZones = additionalAds.length;
      var zoneHeight = adsAreaHeight / numZones;
      console.log('__ADSDBG  ' + numZones + 'additional ads with zone height ', zoneHeight );

      additionalAds.forEach((item, idx) => {
        var insertAt = getInsertionParagraph(dynamicAdsArea, firstOffset + (idx * zoneHeight));
        insertAd(additionalAds[idx], idx, insertAt, dynamicAdsArea);
        adsAdded = true;
      });

    } else {

      var numAds = adsAreaHeight / adMinimumBlockHeight;
      var AdZoneHeight = adsAreaHeight / numAds;
      additionalAds.slice(0, Math.floor(numAds)).forEach((item, idx) => {
        var insertIdx = getInsertionParagraph(dynamicAdsArea, firstOffset + (idx * AdZoneHeight));
        insertAd(additionalAds[idx], idx, insertIdx, dynamicAdsArea);
        adsAdded = true;
      });
    }
  }

  // refresh if any ads were added
  if (adsAdded) {
    googletag.cmd.push(function() {
      console.log('__ADS refresh additional article ads');
      googletag.pubads().refresh();
    });
  }
});
