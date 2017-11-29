var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");
mongoose.connect("mongodb://adminuser:root@ds125146.mlab.com:25146/todo-api");

module.exports ={mongoose};