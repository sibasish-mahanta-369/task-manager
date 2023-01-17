const Task = require('../models/Task') 

const getAllTasks = async (req,res) =>{
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.json(task)
    } catch (error) {
        console.status(500).log(error)
    }
}
const deleteTask = async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndDelete({_id:taskID})
        if(!task){
           return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json(task)
    } catch (error) {
        console.status(500).log(error)
    } 
}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}