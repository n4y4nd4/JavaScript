let n1 = +prompt("numero 1: ");
let n2 = +prompt("numero 2: ");

let div = document.createElement("div");
let h1 = document.createElement("h1");
div.appendChild(h1);
document.body.appendChild(div);


function mensagem(){
  let soma = n1+n2;
  h1.innerText = soma;
}


mensagem();