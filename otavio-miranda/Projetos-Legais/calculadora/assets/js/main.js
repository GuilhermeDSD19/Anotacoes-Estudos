function criaCalculadora() {
    return {
        // Propriedades
        display: document.querySelector(".display"),

        //Metodos
        iniciar() {
            this.cliqueBotoes()
            this.pressionarEnter()
        },

        cliqueBotoes() {
            document.addEventListener("click", e => {
                const el = e.target

                if (el.classList.contains("btn-num")) this.btnParaDiplay(el.innerText);
                if (el.classList.contains("btn-clear")) this.clearDisplay()
                if (el.classList.contains("btn-del")) this.apagaUm()
                if (el.classList.contains("btn-eq")) this.realizaConta()
            })
        },

        pressionarEnter() {
            this.display.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    this.realizaConta()
                }
            })
        },

        btnParaDiplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta) {
                    alert("Conta Invalida")
                    return
                }
                this.display.value = conta
            } catch (e) {
                alert("Conta Invalida")
                console.log(e)
                return
            }
        },
    }
}

const calculadora = criaCalculadora();
calculadora.iniciar();