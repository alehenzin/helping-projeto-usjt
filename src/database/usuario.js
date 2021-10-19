const Sequelize = require("sequelize");
const connection = require("./database");

const usuario = connection.define('usuarios', {
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endec: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nasc: {
        type: Sequelize.STRING,
        allowNull: false            
    }
})

// usuario.sync({force: false});
module.exports = usuario;