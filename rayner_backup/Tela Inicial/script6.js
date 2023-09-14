// Função para abrir o modal e desabilitar a rolagem da página
function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }

  // Função para fechar o modal e habilitar a rolagem da página novamente
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // Event listener para o botão de login no header
  var buttonLoginHeader = document.getElementById("button-login");
  buttonLoginHeader.addEventListener("click", openModal);

  // Event listener para o botão de login na sidebar
  var buttonLoginSidebar = document.getElementById("button-login-sidebar");
  buttonLoginSidebar.addEventListener("click", openModal);