let nome = prompt("Nome: ");

function iniciais(nome){
  
  let regex = nome.match(/\b\w/g).join("").toUpperCase();
  return regex
}

alert("Iniciais: " + iniciais(nome));
