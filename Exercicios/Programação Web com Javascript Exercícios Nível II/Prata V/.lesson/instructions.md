<p align="center">
    <img src="https://www.infnet.edu.br/infnet/wp-content/themes/infnet.homepage//assets/img/LogoInfnetRodape.png"/>
</p>

# Questão 14

### Utilize o arquivo _script.js_ para solucionar essa questão.

Crie uma função `getLocaleDate`, que retorna a data atual no formato localizado do seu navegador. Para tanto, utilize o parâmetro `navigator.language` para obter o idioma do navegador, e passe esse valor como parâmetro para a função `toLocaleDateString`.

### Exemplo

```javascript
const dataLocalizada = getLocaleDate();
console.log(dataLocalizada); // Mostra algo como '19/03/2023'
```