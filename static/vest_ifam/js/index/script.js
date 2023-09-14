document.addEventListener('DOMContentLoaded', function () {
  var images = [
    'elementos/19.png',
    'elementos/20.png',
  ];

  var currentImageIndex = 0;
  var imageElement = document.getElementById('carousel-image');
  var indicatorsContainer = document.querySelector('.carousel-indicators');
  var indicators = indicatorsContainer.getElementsByClassName('indicator');

  // Função para atualizar a imagem exibida
  function updateImage() {
    imageElement.src = images[currentImageIndex];

    // Atualiza o indicador ativo
    for (var i = 0; i < indicators.length; i++) {
      if (i === currentImageIndex) {
        indicators[i].classList.add('active');
      } else {
        indicators[i].classList.remove('active');
      }
    }
  }

  // Função para avançar para a próxima imagem
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  }



  // Função para mudar a imagem pelo indicador
  function jumpToImage(index) {
    currentImageIndex = index;
    updateImage();
  }

  // Cria os indicadores
  for (var i = 0; i < images.length; i++) {
    var indicator = document.createElement('span');
    indicator.className = 'indicator';
    indicator.addEventListener('click', (function (index) {
      return function () {
        jumpToImage(index);
      };
    })(i));
    indicatorsContainer.appendChild(indicator);
  }

  // Inicia o carrossel
  updateImage();

  // Função para a mudança automática das imagens
  function autoChangeImage() {
    nextImage();
  }

  // Define o intervalo para a mudança automática das imagens
  var interval = setInterval(autoChangeImage, 5000); // Muda a imagem a cada 5 segundos (5000 milissegundos)

  // Pausa a mudança automática das imagens ao passar o mouse sobre o carrossel
  document.querySelector('.carousel').addEventListener('mouseover', function () {
    clearInterval(interval);
  });

  // Retoma a mudança automática das imagens ao remover o mouse do carrossel
  document.querySelector('.carousel').addEventListener('mouseout', function () {
    interval = setInterval(autoChangeImage, 5000);
  });
});
