console.log('==============Função==============')
//Função
//Para nomeação de funções usar: verbo + substantivo
let corSite = 'azul' //Variavel global
function resetaCor() {
  corSite = 'amarelo' //execução do bloco da função
}
console.log(corSite)
resetaCor() //chamando a função
console.log(corSite) //impressão do valor da função

console.log('=============Parametros na Função===============')
//Parametros na Função
let corView = 'vermelho'
function mudarCor(tinta, tonalidade) {
  //passagem do parametro, pela variavel "tinta"
  corView = tinta + ' ' + tonalidade //passagem da variavel "tinta" como argumento da função - o que será executado dentro da função
}
console.log(corView) //exibindo cor atual - vermelho
mudarCor('rosa', 'escuro') // passando uma string
console.log(corView) //mudança na cor e tonalidade

console.log('============Tipos de Função================')
//Tipos de Função
//1º Tipo - Função que executa uma tarefa e não dá retorno
function darNome() {
  console.log('Flavio')
}
darNome() //executando, chamando a função

//2º Tipo - Função que executa uma tarefa, calculo ou operação e dá retorno
function SomarComCinco(valor) {
  //passagem do parametro
  return valor + 5 //retorno função
}
console.log('== execução da função com o valor passado no parametro ==')
console.log(SomarComCinco(10)) //Opção 1 - execução da função com o valor passado no parametro.

console.log('== passando a função(com o parametro), dentro de uma variavel ==')
let resultado = SomarComCinco(10) //Opção 2 - passando a função(com o parametro), dentro de uma variavel
console.log(resultado) //retorno função. O retorno do resultado, que é impresso.