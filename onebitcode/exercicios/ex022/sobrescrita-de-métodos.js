class Spaceship {
    constructor(name, maxCrew, maxRecommendadedValue) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendadedVelocity = maxRecommendadedValue
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendadedValue) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos a nave")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendadedValue, maxLoadWeight) {
        super(name, maxCrew, maxRecommendadedValue)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert("Incrementado velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)