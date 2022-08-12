'use strict';
const jwt = require('jsonwebtoken');
require('dotenv').config();

function createToken(iduser){
    const token = jwt.sign(iduser, process.env.SECRET);
    return token;
}

module.exports = {createToken};

