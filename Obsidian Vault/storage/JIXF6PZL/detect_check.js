var mistyle_status= false;
var meta_mistyle_ImgTag = document.querySelector("meta[property='og:image']").getAttribute('content');
var xhrCrux = new XMLHttpRequest();
xhrCrux.open('GET', "https://www.stylecrush.io/admin/ocApi/detectCheckString.lv?imgUrl=" + encodeURI(meta_mistyle_ImgTag), true);
xhrCrux.timeout = 200;
xhrCrux.onreadystatechange = mistyleStatusFn;
xhrCrux.send();
function mistyleStatusFn() {
  try {

    if (xhrCrux.readyState === xhrCrux.DONE) {
      if (xhrCrux.status === 200) {
        console.log(xhrCrux.responseText);
        mistyle_status = xhrCrux.responseText == "true" ? true : false;
        console.log("meta_mistyle_ImgTag=>>>" + meta_mistyle_ImgTag);
      }
    }
  }
  catch( e ) {

  }
}