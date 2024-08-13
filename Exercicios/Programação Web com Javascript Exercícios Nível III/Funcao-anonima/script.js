let div = document.createElement("div");
let p = document.createElement("p");
div.appendChild(p);
document.body.appendChild(div);

let n = +prompt("Digite um número:");

let fatorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
 
}

p.innerText = fatorial(n);