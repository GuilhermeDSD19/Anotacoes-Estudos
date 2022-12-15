let spaceshipName = prompt("Digite o nome da nave")

let spaceshipVeleocity = 0

let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n1- Acelerar a nave em 5km/s\n2-Desacelerar a nave em 5km/s\n3-Imprimir os dados da nave\n4- Sair do programa")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity){
    alert(`Espaçonave: ${name}\nVelocidade: ${velocity} km/s`)
}

do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipVeleocity = speedUp(spaceshipVeleocity)
            break
        case "2":
            spaceshipVeleocity = slowDown(spaceshipVeleocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVeleocity)
            break
        default:
            alert("Encerrando o programa de bordo.")
    }
} while (chosenOption != "4")