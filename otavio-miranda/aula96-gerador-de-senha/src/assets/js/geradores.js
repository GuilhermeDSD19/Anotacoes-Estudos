import geraSenha from "./formGeraSenha";

const exibirSenhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
    gerarSenha.addEventListener("click", (e) => {
        e.preventDefault();
        exibirSenhaGerada.innerHTML = gerarSenhaAleatoria()
    })
}

function gerarSenhaAleatoria() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    )
    return senha || 'Nada selecionado'
}