import React from 'react'
import { useState } from 'react'
import { Button, Box } from '@mui/material'
import axios from 'axios'

const AddNewTask = () => {
 
  const [newTask, setNewTask] = useState('')
 
  const handleSubmit = () =>{
    async function createTasks() {
        try {
          const createdTask = await axios.post("/api/v1/tasks",{"name":newTask,
          "completed":false})
          console.log(createdTask)
        } catch (error) {
          console.log(error)
        }
      }
      createTasks()
  }


  return (
    <Box
    component='form'
    onSubmit={handleSubmit}
    sx={{pl:1}}
    >
        <input className='new-task' placeholder='Add new task...' 
        value={newTask}
        onChange={(e)=>{setNewTask(e.target.value)}}
        />
        <Button type='submit'>Add Task</Button>
    </Box>
  )
}

export default AddNewTask