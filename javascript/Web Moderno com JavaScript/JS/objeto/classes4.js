/*class Pessoa {
    constructor(nome, idade, peso, altura) {
        this._nome = nome,
        this._peso = peso,
        this._altura = altura,
        this._imc = peso / (altura * altura)
    }
    
    get nome() {
        return this._nome
    }

    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }

    get imc() {
        return this._imc
    }
}

let eu = new Pessoa("Guilherme", 21, 85, 1.80)
*/

class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    falar() {
        console.log(`${this.nome} fala`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }
    
    latir() {
        console.log("au au!");
    }
}

let cachorro1 = new Cachorro("Toto", 3, "Poodle");
console.log(cachorro1.nome); // "Toto"
console.log(cachorro1.idade); // 3
console.log(cachorro1.raca); // "Poodle"
cachorro1.falar(); // "Toto fala"
cachorro1.latir(); // "au au!"

console.log(cachorro1)