var express = require('express');
var router = express.Router();
const indexController = require('../src/controllers/index-controller')

router.get('/', function(req,res){
    res.sendFile('C:/Users/ojada/WCCI/blog-site-omar-eric/public/home-page.html')
});

module.exports = router;

