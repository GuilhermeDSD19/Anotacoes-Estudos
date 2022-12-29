
import {
    Naves
} from "./class.js"

// Variaveis Iniciais
var nomeDaNave
var qtyTripulantes
var type
var qtyArmas
var qtyAssentos

// Cadastro Inicial
function cadastroDaNave() { 
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

// Instanciação 
var armasOuAssentos = cadastroDaNave()
var nomeDaNave = new Naves(nomeDaNave, qtyTripulantes, type)
nomeDaNave.assentoOuArmas(armasOuAssentos)
console.log(nomeDaNave)





