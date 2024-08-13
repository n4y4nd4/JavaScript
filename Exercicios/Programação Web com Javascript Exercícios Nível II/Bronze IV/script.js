var litro = +prompt("Preço do litro:");
var valor = +prompt("Valor que o motorista deseja abastecer:");
var resultado;

resultado = valor/litro;

alert("Foram colocados " + parseFloat(resultado.toFixed(1)) + " litros");