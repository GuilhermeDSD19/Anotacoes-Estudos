/*let spaceship = new Object()
spaceship.name = "Fenix"
spaceship.quantity = "7"
spaceship.type = "Batalha"

console.log(spaceship)


let spacechip = {
	nome: "Fenix",
	quantity: "7",
	type: "exemplo",
}

console.log(spacechip)

*/

let spacechip = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
        alert(this.name + "Esta pronto!")
    }
}

spacechip.velocity = 0
spacechip.speedUp = function(acceleration) {
    this.velocity += acceleration
}

console.log(spacechip)

spacechip.speedUp(197)

console.log(spacechip)