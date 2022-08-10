'use strict';
const app = require('./app.js');
require('dotenv').config();
//configuracion de variables de entorno


//configuracion puerto
const port =  process.env.APP_PORT || 4000 ;

//servidor en escucha
try {
    app.listen(port, ()=>{
        console.log(`server running on port: ${port}`);
    });    
} catch (error) {
    console.error(error);
}

