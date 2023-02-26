function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genêro = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genêro = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-m.png ')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genêro = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genêro} com ${idade} anos.`
        res.appendChild(img)
    }
}  