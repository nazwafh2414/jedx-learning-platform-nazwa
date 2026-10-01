// =========================================
// SMOOTH SCROLL
// =========================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    const target = document.querySelector(targetID);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// =========================================
// SCROLL ANIMATION
// =========================================

const elements = document.querySelectorAll(
  ".about-paper, .experience-card, .portfolio-card, .contact-paper"
);

elements.forEach((element) => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  },

  {
    threshold: 0.15
  }

);


elements.forEach((element) => {

  observer.observe(element);

});


// =========================================
// NAVBAR SHADOW
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 15px 35px rgba(63, 42, 78, 0.25)";

  } else {

    navbar.style.boxShadow =
      "0 10px 30px rgba(63, 42, 78, 0.18)";

  }

});