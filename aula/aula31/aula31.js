//COMBINANDO ARRAY

//JOIN = JUNTAR
//Juntando os valores baseado em alguma string

console.log('--- ARRAY PRINCIPAL ---')
const numeros = [1, 2, 3, 4, 5, 6, 7]
console.log(numeros)

console.log('--- JOIN ---')
const combinado = numeros.join('.') //INCLUSAO DO .
console.log(combinado)

//SPLIT = SEPARANDO UMA FRASE EM PALAVRAS
console.log('--- SPLIT ---')
const frase = 'ola bem vindos a aula'
const separa = frase.split(' ')
console.log(separa)

console.log('--- JOIN: JUNTANDO COM TRAÇOS ---')
console.log(separa.join('-')) //JUNTANDO NOVAMENTE POR TRAÇOS.


