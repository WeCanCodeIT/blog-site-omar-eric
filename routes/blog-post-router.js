var express = require('express');
var blogPostRouter = express.Router();

const blogPostController = require('../src/controllers/blog-post-controller')

/* GET Post. */

blogPostRouter.get('/blogPost/:id', blogPostController.renderBlogPost);

/* POST new Post */
blogPostRouter.post('blog-post-page', blogPostController.addBlogPost);

// router.get('/', blogPostController.renderAll);

module.exports = blogPostRouter;