import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TasksList from './components/ItemList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogTitle, DialogContent, AppBar, IconButton, Toolbar, Typography, Grid, Card, Paper } from '@mui/material';
import SubmitDialog from './components/SubmitDialog';

const App = () => {
  const [items, setItems] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [volunteerOpen, setVolunteerOpen] = React.useState(false);
  const [opportunityOpen, setOpportunityOpen] = React.useState(false);

  const handleOpen = () => setVolunteerOpen(true);
  const handleClose = () => { setVolunteerOpen(false); getItems() };

  const handleOppOpen = () => setOpportunityOpen(true);
  const handleOppClose = () => { setOpportunityOpen(false); getItems() };


  const getItems = useCallback(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(setItems);

    fetch('/api/volunteers')
      .then(res => res.json())
      .then(setVolunteers)
  }, []);

  useEffect(() => {
    getItems();
  }, []);


  return (
    <div style={{ backgroundColor: "#d4d4d2", minHeight: "100vw" }}>
      {/* <AppBar position="sticky">
        <Toolbar>

      
          <Button color="inherit" onClick={handleOppOpen} >Add Opportunity</Button>
        
        </Toolbar>
      </AppBar> */}

      <SubmitDialog open={volunteerOpen} handleClose={handleClose} type="volunteers" />
      <SubmitDialog open={opportunityOpen} handleClose={handleOppClose} type="items" />
      <Card>
        <Typography variant="body1">
          Welcome to MassVolunteer! Our mission is to create a service for social good, uniting Massachusetts citizens searching for upcoming volunteering opportunities in their area. Check out the calendar to reach out to organizers, or create a profile of your own for organizers to search for you!
        </Typography>
        <div style={{ textAlign: "center" }}>
          <Button
            color="inherit"
            onClick={handleOpen}
            style={{
              // position: "fixed",
              // top: "50px",
              // right: "50px",
              background: "#07a83d",
              width: "150px",
              height: "4em"
            }}
          >
            Volunteer!
          </Button>
        </div>
      </Card>

      <Grid container spacing={2} xs={12} >
        <Grid item xs={12} sx={{}} md={6}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Volunteers
          </Typography>
          {/* <Paper sx={{ height: "100%", width: "30vw", position: "fixed" }} elevation={3}>

          </Paper> */}
          <TasksList tasks={volunteers} updateTasks={getItems} />
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Opportunities
          </Typography>
          <TasksList tasks={items} updateTasks={getItems} />
        </Grid>
      </Grid>


    </div>
  );
};

export default App;
