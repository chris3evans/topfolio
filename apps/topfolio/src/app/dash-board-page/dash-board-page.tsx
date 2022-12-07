import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../../utils/ApiService';
import { User } from '@topfolio/api-interfaces';
import { useMediaQuery } from '@mui/material';
import PersistantDrawer from '../persistant-drawer/persistant-drawer';
import ResponsiveDrawer from '../responsive-drawer/responsive-drawer';
import muiStyles from './styles-dash-board-page';

// NOTE: the component's structure below was modified from the original documentation which can be found at: https://mui.com/material-ui/react-drawer/#responsive-drawer

/* eslint-disable-next-line */
export interface DashBoardPageProps {}

const DashboardPageDrawerNavigation = function () {
  const [token, setToken] = useState('');
  const { userDetails, setUser } = useContext(UserContext);
  const preview = () => {
    window.open('/' + userDetails?.slug_url + '-portfolio', '_blank');
  };

  const { user, getAccessTokenSilently } = useAuth0();

  let { section } = useParams<{ section: string }>();

  useEffect(() => {
    if (user) registerUser();
  }, [user]);

  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  const registerUser = async () => {
    const accessToken = await getAccessTokenSilently();
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
    <>
      {mediaQuery600 ? (
        <ResponsiveDrawer token={token} section={section}></ResponsiveDrawer>
      ) : (
        <PersistantDrawer token={token} section={section}></PersistantDrawer>
      )}
    </>
  );
};

export default DashboardPageDrawerNavigation;
