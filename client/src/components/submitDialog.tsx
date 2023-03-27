import { Dialog, DialogTitle, DialogContent, Box, TextField, Button } from "@mui/material"
import React, { useState } from "react";


const submitDialog = (props) => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState("");


    const addItem = event => {
        event.preventDefault();

        fetch('/api/' + props.type + '/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                about: about,
                contact: contact,
                date: date,
            }),
        }).then(() => {
            setName('');
            props.handleClose();
        });
    };

    return <Dialog
        open={props.open}
        onClose={props.handleClose}
        maxWidth="sm"
        fullWidth
    >
        <DialogTitle>Add {props.type}</DialogTitle>
        <DialogContent>
            <Box component={"form"} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'flex-start',
                '& > :not(style)': { m: 1 }
            }}>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <TextField
                    id="about"
                    label="About"
                    variant="outlined"
                    multiline
                    minRows={3}
                    onChange={event => setAbout(event.target.value)}
                    value={about}
                />
                <TextField
                    id="contact"
                    label="Contact"
                    variant="outlined"
                    onChange={event => setContact(event.target.value)}
                    value={contact}
                />
                <input type="datetime-local" id="meeting-time"
                    name="meeting-time" value={date}
                    onChange={e => setDate(e.target.value)}></input>
                <Button variant="contained" onClick={addItem}>Submit</Button>
            </Box>
        </DialogContent>
    </Dialog>

}

export default submitDialog;