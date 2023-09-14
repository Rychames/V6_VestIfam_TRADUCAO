function pesquisar() {
    var searchTerm = document.getElementById("search-input-header").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var conteudo = document.getElementById("conteudo");
  
    if (searchTerm.trim().length < 3) {
      clearHighlight(conteudo);
      return;
    }
  
    clearHighlight(conteudo);
  
    if (window.find(searchTerm, false, false, true)) {
      var sel = window.getSelection();
      var range = sel.getRangeAt(0);
      var span = document.createElement("span");
      span.className = "highlighted";
      range.surroundContents(span);
    } else {
      alert("A palavra não foi encontrada no conteúdo.");
    }
  }
  
  function clearHighlight(element) {
    var highlightedElements = element.getElementsByClassName('highlighted');
    while (highlightedElements.length > 0) {
      var parent = highlightedElements[0].parentNode;
      parent.replaceChild(document.createTextNode(highlightedElements[0].textContent), highlightedElements[0]);
    }
  }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      pesquisar();
    }
  }
  
  var searchInputHeader = document.getElementById("search-input-header");
  searchInputHeader.addEventListener("keydown", handleKeyPress);
  