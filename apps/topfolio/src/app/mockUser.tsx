import { User } from '@topfolio/api-interfaces';

export const mockUserState: User = {
  _id: '1',
  userId: '2',
  slug_url: '',
  name: 'Marco',
  portfolio: {
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    bio_title: 'hello there',
    hero_image: '../.././assets/hero.jpg',
    hero_title: 'Mock hero title',
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
        images: ['../assets/project2.jpg'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
        _id: 'asdfa'
      },
      {
        name: 'coolfolio',
        images: ['../assets/project3.jpg'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
        _id: 'assdffa'
      },
      {
        name: 'coolApp',
        images: ['../assets/project_img.png'],
        description: 'description',
        github_url: 'https://github.com/chris3evans/topfolio',
        app_url: '',
        _id: 'qwerr'
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
        company_name: 'google',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: 'abc',
      },
      {
        company_name: 'netflix',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: 'def',
      },
      {
        company_name: 'meta',
        image: '../assets/google.png',
        description: 'engineer',
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: 'ghi',
      },
    ],
    social_media: {
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://en-gb.facebook.com/',
    },
  },
};
