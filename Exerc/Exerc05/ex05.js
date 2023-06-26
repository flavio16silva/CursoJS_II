//Criar um metodo para ler propriedades de um objeto e exibir somente as propriedades do tipo STRING que estão no objeto. 

//Objeto carro
const carro = {
    //propriedade
    fabricante: 'Ford',
    ano: 1900,
    cor: 'vermelho',
    modelo: 'Mustang',
    chassi: 2211
}

MostrarString(carro)
function MostrarString(objeto){
    for(propriedade in objeto){
        if (typeof objeto[propriedade] === 'string') {
        console.log(propriedade, objeto[propriedade])
    }     
}

}


