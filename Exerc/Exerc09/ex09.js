 //Criar função para trabalhar com números primos
 
 mostrarPrimo(15)

 function mostrarPrimo(valor){
  for(i = 2; i <= valor; i++){
        if(NumeroPrimo(valor)) console.log(i)
    }
  }
  //if (primo) console.log(i)
 
 function NumeroPrimo(valor){
  //let primo = true
  for (let divi = 2; divi < i; divi++){ //Descartar o numero 2 e o proprio numero 
    if(i % divi === 0){
      //primo = false
      return false
    }
  }
      return true
 }   

 //Todo numero será divisivel por 1 e por ele mesmo