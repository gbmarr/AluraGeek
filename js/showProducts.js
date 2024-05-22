import { conexionAPI } from "./conexionAPI.js";

const list = document.querySelector("[data-list]");

function createCard(id, name, image){
    const product = document.createElement("li");
    product.className = "product__card";
    product.innerHTML = `
            <img class="product__img" src="${image}" alt="" />
            <h3 class="product__name">${name}</h3>
            <button id="${id}" name="btnProductDelete" class="product__button">
                <i class="bx bx-x"></i>
            </button>
    `;

    return product;
}

async function showProducts(){
    const listAPI = await conexionAPI.listProducts();

    listAPI.forEach(product => {
        list.appendChild(createCard(product.id, product.title, product.image))
    });
}

showProducts();