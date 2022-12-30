class App {
    constructor() {
        this.spaceship = null
    }

    start(){
        this.enrollSpaceship()
        let choosenOption
        do{
            choosenOption = this.showInitialMenu()
            this.redirectFeature(choosenOption)
        } while (choosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt("Qual o nome da nave?")
        let crewQuantity = prompt("Qual a quantidade de tripulantes?")
        let spaceshipKind = this.askForSpaceshipKind()
        if (spaceshipKind == "1") {
            let weaponsQuantity = prompt("Quantas armas a nave tem?")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("Quantas armas a nave tem?")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind() {
        let choosenOption
        while (!["1", "2"].includes(choosenOption)) {
            choosenOption = prompt("Qual o tipo da nave? \n\n1- Batalha \n2- Tranposrte")
        }
        return choosenOption
    }

    showInitialMenu() {
        const promptMessage = "Oque você deseja fazer? \n1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir e sair"
        let choosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(choosenOption)) {
            choosenOption = prompt(promptMessage)
        }
        return choosenOption
    }

    redirectFeature(chosenOption){
        switch(chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }     
    }

    accelerateSpaceship(){
        let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMesage = `Nome: ${this.spaceship.name} \nQuantidade de tripulantes: ${this.spaceship.crewQuantity} \nVelocidade atual: ${this.spaceship.currentVelocity}\n`
        alert(finalMesage)
    }
    
}