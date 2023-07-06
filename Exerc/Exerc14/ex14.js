//Faixa de Preço

//Criar um array de objetos de faixa de preço para ser usado em site como mercado livre.

//Opção 01
//====  Criando um array de objetos: ===============
let faixas = [
  {tooltip: 'ate R$700', valorminimo: 0, valormaximo: 700},
  {tooltip: 'De R$700 ate R$1000', valorminimo: 700, valormaximo: 1000},
  {tooltip: 'De R$1000 ate R$9999', valorminimo: 1000, valormaximo: 9999}
]

//Opção 02
//===== Usando Factory Function - Função de Fabrica ===========
  function criaFaixaPreco(tooltip, minimo, maximo){
    return {                                          //retornando um objeto com as informações
        tooltip,
        minimo,
        maximo
    }
  }

//Declarando faixas2 que é um array
  let faixas2 = [                                  //chamando o criaFaixaPreco e passa os parametros
  criaFaixaPreco('a', 1, 100),
  criaFaixaPreco('b', 100, 1000),
  criaFaixaPreco('c', 1000, 9999),
]  

//Opção 03
//===== Usando Constructor Function - Função Construtor ===========
function FaixaPreco(tooltip, minimo, maximo){
  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo
}

//Construindo outro array com as informações acima:
  let faixas3 = [
    //passando os parametros
    new FaixaPreco('Oi',100,200),
    new FaixaPreco('Ola',200,300),
    new FaixaPreco('Opa',300,400)                       
  ]

//Impressao das 3 funções:  
console.log(faixas)
console.log(faixas2)
console.log(faixas3)
