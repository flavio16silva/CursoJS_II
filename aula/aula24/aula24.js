// INTRODUÇÃO A ARRAY
//ASSUNTOS DA AULA:
//Adicionar novos elementos
//Encontrar elementos
//Remover elementos
//Dividir elementos
//Dividir arrays
//Combinar arrays



//Encontrar elementos (Tipos de Referência)
console.log('------------ Encontrar elementos (Tipos de Referência) ----------------')
let array = [5, 12, 8, 130, 44]

//Find = Retorna o valor do primeiro elemento no array onde o predicado é verdadeiro e indefinido caso contrário. 
console.log('------------ Exemplo 1 ----------------')
let found = array.find(function(element) {
  return element > 10
}) 
console.log('O primeiro elemento dentro do array > 10 é:',found) //Retorna o primeiro elemento maior que 10 dentro do array

console.log('------------ Exemplo 2 ----------------')
const marcas = [
  {id:1, nome: 'ford'}, //Objetos dentro do array
  {id:2, nome: 'VW'},
  {id:3, nome:'mercedes'},
  {id:4, nome: 'GM'},
  {id:5, nome: 'VW'}
]

const valor = marcas.find(function(marca){
  return marca.nome === 'VW'
})
console.log(valor) //Retorna o objeto


