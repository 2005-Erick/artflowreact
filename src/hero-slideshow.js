import { slides } from './hero-slides-data.js';

export function setupHeroSlideshow() {
  const heroSection = document.getElementById('hero-section');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');

  if (!heroSection || !heroTitle || !heroSubtitle) {
    console.error("Elementos da Hero Section não foram encontrados. O slideshow não vai iniciar.");
    return;
  }

  let currentSlideIndex = 0;

function changeSlide() {
  const slide = slides[currentSlideIndex];

  heroTitle.classList.add('fade-out');
  heroSubtitle.classList.add('fade-out');

  setTimeout(() => {
    heroTitle.textContent = slide.title;
    heroSubtitle.textContent = slide.subtitle;
    heroSection.style.backgroundImage = `url(${slide.image})`;
    
    heroTitle.classList.remove('fade-out');
    heroSubtitle.classList.remove('fade-out');
  }, 300); 

  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}

  setInterval(changeSlide, 7000);
}