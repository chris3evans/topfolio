import { User } from '@topfolio/api-interfaces';
export const mockUserState: User = {
  _id: '',
  userId: '',
  slug_url: '',
  name: '',
  portfolio: {
    bio: '',
    bio_title: '',
    hero_image: '',
    hero_title: '',
    profile_image: '',
    theme: {
      background: '',
      primary: '',
      secondary: '',
      tertiary: '',
      background_secondary: '',
      font: ['Arial', 'Helvetica',' sans-serif'],
    },
    layout: [],
    projects: [],
    contact_me: {
      phone: '',
      email: '',
      social_media: {
        github: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        twitter: '',
        youtube: '',
      },
      location: '',
    },
    work_history: [],
    skills: [],
  },
};
