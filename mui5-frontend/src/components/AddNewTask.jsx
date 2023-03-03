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
    sx={{p:1,mt:4, mb:3}}
    display='flex'
    justifyContent='center'
    >
        <input className='new-task' placeholder='Add new task...'
        style={{width:'50%', border:'2px solid black', padding:'0.5rem'}} 
        value={newTask}
        onChange={(e)=>{setNewTask(e.target.value)}}
        />
        <Button type='submit'>Add Task</Button>
    </Box>
  )
}

export default AddNewTask