'use strict';

// toggle classes
function changeClasses(targetClassName, classNamesToChange, changeType) {
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
  changeClasses('js-c-drawer', 'c-drawer--hidden c-drawer--narrow@md c-drawer--wide@lg c-drawer--narrow@lg', 'toggle');
  changeClasses('js-c-overlay', 'c-overlay--hidden', 'toggle');
  changeClasses('js-c-header', 'c-header--narrow@lg c-header--wide@lg', 'toggle');
  changeClasses('js-c-view', 'c-view--narrow@lg c-view--wide@lg', 'toggle');
}

// add event listener to drawer toggle controls
var drawerControls = document.getElementsByClassName('js-c-toggle__link');
if (drawerControls) {
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer);
  }
}

// do something when the window width transitions between the desktop breakpoint
function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // the window just crossed into the desktop breakpoint
    if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--narrow@md')[0]) {
      // the drawer is collapsed; expand it as the window gets wider
      changeClasses('js-c-drawer', 'c-drawer--wide@lg', 'add');
      changeClasses('js-c-drawer', 'c-drawer--narrow@lg', 'remove');
      console.log('the drawer was collapsed and is now expanded');
    } else if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--wide@md')[0]) {
      // the drawer is expanded; keep it expanded as the window gets wider
      changeClasses('js-c-drawer', 'c-drawer--wide@lg', 'add');
      changeClasses('js-c-drawer', 'c-drawer--narrow@lg c-drawer--narrow@md', 'remove');
      console.log('the drawer was expanded and is still expanded');
    }
  } else {
    // the window just crossed into the tablet breakpoint
    if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--wide@lg')[0]) {
      // the drawer is expanded; collapse it as the window gets narrower
      changeClasses('js-c-drawer', 'c-drawer--hidden', 'add');
      changeClasses('js-c-drawer', 'c-drawer--narrow@md', 'add');
      console.log('the drawer was expanded and is now collapsed');
    }
    else if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--narrow@lg')[0]) {
      // the drawer is collapsed; keep it collapsed as the window gets narrower
      console.log('the drawer was collapsed and is still collapsed');
    }
  }
}

// add event listener for desktop breakpoint
var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
lgBreakpoint.addListener(handleMediaQuery);
