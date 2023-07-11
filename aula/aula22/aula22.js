// INTRODUÇÃO A ARRAY
//ASSUNTOS DA AULA:
//Adicionar novos elementos
//Encontrar elementos
//Remover elementos
//Dividir elementos
//Dividir arrays
//Combinar arrays


// ======= Adicionar novos elementos ==============

const numeros = [1, 2, 3]

//Inicio
console.log('---------- unshift ---------------')
numeros.unshift(0) //adiciona no começo do array o valor passado
console.log(numeros)

//Meio
console.log('---------- splice ---------------')
numeros.splice(1, 0, 'a') //adiciona no meio do array o valor passado
//Indice (onde sera incluido o valor);
//Nº de indices a ser deletado = 0;  - não deletará nada
//para deletar (incluir  nº de indices), valor a ser incluido.
console.log(numeros)

//Final
console.log('---------- push ---------------')
numeros.push(4) //adiciona no final do array o valor passado
console.log(numeros)





