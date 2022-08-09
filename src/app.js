'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const pkg = require('../package.json');
require('./db.config/db.js').getConnLocal();  // llama a la inicializacion de la conexion 

//rutas
const management = require('./routes/management.route.js');
const notFound = require('./routes/notFound');
const pruebas = require('./routes/pruebas.route');

// version
app.set('pkg',pkg);
app.get('/api/version',(req,res)=>{
    res.status(200);
    res.json({
        name: app.get('pkg').name,
        description : app.get('pkg').description,
        version: app.get('pkg').version
    });
});

//middlewares
app.use(express.urlencoded({ extended: true }));
//configuracion de morgan
app.use(morgan('dev'));
//formato de comunicacion
app.use(express.json());


//definicion de rutas
app.use('/api/management', management);
app.use('/api/pruebas', pruebas);
app.use('*', notFound);

module.exports = app;