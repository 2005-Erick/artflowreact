// Conteúdo do arquivo: /src/auth.js

export function setupRegistration() {
  const registerForm = document.getElementById('register-form');

  // Se não estiver na página de login/cadastro, não faz nada.
  if (!registerForm) {
    return;
  }

  registerForm.addEventListener('submit', (event) => {
    // 1. Impede o recarregamento padrão da página
    event.preventDefault();

    // 2. Pega os valores dos campos do formulário
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;

    // 3. Validação simples
    if (!username || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // (Aqui você poderia adicionar mais validações, como "confirmar senha")

    // 4. Pega os usuários já existentes do localStorage ou cria um array vazio
    const users = JSON.parse(localStorage.getItem('artflowUsers')) || [];

    // 5. Verifica se o e-mail já foi cadastrado
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('Este e-mail já está em uso. Por favor, tente outro.');
      return;
    }

    // 6. Cria o objeto do novo usuário
    const newUser = { username, email, password };

    // 7. Adiciona o novo usuário ao array
    users.push(newUser);

    // 8. Salva o array de usuários atualizado de volta no localStorage
    localStorage.setItem('artflowUsers', JSON.stringify(users));

    // 9. Informa o usuário e o leva para a tela de login
    alert('Conta criada com sucesso! Você já pode fazer login.');
    document.getElementById('show-login-link').click(); // Simula um clique no link "Faça login"
  });
}

// Adicione esta nova função ao seu arquivo /src/auth.js

export function setupLogin() {
  const loginForm = document.getElementById('login-form');

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener('submit', (event) => {
    // 1. Impede o recarregamento da página
    event.preventDefault();

    // 2. Pega os valores dos campos
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    // 3. Validação simples
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // 4. Pega a lista de usuários do localStorage
    const users = JSON.parse(localStorage.getItem('artflowUsers')) || [];

    // 5. Procura por um usuário com o e-mail fornecido
    const user = users.find(u => u.email === email);

    // 6. Verifica se o usuário existe E se a senha está correta
    if (user && user.password === password) {
      // SUCESSO NO LOGIN
      alert(`Login bem-sucedido! Bem-vindo(a) de volta, ${user.username}!`);
      
      // Salva o usuário logado na sessionStorage para uso futuro
      // (sessionStorage é como o localStorage, mas os dados são apagados ao fechar a aba)
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

      // Redireciona o usuário para a página principal
      window.location.href = '/index.html'; 

    } else {
      // FALHA NO LOGIN
      alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
  });
}