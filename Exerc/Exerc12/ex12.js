// Objeto Postagem de Blog

//Criar um 'objeto' de postagem de blog que vai conter as seguintes propriedades:
/*
Titulo
Mensagem
Autor
Visualizações
Comentários
  (autor, mensagem)
  estaAoVivo
*/

//Objeto criado
let meuBlog = {
  //propriedade: valor,
  titulo : `Primeiro Blog`,
  mensagemA : `Treinando o JavaScript`,
  mensagemB : `Programando`,
  autorA : `Fulano de Tal`,
  autorB : `Beltrano da Silva`,
  visualizacoes : 30,
  comentarios : [ //array sendo passado dentro do objeto
      {autorA: 'Fulano de Tal', mensagem:'Treinando o JavaScript'},
      {autorB : 'Beltrano da Silva', mensagem:'Programando'},
      {autorB : 'Beltrano da Silva', mensagem:'Treinando o JavaScript'},
 ],
 estaAoVivo : false
}

console.log(meuBlog) //impressao do objeto




