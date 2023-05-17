// function tag(partes, ...valores){
//     console.log(partes)
//     console.log(valores)
//     return `Outra string`
// }

// const aluno = "Guilherme"
// const situacao = 'Aprovado'
// console.log(tag `${aluno} está ${situacao}.`) 

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)


// function teste(string, ...variaveis) {
//     console.log(string)
//     console.log(variaveis)
// }

// const w = 7
// const h = 5
// const q = 4

// teste`essa aqui ${w} doadia ${h} faf a ${q}`