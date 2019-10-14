const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'TravelForum', // db name
  'root', // db username
  'Password12!@#', // db password
  { // config object
    dialect: 'mysql', // type of db
    host: 'localhost' // db hosting location
  }
)

module.exports = sequelize