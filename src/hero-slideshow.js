// Conteúdo do arquivo: /src/hero-slideshow.js

import { slides } from './hero-slides-data.js';

export function setupHeroSlideshow() {
  const heroSection = document.getElementById('hero-section');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');

  // Se algum elemento não for encontrado, interrompe a execução para evitar erros.
  if (!heroSection || !heroTitle || !heroSubtitle) {
    console.error("Elementos da Hero Section não foram encontrados. O slideshow não vai iniciar.");
    return;
  }

  let currentSlideIndex = 0;

function changeSlide() {
  const slide = slides[currentSlideIndex];

  // --- PARTE DA ANIMAÇÃO ---
  // 1. Deixa o texto invisível, ativando a transição do CSS
  heroTitle.classList.add('fade-out');
  heroSubtitle.classList.add('fade-out');

  // 2. Espera a animação de "desaparecer" (300ms) terminar
  setTimeout(() => {
    // 3. Troca o conteúdo DEPOIS que o texto já está invisível
    heroTitle.textContent = slide.title;
    heroSubtitle.textContent = slide.subtitle;
    heroSection.style.backgroundImage = `url(${slide.image})`;
    
    // 4. Torna o texto visível de novo, ativando a transição de "aparecer"
    heroTitle.classList.remove('fade-out');
    heroSubtitle.classList.remove('fade-out');
  }, 300); // O tempo (300ms) deve ser igual ao da transição no CSS

  // Prepara para o próximo slide
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}

  // Inicia o slideshow trocando de slide a cada 7 segundos (7000 ms)
  setInterval(changeSlide, 7000);
}