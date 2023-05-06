function* geradora1() {
    // código...
    yield "Valor 1"
    // código...
    yield "Valor 2"
    // código...
    yield "Valor 3"
}

const g1 = geradora1()
console.log(g1.next())

for (let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    let i = 0

    while (true) {
        yield i
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* geradora3() {
    yield "Valor 1"
    yield "Valor 2"
    yield "Valor 3"
}

function* geradora4() {
    yield* geradora3()
    yield "Valor 4"
    yield "Valor 5"
    yield "Valor 6"
}

const g4 = geradora4()
for (let valor of g4) {
    console.log(valor)
}

function* geradora5() {
    yield function () {
        console.log("Yield 1")
    }
    yield function () {
        console.log("Yield 2")
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()

function* numerosPares(maximo) {
    let num = 0;
    while (num <= maximo) {
        yield num;
        num += 2;
    }
}

// Cria um objeto gerador de números pares até 10
const pares = numerosPares(10);

// Usa o objeto gerador para imprimir cada número par um de cada vez
console.log(pares.next().value); // imprime 0
console.log(pares.next().value); // imprime 2
console.log(pares.next().value); // imprime 4
console.log(pares.next().value); // imprime 6
console.log(pares.next().value); // imprime 8
console.log(pares.next().value); // imprime 10
