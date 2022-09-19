"use strict";
var body = document.querySelector('body');
var navbarBtn = document.querySelector('.navbar-toggle');
var navbarCloseBtn = document.querySelector('.navmenu-brand');
var navbarRight = document.querySelector('.navmenu-fixed-right');
var dropdownToggler = document.querySelectorAll('.navmenu-fixed-right .dropdown-toggle');
var toggled = false;

function toggleActive() {
  navbarRight.classList.toggle('active');
  lockBackground(body);
}

function lockBackground() {
  if (!toggled) {
    body.style.overflow = 'hidden';
    toggled = true;
  } else {
    body.style.overflow = 'auto';
    toggled = false;
  }
}

function resetDropdownArrows() {
  dropdownToggler.forEach(function (item) {
    var ariaExpanded = item.parentElement.classList.contains('open');
    var itemIcon = item.firstElementChild;

    if (!ariaExpanded) {
      itemIcon.classList.remove('fa-angle-up');
      itemIcon.classList.add('fa-angle-down');
    }
  });
}

function toggleArrow() {
  var icon = this.firstElementChild;
  icon.classList.toggle('fa-angle-up');
  icon.classList.toggle('fa-angle-down');
}

$('.dropdown').on('shown.bs.dropdown', function () {
  resetDropdownArrows();
})

navbarBtn.addEventListener('click', toggleActive, false);
navbarCloseBtn.addEventListener('click', toggleActive, false);

dropdownToggler.forEach(function (item) {
  return item.addEventListener('click', toggleArrow);
});
