function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(fala,'\n', resto)

///
console.log("------------------")

function criaMultiplicador(multiplicador) {
    return n => n * multiplicador
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(5))
console.log(triplica(5))
console.log(quadriplica(5))