'use strict';
const app = require('./app.js');
const dotenv = require('dotenv');

//configuracion de variables de entorno
dotenv.config();

//configuracion puerto
const port =  process.env.PORT || 4000 ;

//servidor en escucha
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});