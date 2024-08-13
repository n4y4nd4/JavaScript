var valor = Number(prompt("Entre com o valor da compra:"));

var pagamento1 = String(prompt("Pagar no Crédito, Débito ou Dinheiro?"));


if(pagamento1 == 'Débito'){
  var pagamento2 = String(prompt("Parcelado ou à vista?"));
    if(pagamento2 == 'Parcelado'){
      var parcelamento = Number(prompt("Em quantas vezes quer parcelar sua compra?"));
      
        if(parcelamento<=3){
          var valorParcela = valor/parcelamento;
          alert("Não teve desconto. O valor das parcelas é: R$ "+ valorParcela);
        }

        if(parcelamento>3){
          valor = valor + (valor*0.04);
          var valorParcela = valor/parcelamento;
          alert("Teve acréscimo de 4%. O valor das parcelas é: R$ "+ valorParcela);
        }
    }
    else if(pagamento2=='à vista'){
      valor = valor - (valor*0.08);  
      alert("O valor final da sua compra é: R$"+valor)
  }  
}


else if(pagamento1 == 'Dinheiro'){
  valor = valor - (valor*0.10);  
  alert("O valor final da sua compra é: R$"+valor)
}


else if(pagamento1 == 'Crédito'){
  valor = valor - (valor*0.05);  
  alert("O valor final da sua compra é: R$"+valor)
}



