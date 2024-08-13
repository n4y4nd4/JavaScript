var conta = +prompt("Valor da conta:");
var gorjeta = (conta*0.10);

var valorTotal = (conta + gorjeta);

alert("O valor total a ser pago é: R$" + valorTotal.toFixed(2));