// Import the Task model
const Task = require('../models/Task')

// Get all tasks endpoint
const getAllTasks = async (req, res) => {
    // Try to retrieve all tasks from the database
    try {
        const task = await Task.find({})
        // Return success with the tasks
        res.status(200).json({ task })
    }
    // Catch and return errors if any occur
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Create a new task 
const createTask = async (req, res) => {
    // Try to create a new task with the given data
    try {
        const task = await Task.create(req.body)
        // Return success with the created task
        res.status(201).json({ task })
    }
    // Catch and return errors if any occur
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Get a specific task 
const getTask = async (req, res) => {
    // Try to retrieve the task with the given ID
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        // If task not found, return error message
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        // Return success with the task
        res.status(200).json({ task })
    }
    // Catch and return errors if any occur
    catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Update a specific task 
const updateTask = async (req, res) => {
    // Try to update the task with the given ID and data
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
        // If task not found, return error message
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        // Return success with the updated task
        res.json(task)
    }
    // Catch and return errors if any occur
    catch (error) {
        console.status(500).log(error)
    }
}

// Delete a specific task 
const deleteTask = async (req, res) => {
    // Try to delete the task with the given ID
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndDelete({ _id: taskID })
        // If task not found, return error message
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        // Return success with the deleted task
        res.status(200).json(task)
    }
    // Catch and return errors if any occur
    catch (error) {
        console.status(500).log(error)
    }
}

//Exporting the Controller funtions 
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }