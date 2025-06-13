export function setupAuthFormToggle() {
  const loginContainer = document.getElementById('login-form-container');
  const registerContainer = document.getElementById('register-form-container');
  const showRegisterLink = document.getElementById('show-register-link');
  const showLoginLink = document.getElementById('show-login-link');

  if (!loginContainer || !registerContainer || !showRegisterLink || !showLoginLink) {
    return;
  }

  showRegisterLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    loginContainer.classList.add('form-hidden');
    registerContainer.classList.remove('form-hidden');
  });

  showLoginLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    registerContainer.classList.add('form-hidden');
    loginContainer.classList.remove('form-hidden');
  });
}