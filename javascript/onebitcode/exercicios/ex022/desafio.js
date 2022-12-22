/* Minha Versão
class Naves {
	constructor(nome, qtyTripulantes) {
		this.nome = nome
		this.qtyTripulantes = qtyTripulantes
		this.engate = false
		this.portasAbertas = false
	}

	engatou() {
		this.engate = true
		this.portasAbertas = true

	}
}

function showMenu() {
	do {
		escolha = prompt("Escolha uma das opções abaixo: \n\n1- Cadastrar nave \n2- Imprimir naves \n3- Sair do programa")
		switch (escolha) {
			case "1":  // Cadastro e Engate
				naveParaAdicionar = cadastroDaNave()
				naveParaAdicionar.engatou()
				navesEngatadas.push(naveParaAdicionar)
				break
			case "2": // Relatório das Naves
				listaDeNaves(navesEngatadas)
				break
			case "3": // Sair
				alert("Encerrando o programa.")
				break
			default: // Opção invalida
				alert("Opção invalida! Tente novamente.")
				break
		}
	} while (escolha != 3)
}

function cadastroDaNave() { 
	var nomeDaNave = prompt("Qual o nome da nave?")
	var quantidadeDeTripulantes = prompt("Quantos tripulantes a nave tem?")
	var nave = new Naves(nomeDaNave, quantidadeDeTripulantes)
	return nave
}

function listaDeNaves(naves) {
	let listaDeNavesEngatadas = ""
	naves.forEach((nave, index) => {
		listaDeNavesEngatadas += (index+1) + "- " + nave.nome + " (" + nave.qtyTripulantes + " tripulantes)\n"
	});
	alert(listaDeNavesEngatadas)
}

var navesEngatadas = []
showMenu()

Versão do Professor */ 

class Spaceship {
	constructor(name, crewQuantity) {
		this.name = name
		this.crewQuantity = crewQuantity
		this.isHitched = false
		this.entraceDoorsOpen = false
	}

	hitch(){
		this.isHitched = true
		this.entraceDoorsOpen = true
	}
}

function showMenu() {
	let chosenOption
	while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
		chosenOption = prompt("O que deseja fazer?\n1- Engatar nave\n2- Imprimir naves\n3- Sair do programa")

	}
	return chosenOption
}

function createSpaceship(){
	let spaceshipName = prompt("Informe o nome da nave")
	let crewQuantity = prompt("Informe a quantidade de tripulantes")
	let spaceship = new Spaceship(spaceshipName, crewQuantity)
	return spaceship
}

function printSpaceshipList(spaceships){
	let spaceshipsList = ""
	spaceships.forEach((spaceship, index) => {
		spaceshipsList += (index+1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
	});
	alert(spaceshipsList)
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3"){
	chosenOption = showMenu()
	switch(chosenOption) {
		case "1":
			let spaceshipToAdd = createSpaceship()
			spaceshipToAdd.hitch()
			hitchedSpaceships.push(spaceshipToAdd)
			break
		case "2":
			printSpaceshipList(hitchedSpaceships)
			break
	}
}

