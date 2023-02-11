spaceship = prompt("Qual é o nome da espaçonave?")
caracter = prompt("Qual caractere você quer substituir?")
newCaracter = prompt("Qual caractere você quer colocar no lugar?")
newSpaceship = ""

for (let c = 0; c < spaceship.length; c++){
    if (spaceship[c] == caracter){
        newSpaceship += newCaracter
    } else {
        newSpaceship += spaceship[c]
    }
}

alert(`Nome antigo: ${spaceship}\nNome novo: ${newSpaceship}`)