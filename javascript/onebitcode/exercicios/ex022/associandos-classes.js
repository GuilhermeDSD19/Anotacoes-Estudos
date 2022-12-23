class TimeDeFutebol {
    constructor(name, playersQuantity, coachName, coachAge, CoachAmountOfTitles){
        this.name = name
        this.playersQuantity = playersQuantity
        this.coach = new Coach(coachName, coachAge, CoachAmountOfTitles)
    } 
}

class Coach {
    constructor(name, age, amountOfTitles){
        this.name = name
        this.age = age
        this.amountOfTitles = amountOfTitles
    }
}

let Palmeiras = new TimeDeFutebol("Palmeiras", 25, "Abel Ferreira", 44, 6)

console.log(Palmeiras)