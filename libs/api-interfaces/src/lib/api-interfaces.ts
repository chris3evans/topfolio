export interface User {
  _id: string;
  userId: string;
  slug_url: string;
  name: string;
  portfolio: Portfolio;
}
export interface Portfolio {
  bio: string;
  hero_image: string;
  profile_image: string;
  theme: Theme;
  layout: string[];
  projects: Project[];
  work_history: Works[];
  social_media: Socials;
}
// TODO CHANGE COLORS NAME
export interface Theme {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
}
export interface Project {
  name: string;
  images: string[];
  description: string;
  github_url: string;
  app_url: string;
}
export interface Works {
  company_name: string;
  image: string;
  description: string;
  start_date: Date;
  end_date: Date;
}
export interface Socials {
  github: string;
  facebook: string;
  linkedin: string;
}
