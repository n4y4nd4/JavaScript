<p align="center">
    <img src="https://www.infnet.edu.br/infnet/wp-content/themes/infnet.homepage//assets/img/LogoInfnetRodape.png"/>
</p>

# Teste de Performance 1

## Exercício 02

### _CONTEXTO:_

Muitas linguagens de programação, os arrays ou vetores são implementados como `blocos contíguos de memória` e o índice é usado para acessar diretamente um endereço de memória. O `primeiro` elemento de um array começa no endereço de memória mais baixo, que é frequentemente representado pelo `índice zero`.

Além disso, o uso do `índice zero` em arrays pode proporcionar uma série de `vantagens`, como simplificar a aritmética do ponteiro, aumentar a eficiência e melhorar a compreensão de certas operações. No entanto, isso pode ser uma fonte de `confusão` para programadores `iniciantes`, já que `difere` da contagem natural humana.

### _EXEMPLO:_

```javascript
//CONTAGEM HUMANA
[1, 2, 3, 4, 5]
["maçã", "banana", "laranja", "acerola", "melancia"]

//SAÍDA -> ÍNDICE
//1 e maçã -> posição 1
//2 e banana -> posição 2
//3 e laranja -> posição 3
//4 e acerola -> posição 4
//5 e melancia -> posição 5
  

//CONTAGEM DO COMPUTADOR
[1, 2, 3, 4, 5]
["maçã", "banana", "laranja", "acerola", "melancia"]

//SAÍDA -> ÍNDICE
//0 e maçã -> posição 1
//1 e banana -> posição 2
//2 e laranja -> posição 3
//3 e acerola -> posição 4
//4 e melancia -> posição 5
```

---

### _ENUNCIADO:_

No arquivo `script.js`, siga as etapas abaixo:

1. `Imprima` o tamanho deste array na página HTML
2. Acesse a `posição 2` e `modifique` o país dessa posição

---

### _OBSERVAÇÕES:_

- **`Continue` o que foi feito no exercício `1`**
- **Utilize `console.log` para imprimir o `tamanho` do array**
- **Siga o exemplo (`contagem do computador`), para acessar a `posição 2`**
- **Não crie outros arquivos, apenas utilize os arquivos presentes no `Files`**