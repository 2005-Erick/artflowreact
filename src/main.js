import './style.css';
import { setupHeaderScroll } from './header-scroll.js';
import { setupHeroSlideshow } from './hero-slideshow.js';
import { setupMobileNav } from './mobile-nav.js';
import { setupAuthFormToggle } from './auth-form-toggle.js';
import { setupRegistration, setupLogin } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  // Funções que rodam em todas as páginas
  setupHeaderScroll();
  setupMobileNav();
  
  // Funções da página de autenticação
  setupAuthFormToggle();
  setupRegistration();
  setupLogin();
  
  // Funções específicas da página principal
  setupHeroSlideshow();
});