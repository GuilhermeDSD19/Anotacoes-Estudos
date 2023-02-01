const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e * 2 
})

console.log(resultado)

const mais15 = e => e + 15
const multiplicaPor4 = e => e * 4 
const converterParaMoeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


const resultado2 = nums.map(mais15).map(multiplicaPor4).map(converterParaMoeda)

console.log(resultado2)