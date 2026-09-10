(function () {
  "use strict";

  var grid = document.querySelector("[data-important-dates]");
  if (!grid) return;

  // Parse "YYYY-MM-DD" into a local-midnight Date. Passing the string straight
  // to the Date constructor would read it as UTC and shift the day for viewers
  // west of Greenwich, which is exactly the off-by-one we cannot afford here.
  function parseLocalDate(value) {
    if (!value) return null;
    var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
    if (!parts) return null;
    var date = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]));
    return isNaN(date.getTime()) ? null : date;
  }

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  function addStatus(card, text, hidden) {
    var status = document.createElement("span");
    status.className = hidden ? "visually-hidden" : "date-card__status";
    status.textContent = text;
    card.appendChild(status);
  }

  Array.prototype.forEach.call(grid.querySelectorAll(".date-card"), function (card) {
    var start = parseLocalDate(card.getAttribute("data-date-start"));
    var end = parseLocalDate(card.getAttribute("data-date-end")) || start;
    if (!start || !end) return;

    if (end < today) {
      card.classList.add("is-past");
      // The line through the date carries the meaning visually; screen readers
      // get the same information as text.
      addStatus(card, "This milestone has passed.", true);
    } else if (start <= today) {
      card.classList.add("is-current");
      addStatus(card, start.getTime() === end.getTime() ? "Today" : "In progress", false);
    }
  });
})();
