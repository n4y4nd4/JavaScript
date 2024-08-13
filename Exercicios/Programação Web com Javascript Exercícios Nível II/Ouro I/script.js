var RendaMensal = parseFloat(prompt("Renda mensal:"));
var Moradia = parseFloat(prompt("Moradia:"));
var Educacao = parseFloat(prompt("Educação:"));
var Transporte = parseFloat(prompt("Transporte:"));


if(isNaN(RendaMensal) || isNaN(Moradia) || isNaN(Educacao) || isNaN(Transporte) ){
    if(isNaN(RendaMensal)){
   console.log("Renda mensal: dado inválido");
    }
    else{
   console.log("Renda mensal: dado válido");
    }
  
    if(isNaN(Moradia)){
   console.log("Moradia: dado inválido");
    }
    else{
   console.log("Moradia: dado válido");
    }
  
    if(isNaN(Educacao)){
   console.log("Educacao: dado inválido");
    }
    else{
   console.log("Educacao: dado válido");
    }
    
    if(isNaN(Transporte)){
   console.log("Transporte: dado inválido");
    }
    else{
   console.log("Transporte: dado válido");
    }
    
}
else{

var porcentagemM = 100 * (Moradia / RendaMensal);
if ((RendaMensal * 0.3) >= Moradia) {
  alert("Os gastos com moradia estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com moradia: " + porcentagemM.toFixed(1) + "%");
} else {
  alert("Os gastos com moradia não estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com moradia: " + porcentagemM.toFixed(1) + "%");
}

var porcentagemE = 100 * (Educacao / RendaMensal);
if ((RendaMensal * 0.2) >= Educacao) {
  alert("Os gastos com educação estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com educação: " + porcentagemE.toFixed(1) + "%");
} else {
  alert("Os gastos com educação não estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com educação: " + porcentagemE.toFixed(1) + "%");
}

var porcentagemT = 100 * (Transporte / RendaMensal);
if ((RendaMensal * 0.15) >= Transporte) {
  alert("Os gastos com transporte estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com transporte: " + porcentagemT.toFixed(1) + "%");
} else {
  alert("Os gastos com transporte não estão dentro do orçamento recomendado");
  alert("Percentual de renda utilizado com transporte: " + porcentagemT.toFixed(1) + "%");
}

}


