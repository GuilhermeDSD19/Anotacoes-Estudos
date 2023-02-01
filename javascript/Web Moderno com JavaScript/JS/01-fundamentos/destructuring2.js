// Declaração da variavel [Elementos do array] = Array
const [a] = [30]
console.log(a)

var teste = [10, 5, 8, 15, 40, 86, 8, 18, 32, 18]

// Não importa o indice, o primeiro elemento será o indice 0.
const [n1, n2, n3, n4 = 0] = teste
console.log(n1, n2, n3, n4) // 10, 5, 8, 15

// Arrays dentro de arrays
const [,[, nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)