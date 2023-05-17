Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota1) {
    if (nota1.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota1.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota1.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota1.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida.')
    }
}

imprimirResultado(9.5)
imprimirResultado(7.5)
imprimirResultado(4.5)
imprimirResultado(2.5)
imprimirResultado(-1)