const BlogPostDomainObject = require('../models/Blog');
const BlogPostService = require('../service/blog-service');
const Blog = require('../models/Blog.sequelize');

class BlogPostController { 


    static async renderBlogPost (req, res) {
        const id = req.params.id;
        try{
            const blogPost = await BlogPostService.findBlogPost(id) 
            res.render("blogPost", { blogPost : blogPost });
        } catch (error) {
            res.render("error", {error: error});
        }
    }


}


module.exports = BlogPostController;