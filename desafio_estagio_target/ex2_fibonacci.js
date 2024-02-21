/*
 Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/

let fibonacci = [0, 1];

let chosenNumber = Math.floor(Math.random() * (50 - 0) + 0);

function returnFibonacci(chosenNumber) {
    while(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length -2] <= chosenNumber) {
        let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length -2];

        fibonacci.push(nextNumber);
    }

    return fibonacci.includes(chosenNumber) ? `O número escolhido é ${chosenNumber} e ele faz parte da sequência de Fibonacci: [${fibonacci}].` : `O número ${chosenNumber} não faz parte da sequência Fibonacci: [${fibonacci}].`;
};

let result = returnFibonacci(chosenNumber);

console.log(result);