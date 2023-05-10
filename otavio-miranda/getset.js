function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function () {
            return estoquePrivado;
        },

        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}

const p2 = new Produto('Camiseta', 50, 8040);
console.log(p2.estoque); // 8040
p2.estoque = 3000
console.log(p2.estoque) // 3000