function contar() {
    let inicio = document.querySelector('#ini')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#pas')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando... `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem cresecente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1F449} ${c}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }
    res.innerHTML += `\u{1F3C1}`
}