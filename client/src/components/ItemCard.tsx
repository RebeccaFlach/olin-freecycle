import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';


const Item = ({ task, updateTasks }) => {
    const clickDeleteTask = (event, task) => {
        event.preventDefault();
    
        fetch(`/api/tasks/delete/${task._id}`, {
          method: 'delete',
        })
          .then(res => res.json())
          .then(() => updateTasks());
      };
    
      const toggleDone = task => {
        fetch(`/api/tasks/update/${task._id}`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ done: !task.done }),
        }).then(() => updateTasks());
      };

    return <Card variant="outlined">
        <CardContent>
            <Typography variant="h5">
                {task.title}
            </Typography>
            <Typography variant="body1">
                {task.description}
            </Typography>
            <Typography variant="subtitle2">
                {task.person}
            </Typography>
        </CardContent>
        
    </Card>
}

export default Item