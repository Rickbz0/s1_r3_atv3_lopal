let num1 = parseInt(prompt("Digite o primeiro numero:"));
let num2 = parseInt(prompt("Digite o segundo numero:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Digite apenas numeros validos.");

}

let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);
let resultado = "";

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        resultado += i + " ";
    }
}

alert(`Numeros pares entre ${inicio} e ${fim}: ${resultado}`);
