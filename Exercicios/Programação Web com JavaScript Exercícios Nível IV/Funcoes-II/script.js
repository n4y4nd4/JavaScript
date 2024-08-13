let string = prompt("digite uma string:");

function testar(string){
  let regex = /^[A-Z]/;
  return regex.test(string);
}

if(testar(string) == true){
  alert("O primeiro caractere é maiúsculo");
}else{
  alert("O primeiro caractere não é maiúsculo");
}