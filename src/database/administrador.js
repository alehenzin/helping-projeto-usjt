const Sequelize = require("sequelize");
const connection = require("./database");

const administrador = connection.define('administradores', {
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

// administrador.sync({force: false});
module.exports = administrador;