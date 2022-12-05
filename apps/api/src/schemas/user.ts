import { User } from '../../../../libs/api-interfaces/src/lib/api-interfaces';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  slug_url: {
    type: String,
    unique: true,
  },
  name: String,
  portfolio: {
    bio: String,
    bio_title: String,
    hero_image: String,
    hero_title: String,
    profile_image: String,
    theme: {
      background: String,
      primary: String,
      secondary: String,
      tertiary: String,
      background_secondary: String,
      font: Array,
    },
    layout: [String],
    projects: [
      {
        name: String,
        images: [String],
        description: String,
        github_url: String,
        app_url: String,
      },
    ],
    contact_me: {
      phone: String,
      email: String,
      social_media: {
        github: String,
        facebook: String,
        linkedin: String,
        instagram: String,
        twitter: String,
        youtube: String,
      },
      location: String,
    },
    work_history: [
      {
        company_name: String,
        description: String,
        image: String,
        start_date: String,
        end_date: String,
      },
    ],
    skills: [String]
  },
});

const User = mongoose.model('user-topfolio', userSchema);

module.exports = User;
