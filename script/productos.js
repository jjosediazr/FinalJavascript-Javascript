/*fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
fetch("https://rickandmortyapi.com/api/character/")
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))*/

/* metodo get */

const personajesHtml = ( array ) => {
    const arrayReducido = array.reduce(( acc, elemento) => {
        return acc + `
        <p>
            ${elemento.descrip}
        </p>
        `
    }, "")

    document.querySelector(".contenedorpro").innerHTML = arrayReducido
}

fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
.then(( respuesta ) => respuesta.json())
.then(( data ) => {
    const array = data.results // puedo recorrer la respuesta y guardar en variables la información que precise
    console.log(array)
    personajesHtml(data.results)
})
.catch((error) => console.log("malio sal"))




fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))


/* metodo post */

const formProductos = document.querySelector("#form-productos")
const inputProducto = document.querySelector("#input-producto")
const inputPrecio = document.querySelector("#input-precio")
const inputImg = document.querySelector("#input-img")
const inputDescrip = document.querySelector("#input-descrip")
const inputCategoria = document.querySelector("#input-categoria")
const inputCantidad = document.querySelector("#input-cantidad")
const inputOferta = document.querySelector("#input-oferta")
const inputDescuento = document.querySelector("#input-descuento")

formProductos.onsubmit = (e) => {
    e.preventDefault()

    fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa", {
    method: "POST",
    body: JSON.stringify({
        Img: inputImg.value,
        Precio: inputPrecio.value,
        Producto: inputProducto.value,
        Descrip: inputDescrip.value,
        Categoria: inputCategoria.value,
        Cantidad: inputCantidad.value,
        Oferta: inputOferta.value,
        Descuento: inputDescuento.value
    }),
    headers: {
        "Content-Type":"application/json"
    }
    })
    .then( res => res.json())
    .then( data => console.log(data))
}


/* Put y patch */

    fetch( `https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            Img: Img,
            Precio: Precio,
            Producto: Producto,
            Descrip: Descrip,
            Categoria: Categoria,
            Cantidad: Cantidad,
            Oferta: Oferta,
            Descuento: Descuento
        }),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => {
        console.log("No se encontro registro para modificar, vuelva a intentarlo")
    })



/* BUSCAR A TRAVÉS DE UNA API */
const formProductos = document.querySelector("#form-busqueda")
const inputProductos = document.querySelector("#input-busqueda")

formProductos.onsubmit = (e) => {
    e.preventDefault()
    peticion(inputProductos.value)    
}

function peticion ( busqueda ) {
    fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa/${busqueda}/`)
    .then( res => res.json())
    .then( data => {
        alert(`El nombre del producto buscado es: ${data.descrip}`)        
    })
    .catch(() => console.log("no se encontro")) 
}




// ASYNC AWAIT PARA PODER HACER PETICIONES

const peticionApi = async () => {
    const respuesta = await fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa/?q=descrip:mate&pageSize=20&page=1")
    const data = await respuesta.json()
    console.log(data)
}

peticionApi()

// PODEMOS HACER PETICIONES DESDE UN JSON

/*fetch("productos.json")
.then( res => res.json())
.then( data => {
        data.forEach(element => {
            console.log(element.email)
        
    });
})   */


/*fetch("mockapi.json") */

fetch('./json/productos.json')
.then( res => res.json())
.then( data => cargarProductos(data))




// EL FETCH TIENE UNA VERSIÓN DE SUGAR SYNTAX 
// ASYNC AWAIT
// es una versión simplificada de fetch

const cards = (array) => {
    const nodos = array.reduce(( acc, element) => {
        return acc + `
        <div class="card" id="descrip-${element.descrip}">
            <div class="container-img">
                <img src=${element.img} alt=${element.descrip}>
            </div>
            <h2>
                ${element.descrip}
            </h2>
            <h3>
                ${element.status}
            </h3>
        </div>
        `
    },"")
    document.querySelector(".contenedorcard").innerHTML = nodos
}

const personajes = async () => {
    const respuesta = await fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
    const data = await respuesta.json()
    cards(data.results)  
    const cardsPersonajes = document.querySelectorAll(".card")
        cardsPersonajes.forEach( elemento => {
            elemento.onclick = () => {
                const id = elemento.id.slice(10)
                const filtrarPersonaje = data.results.filter( elemento => {
                    return elemento.id === Number(id)
                } )
                console.log(filtrarPersonaje)
            }
        })  
}

personajes()

let paginaSiguiente = 40

document.querySelector("#next").onclick = () => {    
    if( paginaSiguiente != 42){
        paginaSiguiente ++
        document.querySelector("#next")
    }
    console.log(paginaSiguiente)
    fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?page=${paginaSiguiente}`)
    .then( res => res.json())
    .then( data => { 
        cards(data.results)                      
    })
}




function Consultar(){
    let carrito2 = JSON.parse(localStorage.getItem ('carrito2')) || [];

    fetch()
     .then(res => res.json()) 
     .then(data=>cargarproductos(data));  
}