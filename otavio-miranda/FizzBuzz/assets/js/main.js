const botao = document.querySelector("#botao");

botao.addEventListener("click", (e) => {
    e.preventDefault();
    const num = Number(document.querySelector("#num").value)
    const resultado = document.querySelector(".resultado");
    let FizzBuzz = verificarSeEDivisivel(num)
    resultado.innerHTML = `${FizzBuzz}`
})

function verificarSeEDivisivel(n) {
    if (n % 3 === 0 && n % 5 === 0) return `FizzBuzz`
    if (n % 3 === 0) return `Fizz`
    if (n % 5 === 0) return `Buzz`
    return n
}
