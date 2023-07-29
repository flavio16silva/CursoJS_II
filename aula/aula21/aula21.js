// DATE

//retorna no console a data atual - new Date()
console.log('==== DATA ATUAL ====')
const dataNova = new Date()
console.log(dataNova)

//Definindo a Data
console.log('==== DATA DEFINIDA ====')
const dataFixa = new Date('Julho 03 2023 22:05')
console.log(dataFixa)

//Passando os parametros para o JS criar a data
//Os meses começam a serem contados de 0,1,2,3...
console.log('==== DATA COM PASSAGEM DE PARAMETROS PARA O JS CRIAR A DATA ====')
const dataParam = new Date(2023, 6, 3, 22, 10)
console.log(dataParam)

//Informações do objeto Data, atraves do uso de varios metodos
// Alterando o ano
console.log('==== DATA = Alterando o ano ====')
dataParam.setFullYear(2050)
console.log(dataParam)
//Sun Jul 03 2050 22:10:00 GMT-0300 (Horário Padrão de Brasília)

//Extraindo informações do objeto Data
dataParam.getMinutes(2023, 6, 3, 22, 10)
//retorna 10 minutos

//Transformando em String
dataFixa.toDateString()
//retorno no console: 'Mon Jul 03 2023'

//Retornando o Tempo relacionado a zona = GMT que é o tempo local
dataFixa.toTimeString()
//retorno: '22:05:00 GMT-0300 (Horário Padrão de Brasília)'

//Modo que transfere informação do cliente para o servidor. Informação de Data no Banco de Dados.
dataFixa.toISOString()
//retorno: '2023-07-04T01:05:00.000Z'
