export interface User {
  _id: string;
  userId: string;
  slug_url: string;
  name: string;
  portfolio: Portfolio;
}

// Contact Me Interface
export interface ContactMe {
  phone: string;
  email: string;
  social_media: Socials;
  location: string;
}

export interface Portfolio {
  bio: string;
  bio_title: string;
  hero_image: string;
  hero_title: string;
  profile_image: string;
  theme: Theme;
  layout: string[];
  projects: MyProjects[];
  contact_me: ContactMe;
  work_history: WorkExperience[];
}
// TODO CHANGE COLORS NAME
export interface Theme {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  background_secondary: string;
}
export interface MyProjects {
  name: string;
  images: string[];
  description: string;
  github_url: string;
  app_url: string;
}
export interface WorkExperience {
  company_name: string;
  image: string;
  description: string;
  start_date: string;
  end_date: string;
  _id: string;
}
export interface Socials {
  github: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface CustomText {
  title: string;
  body: string;
}

export interface InfoAboutMe {
  bio: string;
  bio_title: string;
  hero_image: string;
  hero_title: string;
  profile_image: string;
}
