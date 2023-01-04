import { Grid } from '@mui/material';
import React from 'react';

import ItemCard from './ItemCard'

const TaskList = ({ tasks, updateTasks }) => {
  return (
    <Grid 
      container
      spacing={10}
      xs={8}
      >
      
      {tasks.map(task => (
        <Grid item xs={2} sm={4} md={4} key={task.id}>
          <ItemCard task={task} updateTasks={updateTasks}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
