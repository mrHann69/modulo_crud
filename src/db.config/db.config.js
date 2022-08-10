'use strict';
require('dotenv').config();
 
const dbconf = {
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_HOST : process.env.DB_HOST,
    DB_PORT : process.env.DB_PORT,
    DB_NAME : process.env.DB_NAME,
    DB_CLUSTER : process.env.DB_CLUSTER
}

const options = {
    useNewUrlParser: process.env.USE_NEW_URL_PARSER,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY
}

const url = `mongodb://localhost:27017/clientes`;
                     
const fullURL = `mongodb://${dbconf.DB_USER}:${dbconf.DB_PASSWORD}@${dbconf.DB_HOST}:${dbconf.DB_PORT}/${dbconf.DB_NAME}`;

const urlAtlas = `mongodb+srv://${dbconf.DB_USER}:${dbconf.DB_PASSWORD}@${dbconf.DB_CLUSTER}.mongodb.net/${dbconf.DB_NAME}?retryWrites=true&w=majority`; 
                        

//exportar el objeto conf, configuracion necesaria para la conexion
//con la base de datos mongo
//module.exports = url;
module.exports = { url, fullURL, urlAtlas, options };



