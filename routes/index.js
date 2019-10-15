// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Anything' });
// });

var express = require('express');
var router = express.Router();

const blogPostController = require('../src/controllers/blog-post-controller');

/* GET home page. */
router.get('/', blogPostController.renderAll);
// GET single review page
router.get('/Blog/:id', blogPostController.renderBlogPost);

/* POST new review */
router.post('/', blogPostController.addBlogPost);

module.exports = router;
