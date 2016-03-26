console.log('\'Allo \'Allo!');

var els;

if (els = document.querySelectorAll(".c-toggle__link")) {
  for (var i = els.length - 1; i >= 0; i--) {
    els[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target;
      if (target = document.querySelector(".c-drawer")) {
        target.classList.toggle("c-drawer--hidden");
      }
      var overlay;
      if (target = document.querySelector(".c-overlay")) {
        target.classList.toggle("c-overlay--hidden");
      }
    })
  }
}
