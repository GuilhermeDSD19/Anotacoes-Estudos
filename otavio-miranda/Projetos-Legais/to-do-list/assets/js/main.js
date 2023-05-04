const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

btnTarefa.addEventListener("click", _ => {
    if (!(inputTarefa.value)) return;
    criarEAdicionarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "Enter") {
        if (!(inputTarefa.value)) return
        criarEAdicionarTarefa(inputTarefa.value)
    }
})

function criarEAdicionarTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaLi() {
    const li = document.createElement("li");
    return li;
}

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar esta tarefa");
    li.appendChild(botaoApagar);
}

document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    if (!(listaDeTarefas)) return
    for (let tarefa of listaDeTarefas) {
        criarEAdicionarTarefa(tarefa);
    }
}

adicionarTarefasSalvas();





