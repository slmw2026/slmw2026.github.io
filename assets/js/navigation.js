(function () {
  "use strict";

  var header = document.querySelector("[data-workshop-header]");
  if (!header) return;

  var button = header.querySelector(".nav-toggle");
  var navigation = header.querySelector(".workshop-nav");
  var moreMenu = header.querySelector(".nav-more");
  var moreSummary = moreMenu ? moreMenu.querySelector("summary") : null;
  var mobileQuery = window.matchMedia("(max-width: 960px)");

  header.classList.add("nav-ready");

  function closeNavigation(returnFocus) {
    navigation.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    if (moreMenu) moreMenu.open = false;
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

  if (moreSummary) {
    moreSummary.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
      event.preventDefault();
      moreMenu.open = !moreMenu.open;
    });
  }

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a") && mobileQuery.matches) closeNavigation(false);
  });

  document.addEventListener("click", function (event) {
    if (header.contains(event.target)) return;
    if (mobileQuery.matches && navigation.classList.contains("is-open")) closeNavigation(false);
    if (moreMenu) moreMenu.open = false;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (mobileQuery.matches && navigation.classList.contains("is-open")) {
      closeNavigation(true);
    } else if (moreMenu && moreMenu.open) {
      moreMenu.open = false;
      moreMenu.querySelector("summary").focus();
    }
  });

  mobileQuery.addEventListener("change", function () {
    closeNavigation(false);
  });
})();
