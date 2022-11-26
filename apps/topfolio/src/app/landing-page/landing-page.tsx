import { Button } from '@mui/material';
import Footer from '../footer/footer';
import styles from './landing-page.module.css';
import { LoginButton } from '../../utils/auth0/login-button';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
        <h1>Create a professional Portfolio</h1>
        <h2>Easy to create unique portfolios ,free and simple</h2>
        <LoginButton />
      </div>
      <Footer github="" facebook="" linkedin="" />
    </div>
  );
}

export default LandingPage;
