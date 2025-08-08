// Remove acentos e diacríticos para comparação mais segura
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Respostas corretas para cada fase (coloque aqui as suas respostas reais)
const respostas = [
  "familia",  // fase 1
  "segunda",   // fase 2
  "terceira",  // fase 3
  "quarta",    // fase 4
  "quinta",    // fase 5
  "sexta",     // fase 6
  "setima"     // fase 7
];

function verificarResposta(fase) {
  const input = document.getElementById(`resposta${fase}`);
  if (!input) {
    alert("Erro: campo de resposta não encontrado!");
    return;
  }

  // Valor digitado pelo usuário, trim para tirar espaços, lowercase e sem acento
  let valor = removerAcentos(input.value.trim().toLowerCase());
  let respostaCorreta = removerAcentos(respostas[fase - 1].toLowerCase());

  console.log(`Fase ${fase}: digitado='${valor}' | esperado='${respostaCorreta}'`);

  if (valor === respostaCorreta) {
    if (fase < respostas.length) {
      // Redireciona para próxima fase
      window.location.href = `fase${fase + 1}.html`;
    } else {
      // Última fase: mostra mensagem de sucesso
      document.body.innerHTML = "<h1>🎉 Parabéns, você concluiu o desafio!</h1>";
    }
  } else {
    alert("❌ Resposta incorreta! Tente novamente.");
  }
}
