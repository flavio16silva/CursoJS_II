//Nota Escolar
//Obter a media apartir de um Array


//0-59: E
//60-69: D
//70-79: C
//80-89: B
//90-100: A 

const array = [70, 80, 50]

console.log(mediaAluno(array))

function mediaAluno(notas) {
  const media = calcularMedia(notas)

  //Onde a media se encaixa: 
    if (media < 59) return 'E'       
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    return 'A'
    
}

function calcularMedia(array) {
  let soma = 0                     //recebe os valores do array
  for(let valor of array){         // Loop FOR para soma dos valores 
    soma += valor                  // Atribuição dos valores aqui dentro
  }
  return soma / (array.length)     //tamanho do array
}

