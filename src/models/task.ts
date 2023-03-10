import mongoose from '../db';

const task = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', task);

export default Task;
