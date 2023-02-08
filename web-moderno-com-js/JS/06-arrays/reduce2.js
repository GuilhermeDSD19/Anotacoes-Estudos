const alunos = [
    { Nome: "Guilherme", nota: 6, bolsista: true },
    { Nome: "Adriano", nota: 4, bolsista: true },
    { Nome: "Maria", nota: 9, bolsista: false },
    { Nome: "Carlos", nota: 7, bolsista: true },
    { Nome: "Leticia", nota: 8, bolsista: false },
]

let todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista ).reduce(todosBolsistas))

let algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista ).reduce(algumBolsista))