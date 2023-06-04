const axios = require("axios");

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

async function funcionariaChinesaComOMenorSalario() {
    try {
        const response = await axios.get(url);
        const funcionarios = response.data;
        const funcionariasChinesas = funcionarios.filter(funcionario => funcionario.genero === "F" && funcionario.pais === "China");
        const funcionariaComMenorSalario = funcionariasChinesas.reduce((ac, funcionaria) => funcionaria.salario < ac.salario ? funcionaria : ac );

        console.log(funcionariaComMenorSalario)

    } catch (e) {
        console.log("ERRO");
    }
}

funcionariaChinesaComOMenorSalario()
