// Captura o elemento do ícone do menu hamburguer
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

// Captura o elemento da sidebar
const sidebar = document.querySelector('.sidebar');

// Captura o elemento do botão para fechar a sidebar
const closeButton = document.querySelector('.close-button1');

// Adiciona um evento de clique no ícone do menu hamburguer
mobileMenuIcon.addEventListener('click', function () {
  // Alterna a classe 'show-sidebar' na sidebar para mostrar ou ocultar a sidebar
  sidebar.classList.toggle('show-sidebar');
});

// Adiciona um evento de clique no botão para fechar a sidebar
closeButton.addEventListener('click', function () {
  // Remove a classe 'show-sidebar' da sidebar para ocultá-la
  sidebar.classList.remove('show-sidebar');
});