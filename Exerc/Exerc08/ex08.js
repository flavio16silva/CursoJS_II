// Função que exibe a quantidade de * que uma linha possui

mostrarAsterisco(10)

function mostrarAsterisco(linhas){
  let valor = ''
  for(let linha = 1; linha <= linhas; linha++){
    valor += '*'
    console.log(valor)
    
  }
}