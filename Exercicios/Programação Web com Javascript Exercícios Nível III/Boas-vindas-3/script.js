let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p);
document.body.appendChild(div);

function mensagem(){
  p.innerText = "Bem vindo!";
}

mensagem();