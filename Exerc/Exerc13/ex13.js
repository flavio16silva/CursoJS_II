// Função Construtor - Exercicio

//Criar um 'objeto' de postagem com as seguintes propriedades:
/*
Titulo, Mensagem, Autor, Visualizações, 
Comentários
  (autor, mensagem)
  estaAoVivo
*/

//Função Construtor sempre começar com letra maiuscula.
//Incluir no maximo 3 parametros
function Postagem(titulo, mensagem, autor){
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes = 0,
  this.comentarios = [
    {autorA: 'Zé', mensagem: 'Tudo certo'},
    {autorB:'Jo', mensagem: 'Olá Mundo'}
  ],
  this.estaaovivo = false
  
}

let postagem = new Postagem('Indo', 'Fala agora', 'Ze', 10)
console.log(postagem)







