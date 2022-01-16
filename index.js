const express = require('express');
const routes = require('./routes');
//para que lea el path para las vistas
const path = require('path');

//se crea la aplicacion de express
const app = express();

//definimos el puerto
app.listen(5502);

//Ruta para homepage middleware request and response
// app.use('/', (req, res) => {
//     res.send('Hello World');
// });


//usar las rutas en el servidor
app.use('/', routes());

//habilitar PUG como engine de plantillas
app.set('view engine', 'pug');
//añadir la carpera de las vistas
app.set('views', path.join(__dirname, './views'));
// añadir la carpeta de estilos estaticos
app.use(express.static('public'))