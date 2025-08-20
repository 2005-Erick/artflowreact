// Conteúdo do arquivo: /main.js

import './style.css';
import './dashboard.css';
import { setupHeaderScroll } from './header-scroll.js';
import { setupHeroSlideshow } from './hero-slideshow.js';
import { setupMobileNav } from './mobile-nav.js';
import { setupAuthFormToggle } from './auth-form-toggle.js';
import { setupRegistration, setupLogin } from './auth.js';
import { initGalleryPage } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
  // Funções globais ou de páginas específicas
  setupHeaderScroll();
  setupMobileNav();
  setupHeroSlideshow();
  setupAuthFormToggle();
  setupRegistration();
  setupLogin();
  
  // Inicia a lógica da página da galeria
  initGalleryPage();
});