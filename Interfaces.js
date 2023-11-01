

//Registro
/*
connection.query("INSERT INTO users (nombre, apellido, username, email, contrasena, cuil) VALUES (?, ?, ?, ?, ?, ?);", (err, results) => {
    if (err) {
        console.error('Error en el registro:', err);
        return;
    }
    console.log('Registro exitoso:', results);
});
document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
    // Aquí deberás enviar los datos al servidor.
});
*/




function mostrarRegistro() {
    // Ocultar la interfaz al cambiar el estilo
    document.getElementById("primeraInterfaz").style.display = "none";
    // Mostrar la interfaz
    document.getElementById("segundaInterfaz").style.display = "block";

}
function mostrarInicio() {
    // Ocultar la primera interfaz al cambiar el estilo
    document.getElementById("segundaInterfaz").style.display = "none";
    // Mostrar la interfaz
    document.getElementById("primeraInterfaz").style.display = "block";
    // Ejecutar la función después de que se cargue el contenido HTML
 
}
function menu() {
    // Ocultar la primera interfaz al cambiar el estilo
    document.getElementById("segundaInterfaz").style.display = "none";
    // Mostrar la interfaz
    document.getElementById("menu").style.display = "block";
  
}

/*connection.query('SELECT * FROM brpfk2nakiypfd975ofc.users', (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Resultados de la consulta:', results);
});
*/