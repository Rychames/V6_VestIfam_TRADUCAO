// Função para realizar a tradução para inglês usando Axios
function translateToEnglish(textToTranslate) {
    const settings = {
      method: 'post',
      url: 'https://rychames.github.io/VestIFAM3/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'dc64242e61mshbd0646c13cbceedp1ee2d2jsn2a3446724c82',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: {
        from: 'pt',
        to: 'en',
        text: textToTranslate
      }
    };
  
    return axios(settings);
  }
  
  // Função para traduzir o conteúdo do site em lotes
  function translateSiteContentInBatches(elements, batchSize) {
    const batches = [];
  
    for (let i = 0; i < elements.length; i += batchSize) {
      const batch = elements.slice(i, i + batchSize);
      batches.push(batch);
    }
  
    const batchPromises = batches.map(batch => {
      const textsToTranslate = batch.map(element => element.textContent);
      return translateToEnglish(textsToTranslate.join('\n'));
    });
  
    Promise.all(batchPromises).then(responses => {
      responses.forEach((response, index) => {
        const translations = response.data;
        batchPromises[index].forEach((element, elementIndex) => {
          const translatedText = translations[elementIndex].translations[0].text;
          element.textContent = translatedText;
        });
      });
    });
  }
  
  // Chamando a função de tradução após o carregamento da página
  document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos que contêm texto no seu site (você pode ajustar o seletor conforme necessário)
    const elementsWithText = document.querySelectorAll('p, h1, h2, h3, h4, span, a, li');
  
    // Define o tamanho do lote para 5 elementos por vez
    const batchSize = 5;
  
    // Inicia a tradução em lotes
    translateSiteContentInBatches(Array.from(elementsWithText), batchSize);
  });
  