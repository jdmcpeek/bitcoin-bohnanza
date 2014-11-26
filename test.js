var bean_model = require('./bean');
var player_model = require('./player');
var game_model = require('./game');
var bean0 = new bean_model({type: "green"});
var bean1 = new bean_model({type: "red"});
var bean2 = new bean_model({type: "blue"});
var beans = [bean0, bean1, bean2];
var Steven = new player_model({name: "Steven"});
var David = new player_model({name: "David"});
var game = new game_model({channel: "nanzers", players: [Steven, David]});
console.log("Ready to go");
console.log("Shuffling the Deck");
game.shuffle_deck();
console.log("Drawing 3 cards and giving them to Steven");
var cards = game.draw_n(3);
console.log();
game.players[0].add_to_hand(beans);
console.log(game.players[0].name);
console.log("Steven's Hand");
console.log(game.players[0].hand);
console.log("Taking Steven's first card and donating it to David");
game.donate_to_hand(0, 0, 1);
console.log("Steven's Hand");
console.log(game.players[0].hand);
console.log("David's Hand");
console.log(game.players[1].hand);
console.log("Taking Steven's next card and donating it to David's plot[0]");
game.donate_to_plot(0, 0, 1, 0);
console.log("David's plot[0]");

console.log(David.plots[0].beans);

console.log("Steven's Hand");
console.log(game.players[0].hand);

var stevie_bean = Steven.hand[0];

console.log("Taking Steven's last card and planting it himself...")
Steven.plant([stevie_bean], 0);
console.log("Stevie's plots[0]");
console.log(Steven.plots[0].beans);
