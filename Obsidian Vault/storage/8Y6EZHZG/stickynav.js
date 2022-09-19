
document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("block-menu-menu-anniversary-menu");

  // Get the offset position of the navbar
  var sticky = 0;
  if ( navbar !== null ) {
    sticky = navbar.offsetTop;
  }

  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if ( navbar === null ) return;
/**
 * Uncomment if debugging is needed 
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
**/
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  /*Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon*/

  function myFunctionForResponsive() {
    if ( navbar !== null ) {
      navbar.classList.toggle('responsive');
    }
  }
})
