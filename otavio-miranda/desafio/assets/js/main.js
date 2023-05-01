const elementos = [
    { tag: 'p', texto: "Frase 1" },
    { tag: 'div', texto: "Frase 2" },
    { tag: 'footer', texto: "Frase 3" },
    { tag: 'section', texto: "Frase 4" },
];

// function criarTag(tag) {
//     let elemento = document.createElement(`${tag}`)
//     return elemento
// }

// function adicionarTexto(elemento, texto) {
//     elemento.innerHTML = `${texto}`
//     return elemento
// }

// function adicionarElementoAoHTML(elemento) {
//     document.querySelector(".container").appendChild(elemento)
// }

// for (let i = 0; i < elementos.length; i++) {
//     let { tag, texto } = elementos[i]
//     let tagComTexto = adicionarTexto(criarTag(tag), texto)
//     adicionarElementoAoHTML(tagComTexto)
// }


const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length ; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML=texto  
    div.appendChild(tagCriada);
}

container.appendChild(div);





