"use strict";
var elem = document.querySelector("div[data-entries]");
if (elem) {
  var entries = document.querySelector("div[data-entries]").dataset.entries
  var loadMore = document.querySelector(".btn.load")
  var entriesArr = entries ? entries.split(",").slice() : null
  loadMore.addEventListener("click", fetchEntry, false);
}

var infiniteReports = document.querySelector(".infinite-reports");
var infContent = document.querySelector(".inf-content")

var toggle = true;
var count = 0
var entriesCombined = ''

if (entries && elem) {
  let dataEntriesDiv = document.querySelector("div[data-entries]")
  dataEntriesDiv.remove()
}

function checkDate() {
  var now = moment();
  $('.last_edit_js').each(function(i, e) {
      var time = moment($(e).attr('datetime'));
      if(now.diff(time, 'days') <= 1) {
        $(e).html('updated ' + time.from(now));
      }else{
        $(e).html('updated ' + time.from(now));
    		// $( e ).css( "display", "none" );
  	}
  });
}

function setupRow() {
  // remove the old
  infiniteReports.classList.remove("infinite-reports")
  // create the new
  const infRow = document.createElement("div")
  infRow.classList.add("infinite-reports")
  // append the new row
  infContent.appendChild(infRow)
  // re-assign 
  infiniteReports = document.querySelector('.infinite-reports')
}

function displayEntries(data, thumbnailsToLoad) {
  entriesCombined += data;
  count++;
  // console.log(count)
  if (count === thumbnailsToLoad) {
    infiniteReports.innerHTML += entriesCombined;

    entriesCombined = "";
    count = 0;
    setupRow()
  }

}

function showProgr() {
  if (entries) {
    loadMore.style.display = 'inline-block';
  } 
  // else {
  //   loadMore.style.display = 'none'
  // }
}

function progressbar(i) {
  if (i === 0) {
    loadMore.innerText = "Loading...";
  }
}

function removeProgress(i, thumbnailsToLoad) {
  if (i == thumbnailsToLoad) {
    setTimeout(function() {
      loadMore.innerText = "Load more";
      scrollTo(loadMore);
      toggle = true;
    }, 500);
  }
}

function getEntry() {
  var idArr = entriesArr
  var id = idArr.shift()
  // console.log(id)

  return id
}

function removeFaded() {
  var fadedElem = document.querySelectorAll(".fadeIn");
  fadedElem.forEach(function(elem) {
    elem.classList.remove("fadeIn");
  });
}

function doneLoading(i, thumbnailsToLoad) {
  // hideProgr();
  observer.observe();
  removeProgress(i, thumbnailsToLoad)
  checkDate
  removeFaded()
}

function fetchEntry(event) {
  event.preventDefault();
  var thumbnailsToLoad = 4;
  var pathArray = window.location.pathname.split('/');
  var thinkOutside = pathArray.includes("outside")
  if (thinkOutside) {
   thumbnailsToLoad = 3; 
  }
  
  if (toggle) {
    toggle = false;

    for (var i = 0; i < thumbnailsToLoad; i++) {
      var id = getEntry();
      if (thinkOutside) {
        var url = "/ajax/thumbnail_entry_ajax_outside/" + id;
      } else {
        var url = "/ajax/thumbnail_entry_ajax/" + id;
      }
      fetch(url)
        .then(progressbar(i))
        .then((res) => { return res.text(); })
        .then((data) => {
           if(entriesArr.length >= 3) {
            displayEntries(data, thumbnailsToLoad)
          } else {
            infiniteReports.innerHTML += data;
          }
        })
        .then( () => { if (i == thumbnailsToLoad) { doneLoading(i, thumbnailsToLoad) } })
        .catch(function(err) {
          return console.error("Error: ", err);
        });
    }
    infiniteReports.innerHTML +=
      '<div class="clearfix hidden-xs-block"></div>';
  }
}

document.addEventListener('load', showProgr() )