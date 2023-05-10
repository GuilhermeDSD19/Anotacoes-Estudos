function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoUsuario = document.querySelector("#ano")
    let res = document.querySelector("#res")
    if (anoUsuario.value <= 0 || anoUsuario.value > anoAtual) {
        window.alert("[ERRO] Digite um ano valido.")
    } else {
        var sexo = document.querySelectorAll('input[name="sexo"]')
        var idade = anoAtual - anoUsuario.value
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}