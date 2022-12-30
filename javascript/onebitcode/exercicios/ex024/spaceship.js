class Spaceship {
    static get DECELERATION_RATE(){
        return 0.17
    }
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
    }
}