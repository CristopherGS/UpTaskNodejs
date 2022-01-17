const { Sequelize } = require('sequelize');

//importar la configuracion de la base de datos
const db = require('../config/db');

//definimos el modelo de la base de datos
const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
});

module.exports = Proyectos;
