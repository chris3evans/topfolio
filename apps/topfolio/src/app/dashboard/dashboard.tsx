import styles from './dashboard.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../../utils/ApiService';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { Link, useParams } from 'react-router-dom';
import { User } from '@topfolio/api-interfaces';

export interface DashboardProps { }

export function Dashboard(props: DashboardProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (user) registerUser();
  }, [user]);

  const registerUser = async () => {
    const accessToken = await getAccessTokenSilently();
    const response = await postUser(
      {
        slug_url: 'my-portfolio-page',
        name: 'test name',
      },
      accessToken
    );
    setUser(response.data as User);
  };

  return (
    <div className={styles['container']}>
      <h1>Welcome to Dashboard!</h1>
      {/* {JSON.stringify(user)} */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;
