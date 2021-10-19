const Sequelize = require('sequelize')
const sequelize = new Sequelize('helping','root','073013',{
	host: 'localhost',
	dialect: 'mysql'
})


module.exports = sequelize;