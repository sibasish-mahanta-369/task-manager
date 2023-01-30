// Import the express module
const express = require('express')

// Create a router instance
const router = express.Router()

// Import the task controllers
const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

// Define the '/' endpoint to handle both GET and POST requests
router.route('/')
    .get(getAllTasks)
    .post(createTask)

// Define the '/:id' endpoint to handle GET, PATCH, and DELETE requests
router.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask)

// Export the router
module.exports = router
