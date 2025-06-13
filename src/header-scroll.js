export function setupHeaderScroll() {
  const header = document.querySelector('.site-header');

  if (!header) {
    return;
  }

  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll);
}