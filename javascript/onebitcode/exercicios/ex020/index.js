/* let testeArray = ["Milan","Liverpool","Palmeiras", "Brasil"]

console.log(testeArray)

testeArray.push("Vasco")

console.log(testeArray)

testeArray.pop()

console.log(testeArray)

testeArray.shift()

console.log(testeArray)

testeArray.unshift("Real Madrid")

console.log(testeArray)

totalPosicoes = testeArray.length

console.log(testeArray, totalPosicoes)

indiceMilan = testeArray.indexOf("Palmeiras")

console.log(testeArray, indiceMilan)

let arrayBidimensinal = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 9], ["Supernova", 9] ]

console.log(arrayBidimensinal[3][0])

let arrayBidimensinal2 = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 9], ["Supernova", "9", [true, false]] ]

console.log(arrayBidimensinal2[3][2][1])

let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

console.log(spaceshipNames)

let removedSpaceships = spaceshipNames.splice(1, 2 , "teste")

console.log(spaceshipNames + '\n' + removedSpaceships)


let spaceshipNames = ["Elemental", "Darwin", "Artemis", "Supernova"]

console.log(spaceshipNames)

let extractedNames = spaceshipNames.slice(1,3)

console.log(spaceshipNames + "\n" + extractedNames)

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function(currentSpaceship, index) {
    console.log("Nave: " + currentSpaceship + "\nÍndice: " + index)
})

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships)

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSpaceships.filter(element => {return element.length >= 7})

console.log(with7Chars)

let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSpaceships.find(element => {return element.length >= 7})

console.log(with7Chars) */