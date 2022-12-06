import styles from './dash-board-page.module.css';
import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';
import FormContainer from '../form-container/form-container';
import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../../utils/ApiService';
import { User } from '@topfolio/api-interfaces';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box, Button } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material';
import { Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// NOTE: the component's structure below was modified from the original which can be found at: https://mui.com/material-ui/react-drawer/#responsive-drawer

/* eslint-disable-next-line */
export interface DashBoardPageProps { }

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DashboardPageDrawerNavigation = function () {
  const [token, setToken] = useState('');
  const { userDetails, setUser } = useContext(UserContext);
  const preview = () => {
    window.open(
      '/' + userDetails?.slug_url + '-portfolio',
      '_blank'
    );
  };

  const { user, getAccessTokenSilently } = useAuth0();

  let { section } = useParams<{ section: string }>();

  useEffect(() => {
    if (user) registerUser();
  }, [user]);

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

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: '#151619',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div><img className={styles['headerLogo']} src="https://i.ibb.co/N3J0xJG/Untitled-150-150-px.png"></img></div>
          <Button
            sx={{ fontSize: '1.4rem' }}
            onClick={preview}
            variant="contained"
          >
            Preview your Portfolio
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#151619',
            borderRight: '1px solid #6C6C6D'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon
                sx={{
                  fill: 'white',
                  fontSize: '2rem',
                }}
              />
            ) : (
              <ChevronRightIcon
                sx={{
                  fill: 'white',
                  fontSize: '2rem',
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <DashBoardNavigation></DashBoardNavigation>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <FormContainer sectionName={section} token={token}></FormContainer>
      </Main>
    </Box>
  );
};

export default DashboardPageDrawerNavigation;
