let x = 0;
let y = 1;

for(let i = 1; i <=20; ++i) {
    y += x;
    x = y - x;
    if(i==20){
    console.log(x); 
    }
}