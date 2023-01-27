const { Todo } = require("../../model/Todo");

const creatTodoController = async(req,res)=>{
    console.log(req.body)
    console.log('posted')
    if(!req?.body?.title) return res.status(400).json({messeage:'where is your title'})
    const todo = new Todo({
      title: req.body?.title,
      desc: req.body?.desc,
    });
    todo.save().then(() => console.log("todo saved "));
    res.status(201).json({messeage:'user created succesfully'})
  
  }

module.exports = {creatTodoController};
