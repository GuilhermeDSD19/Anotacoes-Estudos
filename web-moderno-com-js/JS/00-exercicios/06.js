function jurosSimples(x, y) {
    console.log(`Capital Inicial: R$ ${x}\nTaxa de Juros simples: ${y}%\nTotal: R$ ${x + x * (y / 100)}  \nRendimento liquido: R$ ${x * (y / 100)} `) 
}

jurosSimples(100, 10)
console.log()


function jurosComposto(valor, juros, tempo) {
    let total = valor * Math.pow((1 + juros / 100), tempo)
    console.log(`Capital Inicial: R$ ${valor}\nTaxa de Juros (a.a): ${juros}%\nTempo de rendimento: ${tempo} anos \nTotal: R$ ${total.toFixed(2)}\nRendimento liquido: R$ ${(total-valor).toFixed(2)}`) 
}


jurosComposto(10000, 10, 6)