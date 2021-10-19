const Sequelize = require("sequelize");
const connection = require("./database");



const entidade = connection.define('entidades', {
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
    zona: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

// entidade.sync({force: false});
module.exports = entidade;