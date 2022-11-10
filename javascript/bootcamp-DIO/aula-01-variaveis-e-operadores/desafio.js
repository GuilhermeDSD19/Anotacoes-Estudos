const precogasolina = 4.18;
const kmPorLitro = 8;
let distanciakm = 135;
let valorDaViagem;

valorDaViagem = (distanciakm / kmPorLitro) * precogasolina

console.log("Esta viagem terá um custo de R$",valorDaViagem.toFixed(2), "em gasolina");