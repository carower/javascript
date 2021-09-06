const URLGET   = "https://jsonplaceholder.typicode.com/posts"

// Definimos DATOS a enviar

let compraFinal = [{nombre: Rodrigo, apellido: Gonzalez}]

// Creamos evento para el boton
$("#btnpagar").click(() => { 

    let nombre = document.getElementById("nombre").value;
    console.log(nombre); 

    let apellido = document.getElementById("apellido").value;
    console.log(apellido); 
 
    $.post(URLGET, compraFinal ,(respuesta, estado) => {
            if(estado === "success"){
            const agregado = {nombre: ""}
            agregado.nombre = nombre;
            const agregado = {apellido: ""}
            agregado.apellido = apellido;
            compraFinal.push(agregado);
            console.log(compraFinal)
            $("body").append(`<div id="append2">
¡Gracias ${agregado.nombre} ${agregado.apellido} por comprar en Ticketplus!
</div>`);
        }  

    });
});