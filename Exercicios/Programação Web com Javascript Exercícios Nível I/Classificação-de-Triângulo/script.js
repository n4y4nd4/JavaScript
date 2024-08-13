//Equilatero == todos lados iguais
//Escaleno == todos lados diferentes
//Isósceles == dois lados iguais

var lado1 = Number(prompt("Entre com um lado do triângulo"));
var lado2 = Number(prompt("Entre com o segundo lado do triângulo"));
var lado3 = Number(prompt("Entre com o terceiro lado do triângulo"));

if(lado1==lado2 && lado1==lado3){
  alert("Triângulo Equilátero");
}
else if(lado1!=lado2 && lado2!=lado3){
  alert("Triângulo Escaleno");
}
else if(lado1!=lado2 && lado1==lado3 || lado1!=lado3 && lado1==lado2 || lado2!=lado1 && lado2==lado3) {
  alert("Triângulo Isósceles");
}