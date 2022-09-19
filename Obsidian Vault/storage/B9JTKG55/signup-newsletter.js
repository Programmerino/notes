$(document).ready(function(){
  signUpCookie()
})

function signUpCookie() {
  var currentStatus = localStorage.getItem('closeSignUp')
  var $closeSignUp = $("#closeSignUp")
  var $newsletter = $('aside .sign-up-newsletter')

  $closeSignUp.on('click', function(e) {
    localStorage.setItem("closeSignUp", "yes")
    $newsletter.css({display: 'none'})
  })

  if (currentStatus) {
    $newsletter.css({display: 'none'})
  } else {
    $newsletter.css({display: 'block'})
  }
}
