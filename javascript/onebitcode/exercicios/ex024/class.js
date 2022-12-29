export class Naves {
    constructor(name, qtyTripulantes, type) {
        this.name = name
        this.qtyTripulantes = qtyTripulantes
        this.type = type
        this.velocidade = 0
    }
    assentoOuArmas(qtyArmas, qtyAssentos) {
        if (this.type == "Batalha") {
            this.qtyArmas = qtyArmas
        } else { // Assentos
            this.qtyAssentos = qtyAssentos
        }
    }
}