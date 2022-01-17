const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
//creamos la conexion de la base de datos
const sequelize = require('./config/db');

//para que lea el path para las vistas
const path = require('path');

//se crea la aplicacion de express
const app = express();
//importar modelo de la base de datos
require('./models/Proyectos');
//comprobamos la conexion de base de datos
sequelize.sync()
    .then(() => console.log('Conexion a la base de datos exitosa'))
    .catch(err => console.log(err));





//habilitar PUG como engine de plantillas
app.set('view engine', 'pug');

//añadir la carpera de las vistas
app.set('views', path.join(__dirname, './views'));

// añadir la carpeta de estilos estaticos
app.use(express.static('public'))

//habiilitar body-parser para leer los datos enviados por el usuario
app.use(bodyParser.urlencoded({ extended: true }));

//definimos el puerto
app.listen(5502);

//Ruta para homepage middleware request and response
// app.use('/', (req, res) => {
//     res.send('Hello World');
// });


//usar las rutas en el servidor
app.use('/', routes());



