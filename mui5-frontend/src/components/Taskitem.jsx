import Paper from '@mui/material/Paper';
import { Button, ListItem, Typography } from '@mui/material';
import axios from 'axios';


const Taskitem = props => {
  const { task, getAllTasks } = props

  async function deleteTasks() {
    try {
      const deletedTask = await axios.delete(`/api/v1/tasks/${task._id}`)
      console.log(deletedTask)
    } catch (error) {
      console.log(error)
    }
    getAllTasks()
  }

  async function updateTasks() {
    try {
      const updatedTask = await axios.patch(`/api/v1/tasks/${task._id}`, {
        "completed": true
      })
      console.log(updatedTask)
    } catch (error) {
      console.log(error)
    }
    getAllTasks()
  }

  return (
    <ListItem sx={{ justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ width: "800px", padding: '1rem' }} gap={2}>
        <Typography variant='h6'>{task.name}</Typography>
        {/* <Typography variant='h7'>id: {task._id}</Typography> */}
        <Typography>
          <span>Status:</span>
          <span>
            {task.completed === true && <span>Completed</span>}
            {task.completed === false && <span>Not completed</span>}
          </span>
        </Typography>
        <Button onClick={deleteTasks}>Delete</Button>
        {task.completed === false && <Button onClick={updateTasks}>Mark Completed</Button>}
      </Paper>
    </ListItem>
  )
}

export default Taskitem