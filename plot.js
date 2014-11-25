var mongoose = require('mongoose');
var bean_model = require('./bean');
var bean_schema = bean_model.schema;
var Schema = mongoose.Schema;

var schema = new Schema({
  beans:  {type: [bean_schema], default: []}
});

//Plant means add
schema.methods.plant = function(beans){
  for(var i=0; i<beans.length(); i++){
    this.beans.push(beans[i]);
  }
};

//Uproot means remove all
schema.methods.uproot = function() {
  var array = [];
  for(var i=0; i<this.beans.length();i++){
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

schema.path('type').validate(bean_validator, "beans in a plot must all be the same type!");
module.exports = mongoose.model('Plot', schema);
