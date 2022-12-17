function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}


let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "Km/s")
}
    
let newVelocity = doubleVelocity(150, printVelocity)
console.log(newVelocity) 


let anotherVelocity = doubleVelocity(50, function (velocity) { console.log("Outra velocidade: " + velocity) })