// Conteúdo do arquivo: /src/hero-slideshow.js

export function setupHeroSlideshow() {
  // 1. Seleciona todos os elementos de slide
  const slides = document.querySelectorAll('.slide');
  
  // Se não houver slides, não faz nada
  if (slides.length === 0) {
    return;
  }

  let currentSlideIndex = 0;

  // 2. Deixa o primeiro slide visível imediatamente
  slides[currentSlideIndex].classList.add('active');

  function changeSlide() {
    // 3. Esconde o slide atual
    slides[currentSlideIndex].classList.remove('active');

    // 4. Calcula o índice do próximo slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // 5. Mostra o próximo slide
    slides[currentSlideIndex].classList.add('active');
  }

  // 6. Inicia o intervalo para trocar de slide a cada 7 segundos
  setInterval(changeSlide, 7000);
}