var roboRatTotal = Number(prompt("Quantos votos o mascote RoboRat recebeu?"));
var roboRatInvalido = Number(prompt("Quantos votos inválidos o mascote RoboRat recebeu?"));

var superKeyTotal = Number(prompt("Quantos votos o mascote SuperKeyboard recebeu?"));
var superKeyInvalido = Number(prompt("Quantos votos inválidos o mascote SuperKeyboard recebeu?"));

//total de votos 
var votoTotal = roboRatTotal + superKeyTotal;

//total de votos invalidos
var invalidoTotal = roboRatInvalido + superKeyInvalido;

//porcentagem de votos válidos no total
var porcentagemTotalRobo = 100*((roboRatTotal - roboRatInvalido)/votoTotal);
var porcentagemTotalKey = 100*((superKeyTotal - superKeyInvalido)/votoTotal);

if(porcentagemTotalRobo>porcentagemTotalKey){
  var novoMascote = 'RoboRat!';
}else{
  var novoMascote = 'SuperKeyboard!';
}

//porcentagem de votos inválidos de cada um
var porcentagemRoboInvalido = 100*(roboRatInvalido/roboRatTotal); 
var porcentagemKeyInvalido = 100*(superKeyInvalido/superKeyTotal);

//porcentagem de votos válidos de cada um
var porcentagemRoboTotal = 100*((roboRatTotal - roboRatInvalido)/roboRatTotal);
var porcentagemKeyTotal = 100*((superKeyTotal - superKeyInvalido)/superKeyTotal);;

alert("O mascote RoboRat teve " + parseInt(porcentagemRoboTotal) + "% de votos válidos e "+ parseInt(porcentagemRoboInvalido) + "% de votos inválidos.");
alert("O mascote SuperKeyboard teve " + parseInt(porcentagemKeyTotal) +"% de votos válidos e "+ parseInt(porcentagemKeyInvalido) + "% de votos inválidos.");
alert("O mascote RoboRat teve um total de " + parseInt(porcentagemTotalRobo) + "% de votos válidos e o mascote SuperKeyboard teve um total de "+parseInt(porcentagemTotalKey) + "% de votos válidos. Sendo assim, o novo mascote do time será o " + novoMascote);



