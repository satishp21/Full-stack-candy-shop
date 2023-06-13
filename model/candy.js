const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Candy = sequelize.define('candy',{
    candyname :{
        type : Sequelize.TEXT
    },
    description :{
        type : Sequelize.TEXT
    },
    price :{
        type : Sequelize.INTEGER
    },
    quantity :{
        type : Sequelize.INTEGER
    }
})

module.exports = Candy