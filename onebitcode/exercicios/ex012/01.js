let nomeDoPiloto
let velocidade = 0
let novaVelocidade
let confimacao

nomeDoPiloto = window.prompt("Qual é o nome do piloto?")
novaVelocidade = window.prompt(`A que velocidade o piloto ${nomeDoPiloto} quer acelerar a nave?`)
confirmacao = window.confirm(`Acelerar para ${novaVelocidade}Km/s?`)

if (confirmacao == true) {
    velocidade = novaVelocidade
} else if (velocidade <= 0) {
    window.alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocidade < 40) {
    window.alert("Você está devagar, podemos aumentar mais ")
} else if (velocidade >= 40 && velocidade < 80) {
    window.alert("Parece um boa velocidade para manter.")
} else if (velocidade >= 80 && velocidade < 100) {
    window.alert("Velocidade alta. Considere diminiuir.")
} else {
    window.alert("Velocidade perigosa. Controle automático forçado.")
}

window.alert(`Piloto: ${nomeDoPiloto} \nVelocidade atual: ${velocidade}Km/s`)