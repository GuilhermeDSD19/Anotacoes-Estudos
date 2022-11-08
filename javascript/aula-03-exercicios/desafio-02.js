/* 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave; */

let altura = 1.80;
let peso = 135;
let imc = peso / Math.pow(altura, 2);

if (imc < 18.5){
    console.log(imc.toFixed(2), "(Abaixo do Peso)");
}
else if (imc >= 18.5 && imc < 25) {
    console.log(imc.toFixed(2), "(Peso Normal)");
}
else if (imc >= 25 && imc < 30) {
    console.log(imc.toFixed(2), "(Acima do Peso)");
}
else if (imc >= 30 && imc < 40) {
    console.log(imc.toFixed(2), "(Obesidade)");
}
else {
    console.log(imc.toFixed(2), "(Obesidade Grave)");
}

