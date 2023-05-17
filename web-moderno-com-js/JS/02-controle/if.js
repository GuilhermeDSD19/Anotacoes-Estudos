function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com: " + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})

const imprimirResultado = function (nota){
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(6)