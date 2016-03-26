'use strict';

console.log('\'Allo \'Allo!');

function toggleClass(targetName, className) {
  var target = document.querySelector(targetName);
  if (target) {
    target.classList.toggle(className);
  }
}

var els = document.querySelectorAll('.js-c-toggle__link');

if (els) {
  for (var i = els.length - 1; i >= 0; i--) {
    els[i].addEventListener('click', function(e) {
      e.preventDefault();
      toggleClass('.js-c-drawer', 'c-drawer--hidden');
      toggleClass('.js-c-overlay', 'c-overlay--hidden');
    });
  }
}
