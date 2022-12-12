let birthDateEntry = prompt("Digite a data de partida (DD/MM/YYYY)")

let birthDate = moment(birthDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - birthDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de vida: \n1- Segundos \n2- Minutos\n3- Horas \n4- Dias")

if (chosenOption == "1") {
    let secondsOfbirth = Math.round(dateDiff / 1000)
    alert("Tempo de vida: " + secondsOfbirth + " segundos")
} else if (chosenOption == "2") {
    let minutesOfbirth = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vida: " + minutesOfbirth + " minutos")
} else if (chosenOption == "3") {
    let hoursOfbirth = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vida: " + hoursOfbirth + " horas")
} else if (chosenOption == "4") {
    let daysOfbirth = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vida: " + daysOfbirth + " dias")
} else {
    alert("Opção inválida")
}
