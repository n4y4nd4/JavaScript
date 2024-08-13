let x = 0;
let y = 1;
 do{
    y += x;
    x = y - x;
   console.log(x);
}
   while(y < 60)