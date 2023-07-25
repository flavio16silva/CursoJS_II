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
console.log('============ Disjunção || ================')
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

//let oi  = false || 1 || 0
//console.log(oi)
