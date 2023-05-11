function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente | Saldo Atual: R$${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
}

const conta1 = new Conta(1147, 98, 10)
conta1.sacar(85)

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente();

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente | Saldo Atual: R$${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function Poupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = ContaCorrente();


const cc = new ContaCorrente(1579, 19, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)

console.log("-------------------")

const pop = new Poupanca(848715, 59, 200)
pop.depositar(10)
pop.sacar(110)
pop.sacar(100)

