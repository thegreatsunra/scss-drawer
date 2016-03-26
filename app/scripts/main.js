'use strict';

// simple function for toggling classes
function toggleClass(targetName, className) {
  var target = document.querySelector(targetName);
  if (target) {
    target.classList.toggle(className);
  }
}

// toggle drawer-specific classes when drawer toggle is fired
function toggleDrawer(event) {
  event.preventDefault();
  toggleClass('.js-c-drawer', 'c-drawer--hidden');
  toggleClass('.js-c-overlay', 'c-overlay--hidden');
  toggleClass('.js-c-drawer', 'c-drawer--narrow@md');
}

// add event listener to drawer toggle controls
var drawerControls = document.querySelectorAll('.js-c-toggle__link');
if (drawerControls) {
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer)
  }
}
