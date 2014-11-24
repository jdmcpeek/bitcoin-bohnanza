var mongoose = require('mongoose');
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var Schema = mongoose.Schema;

schema = new Schema({
  name:         String,
  hand:         [bean_schema],
  plot0:        [bean_schema],
  plot1:        [bean_schema],
  plot2:        [bean_schema],
  bought_plot:  Boolean,
  gold:         Number
});

//add array2 to onto back of array1
var add_to_array  = function(array1, array2) {
  for(var i=0; i<array2.length; i++){
    array1.push(array2[i]);
  }
};

//Take all the beans out of array2, put them in array1. respect order.
var move_beans = function(array1, array2) {
  var length = array2.length;
  for(var i=0; i<length; i++){
    var element = array2.shift();
    array1.push(element);
  }
}

//Perform binary function on one of the plots
schema.methods.plot_index_func = function(array1, plot_index, func) {
  switch(plot_index){
    case 0: func(this.plot0, array1);
            break;
    case 1: func(this.plot1, array1);
            break;
    case 2: if(this.bought_plot) bin(this.plot2, array1);
            else console.log("you done messed up");
            break;
    default: console.log(plot_index.toString() + ": isn't a valid argument");
  }
};

//Take these beans, put them in your hand
schema.methods.add_to_hand = function(beans){
  add_to_array(this.hand, beans);
};

//Take these beans, plant them in a plot
schema.methods.plant = function(beans, plot_index){
  this.plot_index_func(beans, plot_index, add_to_array);
};

//the user should really be choosing which specific beans to trade
//Give me a bean!
schema.methods.get_from_hand = function(index){
  var value = this.hand[index];
  this.hand.splice(index, 1);
  return value;
}

//Give me all of the beans from your plot
schema.methods.uproot_plot = function(plot_index){
  var return_array = [];
  this.plot_index_func(return_array, plot_index, function(plot, return_array){
    return move_beans(return_array, plot);
  });
  return return_array;
};

//Give
module.exports =  mongoose.model('Player', schema);
