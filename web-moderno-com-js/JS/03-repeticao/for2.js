const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let index in notas) {
    console.log(index, notas[index])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva', 
    Idade: 29,
    peso: 64,
}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}