// Crie um array com 5 nomes próprios.
let nome = ["nayanda", "lucas", "camila", "maria", "gabriel"];

// Ordene o array em ordem crescente e exiba na console.
console.log(nome.sort());

// Crie outro array com 10 números.
let numero = [7, 3, 13, 28, 91, 89, 79, 18, 9, 27];

// Ordene o array de forma que os números apareçam em ordem crescente numérica e exiba na console.
numero.sort(function(a, b) {
  return a - b;
  
});
console.log(numero);


// Embraralhe o array de números e exiba na console.
numero.sort(function() {
  return 0.5 - Math.random();  
});
console.log(numero);

