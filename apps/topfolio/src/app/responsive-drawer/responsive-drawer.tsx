import DashBoardNavigation from '../dash-board-navigation/dash-board-navigation';
import FormContainer from '../form-container/form-container';
import { useState, useContext } from 'react';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Drawer } from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { UserContext } from '../../utils/UserContext';

/* eslint-disable-next-line */
export interface ResponsiveDrawerProps {
  section: string;
  token: string;
}

// NOTE: the component's structure below was modified from the original documentation provided which can be found at: https://mui.com/material-ui/react-drawer/#responsive-drawer

const drawerWidth = 240;

export function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const [mobileOpen, setMobileOpen] = useState(false);

  const preview = () => {
    window.open('/' + userDetails?.slug_url + '-portfolio', '_blank');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#151619',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ fontSize: '40px', color: 'white' }} />
          </IconButton>
          <div></div>
          <Button
            sx={{ fontSize: '1.4rem' }}
            variant="contained"
            onClick={preview}
          >
            Preview your Portfolio
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#151619',
              borderRight: '1px solid #6C6C6D',
              paddingTop: '1rem',
            },
          }}
        >
          <DashBoardNavigation></DashBoardNavigation>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <DashBoardNavigation></DashBoardNavigation>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: '2rem',
        }}
      >
        <FormContainer
          sectionName={props.section}
          token={props.token}
        ></FormContainer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
