import express from 'express';

import Volunteer from '../models/volunteer';

const router = express.Router();


router.get('/', (req, res) => {
    Volunteer.find({})
        .then(items => res.json(items))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/add', (req, res) => {
    const newItem = new Volunteer(req.body);

    console.log(req.body)
    console.log(newItem)
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.json(500, err));
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Volunteer.findByIdAndDelete(id)
        .then(item => res.json(item))
        .catch(err => res.json(500, err));
});

router.post('/update/:id', (req, res) => {
    const { done } = req.body;
    Volunteer.findByIdAndUpdate(req.params.id, { done })
        .then(item => res.json(item))
        .catch(err => res.json(500, err));
});

export default router;
