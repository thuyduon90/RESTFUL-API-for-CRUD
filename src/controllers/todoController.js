
const todoModel = require('../models/todo') 

exports.createTodo = (req, res)=>{
    const newTodo=req.body
    const insertedTodo=todoModel.insert(newTodo)
    res.json(insertedTodo)
}
exports.updateTodo = (req, res)=>{
    const newTodo=req.body
    const updated=todoModel.updateById(newTodo)
    res.json(updated)
}
exports.getTodoList = (req, res)=>{
    const {completed} = req.body
    const todoList = todoModel.findAll(completed)
    res.json(todoList)
}
exports.clearCompleted = (req, res)=>{
    
}
exports.clearCompleted = (_, res) => {
    const completed = todoModel.findAll({ completed: true })
    completed.forEach(todo => {
      todoModel.deleteById(todo.id);
    })
    res.json({ result: true })
}
exports.deleteTodo = (req, res)=>{
    const {id} = req.body
    const deletedTodo = todoModel.deleteById(id)
    res.json(deletedTodo)
}