//Criar função somar que retorna a soma de todos os multiplos de 3 e 5

/* let list = 10
let a = 3
let b = 5
let som = 0
let arraylist = []

soma(list)
function soma(list){
   for (i = 0; i <= list; i++){
    if (i % a === 0 || i % b === 0){         
        arraylist.push(i)
    } 
  }
}  
  for (i = 0; i < arraylist.length; i++){
        som += arraylist[i]
    }
   console.log(arraylist)
   for (i in arraylist){
        if (i % a === 0)  {  
    console.log(arraylist[i])
        }
   } 

console.log(`a soma dos multiplos é: ${som}`)
console.log(`Comprimento do array é: ${arraylist.length}`) */

adicao(10)
function adicao(list) {
  let multiplos3 = 0
  let multiplos5 = 0
  for (i = 0; i <= list; i++) {
    if (i % 3 === 0) {
      multiplos3 += i
    } else if (i % 5 === 0) {
      multiplos5 += i
    }
  }

  console.log(`A soma dos multiplos de 3 é:`, multiplos3)
  console.log(`A soma dos multiplos de 5 é:`, multiplos5)
  console.log(`A soma dos multiplos é:`, multiplos3 + multiplos5)
}
