var els = document.querySelectorAll(".js-ob-ShareBar-toggle")
for (var i = 0; i < els.length; i++) {
  els[i].onclick = toggleBars
}

function follow(link) {
  var frameWidth = 600
  var frameHeight = 300

  link.addEventListener("click", function(event) {
    event.preventDefault()

    var frameTop = (screen.height - frameHeight) / 2
    var frameLeft = (screen.width - frameWidth) / 2
    var frameOptions =
      "width=" +
      frameWidth +
      ",height=" +
      frameHeight +
      ",top=" +
      frameTop +
      ",left=" +
      frameLeft

    window.open(link.getAttribute("href"), "follow", frameOptions)
  })
}

follow(document.querySelector(".js-ob-ShareBar-follow"))

function toggleBars() {
  var shareBar = document.querySelector(".js-ob-ShareBar")
  var shareBarMinified = document.querySelector(".js-ob-ShareBar--minified")
  if (shareBar.style.display != "none") {
    shareBar.style.display = "none"
    shareBarMinified.style.display = "block"
  } else {
    shareBar.style.display = "block"
    shareBarMinified.style.display = "none"
  }
}

document.body.className += " withsharebar"

function socialShare(el, title) {
  el.onclick = function(e) {
    e.preventDefault()
    var href = el
      .getAttribute("data-href")
      .replace("{referer}", encodeURIComponent(window.location.href))
      .replace("{title}", title)

    window.open(
      href,
      "intent",
      "height=400,width=500,location=no,menubar=no,toolbar=no"
    )
  }
}

var sharePinterest = document.querySelector(".js-ob-ShareBar-share--pinterest")

sharePinterest.onclick = function(e) {
  e.preventDefault()
  ;(function(d) {
    var e = d.createElement("script")
    e.setAttribute("type", "text/javascript")
    e.setAttribute("charset", "UTF-8")
    e.setAttribute(
      "src",
      "//assets.pinterest.com/js/pinmarklet.js?r=" + Math.random() * 99999999
    )
    d.body.appendChild(e)
  })(document)
}
