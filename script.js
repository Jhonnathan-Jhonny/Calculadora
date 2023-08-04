let cal = document.getElementById('igual')
let botoesNumericos = document.getElementsByClassName('numero')
let botoesOperacoes = document.getElementsByClassName('operacoes')
let botaoLimpar = document.getElementById('limpar')
let resultado = document.getElementById('res')

let numero = ''

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
    });
  });

function adicionarCaractere(caractere){ 
    numero += caractere
    resultado.value = numero;
}

function limparCalculadora(){
    numero = ''
    resultado.value = ''
}

function calcularResultado(){

}
