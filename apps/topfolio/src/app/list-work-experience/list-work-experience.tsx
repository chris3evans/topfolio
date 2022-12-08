import styles from './list-work-experience.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemWorkExperience from '../item-work-experience/item-work-experience';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { WorkExperience } from '@topfolio/api-interfaces';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import ItemWorkExperienceBlank from '../item-work-experience-blank/item-work-experience-blank';
import Grid from '@mui/material/Grid';
import { updateUser } from '../../utils/ApiService';
import { Alert, AlertColor, Snackbar } from '@mui/material';

/* eslint-disable-next-line */
export interface ListWorkExperienceProps {
  token: string;
}

export function ListWorkExperience(props: ListWorkExperienceProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const [editItemId, setEditItemId] = useState('');

  const [counter, setCounter] = useState<number>(0)

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
    console.log(userDetails.portfolio.work_history, "userDetails.portfolio.work_history")
    if (userDetails.portfolio.work_history && props.token && counter > 0) {
      updateUser(userDetails, props.token).then((response) => {
        if (response.error === '') {
          showToast('success', 'Settings were successfully changed!');
        }
        else { showToast('error', response.error); }

      }).catch(error => { showToast('error', error) });
    }
    setCounter(counter + 1)

  }, [userDetails.portfolio.work_history, props.token]);

  return (
    <Box className={styles['container']}>
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={toast.status as AlertColor} sx={{ width: '100%', fontSize: '20px' }}>
          {toast.message}
        </Alert>
      </Snackbar>


      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} >
          <ItemWorkExperienceBlank token={props.token}></ItemWorkExperienceBlank>
        </Grid>
        {userDetails ? userDetails.portfolio.work_history.map((WorkExperience: WorkExperience) => (
          <Grid item xs={12} sm={6} md={4} key={WorkExperience.company_name}>
            <ItemWorkExperience
              WorkExperience={WorkExperience}
              token={props.token}
            ></ItemWorkExperience>
          </Grid>
        )) : ""}
      </Grid>
    </Box>
    // <Box className={styles['container']}>
    //   <List>
    //     {userDetails
    //       ? userDetails.portfolio.work_history.map(
    //           (workExperience: WorkExperience) => {
    //             return editItemId === workExperience._id ? (
    //               <FormWorkExperience
    //                 existingData={workExperience}
    //                 token={props.token}
    //                 listener={setEditItemId}
    //                 key={workExperience.company_name}
    //               ></FormWorkExperience>
    //             ) : (
    //               <ItemWorkExperience
    //                 workXp={workExperience}
    //                 listener={setEditItemId}
    //                 company_name={workExperience.company_name}
    //                 key={`${workExperience._id} + ${Math.random()}`}
    //               ></ItemWorkExperience>
    //             );
    //           }
    //         )
    //       : ''}
    //     <FormWorkExperience
    //       existingData={null}
    //       token={props.token}
    //       listener={setEditItemId}
    //       key={null}
    //     ></FormWorkExperience>
    //   </List>
    // </Box>
  );
}

export default ListWorkExperience;
