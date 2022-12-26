class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity) {
        if (newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

var spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 145

console.log(spaceship)



class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let ResourceProcesor = new ResourceProcessStation("Gaia", 500)

console.log(ResourceProcesor.weeklyProcessedLoad)

ResourceProcesor.monthlyProcessedLoad = 800

console.log(ResourceProcesor.weeklyProcessedLoad)
