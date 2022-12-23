class Spaceship {
    constructor(name, maxCrew, maxRecommendadedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendadedVelocity = maxRecommendadedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendadedVelocity) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos a nave")
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade em 1Km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transportSpaceship.speedUp(130)

console.log(transportSpaceship)