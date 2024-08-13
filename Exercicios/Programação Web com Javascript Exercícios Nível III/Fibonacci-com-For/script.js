let x = 0;
let y = 1;
let fibonacci = [];

for (let i = 0; i < 10; ++i) {
  y += x;
  x = y - x;
  fibonacci.push(x);
}

console.log(fibonacci);