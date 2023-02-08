/*
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        Logradouro: "Rua ABC",
        Número: 154,
    }
}

let { endereço: { Logradouro, Número} } = pessoa

console.log(Logradouro, Número)

*/

const fruits = ["banana", "pera", "uva"]

let [fruta2, fruta3] = fruits



const [, [, nota] ] = [[, 8, 8],[9, 6, 8]]

console.log(nota)