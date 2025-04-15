let soma = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
        if (isNaN(numero)) {
            alert("Número inválido! Tente novamente.");
            i--; 
        } else {
            soma += numero;
        }
    } {
    alert("A soma dos 10 números é: " + soma);
}
