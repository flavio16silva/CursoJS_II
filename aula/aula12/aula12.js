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
  //console.log(chave) //impressão apenas das propriedades
  console.log(chave,gente[chave]) //impressão da propriedade e do valor
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

