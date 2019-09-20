var express = require('express');
var router = express.Router();
var CourseDataController = require('../app/controllers/courseDataController');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('welcome to courses data route')
    CourseDataController.getSample();
    console.log('welcome to courses data route done')
  res.render('index', { title: 'Express' });
});

module.exports = router;
