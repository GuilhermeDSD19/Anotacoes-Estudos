Array.prototype.filter2 = function (callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 10, fragil: true },
    { nome: "Copo de Vidro", preco: 18.99, fragil: false }
]

const carosEFrageis = p => {
    if (p.preco > 500 && p.fragil == true) {
        return true
    }
}

console.log(produtos.filter2(carosEFrageis))