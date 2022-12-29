import {
    Naves
} from "./class.js"

// Variaveis Iniciais
var nomeDaNave
var qtyTripulantes
var type
var qtyArmas
var qtyAssentos

function cadastroDaNave() { // Cadastro Inicial
    nomeDaNave = prompt("Digite o nome da nave")
    qtyTripulantes = prompt("Quantidade de tripulantes da nave")
    do {
        type = prompt("Qual é o tipo da nave\n\n1- Batalha\n2- Transporte")
        if (type == "1") {
            type = "Batalha"
            qtyArmas = prompt("Quantas armas a nave tem?")
            return qtyArmas
        } if (type == "2") {
            type = "Transporte"
            qtyAssentos = prompt("Quantos assentos a nave tem?")
            return qtyAssentos
        } else { }
    } while (type != "Batalha" && type != "Transporte")
}

// Segundo Menu
var escolhaDoMenu

function showMenu() {
    do { // Filtro de resposta
        escolhaDoMenu = prompt("Escolha uma das opções abaixo: \n\n1- Acelerar a nave \n2- Trocar de nave \n3- Imprimir e sair")
    } while (escolhaDoMenu != "1" && escolhaDoMenu != "2" && escolhaDoMenu != "3")
}

function acaoDoMenu() {
    do { // Funções do Menu
        switch (escolhaDoMenu) {
            case "1": // Acelerar a Nave
                console.log("TESTE")
                showMenu()
                break
            case "2": // Trocar de nave
                showMenu()
                break
            case "3": // Imprimir e Encerrar 

                break
            default:
                showMenu()
                break
        }
    } while (escolhaDoMenu != "3")
}




//                  PROGRAMA PRINCIPAL 

// Instanciação da Classe
var armasOuAssentos = cadastroDaNave()
var nomeDaNave = new Naves(nomeDaNave, qtyTripulantes, type)
nomeDaNave.assentoOuArmas(armasOuAssentos)

// Segundo Menu
showMenu()
acaoDoMenu()


