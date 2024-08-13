let string = prompt("digite uma string:");

function testar(string){
  let regex = /^[0-9]+$/;
  return regex.test(string);
}

if(testar(string) == true){
  alert("Só tem números");
}else{
  alert("Não tem só números");
}