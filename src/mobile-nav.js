export function setupMobileNav() {
  const toggleBtn = document.querySelector('.navbar-toggle');
  const closeBtn = document.querySelector('.nav-close-btn');
  const menu = document.querySelector('.navbar-menu');

  if (toggleBtn && menu && closeBtn) {
    // Clicar no ícone de hambúrguer abre o menu
    toggleBtn.addEventListener('click', () => {
      menu.classList.add('is-open');
    });

    // Clicar no "X" fecha o menu
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('is-open');
    });
  }
}