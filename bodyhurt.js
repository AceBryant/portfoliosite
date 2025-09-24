document.addEventListener("DOMContentLoaded", () => {
  // Animate heroes
  const heroes = document.querySelectorAll(".hero1, .hero2, .hero3, .hero4");
  heroes.forEach((hero, i) => {
    hero.style.animation = `slideInFromRight 1s ease-out forwards`;
    hero.style.animationDelay = `${i + 1}s`;
    hero.style.zIndex = i + 2;
  });

  // Handwriting paths
  const strokes = document.querySelectorAll("#write-path path");
  strokes.forEach((stroke, i) => {
    const length = stroke.getTotalLength();

    stroke.style.strokeDasharray = length;
    stroke.style.strokeDashoffset = length;
    stroke.style.opacity = 1;

    const startDelay = heroes.length + 1; // after hero slides
    const delay = startDelay + i * 0.5;   // stagger strokes

    stroke.style.animation = `drawLine 2s ease forwards ${delay}s`;
  });

  // Reveal filled logo on top AFTER strokes are done
  const logo = document.querySelector("#logo");
  if (logo) {
    const startDelay = heroes.length + 1 + strokes.length * 0.5; // after last stroke
    logo.style.animation = `revealFill 1.5s ease forwards ${startDelay + 1}s`;

    // Once logo finishes, fade out the handwriting stroke group
    logo.addEventListener("animationend", () => {
      const strokeGroup = document.querySelector("#write-path");
      if (strokeGroup) {
        strokeGroup.style.animation = `fadeOutStroke 1s ease forwards`;
      }
    });
  }
});
