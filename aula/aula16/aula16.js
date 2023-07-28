//Natureza Dinamica de Objetos

//Criando um objeto
const mouse = {
  cor: 'verde',
  marca: 'login',
  modelo: 'top'
}
//Pelo dinamismo do JS se tentarmos "INCLUIR/ADICIONAR" uma nova propriedade como exemplo abaixo, já irá mostrar no console.log.
mouse.preco = 50 //Exemplo de inclusão de nova propriedade com dinamismo do JS.
//mouse.tipo = 'redondo'
//Da mesma forma sobre o objeto acima, podemos INCLUIR/ADICIONAR um metodo conforme exemplo abaixo:
//Função:
mouse.trocarPreco = function () {
  console.log('Mudando o preço do mouse')
}

//Objetos no JS são totalmente dinâmicos, caso deseje APAGAR/DELETAR uma propriedade ou uma função é possivel.
//Aqui DELETAMOS a propriedade 'cor', como exemplo.
delete mouse.cor //Ex.: DELETANDO propriedade
delete mouse.trocarPreco //Ex.: DELETANDO metodo
//delete mouse.tipo
console.log(mouse) //Na impressão vemos que o objeto já encontra-se pronto.
