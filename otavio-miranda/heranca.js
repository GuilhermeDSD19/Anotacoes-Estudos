function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor
}
Produto.prototype.desconto = function (valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco,)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== Number) return
            estoque = valor
        },
    })
}
Caneca.prototype = Object.create(Produto)
Caneca.prototype.constructor = Caneca

const generico = new Produto('GEN', 10,)
const regata = new Camiseta('Regata', 7, 'Preta')
const xicara = new Caneca('Xicao', 5, 'Plastico', 8)
console.log(generico)
console.log(regata)
console.log(xicara)