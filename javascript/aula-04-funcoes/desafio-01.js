function EscreverMeuNome(nome){
    return(nome);
}

function medidorDeMaioridade(idade){
    if (idade >= 18)
        console.log("Nome:",EscreverMeuNome("Guilherme Duarte"), "- Idade:", idade, "(É maior de idade)");
    else    
        console.log("Nome:",EscreverMeuNome("Guilherme Duarte"), "- Idade:", idade, "(Não é maior de idade)");
}

medidorDeMaioridade(21);
