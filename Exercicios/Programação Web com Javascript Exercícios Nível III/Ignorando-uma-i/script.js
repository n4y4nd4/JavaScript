let cont = 0;
let n = +prompt("Até quanto o contador deverá contar?");

while(cont<n){
  cont++;
  
  if(cont==6){
    continue;
  }

  console.log(cont);
  
}