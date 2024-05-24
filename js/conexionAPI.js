const APIurl = "https://alurageek-fake-api.vercel.app/product";

async function listProducts() {
    const conexion = await fetch(APIurl);

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function createProduct(name, img){
    const conexion = await fetch(APIurl, {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            name:name,
            img:img
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