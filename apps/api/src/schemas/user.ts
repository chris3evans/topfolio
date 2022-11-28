import { User } from "../../../../libs/api-interfaces/src/lib/api-interfaces"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    slug_url: {
        type: String,
        unique: true
    },
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