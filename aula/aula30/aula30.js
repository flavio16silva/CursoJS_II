//ITERANDO UM ARRAY - ForEach

//Populando o array
//FOR OF
console.log('--- Populando o Array: FOR OF ---') 
const numeros = [1, 2, 3, 4, 5]
  for(numero of numeros){
    console.log(numero) //Imprimindo cada numero do array. Caso inclua console.log(numeros), irá imprimir o array 5 vezes na tela. 
  }

//Metodo forEach  
//() para percorrer um Array e executar uma função em cada elemento. O método forEach()
//recebe dois parâmetros: a primeira é a callback function que será chamada com os elementos de cada vez; 
//a segunda é opcionalmente passado como argumento thisObject, que define o objeto no qual as funções serão chamadas 
//(se não especificado, ele assume o valor global).

//A sintaxe básica da declaração desse método é mostrada abaixo:
//arr.forEach(callback[,thisArg])

//Exemplo:
console.log('--- ForEach ---') 
numeros.forEach(function(numero){ //parametro
  console.log(numero)             //impresso na tela
})


//Transformando em função de seta, atraves do ECMA Script6
console.log('--- Função de Seta ---') 
numeros.forEach((numero) => console.log(numero))

//Inclusão do Indice no parametro:
console.log('--- Função de Seta: Inclusao de Indice ---')
numeros.forEach((numero,indice) => console.log(`O numero é ${numero}`,`e o indice é ${indice}`))

