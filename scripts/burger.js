const navBurger = document.querySelector(".burger");
const mobileNav = document.querySelector(".header__mobile-menu");
const body = document.body;

navBurger.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileNav();
});

mobileNav.addEventListener("click", () => {
  if (body.classList.contains("no-scroll")) {
    toggleMobileNav();
  }
});

mobileNav.addEventListener("click", (event) => {
  event.stopPropagation();
});

function toggleMobileNav() {
  navBurger.classList.toggle("open");
  mobileNav.classList.toggle("header__mobile-menu_active");
  body.classList.toggle("no-scroll");
}
