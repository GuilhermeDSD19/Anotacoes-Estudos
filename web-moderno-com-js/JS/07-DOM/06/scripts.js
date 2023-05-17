function carregar() {
    let msg = document.querySelector('#msg')
    let imagem = document.querySelector('#imagem')
    let date = new Date()
    let hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        imagem.src = "imagens/dia.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora < 18) {
        imagem.src = "imagens/tarde.png"
        document.body.style.background = "#b9846f"
    } else {
        imagem.src = "imagens/noite.png"
        document.body.style.background = "#515154"
    }
}
