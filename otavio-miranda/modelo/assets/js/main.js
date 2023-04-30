function calcularIMC() {
    const botao = document.querySelector("#botao")
    const retorno = document.querySelector(".retorno")

    botao.addEventListener("click", (evento) => {
        evento.preventDefault()
        const peso = Number(document.querySelector("#peso").value)
        const altura = Number(document.querySelector("#altura").value)
        validacao(peso, altura)
    })

    function validacao(peso, altura) {
        if (peso <= 0 || peso.length === 0) {
            retorno.innerHTML = "Peso Inválido"
            retorno.style.background = "#ff6961"
        } else if (altura <= 0 || altura.length === 0) {
            retorno.innerHTML = "Altura Inválida"
            retorno.style.background = "#ff6961"
        } else {
            calculoIMC(peso, altura)
        }
    }

    function calculoIMC(peso, altura) {
        imc = (peso / (altura * altura)).toFixed(2)
        if (imc < 18.5) {
            retorno.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`
        } else if (imc >= 18.5 && imc <= 24.9) {
            retorno.innerHTML = `Seu IMC é ${imc} (Peso normal)`
        } else if (imc >= 25 && imc <= 29.9) {
            retorno.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`
        } else if (imc >= 30 && imc <= 34.9) {
            retorno.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`
        } else if (imc >= 35 && imc <= 39.9) {
            retorno.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`
        } else if (imc >= 40) {
            retorno.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`
        }
        retorno.style.background = "rgb(25, 225, 182)"
    }
}
calcularIMC()