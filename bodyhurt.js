// ================================
// Run animations AFTER full page load
// ================================
window.addEventListener('load', function() {
  // Add "loaded" to <body> so CSS animations trigger
  document.body.classList.add('loaded');
});

// ================================
// Accordion functionality
// ================================
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle active class on clicked accordion button
    this.classList.toggle("active");

    // Get the next sibling (the panel content)
    var panel = this.nextElementSibling;

    // Expand/collapse panel
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // close
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // open
    }
  });
}
