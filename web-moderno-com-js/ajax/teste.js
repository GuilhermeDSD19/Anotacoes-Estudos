function fazerRequisicao(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.metodo, config.url, true);

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            config.sucesso(xhr.response);
        } else if (xhr.status >= 400) {
            config.erro({
                codigo: xhr.status,
                texto: xhr.statusText
            })
        }
    });
    xhr.send()
}

const configuracao = {
    url: "dados/estados.json",
    metodo: "get",
    sucesso(resposta) {
        // Manipular a resposta do servidor aqui
        const estados = JSON.parse(resposta)
        const linhas = estados.map(estados => {
            const tdId = document.createElement('td')
            tdId.innerHTML = estados.id

            const tdNome = document.createElement('td')
            tdNome.innerHTML = estados.nome

            const tdSigla = document.createElement('td')
            tdSigla.innerHTML = estados.Sigla

            const tr = document.createElement("tr")

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSigla)

            return tr
        })

        const tabela = document.createElement("table")
        linhas.array.forEach(linha => tabela.appendChild(linha));
        document.body.appendChild(tabela)
    },
    erro(e) {
        // Manipular o erro aqui
        const msg = document.createTextNode(`${e.codigo}: ${e.texto}`)
        document.body.appendChild(msg)
    }
}

fazerRequisicao(configuracao)