Array.prototype.map2 = function (callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}


const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45 }',
    '{ "nome": "Caderno", "preço": 13.90 }',
    '{ "nome": "Kit de Lápis", "preço": 41.22 }',
    '{ "nome": "Caneta", "preço": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço
const converterParaMoeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco).map2(converterParaMoeda)

console.log(resultado)