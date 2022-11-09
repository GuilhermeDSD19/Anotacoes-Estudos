
/* Declaração e invocação de função

function teste(){
    Bloco de comandos;
}

teste();
*/

///

/* Exemplos de função com parametros:
function saymyname(nome){
    console.log("Your name is:", nome);
}

saymyname("Guilherme");
saymyname("Heisenberg");

///

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
*/

///

/*
function IncremetarJuros (valor, PercentualJuros){
    const ValorDeAcrescimo = (PercentualJuros / 100) * valor;
    return valor + ValorDeAcrescimo;
}

console.log(IncremetarJuros(250, 10));
console.log(IncremetarJuros(300, 25));
console.log(IncremetarJuros(400, -15));
*/

function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc){
    if (imc < 18.5){
        return("(Você esta Abaixo do Peso)");
    }
    else if (imc >= 18.5 && imc < 25) {
        return("(Você esta no seu Peso Ideal)");
    }
    else if (imc >= 25 && imc < 30) {
        return("(Você esta Acima do Peso)");
    }
    else if (imc >= 30 && imc < 40) {
        return("(Você esta Obeso)");
    }
    else {
        return("(Você esta com Obesidade Grave)");
    }
}

// Main
(function (){
    let peso = 85;
    let altura = 1.80;

    const imc = calcularImc(peso, altura);
    console.log("Seu IMC é de:", imc.toFixed(2) ,classificarImc(imc));
})();