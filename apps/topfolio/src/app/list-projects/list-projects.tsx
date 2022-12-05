import styles from './list-projects.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemProjects from '../item-projects/item-projects';
import Box from '@mui/material/Box';
import { MyProjects } from '@topfolio/api-interfaces';
import ItemProjectsBlank from '../item-projects-blank/item-projects-blank';
import Grid from '@mui/material/Grid';
import { updateUser } from '../../utils/ApiService';
import { Alert, AlertColor, Snackbar } from '@mui/material';
/* eslint-disable-next-line */
export interface ListProjectsProps {
  token: string
}
//This is the top level of the project form
export function ListProjects(props: ListProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const [toast, setToast] = useState({ open: false, status: 'success', message: '' });

  const showToast = (status: string, msg: string) => {
    setToast({ open: true, status, message: msg });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setToast({ open: false, status: 'success', message: '' });
  };

  useEffect(() => {
    if (userDetails && props.token) {
      updateUser(userDetails, props.token).then((response) => {
        if (response.error === '') {
          showToast('success', 'Settings were successfully changed!');
        }
        else showToast('error', response.error);
      });
    }
  }, [userDetails, props.token]);


  return (
    <Box className={styles['container']}>
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={toast.status as AlertColor} sx={{ width: '100%', fontSize: '20px' }}>
          {toast.message}
        </Alert>
      </Snackbar>


      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={"GridItems"}>
        <Grid item xs={12} sm={6} md={4} >
          <ItemProjectsBlank token={props.token}></ItemProjectsBlank>
        </Grid>
        {userDetails ? userDetails.portfolio.projects.map((project: MyProjects, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={project.name}>
            <ItemProjects
              project={project}
              token={props.token}
            ></ItemProjects>
          </Grid>
        )) : ""}
      </Grid>
    </Box>



  );
}

export default ListProjects;
