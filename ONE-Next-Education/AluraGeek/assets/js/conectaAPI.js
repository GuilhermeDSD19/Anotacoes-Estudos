
const ip = "https://alura-geek-cyan-two.vercel.app";

async function listaProductos() {
    try {
        const conexion = await fetch(`${ip}/productos`);
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
}

async function createProduct(nombre, precio, imagen) {
    try {
        const conexion = await fetch(`${ip}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
}

async function deleteProduct(id) {
    try {
        const conexion = await fetch(`${ip}/productos/${id}`, {
            method: 'DELETE'
        });
        return conexion.status;
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;
    }
}

async function PutProduct(id, nombre, precio, imagen) {
    try {
        const conexion = await fetch(`${ip}/productos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    }
}

export const conectaAPI = {
    listaProductos,
    createProduct,
    deleteProduct,
    PutProduct
};
