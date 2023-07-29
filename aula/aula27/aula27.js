// Esvaziando um Array

//const numeros = [1, 2, 3, 4, 5, 6] - um valor constante não pode ser reatribuido.

//Solução 1:
//reatribuir um valor, ou reinstanciar
//Um array é um objeto, ele é um tipo de referência.
console.log('-------REATRIBUIR O VALOR, APAGAR ARRAY ----------')
let numeros = [1, 2, 3, 4, 5, 6] //Já uma variavel let, pode ser reatribuida.
let outros = numeros //Somente apaga a referencia inicial ao passar para outro array.
console.log(outros) //não apaga o array

//Solução 2:
//Apagando as referencias do array. Pode ser o metodo mais simples e mais limpo de uso.
console.log('-------ATRIBUINDO VALOR ZERO AO ARRAY -----------')
numeros.length = 0 //Ao atribuir a zero vc tá apagando todas as referencias do array
console.log(numeros) // retorna o array vazio - []
console.log(outros) //também estará vazio  - []

//Solução 3:
//Podemos usar o metodo slice() - sempre pega um valor inicial e pode apagar quantos objetos nós queremos.
//Para saber quantos objetos temos dentro de um array basta usar .lenght
console.log('-------METODO SLICE() PARA APAGAR ARRAY --------------')
numeros.slice(0, numeros.length)
console.log(numeros)
console.log(outros)

//Solução 4:
//Usando o metodo pop() que irá retirar o último elemento do array. Onde geralmente só irá ocorrer uma vez.
//Para ocorrer mais vezes:
//while (numeros.lenght > 0), irá remover os valores do array
