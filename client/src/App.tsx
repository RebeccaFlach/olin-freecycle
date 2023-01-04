import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TasksList from './components/ItemList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const App = () => {
  const [items, setItems] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPerson, setItemPerson] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getItems = useCallback(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  useEffect(() => {
    getItems();
  }, []);

  const clickAddTask = event => {
    event.preventDefault();

    fetch('/api/items/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        title: itemTitle, 
        description: itemDescription, 
        person: itemPerson, 
        status: "offer"
      }),
    }).then(() => {
      setItemTitle('');
      getItems();
    });
  };

  return (
    <div>
      <h1>Olin Freecycle</h1>
      <TasksList tasks={items} updateTasks={getItems} />



      <Button onClick={handleOpen}>Open modal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Offer or Request an Item</DialogTitle>
        <DialogContent>
          <Box component={"form"} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'flex-start', 
              minHeight: '500px',
              '& > :not(style)': { m: 1}
            }}>
        {/* <form onSubmit={clickAddTask}> */}
        <TextField id="title" label="Title" variant="outlined"/>
        <TextField id="description" label="Description" variant="outlined" multiline minRows={3}/>
        <TextField id="name" label="Name" variant="outlined"/>
        
        {/* <Input
          className="nex  w-task"
          type="text"
          // size="500"
          placeholder="Title"
          value={itemTitle}
          onChange={event => setItemTitle(event.target.value)}
          // variant="outlined"
        ></Input>
        <Input
          className="new-task"
          type="text"
          // size="500"
          placeholder="Description"
          value={itemDescription}
          onChange={event => setItemDescription(event.target.value)}
          // variant="outlined"
        ></Input>
        <Input
          className="new-task"
          type="text"
          // size="500"
          placeholder="Person"
          value={itemPerson}
          onChange={event => setItemPerson(event.target.value)}
          // variant="outlined"
        ></Input> */}
        {/* <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          value="Add"
        >
          Add
        </Button>className="submit" */}
          
        </Box>
      {/* </form> */}

        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default App;
