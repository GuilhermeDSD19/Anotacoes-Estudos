import { conect } from "./conect.js";

const lista = document.querySelector("[card-list]");

function construyeCard(id,nombre,precio,imagen){
    const card = document.createElement("div");
    card.className="card";
    card.id=id
    
    card.innerHTML=
    `
    <img data-id="${id}" src="${imagen}" />
    <div data-id="${id}" class="card-container--info">
      <p data-id="${id}">${nombre}</p>
      <div class="card-container--value" data-id="${id}">
        <p data-id="${id}">$ ${precio}</p>
        <img src="./assets/icon/trashIcon.png" data-delate data-id="${id}"/>
      </div>
    </div>
  </div>
  `
  const deleteIcons = card.querySelector('[data-delate]');

  deleteIcons.addEventListener('click', async (event) => {
    const cardId = event.target.getAttribute('data-id');

    if (cardId) {
      conect.deleteProduct(cardId).then(() => {
      console.log('Producto eliminado exitosamente');
      // location.reload();
    });
    }
  });


  card.addEventListener('click', (event) => {
    const cardId = event.target.getAttribute('data-id');
    const formulario = document.querySelector("[data-formulario]");
    formulario.id = cardId

    const cardElement = document.getElementById(cardId);

    const imgSrc = cardElement.querySelector("img").src;
    const nombre = cardElement.querySelector(".card-container--info > p").innerText;
    const precio = cardElement.querySelector(".card-container--value > p").innerText;

    document.querySelector("[data-nombre]").value = nombre
    document.querySelector("[data-precio]").value = precio.replace(/[$ ]/g, "")
    document.querySelector("[data-imagen]").value = imgSrc
  })
  return card;
}


// Obtener todos los productos
conect.getProducts().then(products => {
  console.log(products);
  // lista.innerHTML = ``;
  // products.reverse();
  products.forEach(element => lista.appendChild(construyeCard(element.id, element.nombre, element.precio, element.imagen)));
}).catch(error => {
  lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion ${error} :(</h2>`;
});