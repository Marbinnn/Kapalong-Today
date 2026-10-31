// ========================================
// KAPALONG TODAY - Main JavaScript
// ========================================

// Mobile navigation
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    mainNav.classList.toggle("open", !isOpen);
  });

  // Close navigation after clicking a link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Close navigation when pressing Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.focus();
    }
  });
}

// Automatically update the copyright year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Display the current date using Philippine time
const date = document.querySelector("#today-date");

if (date) {
  date.textContent =
    new Intl.DateTimeFormat("en-PH", {
      timeZone: "Asia/Manila",
      month: "short",
      day: "numeric",
      year: "numeric"
    })
      .format(new Date())
      .toUpperCase() + " • KAPALONG, DAVAO DEL NORTE";
}