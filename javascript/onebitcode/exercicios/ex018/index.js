function escolhaDoUsuario() {
    escolhaDoMenu = prompt("Escolha uma das opções:\n\n1- Acelerar a navem em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
    escolhaTeste = verificadorDeEscolha(escolhaDoMenu)
    return escolhaTeste
}

function verificadorDeEscolha(escolha) {
    if (escolha < 1 || escolha > 4) {
        escolha = prompt("OPÇÃO INVALIDA! TENTE NOVAMENTE.\n\nEscolha uma das opções:\n\n1- Acelerar a navem em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa")
        verificadorDeEscolha(escolha)
    } else {
        return escolha
    }
}




let nomeDaNave = prompt("Qual é o nome da nave?")
let escolhaDoMenu
let escolha
let velocidade = 0

escolha = escolhaDoUsuario()
escolhaDoMenu = verificadorDeEscolha()
alert(escolhaDoMenu)