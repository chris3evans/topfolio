import styles from './dash-board-page.module.css';
import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';
import FormContainer from '../form-container/form-container';
import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../../utils/ApiService';
import { User } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface DashBoardPageProps { }

export function DashBoardPage(props: DashBoardPageProps) {
  const [token, setToken] = useState('');
  const { userDetails, setUser } = useContext(UserContext);

  const { user, getAccessTokenSilently } = useAuth0();

  let { section } = useParams<{ section: string }>();

  useEffect(() => {
    if (user) registerUser();
  }, [user]);

  const registerUser = async () => {
    const accessToken = await getAccessTokenSilently();
    console.log(accessToken)
    const response = await postUser(
      {
        slug_url: user?.nickname,
        name: user?.name,
      },
      accessToken
    );
    console.log('API RESPONSE:', response);
    setUser(response.data as User);
    setToken(accessToken);
  };

  return (
    <div className={styles['dashboardPage']}>
      <DashBoardNavigation></DashBoardNavigation>
      <FormContainer sectionName={section} token={token}></FormContainer>
    </div>
  );
}

export default DashBoardPage;
