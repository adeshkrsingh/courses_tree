var express = require('express');
var router = express.Router();
var CourseDataController = require('../app/controllers/courseDataController');

/* GET home page. */
router.get('/', function(req, res, next) {
    CourseDataController.getSample();
  res.render('index', { title: 'Express' });
});

module.exports = router;
