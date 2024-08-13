let string = prompt("digite uma string:");

function testar(string){
  let regex = /[aeiou]/gi;
  return string.match(regex || []).length;
}

alert("Número de vogais: " + testar(string));
