function carregar() {
    let texto = document.querySelector('#txt')
    let nomeDoMes = document.querySelector('#mes')
    let data = new Date
    let mes = data.getMonth()
    let mesAtual
    switch (mes) {
        case 0:
            mesAtual = 'Janeiro'
            document.body.style.background = "#00ffff"
            break
        case 1:
            mesAtual = 'Fevereiro'
            document.body.style.background = "#169670"
            break
        case 2:
            mesAtual = 'Março'
            document.body.style.background = "#ffff00"
            break
        case 3:
            mesAtual = 'Abril'
            document.body.style.background = "#0000ff"
            break
        case 4:
            mesAtual = 'Maio'
            document.body.style.background = "#000000"
            break
        case 5:
            mesAtual = 'Junho'
            document.body.style.background = "#00ff00"
            break
        case 6:
            mesAtual = 'Julho'
            document.body.style.background = "#ff0000"
            break
        case 7:
            mesAtual = 'Agosto'
            document.body.style.background = "#0f356f"
            break
        case 8:
            mesAtual = 'Setembro'
            document.body.style.background = "#923496"
            break
        case 9:
            mesAtual = 'Outubro'
            document.body.style.background = "#9ff15f"
            break
        case 10:
            mesAtual = 'Novembro'
            document.body.style.background = "#779681"
            break
        case 11:
            mesAtual = 'Dezembro'
            document.body.style.background = "#918476"
            break
    }
    texto.innerHTML = `O mes atual é:`
    nomeDoMes.innerHTML = `${mesAtual} <img width="450px" src="https://scontent.fgru19-1.fna.fbcdn.net/v/t1.6435-9/79442250_445824382773741_7311169871310487552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wIJucER2HsUAX8Z3VOf&_nc_ht=scontent.fgru19-1.fna&oh=00_AfD45_JbcCa5bsTihrWk-B9pVYNOinJIFuSNzMdYopmLnw&oe=641A036D">`
}
