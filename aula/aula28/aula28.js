// Combinando e Cortando array

// Concatenação de arrays (junta os dois em um novo)
const primeiro = [1, 2, 3, 4]
console.log('--- Primeiro Array ---')
console.log(primeiro)

console.log('--- Segundo Array ---')
const segundo = [5, 6, 7, 8]
console.log(segundo)

const concatenar = primeiro.concat(segundo)
console.log('---- Os arrays são juntos em novo array ---')
console.log(concatenar)


//Dividir um array
//Para dividir um array, usamos o metodo slice()
//Passamos o indice final e o inicial e dentro desse intervalo ele extraira esses valores para voce.

concatenar.slice(1,3) //começando do indice 1 e indo até o indice 3. 
//Nesse metodo ele nuca extrai o ultimo valor do indice. Sempre irá até o último mesmo 1.
//Colocando dentro de uma variavel:
const junto = concatenar.slice(1,3)
console.log(junto)

//Podemos também com uso do slice(), passar apenas um indice.
const unido = concatenar.slice(1)
console.log(unido)

//Caso o slice()seja passado sem valores ele irá copiar todo o array.

//OBJETOS NO ARRAY
//Ao se trabalhar com objetos ele irá copiar os valores e a referencia também. 

console.log('------ MUDANDO OS VALORES DOS IDS DENTRO DOS OBJETOS ----------')
const um = [{id:1}]
um[0].id = 10
console.log("Objeto no índice zero antes da alteração:", um)

const dois = [
  { id : 1 },
  { id : 2 },
  { id : 3 }
]
dois[1].id = 5
console.log("Objetos na posição 1 antes da alteração", dois);





