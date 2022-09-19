/* 
  Controls the navigation - when something is in view or isn't
*/

var timerScroll = false
window.addEventListener(
  'scroll',
  function () {
    if (timerScroll) {
      clearTimeout(timerScroll)
    }
    timerScroll = setTimeout(function () {
      updateNav()
    }, 100)
  },
  false
)

var timerResize = false
window.addEventListener(
  'resize',
  function () {
    if (timerResize) {
      clearTimeout(timerResize)
    }
    timerResize = setTimeout(function () {
      updateNav()
    }, 100)
  },
  false
)

function updateNav() {
  document.querySelectorAll('.js-section').forEach(function (el) {
    var bodyRect = document.body.getBoundingClientRect()
    var elRect = el.getBoundingClientRect()
    var offsetTop = elRect.top - bodyRect.top
    var offsetBottom = elRect.top - bodyRect.top + elRect.height
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop

    // Nav item
    var current = document.querySelector('#nav-survey a[href="#' + el.id + '"]')

    if (current) {
      // Enters view
      if (offsetTop <= scrollPosition + 100) {
        current.classList.add('is-selected')

        if (typeof ga === 'function') {
          ga('send', 'event', 'dev-survey-2020', 'navigation', 'scrolled-to-section', el.id)
        }
      }

      // Leaves view
      if (offsetBottom <= scrollPosition || offsetTop >= scrollPosition) {
        current.classList.remove('is-selected')
      }
    }
  })
}

function throttle(fn, wait) {
  var time = Date.now()
  return function () {
    if (time + wait - Date.now() < 0) {
      setTimeout(fn, 200)
      time = Date.now()
    }
  }
}

/*
  Hide nav when click sub-menus (for mobile)
*/

document.querySelectorAll('#nav-survey ul ul a').forEach(function (el) {
  el.addEventListener('click', function (e) {
    document.querySelector('#nav-survey').classList.remove('js-active')
  })
})


/* 
  Class toggle function
*/

document.querySelectorAll('.js-toggle-class').forEach(function (el) {
  var toggleClass = el.getAttribute('data-class')
  var targetEl = el.getAttribute('data-target')

  el.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(targetEl).classList.toggle(toggleClass)
    return false
  })
})

/* 
  Graph tabs
*/

document.querySelectorAll('.ds-chart-nav a').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault()

    var chartId = el.getAttribute('href')

    // Use pushState to prevent a jump - if supported
    if (history.pushState) {
      window.history.pushState(null, null, chartId)
    } else {
      window.location.hash = '#' + el.getAttribute('data-group')
    }

    showChartByHash(chartId)

    return false
  })
})

function showChartByHash(chart) {
  var urlHash = window.location.hash || chart || ''
  urlHash = '#' + urlHash.substring(1)


  if (urlHash.length > 1) {
    var chartEl = document.querySelector(urlHash)
    var chartGroup = chartEl.getAttribute('data-group')
    var chartSiblings = document.querySelectorAll('#' + chartGroup + ' .chart')
    var chartTab = document.querySelector('.s-navigation--item[href="' + urlHash + '"]')
    var chartTabSiblings = document.querySelectorAll('#' + chartGroup + ' .s-navigation--item')
  }

  if (chartEl && chartGroup && chartEl.classList.contains('chart') && !chartEl.classList.contains('js-active')) {
    // Hide siblings
    chartSiblings.forEach(function (el) {
      el.classList.remove('js-active')
    })

    // Show this one
    chartEl.classList.add('js-active')

    // Tab siblings 
    chartTabSiblings.forEach(function (el) {
      el.classList.remove('is-selected')
    })

    // Change tab
    chartTab.classList.add('is-selected')

    // Scroll intro view
    if (history.pushState) {
      window.history.pushState(null, null, urlHash)
    } else {
      window.location.hash = urlHash
    }
  }
}

window.onhashchange = showChartByHash

showChartByHash()

/*
  Animate charts when in view
*/

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        enterViewHandler(entry)
      }
    })
  }, {
    rootMargin: '0px 0px -20% 0px',
    threshold: 0.2
  })

  document.querySelectorAll('.chart').forEach(section => {
    observer.observe(section)
  })

  document.querySelectorAll('.chart.js-active .bar').forEach(function (el) {
    el.style.width = 0
  })

  function enterViewHandler(entry) {
    // Transition each bar

    entry.target.querySelectorAll('.bar').forEach(function (el, i) {
      setTimeout(function () {
        el.style.width = el.getAttribute('data-percentage') + '%'
      }, 30 * i);
    })
  }
}