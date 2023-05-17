var novoParagrafo = document.createElement("p")

var texto = document.createTextNode("texto que será adicionado ao p")

novoParagrafo.appendChild(texto)
console.log(novoParagrafo)

let body = document.querySelector("p")

body.appendChild(novoParagrafo)

/**/

var container = document.getElementById("container")
console.log(container)

var el = document.createElement("span")
el.appendChild(document.createTextNode("texto do span"))
console.log(el)

container.appendChild(el)

var el2 = document.createElement('h1')
el2.appendChild(document.createTextNode("Ultmo texto criado"))
container.insertBefore(el2, el)