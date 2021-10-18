// Declared variables
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navright = document.querySelector(".nav-right");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

// Menu toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navright.classList.toggle("active");
  nav.classList.toggle("active");

  // Remove active class to restart the delayed effect
  navright.classList.remove("active");

  if (menuToggle.classList.contains("active")) {
    setTimeout(() => {
      navright.classList.add("active");
    }, 100);
  }
});
