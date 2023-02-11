let nome = "Guilherme"
let novoNome = ""

for (let i = 0; i < nome.length; i++) {
    if (nome[i] == "e") {
        novoNome += "yz"
    } else {
        novoNome += nome[i]
    }
}

console.log(novoNome)