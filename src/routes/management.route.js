'use strict';
const managementClientes = require('../model/cliente.crud');
const authJwt = require('../middlewares/auth.jwt.js');

const express = require('express');
const router = express.Router();

/* CRUD clientes */
router.get('/client/:id', managementClientes.getOneClient);
router.get('/client',  managementClientes.getAllClients);
router.post('/client', authJwt.verifyToken, managementClientes.createClient);
router.delete('/client/:id', authJwt.verifyToken, managementClientes.deleteClient);
router.put('/client/:id', authJwt.verifyToken,  managementClientes.updateClient);

module.exports = router;