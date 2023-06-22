console.log ('=========== Calcular Velocidade do Carro ===========')

let velocidade = radar(200)                          //inicialização da variavel
//console.log(velocidade)

function radar(velocidade) {                       //passagem do parametro
  if (velocidade >= 10 && velocidade <= 40){
     console.log( `A velocidade de ${velocidade}km esta abaixo do limite.`)

  }else if (velocidade > 40 && velocidade <= 60 ){
    console.log(`A velocidade de ${velocidade}km esta dentro do limite.`)

  }else if( velocidade >= 60 && velocidade <= 80) {
      console.log(`A velocidade de ${velocidade}km esta abaixo do limite.`)

  }else if( velocidade >= 80 && velocidade <= 100) {
        const pontuacao = Math.floor(((velocidade - 70) / 5))                   //Limite Máximo 70km. A cada 5km, ganha 1 ponto na CNH.
           if (pontuacao >= 3) {                                                //Maior que 3 pontos, CNH suspensa.
           console.log( `A velocidade de ${velocidade}km esta acima do limite. Você possui ${pontuacao} pontos na CNH.`)    
          }   

  }else if (velocidade > 100) {
        const pontuacao = Math.floor(((velocidade - 70) / 5)) 
        if (pontuacao >= 12) {                                
      console.log(`Você estava a ${velocidade}km/h e recebeu ${pontuacao} pontos. CNH Suspensa!`)
    } 
  }
}

