document.addEventListener('DOMContentLoaded', function () {
  createHearts();
});

function createHearts() {
  const heartContainer = document.getElementById('heart-bg');
  const heartSymbols = ['❤️', '💖', '💕', '🥰', '🌸'];

  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Random position and animation duration
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 10 + 's'; // 10-15s
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';

    // Random heart symbol
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heartContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 15000);
  }, 500); // New heart every 500ms
}

// Fade in elements on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Add fade-in class to major elements and observe
document.querySelectorAll('.story-container, .gallery-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});
