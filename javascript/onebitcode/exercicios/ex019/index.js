// A nave começa em 150km/s
// A cada segundo (Cada laço da repetição = 1s) a nave vai desaceçerar 20km/s
// Esta função devera ser uma HOF
// Devemos imprimir cada umas das atualizações que houver na nave atraves de um callback
// Ao final exiba uma menssagem informando que a nave esta parada e as comportas podem ser abertas.

velocidade = 150

let desacelerarEm20Km = function (speed) {
    speed -= 20
    if (speed < 0) {
        speed = 0
    }
    return speed
}

let alertaVelocidade = speed => alert(`A nave esta a ${speed} Km/s`)

let naveParada = function (speed) {
    if (speed <= 0) {
        alert(`A nave esta parada e as comportas já podem ser abertas`)
    }
}

function desaceleracaoDaNave(speed, desaceleracaoEm20Km, alertaVelocidade, naveParada) {
    do {
        alertaVelocidade(speed)
        speed = desaceleracaoEm20Km(speed)
        naveParada(speed)
    } while (speed > 0)
}

desaceleracaoDaNave(velocidade, desacelerarEm20Km, alertaVelocidade, naveParada)







