const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

function exibirPropriedades(obj) {
    for (a in obj)
        if (typeof obj[a] === 'string')
        console.log(obj[a])
}

exibirPropriedades(filme);