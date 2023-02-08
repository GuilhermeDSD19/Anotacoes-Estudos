class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
            this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salario", 45000)
const contaDeLuz = new Lancamento("Luz", -520)
const faculdade = new Lancamento("FAM", -800)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz, faculdade)
console.log(contas.sumario())