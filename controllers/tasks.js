const task = require('../models/task');

const getAllTasks = (req,res)=>{
    res.send('all items of the list')
}

const createTask = async (req,res)=>{
    const task = await task.create(req.body);
    res.status.json({task});
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send('single task updated')
}

const deleteTask = (req,res)=>{
    res.send('single task deleted')
}

module.exports = {getAllTasks, createTask, getTask,updateTask,deleteTask}