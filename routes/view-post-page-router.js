var express = require('express');
var viewPostRouter = express.Router();

const viewPostController = require('../src/controllers/view-posts-controller')

/* GET home page. */
// router.get('/', viewPostsController.renderAll);
router.get('/blogPost/:id', viewPostController.renderBlogPost);

// /* POST new review */
// router.post('/', viewPostsController.addBlogPost);

module.exports = viewPostRouter;