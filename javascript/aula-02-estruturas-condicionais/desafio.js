const precogasolina = 4.89;
const kmPorLitroGasolina = 12; // HB20 //
const precoetanol = 3.40;
const kmPorLitroEtanol = 9; // HB20 //
const etanolOUgasolina = "etanol";
let distanciakm = 75;
let valorDaViagem;

if (etanolOUgasolina == "gasolina") {
    valorDaViagem = (distanciakm / kmPorLitroGasolina) * precogasolina;
    console.log("Esta viagem terá um custo de R$", valorDaViagem.toFixed(2), "em gasolina.");
}
else {
    valorDaViagem = (distanciakm / kmPorLitroEtanol) * precoetanol;
    console.log("Esta viagem terá um custo de R$", valorDaViagem.toFixed(2), "em etanol.");
}