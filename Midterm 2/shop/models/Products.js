var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  URL: String,
  purchases: {type: Number, default: 0},
  
});
ProductSchema.methods.purchase = function(cb) {
  this.purchases += 1;
  this.save(cb);
}
//creates products collection
mongoose.model('Products', ProductSchema);

