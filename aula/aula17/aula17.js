//CLONANDO OBJETOS
//Criar copia de objetos, que já foram criados anteriormente.

//========= 1º FORMA DE CLONAR OBJETO =====================
//OBJETO
const celular = {
  marcaCelular: 'samsung',
  tamanhoTela: 5.5,
  cor: 'azul',
  bateria: 5000,
  ligar: function () {
    console.log('Fazendo ligação...')
  }
}

//Vai pegar o primeiro parametro 'alvo', para onde que vai esse objeto que iremos copiar.
//E de onde irá copiar essas informações, de onde irão copiar as propriedades e metodos.
//celular: objeto sendo passado como 2º parametro

//Armazenando o 'object.assign' em um novo objeto: 'const novoObjeto'

//========== Nesse momento testando a impressão do objeto clonado ================
//const novoObjeto = Object.assign({},celular)
//console.log(novoObjeto) //Impressão para ver o novoObjeto
 

// ====== Podemos ADICIONAR novas propriedades ao objeto ===============
 const novoObjeto = Object.assign({
  formato: 'slim'
   },celular)
console.log(novoObjeto) //Impressão do novoObjeto, com a nova propriedade.


//========= 2º FORMA DE CLONAR OBJETO =====================
//{...NOME_DO_OBJETO} AQUI COLOCAMOS OS 3 PONTOS E O NOME DO OBJETO QUE SERÁ COPIADO, JUNTO COM SUAS PROPRIEDADES E METODOS.
const objetoDois = {...celular}
console.log(objetoDois)

