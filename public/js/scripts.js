'use strict';

function arrayExists(array) {
  if ((typeof array !== 'undefined') && (array.length > 0)) {
    return true;
  }
  else {
    return false;
  }
}

function getItemByPropertyName(haystack, propertyName) {
  for (var i in haystack) {
    if (haystack.hasOwnProperty(propertyName)) {
      return haystack[propertyName];
    }
  }
};

function defaultDrawerState() {
  changeClasses('drawer', 'add', 'drawer--moved-out drawer--narrow@md drawer--wide@lg');
  changeClasses('drawer', 'remove', 'drawer--moved-in drawer--narrow@lg');
  changeClasses('drawer__title', 'add', 'drawer__title--hidden@md drawer__title--visible@lg');
  changeClasses('drawer__title', 'remove', 'drawer__title--hidden@lg');
  changeClasses('nav__text', 'remove', 'nav__text--hidden@lg');
  changeClasses('nav__text', 'add', 'nav__text--hidden@md nav__text--visible@lg');
  changeClasses('subnav__link', 'add', 'subnav__link--hidden@md subnav__link--visible@lg');
  changeClasses('subnav__link', 'remove', 'subnav__link--hidden@lg');
  changeClasses('user__name', 'add', 'user__name--hidden@md');
  changeClasses('user__name', 'remove', 'user__name--hidden@lg');
  changeClasses('toggle--drawer', 'add', 'toggle--moved-out');
  changeClasses('toggle--drawer', 'remove', 'toggle--moved-in');
  changeClasses('toggle--header', 'add', 'toggle--moved-in');
  changeClasses('toggle--header', 'remove', 'toggle--moved-out');
  changeClasses('header', 'add', 'header--narrow@lg');
  changeClasses('header', 'remove', 'header--wide@lg');
  changeClasses('content', 'add', 'content--narrow@lg');
  changeClasses('content', 'remove', 'content--wide@lg no-scroll--until@lg');
  changeClasses('overlay', 'add', 'overlay--hidden');
} 

function openDrawerState() {
  changeClasses('drawer', 'add', 'drawer--moved-in drawer--narrow@lg');
  changeClasses('drawer', 'remove', 'drawer--moved-out drawer--narrow@md drawer--wide@lg');
  changeClasses('drawer__title', 'add', '');
  changeClasses('drawer__title', 'remove', 'drawer__title--hidden@md drawer__title--hidden@lg drawer__title--visible@lg');
  changeClasses('nav__text', 'remove', 'nav__text--hidden@md nav__text--hidden@lg');
  changeClasses('nav__text', 'add', 'nav__text--visible@lg');
  changeClasses('subnav__link', 'remove', 'subnav__link--hidden@md subnav__link--hidden@lg');
  changeClasses('subnav__link', 'add', 'subnav__link--visible@lg');
  changeClasses('user__name', 'add', 'user__name--hidden@lg');
  changeClasses('user__name', 'remove', 'user__name--hidden@md');
  changeClasses('toggle--drawer', 'add', 'toggle--moved-in');
  changeClasses('toggle--drawer', 'remove', 'toggle--moved-out');
  changeClasses('toggle--header', 'add', 'toggle--moved-out');
  changeClasses('toggle--header', 'remove', 'toggle--moved-in');
  changeClasses('header', 'add', 'header--wide@lg');
  changeClasses('header', 'remove', 'header--narrow@lg');
  changeClasses('content', 'add', 'content--wide@lg no-scroll--until@lg');
  changeClasses('content', 'remove', 'content--narrow@lg');
  changeClasses('overlay', 'remove', 'overlay--hidden');
}

function narrowDrawerStateAtLarge() {
  changeClasses('drawer', 'add', 'drawer--moved-out drawer--narrow@md drawer--narrow@lg');
  changeClasses('drawer', 'remove', 'drawer--moved-in drawer--wide@lg');
  changeClasses('drawer__title', 'add', 'drawer__title--hidden@md drawer__title--hidden@lg');
  changeClasses('drawer__title', 'remove', 'drawer__title--visible@lg');
  changeClasses('nav__text', 'add', 'nav__text--hidden@md nav__text--hidden@lg');
  changeClasses('nav__text', 'remove', 'nav__text--visible@lg');
  changeClasses('subnav__link', 'add', 'subnav__link--hidden@md subnav__link--hidden@lg');
  changeClasses('subnav__link', 'remove', 'subnav__link--visible@lg');
  changeClasses('user__name', 'add', 'user__name--hidden@md user__name--hidden@lg');
  changeClasses('toggle--drawer', 'add', 'toggle--moved-in');
  changeClasses('toggle--drawer', 'remove', 'toggle--moved-out');
  changeClasses('toggle--header', 'add', 'toggle--moved-out');
  changeClasses('toggle--header', 'remove', 'toggle--moved-in');
  changeClasses('header', 'add', 'header--wide@lg');
  changeClasses('header', 'remove', 'header--narrow@lg');
  changeClasses('content', 'add', 'content--wide@lg');
  changeClasses('content', 'remove', 'content--narrow@lg no-scroll--until@lg');
  changeClasses('overlay', 'add', 'overlay--hidden');
}

function transitionNarrowToWide() {
  changeClasses('drawer__title', 'add', 'drawer__title--animate-in');
  changeClasses('drawer__title', 'remove', 'drawer__title--animate-out');
  changeClasses('user__name', 'add', 'user__name--animate-in');
  changeClasses('user__name', 'remove', 'user__name--animate-out');
  changeClasses('drawer', 'add', 'drawer--animate-wide');
  changeClasses('drawer', 'remove', 'drawer--animate-narrow');
  changeClasses('subnav__link', 'add', 'subnav__link--animate-in');
  changeClasses('subnav__link', 'remove', 'subnav__link--animate-out');
  changeClasses('nav__text', 'add', 'nav__text--animate-in');
  changeClasses('nav__text', 'remove', 'nav__text--animate-out');
}
function transitionWideToNarrow() {
  changeClasses('drawer__title', 'add', 'drawer__title--animate-out');
  changeClasses('drawer__title', 'remove', 'drawer__title--animate-in');
  changeClasses('user__name', 'add', 'user__name--animate-out');
  changeClasses('user__name', 'remove', 'user__name--animate-in');
  changeClasses('drawer', 'add', 'drawer--animate-narrow');
  changeClasses('drawer', 'remove', 'drawer--animate-wide');
  changeClasses('subnav__link', 'add', 'subnav__link--animate-out');
  changeClasses('subnav__link', 'remove', 'subnav__link--animate-in');
  changeClasses('nav__text', 'add', 'nav__text--animate-out');
  changeClasses('nav__text', 'remove', 'nav__text--animate-in');
}

function transitionNarrowToWideAtLarge() {
  transitionNarrowToWide();
  changeClasses('header', 'add', 'header--animate-narrow');
  changeClasses('header', 'remove', 'header--animate-wide');
  changeClasses('content', 'add', 'content--animate-narrow');
  changeClasses('content', 'remove', 'content--animate-wide');
}

function transitionWideToNarrowAtLarge() {
  transitionWideToNarrow();
  changeClasses('header', 'add', 'header--animate-wide');
  changeClasses('header', 'remove', 'header--animate-narrow');
  changeClasses('content', 'add', 'content--animate-wide');
  changeClasses('content', 'remove', 'content--animate-narrow');
}

function transitionNarrowToOpenAtMedium() {
  transitionNarrowToWide();
}

function transitionOpenToNarrowAtMedium() {
  transitionWideToNarrow();
}

function transitionOutToIn() {
  changeClasses('toggle--drawer', 'add', 'toggle--animate-in');
  changeClasses('toggle--drawer', 'remove', 'toggle--animate-out');
  changeClasses('toggle--header', 'add', 'toggle--animate-out');
  changeClasses('toggle--header', 'remove', 'toggle--animate-in');
  changeClasses('drawer', 'add', 'drawer--animate-in');
  changeClasses('drawer', 'remove', 'drawer--animate-out');
}

function transitionInToOut() {
  changeClasses('toggle--drawer', 'add', 'toggle--animate-out');
  changeClasses('toggle--drawer', 'remove', 'toggle--animate-in');
  changeClasses('toggle--header', 'add', 'toggle--animate-in');
  changeClasses('toggle--header', 'remove', 'toggle--animate-out');
  changeClasses('drawer', 'add', 'drawer--animate-out');
  changeClasses('drawer', 'remove', 'drawer--animate-in');
}

function transitionSmallToMedium() {
  transitionOutToIn();
  changeClasses('header', 'add', 'header--animate-full-to-wide');
  changeClasses('header', 'remove', 'header--animate-wide header--animate-narrow');
  changeClasses('content', 'add', 'content--animate-full-to-wide');
  changeClasses('content', 'remove', 'content--animate-wide content--animate-narrow');  
}

// e.g. changeClasses('nav', 'add', 'hidden--until-@md')
function changeClasses(targetClassName, changeType, classNamesToChange) {
  var targetElements = document.getElementsByClassName(targetClassName);
  if (arrayExists(targetElements) && (classNamesToChange)) {
  var classNamesToChangeArray = classNamesToChange.split(' ');
    for (var i = targetElements.length - 1; i >= 0; i--) {
      for (var j = classNamesToChangeArray.length -1; j >= 0; j--) {
        if (changeType === 'add') {
          targetElements[i].classList.add(classNamesToChangeArray[j]);
        }
        else if (changeType === 'remove') {
          targetElements[i].classList.remove(classNamesToChangeArray[j]);
        }
        else if (changeType === 'toggle') {
          targetElements[i].classList.toggle(classNamesToChangeArray[j]);
        }
      }
    }
  }
}

function bindControl(controlName) {
  var controlElements = document.getElementsByClassName(controlName);
  if (arrayExists(controlElements)) {
    for (var i = controlElements.length - 1; i >= 0; i--) {
      controlElements[i].addEventListener('click', function() {
        var firstDrawer = document.getElementsByClassName('drawer')[0];
        var drawerIsNarrowAtLarge = firstDrawer.classList.contains('drawer--narrow@lg');
        var drawerIsNarrowAtMedium = firstDrawer.classList.contains('drawer--narrow@md');
        var drawerIsHiddenAtMobile = firstDrawer.classList.contains('drawer--moved-out');
        if (window.matchMedia('(min-width: 1024px)').matches) {
          console.log('at large breakpoint');
          // we're at the lg breakpoint
          // see if the drawer is narrow
          if (drawerIsNarrowAtLarge) {
            console.log('drawer was narrow -> we made it wide');
            // we're at the lg breakpoint and the drawer is narrow
            // make the drawer wide at the lg breakpoint, which is the default state
            transitionNarrowToWideAtLarge();
            defaultDrawerState();
          }
          else {
            console.log('drawer was wide -> we made it narrow');
            // we're at the lg breakpoint and the drawer is wide
            // make the drawer narrow at the lg breakpoint, which is a unique state
            transitionWideToNarrowAtLarge();
            narrowDrawerStateAtLarge();
          }
        } 
        else if (window.matchMedia('(min-width: 768px)').matches) {
          console.log('at medium breakpoint');
          if (drawerIsNarrowAtMedium) {
            console.log('drawer was narrow -> we made it open');
            openDrawerState();
            transitionNarrowToOpenAtMedium();
          } else {
            console.log('drawer was open -> we made it narrow');
            defaultDrawerState();
            transitionOpenToNarrowAtMedium();
          }
        }
        else if (drawerIsHiddenAtMobile) {
          console.log('below medium breakpoint');
          console.log('drawer was off-screen -> we moved it on-screen');
          openDrawerState();
          transitionOutToIn();
        } else {
          console.log('below medium breakpoint');
          console.log('drawer was (most likely) on-screen -> we moved it off-screen');
          defaultDrawerState();
          transitionInToOut();
        }
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  bindControl('toggle');
});

function handleLgBreakpoint(breakpoint) {
  var firstDrawer = document.getElementsByClassName('drawer')[0];
  var drawerIsNarrowAtLarge = firstDrawer.classList.contains('drawer--narrow@lg');

  if ((breakpoint.matches) && (drawerIsNarrowAtLarge)) {
    defaultDrawerState();
  }
  else if (breakpoint.matches) {
    narrowDrawerStateAtLarge();
  }
  else {
    defaultDrawerState();
  }
}

function handleMdBreakpoint(breakpoint) {
  var firstDrawer = document.getElementsByClassName('drawer')[0];
  var drawerIsNarrowAtMedium = firstDrawer.classList.contains('drawer--narrow@md');

  if ((breakpoint.matches) && (drawerIsNarrowAtMedium)) {
    console.log('transitioned to medium state and it is narrow');
    defaultDrawerState();
    transitionSmallToMedium();
  }
}

var lgBreakpoint = window.matchMedia("(min-width: 1024px)");
var mdBreakpoint = window.matchMedia("(min-width: 768px)");
document.addEventListener('DOMContentLoaded', function(event) {
  lgBreakpoint.addListener(handleLgBreakpoint);
  mdBreakpoint.addListener(handleMdBreakpoint);
});
