let resultado = document.getElementById('res');
let resAutomatico = document.getElementById('automatico')
let botoesNumericos = document.getElementsByClassName('numero');
let botoesOperacoes = document.getElementsByClassName('operacoes');
let botaoLimpar = document.getElementById('limpar');
let igual = document.getElementById('igual');

let numero = '';
let calculo = '';

// Adicionando ouvinte de evento a todos os botões
document.querySelectorAll('button').forEach(botao => {
  botao.addEventListener('click', function() {
    const valorBotao = this.textContent;
    if (valorBotao === "=") {
      calcularResultado();
    } else if (valorBotao === "CE") {
      limparCalculadora();
    } else if (this.classList.contains('numero') || this.classList.contains('operacoes')) {
      adicionarCaractere(valorBotao);
    }
    else if(valorBotao == 'AC'){
      apagarUltimoCaracter();
    }
  });
});

function adicionarCaractere(caractere) {
  numero += caractere;
  resultado.value = numero;
  calcularResultadoAutomatico()
}

function limparCalculadora() {
  numero = '';
  resultado.value = '';
  resAutomatico.value = '';
}

function apagarUltimoCaracter(){
  numero = numero.slice(0,-1);
  resultado.value = numero
}

function calcularResultadoAutomatico() {
  try {
    numero = math.evaluate(numero);
    resAutomatico.value = numero;
  } catch (error) {
    resultado.value = numero;
  }
}

function calcularResultado(){
  try {
    numero = math.evaluate(numero)
    resultado.value += '='+numero
  }
  catch {
    resultado.value = 'ERRO'
  }
}

function corEntrar(){
  igual.style = 'background-color: #ff8245'
}
function corSair(){
  igual.style = 'background-color: #3751cf'
}
