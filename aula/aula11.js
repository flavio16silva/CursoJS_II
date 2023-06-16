console.log('============ SWITCH E CASE ==================')
//acesso = comum, gerente e diretor
let acesso
acesso = 'novo'
switch (acesso) {
  case 'comum':
    console.log('acesso comum')
    break;

  case 'gerente':
    console.log('acesso gerente')
    break;

  case 'diretor':
    console.log('acesso diretor')
    break;  

  default:
    console.log('acesso negado')
    break;
}