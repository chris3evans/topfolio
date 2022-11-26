// import mongoose from "mongoose";
// import mongoose from "../models/dbConnection";
// const mongoose = require('../models/dbConnection');

import { User } from "../../../../libs/api-interfaces/src/lib/api-interfaces"

//fix export import later
import * as dotenv from 'dotenv'
dotenv.config();

const uri = process.env.DB_URI
// console.log(uri)
import mongoose from "mongoose";

mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => console.log(error));

//Above should be in a different file


const userSchema = new mongoose.Schema({
    userId: String,
    slug_url: String,
    name: String,
    portfolio: {
        description: String,
        hero_image: String,
        profile_image: String,
        theme: {
            '1': String,
            '2': String,
            '3': String,
            '4': String,
            '5': String
        },
        layout: [String],
        projects: [
            {
                name: String,
                images: [String],
                description: String,
                github_url: String,
                app_url: String
            }
        ],
        work_history: [
            {
                company_name: String,
                image: String,
                description: String,
                start_date: Date,
                end_date: Date
            }
        ],
        social_media: [
            {
                name: String,
                url: String
            }
        ],
    }
});


const User = mongoose.model('user-topfolio', userSchema);

module.exports = User