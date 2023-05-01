const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
};

for (const propriedade of pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}