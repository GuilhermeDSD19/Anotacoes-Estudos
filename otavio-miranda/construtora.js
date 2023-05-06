function Pessoa(nome, idade) {
    // Interno (Privado)
    const id = 18548;
    const metodoDeExemplo = () => {
        console.log("exemplo")
    }

    // Público
    this.nome = nome;
    this.idade = idade;
    this.metodoDeExemplo2 = () => {
        console.log("exemplo")
    }
}

const pessoa1 = new Pessoa("João", 30);

console.log(pessoa1);