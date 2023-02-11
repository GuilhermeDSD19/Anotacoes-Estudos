const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]

var maisDe9Tripulantes = hitchedSpaceships.filter(arrayAtual => { return arrayAtual[1] > 9 }).map(arrayAtual => { return arrayAtual[0] })

var engatePendente = hitchedSpaceships.findIndex(arrayAtual => { return arrayAtual[2] == false })

let nomeDasNaves = hitchedSpaceships.map(arrayAtual => {
    return arrayAtual[0].toUpperCase()
})

let menssagem = `Naves com mais de 9 tripulantes: ${maisDe9Tripulantes.join(", ")}\nPlataforma em processo de engate: ${engatePendente+1}\nNome das naves: ${nomeDasNaves.join(", ")}`

alert(menssagem)