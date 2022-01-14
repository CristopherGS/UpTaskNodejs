const express = require('express');
const routes = require('./routes');

//se crea la aplicacion de express
const app = express();

//definimos el puerto
app.listen(5502);

//Ruta para homepage middleware request and response
// app.use('/', (req, res) => {
//     res.send('Hello World');
// });

//usar las rutas en el servid
app.use('/', routes());
