let nomeDaNave = prompt("Qual é o nome da nave?")
let confirmacao = prompt("Deseja entrar em dobra espacial? \n\n1- Sim\n2- Não")

let qtyDobra = 0;

switch (confirmacao) {

    case "1": // SIM
        while (confirmacao == "1") {
            qtyDobra += 1
            confirmacao = prompt("Deseja realizar a próxima dobra? \n\n1- Sim\n2- Não")
            if (confirmacao != "1" && confirmacao != "2") {
                confirmacao = prompt("Valor invalido. Tente novamente!\n\nDeseja realizar a próxima dobra? \n\n1- Sim\n2- Não")
            }
        }

    case "2": // NÂO
        alert(`Nave: ${nomeDaNave}\nNúmero de dobras: ${qtyDobra}`)
        break
}





