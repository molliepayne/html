var mongoose = require('mongoose');
var CandidateSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  votes: {type: Number, default: 0},
  
});
CandidateSchema.methods.vote = function(cb) {
  this.votes += 1;
  this.save(cb);
}
//creates candidates collection
mongoose.model('Candidates', CandidateSchema);

