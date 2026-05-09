const navbar = document.querySelector(".navbar");
const hoverZone = document.querySelector(".nav-hover-zone");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

// hover zone brings navbar back
hoverZone.addEventListener("mouseenter", () => {
  navbar.classList.remove("hidden");
});
const darkIcon = document.querySelector(".bi-moon-fill");

darkIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
