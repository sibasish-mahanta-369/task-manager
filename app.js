const express = require('express');
const app = express();
const tasks =  require('./routes/tasks')
const port = 3000;
require('dotenv').config();
const mongoose = require('mongoose')

const startServer = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
                console.log('Connected to DB...');
                app.listen(port,console.log(`server is listeninbg on port ${port}...`));
        }).catch((err)=>{console.log(err)})
    } catch (error) {
        console.log('Error');
        console.log(error);
    }
}

app.use(express.json())

app.use(express.static('./public'))

app.get('/home',(req,res)=>{
    res.send('home page');
})

app.use('/api/v1/tasks',tasks)

startServer();