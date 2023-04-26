/*
function criarTabuada() {
    let numi = document.querySelector("#numi")
    let num = Number(numi.value)
    let res = document.querySelector("#res")
    res.innerHTML = ""
    var resSelect = document.querySelector("#tab")
    var option = document.createElement("option")
    for (let c = 1; c < 11; c++) {
        let resultado = num
        option.text = `${num} X ${c} = ${resultado * c}<br>`
        resSelect.add(option)
    }
}
*/

function criarTabuada(){
    let num = document.querySelector('#numi')
    let tab = document.querySelector("#tab")
    if(num.value.length == 0) {
        window.alert("Por favor, digite um número valido!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}