const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vsushant8421:xgHf2jFAXr51Jy9a@cluster0.nvfbpn8.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports= {
  todo
}