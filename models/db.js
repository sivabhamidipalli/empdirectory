var chalk = require('chalk');
var mongoose = require('mongoose');



var dbURI = 'mongodb://sbhamidipalli:Mindtree@ds237735.mlab.com:37735/edurekaproject'

mongoose.connect(dbURI);

mongoose.connection.on('connected' , function(){
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error' , function(err){
  console.log(chalk.red('Error in connecting to Mongoose :' + err));
});

mongoose.connection.on('disconnected' , function(){
  console.log(chalk.red('Mongoose disconnected'));
});

var empSchema = new mongoose.Schema({
  email: {type:String},
  name: {type:String},
  dob: {type:Date},
  gender: {type:String},
  department: {type:String},
  age: {type:Number}
});

mongoose.model('Employee',empSchema);
