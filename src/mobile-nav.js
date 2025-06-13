export function setupMobileNav() {
  const toggleBtn = document.querySelector('.navbar-toggle');
  const closeBtn = document.querySelector('.nav-close-btn');
  const menu = document.querySelector('.navbar-menu');

  if (toggleBtn && menu && closeBtn) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.add('is-open');
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove('is-open');
    });
  }
}