const db = require('../data/db')
const Sequelize = require('sequelize');

const Blog = db.define('blog', {
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
            allowNull: true
        },
        author: {
            type: Sequelize.STRING,
            allowNull: true
        },
        date:{
            type: Sequelize.DATEONLY,
            allowNull: true
        }

   
    }

)
module.exports = Blog;