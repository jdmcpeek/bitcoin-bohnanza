var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var model = require('./model');

var express = require('express.io');
var app = express().http().io();

db = mongoose.connection;
mongoose.connect('mongodb://localhost/test');
  console.log('connected bitches');

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');


  // // Broadcast the new visitor event on ready route.
  // app.io.route('check', function(req){
  //   app.io.broadcast('key', model.create_game("SAMP", "LE"));
  // });

  app.io.route('start', function(req){
    app.io.broadcast('hahaha');
  });


  app.io.route('index', function(req) {
    var game = model.find_game('Test', function(bum) {
      bum.round = bum.round + 1;
      model.save_game(bum);
    });
  });

  // Send client html.
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.post('/generate', function(req, res) {
    //console.log(req);
    res.render('index');
    // res.send(req);
  });

  app.listen(7076, function(err) {
    if (err) {
      console.log("failed to connect");
    }
    console.log("listening on port 7076");
  });


  // uncomment after placing your favicon in /pubdc
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  //app.use(bodyParser());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // app.use('/', routes);
  // app.use('/users', users);

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

//db.on('error', console.error.bind(console, 'connection error:'));
module.exports = app;
