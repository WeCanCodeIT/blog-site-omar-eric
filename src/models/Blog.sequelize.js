const db = require('../util/db')
const Sequelize = require('sequelize');

const Review = db.define('review', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // tags: { 
        //     type: Sequelize.STRING, 
        //     allowNull: true,
        //     default: "No Description"
        // },
        blogPost: { 
            type: Sequelize.STRING, 
            allowNull: true,
            default: "No Review"
        },
        destination: {
            type: Sequelize.STRING,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date:{
            type: Sequelize.DATEONLY,
            allowNull: false
        }

   
    }

)
module.exports = Blog;