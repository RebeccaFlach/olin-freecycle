import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.URI)
mongoose.connect(process.env.URI);

export default mongoose;
// TZFHLCwTp5hOHBXm