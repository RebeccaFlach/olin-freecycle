import mongoose from '../db';

const volunteer = new mongoose.Schema({
    name: { type: String, required: true },
    about: { type: String, required: false },
    contact: { type: String, required: false }
});

const Volunteer = mongoose.model('Volunteer', volunteer);

export default Volunteer;