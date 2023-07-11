// INTRODUÇÃO A ARRAY
//ASSUNTOS DA AULA:
//Adicionar novos elementos
//Encontrar elementos
//Remover elementos
//Dividir elementos
//Dividir arrays
//Combinar arrays



//Encontrar elementos (Primitivos)
console.log('-------- Encontrar Elementos = IndexOf = Primeira Ocorrência --------------')
const numeros = [1, 2, 3, 4, 5] // Retorna o index da primeira ocorrência do valor dentro do array.
//numeros.indexOf(4) //Retornará -1 senão existir o valor no array.
console.log(numeros.indexOf(4)) //Caso informe uma string '1', ele também não irá encontrar. 
console.log(numeros.indexOf(3) !== -1) //ou
console.log(numeros.includes(2)) // Determina se uma array inclui um determinado elemento, retornando 'true ou false' conforme apropriado.

console.log('-------- Encontrar Elementos = IndexOf = Última Ocorrência --------------')
const numerico = [1, 2, 3, 4, 1, 6, 1] // Retorna o index da última ocorrência do valor dentro do array.
numerico.lastIndexOf(1)
console.log(numerico.lastIndexOf(1)) //Última ocorrência do numero 1 nesse exemplo ocorre no index 6.




