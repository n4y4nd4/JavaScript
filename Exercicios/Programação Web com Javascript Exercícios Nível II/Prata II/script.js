var alcool = parseFloat(prompt("Preço do litro do Álcool"));
var gasolina = parseFloat(prompt("Preço do litro da Gasolina"));

if((alcool/gasolina) < 0.7){
  alert("Use Álcool");
}
else{
  alert("Use Gasolina");
}
