'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Client = require('../db.models/cliente.model.js');
 

const verifyToken = async (req, res, next) => {
    try {
        /* decodificacion del token */
        const token = req.headers["x-access-token"];        
        if (!token) return res.status(403).json({ message: "no token provided" });
        let decoded = jwt.verify(token, process.env.SECRET);

        /* verificacion en la base de datos */
        const client = await Client.findOne({iduser: decoded}).lean().catch(err=>{console.log(err)});
        if (!client) return res.status(404).json({ message: "user not found" });
        next();
    } catch (error) {
        return res.status(501).json({ message: "unauthorized" });
    }
}

module.exports = {verifyToken};