import { conexionAPI } from "./conexionAPI.js";
const containerCard = document.querySelector(".container_card")


function crearCard(nombre, precio, urlImagen){
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
            <img class="imagen_card" src="${urlImagen}" alt="">
            <div class="container_description_card">
                <div>
                    <p>${nombre}</p>
                    <h3>${precio}</h3>
                </div>
                <button class="btn btn_delete" id="btn_eliminar" ><i class="fa-solid fa-trash"></i></button>
            </div>
            `

    return card
}

async function eliminarProducto(id){

    await conexionAPI.borrarProducto(id)
}

async function listarProductos(){
    const productos = await conexionAPI.listarProductos()

    productos.forEach(producto => {
        const card = crearCard(producto.nombre, producto.precio, producto.urlImagen)
        containerCard.appendChild(card)
        const btnEliminar = card.querySelector("#btn_eliminar");
        btnEliminar.addEventListener("click", async () => {
            await eliminarProducto(producto.id);
            card.remove();
        });
    });
}
listarProductos()