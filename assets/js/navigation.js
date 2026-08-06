(function () {
  "use strict";

  var header = document.querySelector("[data-workshop-header]");
  if (!header) return;

  var button = header.querySelector(".nav-toggle");
  var navigation = header.querySelector(".workshop-nav");
  var dropdowns = header.querySelectorAll(".nav-dropdown");
  var mobileQuery = window.matchMedia("(max-width: 960px)");

  header.classList.add("nav-ready");

  function closeNavigation(returnFocus) {
    navigation.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    Array.prototype.forEach.call(dropdowns, function (dropdown) {
      dropdown.open = false;
    });
    if (returnFocus) button.focus();
  }

  button.addEventListener("click", function () {
    var willOpen = !navigation.classList.contains("is-open");
    navigation.classList.toggle("is-open", willOpen);
    button.setAttribute("aria-expanded", String(willOpen));
  });

  button.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
    event.preventDefault();
    button.click();
  });

  Array.prototype.forEach.call(dropdowns, function (dropdown) {
    var summary = dropdown.querySelector("summary");
    summary.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
      event.preventDefault();
      dropdown.open = !dropdown.open;
    });
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a") && mobileQuery.matches) closeNavigation(false);
  });

  document.addEventListener("click", function (event) {
    if (header.contains(event.target)) return;
    if (mobileQuery.matches && navigation.classList.contains("is-open")) closeNavigation(false);
    Array.prototype.forEach.call(dropdowns, function (dropdown) {
      dropdown.open = false;
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (mobileQuery.matches && navigation.classList.contains("is-open")) {
      closeNavigation(true);
    } else {
      var openDropdown = null;
      Array.prototype.forEach.call(dropdowns, function (dropdown) {
        if (dropdown.open) openDropdown = dropdown;
      });
      if (openDropdown) {
        openDropdown.open = false;
        openDropdown.querySelector("summary").focus();
      }
    }
  });

  mobileQuery.addEventListener("change", function () {
    closeNavigation(false);
  });
})();
