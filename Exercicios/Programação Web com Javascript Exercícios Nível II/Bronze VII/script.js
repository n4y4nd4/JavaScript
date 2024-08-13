

function isAnoBissexto(ano){
  
  if ((ano % 400 == 0) || (ano % 4==0 && ano % 100 !=0)){
    console.log(ano = true + " " + ano +" é bissexto");
  }
  else{
    console.log(ano = false + " " + ano +" não é bissexto");
  }
  
}
isAnoBissexto(2020);
isAnoBissexto(2024);
isAnoBissexto(2023);
isAnoBissexto(2022);
isAnoBissexto(2021);