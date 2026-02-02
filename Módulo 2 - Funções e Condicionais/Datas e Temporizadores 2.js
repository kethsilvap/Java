<h1>Contagem Regressiva</h1>
<div id="temporizador"></div>

// Data futura (ano, mês-1, dia, hora, minuto, segundo)
const dataFutura = new Date(2026, 11, 31, 23, 59, 59);

// 1️⃣ Função para calcular tempo restante
function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora; // em milissegundos

  if (diferenca <= 0) {
    return null;
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

// 2️⃣ Função para atualizar o temporizador na tela
function atualizarTemporizador() {
  const tempo = calcularTempoRestante(dataFutura);
  const elemento = document.getElementById("temporizador");

  if (!tempo) {
    elemento.textContent = "⏰ Tempo encerrado!";
    clearInterval(intervalo);
    return;
  }

  elemento.textContent =
    `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
}

// 3️⃣ Atualiza a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// Executa uma vez imediatamente
atualizarTemporizador();
