import {conexionAPI} from "./conexionAPI.js"
const inputNombre =  document.getElementById("name")
const inputPrecio =  document.getElementById("precio")
const inputImagen =  document.getElementById("url")
const botonEnviar =  document.getElementById("enviar")
const botonLimpiar =  document.getElementById("limpiar")
const containerForm = document.querySelector(".container_formulario")

async function crearProducto(event){
    event.preventDefault()
    if(inputNombre.value && inputPrecio.value && inputImagen.value){
        await conexionAPI.crearProducto(inputNombre.value, inputPrecio.value, inputImagen.value)
        onClean()
    }else{
        if(document.getElementById("alert") === null){
            const alert = document.createElement("p")
            alert.id = "alert"
            alert.style = "color:red"
            alert.innerHTML= "Complete los campos requeridos"
    
            containerForm.appendChild(alert)
        }
    }

}
const onClean = ()=>{
    inputNombre.value = ""
    inputPrecio.value = ""
    inputImagen.value = ""
}

botonEnviar.addEventListener("click", (event) => crearProducto(event))
botonLimpiar.addEventListener("click", (event) => onClean())