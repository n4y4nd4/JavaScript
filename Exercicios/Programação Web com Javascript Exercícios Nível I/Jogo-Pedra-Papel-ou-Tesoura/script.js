
var pedraPapelTesoura = String(prompt("Pedra, Papel ou Tesoura?"));
var numeroAleatorio = Math.floor(3 * Math.random()+1);


if(numeroAleatorio==1){
  alert('O programa sorteou: Pedra');
}
else if(numeroAleatorio==2){
  alert('O programa sorteou: Papel');
}
else if(numeroAleatorio==3){
  alert('O programa sorteou: Tesoura');
}


if(numeroAleatorio == 1 && pedraPapelTesoura == 'Pedra'){
   alert("Vocês empataram!"); 
  }
else if (numeroAleatorio == 2 && pedraPapelTesoura == 'Pedra'){
    alert("Você perdeu!")
  }
else if (numeroAleatorio == 3 && pedraPapelTesoura == 'Pedra'){
    alert("Você ganhou!")
  }
else if (numeroAleatorio == 1 && pedraPapelTesoura == 'Papel'){
    alert("Você ganhou!")
  }
else if (numeroAleatorio == 2 && pedraPapelTesoura == 'Papel'){
    alert("Vocês empataram!")
  }
else if (numeroAleatorio == 3 && pedraPapelTesoura == 'Papel'){
    alert("Você perdeu!")
  }
else if (numeroAleatorio == 1 && pedraPapelTesoura == 'Tesoura'){
    alert("Você perdeu!")
  }
else if (numeroAleatorio == 2 && pedraPapelTesoura == 'Tesoura'){
    alert("Você ganhou!")
  }
else if (numeroAleatorio == 3 && pedraPapelTesoura == 'Tesoura' ){
    alert("Vocês empataram!")
  }
  