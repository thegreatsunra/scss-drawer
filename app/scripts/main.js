'use strict';

// toggle classes
function changeClasses(targetClassName, changeType, classNamesToChange) {
  var target = document.getElementsByClassName(targetClassName)[0];
  if (target) {
    if (classNamesToChange.indexOf(' ')) {
      // there are multiple class names separated by spaces, so let's split and iterate through them
      var classes = classNamesToChange.split(' ');
      for (var j = classes.length - 1; j >= 0; j--) {
        if (changeType === 'toggle') {
          target.classList.toggle(classes[j]);
        }
        else if (changeType === 'add') {
          target.classList.add(classes[j]);
        }
        else if (changeType === 'remove') {
          target.classList.remove(classes[j]);
        }
      }
    }
    else if (classNamesToChange) {
      // there's just one class name, so just go ahead and apply it
      target.classList.toggle(classNamesToChange);
      if (changeType === 'toggle') {
        target.classList.toggle(classNamesToChange);
      }
      else if (changeType === 'add') {
        target.classList.add(classNamesToChange);
      }
      else if (changeType === 'remove') {
        target.classList.remove(classNamesToChange);
      }
    }
  }
}

// toggle drawer-specific classes when drawer toggle is fired
function toggleDrawer(event) {
  event.preventDefault();
  changeClasses('js-c-drawer', 'toggle', 'c-drawer--hidden-until@md c-drawer--narrow@md c-drawer--wide@lg c-drawer--narrow@lg');
  changeClasses('js-c-overlay', 'toggle', 'c-overlay--hidden');
  changeClasses('js-c-header', 'toggle', 'c-header--narrow@lg c-header--wide@lg');
  changeClasses('js-c-view', 'toggle', 'c-view--narrow@lg c-view--wide@lg');
}

// do something when the window width transitions between the desktop breakpoint
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // the window just crossed into the desktop breakpoint
    // the drawer is collapsed; expand it as the window gets wider
    changeClasses('js-c-header', 'remove', 'c-header--wide@lg');
    changeClasses('js-c-header', 'add', 'c-header--narrow@lg');
    changeClasses('js-c-view', 'remove', 'c-view--wide@lg');
    changeClasses('js-c-view', 'add', 'c-view--narrow@lg');
    changeClasses('js-c-drawer', 'add', 'c-drawer--wide@lg');
    changeClasses('js-c-drawer', 'remove', 'c-drawer--narrow@lg');
    console.log('the drawer was collapsed and is now expanded');
  } else {
    // the window just crossed into the tablet breakpoint
    if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--wide@lg')[0]) {
      // the drawer is expanded; collapse it as the window gets narrower
      changeClasses('js-c-header', 'add', 'c-header--wide@lg');
      changeClasses('js-c-header', 'remove', 'c-header--narrow@lg');
      changeClasses('js-c-view', 'add', 'c-view--wide@lg');
      changeClasses('js-c-view', 'remove', 'c-view--narrow@lg');
      changeClasses('js-c-drawer', 'remove', 'c-drawer--wide@lg');
      changeClasses('js-c-drawer', 'add', 'c-drawer--narrow@lg c-drawer--narrow@md c-drawer--hidden-until@md');
      changeClasses('js-c-overlay', 'add', 'c-overlay--hidden');
      console.log('the drawer was expanded and is now collapsed');
    }
    else if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--narrow@lg')[0]) {
      // the drawer is collapsed; keep it collapsed as the window gets narrower
      changeClasses('js-c-header', 'add', 'c-header--wide@lg');
      changeClasses('js-c-header', 'remove', 'c-header--narrow@lg');
      changeClasses('js-c-view', 'add', 'c-view--wide@lg');
      changeClasses('js-c-view', 'remove', 'c-view--narrow@lg');
      changeClasses('js-c-drawer', 'remove', 'c-drawer--wide@lg');
      changeClasses('js-c-drawer', 'add', 'c-drawer--narrow@lg c-drawer--narrow@md c-drawer--hidden-until@md');
      changeClasses('js-c-overlay', 'add', 'c-overlay--hidden');
      console.log('the drawer was collapsed and is still collapsed');
    }
  }
}

// add event listener for desktop breakpoint
var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
lgBreakpoint.addListener(handleMediaQuery);

// add event listener to drawer toggle controls
var drawerControls = document.getElementsByClassName('js-c-toggle__link');
if (drawerControls) {
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer);
  }
}
