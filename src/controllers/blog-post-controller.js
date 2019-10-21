const BlogPostDomainObject = require('../models/Blog');
const blogPostService = require('../service/blog-service'); //make this
const Blog = require('../models/Blog.sequelize');

class BlogPostController { 

    static async renderAll (req, res) {
        const blogPosts = await blogPostService.findAll();
        res.render("blog-post-page", {blogPosts: blogPosts});
    }

    static async renderBlogPost (req, res) {
        const id = req.params.id;
       
            const blogPost = await blogPostService.findBlogPost(id) 
            res.render("blog-post-page", { blogPost : blogPost });
        
    }

    static async addBlogPost (req, res) {
        const blogPost = req.body.blogPost;
        const destination = req.body.destination;
        const author = req.body.author;
        const date = req.body.date;
        
        const blogPostObject = new BlogPostDomainObject(blogPost, destination, author, date);
        await blogPostService.save(blogPostObject);
            res.redirect("/" );

        }

    }

module.exports = BlogPostController;