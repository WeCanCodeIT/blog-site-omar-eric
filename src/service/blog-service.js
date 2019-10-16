const Blog = require('../models/Blog.sequelize');

module.exports = {
    async findAll() {

            const blogPosts = await Blog.findAll();
            return blogPosts;

    },
    async findBlogPost(id) {

            const blogPost = await Blog.findByPk(id);
            return blogPost;
        

    },
    async save(newBlogPost) {

            await Blog.create(newBlogPost);
         
    }
}