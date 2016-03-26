'use strict';

// simple function for toggling classes
function toggleClass(targetName, classNames) {
  var target = document.getElementsByClassName(targetName)[0];
  if (target) {
    if (classNames.indexOf(' ')) {
      // there are multiple class names separated by spaces, so let's split and iterate through them
      var classes = classNames.split(' ');
      for (var j = classes.length - 1; j >= 0; j--) {
        target.classList.toggle(classes[j]);
      }
    } else {
      // there's just one class name, so apply it
      target.classList.toggle(classNames);
    }
  }
}

// toggle drawer-specific classes when drawer toggle is fired
function toggleDrawer(event) {
  event.preventDefault();
  toggleClass('js-c-drawer', 'c-drawer--hidden c-drawer--narrow@md c-drawer--wide@lg c-drawer--narrow@lg');
  toggleClass('js-c-overlay', 'c-overlay--hidden');
  toggleClass('js-c-header', 'c-header--narrow@lg c-header--wide@lg');
  toggleClass('js-c-view', 'c-view--narrow@lg c-view--wide@lg');
}

// add event listener to drawer toggle controls
var drawerControls = document.getElementsByClassName('js-c-toggle__link');
if (drawerControls) {
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer);
  }
}
