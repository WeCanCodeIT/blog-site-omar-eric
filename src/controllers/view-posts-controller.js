const BlogPostDomainObject = require('../models/Blog');
const BlogPostService = require('../service/view-posts-service'); //make this
const Blog = require('../models/Blog.sequelize');

class ViewPostsController { 

    static async renderAll (req, res) {
        const blogPosts = await BlogPostService.findAll();
        res.render("view-posts-page", {blogPosts: blogPosts});
    }

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


module.exports = ViewPostsController;