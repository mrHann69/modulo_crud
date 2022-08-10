'use strict';
const Client = require('../db.models/cliente.model.js');

/* Create Cliente*/
const createClient = async (req, res) => {
    try {
        const { iduser, username, password, contact } = req.body;
        const newClient = new Client();
            newClient.iduser = iduser;
            newClient.username = username;
            newClient.password = password;
            newClient.contact = contact;

        await newClient.save();
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
        const clients = await Client.find().lean();
        res.status(202);
        res.send(clients);
    } catch (err) {
        console.error(err);
        res.status(500);
        res.json({msg:"no hay clientes"});
    }
}

/* Read One Client*/
const getOneClient = async (req, res) => {
    try {
        const { id } = req.params;
        const oneCliente = await Client.findOne({iduser:id}).lean();
        res.status(200);
        res.json(oneCliente);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({msg : "cliente no encontrado"});
    }
}

/* Update Cliente*/
const updateClient = async (req, res) => {
    try {
        // const updatedClient = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        const { id } = req.params;
        const newData =  {  username :req.body.username, password: req.body.password, contact:req.body.contact };
        const updatedClient = await Client.findOneAndUpdate({iduser:id}, newData, { new: true });
        res.status(201);
        res.json(updatedClient);
    } catch (err) {
        console.log(err);
        res.status(500)
        res.json({msg:"cliente NO actualizado"})
    }
}

/* Delete Cliente*/
const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        await Client.deleteOne({iduser:id});
        // await Cliente.findByIdAndDelete(req.params.id);
        res.status(204);
        res.json({"msg":"cliente borrado"});
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({"msg":"cliente NO borrado"});
    }
}

module.exports = {
    createClient,
    getOneClient,
    getAllClients,
    updateClient,
    deleteClient
};


