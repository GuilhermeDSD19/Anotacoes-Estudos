// Instancia Nova
module.exports = () => {
    return {
        valor: 1, 
        inc(){
            this.valor++
        }
    }   
}

// Instancia Unica
module.exports = {
    valor: 1,
    inc() {
        this.valor++;
    }
}

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1