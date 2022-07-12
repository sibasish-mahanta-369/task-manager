const getAllTasks = (req,res)=>{
    res.send('all items of the list')
}

module.exports = {getAllTasks, createTask, getTask,updateTask,deleteTask}