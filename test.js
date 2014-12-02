var mongoose = require('mongoose');
var game_model = require('./model/game');
var game = game_model.create("nanzers", "Steven");
game.add_player("David");

console.log("Ready to go");
console.log("Channel Name:" + game.channel);
console.log("Shuffling the Deck");
game.shuffle_deck();

console.log("Drawing 3 cards and giving them to Steven");
var cards = game.draw_n(3);
game.players[0].add_to_hand(cards);
console.log("Steven's Hand");
console.log(game.players[0].hand);
console.log();

console.log("Taking Steven's first card and donating it to David");
game.donate_to_hand(0, 0, 1);
console.log("Steven's Hand");
console.log(game.players[0].hand);
console.log("David's Hand");
console.log(game.players[1].hand);
console.log();

console.log("Taking Steven's next card and donating it to David's plot[0]");
game.donate_to_plot(0, 0, 1, 0);
console.log("David's plot[0]");
console.log(game.players[1].plots[0].beans);
console.log("Steven's Hand");
console.log(game.players[0].hand);
console.log();

console.log("Taking Steven's last card and planting it himself...");
var stevens_bean = game.players[0].get_from_hand(0);
game.players[0].plant([stevens_bean], 0);
console.log("Stevie's plots[0]");
console.log(game.players[0].plots[0].beans);

console.log("Time for some DB play");
mongoose.connect('mongodb://localhost/test');
db = mongoose.connection;
var disp_players = function(game){
  console.log("Players:");
  for(var i=0; i<game.players.length; i++)
    console.log("    " + game.players[i].name);
};

db.on('open', function callback() {
  console.log("Making a new game");
  var db_game = game_model.create("Test","Steven");
  disp_players(db_game);
  console.log("Adding Dav-id");
  db_game.add_player("Dav-id");
  disp_players(db_game);
  var c1 = game.draw_n(1);
  db_game.players[0].add_to_hand(c1);
  var c2 = game.draw_n(1);
  db_game.players[1].add_to_hand(c2);
  console.log(c1);
  //console.log(c2);
  console.log("Let's save this game!");
    db_game.save(function(err){
    if(err) console.error(err);
  });
});

db.on('error', console.error.bind(console, 'connection error:'));
