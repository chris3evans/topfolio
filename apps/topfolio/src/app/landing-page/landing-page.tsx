import { LoginButton } from '../../utils/auth0/login-button';
import Footer from '../footer/footer';
import styles from './landing-page.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import { useAuth0 } from '@auth0/auth0-react';

/* eslint-disable-next-line */
export interface LandingPageProps {}

export function LandingPage(props: LandingPageProps) {
  //const { user, getAccessTokenSilently } = useAuth0();
  const { userDetails, setUser } = useContext(UserContext);

  //useEffect(() => {
  console.log(userDetails);
  //}, []);

  return (
    <div className={styles['container']}>
      <div className={styles['hero']}>
        <h1>Create a professional Portfolio</h1>
        <h2>Easy to create unique portfolios,free and simple.</h2>
        <LoginButton />
      </div>
      <Footer viewMode={false} />
    </div>
  );
}

export default LandingPage;
