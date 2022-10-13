let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
document.getElementById("reloj").innerHTML = dia + "/" + mes + "/" + año;

// JSON
document.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))    
    }
    actualizarCarrito()    
})

//Informacion cliente

class cliente {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

//Carrito

const botonvaciar = document.getElementById("vaciarcarro");
botonvaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito()
    actualizarLocal()
    });

const finCompra = document.getElementById("finCompra")
finCompra.addEventListener("click", () => {
    carrito.length=0
    actualizarCarrito()
    actualizarLocal()
    Swal.fire({
        title: "Perfecto",
        text: "la compra ha sido perfecta, te enviaremos un correo con la informacion",
        icon: "success",
        buttons: true,
        dangerMode: true,
    })
    .then((isOkay) => {
        if (isOkay) {
            form.submit();
            window.location.reload();
        }
    });
    return false;
})

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
        Toastify({
            text: "Se agrego el producto seleccionado",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    })
})

//Agregar 

function agegarCarrito(prodId) {
    const item = tipoDeProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    actualizarLocal()
}

//Eliminar

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    actualizarLocal()
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
    </ul><button id ="EliminarProducto">X</button>`
    
    contenedorCarrito.appendChild(div)
    });
    preciototal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio, 0);
    
    const ElimianrProd = document.getElementById("EliminarProducto");
    ElimianrProd.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito()
    actualizarLocal()
    });
}

const actualizarLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}