import styles from './list-work-experience.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemWorkExperience from '../item-work-experience/item-work-experience';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { WorkExperience } from '@topfolio/api-interfaces';
import FormWorkExperience from '../form-work-experience/form-work-experience';

/* eslint-disable-next-line */
export interface ListWorkExperienceProps {
  token: string;
}

export function ListWorkExperience(props: ListWorkExperienceProps) {
  const userContext = useContext(UserContext);

  const [editItemId, setEditItemId] = useState('');

  return (
    <Box className={styles['container']}>
      <List>
        {
          /* @ts-ignore */
          userContext.userDetails.portfolio.work_history.map(
            (workExperience: WorkExperience) => {
              return editItemId === workExperience._id ? (
                <FormWorkExperience
                  existingData={workExperience}
                  token={props.token}
                  listener={setEditItemId}
                  key={workExperience._id}
                ></FormWorkExperience>
              ) : (
                <ItemWorkExperience
                  workXp={workExperience}
                  listener={setEditItemId}
                  key={`${workExperience._id} + ${Math.random()}`}
                ></ItemWorkExperience>
              );
            }
          )
        }
        <FormWorkExperience
          existingData={null}
          token={props.token}
          listener={setEditItemId}
          key={null}
        ></FormWorkExperience>
      </List>
    </Box>
  );
}

export default ListWorkExperience;