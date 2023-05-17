const alunos = [
    { Nome: "Guilherme", nota: 6, Bolsista: false },
    { Nome: "Adriano", nota: 4, Bolsista: true },
    { Nome: "Maria", nota: 9, Bolsista: false },
    { Nome: "Carlos", nota: 7, Bolsista: true },
    { Nome: "Leticia", nota: 8, Bolsista: false },
]
let somenteNotas = alunos.map(a => a.nota)

const resultado = somenteNotas.reduce(function (acumulador, atual) {
    console.log(acumulador)
    return acumulador + atual
}, 10)

console.log(resultado)