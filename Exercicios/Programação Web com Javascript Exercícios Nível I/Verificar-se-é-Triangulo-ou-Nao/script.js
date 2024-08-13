var lado1 = Number(prompt("Entre com um lado do triângulo"));
var lado2 = Number(prompt("Entre com o segundo lado do triângulo"));
var lado3 = Number(prompt("Entre com o terceiro laod do triângulo"));

if(lado1+lado2<lado3)
{
  alert("Os valoers informados não podem formar um triângulo");
}

else if(lado1+lado3<lado2)
{
  alert("Os valoers informados não podem formar um triângulo");
}

else if(lado2+lado3<lado1)
{
  alert("Os valoers informados não podem formar um triângulo");
}

else
{
  alert("Os valores informados podem formar um triângulo");
}
