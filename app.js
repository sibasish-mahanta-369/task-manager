// Import the express module
const express = require('express')

// Create an express application instance
const app = express()

const cors = require('cors')

// Import the tasks route module
const tasks = require('./routes/tasks')

// Import the connectDB module for connecting to the database
const connectDB =  require('./db/connect')

// Import the dotenv module for accessing environment variables
require('dotenv').config()

app.use(cors())

// Middleware to parse incoming request data as JSON
app.use(express.json())

// Mount the tasks route at the '/api/v1/tasks' endpoint
app.use('/api/v1/tasks',tasks)

// Port to listen on
const port = 5000

// Async function to start the server
const start = async () => {
    try {
        // Connect to the database using the MONGO_URI environment variable
        await connectDB(process.env.MONGO_URI)
        // Start listening on the specified port
        app.listen(port,()=>{
            console.log(`Listening on port ${port}...`)
        })
    } catch (error) {
        // Log any errors that occur while connecting to the database or starting the server
        console.log(error)
    }
}

// Call the start function to start the server
start()
