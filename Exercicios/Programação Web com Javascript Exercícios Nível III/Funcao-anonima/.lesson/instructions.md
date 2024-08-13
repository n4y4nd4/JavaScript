<p align="center">
	<img src="https://www.infnet.edu.br/infnet/wp-content/themes/infnet.homepage//assets/img/LogoInfnetRodape.png"/>
</p>

# Teste de Performance 3

## Exercício 13

### _CONTEXTO_

- Função Anônima

Uma `função anônima`, também conhecida como `função sem nome`, é uma função que não possui um `identificador (nome)` associado a ela. Em vez de ser declarada com um nome `específico`, uma função anônima é definida diretamente em uma `expressão`.

Existem `diferentes` formas de criar funções anônimas em JavaScript. Aqui estão alguns exemplos:

```Javascript
//Atribuindo uma função anônima a uma variável:

const minhaFuncao = function() {
  console.log("Esta é uma função anônima.");
};
```

```Javascript
//Passando uma função anônima como argumento para outra função:

setTimeout(function() {
  console.log("Esta é uma função anônima passada como argumento.");
}, 1000);
```

```Javascript
//Usando uma função anônima como uma expressão de retorno em uma função de ordem superior:

function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

const resultado = executarOperacao(5, 3, function(x, y) {
  return x + y;
});
```

<br>

- Função Recursiva

Uma `função recursiva` é uma função que se chama a `si mesma` durante sua execução. Em outras palavras, é uma função que contém uma chamada para si mesma dentro do seu `próprio corpo`. Essa técnica é conhecida como `recursividade`.

Um exemplo clássico de função recursiva, é o cálculo do `fatorial` de um número. A `função fatorial` é definida de forma `recursiva`:

```Javascript
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

```

---

### _ENUNCIADO_

No arquivo `script.js`, siga as etapas abaixo:

1. Crie uma `função anônima`, para:
    - Calcular o `fatorial` de um número, `informado` pelo usuário

---

### _OBSERVAÇÕES_

- **O resultado deve ser exibido, numa tag `<p>` dentro de uma `<div>`**
- **Utilize o `DOM` para resolver o exercício**
- **Utilize uma chamada de `função recursiva`**