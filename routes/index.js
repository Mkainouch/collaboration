var express = require('express');
var router = express.Router();
const fs = require('fs');
let rawdata = fs.readFileSync('../qustionreponse.json');
let student = JSON.parse(rawdata);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/administratif%20et%20financier' , function(req, res, next) {
  let rawdata = fs.readFileSync('../qustionreponse.json');
  let student = JSON.parse(rawdata);
  var y=student.administratif;
  var i;
  var rampli=""; 
  for(i=0;i<y.length;i++){
    var posthtml=
    '<p id="det'+i+'" class="det1">'+y[i].id+'</p>'+
    '<div class=" changetoast "  onmouseover=" affichage('+i+') ">'+
    '<div class="toast-header cd  " onclick=" affichage() ">'+
     ' <strong class="mr-auto" id="titre'+i+'">'+y[i].titre+'</strong>'+
      '<small>18/4</small>'+
    '</div>'+
    '<div class="toast-body overfl" >'+
      '<p class="overfl" id="msg'+i+'">'+y[i].qst+'</p>'+
    '</div>'+
    '<div class="d-none" id="mail'+i+'">'+y[i].email+' <br> par '+y[i].nomuti+'</div>'+
    '<div class="d-none" id="rps'+i+'">'+y[i].rps+'</div>'+
    '</div>';
    rampli+=posthtml;
  }
  res.render('index', { title: 'administratif et financier' , mess : rampli ,action : 'administratif et financier' });
  
});
router.post('/administratif%20et%20financier', function(req, res, next) {
  var y=student.administratif;
  y[req.body.getid].rps = req.body.comment;
  let data = JSON.stringify(student);
  fs.writeFileSync('../qustionreponse.json', data);
  res.redirect('administratif%20et%20financier' );
});
router.get('/gestion%20urbaine' , function(req, res, next) {
  let rawdata = fs.readFileSync('../qustionreponse.json');
  let student = JSON.parse(rawdata);
  var y=student.gestion;
  var i;
  var rampli=""; 
  for(i=0;i<y.length;i++){
    var posthtml=
    '<p id="det'+i+'" class="det1">'+y[i].id+'</p>'+
    '<div class=" changetoast "  onmouseover=" affichage('+i+') ">'+
    '<div class="toast-header cd  " onclick=" affichage() ">'+
     ' <strong class="mr-auto" id="titre'+i+'">'+y[i].titre+'</strong>'+
      '<small>18/4</small>'+
    '</div>'+
    '<div class="toast-body overfl" >'+
      '<p class="overfl" id="msg'+i+'">'+y[i].qst+'</p>'+
    '</div>'+
    '<div class="d-none" id="mail'+i+'">'+y[i].email+' <br> par '+y[i].nomuti+'</div>'+
    '<div class="d-none" id="rps'+i+'">'+y[i].rps+'</div>'+
    '</div>';
    rampli+=posthtml;
  }
  res.render('index', { title: 'gestion urbaine' ,mess : rampli ,action : 'gestion urbaine' });
 
});
router.post('/gestion%20urbaine', function(req, res, next) {
  var y=student.gestion;
  y[req.body.getid].rps = req.body.comment;
  let data = JSON.stringify(student);
  fs.writeFileSync('../qustionreponse.json', data);
  res.redirect('gestion%20urbaine');
});
router.get('/affaires%20juridiques%20et%20foncieres' , function(req, res, next) {
  let rawdata = fs.readFileSync('../qustionreponse.json');
  let student = JSON.parse(rawdata);
  var y=student.affaires;
  var i;
  var rampli=""; 
  for(i=0;i<y.length;i++){
    var posthtml=
    '<p id="det'+i+'" class="det1">'+y[i].id+'</p>'+
    '<div class=" changetoast "  onmouseover=" affichage('+i+') ">'+
    '<div class="toast-header cd  " onclick=" affichage() ">'+
     ' <strong class="mr-auto" id="titre'+i+'">'+y[i].titre+'</strong>'+
      '<small>18/4</small>'+
    '</div>'+
    '<div class="toast-body overfl" >'+
      '<p class="overfl" id="msg'+i+'">'+y[i].qst+'</p>'+
    '</div>'+
    '<div class="d-none" id="mail'+i+'">'+y[i].email+' <br> par '+y[i].nomuti+'</div>'+
    '<div class="d-none" id="rps'+i+'">'+y[i].rps+'</div>'+
    '</div>';
    rampli+=posthtml;
  }
  res.render('index', { title: 'affaires juridiques et foncieres' ,mess : rampli  ,action : 'affaires juridiques et foncieres' });
});
router.post('/affaires%20juridiques%20et%20foncieres', function(req, res, next) {
  var y=student.affaires;
  y[req.body.getid].rps = req.body.comment;
  let data = JSON.stringify(student);
  fs.writeFileSync('../qustionreponse.json', data);
  res.redirect('affaires%20juridiques%20et%20foncieres' );
});
router.get('/etudes' , function(req, res, next) {
  let rawdata = fs.readFileSync('../qustionreponse.json');
  let student = JSON.parse(rawdata);
  var y=student.etudes;
  
  var i;
  var rampli=""; 
  for(i=0;i<y.length;i++){
    var posthtml=
    '<p id="det'+i+'" class="det1">'+y[i].id+'</p>'+
    '<div class=" changetoast "  onmouseover=" affichage('+i+') ">'+
    '<div class="toast-header cd  " onclick=" affichage() ">'+
     ' <strong class="mr-auto" id="titre'+i+'">'+y[i].titre+'</strong>'+
      '<small>18/4</small>'+
    '</div>'+
    '<div class="toast-body overfl" >'+
      '<p class="overfl" id="msg'+i+'">'+y[i].qst+'</p>'+
    '</div>'+
    '<div class="d-none" id="mail'+i+'">'+y[i].email+' <br> par '+y[i].nomuti+'</div>'+
    '<div class="d-none" id="rps'+i+'">'+y[i].rps+'</div>'+
    '</div>';
    rampli+=posthtml;
  }
  res.render('index', { title: 'etudes' ,mess : rampli ,action : 'etudes' });
});
router.post('/etudes', function(req, res, next) {
  var y=student.etudes;
  y[req.body.getid].rps = req.body.comment;
  let data = JSON.stringify(student);
  fs.writeFileSync('../qustionreponse.json', data);
  res.redirect('etudes' );
});
router.get('/autre' , function(req, res, next) {
  let rawdata = fs.readFileSync('../qustionreponse.json');
  let student = JSON.parse(rawdata);
  var y=student.autre;
  
  var i;
  var rampli=""; 
  for(i=0;i<y.length;i++){
    var posthtml=
    '<p id="det'+i+'" class="det1">'+y[i].id+'</p>'+
    '<div class=" changetoast "  onmouseover=" affichage('+i+') ">'+
    '<div class="toast-header cd  " onclick=" affichage() ">'+
     ' <strong class="mr-auto" id="titre'+i+'">'+y[i].titre+'</strong>'+
      '<small>18/4</small>'+
    '</div>'+
    '<div class="toast-body overfl" >'+
      '<p class="overfl" id="msg'+i+'">'+y[i].qst+'</p>'+
    '</div>'+
    '<div class="d-none" id="mail'+i+'">'+y[i].email+' <br> par '+y[i].nomuti+'</div>'+
    '<div class="d-none" id="rps'+i+'">'+y[i].rps+'</div>'+
    '</div>';
    rampli+=posthtml;
  }
  res.render('index', { title: 'autre departement',mess : rampli, action: 'autre'  });
});
router.post('/autre', function(req, res, next) {
  var y=student.autre;
  y[req.body.getid].rps = req.body.comment;
  let data = JSON.stringify(student);
  fs.writeFileSync('../qustionreponse.json', data);
  res.redirect('autre' );
  console.log(y[0].rps);
});
module.exports = router;
