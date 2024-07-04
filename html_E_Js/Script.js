document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagemDiv = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagemDiv.textContent = "o número 2 é maior que o número 1. Então é válido";
        mensagemDiv.className = "mensagem sucesso";
    } else if (campoA === campoB) {
        mensagemDiv.textContent = "Os números são iguais.";
        mensagemDiv.className = "mensagem igual";
    } else {
        mensagemDiv.textContent = "o número 2 é menor que o número 1. logo é invalido";
        mensagemDiv.className = "mensagem erro";
    }
});
