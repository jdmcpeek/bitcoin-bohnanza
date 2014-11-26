var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var plot_model = require('./plot');
var plot_schema = plot_model.schema;

var player_schema = new Schema({
  name:         {type: String, required: true},
  hand:         {type: [bean_schema], default: [], required: true},
  plots:        {type: [plot_schema], default: [], required: true},
  gold:         {type: Number, default: 0, required: true}
});

//Alternate Constructor
player_schema.statics.create = function(params) {
  var new_player = new this(params);
  new_player.plots = [new plot_model(), new plot_model()];
  return new_player;
};

// Take these beans, put them in your hand
// Accepts only arrays
player_schema.methods.add_to_hand = function(beans){
  for(var i=0; i<beans.length; i++)
    this.hand.push(beans[i]);
};

//Take these beans, plant them in the designated plot
player_schema.methods.plant = function(beans, plot_index){
  this.plots[plot_index].plant(beans);
};

//Uproot the designated plot and give me the beans
player_schema.methods.uproot = function(plot_index){
  return this.plots[plot_index].uproot();
};

//the user should really be choosing which specific beans to trade
//Give me a bean!
player_schema.methods.get_from_hand = function(index){
  var value = this.hand[index];
  this.hand.splice(index, 1);
  return value;
};

module.exports =  mongoose.model('Player', player_schema);
