import mongoose from '../db';

const item = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  person: { type: String, required: true },
  date: { type: String, required: false }
});

const Item = mongoose.model('Item', item);

export default Item;