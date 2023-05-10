const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach((indice, teste) => console.log(indice, teste))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)