function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

teste = criarProduto("Alex", 150)
console.log(criarProduto("Guilherme", 190))
console.log(teste) 