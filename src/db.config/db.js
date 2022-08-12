const mongoose = require('mongoose');
//import { dbconf, url } from './db.config.js';
const conf = require('./db.config.js'); //importa url formateada


async function getConnLocal(){
    try {
        // await mongoose.connect(conf.fullURL, conf.options).then(db=>console.log(`Conexion a DB : OK`));
        await mongoose.connect(conf.url, conf.options)
            .then(db=>console.log(`Conexion a mongoDB LOCAL : OK`));
    } catch (err) {
        console.log(`error conectando mongoDB LOCAL: ${err}`);
    }
    return mongoose;
}

async function getConnAtlas(){
    try {
        await mongoose.connect(conf.urlAtlas, conf.options)
            .then(db=>console.log(`Conexion a mongoDB ATLAS : OK`));
    } catch (err) {
        console.log(`error conectando mongoDB ATLAS: ${err}`);
    }
    return mongoose;
}

 
module.exports = { getConnLocal, getConnAtlas }
