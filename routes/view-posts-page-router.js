var express = require('express');
var ViewPostsRouter = express.Router();

const ViewPostsController = require('../src/controllers/view-posts-controller');

/* GET home page. */
ViewPostsRouter.get('/', ViewPostsController.renderAll);
ViewPostsRouter.get('/blogPost:id/', ViewPostsController.renderBlogPost);

// /* POST new review */
// router.post('/', viewPostsController.addBlogPost);

module.exports = ViewPostsRouter;