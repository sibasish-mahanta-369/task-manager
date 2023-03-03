import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Navbar from './components/Navbar';
import List from '@mui/material/List';
import Taskitem from './components/Taskitem';
import AddNewTask from './components/AddNewTask';


function App() {
  const [tasks, setTasks] = useState([{}])

  async function getAllTasks() {
    try {
      const getTasks = await axios.get("/api/v1/tasks")
      setTasks(getTasks.data.task)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <Box>
      <Navbar />
      <AddNewTask />
      <Typography variant='h4' align='center'>Tasks List</Typography>
      <List>
        {
          tasks.map((task, i) => {
            return(
              <Taskitem task={task} key={i} getAllTasks={getAllTasks}/>
            )
          })
        }
      </List>
    </Box>
  );
}

export default App;
