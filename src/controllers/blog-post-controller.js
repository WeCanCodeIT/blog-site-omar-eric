const BlogPostDomainObject = require('../models/Blog');
const BlogPostService = require('../service/blog-service'); //make this
const Blog = require('../models/Blog.sequelize');

class BlogPostController { 

    static async renderAll (req, res) {
        const blogPosts = await BlogPostService.findAll();
        res.render("index", {blogPosts: blogPosts});
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

    static async addBlogPost (req, res) {
        const blogPost = req.body.blogPost;
        const destination = req.body.destination;
        const author = req.body.author;
        const date = req.body.date;
        

        await BlogPostService.save(new BlogPostDomainObject(blogPost, destination, author, date));
            res.redirect("/");
    }
   
}


module.exports = BlogPostController;