const navbar = document.querySelector("#navbar");
const logo = document.querySelector(".logo");
const navbarHeight = document.body.scrollTop;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__transform");
    logo.classList.add("logo__transform");
  } else {
    navbar.classList.remove("navbar__transform");
    logo.classList.remove("logo__transform");
  }
});
