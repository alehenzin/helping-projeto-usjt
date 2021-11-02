const Sequelize = require('sequelize')
const sequelize = new Sequelize('helping','root','pipogamer',{
	host: 'localhost',
	dialect: 'mysql'
})


module.exports = sequelize;
