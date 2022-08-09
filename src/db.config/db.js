const mongoose = require('mongoose');
//import { dbconf, url } from './db.config.js';
const conf = require('./db.config.js'); //importa url formateada


async function getConnLocal(){
    try {
        // await mongoose.connect(conf.fullURL, conf.options).then(db=>console.log(`Conexion a DB : OK`));
        await mongoose.connect(conf.url, conf.options).then(db=>console.log(`Conexion a DB : OK`));
    } catch (err) {
        console.log(`error connecting DB: ${err}`);
    }
    return mongoose;
}

async function getConnAtlas(){
    try {
        await mongoose.connect(conf.urlAtlas, conf.options).then(db=>console.log(`Conexion a DB ATLAS : OK`));
    } catch (err) {
        console.log(`error connecting DB ATLAS: ${err}`);
    }
    return mongoose;
}

 
module.exports = { getConnLocal, getConnAtlas }



 

// /* conexion para mongo atlas */
// const username = "<mongodb username>";
// const password = "<password>";
// const cluster = "<cluster name>";
// const dbname = "myFirstDatabase";

// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });