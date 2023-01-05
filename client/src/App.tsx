import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TasksList from './components/ItemList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogTitle, DialogContent, AppBar, IconButton, Toolbar, Typography, Grid, Card, Paper } from '@mui/material';
import SubmitDialog from './components/submitDialog';

const App = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); getItems()};


  const getItems = useCallback(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  useEffect(() => {
    getItems();
  }, []);


  return (
    <div style={{backgroundColor: "#d4d4d2", minHeight: "100vw"}}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Olin FreeCycle
          </Typography>
          <Button color="inherit" onClick={handleOpen} >Add Item</Button>
          <SubmitDialog open={open} handleClose={handleClose}/>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={4} sx={{height:"80vh",}}>
          <Paper sx={{height:"100%", width: "30vw", position: "fixed"}} elevation={3}>
            
          </Paper>
        </Grid>
        <Grid item xs={8} ><TasksList tasks={items} updateTasks={getItems} /></Grid>
      </Grid>
    

    </div>
  );
};

export default App;
