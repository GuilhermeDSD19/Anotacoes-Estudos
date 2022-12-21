class Spaceship {
    constructor(name, type = "Descoberta", test) {
        this.name = name
        this.type = type
        this.teste = test
    }
}

let darwin = new Spaceship("Darwin", "Batalha", "tefafa")
let helmet = new Spaceship("Helmet", "Batalha", "tefafa")

console.log(darwin)
console.log(helmet)