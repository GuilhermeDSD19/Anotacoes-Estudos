class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = "Professor") {
        super(sobrenome)
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)