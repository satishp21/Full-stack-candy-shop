const Sequelize = require('sequelize')

const sequilize = new Sequelize('candyshop','root','S@tishpa2001',{
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequilize