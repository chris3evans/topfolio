const mongoose = require('../models/dbConnection');
const userSchema = new mongoose.Schema({
    _id: String,
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