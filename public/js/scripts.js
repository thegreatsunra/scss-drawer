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

var statesObject = {
  'defaultDrawerState' : {
    'drawer' : {
      'add' : 'drawer--moved-out drawer--narrow@md drawer--wide@lg',
      'remove' : 'drawer--moved-in drawer--narrow@lg'
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
      'add' : 'drawer--moved-in drawer--narrow@lg',
      'remove' : 'drawer--moved-out drawer--narrow@md drawer--wide@lg'
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
      'add' : 'drawer--moved-out drawer--narrow@md drawer--narrow@lg',
      'remove' : 'drawer--moved-in drawer--wide@lg'
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


var transitionsObject = {
  'transitionNarrowToWide' : {
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
    'remove' : 'drawer--animate-narrow'
  },
  'subnav__link' : {
    'add' : 'subnav__link--animate-in',
    'remove' : 'subnav__link--animate-out'
  },
  'nav__text' : {
    'add' : 'nav__text--animate-in',
    'remove' : 'nav__text--animate-out'
  }
},
'transitionWideToNarrow' : {
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
},
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
    'remove' : 'drawer--animate-out'
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
    'remove' : 'drawer--animate-in'
  }
}
// function transitionNarrowToWideAtLarge() {
//   transitionNarrowToWide();
//   'header' : {
//     'add' : 'header--animate-narrow',
//     'remove' : 'header--animate-wide'
//   },
//   'content' : {
//     'add' : 'content--animate-narrow',
//     'remove' : 'content--animate-wide'
//   }
// }

// function transitionWideToNarrowAtLarge() {
//   transitionWideToNarrow();
//   'header' : {
//     'add' : 'header--animate-wide',
//     'remove' : 'header--animate-narrow'
//   },
//   'content' : {
//     'add' : 'content--animate-wide',
//     'remove' : 'content--animate-narrow'
//   },
// }

// function transitionNarrowToOpenAtMedium() {
//   transitionNarrowToWide();
// }

// function transitionOpenToNarrowAtMedium() {
//   transitionWideToNarrow();
// }

// function transitionSmallToMedium() {
//   transitionOutToIn();
//   'header' : {
//     'add' : 'header--animate-full-to-wide',
//     'remove' : 'header--animate-wide header--animate-narrow'
//   },
//   'content' : {
//     'add' : 'content--animate-full-to-wide',
//     'remove' : 'content--animate-wide content--animate-narrow'
//   },
// }

}

// function transitionNarrowToWide() {
//   changeClasses('drawer__title', 'add', 'drawer__title--animate-in');
//   changeClasses('drawer__title', 'remove', 'drawer__title--animate-out');
//   changeClasses('user__name', 'add', 'user__name--animate-in');
//   changeClasses('user__name', 'remove', 'user__name--animate-out');
//   changeClasses('drawer', 'add', 'drawer--animate-wide');
//   changeClasses('drawer', 'remove', 'drawer--animate-narrow');
//   changeClasses('subnav__link', 'add', 'subnav__link--animate-in');
//   changeClasses('subnav__link', 'remove', 'subnav__link--animate-out');
//   changeClasses('nav__text', 'add', 'nav__text--animate-in');
//   changeClasses('nav__text', 'remove', 'nav__text--animate-out');
// }

// function transitionWideToNarrow() {
//   changeClasses('drawer__title', 'add', 'drawer__title--animate-out');
//   changeClasses('drawer__title', 'remove', 'drawer__title--animate-in');
//   changeClasses('user__name', 'add', 'user__name--animate-out');
//   changeClasses('user__name', 'remove', 'user__name--animate-in');
//   changeClasses('drawer', 'add', 'drawer--animate-narrow');
//   changeClasses('drawer', 'remove', 'drawer--animate-wide');
//   changeClasses('subnav__link', 'add', 'subnav__link--animate-out');
//   changeClasses('subnav__link', 'remove', 'subnav__link--animate-in');
//   changeClasses('nav__text', 'add', 'nav__text--animate-out');
//   changeClasses('nav__text', 'remove', 'nav__text--animate-in');
// }

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

// function transitionOutToIn() {
//   changeClasses('toggle--drawer', 'add', 'toggle--animate-in');
//   changeClasses('toggle--drawer', 'remove', 'toggle--animate-out');
//   changeClasses('toggle--header', 'add', 'toggle--animate-out');
//   changeClasses('toggle--header', 'remove', 'toggle--animate-in');
//   changeClasses('drawer', 'add', 'drawer--animate-in');
//   changeClasses('drawer', 'remove', 'drawer--animate-out');
// }

// function transitionInToOut() {
//   changeClasses('toggle--drawer', 'add', 'toggle--animate-out');
//   changeClasses('toggle--drawer', 'remove', 'toggle--animate-in');
//   changeClasses('toggle--header', 'add', 'toggle--animate-in');
//   changeClasses('toggle--header', 'remove', 'toggle--animate-out');
//   changeClasses('drawer', 'add', 'drawer--animate-out');
//   changeClasses('drawer', 'remove', 'drawer--animate-in');
// }

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
            loadState(statesObject, 'defaultDrawerState');
          }
          else {
            console.log('drawer was wide -> we made it narrow');
            // we're at the lg breakpoint and the drawer is wide
            // make the drawer narrow at the lg breakpoint, which is a unique state
            transitionWideToNarrowAtLarge();
            loadState(statesObject, 'narrowDrawerStateAtLarge');
          }
        } 
        else if (window.matchMedia('(min-width: 768px)').matches) {
          console.log('at medium breakpoint');
          if (drawerIsNarrowAtMedium) {
            console.log('drawer was narrow -> we made it open');
            loadState(statesObject, 'openDrawerState');
            transitionNarrowToOpenAtMedium();
          } else {
            console.log('drawer was open -> we made it narrow');
            loadState(statesObject, 'defaultDrawerState');
            transitionOpenToNarrowAtMedium();
          }
        }
        else if (drawerIsHiddenAtMobile) {
          console.log('below medium breakpoint');
          console.log('drawer was off-screen -> we moved it on-screen');
          loadState(statesObject, 'openDrawerState');
          loadState(transitionsObject, 'transitionOutToIn');
        } else {
          console.log('below medium breakpoint');
          console.log('drawer was (most likely) on-screen -> we moved it off-screen');
          loadState(statesObject, 'defaultDrawerState');
          loadState(transitionsObject, 'transitionInToOut');
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
    loadState(statesObject, 'defaultDrawerState');
  }
  else if (breakpoint.matches) {
    loadState(statesObject, 'narrowDrawerStateAtLarge');
    // narrowDrawerStateAtLarge();
  }
  else {
    loadState(statesObject, 'defaultDrawerState');
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
