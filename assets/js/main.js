/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active work */
const linkWork = document.querySelectorAll(".work__items");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== LIGHT / DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";

// ambil dari localStorage
const savedTheme = localStorage.getItem("theme");

// DEFAULT DARK
if (savedTheme === "light") {
  document.body.classList.add(lightTheme);
}

// toggle saat klik
themeButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle(lightTheme);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 300,
  // reset: true,
});
//TITLE
sr.reveal(`.section__subtitle`);
sr.reveal(`.section__title`);

// HOME
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

//ABOUT
sr.reveal(`.about__img`, { origin: "left" });
sr.reveal(`.about__description`, { delay: 300, origin: "right" });
sr.reveal(`.button`, { delay: 500 });


//SKILLS
sr.reveal(`.skills__content`, { delay: 400, origin: "up" });

//CERTIFICATES
sr.reveal(`.certificate__container`, { interval: 400, origin: "bottom" });
//PORTFOLIO
sr.reveal(`.work__filters`, { interval: 400 });
sr.reveal(`.work__container`, { interval: 400, origin: "bottom" });
//CONTACT
sr.reveal(`.contact__container`, { interval: 500 });
