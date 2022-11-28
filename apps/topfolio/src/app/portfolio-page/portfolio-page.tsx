import { User ,Portfolio ,Theme, Socials } from '@topfolio/api-interfaces';
import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';

/* eslint-disable-next-line */
export interface PortfolioPageProps {}
const mockUserState : User = {
  _id: '1',
  userId: '2',
  slug_url: '',
  name: 'Marco',
  portfolio: {
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
  ,
  hero_image: '../.././assets/hero.jpg',
  profile_image: '../../assets/profile-img.jpg',
  theme: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  },
  layout: [],
  projects: [{name:"topfolio",images:[''],description:'cool app',github_url:'https://github.com/chris3evans/topfolio',app_url:''}],
  work_history: [{company_name:'google',image:'',description:'engineer',start_date: new Date, end_date: new Date}],
  social_media:{ github: 'https://github.com/',linkedin :'https://www.linkedin.com/',facebook:'https://en-gb.facebook.com/'}
}
}

export function PortfolioPage(props: PortfolioPageProps) {


  return (
    <div className={styles['body']}>
      <HeroComponent user={mockUserState} />
      <SectionsComponent user={mockUserState} />
      <Footer github={mockUserState.portfolio.social_media.github} facebook={mockUserState.portfolio.social_media.facebook}linkedin={mockUserState.portfolio.social_media.linkedin}/>
      {/* TODO MAKE THIS WORK WITH REAL USER */}
    </div>
  );
}

export default PortfolioPage;
