class TransportSpaceship{
    constructor (name){
        this.name = name
        this.currentVelocity = 0
    }

    set velocity (newVelocity){
        if (newVelocity > 120){
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

var spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 145

console.log(spaceship)