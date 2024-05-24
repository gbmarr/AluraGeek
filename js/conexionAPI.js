const APIurl = "https://alura-geek-eta-black.vercel.app/db.json";

async function listProducts() {
    const conexion = await fetch(APIurl);

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function createProduct(title, image){
    const conexion = await fetch(`${APIurl}/products`, {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            title:title,
            image:image
        })
    });
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function deleteProduct(id) {
    return await fetch(`${APIurl}/${id}`,{
        method: "DELETE"
    });
}

export const conexionAPI = {
    listProducts, createProduct, deleteProduct
}