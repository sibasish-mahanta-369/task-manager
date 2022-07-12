const express = require('express');
const app = express();
const tasks =  require('./routes/tasks')
const port = 3000;

app.use(express.json())

app.get('/home',(req,res)=>{
    res.send('home page');
})

app.use('/api/v1/tasks',tasks)

app.listen(port,console.log(`server is listeninbg on port ${port}...`))
