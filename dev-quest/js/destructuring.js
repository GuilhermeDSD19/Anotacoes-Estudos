"use strict"

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        Logradouro: "Rua ABC",
        Número: 154,
    }
}

let age
({ idade: age } = pessoa)

console.log(age)