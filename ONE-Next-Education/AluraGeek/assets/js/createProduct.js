import { conect } from "./conect.js";


// Capturar los botones
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');

// Agregar event listeners para los botones
submitBtn.addEventListener('click', function() {
    const nombre= document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    if (!(nombre == "" || precio == "" || imagen == "")) {
        conect.createProduct({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        }).then(newProduct => {
            console.log('Nuevo producto creado:', newProduct);
            // location.reload();
        }).catch(error => {
            console.error('Error al crear el producto:', error);
            // location.reload();
        });
    }
});

clearBtn.addEventListener('click', function() {
    const nombre= document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const id = document.querySelector("[data-formulario]").id;

    if (!(nombre == "" || precio == "" || imagen == "")) {
        conect.updateProduct(id, {
            nombre: nombre,
            precio: precio,
            imagen: imagen
        }).then(() => {
            console.log('Producto actualizado exitosamente');
            // location.reload();
        }).catch(error => {
            console.error('Error al Actualizar el producto:', error);
            // location.reload();
        });
    }

});