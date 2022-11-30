import styles from './list-work-experience.module.css';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemWorkExperience from '../item-work-experience/item-work-experience';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { WorkExperience } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface ListWorkExperienceProps {}

export function ListWorkExperience(props: ListWorkExperienceProps) {
  const userContext = useContext(UserContext);

  return (
    <Box className={styles['container']}>
      <List>
        {
          /* @ts-ignore */
          userContext.userDetails.portfolio.work_history.map(
            (workExperience: WorkExperience) => {
              return (
                <ItemWorkExperience
                  workXp={workExperience}
                ></ItemWorkExperience>
              );
            }
          )
        }
      </List>
    </Box>
  );
}

export default ListWorkExperience;
