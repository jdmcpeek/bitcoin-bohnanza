var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bohnanza');
var db = mongoose.connection;


var playerSchema = Schema({
  _id: Number,
  name: String,
  cards: Array
});

var player = mongoose.model('Player', playerSchema);
