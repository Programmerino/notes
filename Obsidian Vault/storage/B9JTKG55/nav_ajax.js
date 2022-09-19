let mainDropdowns = document.querySelectorAll(".main.dropdown")
let navType
let desktop = true

/**
 * @description a function that detects whether localStorage is both supported and available
 * You can test for sessionStorage instead by calling storageAvailable('sessionStorage').
 * @param {String} type type of storage to check, local or session.
 * @returns {Boolean} true or false
 */
function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

/* function that checks if mobile */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  desktop = false
 }

/**
 * @description get the type of nav needed from html data-attr. and pass on for fetch handleType function.
 */
function getType() {
  this.classList.contains('open') ? navType = false : navType = this.dataset.navtype; 
  navType ? handleType(navType) : null
}

/**
 * @description fetch function that uses the date-navtype from clicked element to fetch the correct data from the templates/ajax.group 
 * @todo add loading svg
 * @param type {String} 
 */
function handleType(type) {
  let hostname = window.location.hostname
  let nav = "nav_top_" + type
  let url = `https://${hostname}/ajax/${nav}`
  
  fetch(url)
    .then( data => data.text() )
    .then( html => displayNavContent(type, html) )
    .catch(err => console.error(err))
}


function displayNavContent(type, html) {
  setSessionStorage(type, html)
  let row = document.querySelector(`.row.${type}`)
  row.innerHTML = html
  
  // activate bootstrap nav
  $(".dropdown-large .nav-pills").on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() {
    $(this).tab('show'); 
  });
  // activate lozad - lazy loading of images
  initLazyLoad() 

  // active last updated module
  initUpdatedtime()
}

function initLazyLoad() {
  observer.observe()
}

function initUpdatedtime() {
  var now = moment();
  $('.last_edit_js').each(function(i, e) {
      var time = moment($(e).attr('datetime'));
      if(now.diff(time, 'days') <= 1) {
        $(e).html('updated ' + time.from(now));
      } else {
        $(e).html('updated ' + time.from(now));
  	}
  });
}

/**
 * @description set session storage 
 * @param {*} type
 * @param {*} html
 */
function setSessionStorage(type, html) {
  sessionStorage.setItem(type, html);
}

function callNavTypes() {
  if (desktop) {
    handleType("themes")
    handleType("markets")
    handleType("regions")
  }
}

/**
 * @description checks if session storage is there else fetch data
 *
 */
function isSession() {
  let themesNav = sessionStorage.getItem("themes")
  let marketsNav = sessionStorage.getItem("markets")
  let regionsNav = sessionStorage.getItem("regions")

  if (themesNav && marketsNav && regionsNav) {
    displayNavContent("themes", themesNav)
    displayNavContent("markets", marketsNav)
    displayNavContent("regions", regionsNav)
    sessionBreaker()
  } else {
    callNavTypes()
    setTime()
  }
}

/**
 * @description force session storage removal after 15 min + 
 * @todo fetch new version rightaway after removal.
 *
 */
function sessionBreaker() {
  let expire = sessionStorage.getItem("expires")
  if (expire) {
    let now = moment()
    if (moment(now).isAfter(expire)) {
      sessionStorage.clear()
    } 
  }
}

function setTime() {
  let expire = moment().add(2, "minutes")
  sessionStorage.setItem("expires", expire)
  return expire
}

// check if localstorage is available if not always fetch data
// todo: add cookie checker for publishers 
// if (storageAvailable('sessionStorage')) { 
//   isSession()
// }
// else {
//   callNavTypes()
// }

storageAvailable("sessionStorage") ? isSession() : callNavTypes()

// if service workers is going to be used. 
// Make sure sw are supported
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw_cache.js')
//       .then(reg => console.log('Service Worker: Registered (Pages)'))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   });
// }