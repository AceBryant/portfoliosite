document.addEventListener("DOMContentLoaded", () => {
  // Animate heroes
  const heroes = document.querySelectorAll(".hero1, .hero2, .hero3, .hero4");
  heroes.forEach((hero, i) => {
    hero.style.animation = `slideInFromRight 0.5s ease-out forwards`;
    hero.style.animationDelay = `${i * 0.3 + 0.5}s`;
    hero.style.zIndex = i + 2;
  });

  // Handwriting paths
  const strokes = document.querySelectorAll("#write-path path");
  let lastStrokeEnd = 0;

  strokes.forEach((stroke, i) => {
    const length = stroke.getTotalLength();
    stroke.style.strokeDasharray = length;
    stroke.style.strokeDashoffset = length;
    stroke.style.opacity = 1;

    const startDelay = heroes.length * 0.3 + 1; // after hero slides
    const delay = startDelay + i * 0.5;         // stagger strokes

    stroke.style.animation = `drawLine 2s ease forwards ${delay}s`;

    // track the end time of the last stroke
    const endTime = delay + 2;
    if (endTime > lastStrokeEnd) {
      lastStrokeEnd = endTime;
    }
  });

  // Overlap fade-out and logo fade-in
  const strokeGroup = document.querySelector("#write-path");
  const logo = document.querySelector("#logo");

  if (strokeGroup && logo) {
    const overlap = 0.5; // start fading strokes 0.5s BEFORE logo finishes
    strokeGroup.style.animation = `fadeOutStroke 1s ease forwards ${lastStrokeEnd - overlap}s`;
    logo.style.animation = `revealFill 1s ease forwards ${lastStrokeEnd - overlap}s`;
  }
});
