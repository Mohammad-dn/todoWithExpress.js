const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { Todo } = require("./model/Todo");
const cors = require("cors");
const {creatTodoController}  = require("./controller/todo");
server.use(cors());
  server.use(express.json({extended:false}));

mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("db conected"));
server.post("/todo",creatTodoController)



server.listen(3000, () => console.log("server run on port 3000"));
