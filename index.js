let numero = parseInt(prompt("Digite um número:"));
    if (isNaN(numero) || numero < 1) {
        alert("Digite um número válido (maior ou igual a 1).");
    
    }

    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        resultado += i + " ";
    } {
    alert("Números de 1 até " + numero + " : " + resultado);
}
