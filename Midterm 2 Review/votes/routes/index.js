var express = require('express');
var router = express.Router();
require('../models/Candidates');
var mongoose = require('mongoose');
//this is the model for our candidates in the DB
var Candidates = mongoose.model('Candidates');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get all the candidates in the DB
router.get('/candidates', function(req, res, next) {
  //console.log("getting candidates");
  Candidates.find(function(err, candidates){
    if(err){ return next(err); }
    res.json(candidates);
  });
});

//used for adding a new candidate sent in req
router.post('/candidates', function(req, res, next) {
  //console.log("in post,");
  
  var candidate = new Candidates(req.body);
  candidate.save(function(err, candidate){
    if(err){ return next(err); }
    res.json(candidate);
  });
});


//get candidate sent as a parameter
router.param('candidate', function(req, res, next, id) {
  //console.log("in param route: " + id);
  var query = Candidates.findById(id);
  query.exec(function (err, candidate){
    if (err) { return next(err); }
    if (!candidate) { return next(new Error("can't find candidate")); }
    req.candidate = candidate;
    return next();
  });
});

//get particluar candidate id sent in :candidate parameter
router.get('/candidates/:candidate', function(req, res) {
    //console.log("in get route");
    //uses param route to get the candidate id sent as parameter
    res.json(req.candidate);
});

//increment vote route - uses param funciton to look up candidate based on id in candidate parameter
router.put('/candidates/:candidate/vote', function(req, res, next) {
    //console.log("in put vote route");

    //calls vote function defined in Candadites.js, which increments vote for that candidate
  req.candidate.vote(function(err, candidate){
    if (err) { return next(err); }
   
    res.json(candidate);
  });
});
  

router.delete('/candidates/:candidate', function(req, res) {
  //console.log("in delete route");
  //console.log(req.params.candidate);
  Candidates.deleteOne({_id: req.params.candidate}, 
  function(err, result){
    if(err){
      console.log(err);
      
    }else{
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    }
  });

});
module.exports = router;
