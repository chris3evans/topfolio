import * as dotenv from 'dotenv'
dotenv.config();

// const uri = process.env.DB_URI
const uri = "mongodb://127.0.0.1:27017"
import mongoose from "mongoose";

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => console.log(error));

export = mongoose