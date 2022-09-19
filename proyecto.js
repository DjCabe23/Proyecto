let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
document.getElementById("reloj").innerHTML = dia + "/" + mes + "/" + año;

//Informacion cliente

class cliente {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

let form = document.getElementById("form");
form.addEventListener("submit", cargarInfo,);

function cargarInfo() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    data = new cliente(nombre, apellido, email);
    alert(`Gracias ${nombre}, a tu correo te llegara una verificacion`)
}

//Carrito

const botonvaciar = document.getElementById("vaciarcarro");
botonvaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito()
    });

let carrito = []

//Productos
let tipoDeProductos = [
    {id: 1, nombre: "Zapatilla", precio :2500, img : `./zapatilla.jpg`},
    {id: 2, nombre: "Remera", precio :3000, img : `./remera.jpg`},
    {id: 3, nombre: "Pantalon", precio :4500, img : `./pantalom.jpg`},
    ]

//Seleccion de ropa
const contenedor = document.getElementById("ropaDeportiva");

tipoDeProductos.forEach((producto) =>{
    const div = document.createElement(`div`);
    div.classList.add(`producto`);
    div.innerHTML = `
    <img src=${producto.img}>
    <h4>${producto.nombre}</h4>
    <p>$${producto.precio}</p>
    <button id ="agregar${producto.id}" class="boton-agregar">AGREGAR</button>`

    contenedor.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener(`click`, () => {
        agegarCarrito(producto.id)
        console.log(carrito)
    })
})

//Agregar 

function agegarCarrito(prodId) {
    const item = tipoDeProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}

//Eliminar

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

//actualizacion del carro
const preciototal = document.getElementById("precioTotal")
const contenedorCarrito = document.getElementById(`carrito-contenedor`);
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML=""
    carrito.forEach((prod)=>{
    const div = document.createElement(`div`);
    div.className = (`productoEnCarrito`);
    div.innerHTML = `
    <ul class="lista"><li>${prod.nombre}
    Precio: ${prod.precio}</li>
    </ul>`
    
    contenedorCarrito.appendChild(div)
    });
    preciototal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0);

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

// JSON

document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        agegarCarrito()        
    }
})