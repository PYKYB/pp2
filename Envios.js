//codigo Envios.js

// Cargar variables de entorno desde el archivo .env
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

app.post('/registro', (req, res) => {
    const { nombre, apellido, email, contrasena, cuil } = req.body;

    const query = 'INSERT INTO users (nombre, apellido, email, contrasena, cuil) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, email, contrasena, cuil], (err, results) => {
        if (err) {
            console.error('Error al insertar datos en la base de datos:', err);
            res.status(500).json({ error: 'Error al insertar datos' });
        } else {
            console.log('Datos insertados correctamente');
            res.status(200).json({ message: 'Datos insertados correctamente' });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

// Cerrar la conexión a la base de datos al finalizar la aplicación
process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error al cerrar la conexión:', err);
        } else {
            console.log('Conexión cerrada correctamente');
        }
        process.exit(0);
    });
});
