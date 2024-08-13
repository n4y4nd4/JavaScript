let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");


btn.addEventListener("click", function botao() {

  function string() {
    p = input.value;
    let maiusculas = p.toUpperCase();
    let minusculas = p.toLowerCase();
    let invertida = p.split("").reverse().join("");
    let cript = "";
    let resultado = 0;
    for (let i = 0; i < p.length; i++) {
      cript = String.fromCharCode(p.charCodeAt(i) + 7);
      resultado += cript;
    }

    return "Maiúsculas: " + maiusculas + " Minúsculas: " + minusculas + " Invertida: " + invertida + " Criptografada: " + resultado;
  }

  p.textContent = string();
});
