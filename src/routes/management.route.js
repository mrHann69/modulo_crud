const managementClientes = require('../model/cliente.crud');

const express = require('express');
const router = express.Router();

/* CRUD clientes */
router.get('/client/:id', managementClientes.getOneClient);
router.get('/client', managementClientes.getAllClients);
router.post('/client', managementClientes.createClient);
router.delete('/client/:id', managementClientes.deleteClient);
router.put('/client/:id', managementClientes.updateClient);

module.exports = router;