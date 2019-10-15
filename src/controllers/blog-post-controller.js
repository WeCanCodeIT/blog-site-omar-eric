const BlogPostDomainObject = require('../models/Blog');
const BlogPostService = require('../services/blog-post-service'); //make this
const Blog = require('../models/Blog.sequelize');

class BlogPostController { 

    static async renderAll (req, res) {
        try {
            const blogPost = await blogPostService.findAll();
            res.render("index", {blogPosts: blogPosts});

        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async renderBlogPost (req, res) {
        const id = req.params.id;
        try{
            const blogPost = await blogPostService.findBlogPost(id) 
            res.render("blogPost", { blogPost : blogPost });
        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async addBlogPost (req, res) {
        const blogPost = req.body.blogPost;
        const destination = req.body.destination;
        const author = req.body.author;
        const date = req.body.date;
        try{
            await blogPostService.save(new blogPostDomainObject(blogPost, destination, author, date));
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}


module.exports = BlogPostController;