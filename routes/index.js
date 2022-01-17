const express = require('express');
const router = express.Router();

//importar el controlardor
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    //declarar las rutas
    router.get('/', proyectosController.proyectoHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    
    //agregamos el post
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

    return router;
}







// VIEW CONTROLLER
// PUG
// EJS = EMBEDDED JAVASCRIPT
// HBS = HANDLESBARS.JS 


//creamos una master page
//creamos la ruta para el formulario de nuevo proyecto