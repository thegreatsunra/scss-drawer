'use strict';

var statesObject = {
  'defaultDrawerState' : {
    'drawer' : {
      'add' : 'drawer--moved-out drawer--narrow@md drawer--wide@lg js-drawer--default',
      'remove' : 'drawer--moved-in drawer--narrow@lg js-drawer--open js-drawer--narrow@lg'
    },
    'drawer__title' : {
      'add' : 'drawer__title--hidden@md drawer__title--visible@lg',
      'remove' : 'drawer__title--hidden@lg'
    },
    'nav__text' : {
      'remove' : 'nav__text--hidden@lg',
      'add' : 'nav__text--hidden@md nav__text--visible@lg'
    },
    'subnav__link' : {
      'add' : 'subnav__link--hidden@md subnav__link--visible@lg',
      'remove' : 'subnav__link--hidden@lg'
    },
    'user__name' : {
      'add' : 'user__name--hidden@md',
      'remove' : 'user__name--hidden@lg'
    },
    'toggle--drawer' : {
       'add' : 'toggle--moved-out',
       'remove' : 'toggle--moved-in'
    },
    'toggle--header' : {
       'add' : 'toggle--moved-in',
       'remove' : 'toggle--moved-out'
    },
    'header' : {
      'add' : 'header--narrow@lg',
      'remove' : 'header--wide@lg'
    },
    'content' : {
      'add' : 'content--narrow@lg',
      'remove' : 'content--wide@lg no-scroll--until@lg'
    },
    'overlay' : {
      'add' : 'overlay--hidden'
    }
  },
  'openDrawerState' : {
    'drawer' : {
      'add' : 'drawer--moved-in drawer--narrow@lg js-drawer--open',
      'remove' : 'drawer--moved-out drawer--narrow@md drawer--wide@lg js-drawer--default js-drawer--narrow@lg'
    },
    'drawer__title' : {
      'remove' : 'drawer__title--hidden@md drawer__title--hidden@lg drawer__title--visible@lg'
    },
    'nav__text' : {
      'remove' : 'nav__text--hidden@md nav__text--hidden@lg',
      'add' : 'nav__text--visible@lg',
    },
    'subnav__link' : {
      'remove' : 'subnav__link--hidden@md subnav__link--hidden@lg',
      'add' : 'subnav__link--visible@lg'
    },
    'user__name' : {
      'remove' : 'user__name--hidden@md',
      'add' : 'user__name--hidden@lg'
    },
    'toggle--drawer' : {
      'remove' : 'toggle--moved-out',
      'add' : 'toggle--moved-in'
    },
    'toggle--header' : {
      'remove' : 'toggle--moved-in',
      'add' : 'toggle--moved-out'
    },
    'header' : {
      'remove' : 'header--narrow@lg',
      'add' : 'header--wide@lg'
    },
    'content' : {
      'remove' : 'content--narrow@lg',
      'add' : 'content--wide@lg no-scroll--until@lg'
    },
    'overlay' : {
      'remove' : 'overlay--hidden'
    }
  },
  'narrowDrawerStateAtLarge' : {
    'drawer' : {
      'add' : 'drawer--narrow@md drawer--narrow@lg js-drawer--narrow@lg',
      'remove' : 'drawer--wide@lg js-drawer--default js-drawer--open'
    },
    'drawer__title' : {
      'add' : 'drawer__title--hidden@md drawer__title--hidden@lg',
      'remove' : 'drawer__title--visible@lg'
    },
    'nav__text' : {
      'add' : 'nav__text--hidden@md nav__text--hidden@lg',
      'remove' : 'nav__text--visible@lg'
    },
    'subnav__link' : {
      'add' : 'subnav__link--hidden@md subnav__link--hidden@lg',
      'remove' : 'subnav__link--visible@lg'
    },
    'user__name' : {
      'add' : 'user__name--hidden@md user__name--hidden@lg',
    },
    'toggle--drawer' : {
      'add' : 'toggle--moved-in',
      'remove' : 'toggle--moved-out'
    },
    'toggle--header' : {
      'add' : 'toggle--moved-out',
      'remove' : 'toggle--moved-in'
    },
    'header' : {
      'add' : 'header--wide@lg',
      'remove' : 'header--narrow@lg'
    },
    'content' : {
      'add' : 'content--wide@lg',
      'remove' : 'content--narrow@lg no-scroll--until@lg',
    },
    'overlay' : {
      'add' : 'overlay--hidden'
    }
  }
}

var transitionOpenToNarrowAtMedium = {
  'drawer__title' : {
    'add' : 'drawer__title--animate-out',
    'remove' : 'drawer__title--animate-in'
  },
  'user__name' : {
    'add' : 'user__name--animate-out',
    'remove' : 'user__name--animate-in'
  },
  'drawer' : {
    'add' : 'drawer--animate-narrow',
    'remove' : 'drawer--animate-wide'
  },
  'subnav__link' : {
    'add' : 'subnav__link--animate-out',
    'remove' : 'subnav__link--animate-in'
  },
  'nav__text' : {
    'add' : 'nav__text--animate-out',
    'remove' : 'nav__text--animate-in'
  }
}

var transitionWideToNarrowAtLarge = {
  'drawer__title' : {
    'add' : 'drawer__title--animate-out',
    'remove' : 'drawer__title--animate-in'
  },
  'user__name' : {
    'add' : 'user__name--animate-out',
    'remove' : 'user__name--animate-in'
  },
  'drawer' : {
    'add' : 'drawer--animate-narrow',
    'remove' : 'drawer--animate-wide drawer--animate-in drawer--animate-out'
  },
  'subnav__link' : {
    'add' : 'subnav__link--animate-out',
    'remove' : 'subnav__link--animate-in'
  },
  'nav__text' : {
    'add' : 'nav__text--animate-out',
    'remove' : 'nav__text--animate-in'
  },
  'header' : {
    'add' : 'header--animate-wide',
    'remove' : 'header--animate-narrow'
  },
  'content' : {
    'add' : 'content--animate-wide',
    'remove' : 'content--animate-narrow'
  }
}

var transitionNarrowToWide = {
    'drawer__title' : {
      'add' : 'drawer__title--animate-in',
      'remove' : 'drawer__title--animate-out'
    },
    'user__name' : {
      'add' : 'user__name--animate-in',
      'remove' : 'user__name--animate-out'
    },
    'drawer' : {
      'add' : 'drawer--animate-wide',
      'remove' : 'drawer--animate-narrow drawer--animate-in drawer--animate-out'
    },
    'subnav__link' : {
      'add' : 'subnav__link--animate-in',
      'remove' : 'subnav__link--animate-out'
    },
    'nav__text' : {
      'add' : 'nav__text--animate-in',
      'remove' : 'nav__text--animate-out'
    }
}

var transitionNarrowToWideAtLarge = {
  'drawer__title' : {
    'add' : 'drawer__title--animate-in',
    'remove' : 'drawer__title--animate-out'
  },
  'user__name' : {
    'add' : 'user__name--animate-in',
    'remove' : 'user__name--animate-out'
  },
  'drawer' : {
    'add' : 'drawer--animate-wide',
    'remove' : 'drawer--animate-narrow drawer--animate-in drawer--animate-out'
  },
  'subnav__link' : {
    'add' : 'subnav__link--animate-in',
    'remove' : 'subnav__link--animate-out'
  },
  'nav__text' : {
    'add' : 'nav__text--animate-in',
    'remove' : 'nav__text--animate-out'
  },
  'header' : { 
    'add' : 'header--animate-narrow',
    'remove' : 'header--animate-wide'
  },
  'content' : { 
    'add' : 'content--animate-narrow',
    'remove' : 'content--animate-wide'
  }
}

var transitionsObject = {
  'transitionNarrowToOpenAtMedium' : transitionNarrowToWide,
  'transitionOpenToNarrowAtMedium' : transitionOpenToNarrowAtMedium,
  'transitionNarrowToWideAtLarge' : transitionNarrowToWideAtLarge,
  'transitionWideToNarrowAtLarge' : transitionWideToNarrowAtLarge,

  'transitionOutToIn' : {
    'toggle--drawer' : {
      'add' : 'toggle--animate-in',
      'remove' : 'toggle--animate-out'
    },
    'toggle--header' : {
      'add' : 'toggle--animate-out',
      'remove' : 'toggle--animate-in'
    },
    'drawer' : {
      'add' : 'drawer--animate-in',
      'remove' : 'drawer--animate-out drawer--animate-narrow drawer--animate-wide'
    }
  },
  'transitionOutToInAtMedium' : {
    'toggle--drawer' : {
      'add' : 'toggle--animate-in',
      'remove' : 'toggle--animate-out'
    },
    'toggle--header' : {
      'add' : 'toggle--animate-out',
      'remove' : 'toggle--animate-in'
    },
    'drawer' : {
      'add' : 'drawer--animate-in',
      'remove' : 'drawer--animate-out drawer--animate-narrow drawer--animate-wide'
    },
    'header' : {
      'add' : 'header--animate-full-to-wide'
    },
    'content' : {
      'add' : 'content--animate-full-to-wide'
    }
  },
  'transitionInToOut' : {
    'toggle--drawer' : {
      'add' : 'toggle--animate-out',
      'remove' : 'toggle--animate-in'
    },
    'toggle--header' : {
      'add' : 'toggle--animate-in',
      'remove' : 'toggle--animate-out'
    },
    'drawer' : {
      'add' : 'drawer--animate-out',
      'remove' : 'drawer--animate-in drawer--animate-narrow drawer--animate-wide'
    }
  },
  'transitionInToOutAtNarrow' : {
    'toggle--drawer' : {
      'add' : 'toggle--animate-out',
      'remove' : 'toggle--animate-in'
    },
    'toggle--header' : {
      'add' : 'toggle--animate-in',
      'remove' : 'toggle--animate-out'
    },

    'drawer__title' : {
      'add' : 'drawer__title--animate-in',
      'remove' : 'drawer__title--animate-out'
    },
    'user__name' : {
      'add' : 'user__name--animate-in',
      'remove' : 'user__name--animate-out'
    },
    'drawer' : {
      'add' : 'drawer--animate-out-wide',
      'remove' : 'drawer--animate-in'
    },
    'subnav__link' : {
      'add' : 'subnav__link--animate-in',
      'remove' : 'subnav__link--animate-out'
    },
    'nav__text' : {
      'add' : 'nav__text--animate-in',
      'remove' : 'nav__text--animate-out'
    }
    // 'header' : { 
    //   'add' : 'header--animate-narrow',
    //   'remove' : 'header--animate-wide'
    // },
    // 'content' : { 
    //   'add' : 'content--animate-narrow',
    //   'remove' : 'content--animate-wide'
    // }
  },
  'removeAllTransitions' : {
    'drawer' : {
      'remove' : 'drawer--animate-in drawer--animate-out drawer--animate-narrow drawer--animate-wide drawer--animate-out-wide'
    },
    'drawer__title' : {
      'remove' : 'drawer__title--animate-in drawer__title--animate-out'
    },
    'toggle' : {
      'remove' : 'toggle--animate-in toggle--animate-out'
    },
    'user__name' : {
      'remove' : 'user__name--animate-in user__name--animate-out'
    },
    'nav__text' : {
      'remove' : 'nav__text--animate-in nav__text--animate-out'
    },
    'subnav__link' : {
      'remove' : 'subnav__link--animate-in subnav__link--animate-out'
    },
    'header' : {
      'remove' : 'header--animate-wide header--animate-narrow header--animate-full-to-wide'
    },
    'content' : {
      'remove' : 'content--animate-wide content--animate-narrow content--animate-full-to-wide'
    }
  }
}

// add a "clear all animation classes" state?
// load that state first every time you switch states?

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

function loadState(stateObject, targetStateName) {
  // grab the target state object from the master states object
  var targetState = getItemByPropertyName(stateObject, targetStateName);
  // iterate through each target class in the target state object
  for (var targetClass in targetState) {
    // grab the target state for each class in the target state
    var stateChangeTarget = targetState[targetClass];
    // iterate through each target state change (e.g. whether to add, remove, toggle)
    for (var stateChangeType in stateChangeTarget) {
      // grab the target state change classes (e.g. which classes to add, remove, or toggle)
      var stateChangeClasses = stateChangeTarget[stateChangeType];
      // change the classes of each target element based on its target class, the type of change to make, and its target classes
      changeClasses(targetClass, stateChangeType, stateChangeClasses);
    }
  }
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
        var drawerIsAtDefaultState = firstDrawer.classList.contains('js-drawer--default');
        // var drawerIsNarrowAtMedium = firstDrawer.classList.contains('drawer--narrow@md');
        // var drawerIsHiddenAtMobile = firstDrawer.classList.contains('drawer--moved-out');
        if ((window.matchMedia('(min-width: 1024px)').matches) && (drawerIsAtDefaultState)) {
          console.log('@lg - drawer default so narrow it');
          loadState(transitionsObject, 'transitionWideToNarrowAtLarge');
          loadState(statesObject, 'narrowDrawerStateAtLarge');
        }
        else if (window.matchMedia('(min-width: 1024px)').matches) {
          console.log('@lg - drawer narrow so widen it');
          loadState(transitionsObject, 'transitionNarrowToWideAtLarge');
          loadState(statesObject, 'defaultDrawerState');
        }
        else if ((drawerIsAtDefaultState) && (window.matchMedia('(min-width: 768px)').matches)) {
          console.log('@md - drawer narrow so open it');
          loadState(transitionsObject, 'transitionNarrowToOpenAtMedium');
          loadState(statesObject, 'openDrawerState');
        }
        else if (window.matchMedia('(min-width: 768px)').matches) {
          console.log('@md - drawer open so narrow it');
          loadState(transitionsObject, 'transitionOpenToNarrowAtMedium');
          loadState(statesObject, 'defaultDrawerState');
        }
        else if (drawerIsAtDefaultState) {
          console.log('@sm - drawer hidden so reveal it');
          loadState(transitionsObject, 'transitionOutToIn');
          loadState(statesObject, 'openDrawerState');
        }
        else {
          console.log('@sm - drawer revealed so hide it');
          loadState(transitionsObject, 'transitionInToOut');
          loadState(statesObject, 'defaultDrawerState');
        }
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  bindControl('toggle');
});

// function handleLgBreakpoint(breakpoint) {
//   var firstDrawer = document.getElementsByClassName('drawer')[0];
//   var drawerIsNarrowAtLarge = firstDrawer.classList.contains('drawer--narrow@lg');

//   loadState(statesObject, 'defaultDrawerState');
//   if ((breakpoint.matches) && (drawerIsNarrowAtLarge)) {
//     console.log('transitioned into large and drawer was narrow');
//     console.log('change the drawer into its default state');
//     loadState(statesObject, 'defaultDrawerState');
//   }
//   else if (breakpoint.matches) {
//     console.log('transitioned into large and drawer was wide');
//     console.log('change the drawer into its default state');
//     loadState(statesObject, 'defaultDrawerState');
//   }
//   else {
//     loadState(statesObject, 'defaultDrawerState');
//   }
// }

function handleMdBreakpoint(breakpoint) {
  var firstDrawer = document.getElementsByClassName('drawer')[0];
  var drawerIsAtDefaultState = firstDrawer.classList.contains('js-drawer--default');
  if (breakpoint.matches) {
    console.log('entered @md');
    if (drawerIsAtDefaultState) {
      console.log('drawer is at default so keep it at default');
      loadState(statesObject, 'defaultDrawerState');
      loadState(transitionsObject, 'transitionOutToIn');
    }
    else {
      console.log('drawer is open so keep it open');
      loadState(statesObject, 'openDrawerState');
      // loadState(transitionsObject, 'transitionInToOut');
    }
  } else {
    console.log('exited @md');
    if (drawerIsAtDefaultState) {
      console.log('drawer is at default so keep it at default');
      loadState(statesObject, 'defaultDrawerState');
      loadState(transitionsObject, 'transitionInToOut');
    } else {
      console.log('drawer is open so keep it open');
      loadState(statesObject, 'openDrawerState');
    }
  }
}

function handleLgBreakpoint(breakpoint) {
  var firstDrawer = document.getElementsByClassName('drawer')[0];
  var drawerIsAtNarrowAtLargeState = firstDrawer.classList.contains('js-drawer--narrow@lg');
  if (breakpoint.matches) {
    // console.log('entered @lg');
    // if (drawerIsAtNarrowAtLargeState) {
    //   console.log('drawer is at default so keep it at default');
    //   loadState(statesObject, 'narrowDrawerStateAtLarge');
    //   // loadState(transitionsObject, 'transitionOutToIn');
    // }
    // else {
    //   console.log('drawer is open so keep it open');
    //   loadState(statesObject, 'defaultDrawerState');
    //   loadState(transitionsObject, 'transitionInToOut');
    // }
  } else {
    console.log('exited @lg');
    if (drawerIsAtNarrowAtLargeState) {
      console.log('drawer is narrow at large to switch to default state');
      loadState(statesObject, 'defaultDrawerState');
      // loadState(transitionsObject, 'transi');
    } else {
      console.log('drawer is open so collapse it');
          loadState(transitionsObject, 'transitionOpenToNarrowAtMedium');
          loadState(statesObject, 'defaultDrawerState');
    }
  }
}

var lgBreakpoint = window.matchMedia("(min-width: 1024px)");
var mdBreakpoint = window.matchMedia("(min-width: 768px)");
document.addEventListener('DOMContentLoaded', function(event) {
  lgBreakpoint.addListener(handleLgBreakpoint);
  mdBreakpoint.addListener(handleMdBreakpoint);
});
