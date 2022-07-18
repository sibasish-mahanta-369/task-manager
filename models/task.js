const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'must provide a name'],
        trim: true,
        maxlength: [30, 'name cant be more than 30 character']
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('task',taskSchema);