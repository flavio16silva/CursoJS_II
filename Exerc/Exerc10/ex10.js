//Objeto Endereço

//Criar objeto endereço que contenha:
//Rua, Cidade, CEP
//exibirEndereco(endereco)


//Definindo o objeto:
let morada = {
  rua : 'Nossa Senhora do Amparo',
  cidade: 'Salvador',
  bairro: 'cabula',
  CEP: 41197100,
 }

//Exibindo as informações que estão dentro do Objeto - morada:
function exibirEndereco(morada){      //passando 'morada', como parametro
  for(let chave in morada){           //Uso do loop 'for in', para podermos ter acesso as propriedades do objeto 
    console.log(chave,morada[chave])  //retorna a propriedade e o valor. 
  }
  
}

exibirEndereco(morada)               //Chamando a função: exibirEndereco com uso do parametro: morada


