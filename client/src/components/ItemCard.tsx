import { Card, CardContent, Dialog, DialogTitle, Typography, DialogContent, Box, TextField } from '@mui/material';
import React from 'react';


const Item = ({ task, updateTasks }) => {
  const [open, setOpen] = React.useState<boolean>(false);



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

  return <div>
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{task.title || task.name}</DialogTitle>
      <DialogContent>
        <Box component={"form"} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          '& > :not(style)': { m: 1 }
        }}>

          <Typography variant="body1">
            {task.description || task.about}
          </Typography>
          <Typography variant="subtitle2">
            Contact: {task.person || task.contact}
          </Typography>
          {task.date &&
            <Typography variant="subtitle2">
              When: {task.date || ""}
            </Typography>
          }
        </Box>
      </DialogContent>
    </Dialog>
    <Card raised onClick={() => setOpen(true)}>

      <CardContent>
        <Typography variant="h5">
          {task.title || task.name}
        </Typography>
        {/* <Typography variant="body1">
          {task.description || task.about}
        </Typography>
        <Typography variant="subtitle2">
          {task.person || task.contact}
        </Typography>
        <Typography variant="subtitle2">
          {task.date || ""}
        </Typography> */}
      </CardContent>

    </Card>
  </div>
}

export default Item