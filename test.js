var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mydb');

var Schema = mongoose.schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});


var blog = mongoose.model('blog', blogSchema);


console.log('This is a test. TEST');
console.log('Please test me Harry, test me');
