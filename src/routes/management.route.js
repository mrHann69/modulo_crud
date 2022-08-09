const managementClientes = require('../model/cliente.crud');

const express = require('express');
const router = express.Router();

/* CRUD clientes */
router.get('/client', managementClientes.getAllClients);
router.get('/client:id', managementClientes.getOneClient);
router.post('/client', managementClientes.createClient);
router.delete('/client:id', managementClientes.deleteClient);
router.put('/client', managementClientes.updateClient);

module.exports = router;