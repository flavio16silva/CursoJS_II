//Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar

ParImpar(10)

function ParImpar(numero) {                 //parametro
  for (let i = 0; i <= numero; i++) {       //laço
      if(i % 2 === 0){
          console.log(`O numero ${i} é par`)
      } else {
          console.log(`O numero ${i} é impar`)
      }
}
}
