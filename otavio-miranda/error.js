function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== "number") {
        throw new Error("X e Y precisam ser numeros.");
    }
    return x + y
}

try {
    console.log(soma(4, 5))
    console.log(soma('8', 15))
} catch (erro) {
    console.log(erro)
}
