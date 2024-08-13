let notas = [10,5,8,9,6,7];

let t = [10,5,8,9,6,7];
let e = [10,5,8,9,6,7];

t.sort(function(a,b) {
  return a - b;
});
console.log("Crescente", t);

let reverso = [...e].reverse();
console.log("Reverso", reverso);
