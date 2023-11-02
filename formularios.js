//formularios.js

document.addEventListener("DOMContentLoaded", function () {
    const registrarButton = document.getElementById("registrarButton");
    registrarButton.addEventListener("click", enviarFormulario);
});

function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;
    const cuil = document.getElementById("cuil").value;

    const data = {
        nombre,
        apellido,
        email,
        contrasena,
        cuil,
    };

    // Realiza una solicitud POST al servidor para enviar los datos
    fetch('/registro', { // servidor
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Aquí puedes manejar la respuesta del servidor
        console.log(data);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
}

  




  

