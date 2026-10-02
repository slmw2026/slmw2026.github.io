// Adds a working Copy button to code blocks marked with
// <button data-copy-target="id">. The button stays hidden where the
// Clipboard API is unavailable, so readers never see a button that fails.
(function () {
  "use strict";

  if (!navigator.clipboard || !navigator.clipboard.writeText) return;

  Array.prototype.forEach.call(document.querySelectorAll("[data-copy-target]"), function (button) {
    var source = document.getElementById(button.getAttribute("data-copy-target"));
    if (!source) return;

    var label = button.textContent;
    var timer;
    button.hidden = false;
    button.addEventListener("click", function () {
      navigator.clipboard.writeText(source.textContent).then(function () {
        button.textContent = "Copied";
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.textContent = label;
        }, 2000);
      });
    });
  });
})();
