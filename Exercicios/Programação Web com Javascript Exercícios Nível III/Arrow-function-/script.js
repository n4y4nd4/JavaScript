let n1 = +prompt("numero 1: ");
let n2 = +prompt("numero 2: ");

let div = document.createElement("div");
let h1 = document.createElement("h1");
div.appendChild(h1);
document.body.appendChild(div);


mensagem = () => {
  let quadrado1 = Math.pow(n1,2);
  let quadrado2 = Math.pow(n2,2);
  h1.innerText = quadrado1;
  h1.innerText += ("\n");
  h1.innerText += quadrado2; 
                  
}


mensagem();