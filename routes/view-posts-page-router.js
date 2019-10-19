var express = require('express');
var ViewPostRouter = express.Router();

const ViewPostController = require('../src/controllers/view-posts-controller')

/* GET home page. */
router.get('/', ViewPostsController.renderAll);
router.get('/blogPost:id', ViewPostController.renderBlogPost);

// /* POST new review */
// router.post('/', viewPostsController.addBlogPost);

module.exports = ViewPostRouter;