// Blocos 
// {
//     let n1 = "let"
//     const n2 = "const"
//     var n3 = "var"
// }

// // console.log(n1)
// // console.log(n2)
// console.log(n3)

// // Funções

// function teste (){
//     let n4 = "let"
//     const n5 = "const"
//     var n6 = "var"
//     console.log(n4)
//     console.log(n5)
//     console.log(n6)
// }

// console.log(n4)
// console.log(n5)
// console.log(n6)

// Escopo Global

// let n7 = "let"
// const n8 = "const"
// var n9 = "var"

// console.log(n7)
// console.log(n8)
// console.log(n9)

// teste()


// let boletoPago = false

// if (boletoPago) {
//     console.log('O boleto está pago')
// } else{
//     console.log('O boleto não está pago')
// }

// console.log("a =", a) 
// let a = 2
// console.log("a =", a)
// function hello(a, b) {
//     return function (a, b) { return a * b };
// }

// console.log(hello(3, 3))

//

// function hi(a, b) {
//     return a * b;
// }

// function hello(a, b) {
//     return hi(a, b + 1);
// }

// hello(3, 3) // 12

let usuario = {
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluido')
        return "TESTE"
    }
}

console.log(usuario.excluir())
console.log('Teste')