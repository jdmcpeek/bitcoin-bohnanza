var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Database Stuffz
var mongoose = require('mongoose');
var game_model = require('./model/game');

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
// Display the starting page
app.get('/', function(req, res){
  //probably also should find a better query.
  game_model.find({},{channel: 1, players: 1}, function(err, games){
      if(err) console.error(err); //too extreme
      //probably should send like 10, get more on socket
      else res.render('index', {games: games});
      });
});

// Generate a new game
app.post('/generate', function(req, res){
  //console.log(req.body);
  var game = game_model.create(req.body.channel_name, req.body.player_name);
  game.save(function(err){
    if(err) res.status(403).send(err.message);
    else res.redirect(301, "/play/"+req.body.channel_name);
  });
});

// Resume a game - how do we tell who is playing?
app.get('/play/:channel', function(req, res){
  game_model.findOne({channel: req.params.channel}, function(err, game){
    if (err) console.error(err);
    if (game === null) res.status(404).send("No such game!");
    else res.render('play', {game: game});
  });
});

app.io.route('ready', function(req){
  var game = game_model.findOne({channel: req.data});
  app.io.broadcast('real_time', game);
});

app.io.route('add_player', function(req){
  console.log(req.data);
});

// Socket Routing
app.io.route('start', function(req){
  app.io.broadcast('hahaha');
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
