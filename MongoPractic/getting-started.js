var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("connected!");
    var kittySchema = new mongoose.Schema({
        name: String
    });
    kittySchema.methods.speak = function() {
        var greeting = this.name ?
            "Meow name is " + this.name :
            "I don't have a name";
        console.log(greeting);
    }
   
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({ name: 'Silence' });

    console.log(silence.name); // 'Silence'
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "Meow name is fluffy"
    silence.speak();
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()

    fluffy.save(function(err, fluffy) {
        if (err) return console.error(err);
        fluffy.speak();

    });
    silence.save(function(err, silence) {
        if (err) return console.error(err);
        silence.speak();

    });
    Kitten.find({ name: /^S/ }, function(err, kittens) {
        if (err) return console.error(err);
        console.log("kittens: " +kittens);
    })

    


});
