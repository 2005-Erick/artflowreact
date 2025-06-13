// Conteúdo do arquivo: /main.js

import './style.css';
import { setupHeaderScroll } from './header-scroll.js';
import { setupHeroSlideshow } from './hero-slideshow.js';
import { setupMobileNav } from './mobile-nav.js';
import { setupAuthFormToggle } from './auth-form-toggle.js';
// 1. Importa as duas funções do mesmo arquivo
import { setupRegistration, setupLogin } from './auth.js'; 

document.addEventListener('DOMContentLoaded', () => {
  // Funções da página principal
  setupHeaderScroll();
  setupMobileNav();
  setupHeroSlideshow();
  
  // Funções da página de autenticação
  setupAuthFormToggle();
  setupRegistration();
  setupLogin(); // <-- 2. CHAMA A NOVA FUNÇÃO
});