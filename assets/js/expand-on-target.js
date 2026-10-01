// Opens a collapsed <details data-open-on-target> when a link points at the
// section that contains it (for example /#call-for-papers), so readers who
// navigate to it see the content rather than only the summary line.
(function () {
  "use strict";

  function openFor(hash) {
    if (!hash || hash.length < 2) return;
    var target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    var details = target.matches("details[data-open-on-target]")
      ? target
      : target.querySelector("details[data-open-on-target]") ||
        target.closest("details[data-open-on-target]");
    if (details) details.open = true;
  }

  openFor(window.location.hash);
  window.addEventListener("hashchange", function () {
    openFor(window.location.hash);
  });

  // A link to the hash that is already in the address bar fires no
  // hashchange event, so handle same-page link clicks directly as well.
  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href*='#']");
    if (!link || link.pathname !== window.location.pathname) return;
    openFor(link.hash);
  });
})();
