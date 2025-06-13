export function setupRegistration() {
  const registerForm = document.getElementById('register-form');

  if (!registerForm) {
    return;
  }

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;

    if (!username || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('artflowUsers')) || [];

    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('Este e-mail já está em uso. Por favor, tente outro.');
      return;
    }

    const newUser = { username, email, password };

    users.push(newUser);

    localStorage.setItem('artflowUsers', JSON.stringify(users));

    alert('Conta criada com sucesso! Você já pode fazer login.');
    document.getElementById('show-login-link').click(); 
  });
}


export function setupLogin() {
  const loginForm = document.getElementById('login-form');

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('artflowUsers')) || [];

    const user = users.find(u => u.email === email);

    if (user && user.password === password) {
      alert(`Login bem-sucedido! Bem-vindo(a) de volta, ${user.username}!`);
      
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

      window.location.href = '/index.html'; 

    } else {
      alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
  });
}