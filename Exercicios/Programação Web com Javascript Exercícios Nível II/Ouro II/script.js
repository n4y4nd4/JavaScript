var categoria = String(prompt("Categoria:"));

switch(categoria){
  case "A" : alert("Permissão para conduzir Motos e Triciclos"); break;
  case "B" : alert("Permissão para conduzir Carros de passeio"); break;
  case "C" : alert("Permissão para conduzir Veículos de carga acima de 3,5 toneladas"); break;
  case "D" : alert("Permissão para conduzir Veículos com mais de 8 passageiros"); break;
  case "E" : alert("Permissão para conduzir Veículos com unidade acoplada acima de 6 toneladas"); break;
  default : alert("Escolha inválida");
}