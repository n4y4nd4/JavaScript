function media(m){
  if (m >= 6){
    return "aprovado";
  }else{
    throw Error("reprovado");
  }
}

try{
  let m = 6;
  let result = media(m);
  console.log(result);
}catch(error){
  console.log("Pontuação insuficiente");
}finally{
  console.log('Bloco "finally" executado');
}

try{
  let m = 3;
  let result = media(m);
  console.log(result);
}catch(error){
  console.log("Pontuação insuficiente");
}finally{
  console.log('Bloco "finally" executado');
}