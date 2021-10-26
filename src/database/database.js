const Sequelize = require('sequelize')
const sequelize = new Sequelize('helping','root','61115464',{
	host: 'localhost',
	dialect: 'mysql'
})


module.exports = sequelize;