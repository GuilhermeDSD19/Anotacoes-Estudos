/*
var teste = 8
console.log(teste)

function Teste() {
    var outroteste = 16
    console.log("Outro Teste:",outroteste)
}

Teste()
//console.log("Outro Teste:",outroteste)

var numero = 2

{
    var numero = 3
    console.log("Dentro:", numero)
}

console.log("Fora:", numero)
*/

var numero = 4 
{
    var numero = 8
    {
        let numero = 10
        console.log(numero)
    }
}