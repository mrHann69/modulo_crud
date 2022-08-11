'use strict';
const app = require('./app.js');
require('dotenv').config();
//configuracion de variables de entorno


//configuracion puerto
const port =  process.env.APP_PORT || 8080 ;

//servidor en escucha
try {
    app.listen(port, ()=>{
        console.log(`server running on port: ${port}`);
    });    
} catch (error) {
    console.error(error);
}

