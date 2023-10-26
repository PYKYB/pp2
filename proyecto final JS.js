const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'brpfk2nakiypfd975ofc-mysql.services.clever-cloud.com',
  user: 'uynlidhop611ql7p',
  password: 'EHNvFGNWYFLWtdqUbGxW',
  database: 'brpfk2nakiypfd975ofc',
  port: 3306,
});
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});
connection.query('SELECT * FROM brpfk2nakiypfd975ofc.users', (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
        return;
    }
    console.log('Resultados de la consulta:', results);
});

connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err);
    } else {
        console.log('Conexión cerrada');
    }
});


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




