let arrayVotos = [];
let totalVotos = 0;
let percentual = [];
let nVotos = 0;
for (let i = 1; i <= 5; i++) {

  nVotos = prompt("Quantos votos a chapa " + i + " recebeu?");

  if (nVotos <= 0 || isNaN(nVotos)) {
    alert("O número digitado não é natural, tente novamente!");
  }
    
  else {
    arrayVotos.push(nVotos);
    totalVotos += parseInt(nVotos);
    
    console.log("A chapa " + i + " recebeu " + nVotos + " votos");
}

  }

for(let j = 1; j <=5; j++){
  
  percentual.push((arrayVotos[j - 1] / totalVotos * 100).toFixed(1));
  console.log("Percentual de votos da chapa " + j + ": " + percentual[j - 1] + "%");
}
  
if (Math.max(...percentual) < 50) {
  console.log("Deve haver segundo turno da eleição");    

  let chapasSegundoTurno = chapas(arrayVotos);

  console.log("As duas chapas que irão concorrer no segundo turno são: Chapa " + chapasSegundoTurno[0] + " e Chapa " + chapasSegundoTurno[1]);
}

function chapas(arrayVotos) {
  let sortedArrayVotos = [...arrayVotos].sort((a, b) => b - a);
  let chapa1 = arrayVotos.indexOf(sortedArrayVotos[0]) + 1;
  let chapa2 = arrayVotos.indexOf(sortedArrayVotos[1]) + 1;
  return [chapa1, chapa2];
}


