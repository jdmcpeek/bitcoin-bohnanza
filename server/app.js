'use strict';
/*** Logging and Debug ***/
var debug = require('debug'),
  note = debug('app:note'),
  //send real errors to console & debug
  error = function (message) {
    debug('app:error')(message);
    console.error(message);
  },
  //send log to console & debug
  log = function (message) {
    debug('app:log')(message);
    console.log(message);
  },
  logger = require('morgan');


var express = require('express'),
  io = require('socket.io'),
  http = require('http'),
  app = express(),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  path = require('path'),
  server = http.createServer(app),
  io = io.listen(server);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());

var newgame = require('./routes/newgame');
var play = require('./routes/play');



/*** Model ***/
var game_model = require('./model/game');
//
// /*** Traditional Routing ***/
// // Display the starting page
// app.get('/', function (req, res) {
//   //probably also should find a better query.
//   game_model.find({}, {
//     channel: 1,
//     players: 1
//   }, function (err, games) {
//     if (err) error(err); //too extreme
//     //probably should send like 10, get more on socket
//     else res.render('index', {
//       games: games
//     });
//   });
// });
//
// // Generate a new game
// app.post('/generate', function (req, res) {
//   var game = game_model.create(req.body.channel_name, req.body.player_name);
//   game.save(function (err) {
//     if (err) res.status(403).send(err.message);
//     else res.redirect(301, '/play/' + req.body.channel_name);
//   });
// });
//
// // Resume a game - how do we tell who is playing?
// app.get('/play/:channel', function (req, res) {
//   game_model.findOne({
//     channel: req.params.channel
//   }, function (err, game) {
//     if (err) error(err);
//     if (game === null) res.status(404).send('No such game!');
//     else {
//       //gotta watch for no-sql injection
//       res.render('play', {
//         channel: req.params.channel,
//         game: game.strip
//       });
//     }
//   });
// });
//
// /*** Socket Routing ***/
// // Error to console and socket
// var broadcast_error = function (message) {
//   error(message);
//   app.io.broadcast('error', message);
// };
//
// // When a page emits ready, give it the game object.
// app.io.route('ready', function (req) {
//   var channel = req.data;
//   game_model.find({
//     channel: channel
//   }, function (err, game) {
//     app.io.broadcast('real_time', game);
//   });
// });
//
// // When a page emits add_player, add it to the game object and save it
// app.io.route('add_player', function (req) {
//   game_model.findOne({
//     channel: req.data.channel
//   }, function (err, game) {
//     if (err) error(err);
//     if (game === null) broadcast_error('No such game: ' + req.data.channel);
//     else {
//       game.add_player(req.data.player);
//       game.save(function (err, game) {
//         if (err) broadcast_error(err);
//         else app.io.broadcast('update', game);
//       });
//     }
//   });
// });
//
// // When a page emits make_trade, validate the req., execute the change, and save
// // it
// app.io.route('make_trade', function (req) {
//   game_model.findOne({
//     channel: req.data.channel
//   }, function (err, game) {
//     if (err) console.error(err);
//
//     if (game === null) {
//       broadcast_error('No such game: ' + req.data.channel);
//     } else {
//       var p1 = game.find_player(req.data.player1);
//       var p2 = game.find_player(req.data.player2);
//       var c1 = req.data.card1;
//       var c2 = req.data.card2;
//       note('Trade - ' + game.channel + ': ' + {
//         player1: p1,
//         player2: p2,
//         card1: c1,
//         card2: c2
//       });
//
//       if (p1 === undefined || p2 === undefined)
//         broadcast_error('Couldn\'t find both players in game.');
//
//       else if (game.players[p1].hand[c1] === undefined ||
//         game.players[p2].hand[c2] === undefined)
//         broadcast_error('Couldn\'t find both cards in game.');
//
//       else {
//         game.trade_to_hand(p1, c1, p2, c2);
//         game.save(function (err, game) {
//           if (err) broadcast_error(err);
//         });
//       }
//     }
//   });
// });


/// error handlers
/**
* Development Settings
*/
if (app.get('env') === 'development') {
  // This will change in production since we'll be using the dist folder
  // This covers serving up the index page
  app.use(express.static(path.join(__dirname, '../client/.tmp')));
  app.use(express.static(path.join(__dirname, '../client/app')));

  // Error Handling
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
* Production Settings
*/
if (app.get('env') === 'production') {

  // changes it to use the optimized version for production
  app.use(express.static(path.join(__dirname, '/dist')));

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

app.use('/newgame', newgame);
app.use('/play/:channel', play)

module.exports = app;
