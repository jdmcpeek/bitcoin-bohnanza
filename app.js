var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Database Stuffz
var mongoose = require('mongoose');
var model = require('./model');
db = mongoose.connection;
mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {console.log('connected to database');});

var express = require('express.io');
var app = express().http().io();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Traditional Routing
app.get('/', function(req, res) {
  res.render('index');
});

app.post('/generate', function(req, res){
  //console.log(req.body);
  var game = model.create_game(req.body.channel_name, req.body.player_name);
  // we will have validation issues to handle.
  model.save_game(game);
  res.redirect(301, "/play/"+req.body.channel_name);
});

app.get('/play/:channel', function(req, res){
  var game;
  model.find_game(req.param('channel'), function(err, found) {
    if(err) console.error(err);
    game = found;
  });
  console.log(game.channel);
  res.render('play', {channel: game.channel});
});
// Socket Routing
app.io.route('start', function(req){
  app.io.broadcast('hahaha');
});

app.io.route('index', function(req) {
  var game = model.find_game('Test', function(bum) {
    bum.round = bum.round + 1;
    model.save_game(bum);
  });
});

// Listen!
app.listen(7076, function(err) {
  if (err) {
    console.log("failed to connect");
  }
  console.log("listening on port 7076");
});

//Uncomment after placing your favicon in /pubdc
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
