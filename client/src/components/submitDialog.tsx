import { Dialog, DialogTitle, DialogContent, Box, TextField, Button } from "@mui/material"
import React, { useState }  from "react";

const submitDialog = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [person, setPerson] = useState('');


    const addItem = event => {
        event.preventDefault();
    
        fetch('/api/items/add', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            description: description,
            person: person,
            status: "offer"
          }),
        }).then(() => {
          setTitle('');
          props.handleClose();
        });
      };

    return <Dialog
        open={props.open}
        onClose={props.handleClose}
        maxWidth="sm"
        fullWidth
    >
        <DialogTitle>Offer or Request an Item</DialogTitle>
        <DialogContent>
            <Box component={"form"} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'flex-start',
                '& > :not(style)': { m: 1 }
            }}>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    multiline
                    minRows={3}
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={event => setPerson(event.target.value)}
                    value={person}
                />
                <Button variant="contained" onClick={addItem}>Submit</Button>
            </Box>
        </DialogContent>
    </Dialog>

}

export default submitDialog;