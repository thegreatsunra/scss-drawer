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
    // the drawer is narrow; set the cookie
  if ((typeof document.getElementsByClassName('c-drawer--wide@lg') !== 'undefined') && (document.getElementsByClassName('c-drawer--wide@lg').length > 0)) {
    docCookies.setItem('drawer', 'wide', 86400, '/');
  }
  else if ((typeof document.getElementsByClassName('c-drawer--narrow@lg') !== 'undefined') && (document.getElementsByClassName('c-drawer--narrow@lg').length > 0)) {
    docCookies.setItem('drawer', 'narrow', 86400, '/');
  }
}

// do something when the window width transitions between the desktop breakpoint
function changeDrawerOnMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    // the window just crossed into the desktop breakpoint
    // the drawer is collapsed; expand it as the window gets wider
    changeClasses('js-c-header', 'remove', 'c-header--wide@lg');
    changeClasses('js-c-header', 'add', 'c-header--narrow@lg');
    changeClasses('js-c-view', 'remove', 'c-view--wide@lg');
    changeClasses('js-c-view', 'add', 'c-view--narrow@lg');
    changeClasses('js-c-drawer', 'add', 'c-drawer--wide@lg');
    changeClasses('js-c-drawer', 'remove', 'c-drawer--narrow@lg');
    docCookies.setItem('drawer', 'wide', 86400, '/');
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
      docCookies.setItem('drawer', 'narrow', 86400, '/');
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
      docCookies.setItem('drawer', 'narrow', 86400, '/');
    }
  }
}

// add event listener for desktop breakpoint
var lgBreakpoint = window.matchMedia('(min-width: 1024px)');
lgBreakpoint.addListener(changeDrawerOnMediaQuery);

// add event listener to drawer toggle controls
var drawerControls = document.getElementsByClassName('js-c-toggle__link');
if ((typeof drawerControls !== 'undefined') && (drawerControls.length > 0)) {
  for (var i = drawerControls.length - 1; i >= 0; i--) {
    drawerControls[i].addEventListener('click', toggleDrawer);
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
    // drawer is supposed to be narrow, so make it so
  if (docCookies.getItem('drawer') === 'narrow') && (lgBreakpoint.matches) {
      toggleDrawer(event);
    }
  }
});
