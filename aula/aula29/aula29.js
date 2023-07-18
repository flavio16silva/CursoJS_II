//OPERADOR SPREAD

//ARRAY DE MODELO PARA EXEMPLOS
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

console.log('---- Array Primeiro -----')
console.log(primeiro)

console.log('---- Array Segundo -----')
console.log(segundo)

console.log('---- Array Combinado -----')
const junto = primeiro.concat(segundo) //Primeiro array concatenado com o segundo array.
console.log(junto) //impressao na tela dos 2 arrays juntos

//Slice

console.log('---- Array Slice -----')
const cortado = junto.slice()
console.log(cortado)

//Spread
//Percorre o array e adiciona cada valor singular um a um, formando um novo array.
//operator para copiar os elementos de um array em outro:
//[...arrayName].
//Exemplo [...primeiro], que irá criar uma nova cópia do array "primeiro".

console.log('---- Array com uso do Spread -----')
const unidos = [...primeiro, ...segundo]
console.log(unidos)

//Com o uso do Spread podemos fazer inserções no array, como por exemplo:
const inicio = [10, 20, 30]
const fim = [40, 50, 60]
const tudo = [...inicio, 'a', ...fim, '&']
console.log('---- Array com uso do Spread (Inserção de strings) -----')
console.log(tudo)

console.log('---- Array com uso do Spread (Clonagem de array) -----')
const cloneArray = [...tudo] //Executando clonagem a partir do exemplo anterior.
console.log(cloneArray)

//Exercicio:
console.log('---- Exercicio -----')
const um = [1, 2, 3]
const dois = [4, 5, 6]
const todos = um.concat(dois)
console.log(todos)
const povo = [...um, '%', ...dois]
console.log('---- Exercicio: Inclusão de Caracter -----')
console.log(povo)
