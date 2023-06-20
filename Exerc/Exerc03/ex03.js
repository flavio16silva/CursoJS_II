console.log ('=========== Calcular Velocidade do Carro ===========')

let velocidade = radar(200)                          //inicialização da variavel
console.log(velocidade)

function radar(velocidade){                       //passagem do parametro
  if (velocidade <= 10 && velocidade <= 40){
      console.log('Abaixo do limite de velocidade')
  }else if (velocidade > 40 && velocidade <= 60 ){
    console.log('Dentro do limite de Velocidade')
  }else if( velocidade > 60 && velocidade <= 80) {
      console.log('Cuidado, reduzir velocidade')
  }else if (velocidade > 80 && velocidade < 100) {
      console.log('Velocidade acima do permitido')
  }else if (velocidade > 100){
      console.log('Pare o veículo')
  }
}
