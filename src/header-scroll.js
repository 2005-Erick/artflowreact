// Conteúdo do arquivo: /src/header-scroll.js

export function setupHeaderScroll() {
  // 1. Seleciona o header
  const header = document.querySelector('.site-header');

  // Se não encontrar o header, não faz nada
  if (!header) {
    return;
  }

  // 2. Cria a função que lida com o scroll
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // 3. Adiciona o "ouvinte" de evento
  window.addEventListener('scroll', handleHeaderScroll);
}