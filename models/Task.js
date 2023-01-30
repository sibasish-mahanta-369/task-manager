// Import the mongoose module
const mongoose = require('mongoose')

// Define the Task schema for the tasks collection in the database
const TaskSchema = new mongoose.Schema({
    // name field is required and must have a string data type
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 character']
    },
    // completed field is optional and has a default value of false
    completed:{
       type: Boolean,
       default: false
    }
})

// Export the model with the name "Task" and the schema defined above
module.exports = mongoose.model('Task',TaskSchema)
