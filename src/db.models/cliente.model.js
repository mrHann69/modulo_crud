const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClientSchema = new Schema({
    iduser: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true},
    contact: { type: Number, required: true }
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
