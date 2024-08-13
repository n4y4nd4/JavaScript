var cargo = String(prompt("Você é Estagiário, Trainee, Júnior, Pleno ou Sênior?"));
var salario = Number(prompt("Entre com seu salário"));

if(cargo=='Estagiário'){
  salario = salario + (salario*0.10);  
}

else if(cargo=='Trainee'){
  salario = salario + (salario*0.09);
}


else if(cargo=='Júnior'){
  salario = salario + (salario*0.08);
}


else if(cargo=='Pleno'){
  salario = salario + (salario*0.07);
}


else if(cargo=='Sênior'){
  salario = salario + (salario*0.06);
}

else{
  alert("Cargo não reconhecido pelo sistema");
}

alert(salario);