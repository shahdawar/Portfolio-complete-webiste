const navbar = document.querySelector(".navbar");
const hoverZone = document.querySelector(".nav-hover-zone");
const mobileQuery = window.matchMedia("(max-width: 480px)");

let lastScrollY = window.scrollY;
let ticking = false;

const updateNavbarOnScroll = () => {
  if (mobileQuery.matches) {
    navbar.classList.remove("hidden");
    lastScrollY = window.scrollY;
    ticking = false;
    return;
  }

  if (window.scrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
  ticking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbarOnScroll);
      ticking = true;
    }
  },
  { passive: true },
);

mobileQuery.addEventListener("change", () => {
  navbar.classList.remove("hidden");
});

// hover zone brings navbar back
hoverZone.addEventListener("mouseenter", () => {
  navbar.classList.remove("hidden");
});
const darkIcon = document.querySelector(".bi-moon-fill");

darkIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const menu = document.querySelector(".menuBtns");
const hamburgerBtn = document.createElement("button");

hamburgerBtn.className = "hamburgerBtn";
hamburgerBtn.type = "button";
hamburgerBtn.setAttribute("aria-label", "Toggle menu");
hamburgerBtn.setAttribute("aria-expanded", "false");
hamburgerBtn.textContent = "\u2630";
menu.appendChild(hamburgerBtn);

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburgerBtn.setAttribute("aria-expanded", menu.classList.contains("active"));
  hamburgerBtn.textContent = menu.classList.contains("active") ? "\u00d7" : "\u2630";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.textContent = "\u2630";
  });
});
