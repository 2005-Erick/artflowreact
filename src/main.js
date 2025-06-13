import './style.css';
import { setupHeaderScroll } from './header-scroll.js';
import { setupHeroSlideshow } from './hero-slideshow.js';
import { setupMobileNav } from './mobile-nav.js';
import { setupAuthFormToggle } from './auth-form-toggle.js';
import { setupRegistration, setupLogin } from './auth.js'; 

document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScroll();
  setupMobileNav();
  setupHeroSlideshow();
  
  setupAuthFormToggle();
  setupRegistration();
  setupLogin(); 
});