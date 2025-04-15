let soma = 0;
let nota = 0;

for (let i = 1; i <= 5; i++) {

    nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    
    if (isNaN(nota)) {
        alert("Numero invalido!");

        i--;
    } else {
        soma += nota;
    }
}

let media = soma / 5;
alert("A média das notas é: " + media.toFixed(2));

