// Filters the accepted-papers list by title or author as the reader types.
// Without JavaScript the search box stays hidden and the full list is shown.
(function () {
  "use strict";

  var box = document.querySelector("[data-paper-search]");
  var list = document.querySelector("[data-paper-list]");
  if (!box || !list) return;

  var input = box.querySelector("input");
  var count = box.querySelector("[data-paper-count]");
  var empty = document.querySelector("[data-paper-empty]");
  var items = Array.prototype.slice.call(list.querySelectorAll(".paper-item"));

  // Accents are ignored so that "muller" also finds "Müller".
  function normalize(text) {
    return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  var haystacks = items.map(function (item) {
    return normalize(item.textContent);
  });

  function update() {
    var terms = normalize(input.value).split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (item, index) {
      var match = terms.every(function (term) {
        return haystacks[index].indexOf(term) !== -1;
      });
      item.hidden = !match;
      if (match) shown += 1;
    });
    count.textContent = terms.length
      ? "Showing " + shown + " of " + items.length + " papers"
      : items.length + " papers";
    if (empty) empty.hidden = shown !== 0;
  }

  input.addEventListener("input", update);
  box.hidden = false;
  update();
})();
