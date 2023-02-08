const produto = Object.preventExtensions({
    nome: "Guilherme", preço: 85, tag: "promoção"
})

const teste = {
    nome: "tea",
    idade: 4
}

console.log(teste)

Object.preventExtensions(teste)

teste.sexo = "masculino"

console.log(teste)

teste.nome = "Diogo"

console.log(teste)

const pessoa = { nome:'Juliana', idade: 32}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)