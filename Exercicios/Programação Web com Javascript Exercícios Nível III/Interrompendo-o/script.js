let cont = 0;
let limite = +prompt("Até quanto o contador deverá contar?");

while (cont < limite) {
  cont++;
  console.log(cont);
  if (cont == limite) {
    break;
  }

}