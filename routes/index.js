const express = require('express');
const router = express.Router();

//importar el controlardor
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    router.get('/', proyectosController.proyectoHome);
    router.get('/nosotros', proyectosController.nosotros);
    return router;
}
