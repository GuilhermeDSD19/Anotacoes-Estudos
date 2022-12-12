let nomeDoPiloto;
let velocidade = 0
let confimacao;

nomeDoPiloto = window.prompt("Qual é o nome do piloto?")
velocidade = window.prompt(`A que velocidade o piloto ${nomeDoPiloto} quer acelerar a nave?`)
confirmacao = window.confirm(`Acelerar para ${velocidade}Km/s?`)

if (confirmacao == false) {
    velocidade = 0
    window.alert("A velocidade não será alterada.")
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