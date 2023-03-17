const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function removerBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado')
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa')
}

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerBotaoSelecionado()
        selecionarBotaoCarrosel(botao)
        removerImagemSelecionada()
        mostrarImagemDeFundo(indice)
    })
})
