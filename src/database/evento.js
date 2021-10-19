const Sequelize = require("sequelize");
const connection = require("./database");



const evento = connection.define('eventos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dt_inicio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dt_final: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desc: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// evento.sync({force: false});
module.exports = evento;