// sequência de 5 números inteiros
let numeros = [13, 28, 18, 22, 9];

// mostre a soma
let soma = 0;
for(let i = 0; i < 5; i++){
soma += numeros[i];
}
console.log("soma:", soma);

// média
let media = soma/5;
console.log("media:", media);

// maior número
let maior = Math.max(...numeros);
console.log("maior numero:", maior);

// menor número
let menor = Math.min(...numeros);
console.log("menor numero:", menor);
