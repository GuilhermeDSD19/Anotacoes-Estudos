// Função sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 8)

// Função com retorno

function soma(a, b = 8) {
    return a + b
}

console.log(soma(10))
console.log(soma(10, 35))