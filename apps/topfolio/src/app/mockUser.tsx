import { User } from '@topfolio/api-interfaces';

export const mockUserState: User = {
  _id: '1',
  userId: '2',
  slug_url: '',
  name: 'Doge Woofson',
  portfolio: {
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    bio_title: 'hello there',
    hero_image: '../.././assets/hero.jpg',
    hero_title: 'Mock hero title',
    profile_image: '../../assets/hero-transparenty.png',
    theme: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    },
    layout: ['Work Experience', 'Projects', 'About me'],
    projects: [
      {
        name: 'topfolio',
        images: ['../assets/project2.jpg'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
      },
      {
        name: 'coolfolio',
        images: ['../assets/project3.jpg'],
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
    contact_me: {
      phone: 'number',
      email: 'test@email.com',
      social_media: {
        github: 'github link',
        facebook: 'facebook link',
        linkedin: 'linkedin link',
      },
      location: 'UK',
    },
    work_history: [
      {
        company_name: 'Google',
        image: '../assets/google.png',
        description: 'Lead Software Engineer',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        company_name: 'Netflix',
        image: '../assets/google.png',
        description: 'Junior Software Engineer',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        company_name: 'Meta',
        image: '../assets/google.png',
        description: 'Junior Software Engineer',
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
