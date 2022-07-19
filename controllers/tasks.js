const task = require('../models/task');

const getAllTasks = async (req,res)=>{
    try {
        const Task = await task.find({});
        res.status(200).json({Task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req,res)=>{
    try {
        const Task = await task.create(req.body);
        res.status(201).json({Task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getTask = async (req,res)=>{
    try {
        const Task = await task.findOne({_id:req.params.id});
        if(!Task){
            return res.status(404).json({msg: `No task with such id ${req.params.id} found`});
        }
        res.status(200).json({Task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const updateTask = async (req,res)=>{
    try {
        const Task = await task.findByIdAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
        if(!Task){
            return res.status(404).json({msg: `No task with such id ${req.params.id} found`});
        }
        res.status(200).json(Task);
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const deleteTask = async (req,res)=>{
    try {
        const Task = await task.findOneAndDelete({_id:req.params.id});
        if(!Task){
            return res.status(404).json({msg: `No task with such id ${req.params.id} found`});
        }
        res.status(200).json({Task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {getAllTasks, createTask, getTask,updateTask,deleteTask}