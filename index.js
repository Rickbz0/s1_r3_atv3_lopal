let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    if (isNaN(numero)) {
        alert("Número inválido.");
    }

    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} `;
    } {
    alert("Tabuada de " + numero + " : " + resultado);
}
