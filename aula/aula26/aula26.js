// Removendo elementos do Array

const numeros = [1, 2, 3, 4, 5, 6]
numeros.splice() 
numeros.unshift()
numeros.push()

//Removendo numero no INICIO do Array
console.log('---- INICIO DO ARRAY ------')
const primeiro = numeros.shift()
console.log(`O número ${primeiro} foi removido`)
console.log(numeros)

//Removendo numero no MEIO do Array
console.log('---- MEIO DO ARRAY ------')
const meio = numeros.splice(2,1)
console.log(`O número ${meio} foi removido`)
console.log(numeros)

//Removendo numero no FINAL do Array
console.log('---- FINAL DO ARRAY ------')
const ultimo = numeros.pop()
console.log(`O número ${ultimo} foi removido`)
console.log(numeros)