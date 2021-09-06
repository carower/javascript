const URLGET   = "https://jsonplaceholder.typicode.com/posts"

// VARIABLES CARRITO DE COMPRAS

let carrito = [];

class ItemElegido {
    constructor (obra, cantidad) {
this.nombre = infoCompra.nombre;
this.cantidad = cantidadEntradas;
this.codigo = infoCompra.codigo;
this.precio = infoCompra.precio;
this.subtotal = infoCompra.precio * cantidadEntradas;

}
}

let cantidadEntradas;

let infoCompra;
function infoCompra2 (evt) {
let codigoObra = evt.target.value; 
infoCompra = obras.find (elemento => elemento.codigo == codigoObra)

}


// AGREGAR AL CARRITO 

function agregarCarrito (ItemElegido) {
let itemAagregar = new ItemElegido (infoCompra, cantidadEntradas) 
carrito.push (itemAagregar)

console.log ("Se agregó un nuevo item al carrito")
}

// BOTONES & EVENTOS 

let seleccion;
let seleccion2;
let seleccion3;
let seleccion4;
let seleccion5;
let seleccion6;
let seleccion7;
let seleccion8;
let seleccion9;
let seleccion10;

let carritoTotal = 0;


//OBRA 1

let btn1 = document.getElementById("btn1");

btn1.addEventListener ("click", meanGirls)
function meanGirls (evt) { 

seleccion = parseInt(document.getElementById('seleccion').value);
cantidadEntradas = seleccion;
alert(`Se han agregado ${seleccion} entradas se ha agregado correctamente al carrito`);

carritoTotal += seleccion
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion + " entradas para Mean Girls al carrito.");
infoCompra2 (evt);
agregarCarrito(ItemElegido);


}

//OBRA 2
let btn2 = document.getElementById("btn2");

btn2.addEventListener ("click", wicked)
function wicked (evt) { 

seleccion2 = parseInt(document.getElementById('seleccion2').value);
cantidadEntradas = seleccion2;
alert(`Se han agregado ${seleccion2} entradas se ha agregado correctamente al carrito`);

carritoTotal += seleccion2
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion2 + " entradas para Wicked al carrito.");
infoCompra2 (evt);
agregarCarrito(ItemElegido);


}


//OBRA 3

let btn3 = document.getElementById("btn3");

btn3.addEventListener ("click", mormon)
function mormon (evt) { 
seleccion3 = parseInt(document.getElementById('seleccion3').value);
cantidadEntradas = seleccion3;
alert(`Se han agregado ${seleccion3} entradas al carrito`);

carritoTotal += seleccion3
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion3 + " entradas para The Book of Mormon al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 4
let btn4 = document.getElementById("btn4");

btn4.addEventListener ("click", rent)
function rent (evt) { 
seleccion4 = parseInt(document.getElementById('seleccion4').value);
cantidadEntradas = seleccion4;
alert(`Se han agregado ${seleccion4} entradas correctamente al carrito`);

carritoTotal += seleccion4
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion4 + " entradas para RENT al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 5    
let btn5 = document.getElementById("btn5");

btn5.addEventListener ("click", once)
function once (evt) { 
seleccion5 = parseInt(document.getElementById('seleccion5').value);
cantidadEntradas = seleccion5;
alert(`Se han agregado ${seleccion5} entradas al carrito`);

carritoTotal += seleccion5
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion5 + " entradas para Once on this Island al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 6 
let btn6 = document.getElementById("btn6");

btn6.addEventListener ("click", spring)
function spring (evt) { 
seleccion6 = parseInt(document.getElementById('seleccion6').value);
cantidadEntradas = seleccion6;
alert(`Se han agregado ${seleccion6} entradas al carrito`);

carritoTotal += seleccion6
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion6 + " entradas para Spring Awakening al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}


//OBRA 7
let btn7 = document.getElementById("btn7");

btn7.addEventListener ("click", waitress)
function waitress (evt) { 
seleccion7 = parseInt(document.getElementById('seleccion7').value);
cantidadEntradas = seleccion7;
alert(`Se han agregado ${seleccion7} entradas al carrito`);

carritoTotal += seleccion7
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion7 + " entradas para Waitress al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 8
let btn8 = document.getElementById("btn8");

btn8.addEventListener ("click", matilda)
function matilda (evt) { 
seleccion8 = parseInt(document.getElementById('seleccion8').value);
cantidadEntradas = seleccion8;
alert(`Se han agregado ${seleccion8} entradas al carrito`);

carritoTotal += seleccion8
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion8 + " entradas para Matilda al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 9
let btn9 = document.getElementById("btn9");

btn9.addEventListener ("click", lion)
function lion (evt) { 
seleccion9 = parseInt(document.getElementById('seleccion9').value);
cantidadEntradas = seleccion9;
alert(`Se han agregado ${seleccion9} entradas al carrito`);

carritoTotal += seleccion9
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion9 + " entradas para Lion King al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}

//OBRA 10
let btn10 = document.getElementById("btn10");

btn10.addEventListener ("click", hamilton)
function hamilton (evt) { 
seleccion10 = parseInt(document.getElementById('seleccion10').value);
cantidadEntradas = seleccion10;
alert(`Se han agregado ${seleccion10} entradas al carrito`);

carritoTotal += seleccion10
$("#cantidadItems").html(`${carritoTotal}`);

console.log("Se han añadido " + seleccion10 + " entradas para Hamilton al carrito.")
infoCompra2 (evt);
agregarCarrito(ItemElegido);
}


// VER CARRITO

$("#btnCarrito").click(() => {
if (carrito.length != 0) {
$("#carritoCargado").show () 
for (let i=0; i < carrito.length; i++) {
$("#append").append(`<div> <div id="linea"><p> <b> ${carrito[i].cantidad}</b </p>
                                   <p> x </p>
                                   <p> <b>${carrito[i].nombre}</b> </p>
                                   <p> $${carrito[i].precio} </p>
                                   </div>
                                   <p> <b> subtotal: </b> $${carrito[i].subtotal} </p>
                             </div>`)
                             
$("#vaciar") .click ((vaciarCarrito) => {
$("#append").remove ()
}
)
}

}
}

)


// VACIAR CARRITO

function vaciarCarrito() {
    carrito = []
    localStorage.clear()
  }

// ABRIR CARRITO 

function verCarrito(){
 
    $("#btnCarrito").on("click", function() {
      $("#carritoCargado").fadeToggle( "fast");
    });
    
  }
