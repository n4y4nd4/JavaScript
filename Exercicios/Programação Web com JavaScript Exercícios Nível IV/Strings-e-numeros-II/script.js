let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");


function consoantes(){
  let regexV = /[aeiou]/gi;
  p = input.value;
  return p.replace(regexV, "").toUpperCase();
}


btn.addEventListener("click", function botao() {
p.textContent = consoantes();
});