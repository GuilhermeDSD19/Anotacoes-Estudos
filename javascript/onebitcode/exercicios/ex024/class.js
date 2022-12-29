export class Naves {
    constructor(name, qtyTripulantes, type) {
        this.name = name
        this.qtyTripulantes = qtyTripulantes
        this.type = type
        this.velocidade = 0
    }
    assentoOuArmas(quantidade) {
        if (this.type == "Batalha") {
            this.qtyArmas = quantidade
        } else { // Assentos
            this.qtyAssentos = quantidade
        }
    }
}