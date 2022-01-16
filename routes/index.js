const express = require('express');
const router = express.Router();

//importar el controlardor
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    //declarar las rutas
    router.get('/', proyectosController.proyectoHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    return router;
}







// VIEW CONTROLLER
// PUG
// EJS = EMBEDDED JAVASCRIPT
// HBS = HANDLESBARS.JS 


//creamos una master page