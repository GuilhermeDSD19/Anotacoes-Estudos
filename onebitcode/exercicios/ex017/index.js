let spaceship = prompt("Qual o nome da espaçonave?")
let newSpaceship = ""


for (let c = spaceship.length - 1; c >= 0; c--){
    if (spaceship[c] == "e") {
        break
    } else {
        newSpaceship =  newSpaceship + spaceship[c]
    }
}

alert(`Nome original da nave: ${spaceship} \nNome após ocultação: ${newSpaceship}`)

