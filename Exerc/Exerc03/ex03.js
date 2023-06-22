console.log ('=========== Calcular Velocidade do Carro ===========')

let velocidade = radar(195)                          //inicialização da variavel
//console.log(velocidade)

function radar(velocidade) {                         //passagem do parametro
  const velocidadeMax = 70                           //inicialização da variavel 
  const pontosKm = 5                                 //inicialização da variavel

  if (velocidade <= 40){
     console.log( `A velocidade de ${velocidade}km é muito baixa, aumente a velocidade.`)

  }else if (velocidade <= 60){
    console.log(`A velocidade de ${velocidade}km esta dentro do limite.`)

  }else if( velocidade <= 80) {
      console.log(`A velocidade de ${velocidade}km esta abaixo do limite.`)

  }else if(velocidade <= 100) {
    const pontuacao = Math.floor(((velocidade - velocidadeMax) / pontosKm))     //Limite Máximo 70km. A cada 5km, ganha 1 ponto na CNH.
      if (pontuacao >= 3) {                                                     //Maior que 3 pontos, CNH suspensa.
      console.log( `A velocidade de ${velocidade}km esta acima do limite. Você possui ${pontuacao} pontos na CNH.`)    
          } else {
            console.log(`Com a velocidade de ${velocidade}km, você teve ${pontuacao} pontos na CNH.`)
          }  

  }else if (velocidade > 100) {
        const pontuacao = Math.floor(((velocidade - velocidadeMax) / pontosKm)) 
        if (pontuacao >= 12) {                                
      console.log(`Você estava a ${velocidade}km/h e recebeu ${pontuacao} pontos. CNH Suspensa!`)
    } 
  }
}

