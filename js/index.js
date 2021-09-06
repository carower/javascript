const URLGET   = "https://jsonplaceholder.typicode.com/posts"

const direccionMail = [{email: "rodrigo@gmail.com"}]

$("#btn1").click(() => { 

    let email = document.getElementById("email").value;
    console.log(email); 
 
    $.post(URLGET, direccionMail ,(respuesta, estado) => {
        if( email == null || email.length == 0 ) {
            alert ("Debes ingresar una dirección de email")
            return false;
    
    }
        if(estado === "success"){
            const agregado = {email: ""}
            agregado.email = email;
            direccionMail.push(agregado);
            console.log(direccionMail)
            $("#suscripcion").append(`<div id="append">
¡Felicitaciones ${agregado.email}! <br> ¡Ahora estás suscripto!
</div>`);
        }  

    });
});