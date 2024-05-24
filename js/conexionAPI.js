const APIurl = "https://alura-geek-eta-black.vercel.app/db.json";

async function listProducts() {
    const conexion = await fetch(APIurl);

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function createProduct(title, image){
    const conexion = await fetch(APIurl, {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            title:title,
            image:image
        })
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

function deleteProduct(id) {
    return fetch(`${APIurl}/${id}`,{
        method: "DELETE"
    });
}

export const conexionAPI = {
    listProducts, createProduct, deleteProduct
}