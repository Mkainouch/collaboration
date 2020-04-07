var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/administratifetfinancier' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gestionurbaine' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/affairesjuridiquesetfoncieres' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/etudes' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/autre' , function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
