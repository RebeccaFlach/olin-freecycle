import { Grid } from '@mui/material';
import React from 'react';

import ItemCard from './ItemCard'

const TaskList = ({ tasks, updateTasks }) => {
  return (
    <Grid
      container
      spacing={5}
      xs={12}
      sx={{p:5}}
    >

      {tasks.map(task => (
        <Grid item xs={2} sm={3} md={3} key={task.id}>
          <ItemCard task={task} updateTasks={updateTasks} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
