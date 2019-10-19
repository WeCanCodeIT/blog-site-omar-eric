const Blog = require('../models/Blog.sequelize');

module.exports = {
    async findAll() {

            const blogPosts = await Blog.findAll();
            return blogPosts;

    }  

}