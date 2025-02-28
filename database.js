// Importação do mongoose
const mongoose = require('mongoose')

// Configuração do banco de dados
const url = 'mongodb+srv://admin:123Senac@ericaviana12.ozwku.mongodb.net/dbhamburgueria'

// Validação (evitar a abertura de várias conexões)
let conectado = false

// Método para conectar com o banco de dados
const conectar = async () => {
    if (!conectado) {
        try {
            await mongoose.connect(url) // Conectar
            conectado = true
            console.log("MongoDB Conectado")
        } catch (error) {
            console.log(error)
        }
    }
}

// Método para desconectar com o banco de dados
const desconectar = async () => {
    if (conectado) {
        try {
            await mongoose.disconnect(); // Desconectar sem URL
            conectado = false
            console.log("MongoDB Desconectado")
        } catch (error) {
            console.log(error)
        }
    }
}

// Exportar para o main os métodos conectar e desconectar
module.exports = {conectar, desconectar}
