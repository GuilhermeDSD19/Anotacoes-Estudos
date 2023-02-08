function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

let exemplo = total(2, 3, 4, 5)
console.log(exemplo)

const frutas = ["maçã", "banana", "laranja"];
const verduras = ["cenoura", "abobrinha", "berinjela"];
const alimentos = [...frutas, ...verduras];
console.log(alimentos); 

function soma(a, b, c) {
  return a + b + c;
}
const numeros = [1, 2, 3];
console.log(soma(...numeros)); 
