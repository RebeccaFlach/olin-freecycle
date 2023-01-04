import express from 'express';

import Item from '../models/item';

const router = express.Router();


router.get('/', (req, res) => {
  Item.find({})
    .then(items => res.json(items))
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/add', (req, res) => {
  const newItem = new Item(req.body);

  console.log(req.body)
  console.log(newItem)
  newItem.save()
    .then(item => res.json(item))
    .catch(err => res.json(500, err));
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete(id)
    .then(item => res.json(item))
    .catch(err => res.json(500, err));
});

router.post('/update/:id', (req, res) => {
  const { done } = req.body;
  Item.findByIdAndUpdate(req.params.id, { done })
    .then(item => res.json(item))
    .catch(err => res.json(500, err));
});

export default router;
