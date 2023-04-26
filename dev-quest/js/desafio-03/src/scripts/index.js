const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea')
const botao = form.querySelector(".botao")

function adicionarClasse(input, status) {
    input.classList.add(`${status}`)
}

// Monitora as alterações nos input
inputs.forEach(input => {
    input.addEventListener('change', _ => {
        if (input.value.length > 0) {
            adicionarClasse(input, "valido")
            const campoObrigatorio = input.nextElementSibling
            campoObrigatorio.style.display = "none"
        } else {
            input.classList.remove("valido")
        }
    })
})

// Monitora o botão e faz a verificação dos inputs vazio
botao.addEventListener("click", _ => {
    inputs.forEach(input => {
        if (input.value.length == 0) {
            adicionarClasse(input, "invalido")
            const campoObrigatorio = input.nextElementSibling
            campoObrigatorio.style.display = "block"
        }
    })
})

