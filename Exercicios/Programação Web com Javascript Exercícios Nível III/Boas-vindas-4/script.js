let div = document.createElement("div");
let h1 = document.createElement("h1");
div.appendChild(h1);
document.body.appendChild(div);

function mensagem(){
  h1.innerText = "Bem vindo!";
}


mensagem();