var mongoose = require('mongoose');
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var Schema = mongoose.Schema;

var plot_schema = new Schema({
  beans:  {type: [bean_schema], default: [], required: true}
});


//Plant means add
plot_schema.methods.plant = function(beans){
    for(var i=0; i<beans.length; i++){
      this.beans.push(beans[i]);
    }
};

//Uproot means remove all
plot_schema.methods.uproot = function() {
  var array = [];
  var length = this.beans.length;
  for(var i=0; i<length; i++){
    array[i] = this.beans.shift();
  }
  return array;
};

//All of the beans need to be the same kind as type:
var bean_validator = function(beans) {
  if(beans.length > 2){
    var type = this.beans[1].type;
    for(var bean in beans){
      if(beans[bean].type !== type) return false;
    }
  }
  return true;
};

plot_schema.path('beans').validate(bean_validator, "beans in a plot must be of one type!");
module.exports = mongoose.model('Plot', plot_schema);
