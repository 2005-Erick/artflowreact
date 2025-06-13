// Conteúdo do arquivo: /src/auth-form-toggle.js

export function setupAuthFormToggle() {
  const loginContainer = document.getElementById('login-form-container');
  const registerContainer = document.getElementById('register-form-container');
  const showRegisterLink = document.getElementById('show-register-link');
  const showLoginLink = document.getElementById('show-login-link');

  // Se os elementos não existirem na página, não faz nada.
  // Isso evita erros no console quando estivermos na index.html
  if (!loginContainer || !registerContainer || !showRegisterLink || !showLoginLink) {
    return;
  }

  // Quando clicar em "Cadastre-se"
  showRegisterLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o link de recarregar a página
    loginContainer.classList.add('form-hidden');
    registerContainer.classList.remove('form-hidden');
  });

  // Quando clicar em "Faça login"
  showLoginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o link de recarregar a página
    registerContainer.classList.add('form-hidden');
    loginContainer.classList.remove('form-hidden');
  });
}