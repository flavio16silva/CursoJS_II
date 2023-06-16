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