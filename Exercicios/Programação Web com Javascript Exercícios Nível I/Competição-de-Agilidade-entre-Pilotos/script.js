// Agilidade dos pilotos (%)
const slider = 75;
const jester = 89;
const stinger = 76;
const goose = 75;
const iceman = 98;
const maverick = 90;

// Continue daqui.
var dict = {
  0: { id: 0, nome: 'slider', agilidade: slider },
  1: { id: 1, nome: 'jester', agilidade: jester },
  2: { id: 2, nome: 'stinger', agilidade: stinger },
  3: { id: 3, nome: 'goose', agilidade: goose },
  4: { id: 4, nome: 'iceman', agilidade: iceman },
  5: { id: 5, nome: 'maverick', agilidade: maverick }
}

var agente = Math.floor(Math.random() * 6);
console.log('Nome Piloto (Agente): ' + dict[agente].nome);
const piloto = prompt("Informe o nome do piloto: ");

function executar(agente) {
  var obj = verificarPiloto(piloto);
  //for(var key in dict) {
  if (obj != null) {
    console.log('Nome Piloto (Humano): ' + obj.nome);
    if (dict[agente].id != obj.id) {
      if ((dict[agente].agilidade) > (obj.agilidade)) {
        console.log(obj.nome + ' perdeu ' + 'a rodada!');
        console.log(dict[agente].nome + ' ' + dict[agente].agilidade + '% de agilidade');
        console.log(obj.nome + ' ' + obj.agilidade + '% de agilidade ');
      } else if ((dict[agente].agilidade) < (obj.agilidade)) {
        console.log(obj.nome + ' ' + 'venceu!');
        console.log(obj.nome + ' ' + obj.agilidade + '% de agilidade ');
        console.log(dict[agente].nome + ' ' + dict[agente].agilidade + '% de agilidade ');
      } else {
        console.log(dict[agente].nome + ' ' + dict[agente].agilidade + '% de agilidade ');
        console.log(obj.nome + ' ' + obj.agilidade + '% de agilidade ');
        console.log('Empatou!!!');
      }
    } else {
      console.log('Escolha o piloto novamente');
    }
  } else {
    console.log('Piloto não encontrado.');
  }
  //}
}

function verificarPiloto(nome) {
  for (var key in dict) {
    if (dict[key].nome == nome) {
      return dict[key];
    }
  }
}

switch (agente) {
  case 0:
    // code block    
    executar(agente);
    break;
  case 1:
    // code block
    executar(agente);
    break;
  case 2:
    // code block
    executar(agente);
    break;
  case 3:
    // code block
    executar(agente);
    break;
  case 4:
    // code block
    executar(agente);
    break;
  case 5:
    // code block
    executar(agente);
    break;
  default:
    // code block
    console.log('Algo deu errado!')
}