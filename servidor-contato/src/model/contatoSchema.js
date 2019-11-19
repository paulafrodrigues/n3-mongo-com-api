const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome:{
        type: String,
        required: true,
        unique: true
    },
    celular:{
        type: String,
        required: true,
    },
    fotoPerfil:{
        type: String

    },
    dataNascimento:{
        type: Date,
        required: true
    }
})

const contatosCollection = mongoose.model('contato', ContatoSchema)
module.exports = contatosCollection