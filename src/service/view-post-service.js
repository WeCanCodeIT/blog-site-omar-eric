const Blog = require('../models/Blog.sequelize');

module.exports = {

    async findBlogPost(id) {

            const blogPost = await Blog.findByPk(id);
            return blogPost;

    }
}