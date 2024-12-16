const navigationButtonPhone = document.querySelector(
  ".navigation-menu__phone-nav"
);
const navigationMenuPhone = document.querySelector(".navigation-menu--phone");
const navigationMenuListPhone = document.querySelector(
  ".navigation-menu__list--phone"
);
const navigationMenuLinks = document.querySelectorAll(".navigation-menu__link");
const navigationMenuListDecorations = document.querySelectorAll(
  ".navigation-menu__list--decoration"
);
const heroSectionContent = document.querySelector(".hero-section__content");

navigationButtonPhone.addEventListener("click", () => {
  navigationMenuPhone.classList.toggle("active");
  navigationMenuListPhone.classList.toggle("active");
  navigationMenuLinks.forEach((link) => link.classList.toggle("active"));
  navigationMenuListDecorations.forEach((decoration) =>
    decoration.classList.toggle("active")
  );
  heroSectionContent.classList.toggle("active");
  navigationButtonPhone.classList.toggle("active");
});

const mediaQuery = window.matchMedia("(min-width: 800px)");
function handleMediaQueryChange(e) {
  if (e.matches) {
    heroSectionContent.classList.remove("active");
    heroSectionContent.classList.remove("active");
    navigationMenuPhone.classList.remove("active");
    navigationMenuListPhone.classList.remove("active");
    navigationMenuLinks.forEach((link) => link.classList.remove("active"));
    navigationMenuListDecorations.forEach((decoration) =>
      decoration.classList.remove("active")
    );
    navigationButtonPhone.classList.remove("active");
  }
}

mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
