import { conexionAPI } from "./conexionAPI.js";

const list = document.querySelector("[data-list]");

function createCard(id, name, image){
    const product = document.createElement("li");
    product.className = "product__card";
    product.innerHTML = `
            <img class="product__img" src="${image}" alt="" />
            <h3 class="product__name">${name}</h3>
            <button data-delete class="product__button">
                <i class="bx bx-x"></i>
            </button>
    `;

    const btnDelete = product.querySelector("[data-delete]");

    btnDelete.addEventListener("click", ()=>{
        conexionAPI.deleteProduct(id);

        window.location.href = "../index.html";
    })

    return product;
}

async function showProducts(){
    const listAPI = await conexionAPI.listProducts();

    listAPI.forEach(product => {
        list.appendChild(createCard(product.id, product.name, product.img))
        console.log(product.id);
    });
}

showProducts();