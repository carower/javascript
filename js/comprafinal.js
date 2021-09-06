// Definimos DATOS a enviar

let compraFinal = [{nombre: "Rodrigo", apellido: "Gonzalez"}]


// Creamos evento para el boton
$("#btnpagar").click(() => { 

    let nombre = document.getElementById("nombre").value;
    console.log(nombre); 

    let apellido = document.getElementById("apellido").value;
    console.log(apellido); 
 
    $.post(URLGET, compraFinal ,(respuesta, estado) => {
            if(estado === "success"){
            let nuevoUsuario = {nombre:"", apellido:""}
            nuevoUsuario.nombre = nombre;
            nuevoUsuario.apellido = apellido;
            compraFinal.push(nuevoUsuario);
            console.log(compraFinal)
            $("body").append(`<div id="append2">
¡Gracias ${nuevoUsuario.nombre} ${nuevoUsuario.apellido} por comprar en Ticketplus!
</div>`);
        }  

    });
});