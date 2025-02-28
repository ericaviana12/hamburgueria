// Importando o Mongoose
const mongoose = require('mongoose')

// Definindo o esquema do lanche
const lancheSchema = new mongoose.Schema({
    nomeLanche: {
        type: String,
        required: true,
        unique: true
    },
    descricaoLanche: {
        type: String,
        required: true
    },
    precoLanche: {
        type: Number,
        required: true
    }
})

// Criando o modelo a partir do esquema
const lancheModel = mongoose.model('Lanche', lancheSchema)

// Exportando o modelo
module.exports = lancheModel
