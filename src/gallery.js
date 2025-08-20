// Lógica para a página da galeria (dashboard)

// Objeto para guardar o conteúdo HTML de cada "página"
const pages = {
  gallery: `
    <header class="main-header">
      <h1>Galeria</h1>
      <p>Explore as criações da nossa comunidade.</p>
    </header>
    <section class="gallery-container">
      <div class="placeholder">
        <h2>Em breve...</h2>
        <p>A galeria de arte será exibida aqui com React.</p>
      </div>
    </section>
  `,
  profile: `
    <header class="main-header">
      <h1>Meu Perfil</h1>
      <p>Gerencie suas informações e suas obras.</p>
    </header>
    <section class="gallery-container">
      <div class="placeholder">
        <h2>Em breve...</h2>
        <p>A página de perfil será construída aqui.</p>
      </div>
    </section>
  `,
  notifications: `
    <header class="main-header">
      <h1>Notificações</h1>
      <p>Fique por dentro de tudo que acontece.</p>
    </header>
    <section class="gallery-container">
      <div class="placeholder">
        <h2>Sem notificações no momento</h2>
        <p>Quando alguém curtir ou comentar sua arte, você verá aqui.</p>
      </div>
    </section>
  `,
  settings: `
    <header class="main-header">
      <h1>Configurações</h1>
      <p>Ajuste as preferências da sua conta.</p>
    </header>
    <section class="gallery-container">
      <div class="placeholder">
        <h2>Em breve...</h2>
        <p>A página de configurações será construída aqui.</p>
      </div>
    </section>
  `,
};

// Função "Porteiro"
function getAuthStatus() {
  const userJSON = sessionStorage.getItem('loggedInUser');
  if (!userJSON) {
    return null;
  }
  return JSON.parse(userJSON);
}

// Configura a view para usuário logado
function setupLoggedInView(user) {
  const userNameElement = document.querySelector('.user-name');
  const logoutLink = document.querySelector('.logout-link');

  if (userNameElement) {
    userNameElement.textContent = user.username;
  }

  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });
  }
}

// Configura a view para visitante
function setupGuestView() {
  const userBox = document.querySelector('.sidebar-user');
  if (userBox) {
    userBox.innerHTML = `
      <a href="login.html" class="btn btn-primary" style="width: 100%; text-align: center;">
        Fazer Login
      </a>
    `;
  }
}

// Função principal que inicializa a página da galeria
export function initGalleryPage() {
  const mainContent = document.querySelector('.main-content');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  const currentUser = getAuthStatus();

  // Se não estiver na página da galeria, não faz nada
  if (!mainContent) return;

  // Lógica de autenticação
  if (currentUser) {
    setupLoggedInView(currentUser);
  } else {
    setupGuestView();
  }

  // Lógica de navegação
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const page = link.getAttribute('href').substring(1); // Pega o nome da página do href (#profile -> profile)

      // Se for visitante e a página não for a galeria, mostra aviso
      if (!currentUser && page !== 'gallery') {
        alert('Você precisa fazer login para acessar esta área.');
        return;
      }

      // Troca o conteúdo
      if (pages[page]) {
        mainContent.innerHTML = pages[page];
      }

      // Atualiza o estado ativo
      navLinks.forEach(l => l.parentElement.classList.remove('active'));
      link.parentElement.classList.add('active');
    });
  });

  // Carrega o conteúdo inicial da galeria
  mainContent.innerHTML = pages.gallery;
}
