// Import the mongoose module
const mongoose = require('mongoose')

// Define the function that connects to the database
const connectDB = (url) =>{
    // Use the connect method from the mongoose module to connect to the database
    return mongoose.connect(url)
}

// Export the connectDB function
module.exports = connectDB