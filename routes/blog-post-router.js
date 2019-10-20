var express = require('express');
var blogPostRouter = express.Router();

const blogPostController = require('../src/controllers/blog-post-controller')

/* GET Post. */

blogPostRouter.get('/blogPost/:id', blogPostController.renderBlogPost);
blogPostRouter.get('/', blogPostController.renderAll);
/* POST new Post */
blogPostRouter.post('/', blogPostController.addBlogPost);

module.exports = blogPostRouter;