function calculadoraIMC() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var calculo = document.getElementById("calculo");
  
  var imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));

  if(isNaN(altura) || isNaN(peso)){

    if(isNaN(peso)){
      console.log("Peso: dado inválido");
    }
    else{
      console.log("Peso: dado válido");
    }

    if(isNaN(altura)){
      console.log("Altura: dado inválido");
    }
    else{
      console.log("Altura: dado válido");
    }
   
}
 
calculo.innerText = ('Seu IMC é ' + imc.toFixed(2));
  


if(imc<18.5){
  classificacao.innerText = ('Classificação do IMC: Magreza\n');
}
else if(imc>=18.5 && imc<=24.9){
  
  classificacao.innerText = ('Classificação do IMC: Normal\n');
}
else if(imc>=25.0 && imc<=29.9){
  classificacao.innerText = ('Classificação do IMC: Sobrepeso\n');
}
else if(imc>=30.0 && imc<=39.9){
  classificacao.innerText = ('Classificação do IMC: Obesidade\n');
}
else if(imc>40){
  classificacao.innerText = ('Classificação do IMC: Obesidade Grave\n');
}
  
}
/*
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE III*/