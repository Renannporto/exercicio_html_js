function validarFormulario() {
    // Obtém os valores dos campos
    let campoA = document.getElementById("campoA").value;
    let campoB = document.getElementById("campoB").value;

    // Converte os valores para números
    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        exibirMensagem("Formulário válido!", true);
    } else {
        exibirMensagem("Formulário inválido! O número B deve ser maior que o número A.", false);
    }
}

function exibirMensagem(mensagem, isValid) {
    let mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;

    // Adiciona uma classe para estilização condicional
    mensagemDiv.className = isValid ? 'mensagem-positiva' : 'mensagem-negativa';

    let botaoVoltar = document.createElement('button');
            botaoVoltar.textContent = "Voltar";
            botaoVoltar.onclick = function() {
                window.location.href = 'http://127.0.0.1:5500/index.html'; 
            };
            mensagemDiv.appendChild(botaoVoltar);
}