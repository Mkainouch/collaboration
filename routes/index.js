var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/administratif%20et%20financier' , function(req, res, next) {
  res.render('index', { title: 'administratif et financier' });
});
router.get('/gestion%20urbaine' , function(req, res, next) {
  res.render('index', { title: 'gestion urbaine' });
});
router.get('/affaires%20juridiques%20et%20foncieres' , function(req, res, next) {
  res.render('index', { title: 'affaires juridiques et foncieres' });
});
router.get('/etudes' , function(req, res, next) {
  res.render('index', { title: 'etudes' });
});
router.get('/autre' , function(req, res, next) {
  res.render('index', { title: 'autre departement' });
});
module.exports = router;
