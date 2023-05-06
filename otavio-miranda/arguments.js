function funcao(a, b, c) {
    console.log(arguments)
}

funcao(1, 5)

// Parâmetro por Destructuring

function f1([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

let array = ["Guilherme da Silva Duarte", 21, 2023]

f1(array) // Guilherme da Silva Duarte 21 2023

function f2({ nome, idade, anoAtual }) {
    console.log(nome, idade, anoAtual)
}

let objeto = {
    nome: "Guilherme da Silva Duarte",
    idade: 21,
    anoAtual: 2023
}

f2(objeto) // Guilherme da Silva Duarte 21 2023