//importar el modelo modelo de la base de datos
const Proyectos = require('../models/Proyectos');

exports.proyectoHome = function (req, res) {
    //para renderizar una vista
    res.render('index',
        { title: 'Inicio' }
    );
};


//se crea un router para nuevo-proyecto.
exports.formularioProyecto = function (req, res) {
    //para renderizar una vista
    res.render('nuevoProyecto',
        { title: 'Nuevo Proyecto' }
    );
};


//exportamos la funcion para el method post
exports.nuevoProyecto = function (req, res) {
    //leer los datos enviador por el usuario
    // console.log(req.body);

    //validar que hay datos en el input
    const { nombre } = req.body;
    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }
    // si hay errores
    if(errores.length > 0) {
        //enviamos los datos a la vista
        res.render('nuevoProyecto', {
            title: 'Nuevo Proyecto',
            errores
        });
    }else{
        //si no hay errorres insertar en DB
        Proyectos.create({ nombre })
            .then(()  => console.log('insertado correctamente'))
            .catch(error => console.log(error));
    }
}