let nombre = prompt("Ingrese nombre");
entrada()

function entrada() {
    alert("Hola " + nombre + " que andaba buscando?")
compra()
}

function compra() {
    let objetos = Number(prompt("Elige una opcion: \n 1:Zapatillas \n 2:Remera \n 3:Pantalon \n 4:Pelota \n 5:Estas mirando nomas :)"))
if (objetos =="1") { 
    let elegir=Number(prompt(`La zapatillas salen $3000, desea llevarla?:\n 1:si \n 2:no`))
    if(elegir == "1"){
        metodoPago()
    }else if (elegir == "2"){
        compra()
    }
}else if(objetos =="2"){
    let elegir= Number(prompt("La remera sale $6500, desea llevarla?: \n 1:si \n 2:no"))
    if(elegir == "1"){
        metodoPago()
    }else if (elegir == "2"){
        compra()
    }    
}else if(objetos =="3"){
    let elegir= Number(prompt("El pantalon sale $8500, desea llevarla?: \n 1:si \n 2:no"))
    if(elegir == "1"){
        metodoPago()
    }else if (elegir == "2"){
        compra()
    }
}else if(objetos =="4"){
    let elegir= Number(prompt("La pelota sale $2500, desea llevarla?: \n 1:si \n 2:no"))
    if(elegir == "1"){
        metodoPago()
    }else if (elegir == "2"){
        compra()
    }
}else if(objetos == "5"){    
}else{
    return compra()
}
}

function metodoPago() {
    let pago= Number(prompt("Con que desea pagar: \n 1:Efectivo \n 2:Tarjeta \n 3:me equivoque"))
    if(pago == "1"){
        alert(`Pagaste con efectivo. Muchas gracias ${nombre}`)
    }else if(pago == "2"){
        alert(`Pagaste con tarjeta. Muchas gracias ${nombre}`)
    }else if(pago == "3"){
        return compra()
    }else if(pago != "1", "2", "3"){
        alert("Por favor ingrese un numero")
        return metodoPago()
    }

}



