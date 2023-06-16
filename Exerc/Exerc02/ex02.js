console.log('============ Exercicio 02 ==================')
//Escreva uma função que usa 2 números e retorna o maior entre eles.

// let numero = max(2,2)

// function max(n1, n2) {
 
// if ( n1 == 0 && n2 == 0){
//   console.log('Por favor preencher com numero válido.')
// }else if (n1 > n2) {
//   console.log(`O número ${n1} é maior e o número ${n2} é menor.`)
// }else if (n2 > n1) {
//     console.log(`O número ${n2} é maior e o número ${n1} é menor.`)
// }else if(n1 == n2){
//     console.log(`Os números ${n1} e ${n2} são iguais e maiores.`)   
// }    

// }

//Forma resumida
let numero = max(2,8)

function max(n1, n2) {
  return n1 > n2 ? n1: n2
 
}
console.log(`O numero maior é ${numero}`)




