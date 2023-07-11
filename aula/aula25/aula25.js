// INTRODUÇÃO A ARRAY
//ASSUNTOS DA AULA:
//Adicionar novos elementos
//Encontrar elementos
//Remover elementos
//Dividir elementos
//Dividir arrays
//Combinar arrays


//arrow functions ou funções de seta
const marcas = [
  {id:1, nome: 'ford'}, //Objetos dentro do array
  {id:2, nome: 'GM'},
  {id:3, nome:'mercedes'},
  {id:4, nome: 'VW'}
]
console.log('----- Antes da Arrow Function ----------')
console.log(marcas.find(function(marca){
  return marca.nome === 'ford'
}))

console.log('----- Depois da Arrow Function ----------')
console.log(marcas.find((marca) => marca.nome === 'GM'))



