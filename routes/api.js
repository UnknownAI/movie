const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.get('/movies', function(req, res, next){
  Movie.find({}).then(function(movies){
    res.send(movies);
  })
});


router.get('/movies/title/:title',function(req, res, next){
  Movie.find({title: req.params.title}).then(function(movie){
        res.send(movie);
  });
});

router.get('/movies/actor/:name',function(req, res, next){
  Movie.find({ "actors.name":`${req.params.name}`}).then(function(movie){
        res.send(movie);
  });
});


router.get('/movies/sort',function(req, res, next){
    Movie.find({}).sort({title: 1}).then(function(movies){
      res.send(movies);
    })
});


router.post('/movies', function(req, res, next){
  Movie.create(req.body).then(function(movie){
    res.send(movie);
  }).catch(next);
});


router.delete('/movies/:id', function(req, res, next){
  Movie.findByIdAndRemove({_id: req.params.id}).then(function(movie){
    res.send(movie);
  });
});


module.exports = router;
