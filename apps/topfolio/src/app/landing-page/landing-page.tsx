import { LoginButton } from '../../utils/auth0/login-button';
import Footer from '../footer/footer';
import styles from './landing-page.module.css';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
        <div className={styles['logo']}>
          <img src="../../assets/logoTF.png" alt="Topfolio logo" />
        </div>
        <h1>Create a professional Portfolio</h1>
        <h2>Easy to create unique portfolios,free and simple.</h2>
        <LoginButton />
      </div>
      <Footer viewMode={false} />
    </div>
  );
}

export default LandingPage;
