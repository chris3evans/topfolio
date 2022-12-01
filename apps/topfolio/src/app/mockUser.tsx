import { User } from '@topfolio/api-interfaces';
export const mockUserState: User = {
  _id: '1',
  userId: '2',
  slug_url: '',
  name: 'Doge Woofson',
  portfolio: {
    bio: 'Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof Woof',
    bio_title: 'hello there',
    hero_image: '../.././assets/hero.jpg',
    hero_title: 'Mock hero title',
    profile_image: '../../assets/hero-transparenty.png',
    theme: {
      background: '#DBD1D1',
      primary: '#F03E91',
      secondary: '#94598A',
      tertiary: '#3D5D80',
      background_secondary: '#231E37',
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
        instagram: '',
        twitter: '',
        youtube: '',
        github: 'github link',
        facebook: 'facebook link',
        linkedin: 'linkedin link',
        instagram: '',
        twitter: '',
        youtube: '',
      },
      location: 'UK',
    },
    work_history: [
      {
        company_name: 'Google',
        image: '../assets/google.png',
        description: 'Lead Software Engineer',
<<<<<<< HEAD
        start_date: new Date(),
        end_date: new Date(),
=======
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: '123',
>>>>>>> development
      },
      {
        company_name: 'Netflix',
        image: '../assets/google.png',
        description: 'Junior Software Engineer',
<<<<<<< HEAD
        start_date: new Date(),
        end_date: new Date(),
=======
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: '456',
>>>>>>> development
      },
      {
        company_name: 'Meta',
        image: '../assets/google.png',
        description: 'Junior Software Engineer',
<<<<<<< HEAD
        start_date: new Date(),
        end_date: new Date(),
      },
    ],
    social_media: {
      instagram: '',
      twitter: '',
      youtube: '',
      github: 'https://github.com/',
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://en-gb.facebook.com/',
    },
=======
        start_date: '12/12/2022',
        end_date: '12/12/2022',
        _id: '789',
      },
    ],
>>>>>>> development
  },
};
