let div = document.createElement("div");
let h1 = document.createElement("h1");
div.appendChild(h1);
document.body.appendChild(div);

let n = +prompt("Digite um número:");

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
 
}

h1.innerText = fatorial(n);