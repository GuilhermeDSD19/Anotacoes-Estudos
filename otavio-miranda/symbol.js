// const mySymbol = Symbol();
// console.log(mySymbol) // Symbol()

// const anotherSymbol = Symbol('Descrição do Simbolo');
// console.log(anotherSymbol) // Symbol(Descrição do Simbolo)

// console.log(anotherSymbol.description)

const nome = Symbol('nome')
const numero = Symbol('numero')
const corUniforme = Symbol('Cor do Uniforme')


const Jogador = {
    nome: 'j1',
    [numero]: 10,
    [corUniforme]: "azul",
}

for (p in Jogador) {
    console.log(Jogador[p])  // j1
}

console.log(`${Jogador.nome}`) // j1
console.log(`${Jogador.numero}`)  // undefined
console.log(`${Jogador.corUniforme}`)  // undefined

console.log(`${Jogador[numero]}`) // 10
console.log(`${Jogador[corUniforme]}`) // azul