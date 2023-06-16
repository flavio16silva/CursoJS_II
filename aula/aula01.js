console.log('========Primeiros Passos================')
console.log('Bem-vindo ao Curso!')

console.log('=========Impressão de Variavel==============')
let idade = 5
console.log(idade)

let altura = 90
console.log(`Sua altura é: ${altura}`)

console.log('===========Mudanças de valores na Variavel=================')
//Variavel "let" com mudanças de valores
let valorIngresso = 20
valorIngresso = 90
console.log(valorIngresso)

console.log('===========Variaveis Constantes=================')
//Variaveis Constantes
const Ingresso = 20
//Ingresso = 90
console.log(`O valor do Ingresso é: ${Ingresso}`)

//Tipos Primitivos
let nome = 'Flavio' //String
let anos = 25 //Number
let taAprovado = true //Booleano
let sobrenome = undefined //Indefinido
let corSelecionado = null //Nulo

console.log('============Objetos================')
//Objetos
let pessoa = {
  //chave ou identificador: valor
  nome: 'Flavio',
  sobrenome: 'Silva',
  anos: 25,
  profissao: 'programador',
  taAprovado: true,
  bairro: 'Aguas Claras'
}
console.log(pessoa)

console.log('=============Arrays===============')
//Arrays
let familia = ['Joao', 25, 'jovem', 'morador']
let cores = ['marrom', 'cinza', 'vermelho', 'amarelo', 'azul']
//Indice         0      1     2        3
console.log(familia)
console.log(familia[3]) //impressão da posição 3
console.log(familia.length)
console.log(familia.sort())
console.log(cores)
console.log(cores[3])
console.log(cores.sort())

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

console.log('============Operadores Aritméticos================')
//Operadores
//Aritméticos
let salario = 50
console.log(salario)
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario)
console.log(salario % salario)

console.log('============Incremento e Decremento================')
//Incremento e Decremento
let peso = 90
console.log(`O valor do peso é:${peso++} `) //Pega a variavel e atribui o incremento (de mais 1) depois
console.log(`O valor do peso após o incremento é:${peso} `) //Na chamada da variavel mostra o incremento

let num = 10
console.log(`O valor de num é 10, com decremento é:${--num} `) //Já executa o decremento (de menos 1) antes da chamada

console.log('============Operadores de Atribuição================')
console.log('============/ += E -= /================')
//Operadores
//Atribuição
let teclado = 100
//teclado = teclado + 30
//teclado = teclado -30
//teclado += 30                        //soma os valores = Valor que esta sendo passado mais ele mesmo.
teclado -= 30 //subtrai os valores = Valor que esta sendo passado menos ele mesmo.
console.log(teclado)

console.log('============Operadores de Igualdade================')
console.log(
  `Esses números são identicos em valor e tipo (Numerico e Numerico) ( 1 === 1 ) - true`
) //Identicos em valor e tipo ===
console.log(
  `Esses números não são idênticos em valor e tipo (String e Numerico) ( '1' === 1 ) - false`
)

//Igualdade Tradicional
console.log(`Esses números são iguais ( 1 == 1 )`) //Iguais em valor e tipo ==
console.log(`Esses números são iguais ( '1'== 1 )`)

console.log('============Operadores Ternários================')
//Operadores
//Ternários
//Ser cliente premium é (>) 100 pontos. Se for (<=) 100 pontos, cliente comum
let pontos = 100
//              TESTE        TRUE      FALSE
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

console.log('============Operadores lógicos================')
//Operadores Lógicos
console.log(true && false)
console.log(true && true)

//Conjunção
console.log('============ Conjunção && ================')
let maiorIdade = true
let cnh = false
let podeDirigir = maiorIdade && cnh
console.log(podeDirigir)

//Disjunção
console.log('============ Disjunção && ================')
let maiorAltura = false
let Salto = true
let podePular = maiorAltura || Salto
console.log(podePular)

//Operador NOT (!)
console.log('============ Operador Not ! ==================')
let minhaIdade = false
let carteira = true
let fazerProva = minhaIdade || carteira
console.log('Pode aplicar prova:', fazerProva)

let pessoaRecusada = !fazerProva
console.log('Pessoa recusada:', pessoaRecusada)

//Comparações Não boleanos
//Falsy - são os seguintes valores:
/* 
underfined
null
0
false
'' - string vazio
NaN - Not a Number - Resulta em valores matemáticos inválidos e não compativeis.

Obs.: O operador lógico 'ou', irá avaliar sempre as primeiras condições:
Ex.: false || 1 || 0, retornará 1
*/

//Truthy - São diferentes dos valores acima.
console.log('============ Comparações Não boleanos ==================')
let corPersona = 'vermelho'
let corPadrao = 'azul'
let corPerfil = corPersona || corPadrao //basta ter uma das condições ser verdadeira.
console.log(corPerfil)

console.log('============ Exercicio 01 ==================')
let a = 'vermelho'
let b = 'azul'
console.log(`Primeira cor da letra a: ${a}`)
console.log(`Primeira cor da letra b: ${b}`)
let c = a
a = b
b = c
console.log(`Segunda cor da letra a: ${a}`)
console.log(`Segunda cor da letra b: ${b}`)

console.log('============ Condicionais do JS ==================')
console.log('============ IF e ELSE ==================')

//Condicional IF e ELSE
//Horas do dia
//let horaAtual = 19                //Forma Manual
let data = new Date()               //Data Atual
let horaAtual = data.getHours()     //Pegando a hora da data atual

if (horaAtual > 6 && horaAtual < 12){
  console.log("Bom dia!")
} else if(horaAtual > 12 && horaAtual < 18) {
  console.log('Boa tarde!') 
} else if (horaAtual > 18 && horaAtual < 24) {
  console.log('Boa noite!')
} else {
  console.log('Boa Madrugada!')
}

console.log('============ SWITCH E CASE ==================')
//acesso = comum, gerente e diretor
let acesso
acesso = 'novo'
switch (acesso) {
  case 'comum':
    console.log('acesso comum')
    break;

  case 'gerente':
    console.log('acesso gerente')
    break;

  case 'diretor':
    console.log('acesso diretor')
    break;  

  default:
    console.log('acesso negado')
    break;
}

console.log('============ LAÇO, LOOP, FOR ==================')
//for
for(let i = 5; i >= 1; i--) {
  if ( i % 2 !== 0) {
    console.log(`o valor de i, com resto diferente de zero é ${i}`)
  } else {
    console.log(`o valor de i, com resto igual de zero é ${i}`)
  }  
}

console.log('============ LAÇO, LOOP, WHILE ==================')




