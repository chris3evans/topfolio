import { User } from '@topfolio/api-interfaces';

export const mockUserState: User = {
  _id: '1',
  userId: '2',
  slug_url: '',
  name: 'Marco',
  portfolio: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    hero_image: '../.././assets/hero.jpg',
    profile_image: '../../assets/profile-img.jpg',
    theme: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    },
    layout: ['WorkHistory', 'Projects', 'Bio'],
    projects: [
      {
        name: 'topfolio',
        images: ['../assets/project_img.png'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
      },
      {
        name: 'coolfolio',
        images: ['../assets/project_img.png'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
      },
      {
        name: 'coolApp',
        images: ['../assets/project_img.png'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
      },
    ],
    work_history: [
      {
        company_name: 'google',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        company_name: 'netflix',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        company_name: 'meta',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: new Date(),
        end_date: new Date(),
      },
    ],
    social_media: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://en-gb.facebook.com/',
    },
  },
};
