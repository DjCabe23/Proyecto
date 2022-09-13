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
boton?.addEventListener("click", cargarInfo);

function cargarInfo() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let email = document.getElementById("Email").value;
    let info1 = new cliente(nombre, apellido, email);
    console.log(info1);
    infoCliente(info1);
}

function infoCliente(cliente) {
    let datos = document.getElementById("Informacion");
    datos.innerHTML = "";
    let nuevoContenedor = document.createElement("div");
    nuevoContenedor.innerHTML = `Gracias ${cliente.nombre}, al correo ${cliente.email} le llegara la confirmacion de nueva cuenta, Gracias`; 
    tipoDeProductos()
}


const contenedor = document.getElementById("ropaDeportiva");
let tipoDeProductos = [
    {id: 1, nombre: "Zapatilla", precio :2500, img : `./zapatilla.jpg`},
    {id: 2, nombre: "Remera", precio :3000, img : `./remera.jpg`},
    {id: 3, nombre: "Pantalon", precio :4500, img : `./pantalom.jpg`},
    ]

tipoDeProductos.forEach((producto) =>{
    const div = document.createElement(`div`);
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.img}>
    <h4>${producto.nombre}</h4>
    <p>${producto.precio}</p>
    <button id ="agregar${producto.id}" class="boton-agregar>AGREGAR</button>"`

    contenedor.appendChild(div)
})
























