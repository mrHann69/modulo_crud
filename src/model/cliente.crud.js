'use strict';
const mongoose = require('mongoose');
const Cliente = require('../db.models/cliente.model.js');

/* Create Cliente*/
const createClient = async (req, res) => {
    try {
        const { idUser, username, password, contact } = req.body;
        const newClient = new Cliente({
            _id: new mongoose.Types.ObjectId(),
            idUser,
            username,
            password,
            contact
        });
        console.log(newClient);
        await newClient.save().catch((e) => console.log(e));
        res.status(200);
        res.json({ status: "cliente creado" });
    } catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
}

/* Read All Clients*/
const getAllClients = async (req, res) => {
    //console.log("llegué a solicitar a la BD");
    try {
        const clients = await Cliente.find();
        res.status(202);
        res.json(clients);
        //res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({});
    }
}

/* Read One Client*/
const getOneClient = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        res.status(200);
        res.json(cliente);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({});
    }
}

/* Update Cliente*/
const updateClient = async (req, res) => {
    try {
        const updatedClient = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200);
        res.json(updatedClient);
    } catch (err) {
        console.log(err);
    }
}

/* Delete Cliente*/
const deleteClient = async (req, res) => {
    try {
        await Cliente.findByIdAndRemove(req.params.id);
        res.status(204);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

module.exports = {
    createClient,
    getOneClient,
    getAllClients,
    updateClient,
    deleteClient
};


