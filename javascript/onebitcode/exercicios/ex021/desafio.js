let spaceship = {
    velocity: 0,
    speedUp: function (aceleration) {
        this.velocity += aceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (Km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar (Km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert(`VELOCIDADE MAXIMA ULTRAPASSADA \nVelocidade da Nave: ${spaceship.velocity} Km/s\nVelocidade máxima da nave ${spaceship.maxVelocity} Km/s`)
    }
}

function stop() {
    alert(`Nome: ${spaceship.name} \nTipo: ${spaceship.type}\nVelocidade da nave: ${spaceship.velocity} Km/s \nVelocidade máxima da nave: ${spaceship.maxVelocity} Km/s`)

}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt(`Você deseja: \n1- Acelerar\n2- Parar`)
        switch (chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
                break
        }
    } while (chosenOption != "2")
}

registerSpaceship()
showMenu()