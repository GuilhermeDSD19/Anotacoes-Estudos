// function exibirDataAtual() {
//     const resultado = document.querySelector(".resultado")

//     const agora = new Date();
//     const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
//     const diaAtualDaSemana = diasDaSemana[agora.getDay()]
//     const dia = agora.getDate().toString().padStart(2, "0")
//     const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
//     const mes = meses[agora.getMonth()];
//     const ano = agora.getFullYear()
//     const horas = agora.getHours()
//     const minutos = agora.getMinutes()

//     // resultado.innerHTML = `${diaAtualDaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minutos}`
// }

// Versão refatorado

function exibirDataAtual() {
    const resultado = document.querySelector(".resultado");

    const agora = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    resultado.innerHTML = agora.toLocaleString('pt-BR', options);
}

exibirDataAtual()

