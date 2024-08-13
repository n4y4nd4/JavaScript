var parImpar = Number(prompt("Digite 0 para Par ou 1 para Ímpar:"));
var numeroAleatorio = Math.floor(100 * Math.random()+1);

alert('O número sorteado foi: ' + numeroAleatorio);

if(numeroAleatorio %2 == 0){
  
  if(parImpar == 0){
   alert("Você ganhou!"); 
  }else{
    alert("Você perdeu!")
  }
  
} 
else {
  
   if(parImpar == 1){
      alert("Você ganhou!"); 
  }else{
    alert("Você perdeu!")
  }  
   
}



