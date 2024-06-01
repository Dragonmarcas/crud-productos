async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos")

    const resultado = conexion.json()

    return resultado
}


async function crearProducto(nombre, precio, urlImagen){
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            nombre,
            precio,
            urlImagen
        })
    })

    const resultado = conexion.json()

    return resultado
}

async function borrarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    })

    const resultado = conexion.json()

    return resultado;
}

export const conexionAPI = {
    listarProductos,
    crearProducto,
    borrarProducto
}

