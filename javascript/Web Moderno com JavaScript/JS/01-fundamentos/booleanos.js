let isAtivo = false
isAtivo = true

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!('' || null || 0 || ' '))

let nome = "Guilherme"
console.log(nome || "Desconhecido")