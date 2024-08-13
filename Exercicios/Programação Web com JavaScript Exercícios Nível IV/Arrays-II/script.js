// Crie um array vazio para usar como lista de compras.
let lista = [];

// Adicione Milk, Bread e Apples à sua lista.
lista.push("Milk", "Bread", "Apples");

// Substitua Bread por Bananas e Eggs.
lista.splice(1,1, "Bananas", "Eggs");

// Remova o último item e mostre o array na console.
lista.pop();

// Após Bananas, adicione Carrots e Lettuce.
lista.splice(1 + 1, 0, "Carrots", "Lettuce");

// Crie uma nova lista contendo Juice e Pop.
let lista2 = ["Juice", "Pop"];

// Combine as duas listas, adicionando a nova lista ao final da primeira lista.
lista = lista.concat(lista2);

// Obtenha o último valor de índice Pop e envie-o para o console.
console.log(lista.length - 1);



