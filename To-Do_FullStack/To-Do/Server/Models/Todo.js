const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    isCompleted:{
        type:Boolean,
        default:false,
    }
  });

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports=TodoModel



