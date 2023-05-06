function Calculadora() {
    this.display = document.querySelector(".display")

    this.iniciar = () => {
        this.cliqueBotoes()
        this.pressionarEnter()
    }

    this.cliqueBotoes = () => {
        document.addEventListener("click", e => {
            const el = e.target

            if (el.classList.contains("btn-num")) {
                this.btnParaDiplay(el.innerText);
                this.display.focus()
            }
            if (el.classList.contains("btn-clear")) this.clearDisplay()
            if (el.classList.contains("btn-del")) this.apagaUm()
            if (el.classList.contains("btn-eq")) this.realizaConta()
        })
    }

    this.pressionarEnter = () => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.realizaConta()
            }
        })
    }

    this.btnParaDiplay = (valor) => this.display.value += valor;
    this.clearDisplay = () => this.display.value = ''
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1)


    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)
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
    }
}

const calculadora = new Calculadora()
calculadora.iniciar()