var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fattman for Senate' });
});

// 
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Fattman for Senate' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Fattman for Senate' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Fattman for Senate' });
});

router.get('/getinvolved', function(req, res, next) {
  res.render('getinvolved', { title: 'Fattman for Senate' });
});

router.get('/donate', function(req, res, next) {
  res.render('donate', { title: 'Fattman for Senate' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Fattman for Senate' });
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Fattman for Senate' });
});


module.exports = router;
