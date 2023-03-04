var valores = []
var relatorio = document.querySelector("#res")

function adicionar() {
    let num = Number(document.querySelector('#numi').value)
    let numi = document.getElementById("numi")
    numi.value=""
    numi.focus()
    if (num < 1 || num > 100) {
        window.alert("Valor inválido ou já encontrado na lista.")
    } else if (valores.includes(num)) { // Array 
        window.alert(`Valor inválido ou já encontrado na lista.`)
    } else { // option
        valores.push(num)
        let option = document.createElement('option')
        option.value = num
        option.textContent = `Valor ${num} adicionado.`
        let tabela = document.querySelector('#tab')
        tabela.appendChild(option)
        relatorio.innerHTML=""
    }
}

function mostrarResultados() {
    if (valores.length === 0) {
        window.alert(`Adicione valores antes de finalizar`)
    } else {
        // Número Total
        relatorio.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados </p>`
        // Maior valor
        let maiorValor = Math.max(...valores)
        relatorio.innerHTML += `<p>O maior valor informado foi ${maiorValor}. </p>`
        // Menor valor 
        let menorValor = Math.min(...valores)
        relatorio.innerHTML += `<p>O maior valor informado foi ${menorValor}. </p>`
        // Soma dos valores
        let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        relatorio.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        // Média dos valores
        relatorio.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length.toFixed(2)}. </p>`
    }
}