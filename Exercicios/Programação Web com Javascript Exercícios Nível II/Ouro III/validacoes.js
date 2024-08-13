/** 
PROF: ENUNCIADO PEDE PARA QUE AS VALIDAÇÕES SEJAM CHAMADA DENTRO DO SCRIPT.JS

*/

function vazio(n) {
  if (n == null || n == undefined || n.length === 0) {
    console.log("Parâmetro " + n + ":" + " é vazio");
  }

  else {
    console.log("Parâmetro " + n + ":" + " não é vazio ");

  }
}
vazio(null);
vazio(15);
console.log("\n");


function minimo(n) {
  if (n.length > 2) {
    console.log("Parâmetro " + n + ":" + " possui o número mínimo de caracteres");
  } else {
    console.log("Parâmetro " + n + ":" + " não possui o número mínimo de caracteres");
  }
}

minimo(3);
minimo('FaithInTheFuture');
console.log("\n");


function maximo(n) {

  if (n.length > 10) {
    console.log("Parâmetro " + n + ":" + " possui o número máximo de caracteres");
  } else {
    console.log("Parâmetro " + n + ":" + " não possui o número máximo de caracteres");

  }
}

maximo(28);
maximo("LouisTomlinson");
console.log("\n");


function inteiro(n) {
  if (Number.isInteger(n)) {
    console.log("Parâmetro " + n + ":" + " É um número inteiro");
  }
  else {
    console.log("Parâmetro " + n + ":" + " Não é um número inteiro ");

  }
}
inteiro(1);
inteiro(1.1);
console.log("\n");


function real(n) {

  if (!Math.sqrt(n) || isNaN(n)) {
    console.log("Parâmetro " + n + ":" + " Não é um número real");
  }
  else {
    console.log("Parâmetro " + n + ":" + " É um número real");
  }

}
real(-4);
real(2);
