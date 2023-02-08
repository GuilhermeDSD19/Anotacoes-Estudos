function conversorDeMoeda(x) {
    return `R$ ${x.toFixed(2).toString().replace(".", ",")}`
}

console.log(conversorDeMoeda(0.30000000000000004))