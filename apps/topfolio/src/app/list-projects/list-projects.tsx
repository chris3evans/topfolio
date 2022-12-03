import styles from './list-projects.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemProjects from '../item-projects/item-projects';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { MyProjects } from '@topfolio/api-interfaces';
import FormProjects from '../form-projects/form-projects';
/* eslint-disable-next-line */
export interface ListProjectsProps {
  token: string
}

export function ListProjects(props: ListProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [editItemId, setEditItemId] = useState('');
  return (
    <Box className={styles['container']}>
      <List>
        {userDetails ?
          userDetails.portfolio.projects.map(
            (project: MyProjects) => {
              return editItemId === project._id ? (
                <FormProjects
                  existingData={project}
                  token={props.token}
                  listener={setEditItemId}
                  key={project.name}
                ></FormProjects>
              ) : (
                <ItemProjects
                  project={project}
                  listener={setEditItemId}
                  key={`${project._id} + ${Math.random()}`}
                ></ItemProjects>
              );
            }
          ) : ''
        }
        <FormProjects
          existingData={null}
          token={props.token}
          listener={null}
          key={null}
        ></FormProjects>
      </List>
    </Box>
  );
}

export default ListProjects;
