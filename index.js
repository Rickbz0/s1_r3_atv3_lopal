let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite apenas números válidos.");
        return;
    }

    let inicio = Math.min(num1, num2);
    let fim = Math.max(num1, num2);
    let resultado = "";

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
    }

    alert(`Números pares entre ${inicio} e ${fim}:\n${resultado}`);
