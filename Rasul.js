// ===============================
// NEON INTERACTIONS
// ===============================


// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// Reveal animation on scroll

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(element => {
  observer.observe(element);
});


// Explore button

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

  document.querySelector("#features").scrollIntoView({
    behavior: "smooth"
  });

});


// Learn More

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", () => {

  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });

});


// Navbar button

const navButton = document.getElementById("navButton");

navButton.addEventListener("click", () => {

  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth"
  });

});


// CTA button

const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", () => {

  ctaButton.textContent = "✨ Let's Build It";

  setTimeout(() => {
    ctaButton.textContent = "Start Something New →";
  }, 1800);

});


// Mouse parallax effect

const heroCard = document.querySelector(".hero-card");

document.addEventListener("mousemove", (e) => {

  if (window.innerWidth < 850) return;

  const x = (window.innerWidth / 2 - e.clientX) / 60;
  const y = (window.innerHeight / 2 - e.clientY) / 60;

  heroCard.style.transform =
    `rotate(3deg) translate(${x}px, ${y}px)`;

});


// Button ripple effect

document.querySelectorAll("button").forEach(button => {

  button.addEventListener("click", function () {

    this.animate(
      [
        {
          transform: "scale(1)"
        },
        {
          transform: "scale(0.96)"
        },
        {
          transform: "scale(1)"
        }
      ],
      {
        duration: 180
      }
    );

  });

});