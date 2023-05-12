class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metodos de Instancia
    aumentarVolume() {
        this.volume += 2
    }

    // Metodos estaticos
    static soma(x, y) {
        console.log(this, x+y)
    }
}

const controle1 = new ControleRemoto('LG-87')
// controle1.soma(2 , 5) - Não tem acesso
ControleRemoto.soma(2, 5) // [class ControleRemoto] 7