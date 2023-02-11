/* V1

anosLuz = window.prompt("Qual a distância em anos-luz (l.y.):")

escolha = window.prompt("Para qual medida de distancia você quer converter: \n\n1- Parsec (PC) \n2- Unidade astronômica (AU) \n3- Quilômetros (KM) \n")



switch (escolha) {
    case "1":
        let anosToParsec = anosLuz * 0.306601
        window.alert(`${anosLuz} anos-luz, convertido para Parsec (PC) é: ${anosToParsec} PC`)
        break
    case "2":
        let anosToAU = anosLuz * 63241.1
        window.alert(`${anosLuz} anos-luz, convertido para Unidade Astrônomica (AU) é: ${anosToAU} AU`)
        break
    case "3":
        let anosToKM = anosLuz * (9.5 * Math.pow(10, 12))
        window.alert(`${anosLuz} anos-luz, convertido para Quilômetros (KM) é: ${anosToKM} Km`)
        break
    default:
        window.alert(`Distância em Anos-Luz: ${anosLuz}\nUnidade não identificada: Conversão fora do escopo.`)
        break
}
*/

// V2

let distanceInLY = prompt("Digite a distância em anos-luz")
let chooseOption = prompt("Para qual unidade deseja converter? \n\n1. Parse (PC)\n2. Unidade Astronômica (AU)\n3.Quilômetros (Km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch (chooseOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-Luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance)