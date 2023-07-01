//Funções de Fábrica - Factory Functions============================
const celular = {
  marcaCelular: 'ASUS',
  tamanhoTela: 150,
  bateria: 5000,
  cor: 'azul'
}

//Encapsula essa informação, dentro de um metodo que cria um objeto.

function criarCelular(marcaCelular, tamanhoTela, bateria, cor){
  return {                         //retornando o objeto, um novo objeto
  //const celular = {
    marcaCelular, //marcaCelular, //'ASUS',    //deve ser um parametro do metodo, para ficar dinâmico.
    tamanhoTela,  //tamanhoTela,  // 150,      Quando a "chave:valor" são iguais, basta deixar apenas um.
    bateria,     //bateria,      //5000,
    cor,         //cor           //'azul'
    
    ligar(){
      console.log('Fazendo ligação...')
    }
  }

  //return celular
}

//metodo sendo chamado - criarCelular(), com os parametros sendo passados. Assim nos temos um objeto pronto.
criarCelular('ASUS', 6.5, 5000, 'Azul') 

//Armazenando o metodo acima numa variavel:
const celularTop = criarCelular('ASUS', 6.5, 5000, 'Azul')
console.log(celularTop) 

//Otimizando a criação de objetos, havendo como vantagem o encapsulamento de todas as informações num unico metodo.
 
  