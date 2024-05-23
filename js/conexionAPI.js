async function listProducts() {
    const conexion = await fetch("http://localhost:3001/products");

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function createProduct(title, image){
    const conexion = await fetch("http://localhost:3001/products", {
        method: "POST",
        header:{"Content-type":"application/json"},
        body: JSON.stringify({
            title:title,
            image:image
        })
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listProducts, createProduct
}