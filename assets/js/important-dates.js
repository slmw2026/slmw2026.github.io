(function () {
  "use strict";

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

  Array.prototype.forEach.call(document.querySelectorAll("[data-important-dates] .date-card"), function (card) {
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

  // The homepage notice for accepted authors drops each deadline once it has
  // passed, and hides itself when none are left.
  Array.prototype.forEach.call(document.querySelectorAll("[data-author-notice]"), function (notice) {
    var items = notice.querySelectorAll("[data-hide-after]");
    var remaining = items.length;
    Array.prototype.forEach.call(items, function (item) {
      var date = parseLocalDate(item.getAttribute("data-hide-after"));
      if (date && date < today) {
        item.hidden = true;
        remaining -= 1;
      }
    });
    if (items.length && !remaining) notice.hidden = true;
  });
})();
