var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/color', function(req, res){
  res.render('game1', {results: 'Choose Color'});
})

router.get('/scissor', function(req, res){
  res.render('game2');
})

router.get('/guess1', function(req, res){
  var random = Math.floor(Math.random() * 3) + 1;
  if(random == 1){
    res.render('game1', {results: 'You Win'});
  }else{
    res.render('game1', {results: 'You lose'});
  }
});

router.get('/guess2', function(req, res){
  var random = Math.floor(Math.random() * 3) + 1;
  if(random == 2){
    res.render('game1', {results: 'You Win'});
  }else{
    res.render('game1', {results: 'You lose'});
  }
});

router.get('/guess3', function(req, res){
  var random = Math.floor(Math.random() * 3) + 1;
  if(random == 3){
    res.render('game1', {results: 'You Win'});
  }else{
    res.render('game1', {results: 'You lose'});
  }
});

module.exports = router;
