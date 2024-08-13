let n1 = +prompt("numero 1: ");
let n2 = +prompt("numero 2: ");

let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p);
document.body.appendChild(div);


function mensagem(){
  let dividir = n1/n2;
  p.innerText = dividir;
}


mensagem();