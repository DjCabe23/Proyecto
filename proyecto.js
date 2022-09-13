let fecha = new Date();
let año = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDay();
document.getElementById("reloj").innerHTML = dia + "/" + mes + "/" + año;

class cliente {
    informacion(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

let boton = document.getElementById("info");
boton?.addEventListener("click", cargarInfo,);

function cargarInfo() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    let data = new cliente(nombre, apellido, email);
    console.log(data)
}

let carrito = []

const contenedor = document.getElementById("ropaDeportiva");
let tipoDeProductos = [
    {id: 1, nombre: "Zapatilla", precio :2500, img : `./zapatilla.jpg`},
    {id: 2, nombre: "Remera", precio :3000, img : `./remera.jpg`},
    {id: 3, nombre: "Pantalon", precio :4500, img : `./pantalom.jpg`},
    ]

tipoDeProductos.forEach((producto) =>{
    const div = document.createElement(`div`);
    div.classList.add(`producto`);
    div.innerHTML = `
    <img src=${producto.img}>
    <h4>${producto.nombre}</h4>
    <p>${producto.precio}</p>
    <button id ="agregar${producto.id}" class="boton-agregar">AGREGAR</button>`

    contenedor.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener(`click`, () => {
        agegarCarrito(producto.id)
        console.log(carrito)
    })
})

function agegarCarrito(prodId) {
    const item = tipoDeProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
}
























