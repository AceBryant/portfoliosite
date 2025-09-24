document.addEventListener("DOMContentLoaded", () => {
  // Animate heroes
  const heroes = document.querySelectorAll(".hero");
  heroes.forEach((hero, i) => {
    hero.style.animation = `slideInFromRight 1s ease-out forwards`;
    hero.style.animationDelay = `${i + 1}s`;
    hero.style.zIndex = i + 2;
  });

  // Handwriting path
  const stroke = document.querySelector("#handwriting");
  const length = stroke.getTotalLength();

  stroke.style.strokeDasharray = length;
  stroke.style.strokeDashoffset = length;

  const startDelay = heroes.length + 1; // start after hero slides

  stroke.style.opacity = 1;
  stroke.style.animation = `drawLine 4s ease forwards ${startDelay}s, hideStroke 1s ease forwards ${startDelay + 4}s`;

  // Show filled logo after handwriting
  const logo = document.querySelector("#Logo");
  logo.style.animation = `revealFill 1s ease forwards ${startDelay + 4}s`;
});
