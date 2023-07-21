//Validador de Convite

function ValidarEntrada() {
  //value: é o valor que esta dentro do input.
  let nome = document.getElementById('itexto').value
  //let convite = document.getElementById('iconvite').value

  //Lista de convidados incluidos no array
  ConvidadosEventos = ['Paulo', 'Joao', 'Maria', 'Pedro', 'Sara', 'Claudia']

  if (ConvidadosEventos.includes(nome)) {
    //alert("Preencha o campo Nome!")
    //return false;
    document.getElementById('PermissaoDeEntrada').innerText =
      'Você tem convite!'
  } else {
    document.getElementById('PermissaoDeEntrada').innerText =
      'Você não tem convite.'
  }
}
