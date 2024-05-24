import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector("[data-form]");

async function createCard(){

    const name = document.querySelector("[data-title]").value;
    const image = document.querySelector("[data-img]").value;

    await conexionAPI.createProduct(name, image);

    window.location.href = "../index.html";
}


form.addEventListener("submit", event => createCard(event));