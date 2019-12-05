var express = require('express');
var router = express.Router();
require('../models/Products');
var mongoose = require('mongoose');
//this is the model for our products in the DB
// Configure multer so that it will upload to '/public/images'
const multer = require('multer')

var Products = mongoose.model('Products');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get all the products in the DB
router.get('/products', function(req, res, next) {
  //console.log("getting products");
  Products.find(function(err, products){
    if(err){ return next(err); }
    res.json(products);
  }).sort({name: 1});;
});

//used for adding a new product sent in req
router.post('/products', function(req, res, next) {
  //console.log("in post,");
  
  var product = new Products(req.body);
  product.save(function(err, product){
    if(err){ return next(err); }
    res.json(product);
  });
});


//get product sent as a parameter
router.param('product', function(req, res, next, id) {
  //console.log("in param route: " + id);
  var query = Products.findById(id);
  query.exec(function (err, product){
    if (err) { return next(err); }
    if (!product) { return next(new Error("can't find product")); }
    req.product = product;
    return next();
  });
});

//get particluar product id sent in :product parameter
router.get('/products/:product', function(req, res) {
    //console.log("in get route");
    //uses param route to get the product id sent as parameter
    res.json(req.product);
});

//increment purchase route - uses param funciton to look up product based on id in product parameter
router.put('/products/:product/purchase', function(req, res, next) {
    //console.log("in put purchase route");

    //calls purchase function defined in Candadites.js, which increments purchase for that product
  req.product.purchase(function(err, product){
    if (err) { return next(err); }
   
    res.json(product);
  });
});
  

router.delete('/products/:product', function(req, res) {
  //console.log("in delete route");
  //console.log(req.params.product);
  Products.deleteOne({_id: req.params.product}, 
  function(err, result){
    if(err){
      console.log(err);
      
    }else{
      res.end('{"success" : "Updated Successfully", "status" : 200}');
    }
  });

});
module.exports = router;
