function updateEllipses() {
  const scrollY = window.scrollY;
  const maxOffset = 7; // max px gap increase per ellipse
  const offset = Math.min(scrollY * 0.01, maxOffset); // tune 0.03 for sensitivity

  document.querySelectorAll('.hero-bg ellipse').forEach((ellipse, i) => {
    let baseCy = ellipse.dataset.baseCy;
    if (!baseCy) {
      baseCy = ellipse.getAttribute('cy');
      ellipse.dataset.baseCy = baseCy;
    }
    // Each ellipse moves down a bit more than the previous
    ellipse.setAttribute('cy', parseFloat(baseCy) + offset * i);
  });
}

// Initialize baseCy on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-bg ellipse').forEach((ellipse) => {
    ellipse.dataset.baseCy = ellipse.getAttribute('cy');
  });
  updateEllipses();
});

window.addEventListener('scroll', updateEllipses);
window.addEventListener('resize', updateEllipses);

// Subtitle carousel effect
window.addEventListener('DOMContentLoaded', () => {
  const subtitles = document.querySelectorAll('.subtitle-carousel .subtitle');
  let current = 0;

  function showNextSubtitle() {
    const prev = current;
    subtitles[prev].classList.remove('active');
    subtitles[prev].classList.add('out');

    current = (current + 1) % subtitles.length;
    subtitles[current].classList.add('active');

    setTimeout(() => {
      subtitles[prev].classList.remove('out');
    }, 800); // match transition duration
  }

  setInterval(showNextSubtitle, 3200);
}); 