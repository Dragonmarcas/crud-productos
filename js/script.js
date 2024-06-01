

const containerCard = document.querySelector(".container_card")

if(localStorage.getItem("productos") == null){
localStorage.setItem("productos", "[]")
}
const productsDB = localStorage.getItem("productos")
const productos = []
const getProducts =()=>{
    if(productsDB){
        let productsDBConverted = JSON.parse(productsDB)

        productsDBConverted.forEach(product => {
            productos.push(product)
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img class="imagen_card" src="${product.urlImagen}" alt="">
            <div>
                <p>${product.nombre}</p>
                <h3>${product.precio}</h3>
            </div>`
            containerCard.appendChild(card)
        });
    }
}
getProducts()
const onSubmit = ()=>{
    const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <img class="imagen_card" src="${inputImagen.value}" alt="">
            <div>
                <p>${inputNombre.value}</p>
                <h3>${inputPrecio.value}</h3>
            </div>`
        containerCard.appendChild(card)

        saveLocalStorage()
    
}

const saveLocalStorage = ()=>{
    const producto = {
        "nombre":inputNombre.value,
        "precio":inputPrecio.value,
        "urlImagen":inputImagen.value
    }
    
    if(productsDB){
        productos.push(producto)

        localStorage.setItem("productos", JSON.stringify(productos))
        onClean()
    }
}
const onClean = ()=>{
    inputNombre.value = ""
    inputPrecio.value = ""
    inputImagen.value = ""
}
