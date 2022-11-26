// require('dotenv').config()
import * as dotenv from 'dotenv'
dotenv.config();

const uri = process.env.DB_URI
console.log(uri)
const mongoose = require('mongoose');

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => console.log(error));



module.exports = mongoose;