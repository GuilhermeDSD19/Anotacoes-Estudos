import {
    Naves
} from "./class.js"

// Variaveis Iniciais
var nomeDaNave
var qtyTripulantes
var type
var qtyArmas
var qtyAssentos
var todasAsNaves = []

function cadastroDaNave() { // Cadastro Inicial
    nomeDaNave = prompt("Digite o nome da nave")
    qtyTripulantes = prompt("Quantidade de tripulantes da nave")
    do {
        type = prompt("Qual é o tipo da nave\n\n1- Batalha\n2- Transporte")
        if (type == "1") {
            type = "Batalha"
            qtyArmas = prompt("Quantas armas a nave tem?")
        } if (type == "2") {
            type = "Transporte"
            qtyAssentos = prompt("Quantos assentos a nave tem?")
        } else { }
    } while (type != "Batalha" && type != "Transporte")
    var nomeDaNave = new Naves(nomeDaNave, qtyTripulantes, type)
    nomeDaNave.assentoOuArmas(qtyArmas, qtyAssentos)
    return nomeDaNave
}

// Menu

var escolhaDoMenu

function showMenu() { // Menu e Filtro de resposta
    do {
        escolhaDoMenu = prompt("Escolha uma das opções abaixo: \n\n1- Acelerar a nave \n2- Trocar de nave \n3- Imprimir e sair")
    } while (escolhaDoMenu != "1" && escolhaDoMenu != "2" && escolhaDoMenu != "3")
}

// Funções do Menu

function acaoDoMenu() { 
    do {
        switch (escolhaDoMenu) {
            case "1": // Acelerar a Nave
                cadastroDaNave()
                console.log(nomeDaNave)
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

todasAsNaves.push(cadastroDaNave())
showMenu()
acaoDoMenu()
console.log(todasAsNaves)

// ERRO NO SEGUNDO NOME DA ARRAY
