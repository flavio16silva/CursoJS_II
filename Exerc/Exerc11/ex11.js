//Igualdade de Objetos


function Endereco(rua, cidade, cep) {
  this.rua = rua,
  this.cidade = cidade,
  this.cep = cep 
}

// === Declaração de Objetos
const enderecoPrimeiro = new Endereco('a', 'b', 'c')
const enderecoSegundo = new Endereco('a', 'b', 'c')
const enderecoTerceiro = enderecoPrimeiro

// ==== Comparando se as propriedades são iguais
function saoIguais(enderecoPrimeiro, enderecoSegundo) {
  return enderecoPrimeiro.rua === enderecoSegundo.rua &&
         enderecoPrimeiro.cidade === enderecoSegundo.cidade &&
         enderecoPrimeiro.cep === enderecoSegundo.cep  
}

//passando o nome da função e os parametros - para retornar um boolean(true/false)
console.log(saoIguais(enderecoPrimeiro, enderecoSegundo)) 


// ====== Comparando se a referencia do objeto aponta para o mesmo local de memoria
function enderecoMemoria(enderecoPrimeiro, enderecoSegundo) {
  return enderecoPrimeiro === enderecoSegundo
}

//passando o nome da função e os parametros - para retornar um boolean(true/false)
console.log(enderecoMemoria(enderecoPrimeiro, enderecoSegundo))