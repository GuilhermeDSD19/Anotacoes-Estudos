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

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando a nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando a nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)


darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()