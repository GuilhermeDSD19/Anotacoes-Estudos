class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = true
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já esta ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já esta desligado.');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone')
d1.desligar()
d1.ligar()
console.log(d1)

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome)
        this.cor = cor
    }
}

const s1 = new Smartphone('Iphone', 'Preto')
s1.desligar()
console.log(s1)