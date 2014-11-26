var mongoose = require('mongoose');
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var Schema = mongoose.Schema;
var plot_model = require('./plot');
var plot_schema = plot_model.schema;

var player_schema = new Schema({
  name:         String,
  hand:         {type: [bean_schema], default: []},
  plots:        {type: [plot_schema], default: [new plot_model(), new plot_model()]},
  gold:         {type: Number, default: 0}
});


//Take these beans, put them in your hand
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
