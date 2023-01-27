const  mongoose  = require("mongoose");

const Todo = mongoose.model("Todo ", { title: String, desc: String });

module.exports={Todo}