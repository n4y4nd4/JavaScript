let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p);
document.body.appendChild(div);

let valor = [6,4,8];
  
valor.sort(function(a,b) {
  return a - b;
});
p.innerText = valor;




