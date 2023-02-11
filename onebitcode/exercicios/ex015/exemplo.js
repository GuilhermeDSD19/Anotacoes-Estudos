let exemplo = "Alex Andy da Silva Duarte"
let pos = 0
let exemploLength = exemplo.length

while (pos < exemploLength) {
    if (exemplo[pos] == "a" || exemplo[pos] == "A") {
        console.log(`Posição: ${pos} - ${exemplo[pos]}`)
    }
    pos += 1
}