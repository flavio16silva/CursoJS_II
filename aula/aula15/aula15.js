//Função de Construtor===============================================

//Camel Case - umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria, cor){
  return{
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    cor,
    ligar(){
      console.log("Fazendo Ligação...")
    }
  }
}


//Criando um objeto atraves desse metodo===================================
//Pascal Case - UmDoisTresQuatro

//Para que essas propriedades abaixo funcionem, devem ser passadas dentro do construtor. E assim serão tratadas como parametros e/ou argumentos. 
function Celular(marcaCelular,tamanhoTela,capacidadeBateria,cor) {
        //Declarando o objeto
        this.marcaCelular = marcaCelular,                 //"this.propriedade" que deseja definir
        this.tamanhoTela = tamanhoTela,                    //'this', é usado para referência um objeto
        this.capacidadeBateria = capacidadeBateria,
        this.cor = cor,
        this.ligar = function(){                            //Podemos também inserir um metodo ou uma função
                console.log("Fazendo ligação...")          //Aqui inserimos o código do bloco que será executado
    }                   
}
//Na função acima não tem o 'return', ela apenas define as propriedades e metodos.



//Criando o objeto, após as definições acima da função Celular ==============================

const celular = new Celular('asus',5.5, 5000,'azul')
//A palavra chave é new: criando, instanciando um objeto passando todas as propriedades que foram informadas na 'function Celular', atarves de um parametro: marcaCelular,tamanhoTela,capacidadeBateria,cor já definidos. 
console.log(celular)                                          //Aqui será exibido na tela um celular com todas as suas propriedades ('asus',5.5, 5000,'azul')

//A grande diferença entre:
//Functions Factory: Faz a criação dentro da prórpia função, retornando um objeto novo (return).
//Functions Construtors: Faz a criação de um objeto novo atraves do 'new', no momento que irá instanciar.