const Blog = require('../models/Blog.sequelize');

module.exports = {
    async findAll () {
        try {
            const Blog = await Blog.findAll();
            return blogPosts;
        } catch (error) {
            return error;
        }
    },
    async findBlogPost (id) {
        try{
            const Blog = await Blog.findByPk(id);
            return blogPost;
        } catch (error){
            return error;
        }

    },
    async save (newBlogPost) {
        try{
            await blogPost.create(newBlogPost);
        } catch(error){
            return error;
        }
    }
}