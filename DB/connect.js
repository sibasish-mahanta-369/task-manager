const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Sibasish_Mahanta:data-base890@cluster0.iakvj.mongodb.net/task-manager-api?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=>{console.log('Connected to DB...')}).catch((err)=>{console.log(err)})