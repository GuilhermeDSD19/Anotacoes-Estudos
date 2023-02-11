class Naves {
    constructor(nome) {
        this.nome = nome
        this.velocidade = 0
    }

    speedUp(acelerador) {
        this.velocidade += acelerador
    }
}

let exClasse = new Naves("Falchon 9")

exClasse.speedUp(50)
console.log(exClasse)

exClasse.speedUp(-20)
console.log(exClasse)

