/*
class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours){
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 8)

let processor = new ResourceProcessorStation("Gaia", 2000)

let TotalProcessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)

console.log(totalProcessing)
console.log(TotalProcessed)

*/

class Spaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    static get decelerationRate() {
        return 0.15
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

let nave = new Spaceship("Falchon 9")

nave.speedUp(100)

console.log(nave)