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
    console.log(`o valor de i, com resto diferente de zero no laço FOR é ${i}`)
  } else {
    console.log(`o valor de i, com resto igual de zero no laço FOR é ${i}`)
  }  
}

console.log('============ LAÇO, LOOP, WHILE ==================')
//while
let i = 0           //variavel fora do laço
while (i < 5) {     //laço
  if( i % 2 == 0) { //condição
    console.log(`O valor de i, no laço WHILE é: ${i}`)
  }
  i++              //incremento
}

console.log('============ LAÇO, LOOP, DO-WHILE ==================')
//do-while
let passo = 0                      //inicialização da variavel
do {                               // faça 
  console.log(`Passo ${passo}`)    // bloco de lógica
  passo++                          // incremento
} while(passo < 10)                // enquanto

console.log('============ LAÇO, LOOP, FOR-IN ==================')
//for - in
const gente = {
  nome: 'Flavio',
  local: 'Casa',
  numero:  10
} 

for (let chave in gente) {
  //console.log(chave)
  console.log(chave,gente[chave])
}

const palheta = ['preto', 'caramelo', 'roxo', 'cinza']
for(let indice in palheta) {
  console.log(indice, palheta[indice])
}

console.log('============ LAÇO, LOOP, FOR-OF ==================')
//FOR-OF
const tinta = ['branco', 'marrom', 'laranja', 'lilas']
for(let textura of tinta){
  console.log(textura)
}

