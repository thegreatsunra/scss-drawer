'use strict';

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = '';
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
          break;
        case String:
          sExpires = '; expires=' + vEnd;
          break;
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

// toggle classes
function changeClasses(targetClassName, changeType, classNamesToChange) {
  // find the first element that matches targetClassName
  var targets = document.getElementsByClassName(targetClassName);
  // if an element matches, work with it
  if ((typeof targets !== 'undefined') && (targets.length > 0)) {

    for (var j = targets.length - 1; j >= 0; j--) {

      // if there are multiple classNamesToChange delimited by spaces, work with them
      if (classNamesToChange.indexOf(' ')) {
        // split multiple classNamesToChange into an array
        var classes = classNamesToChange.split(' ');
        // iterate through the array of classes
        for (var k = classes.length - 1; k >= 0; k--) {
          // if we're supposed to toggle the classNamesToChange on the target element, do it
          if (changeType === 'toggle') {
            targets[j].classList.toggle(classes[k]);
          }
          // if we're supposed to add the classNamesToChange to the target element, do it
          else if (changeType === 'add') {
            targets[j].classList.add(classes[k]);
          }
          // if we're supposed to remove the classNamesToChange from the target element, do it
          else if (changeType === 'remove') {
            targets[j].classList.remove(classes[k]);
          }
        }
      }
      // if there's just one class name, work with it
      else if (classNamesToChange) {
        // if we're supposed to toggle the class name on the target element, do it
        if (changeType === 'toggle') {
          targets[j].classList.toggle(classNamesToChange);
        }
        // if we're supposed to add the class name to the target element, do it
        else if (changeType === 'add') {
          targets[j].classList.add(classNamesToChange);
        }
        // if we're supposed to remove the class name from the target element, do it
        else if (changeType === 'remove') {
          targets[j].classList.remove(classNamesToChange);
        }
      }
    }
  }
}

// toggle drawer-specific classes when drawer toggle is fired
function toggleDrawer(event) {
  // prevent default behavior of event
  event.preventDefault();
  // toggle the appropriate classes for each target element
  changeClasses('js-c-drawer', 'toggle', 'c-drawer--hidden-until@md c-drawer--narrow@md c-drawer--wide@lg c-drawer--narrow@lg');
  changeClasses('js-c-overlay', 'toggle', 'c-overlay--hidden');
  changeClasses('js-c-header', 'toggle', 'c-header--narrow@lg c-header--wide@lg');
  changeClasses('js-c-view', 'toggle', 'c-view--narrow@lg c-view--wide@lg');
  // if the drawer is wide, set a cookie indicating the drawer is wide
  if ((typeof document.getElementsByClassName('c-drawer--wide@lg') !== 'undefined') && (document.getElementsByClassName('c-drawer--wide@lg').length > 0)) {
    // set a cookie with a 24-hour expiration indicating the drawer is wide
    docCookies.setItem('drawer', 'wide', 86400, '/');
  }
  // if the drawer is narrow, set a cookie indicating the drawer is narrow
  else if ((typeof document.getElementsByClassName('c-drawer--narrow@lg') !== 'undefined') && (document.getElementsByClassName('c-drawer--narrow@lg').length > 0)) {
    // set a cookie with a 24-hour expiration indicating the drawer is narrow
    docCookies.setItem('drawer', 'narrow', 86400, '/');
  }
}

// do something when the window width transitions between the desktop breakpoint
function changeDrawerOnMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // the window just crossed into the desktop breakpoint
    // the drawer is currently collapsed;
    // expand the drawer now that the window just got wider
    changeClasses('js-c-header', 'remove', 'c-header--wide@lg');
    changeClasses('js-c-header', 'add', 'c-header--narrow@lg');
    changeClasses('js-c-view', 'remove', 'c-view--wide@lg');
    changeClasses('js-c-view', 'add', 'c-view--narrow@lg');
    changeClasses('js-c-drawer', 'add', 'c-drawer--wide@lg');
    changeClasses('js-c-drawer', 'remove', 'c-drawer--narrow@lg');
    // set a cookie with a 24-hour expiration indicating the drawer is now wide
    docCookies.setItem('drawer', 'wide', 86400, '/');
  } else {
    // the window just crossed into the tablet breakpoint
    if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--wide@lg')[0]) {
      // the drawer is currently expanded;
      // collapse the drawer now that the window just got narrower
      changeClasses('js-c-header', 'add', 'c-header--wide@lg');
      changeClasses('js-c-header', 'remove', 'c-header--narrow@lg');
      changeClasses('js-c-view', 'add', 'c-view--wide@lg');
      changeClasses('js-c-view', 'remove', 'c-view--narrow@lg');
      changeClasses('js-c-drawer', 'remove', 'c-drawer--wide@lg');
      changeClasses('js-c-drawer', 'add', 'c-drawer--narrow@lg c-drawer--narrow@md c-drawer--hidden-until@md');
      changeClasses('js-c-overlay', 'add', 'c-overlay--hidden');
      // set a cookie with a 24-hour expiration indicating the drawer is now narrow
      docCookies.setItem('drawer', 'narrow', 86400, '/');
    }
    else if (document.getElementsByClassName('js-c-drawer')[0] === document.getElementsByClassName('c-drawer--narrow@lg')[0]) {
      // the drawer is currently collapsed;
      // keep the drawer collapsed because the window just got narrower
      changeClasses('js-c-header', 'add', 'c-header--wide@lg');
      changeClasses('js-c-header', 'remove', 'c-header--narrow@lg');
      changeClasses('js-c-view', 'add', 'c-view--wide@lg');
      changeClasses('js-c-view', 'remove', 'c-view--narrow@lg');
      changeClasses('js-c-drawer', 'remove', 'c-drawer--wide@lg');
      changeClasses('js-c-drawer', 'add', 'c-drawer--narrow@lg c-drawer--narrow@md c-drawer--hidden-until@md');
      changeClasses('js-c-overlay', 'add', 'c-overlay--hidden');
      // set a cookie with a 24-hour expiration indicating the drawer is narrow
      docCookies.setItem('drawer', 'narrow', 86400, '/');
    }
  }
}

// define the large breakpoint media query
var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
// add an event listener that fires changeDrawerOnMediaQuery when the large breakpoint media query is hit
lgBreakpoint.addListener(changeDrawerOnMediaQuery);

// add an event listener to the drawer toggle controls
// get all drawer toggle links
var drawerControls = document.getElementsByClassName('js-c-toggle__link');
// if there are drawer controls, do something with them
if ((typeof drawerControls !== 'undefined') && (drawerControls.length > 0)) {
  // iterate through drawer controls and fire the toggleDrawer function when clicked
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer);
  }
}

// add an event listener for when the DOM content is ready
document.addEventListener('DOMContentLoaded', function(event) {
  // check if the "narrow" cookie is set and if we're currently at the desktop breakpoint
  if ((docCookies.getItem('drawer') === 'narrow') && (lgBreakpoint.matches)) {
    // toggle the drawer closed
    toggleDrawer(event);
  }
});
