var express = require('express');
var blogPostRouter = express.Router();

const blogPostController = require('../src/controllers/blog-post-controller')

/* GET home page. */

router.get('/blogPost/:id', blogPostController.renderBlogPost);

/* POST new review */
router.post('/', blogPostController.addBlogPost);

module.exports = blogPostRouter;