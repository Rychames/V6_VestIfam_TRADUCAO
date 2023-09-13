const perguntas = [
  {
    pergunta: "(Ano: 2017/Banca: MPE-GO) Assinale a alternativa CORRETA quanto à forma singular e plural dos substantivos:",
    opcoes: ["cônsul/cônsois", "pãozinho/pãozinhos", "abdômen/abdômenes", "alto-falante/altos-falantes", "boia-fria/boia-frias"],
    respostaCorreta: "abdômen/abdômenes"
  },
  {
    pergunta: "(UEPG) A alternativa incorreta de acordo com a gramática da língua culta é:",
    opcoes: ["Obedeço o regulamento", "O caçador visou o alvo", "Custa crer que eles brigam", "Aspiro o ar da manhã", "Prefiro passear a ver televisão"],
    respostaCorreta: "Obedeço o regulamento"
  },
  {
    pergunta: "Analise as frases abaixo e aponte qual possui verbo de ligação?",
    opcoes: ["Pedro trabalhava muito todos os dias", "Aquele carro é caro", "Ela quis viajar logo", "João e Marcos torcem", "A professora saiu de sala"],
    respostaCorreta: "Aquele carro é caro"
  },
  {
    pergunta: "(IBGE) Assinale a opção em que todos os adjetivos devem ser seguidos pela mesma preposição:",
    opcoes: ["ávido/bom/inconsequente", "indigno/odioso/perito", "leal/limpo/oneroso", "orgulhoso/rico/sedento", "oposto/pálido/sábio"],
    respostaCorreta: "orgulhoso/rico/sedento"
  },
  {
    pergunta: "(Cescea) As palavras ansioso, contemporâneo e misericordioso regem, respectivamente, as preposições",
    opcoes: ["a – em – de – para","de – a – de","por – de – com","de – com – para com","com – a – a"],
    respostaCorreta: "por – de – com"
  },
  {
    pergunta: "(PUC-SP) Nos trechos: \"...nem um dos autores nacionais ou nacionalizados de oitenta pra lá faltava nas estantes do major\" e \" ...o essencial é achar-se as palavras que o violão pede e de- seja\" encontramos, respectivamente, as seguintes figuras de linguagem:",
    opcoes: ["prosopopeia e hipérbole","hipérbole e metonímia","perífrase e hipérbole","metonímia e eufemismo","metonímia e prosopopeia"],
    respostaCorreta: "prosopopeia e hipérbole"
  },
  {
    pergunta: "(FCC-BA) \"Água às refeições é ________ para a saúde. Essa é uma das muitas precauções que ________ tomar, se se quer conservar a silhueta.\"",
    opcoes: ["mau, é preciso","mau, são precisas","mal, é precisa","má, são precisas","má, é preciso"],
    respostaCorreta: "mau, é preciso"
  },
  {
    pergunta: "(Cesgranrio) Há concordância nominal inadequada em:",
    opcoes: ["clima e terras desconhecidas","clima e terra desconhecidos","terras e clima desconhecidas","terras e clima desconhecido","terras e clima desconhecidos"],
    respostaCorreta: "terras e clima desconhecidas"
  },
  {
    pergunta: "(BB) Indique a concordância verbal errada:",
    opcoes: ["V. Ex.ª é generoso","Mais de um jornal comentou o jogo","Elaborou-se ótimos planos","Eu e minha família fomos ao mercado","Os Estados Unidos situam-se na América do Norte"],
    respostaCorreta: "Elaborou-se ótimos planos"
  },
  {
    pergunta: "(Fuvest - SP) Indique a alternativa correta:",
    opcoes: ["Tratavam-se de questões fundamentais","Comprou-se terrenos no subúrbio","Precisam-se de datilógrafas"," Reformam-se ternos","Obedeceram-se aos severos regulamentos"],
    respostaCorreta: "Reformam-se ternos"
  },
  {
    pergunta: "(FCC) A ocorrência de interferências ___ -nos a concluir que ___ uma relação profunda entre homem e sociedade que os ___ mutuamente dependentes",
    opcoes: ["leva, existe, torna","levam, existe, tornam","levam, existem, tornam","levam, existem, torna","leva, existem, tornam"],
    respostaCorreta: "leva, existe, torna"
  },


  // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer;

const opcoesButtons = document.querySelectorAll('.quiz-button');
const numberQuestion = document.getElementById('numberQuestion');
const txtQuestion = document.getElementById('Txtquestion');
const resolutionContainer = document.querySelector('.ResolutionContainer');
const resolutionMessage = document.querySelector('.ResolutionMessage');
const relogioSegundos = document.getElementById('relogio-segundos');

function loadQuestion() {
  const currentQuestion = perguntas[currentQuestionIndex];

  numberQuestion.textContent = `Pergunta ${currentQuestionIndex + 1}`;
  txtQuestion.textContent = currentQuestion.pergunta;

  for (let i = 0; i < opcoesButtons.length; i++) {
    opcoesButtons[i].textContent = currentQuestion.opcoes[i];
    opcoesButtons[i].addEventListener('click', () => {
      handleAnswer(currentQuestion.opcoes[i]);
    });
    opcoesButtons[i].disabled = false;
  }

  startTimer(10);
}




function startTimer(seconds) {
  let remainingTime = seconds;
  relogioSegundos.textContent = `Tempo restante: ${remainingTime} segundos`;

  clearInterval(timer);

  timer = setInterval(() => {
    remainingTime--;
    relogioSegundos.textContent = `Tempo restante: ${remainingTime} segundos`;

    if (remainingTime === 0) {
      clearInterval(timer);
      showCorrectAnswer();
    }
  }, 1000);
}

function handleAnswer(selectedOption) {
  const currentQuestion = perguntas[currentQuestionIndex];

  clearInterval(timer);

  for (let i = 0; i < opcoesButtons.length; i++) {
    opcoesButtons[i].removeEventListener('click', () => handleAnswer(currentQuestion.opcoes[i]));
    opcoesButtons[i].disabled = true;
  }

  if (selectedOption === currentQuestion.respostaCorreta) {
    for (let i = 0; i < opcoesButtons.length; i++) {
      if (opcoesButtons[i].textContent === currentQuestion.respostaCorreta) {
        opcoesButtons[i].style.backgroundColor = 'green';
      }
    }
    correctAnswers++;
  } else {
    for (let i = 0; i < opcoesButtons.length; i++) {
      if (opcoesButtons[i].textContent === currentQuestion.respostaCorreta) {
        opcoesButtons[i].style.backgroundColor = 'green';
      } else if (opcoesButtons[i].textContent === selectedOption) {
        opcoesButtons[i].style.backgroundColor = 'red';
      }
    }
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < perguntas.length) {
      loadQuestion();
    } else {
      displayResults();
    }
  }, 1000);
}




function showCorrectAnswer() {
  for (let i = 0; i < opcoesButtons.length; i++) {
    if (opcoesButtons[i].textContent === perguntas[currentQuestionIndex].respostaCorreta) {
      opcoesButtons[i].style.backgroundColor = 'green';
    }
  }

  setTimeout(() => {
    currentQuestionIndex++;
    resetButtonColors();
    loadQuestion();
  }, 1000);
}

function resetButtonColors() {
  for (let i = 0; i < opcoesButtons.length; i++) {
    opcoesButtons[i].style.backgroundColor = '';
  }
}

function displayResults() {
  alert("sla");
  resolutionContainer.style.display = 'block';
  resolutionMessage.textContent = `Você acertou ${correctAnswers} de ${perguntas.length} perguntas.`;
}
loadQuestion();
