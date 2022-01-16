exports.proyectoHome = function (req, res) {
    //para renderizar una vista
    res.render('index');
};

exports.formularioProyecto = function (req, res) {
    //para renderizar una vista
    res.render('nuevo-proyecto',
        { title: 'Nuevo Proyecto' }
    );
};