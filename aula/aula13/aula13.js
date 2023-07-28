console.log('============ FIZZ BUZZ ==================')

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não é divisivel por 3 ou 5 => Entrada
//Não é um número => 'Não é um número'

let resultado = fizzBuzz() //Digitar um valor aqui
console.log(resultado)

function fizzBuzz(i) {
  //for( let i = 1; i <= 10; i++ ) { //Forma automática pelo laço FOR
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }else if (i % 3 === 0) {
        console.log('Fizz')
    }else if (i % 5 === 0){
        console.log('Buzz')
    }else if (typeof i !== 'number'){
      console.log('Não é um número')
    }else {
      console.log(`É o número: ${i}`)
    }
  }
//}
