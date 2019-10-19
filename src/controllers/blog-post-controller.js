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
        // const date = getDate();

        await BlogPostService.save(new BlogPostDomainObject(blogPost, destination, author, date));
            res.redirect("/");
    }

    getDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        const d = new Date();

        let date = months[d.getMonth()] + " " + d.getDate() +", " + d.getFullYear();

      return date;
    }
         
}


module.exports = BlogPostController;